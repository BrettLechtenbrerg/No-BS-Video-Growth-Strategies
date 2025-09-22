"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { 
  AlertTriangle, 
  Target, 
  TrendingUp, 
  Clock, 
  Users, 
  Zap,
  CheckCircle,
  XCircle,
  ArrowRight,
  Shield
} from "lucide-react"

interface Pitfall {
  id: string
  icon: React.ReactNode
  title: string
  problem: string
  consequence: string
  solution: string
  timeToFix: string
  severity: "high" | "medium" | "low"
}

interface SuccessPrinciple {
  icon: React.ReactNode
  title: string
  description: string
  quickWin: string
}

const commonPitfalls: Pitfall[] = [
  {
    id: "perfectionism",
    icon: <Clock className="h-6 w-6" />,
    title: "Perfectionism Paralysis",
    problem: "Spending weeks planning the 'perfect' first video while competitors are already building audiences.",
    consequence: "Zero content published, zero audience growth, zero revenue while you're still 'perfecting' your strategy.",
    solution: "Publish first, perfect later. Your 10th video will be better than your 1st, but only if you actually make 10 videos.",
    timeToFix: "Today",
    severity: "high"
  },
  {
    id: "no-hook",
    icon: <Target className="h-6 w-6" />,
    title: "Weak Opening Hook",
    problem: "Starting videos with &lsquo;Hey guys, welcome back...&rsquo; when you have 3 seconds to grab attention.",
    consequence: "97% of viewers scroll away in the first 5 seconds. Your amazing content never gets seen.",
    solution: "Lead with the payoff. &lsquo;This one technique made me $50K last month&rsquo; beats &lsquo;Today I want to talk about...&rsquo;",
    timeToFix: "Next video",
    severity: "high"
  },
  {
    id: "no-cta",
    icon: <ArrowRight className="h-6 w-6" />,
    title: "Missing Call-to-Action",
    problem: "Making great content but never telling viewers what to do next.",
    consequence: "Engaged audience that doesn't convert. Views don't pay bills - actions do.",
    solution: "Every video needs ONE clear next step. Subscribe, comment, click link, buy now. Pick one.",
    timeToFix: "Next video",
    severity: "medium"
  },
  {
    id: "wrong-platform",
    icon: <Users className="h-6 w-6" />,
    title: "Platform Confusion",
    problem: "Trying to be everywhere at once instead of dominating one platform first.",
    consequence: "Mediocre results everywhere instead of explosive growth somewhere.",
    solution: "Pick ONE platform where your audience lives. Master it. Then expand.",
    timeToFix: "This week",
    severity: "medium"
  },
  {
    id: "no-consistency",
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Inconsistent Publishing",
    problem: "Posting randomly when you &lsquo;feel inspired&rsquo; instead of building reliable audience expectations.",
    consequence: "Algorithm doesn't trust you. Audience forgets you exist. Growth stalls completely.",
    solution: "Consistency beats perfection. Better to post mediocre content weekly than perfect content monthly.",
    timeToFix: "This month",
    severity: "high"
  },
  {
    id: "no-repurposing",
    icon: <Zap className="h-6 w-6" />,
    title: "One-and-Done Content",
    problem: "Creating one piece of content for one platform when you could get 10x the reach.",
    consequence: "Working 10x harder for the same results. Burning out from constant content creation.",
    solution: "One video becomes: YouTube video, 5 TikToks, 10 Instagram posts, 1 blog post, 5 tweets.",
    timeToFix: "Next content batch",
    severity: "low"
  }
]

const successPrinciples: SuccessPrinciple[] = [
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Volume Over Perfection",
    description: "Your first 100 videos will teach you more than any course ever could.",
    quickWin: "Commit to posting daily for 30 days"
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Hook Every 7 Seconds",
    description: "Attention spans are short. Re-hook viewers throughout your content.",
    quickWin: "Script 3 hooks before your next video"
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Always Have a Next Step",
    description: "Every piece of content should move viewers closer to becoming customers.",
    quickWin: "Add one clear CTA to your next 5 videos"
  }
]

