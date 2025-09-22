"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    // Immediate redirect
    router.replace("/video-growth-strategies")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-xl font-heading font-semibold text-foreground mb-4">
          Redirecting to Video Growth Strategies...
        </h1>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
        <p className="text-sm text-muted-foreground mt-4">
          If you are not redirected, <a href="/video-growth-strategies" className="text-primary hover:underline">click here</a>
        </p>
      </div>
    </div>
  )
}