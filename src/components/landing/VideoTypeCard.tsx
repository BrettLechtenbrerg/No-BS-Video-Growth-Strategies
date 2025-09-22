"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface VideoTypeCardProps {
  title: string
  description: string
  benefits: string[]
  icon: LucideIcon
  bgGradient: string
  urgencyText: string
  className?: string
}

export function VideoTypeCard({ 
  title, 
  description, 
  benefits, 
  icon: Icon,
  bgGradient,
  urgencyText,
  className 
}: VideoTypeCardProps) {
  return (
    <Card 
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl",
        "border-0 cursor-pointer group",
        className
      )}
    >
      {/* Vibrant gradient background */}
      <div className={cn("absolute inset-0", bgGradient)} />
      
      {/* Content with glass effect */}
      <div className="relative z-10 bg-background/95 backdrop-blur-sm h-full">
        <CardHeader className="space-y-ds-1">
          <div className="flex items-center justify-between">
            <Icon className="w-12 h-12 text-primary" />
            <span className="text-xs font-semibold text-warning uppercase tracking-wider">
              {urgencyText}
            </span>
          </div>
          <CardTitle className="font-heading text-2xl text-foreground">
            {title}
          </CardTitle>
          <CardDescription className="font-body text-muted-foreground text-base">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-ds-2">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">
            Key Benefits:
          </p>
          <ul className="space-y-ds-1">
            {benefits.map((benefit, index) => (
              <li 
                key={index}
                className="flex items-start gap-ds-1 text-foreground"
              >
                <span className="text-success mt-1">✓</span>
                <span className="font-body text-sm leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
          
          {/* Call to action hover state */}
          <div className="pt-ds-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-primary font-semibold text-sm">
              Learn how to leverage this →
            </p>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}