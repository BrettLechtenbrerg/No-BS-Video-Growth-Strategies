import React from "react"
import HeroSection from "@/components/landing/HeroSection"
import { VideoTypesSection } from "@/components/landing/VideoTypesSection"
import { EquipmentSection } from "@/components/landing/EquipmentSection"
import { PitfallsSection } from "@/components/landing/PitfallsSection"
import { QuickstartSection } from "@/components/landing/QuickstartSection"
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA"
import { CTAButton } from "@/components/landing/CTAButton"

export default function VideoGrowthStrategiesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with NLP-driven headlines */}
      <HeroSection />

      {/* Video Types Section - Task 3 */}
      <VideoTypesSection />

      {/* Equipment Section - Task 5 */}
      <EquipmentSection />

      {/* Pitfalls Section - Task 5 */}
      <PitfallsSection />

      {/* Add CTA after Pitfalls Section */}
      <section className="bg-primary/5 py-ds-4 sm:py-ds-5">
        <div className="mx-auto max-w-4xl px-ds-2 sm:px-ds-3 text-center">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-ds-2">
            Ready to Avoid These Pitfalls?
          </h3>
          <p className="text-muted-foreground mb-ds-3">
            Get our proven 30-day system and start creating videos that actually convert
          </p>
          <CTAButton 
            size="lg"
            source="pitfalls_section"
            content="avoid_pitfalls_cta"
          >
            Get Your Video Strategy
          </CTAButton>
        </div>
      </section>

      {/* 30-Day Quickstart Section - Task 6 */}
      <QuickstartSection />

      {/* Mobile-first container with responsive padding */}
      <div className="mx-auto max-w-7xl px-ds-2 sm:px-ds-3 lg:px-ds-4">
        {/* Placeholder sections for upcoming components */}
        <div className="space-y-ds-4 pb-ds-4 sm:space-y-ds-5 sm:pb-ds-5 lg:space-y-ds-6 lg:pb-ds-6">

          {/* Metrics Section - Task 4 */}
          <section className="rounded-lg border border-border bg-card p-ds-3 sm:p-ds-4">
            <h2 className="font-heading text-xl font-semibold text-card-foreground">
              Metrics & ROI Section (Task 4)
            </h2>
            <p className="mt-ds-1 text-muted-foreground">
              Key metrics showcase will be displayed here
            </p>
          </section>

          {/* Final conversion section */}
          <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-ds-4 sm:p-ds-6 text-center">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-ds-3">
              Don&apos;t Wait Another Day to Start Growing
            </h2>
            <p className="text-lg text-muted-foreground mb-ds-4 max-w-2xl mx-auto">
              Every day you delay is potential revenue lost. Join thousands of businesses 
              already using our proven video growth strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-ds-2 justify-center items-center">
              <CTAButton 
                size="lg"
                source="final_section"
                content="main_conversion_cta"
              >
                Get Complete System Now
              </CTAButton>
              <CTAButton 
                variant="outline"
                size="lg"
                source="final_section"
                content="secondary_conversion_cta"
              >
                View Sample Videos
              </CTAButton>
            </div>
            <p className="text-xs text-muted-foreground mt-ds-2">
              30-day money-back guarantee • Instant access • Cancel anytime
            </p>
          </section>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA />
    </main>
  )
}