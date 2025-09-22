import { NextRequest } from "next/server"
import { prisma } from "@/lib/prisma"
import { apiSuccess, apiError } from "@/lib/api-utils"

export async function GET(request: NextRequest) {
  try {
    // Get analytics summary
    const [
      totalEvents,
      totalSessions,
      pageViews,
      buttonClicks,
      scrollEvents,
      recentEvents
    ] = await Promise.all([
      // Total events count
      prisma.analyticsEvent.count(),
      
      // Total sessions count
      prisma.analyticsSession.count(),
      
      // Page view events
      prisma.analyticsEvent.count({
        where: { event: "page_view" }
      }),
      
      // Button click events
      prisma.analyticsEvent.count({
        where: { event: "button_click" }
      }),
      
      // Scroll depth events
      prisma.analyticsEvent.count({
        where: { event: "scroll_depth" }
      }),
      
      // Recent events (last 10)
      prisma.analyticsEvent.findMany({
        take: 10,
        orderBy: { timestamp: "desc" },
        select: {
          id: true,
          event: true,
          properties: true,
          timestamp: true,
          url: true
        }
      })
    ])

    // Get most clicked buttons
    const buttonClickData = await prisma.analyticsEvent.findMany({
      where: { event: "button_click" },
      select: { properties: true }
    })

    const buttonStats = buttonClickData.reduce((acc, event) => {
      if (event.properties) {
        try {
          const props = JSON.parse(event.properties)
          const buttonText = props.buttonText || "Unknown"
          acc[buttonText] = (acc[buttonText] || 0) + 1
        } catch {
          // Invalid JSON, skip
        }
      }
      return acc
    }, {} as Record<string, number>)

    // Get scroll depth analytics
    const scrollData = await prisma.analyticsEvent.findMany({
      where: { event: "scroll_depth" },
      select: { properties: true }
    })

    const scrollStats = scrollData.reduce((acc, event) => {
      if (event.properties) {
        try {
          const props = JSON.parse(event.properties)
          const depth = props.depth
          if (typeof depth === "number") {
            acc[depth] = (acc[depth] || 0) + 1
          }
        } catch {
          // Invalid JSON, skip
        }
      }
      return acc
    }, {} as Record<number, number>)

    // Parse recent events properties
    const parsedRecentEvents = recentEvents.map(event => ({
      ...event,
      properties: event.properties ? (() => {
        try {
          return JSON.parse(event.properties)
        } catch {
          return null
        }
      })() : null
    }))

    return apiSuccess({
      summary: {
        totalEvents,
        totalSessions,
        pageViews,
        buttonClicks,
        scrollEvents
      },
      buttonStats: Object.entries(buttonStats)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10)
        .reduce((acc, [button, count]) => ({ ...acc, [button]: count }), {}),
      scrollStats,
      recentEvents: parsedRecentEvents
    }, "Analytics dashboard data retrieved successfully")

  } catch (error) {
    console.error("Analytics dashboard error:", error)
    return apiError("Failed to fetch analytics data", 500)
  }
}

// Simple HTML dashboard for testing
export async function POST() {
  return new Response(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Analytics Dashboard</title>
      <style>
        body { font-family: system-ui, -apple-system, sans-serif; margin: 40px; }
        .card { background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px; }
        .stat { display: inline-block; margin: 10px 20px 10px 0; }
        .stat-value { font-size: 24px; font-weight: bold; color: #0066FF; }
        .stat-label { font-size: 14px; color: #666; }
        .event { padding: 8px; border-bottom: 1px solid #eee; font-size: 12px; }
        pre { background: #f5f5f5; padding: 10px; border-radius: 4px; overflow: auto; }
      </style>
    </head>
    <body>
      <h1>Analytics Dashboard</h1>
      <div id="dashboard">Loading...</div>
      
      <script>
        async function loadDashboard() {
          try {
            const response = await fetch('/api/analytics/dashboard');
            const data = await response.json();
            
            if (data.success) {
              const { summary, buttonStats, scrollStats, recentEvents } = data.data;
              
              document.getElementById('dashboard').innerHTML = \`
                <div class="card">
                  <h2>Summary</h2>
                  <div class="stat">
                    <div class="stat-value">\${summary.totalEvents}</div>
                    <div class="stat-label">Total Events</div>
                  </div>
                  <div class="stat">
                    <div class="stat-value">\${summary.totalSessions}</div>
                    <div class="stat-label">Sessions</div>
                  </div>
                  <div class="stat">
                    <div class="stat-value">\${summary.pageViews}</div>
                    <div class="stat-label">Page Views</div>
                  </div>
                  <div class="stat">
                    <div class="stat-value">\${summary.buttonClicks}</div>
                    <div class="stat-label">Button Clicks</div>
                  </div>
                  <div class="stat">
                    <div class="stat-value">\${summary.scrollEvents}</div>
                    <div class="stat-label">Scroll Events</div>
                  </div>
                </div>
                
                <div class="card">
                  <h2>Top Clicked Buttons</h2>
                  <pre>\${JSON.stringify(buttonStats, null, 2)}</pre>
                </div>
                
                <div class="card">
                  <h2>Scroll Depth Distribution</h2>
                  <pre>\${JSON.stringify(scrollStats, null, 2)}</pre>
                </div>
                
                <div class="card">
                  <h2>Recent Events</h2>
                  \${recentEvents.map(event => \`
                    <div class="event">
                      <strong>\${event.event}</strong> - \${new Date(event.timestamp).toLocaleString()}
                      <br>URL: \${event.url}
                      \${event.properties ? \`<br>Data: \${JSON.stringify(event.properties)}\` : ''}
                    </div>
                  \`).join('')}
                </div>
              \`;
            } else {
              document.getElementById('dashboard').innerHTML = '<p>Error loading dashboard: ' + data.error + '</p>';
            }
          } catch (error) {
            document.getElementById('dashboard').innerHTML = '<p>Error loading dashboard: ' + error.message + '</p>';
          }
        }
        
        loadDashboard();
        setInterval(loadDashboard, 10000); // Refresh every 10 seconds
      </script>
    </body>
    </html>
  `, {
    headers: { "Content-Type": "text/html" }
  })
}