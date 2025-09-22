"use client"

import { ReactElement, cloneElement } from "react"
import { useButtonTracking, useLinkTracking, useCTATracking } from "@/hooks/useClickTracking"

interface TrackingWrapperProps {
  children: ReactElement
  trackingText: string
  trackingId?: string
  trackingType?: "button" | "link" | "cta"
  ctaContext?: string
  enabled?: boolean
}

export function TrackingWrapper({ 
  children, 
  trackingText, 
  trackingId, 
  trackingType = "button",
  ctaContext,
  enabled = true 
}: TrackingWrapperProps) {
  const buttonHandler = useButtonTracking(trackingText, trackingId, { enabled })
  const linkHandler = useLinkTracking(trackingText, trackingId, { enabled })
  const ctaHandler = useCTATracking(trackingText, trackingType, ctaContext, { enabled })

  if (!enabled) {
    return children
  }

  const getClickHandler = () => {
    switch (trackingType) {
      case "link":
        return linkHandler
      case "cta":
        return ctaHandler
      default:
        return buttonHandler
    }
  }

  const clickHandler = getClickHandler()

  // Clone the child element and add the click handler
  return cloneElement(children, {
    onClick: (event: React.MouseEvent) => {
      // Call the original onClick if it exists
      if (children.props.onClick) {
        children.props.onClick(event)
      }
      
      // Add our tracking
      clickHandler(event)
    },
  })
}

// Convenience components for common tracking scenarios
interface TrackButtonProps {
  children: ReactElement
  text: string
  id?: string
  enabled?: boolean
}

export function TrackButton({ children, text, id, enabled = true }: TrackButtonProps) {
  return (
    <TrackingWrapper 
      trackingText={text} 
      trackingId={id} 
      trackingType="button"
      enabled={enabled}
    >
      {children}
    </TrackingWrapper>
  )
}

interface TrackLinkProps {
  children: ReactElement
  text: string
  url?: string
  enabled?: boolean
}

export function TrackLink({ children, text, url, enabled = true }: TrackLinkProps) {
  return (
    <TrackingWrapper 
      trackingText={text} 
      trackingId={url} 
      trackingType="link"
      enabled={enabled}
    >
      {children}
    </TrackingWrapper>
  )
}

interface TrackCTAProps {
  children: ReactElement
  text: string
  context?: string
  enabled?: boolean
}

export function TrackCTA({ children, text, context, enabled = true }: TrackCTAProps) {
  return (
    <TrackingWrapper 
      trackingText={text} 
      trackingType="cta"
      ctaContext={context}
      enabled={enabled}
    >
      {children}
    </TrackingWrapper>
  )
}