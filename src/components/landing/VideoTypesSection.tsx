"use client"

import { VideoTypeCard } from "./VideoTypeCard"
import { Smartphone, PlayCircle, Users, Sparkles } from "lucide-react"

const videoTypes = [
  {
    title: "Short-Form Video Mastery",
    description: "What if 30 seconds could transform your entire business? TikTok and Reels aren&apos;t just trends—they&apos;re your fastest path to viral growth.",
    benefits: [
      "Reach millions of potential customers in days, not years",
      "Turn casual viewers into loyal buyers with scroll-stopping content",
      "Master the algorithm secrets that 99% of businesses miss"
    ],
    icon: Smartphone,
    bgGradient: "bg-gradient-to-br from-primary/20 to-accent/20",
    urgencyText: "Trending Now"
  },
  {
    title: "Long-Form YouTube Authority",
    description: "Ever wonder why some businesses dominate YouTube while others struggle for views? It&apos;s not about expensive equipment—it&apos;s about strategic storytelling.",
    benefits: [
      "Build unshakeable trust through in-depth value delivery",
      "Create evergreen content that sells for you 24/7",
      "Position yourself as THE go-to expert in your industry"
    ],
    icon: PlayCircle,
    bgGradient: "bg-gradient-to-br from-destructive/20 to-warning/20",
    urgencyText: "High Impact"
  },
  {
    title: "User-Generated Content Gold",
    description: "Your customers are your best salespeople—but are you letting them? Discover how to turn happy clients into your most powerful marketing asset.",
    benefits: [
      "Generate authentic social proof that converts skeptics",
      "Reduce content creation costs by 80% or more",
      "Build a community of brand advocates who sell for you"
    ],
    icon: Users,
    bgGradient: "bg-gradient-to-br from-primary/20 to-secondary/20",
    urgencyText: "Cost Effective"
  },
  {
    title: "AI-Powered Video Revolution",
    description: "What if you could create professional videos in minutes, not days? AI isn&apos;t replacing creativity—it&apos;s amplifying it for smart businesses.",
    benefits: [
      "Produce content 10x faster without sacrificing quality",
      "Scale your video marketing without hiring a team",
      "Stay ahead while competitors struggle with old methods"
    ],
    icon: Sparkles,
    bgGradient: "bg-gradient-to-br from-success/20 to-accent/20",
    urgencyText: "Future-Proof"
  }
]

export function VideoTypesSection() {
  return (
    <section className="py-ds-6 bg-background">
      <div className="container mx-auto px-ds-2 sm:px-ds-3 lg:px-ds-5">
        {/* Section Header with NLP-style hook */}
        <div className="text-center mb-ds-5 space-y-ds-2">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Which Video Strategy Will 
            <span className="text-primary"> 10X Your Business</span>?
          </h2>
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Most businesses are sitting on a goldmine of video opportunities. 
            The question isn&apos;t IF you should use video—it&apos;s which type will 
            drive the fastest results for YOUR specific goals...
          </p>
          <div className="pt-ds-2">
            <p className="text-warning font-semibold">
              ⚡ Discover Your Perfect Video Formula Below
            </p>
          </div>
        </div>

        {/* Video Type Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-ds-3 lg:gap-ds-4">
          {videoTypes.map((type, index) => (
            <VideoTypeCard
              key={index}
              title={type.title}
              description={type.description}
              benefits={type.benefits}
              icon={type.icon}
              bgGradient={type.bgGradient}
              urgencyText={type.urgencyText}
              className="h-full"
            />
          ))}
        </div>

        {/* Bottom CTA with urgency */}
        <div className="text-center mt-ds-5 p-ds-4 bg-primary/5 rounded-lg">
          <p className="font-body text-lg text-foreground mb-ds-2">
            <span className="font-semibold">Ready to stop guessing</span> and start growing?
          </p>
          <p className="font-body text-muted-foreground">
            Our FREE guide reveals the exact video strategies that generated 
            <span className="font-semibold text-primary"> $2.3M in revenue last year alone.</span>
          </p>
        </div>
      </div>
    </section>
  )
}