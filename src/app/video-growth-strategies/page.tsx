'use client'

import { CheckCircle, TrendingUp, Users, Zap, Video, BarChart3, Target, Rocket } from 'lucide-react'
import { useState, useEffect } from 'react'

const GO_HIGH_LEVEL_URL = 'https://app.gohighlevel.com/v2/preview/o6Eh2fviRJUWOjfqLZmr'

export default function VideoGrowthStrategiesPage() {
  const [scrollDepth, setScrollDepth] = useState(0)
  const [showStickyButton, setShowStickyButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      setScrollDepth(Math.round(scrollPercent))
      setShowStickyButton(scrollPercent > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-4xl font-heading font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            What If Your Videos Could Actually <span className="text-primary">Grow Your Business?</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Have you ever wondered why some businesses explode with video marketing while others struggle to get views? 
            What separates viral success from forgotten content?
          </p>
          <a 
            href={GO_HIGH_LEVEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-md font-medium transition-colors"
          >
            Get Your Free Video Growth Guide
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            No fluff. No theory. Just proven strategies that work.
          </p>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-heading font-bold md:text-4xl">
            Do Any of These Sound Familiar?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "You're creating videos but they're not converting viewers into customers",
              "Your competitors seem to dominate video while you struggle for views",
              "You know video is important but don't know where to start",
              "You've tried video marketing but gave up when it didn't work",
              "You're unsure which platforms or video types to focus on",
              "You feel overwhelmed by all the video marketing advice out there"
            ].map((pain, index) => (
              <div key={index} className="border-2 border-border hover:border-primary/50 transition-colors rounded-lg">
                <div className="p-6">
                  <p className="text-lg">{pain}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-6 text-xl font-semibold">
              What if there was a proven system that actually worked?
            </p>
            <a 
              href={GO_HIGH_LEVEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-md font-medium transition-colors"
            >
              Show Me The System
            </a>
          </div>
        </div>
      </section>

      {/* Video Types Section */}
      <section className="bg-muted/30 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-heading font-bold md:text-4xl">
            Master All 4 Types of Business-Growing Videos
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Each type serves a specific purpose in your growth strategy. Master them all.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Zap,
                title: "Short-Form Content",
                subtitle: "15-60 seconds that convert",
                points: [
                  "Hook viewers in 3 seconds",
                  "Platform-specific optimization",
                  "Viral growth formulas",
                  "Content recycling strategies"
                ]
              },
              {
                icon: Video,
                title: "Long-Form Authority",
                subtitle: "Build trust and expertise",
                points: [
                  "YouTube optimization secrets",
                  "Podcast video strategies",
                  "Educational content frameworks",
                  "Monetization methods"
                ]
              },
              {
                icon: Users,
                title: "User-Generated Content",
                subtitle: "Let customers sell for you",
                points: [
                  "UGC campaign blueprints",
                  "Influencer partnerships",
                  "Customer story frameworks",
                  "Rights and usage guidelines"
                ]
              },
              {
                icon: Rocket,
                title: "AI-Enhanced Videos",
                subtitle: "Scale with technology",
                points: [
                  "AI tool recommendations",
                  "Automation workflows",
                  "Personalization at scale",
                  "Future-proof strategies"
                ]
              }
            ].map((type, index) => {
              const Icon = type.icon
              return (
                <div key={index} className="border border-border rounded-lg overflow-hidden bg-background">
                  <div className="p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold">{type.title}</h3>
                        <p className="text-sm text-muted-foreground">{type.subtitle}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {type.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-8 text-center">
            <a 
              href={GO_HIGH_LEVEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-md font-medium transition-colors"
            >
              Get The Complete Video Playbook
            </a>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-heading font-bold md:text-4xl">
            Real Results From Real Businesses
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            What happens when you implement these strategies?
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: TrendingUp, metric: "300%", label: "Average view increase in 90 days" },
              { icon: Target, metric: "5x", label: "More qualified leads from video" },
              { icon: BarChart3, metric: "47%", label: "Higher conversion rates" }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center border border-border rounded-lg">
                  <div className="p-8">
                    <div className="mx-auto mb-4 w-fit rounded-full bg-primary/10 p-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <p className="mb-2 text-4xl font-heading font-bold text-primary">{stat.metric}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary px-4 py-16 text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">
            Ready to Transform Your Video Marketing?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Stop guessing. Start growing. Get the exact blueprint that successful businesses use to dominate with video.
          </p>
          <a 
            href={GO_HIGH_LEVEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6 rounded-md font-medium transition-colors"
          >
            Get Instant Access to the Video Growth Guide
          </a>
          <p className="mt-4 text-sm opacity-75">
            100% Free. No credit card required. Instant download.
          </p>
        </div>
      </section>

      {/* Sticky CTA for Mobile */}
      {showStickyButton && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t p-4 md:hidden">
          <a 
            href={GO_HIGH_LEVEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors text-center"
          >
            Get Your Free Guide Now
          </a>
        </div>
      )}
    </div>
  )
}