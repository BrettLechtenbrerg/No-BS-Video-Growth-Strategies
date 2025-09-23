export async function track(eventType: string, metadata?: Record<string, any>) {
  try {
    await fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventType,
        metadata,
        timestamp: new Date().toISOString(),
      }),
    })
  } catch (error) {
    console.error('Failed to track event:', error)
  }
}