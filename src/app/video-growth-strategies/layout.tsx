import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "No BS Video Growth Strategies for Business | Transform Your Marketing",
  description: "Discover the proven video marketing strategies that top businesses use to dominate their competition. Learn how to create compelling video content that actually drives sales.",
  openGraph: {
    title: "No BS Video Growth Strategies for Business",
    description: "Discover the proven video marketing strategies that top businesses use to dominate their competition.",
    url: "/video-growth-strategies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "No BS Video Growth Strategies for Business",
    description: "Discover the proven video marketing strategies that top businesses use to dominate their competition.",
  },
}

export default function VideoGrowthStrategiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* No navigation header as per requirements - focused conversion */}
      {children}
    </>
  )
}