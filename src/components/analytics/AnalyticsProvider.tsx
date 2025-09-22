"use client"

import { createContext, useContext, useEffect, ReactNode } from "react"
import { usePathname } from "next/navigation"
import { trackPageView, getAnalytics } from "@/lib/analytics"
import { useScrollTracking } from "@/hooks/useScrollTracking"

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void
  trackClick: (buttonText: string, buttonId?: string, elementType?: string) => void
  identify: (userId: string) => void
  disable: () => void
  enable: () => void
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null)

interface AnalyticsProviderProps {
  children: ReactNode
  enabled?: boolean
  debug?: boolean
}

export function AnalyticsProvider({ children, enabled = true, debug = false }: AnalyticsProviderProps) {
  const pathname = usePathname()

  // Initialize scroll tracking
  useScrollTracking({
    enabled,
    thresholds: [25, 50, 75, 90, 100],
    throttleMs: 250,
  })

  // Track page views on route changes
  useEffect(() => {
    if (!enabled) return

    const title = document.title
    const referrer = document.referrer
    
    if (debug) {
      console.log("Analytics: Page view tracked", { title, pathname, referrer })
    }
    
    trackPageView(title, pathname, referrer)
  }, [pathname, enabled, debug])

  // Flush analytics when page is about to unload
  useEffect(() => {
    if (!enabled) return

    const handleBeforeUnload = () => {
      const analytics = getAnalytics()
      analytics.forceFlush()
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        const analytics = getAnalytics()
        analytics.forceFlush()
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [enabled])

  const contextValue: AnalyticsContextType = {
    trackEvent: (event: string, properties?: Record<string, any>) => {
      if (!enabled) return
      
      if (debug) {
        console.log("Analytics: Custom event tracked", { event, properties })
      }
      
      getAnalytics().trackCustomEvent(event, properties)
    },
    
    trackClick: (buttonText: string, buttonId?: string, elementType?: string) => {
      if (!enabled) return
      
      if (debug) {
        console.log("Analytics: Click tracked", { buttonText, buttonId, elementType })
      }
      
      getAnalytics().trackClick(buttonText, buttonId, elementType)
    },
    
    identify: (userId: string) => {
      if (!enabled) return
      
      if (debug) {
        console.log("Analytics: User identified", { userId })
      }
      
      getAnalytics().identify(userId)
    },
    
    disable: () => {
      getAnalytics().disable()
      if (debug) {
        console.log("Analytics: Disabled")
      }
    },
    
    enable: () => {
      getAnalytics().enable()
      if (debug) {
        console.log("Analytics: Enabled")
      }
    },
  }

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export function useAnalytics(): AnalyticsContextType {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider")
  }
  return context
}

// Convenience hook for easy click tracking in components
export function useTrackClick() {
  const { trackClick } = useAnalytics()
  return trackClick
}

// Convenience hook for custom event tracking
export function useTrackEvent() {
  const { trackEvent } = useAnalytics()
  return trackEvent
}