"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon, TrendingUp } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  description: string
  percentage?: string
  icon: LucideIcon
  trend?: "up" | "down" | "neutral"
  className?: string
  style?: React.CSSProperties
}

export function MetricCard({ 
  title, 
  value, 
  description, 
  percentage,
  icon: Icon,
  trend = "up",
  className,
  style
}: MetricCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-success"
      case "down":
        return "text-destructive"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <Card 
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg",
        "border border-border bg-card",
        className
      )}
      style={style}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-ds-1">
        <CardTitle className="font-heading text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      
      <CardContent className="space-y-ds-1">
        <div className="flex items-baseline gap-ds-1">
          <div className="text-3xl font-bold text-foreground font-heading">
            {value}
          </div>
          {percentage && (
            <div className={cn("flex items-center text-sm font-medium", getTrendColor())}>
              <TrendingUp className="mr-1 h-3 w-3" />
              {percentage}
            </div>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}