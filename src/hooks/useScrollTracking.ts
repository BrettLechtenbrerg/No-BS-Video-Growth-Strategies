import { useEffect, useRef, useState } from "react"
import { trackScrollDepth } from "@/lib/analytics"

interface UseScrollTrackingOptions {
  thresholds?: number[] // Percentage thresholds to track (e.g., [25, 50, 75, 90])
  throttleMs?: number // Throttle scroll events (default: 250ms)
  enabled?: boolean // Enable/disable tracking (default: true)
}

interface ScrollTrackingState {
  scrollDepth: number
  maxScrollDepth: number
  timeOnPage: number
  hasReachedEnd: boolean
}

export function useScrollTracking(options: UseScrollTrackingOptions = {}): ScrollTrackingState {
  const {
    thresholds = [25, 50, 75, 90, 100],
    throttleMs = 250,
    enabled = true,
  } = options

  const [scrollDepth, setScrollDepth] = useState(0)
  const [maxScrollDepth, setMaxScrollDepth] = useState(0)
  const [timeOnPage, setTimeOnPage] = useState(0)
  const [hasReachedEnd, setHasReachedEnd] = useState(false)

  const startTime = useRef<number>(Date.now())
  const trackedThresholds = useRef<Set<number>>(new Set())
  const throttleTimer = useRef<NodeJS.Timeout | null>(null)
  const lastScrollTime = useRef<number>(0)

  useEffect(() => {
    if (!enabled) return

    // Reset start time when component mounts
    startTime.current = Date.now()
    trackedThresholds.current.clear()

    const calculateScrollDepth = (): number => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      // Calculate scroll percentage
      const scrollableHeight = documentHeight - windowHeight
      if (scrollableHeight <= 0) return 100

      return Math.min(100, Math.round((scrollTop / scrollableHeight) * 100))
    }

    const updateTimeOnPage = (): number => {
      return Date.now() - startTime.current
    }

    const handleScroll = (): void => {
      const now = Date.now()
      
      // Throttle scroll events
      if (throttleTimer.current) {
        clearTimeout(throttleTimer.current)
      }

      throttleTimer.current = setTimeout(() => {
        const currentDepth = calculateScrollDepth()
        const currentTime = updateTimeOnPage()

        setScrollDepth(currentDepth)
        setTimeOnPage(currentTime)

        // Update max scroll depth
        setMaxScrollDepth(prev => {
          const newMax = Math.max(prev, currentDepth)
          
          // Track threshold crossings
          thresholds.forEach(threshold => {
            if (newMax >= threshold && !trackedThresholds.current.has(threshold)) {
              trackedThresholds.current.add(threshold)
              trackScrollDepth(threshold, newMax, currentTime)
              
              // Special handling for 100% scroll
              if (threshold === 100) {
                setHasReachedEnd(true)
              }
            }
          })

          return newMax
        })

        lastScrollTime.current = now
      }, throttleMs)
    }

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Initial calculation
    handleScroll()

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (throttleTimer.current) {
        clearTimeout(throttleTimer.current)
      }
    }
  }, [enabled, throttleMs, thresholds])

  // Track time on page updates periodically
  useEffect(() => {
    if (!enabled) return

    const timeUpdateInterval = setInterval(() => {
      setTimeOnPage(updateTimeOnPage())
    }, 1000) // Update every second

    return () => clearInterval(timeUpdateInterval)
  }, [enabled])

  // Send final analytics event when component unmounts
  useEffect(() => {
    return () => {
      if (enabled && maxScrollDepth > 0) {
        const finalTime = Date.now() - startTime.current
        trackScrollDepth(maxScrollDepth, maxScrollDepth, finalTime)
      }
    }
  }, [enabled, maxScrollDepth])

  const updateTimeOnPage = (): number => {
    return Date.now() - startTime.current
  }

  return {
    scrollDepth,
    maxScrollDepth,
    timeOnPage,
    hasReachedEnd,
  }
}

// Hook for tracking scroll to specific elements
export function useElementScrollTracking(elementRef: React.RefObject<HTMLElement>, elementName: string) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        
        const visible = entry.isIntersecting
        setIsVisible(visible)
        
        if (visible && !hasBeenVisible) {
          setHasBeenVisible(true)
          trackScrollDepth(100, 100, 0) // Track when specific element comes into view
        }
      },
      {
        threshold: 0.5, // Element is considered visible when 50% is in view
        rootMargin: "0px 0px -50px 0px" // Account for bottom margin
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [elementRef, elementName, hasBeenVisible])

  return { isVisible, hasBeenVisible }
}