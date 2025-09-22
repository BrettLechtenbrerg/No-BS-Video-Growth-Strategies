"use client"

import React, { useState, useEffect } from "react"
import { CTAButton } from "./CTAButton"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { useTrackClick } from "@/components/analytics/AnalyticsProvider"

export function StickyMobileCTA() {
  const trackClick = useTrackClick()
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      
      // Calculate scroll percentage
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100
      
      // Show after 50% scroll
      setIsVisible(scrollPercentage > 50)
    }

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    // Check initial scroll position
    handleScroll()
    
    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    // Track CTA dismissal
    trackClick("Dismiss Sticky CTA", "sticky_mobile_cta_dismiss", "button")
    
    setIsDismissed(true)
    setIsVisible(false)
  }

  if (!isVisible || isDismissed) {
    return null
  }

  return (
    <>
      {/* Backdrop/overlay - only on very small screens */}
      <div 
        className="fixed inset-0 bg-black/20 z-40 sm:hidden"
        onClick={handleDismiss}
      />
      
      {/* Sticky CTA */}
      <div className={cn(
        "fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg",
        "transform transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}>
        <div className="p-ds-2 sm:p-ds-3">
          <div className="flex items-center justify-between gap-ds-2">
            <div className="flex-1 min-w-0">
              <p className="font-heading font-semibold text-sm text-foreground truncate">
                Get Your 30-Day Video Plan
              </p>
              <p className="text-xs text-muted-foreground truncate">
                Join 10,000+ growing businesses
              </p>
            </div>
            
            <div className="flex items-center gap-ds-1">
              <CTAButton
                size="sm"
                source="sticky_mobile_cta"
                content="mobile_sticky"
                className="whitespace-nowrap text-xs px-ds-2"
              >
                Get Plan $97
              </CTAButton>
              
              <button
                onClick={handleDismiss}
                className="p-1 rounded-md hover:bg-muted transition-colors"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spacer to prevent content from being hidden behind sticky CTA */}
      <div className="h-16 sm:h-0" />
    </>
  )
}