import { NextRequest } from "next/server"
import { z } from "zod"
import { prisma } from "@/lib/prisma"
import { apiSuccess, apiError, validateRequest } from "@/lib/api-utils"

const AnalyticsEventSchema = z.object({
  id: z.string(),
  event: z.string(),
  properties: z.record(z.any()).optional(),
  timestamp: z.number(),
  sessionId: z.string(),
  userId: z.string().optional(),
  url: z.string(),
  userAgent: z.string(),
})

const BatchAnalyticsSchema = z.object({
  events: z.array(AnalyticsEventSchema).max(50), // Limit batch size
})

export async function POST(request: NextRequest) {
  try {
    // Validate request body
    const validation = await validateRequest(request, BatchAnalyticsSchema)
    if (!validation.success) {
      return apiError(validation.error, 400)
    }

    const { events } = validation.data

    // Process events in batches
    const processedEvents = await Promise.allSettled(
      events.map(async (event) => {
        try {
          // Ensure session exists or create it
          await ensureSessionExists(event.sessionId, event.userId, event.userAgent, event.url)

          // Store the event
          return await prisma.analyticsEvent.create({
            data: {
              id: event.id,
              event: event.event,
              properties: event.properties ? JSON.stringify(event.properties) : null,
              sessionId: event.sessionId,
              userId: event.userId,
              url: event.url,
              userAgent: event.userAgent,
              timestamp: new Date(event.timestamp),
            },
          })
        } catch (error) {
          console.error("Failed to process event:", error)
          throw error
        }
      })
    )

    // Count successful and failed events
    const successCount = processedEvents.filter(result => result.status === "fulfilled").length
    const failureCount = processedEvents.filter(result => result.status === "rejected").length

    // Update session statistics
    await updateSessionStatistics(events)

    return apiSuccess({
      processed: successCount,
      failed: failureCount,
      total: events.length,
    }, `Successfully processed ${successCount}/${events.length} events`)

  } catch (error) {
    console.error("Analytics API error:", error)
    return apiError("Failed to process analytics events", 500)
  }
}

async function ensureSessionExists(sessionId: string, userId?: string, userAgent?: string, url?: string) {
  try {
    // Check if session already exists
    const existingSession = await prisma.analyticsSession.findUnique({
      where: { sessionId }
    })

    if (!existingSession) {
      // Extract referrer from URL if possible
      let referrer: string | undefined
      try {
        const urlObj = new URL(url || "")
        referrer = urlObj.searchParams.get("ref") || urlObj.searchParams.get("referrer") || undefined
      } catch {
        // Invalid URL, ignore
      }

      // Create new session
      await prisma.analyticsSession.create({
        data: {
          sessionId,
          userId,
          userAgent,
          referrer,
          pageViews: 0,
          totalEvents: 0,
        },
      })
    } else if (userId && !existingSession.userId) {
      // Update session with userId if it wasn't set before
      await prisma.analyticsSession.update({
        where: { sessionId },
        data: { userId },
      })
    }
  } catch (error) {
    console.error("Failed to ensure session exists:", error)
    // Don't throw - session creation is not critical for event storage
  }
}

async function updateSessionStatistics(events: any[]) {
  try {
    // Group events by session
    const sessionGroups = events.reduce((acc, event) => {
      if (!acc[event.sessionId]) {
        acc[event.sessionId] = { pageViews: 0, totalEvents: 0 }
      }
      
      acc[event.sessionId].totalEvents++
      
      if (event.event === "page_view") {
        acc[event.sessionId].pageViews++
      }
      
      return acc
    }, {} as Record<string, { pageViews: number; totalEvents: number }>)

    // Update each session's statistics
    await Promise.allSettled(
      Object.entries(sessionGroups).map(async ([sessionId, stats]) => {
        const sessionStats = stats as { pageViews: number; totalEvents: number }
        await prisma.analyticsSession.update({
          where: { sessionId },
          data: {
            pageViews: { increment: sessionStats.pageViews },
            totalEvents: { increment: sessionStats.totalEvents },
            endTime: new Date(), // Update end time to track session activity
          },
        })
      })
    )
  } catch (error) {
    console.error("Failed to update session statistics:", error)
    // Don't throw - statistics updates are not critical
  }
}

// OPTIONS handler for CORS preflight
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}