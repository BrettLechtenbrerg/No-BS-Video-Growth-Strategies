import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    let databaseStatus = "unavailable"
    
    // Test database connection if available
    if (prisma) {
      try {
        await prisma.$queryRaw`SELECT 1`
        databaseStatus = "connected"
      } catch (dbError) {
        databaseStatus = "disconnected"
      }
    }

    return NextResponse.json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      database: databaseStatus,
    })
  } catch (error) {
    return NextResponse.json({
      status: "unhealthy",
      timestamp: new Date().toISOString(),
      database: "error",
      error: error instanceof Error ? error.message : "Unknown error",
    }, { status: 500 })
  }
}