export function PitfallsSection() {
  const [selectedPitfall, setSelectedPitfall] = useState<string | null>(null)

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "text-destructive border-destructive"
      case "medium": return "text-warning border-warning"
      case "low": return "text-muted-foreground border-muted"
      default: return "text-muted-foreground border-muted"
    }
  }

  return (
    <section className="py-ds-6 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-ds-2 sm:px-ds-3 lg:px-ds-4">
        
        {/* Header with NLP Hook */}
        <div className="text-center mb-ds-6 lg:mb-16">
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-ds-2 lg:text-4xl">
            The 6 Pitfalls That Kill 90% of Video Creators
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Are you unknowingly sabotaging your own success? These aren&apos;t just &ldquo;mistakes&rdquo; - 
            they&apos;re <span className="text-destructive font-medium">business killers</span> that 
            keep creators broke while their competitors thrive.
          </p>
        </div>

        {/* Warning Alert */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-ds-4 mb-ds-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-ds-2">
            <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                Reality Check: Most Creators Fail Because of These
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Technical skills don&apos;t matter if you&apos;re making these fundamental mistakes. 
                Even the best equipment and editing won&apos;t save you from these pitfalls.
              </p>
            </div>
          </div>
        </div>

        {/* Pitfalls Grid */}
        <div className="grid gap-ds-3 lg:gap-ds-4 md:grid-cols-2 lg:grid-cols-3 mb-ds-6 lg:mb-16">
          {commonPitfalls.map((pitfall) => (
            <Card 
              key={pitfall.id} 
              className={cn(
                "cursor-pointer transition-all duration-200 hover:shadow-md border-l-4",
                getSeverityColor(pitfall.severity),
                selectedPitfall === pitfall.id ? "ring-2 ring-primary ring-offset-2" : ""
              )}
              onClick={() => setSelectedPitfall(selectedPitfall === pitfall.id ? null : pitfall.id)}
            >
              <CardHeader className="pb-ds-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className={cn("text-current", getSeverityColor(pitfall.severity))}>
                      {pitfall.icon}
                    </div>
                    <CardTitle className="text-sm font-heading text-foreground">
                      {pitfall.title}
                    </CardTitle>
                  </div>
                  <span className={cn(
                    "text-xs font-semibold px-2 py-1 rounded-full",
                    pitfall.severity === "high" ? "bg-destructive/10 text-destructive" :
                    pitfall.severity === "medium" ? "bg-warning/10 text-warning" :
                    "bg-muted text-muted-foreground"
                  )}>
                    {pitfall.severity.toUpperCase()}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-body text-sm text-muted-foreground mb-ds-2">
                  {pitfall.problem}
                </p>
                
                {selectedPitfall === pitfall.id && (
                  <div className="space-y-ds-2 border-t border-border pt-ds-2">
                    <div>
                      <p className="font-body text-xs font-semibold text-destructive mb-1">
                        Why This Kills Your Business:
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        {pitfall.consequence}
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-body text-xs font-semibold text-success mb-1">
                        The Fix:
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        {pitfall.solution}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-ds-1 border-t border-border">
                      <span className="font-body text-xs font-medium text-primary">
                        Time to fix: {pitfall.timeToFix}
                      </span>
                      <XCircle className="h-4 w-4 text-destructive" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Principles */}
        <div className="bg-success/5 border border-success/20 rounded-lg p-ds-4 lg:p-ds-6 mb-ds-6">
          <div className="text-center mb-ds-4">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-ds-2">
              What Successful Creators Do Instead
            </h3>
            <p className="font-body text-muted-foreground">
              The simple principles that separate million-view creators from everyone else
            </p>
          </div>
          
          <div className="grid gap-ds-3 md:grid-cols-3">
            {successPrinciples.map((principle, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-ds-2">
                  <div className="bg-success text-white p-2 rounded-full">
                    {principle.icon}
                  </div>
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1">
                  {principle.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground mb-ds-2">
                  {principle.description}
                </p>
                <div className="bg-success/10 border border-success/20 rounded px-ds-2 py-1">
                  <p className="font-body text-xs font-medium text-success">
                    Quick Win: {principle.quickWin}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-ds-4 lg:p-ds-6 max-w-4xl mx-auto">
            <Shield className="h-12 w-12 text-primary mx-auto mb-ds-3" />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-ds-2">
              Don&apos;t Let These Pitfalls Kill Your Dreams
            </h3>
            <p className="font-body text-muted-foreground mb-ds-4">
              Get the complete pitfall-prevention checklist plus the exact step-by-step system 
              that helps creators avoid these mistakes and build profitable video businesses faster.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold"
            >
              <Shield className="mr-2 h-5 w-5" />
              Get the Pitfall Prevention Guide
            </Button>
            <p className="font-body text-xs text-muted-foreground mt-ds-2">
              Stop making the same mistakes 90% of creators make
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}