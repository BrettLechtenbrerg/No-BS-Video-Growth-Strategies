import { nanoid } from "nanoid"

export interface AnalyticsEvent {
  id: string
  event: string
  properties?: Record<string, any>
  timestamp: number
  sessionId: string
  userId?: string
  url: string
  userAgent: string
}

export interface PageViewEvent extends AnalyticsEvent {
  event: "page_view"
  properties: {
    title: string
    referrer: string
    path: string
  }
}

export interface ScrollEvent extends AnalyticsEvent {
  event: "scroll_depth"
  properties: {
    depth: number
    maxDepth: number
    timeOnPage: number
  }
}

export interface ClickEvent extends AnalyticsEvent {
  event: "button_click"
  properties: {
    buttonText: string
    buttonId?: string
    elementType: string
    position: { x: number; y: number }
  }
}

export interface CustomEvent extends AnalyticsEvent {
  event: string
  properties?: Record<string, any>
}

class AnalyticsManager {
  private sessionId: string
  private userId?: string
  private queue: AnalyticsEvent[] = []
  private isEnabled: boolean = true
  private batchSize: number = 10
  private flushInterval: number = 5000 // 5 seconds
  private flushTimer?: NodeJS.Timeout

  constructor() {
    this.sessionId = this.getOrCreateSessionId()
    this.userId = this.getUserId()
    this.startBatchFlush()
  }

  private getOrCreateSessionId(): string {
    if (typeof window === "undefined") return nanoid()
    
    const existing = sessionStorage.getItem("analytics_session_id")
    if (existing) return existing
    
    const newSessionId = nanoid()
    sessionStorage.setItem("analytics_session_id", newSessionId)
    return newSessionId
  }

  private getUserId(): string | undefined {
    if (typeof window === "undefined") return undefined
    return localStorage.getItem("analytics_user_id") || undefined
  }

  private setUserId(userId: string): void {
    this.userId = userId
    if (typeof window !== "undefined") {
      localStorage.setItem("analytics_user_id", userId)
    }
  }

  private startBatchFlush(): void {
    if (typeof window === "undefined") return
    
    this.flushTimer = setInterval(() => {
      if (this.queue.length > 0) {
        this.flush()
      }
    }, this.flushInterval)
  }

  private async flush(): Promise<void> {
    if (this.queue.length === 0 || !this.isEnabled) return

    const events = this.queue.splice(0, this.batchSize)
    
    try {
      await fetch("/api/analytics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ events }),
      })
    } catch (error) {
      console.warn("Failed to send analytics events:", error)
      // Re-add events to queue for retry (at the beginning)
      this.queue.unshift(...events)
    }
  }

  private createBaseEvent<T extends string>(event: T): Omit<AnalyticsEvent, "properties"> & { event: T } {
    return {
      id: nanoid(),
      event,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      userId: this.userId,
      url: typeof window !== "undefined" ? window.location.href : "",
      userAgent: typeof window !== "undefined" ? navigator.userAgent : "",
    }
  }

  public trackPageView(properties: PageViewEvent["properties"]): void {
    if (!this.isEnabled) return

    const event: PageViewEvent = {
      ...this.createBaseEvent("page_view"),
      properties,
    }

    this.queue.push(event)
    
    // Immediate flush for page views
    if (this.queue.length >= this.batchSize) {
      this.flush()
    }
  }

  public trackScrollDepth(depth: number, maxDepth: number, timeOnPage: number): void {
    if (!this.isEnabled) return

    const event: ScrollEvent = {
      ...this.createBaseEvent("scroll_depth"),
      properties: {
        depth,
        maxDepth,
        timeOnPage,
      },
    }

    this.queue.push(event)
  }

  public trackClick(buttonText: string, buttonId?: string, elementType: string = "button", position?: { x: number; y: number }): void {
    if (!this.isEnabled) return

    const event: ClickEvent = {
      ...this.createBaseEvent("button_click"),
      properties: {
        buttonText,
        buttonId,
        elementType,
        position: position || { x: 0, y: 0 },
      },
    }

    this.queue.push(event)
  }

  public trackCustomEvent(event: string, properties?: Record<string, any>): void {
    if (!this.isEnabled) return

    const analyticsEvent: CustomEvent = {
      ...this.createBaseEvent(event),
      properties,
    }

    this.queue.push(analyticsEvent)
  }

  public identify(userId: string): void {
    this.setUserId(userId)
  }

  public disable(): void {
    this.isEnabled = false
    if (this.flushTimer) {
      clearInterval(this.flushTimer)
    }
  }

  public enable(): void {
    this.isEnabled = true
    this.startBatchFlush()
  }

  public async forceFlush(): Promise<void> {
    await this.flush()
  }

  public getQueueSize(): number {
    return this.queue.length
  }
}

// Singleton instance
let analyticsInstance: AnalyticsManager | null = null

export function getAnalytics(): AnalyticsManager {
  if (!analyticsInstance) {
    analyticsInstance = new AnalyticsManager()
  }
  return analyticsInstance
}

// Convenience functions
export function trackPageView(title: string, path: string, referrer: string = ""): void {
  getAnalytics().trackPageView({ title, path, referrer })
}

export function trackScrollDepth(depth: number, maxDepth: number, timeOnPage: number): void {
  getAnalytics().trackScrollDepth(depth, maxDepth, timeOnPage)
}

export function trackClick(buttonText: string, buttonId?: string, elementType?: string, position?: { x: number; y: number }): void {
  getAnalytics().trackClick(buttonText, buttonId, elementType, position)
}

export function trackCustomEvent(event: string, properties?: Record<string, any>): void {
  getAnalytics().trackCustomEvent(event, properties)
}

export function identifyUser(userId: string): void {
  getAnalytics().identify(userId)
}