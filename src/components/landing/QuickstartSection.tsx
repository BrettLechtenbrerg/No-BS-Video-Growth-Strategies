"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CTAButton } from "./CTAButton"
import { cn } from "@/lib/utils"
import { Calendar, Target, TrendingUp, Video, CheckCircle } from "lucide-react"

const quickstartHighlights = [
  {
    week: "Week 1",
    title: "Foundation & Setup",
    description: "Equipment audit, content planning framework, and first video creation",
    icon: Video,
    keyPoints: ["Equipment assessment", "Content calendar setup", "First video recorded"]
  },
  {
    week: "Week 2", 
    title: "Content Strategy",
    description: "Define your niche, audience research, and video type optimization",
    icon: Target,
    keyPoints: ["Audience research complete", "Content pillars defined", "Video formats tested"]
  },
  {
    week: "Week 3",
    title: "Growth Tactics",
    description: "SEO optimization, thumbnail strategies, and engagement techniques",
    icon: TrendingUp,
    keyPoints: ["SEO-optimized titles", "Thumbnail A/B testing", "Engagement strategies"]
  },
  {
    week: "Week 4",
    title: "Scale & Optimize", 
    description: "Analytics review, workflow automation, and scaling preparation",
    icon: CheckCircle,
    keyPoints: ["Performance analysis", "Workflow optimization", "Scaling roadmap"]
  }
]

export function QuickstartSection() {
  return (
    <section className="bg-surface py-ds-6 lg:py-20">
      <div className="mx-auto max-w-7xl px-ds-2 sm:px-ds-3 lg:px-ds-4">
        {/* Section Header */}
        <div className="text-center mb-ds-6 lg:mb-16">
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-ds-3 lg:text-4xl">
            30-Day Video Growth Quickstart
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-ds-4">
            Get a sneak peek at our proven 30-day framework that has helped businesses 
            increase their video engagement by 300% and generate 10x more leads.
          </p>
          
          {/* Primary CTA */}
          <CTAButton 
            size="lg"
            source="quickstart_section"
            content="hero_cta"
            className="mb-ds-4"
          >
            Get Complete 30-Day Plan
          </CTAButton>
          
          <p className="text-sm text-muted-foreground">
            ⭐ Join 10,000+ businesses already growing with video
          </p>
        </div>

        {/* Quickstart Preview Grid */}
        <div className="grid gap-ds-3 md:grid-cols-2 lg:gap-ds-4 mb-ds-6">
          {quickstartHighlights.map((week, index) => {
            const IconComponent = week.icon
            return (
              <Card key={index} className="border border-border bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-ds-2">
                  <div className="flex items-center gap-ds-2 mb-ds-1">
                    <div className="rounded-lg bg-primary/10 p-ds-1">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary">{week.week}</span>
                  </div>
                  <CardTitle className="font-heading text-xl">{week.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {week.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-ds-1">
                    {week.keyPoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center gap-ds-1 text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Benefits Teaser */}
        <Card className="border border-primary/20 bg-primary/5 mb-ds-6">
          <CardContent className="p-ds-4 text-center">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-ds-2">
              Plus You&apos;ll Get Access To...
            </h3>
            <div className="grid gap-ds-2 sm:grid-cols-3 mb-ds-4">
              <div className="text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-ds-1" />
                <p className="text-sm font-medium">Content Calendar Templates</p>
              </div>
              <div className="text-center">
                <Video className="h-8 w-8 text-primary mx-auto mb-ds-1" />
                <p className="text-sm font-medium">Video Scripts Library</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-ds-1" />
                <p className="text-sm font-medium">Analytics Tracking Sheet</p>
              </div>
            </div>
            
            {/* Secondary CTA */}
            <CTAButton 
              size="lg"
              source="quickstart_section"
              content="benefits_cta"
              className="mb-ds-2"
            >
              Unlock Complete System Now
            </CTAButton>
            
            <p className="text-xs text-muted-foreground">
              Limited time offer - Regular price $297, get it today for $97
            </p>
          </CardContent>
        </Card>

        {/* Social Proof Section */}
        <div className="text-center">
          <div className="grid gap-ds-3 sm:grid-cols-3 mb-ds-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-ds-1">300%</div>
              <div className="text-sm text-muted-foreground">Average engagement increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-ds-1">10x</div>
              <div className="text-sm text-muted-foreground">More qualified leads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-ds-1">30</div>
              <div className="text-sm text-muted-foreground">Days to see results</div>
            </div>
          </div>
          
          {/* Final CTA */}
          <CTAButton 
            size="lg"
            source="quickstart_section"
            content="final_cta"
          >
            Start Your 30-Day Journey
          </CTAButton>
        </div>
      </div>
    </section>
  )
}