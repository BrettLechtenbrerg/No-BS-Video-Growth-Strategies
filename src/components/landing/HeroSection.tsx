"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, TrendingUp } from "lucide-react"

// NLP-driven provocative headlines using Socratic questioning
const headlines = [
  "What if 87% of your competitors are already using video to steal your customers?",
  "Why do businesses using video grow 49% faster than those who don't?",
  "How many potential customers scroll past your text-only content every day?",
  "What's the real cost of ignoring video while your competition dominates?",
  "If video content gets 1200% more shares, what are you waiting for?"
]

export default function HeroSection() {
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Rotate headlines every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentHeadlineIndex((prev) => (prev + 1) % headlines.length)
        setIsVisible(true)
      }, 300)
    }, 5000)

    // Initial fade in
    setTimeout(() => setIsVisible(true), 100)

    return () => clearInterval(interval)
  }, [])

  // Go High Level link with UTM parameters
  const goHighLevelURL = "https://app.gohighlevel.com/signup?utm_source=video-growth&utm_medium=landing-page&utm_campaign=hero-cta&utm_content=get-started"

  return (
    <section className="relative overflow-hidden bg-background pb-ds-5 pt-ds-6 sm:pb-ds-6 sm:pt-20 lg:pb-24 lg:pt-24">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-ds-2 sm:px-ds-3 lg:px-ds-4">
        <div className="text-center">
          {/* Animated headline */}
          <h1 
            className={cn(
              "font-heading text-3xl font-semibold text-foreground transition-all duration-300 sm:text-4xl lg:text-5xl xl:text-6xl",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            )}
          >
            {headlines[currentHeadlineIndex]}
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-ds-3 max-w-3xl text-lg text-muted-foreground sm:mt-ds-4 sm:text-xl lg:text-2xl">
            Turn viewers into customers with proven video strategies that actually work. 
            No expensive equipment. No film degree. Just results.
          </p>

          {/* CTA Section */}
          <div className="mt-ds-4 flex flex-col items-center gap-ds-3 sm:mt-ds-5 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className={cn(
                "group relative overflow-hidden bg-primary text-primary-foreground shadow-lg transition-all hover:shadow-xl",
                "px-ds-4 py-ds-3 text-lg font-semibold sm:px-ds-5"
              )}
            >
              <a 
                href={goHighLevelURL}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <span>Get Your Video Strategy Guide</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            {/* Social proof */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium sm:text-base">
                Join 2,847+ businesses already growing with video
              </span>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-ds-5 flex flex-wrap items-center justify-center gap-ds-3 text-sm text-muted-foreground sm:gap-ds-4">
            <span className="flex items-center gap-1">
              <span className="text-primary">✓</span> 30-day implementation plan
            </span>
            <span className="flex items-center gap-1">
              <span className="text-primary">✓</span> Real business case studies
            </span>
            <span className="flex items-center gap-1">
              <span className="text-primary">✓</span> ROI tracking templates
            </span>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface/20 to-transparent" />
    </section>
  )
}