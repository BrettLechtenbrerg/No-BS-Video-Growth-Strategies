"use client"

import { MetricCard } from "./MetricCard"
import { 
  Play, 
  Eye, 
  Clock, 
  MousePointer, 
  Share2, 
  Users, 
  DollarSign,
  BarChart3,
  Target,
  TrendingUp
} from "lucide-react"

const metricsData = [
  {
    title: "Hook Rate",
    value: "85%",
    description: "Average audience retention within first 3 seconds",
    percentage: "+23%",
    icon: Target,
    trend: "up" as const
  },
  {
    title: "Hold Rate", 
    value: "72%",
    description: "Viewers watching past 30-second mark",
    percentage: "+18%",
    icon: Eye,
    trend: "up" as const
  },
  {
    title: "Completion Rate",
    value: "68%",
    description: "Full video watch-through rate",
    percentage: "+31%", 
    icon: Play,
    trend: "up" as const
  },
  {
    title: "Avg View Duration",
    value: "2:47",
    description: "Time viewers spend engaged with content",
    percentage: "+45%",
    icon: Clock,
    trend: "up" as const
  },
  {
    title: "Click-Through Rate",
    value: "12.4%",
    description: "Viewers taking action after watching",
    percentage: "+67%",
    icon: MousePointer,
    trend: "up" as const
  },
  {
    title: "Saves & Shares",
    value: "1,847",
    description: "Monthly social engagement metrics",
    percentage: "+89%",
    icon: Share2,
    trend: "up" as const
  },
  {
    title: "New Leads",
    value: "294",
    description: "Quality leads generated monthly",
    percentage: "+156%",
    icon: Users,
    trend: "up" as const
  },
  {
    title: "Revenue Generated",
    value: "$47,320",
    description: "Direct sales attributed to video content",
    percentage: "+203%",
    icon: DollarSign,
    trend: "up" as const
  }
]

const roiStats = [
  {
    metric: "Cost per lead",
    before: "$127",
    after: "$31",
    improvement: "76% reduction"
  },
  {
    metric: "Conversion rate",
    before: "2.1%", 
    after: "8.7%",
    improvement: "314% increase"
  },
  {
    metric: "Customer lifetime value",
    before: "$2,450",
    after: "$6,890",
    improvement: "181% increase"
  }
]

export function MetricsSection() {
  return (
    <section className="py-ds-6 bg-background">
      <div className="container mx-auto px-ds-2">
        {/* Section Header */}
        <div className="text-center mb-ds-6">
          <div className="inline-flex items-center gap-ds-1 bg-primary/10 text-primary px-ds-2 py-ds-1 rounded-full text-sm font-medium mb-ds-2">
            <BarChart3 className="w-4 h-4" />
            Proven Results
          </div>
          <h2 className="font-heading text-4xl font-bold text-foreground mb-ds-2">
            The Numbers Don&apos;t Lie
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real metrics from businesses that implemented our video growth strategies. 
            These aren&apos;t vanity metrics — they&apos;re bottom-line results that drive revenue.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-ds-2 mb-ds-6">
          {metricsData.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
              description={metric.description}
              percentage={metric.percentage}
              icon={metric.icon}
              trend={metric.trend}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            />
          ))}
        </div>

        {/* ROI Comparison Table */}
        <div className="bg-gradient-to-br from-primary/5 to-success/5 rounded-lg p-ds-4 border border-border">
          <div className="text-center mb-ds-4">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-ds-1">
              ROI Transformation
            </h3>
            <p className="text-muted-foreground">
              Before vs. After implementing strategic video content
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-ds-1 px-ds-2 font-heading font-semibold text-foreground">
                    Metric
                  </th>
                  <th className="text-center py-ds-1 px-ds-2 font-heading font-semibold text-muted-foreground">
                    Before
                  </th>
                  <th className="text-center py-ds-1 px-ds-2 font-heading font-semibold text-muted-foreground">
                    After
                  </th>
                  <th className="text-center py-ds-1 px-ds-2 font-heading font-semibold text-success">
                    Improvement
                  </th>
                </tr>
              </thead>
              <tbody>
                {roiStats.map((stat, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-ds-2 px-ds-2 font-medium text-foreground">
                      {stat.metric}
                    </td>
                    <td className="py-ds-2 px-ds-2 text-center text-muted-foreground">
                      {stat.before}
                    </td>
                    <td className="py-ds-2 px-ds-2 text-center text-foreground font-semibold">
                      {stat.after}
                    </td>
                    <td className="py-ds-2 px-ds-2 text-center">
                      <span className="inline-flex items-center gap-1 text-success font-semibold">
                        <TrendingUp className="w-3 h-3" />
                        {stat.improvement}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-ds-6">
          <p className="text-lg text-muted-foreground mb-ds-2">
            Ready to see these results in your business?
          </p>
          <div className="inline-flex items-center gap-ds-1 text-primary font-semibold">
            <span>Discover the exact strategies that made this possible</span>
            <TrendingUp className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  )
}