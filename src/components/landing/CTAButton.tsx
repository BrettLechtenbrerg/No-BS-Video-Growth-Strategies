"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"
import { useTrackClick } from "@/components/analytics/AnalyticsProvider"

interface CTAButtonProps {
  children: React.ReactNode
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg"
  className?: string
  source?: string
  medium?: string
  campaign?: string
  content?: string
  fullWidth?: boolean
}

export function CTAButton({
  children,
  variant = "default",
  size = "default", 
  className,
  source = "landing_page",
  medium = "website",
  campaign = "video_growth_strategies",
  content = "cta_button",
  fullWidth = false,
  ...props
}: CTAButtonProps) {
  const trackClick = useTrackClick()
  const goHighLevelUrl = "https://app.gohighlevel.com/signup"
  
  const utmParams = new URLSearchParams({
    utm_source: source,
    utm_medium: medium,
    utm_campaign: campaign,
    utm_content: content,
  })
  
  const finalUrl = `${goHighLevelUrl}?${utmParams.toString()}`
  
  const handleClick = (event: React.MouseEvent) => {
    // Track the CTA click
    trackClick(
      typeof children === "string" ? children : "CTA Button", 
      content, 
      "cta"
    )
    
    window.open(finalUrl, "_blank", "noopener,noreferrer")
  }
  
  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={cn(
        "font-heading font-semibold transition-all duration-300 hover:scale-105",
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        <ExternalLink className="h-4 w-4" />
      </span>
    </Button>
  )
}