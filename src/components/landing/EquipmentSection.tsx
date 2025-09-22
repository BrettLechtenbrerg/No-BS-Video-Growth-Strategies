"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { 
  Smartphone, 
  Camera, 
  Mic, 
  Lightbulb, 
  DollarSign, 
  Check,
  X
} from "lucide-react"

interface EquipmentItem {
  icon: React.ReactNode
  name: string
  budget: string
  description: string
  isRecommended: boolean
}

interface MythBuster {
  myth: string
  reality: string
  confidence: string
}

const budgetEquipment: EquipmentItem[] = [
  {
    icon: <Smartphone className="h-6 w-6" />,
    name: "Your Smartphone",
    budget: "$0 (you already have it)",
    description: "Modern phones shoot 4K video. That's literally broadcast quality from 10 years ago.",
    isRecommended: true
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    name: "Natural Light",
    budget: "$0 (free every day)",
    description: "Face a window. Boom. You just got lighting that costs $2,000 to replicate artificially.",
    isRecommended: true
  },
  {
    icon: <Mic className="h-6 w-6" />,
    name: "Lavalier Mic",
    budget: "$20-50",
    description: "Clear audio matters more than perfect video. This tiny investment beats built-in mics every time.",
    isRecommended: true
  }
]

const expensiveEquipment: EquipmentItem[] = [
  {
    icon: <Camera className="h-6 w-6" />,
    name: "Professional Camera",
    budget: "$3,000-10,000",
    description: "Creates beautiful footage that no one watches because you spent all your time learning camera settings instead of marketing.",
    isRecommended: false
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    name: "Studio Lighting Kit",
    budget: "$1,500-5,000",
    description: "Makes you look amazing in the 2 videos you actually finish before giving up on 'perfect' lighting.",
    isRecommended: false
  }
]

const mythBusters: MythBuster[] = [
  {
    myth: "I need expensive equipment to look professional",
    reality: "Your audience cares about VALUE, not video quality. The most successful YouTubers started with phones.",
    confidence: "Gary Vee built Wine Library TV with a $200 camera from Best Buy."
  },
  {
    myth: "People won&apos;t take me seriously with phone footage",
    reality: "Instagram Stories are shot on phones and generate millions in revenue. Your equipment doesn&apos;t determine your authority.",
    confidence: "Casey Neistat often uses phone footage in million-view videos."
  },
  {
    myth: "I should wait until I can afford better gear",
    reality: "Every day you wait is another day your competitors are building audiences while you&apos;re shopping for cameras.",
    confidence: "The best camera is the one you have with you."
  }
]

export function EquipmentSection() {
  return (
    <section className="py-ds-6 lg:py-24">
      <div className="mx-auto max-w-7xl px-ds-2 sm:px-ds-3 lg:px-ds-4">
        
        {/* Header with NLP Hook */}
        <div className="text-center mb-ds-6 lg:mb-16">
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-ds-2 lg:text-4xl">
            &ldquo;You Don&apos;t Need $10K Equipment...&rdquo;
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            What if the equipment excuse is actually keeping you broke? Here&apos;s what successful video creators 
            <span className="text-primary font-medium"> actually use</span> vs what they tell you to buy.
          </p>
        </div>

        {/* Myth Busters Section */}
        <div className="mb-ds-6 lg:mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-ds-4 text-center">
            Equipment Myths That Keep You Stuck
          </h3>
          <div className="grid gap-ds-3 lg:gap-ds-4 md:grid-cols-2 lg:grid-cols-3">
            {mythBusters.map((myth, index) => (
              <Card key={index} className="border-l-4 border-l-destructive">
                <CardHeader className="pb-ds-2">
                  <CardTitle className="text-sm font-heading text-destructive flex items-start gap-2">
                    <X className="h-4 w-4 mt-1 flex-shrink-0" />
                    MYTH
                  </CardTitle>
                  <p className="font-body text-sm text-foreground">&ldquo;{myth.myth}&rdquo;</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-ds-2">
                    <p className="font-body text-sm text-foreground font-medium mb-1">Reality:</p>
                    <p className="font-body text-sm text-muted-foreground">{myth.reality}</p>
                  </div>
                  <div className="pt-ds-2 border-t border-border">
                    <p className="font-body text-xs text-success font-medium">{myth.confidence}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Equipment Comparison */}
        <div className="grid gap-ds-6 lg:gap-ds-8 lg:grid-cols-2">
          
          {/* What You Actually Need */}
          <div>
            <div className="text-center mb-ds-4">
              <h3 className="font-heading text-2xl font-semibold text-success mb-ds-2">
                What Actually Works
              </h3>
              <p className="font-body text-muted-foreground">
                Start making money <strong>today</strong> with equipment you probably already own
              </p>
            </div>
            
            <div className="space-y-ds-3">
              {budgetEquipment.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-success">
                  <CardContent className="p-ds-3">
                    <div className="flex items-start gap-ds-2">
                      <div className="text-success">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-heading font-semibold text-foreground">{item.name}</h4>
                          <Check className="h-4 w-4 text-success" />
                        </div>
                        <p className="font-body text-sm text-success font-medium mb-1">{item.budget}</p>
                        <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-ds-4 p-ds-3 bg-success/10 border border-success/20 rounded-lg">
              <p className="font-body text-sm text-foreground">
                <strong>Total investment:</strong> $20-50 (less than one dinner out)
                <br />
                <strong>ROI potential:</strong> Unlimited
              </p>
            </div>
          </div>

          {/* What Keeps You Broke */}
          <div>
            <div className="text-center mb-ds-4">
              <h3 className="font-heading text-2xl font-semibold text-destructive mb-ds-2">
                What Keeps You Broke
              </h3>
              <p className="font-body text-muted-foreground">
                Expensive gear that <strong>looks</strong> professional but <strong>kills</strong> your momentum
              </p>
            </div>
            
            <div className="space-y-ds-3">
              {expensiveEquipment.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-destructive opacity-75">
                  <CardContent className="p-ds-3">
                    <div className="flex items-start gap-ds-2">
                      <div className="text-destructive">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-heading font-semibold text-foreground">{item.name}</h4>
                          <X className="h-4 w-4 text-destructive" />
                        </div>
                        <p className="font-body text-sm text-destructive font-medium mb-1">{item.budget}</p>
                        <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-ds-4 p-ds-3 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="font-body text-sm text-foreground">
                <strong>Total investment:</strong> $4,500-15,000
                <br />
                <strong>Common outcome:</strong> Beautiful footage, zero revenue
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-ds-6 lg:mt-16 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-ds-4 lg:p-ds-6 max-w-4xl mx-auto">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-ds-2">
              Ready to Stop Making Excuses?
            </h3>
            <p className="font-body text-muted-foreground mb-ds-4">
              Get the complete equipment checklist plus the exact shooting techniques that turn phone footage 
              into professional-looking content that converts viewers into customers.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold"
            >
              <DollarSign className="mr-2 h-5 w-5" />
              Get the Equipment Guide Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}