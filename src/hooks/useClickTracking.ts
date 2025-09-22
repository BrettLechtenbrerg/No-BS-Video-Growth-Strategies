import { useCallback, useRef } from "react"
import { trackClick as analyticsTrackClick } from "@/lib/analytics"

interface ClickTrackingOptions {
  enabled?: boolean
  includePosition?: boolean
  debounceMs?: number
}

interface ClickHandler {
  (event: React.MouseEvent): void
}

export function useClickTracking(options: ClickTrackingOptions = {}) {
  const {
    enabled = true,
    includePosition = true,
    debounceMs = 300,
  } = options

  const lastClickTime = useRef<number>(0)

  const trackClick = useCallback((
    buttonText: string,
    buttonId?: string,
    elementType: string = "button"
  ): ClickHandler => {
    return (event: React.MouseEvent) => {
      if (!enabled) return

      const now = Date.now()
      
      // Debounce rapid clicks
      if (now - lastClickTime.current < debounceMs) {
        return
      }
      lastClickTime.current = now

      // Get click position if enabled
      const position = includePosition ? {
        x: event.clientX,
        y: event.clientY,
      } : undefined

      // Extract additional context from the event
      const target = event.currentTarget as HTMLElement
      const actualButtonText = buttonText || target.textContent?.trim() || target.getAttribute("aria-label") || "Unknown"
      const actualButtonId = buttonId || target.id || undefined
      const actualElementType = elementType || target.tagName.toLowerCase()

      analyticsTrackClick(actualButtonText, actualButtonId, actualElementType, position)
    }
  }, [enabled, includePosition, debounceMs])

  return { trackClick }
}

// Wrapper hook for common button tracking scenarios
export function useButtonTracking(buttonText: string, buttonId?: string, options?: ClickTrackingOptions) {
  const { trackClick } = useClickTracking(options)
  
  return trackClick(buttonText, buttonId, "button")
}

// Hook for tracking link clicks
export function useLinkTracking(linkText: string, linkUrl?: string, options?: ClickTrackingOptions) {
  const { trackClick } = useClickTracking(options)
  
  return useCallback((event: React.MouseEvent) => {
    const handler = trackClick(linkText, linkUrl, "link")
    handler(event)
    
    // For external links, add a small delay to ensure analytics is sent
    const target = event.currentTarget as HTMLAnchorElement
    const href = target.href
    
    if (href && href.startsWith("http") && !href.includes(window.location.hostname)) {
      event.preventDefault()
      
      // Send analytics and navigate after a short delay
      setTimeout(() => {
        window.open(href, target.target || "_self")
      }, 100)
    }
  }, [trackClick, linkText, linkUrl])
}

// Hook for tracking form submissions
export function useFormTracking(formName: string, options?: ClickTrackingOptions) {
  const { trackClick } = useClickTracking(options)
  
  return useCallback((event: React.FormEvent) => {
    const form = event.currentTarget as HTMLFormElement
    const submitButton = form.querySelector('[type="submit"]') as HTMLElement
    const buttonText = submitButton?.textContent?.trim() || "Submit"
    
    const handler = trackClick(buttonText, formName, "form")
    // Convert FormEvent to MouseEvent-like structure for compatibility
    const mockMouseEvent = {
      currentTarget: event.currentTarget,
      clientX: 0,
      clientY: 0,
    } as React.MouseEvent
    
    handler(mockMouseEvent)
  }, [trackClick, formName])
}

// Hook for tracking CTA (Call-to-Action) clicks with enhanced context
export function useCTATracking(ctaText: string, ctaType: string, ctaContext?: string, options?: ClickTrackingOptions) {
  const { trackClick } = useClickTracking({
    ...options,
    includePosition: true, // Always include position for CTAs
  })
  
  return useCallback((event: React.MouseEvent) => {
    const handler = trackClick(ctaText, ctaContext, "cta")
    handler(event)
    
    // Track additional CTA-specific analytics
    analyticsTrackClick(
      ctaText,
      ctaContext,
      "cta",
      {
        x: event.clientX,
        y: event.clientY,
      }
    )
  }, [trackClick, ctaText, ctaContext])
}

// Utility function to automatically track clicks on elements with data attributes
export function useAutoClickTracking(options?: ClickTrackingOptions) {
  const { trackClick } = useClickTracking(options)
  
  return useCallback((event: React.MouseEvent) => {
    const element = event.currentTarget as HTMLElement
    
    // Check for data attributes
    const trackingText = element.getAttribute("data-track-text") || element.textContent?.trim() || "Unknown"
    const trackingId = element.getAttribute("data-track-id") || element.id || undefined
    const trackingType = element.getAttribute("data-track-type") || element.tagName.toLowerCase()
    
    const handler = trackClick(trackingText, trackingId, trackingType)
    handler(event)
  }, [trackClick])
}