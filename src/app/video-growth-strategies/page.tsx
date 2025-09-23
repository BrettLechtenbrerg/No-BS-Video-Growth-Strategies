export default function VideoGrowthStrategiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            What If Your Videos Could Actually <span className="text-blue-600">Grow Your Business?</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:text-xl md:text-2xl">
            Have you ever wondered why some businesses explode with video marketing while others struggle to get views? 
            What separates viral success from forgotten content?
          </p>
          <a 
            href="https://app.gohighlevel.com/location/boPxhNvcNB6T3F2CLP0M/page-builder/nWuS6gee27ffuHmp1R93"
            className="inline-block bg-purple-600 text-white hover:bg-purple-700 text-lg px-8 py-6 rounded-md font-medium transition-colors"
          >
            Get Your Video Strategy Guide →
          </a>
          <p className="mt-4 text-sm text-gray-500">
            No fluff. No theory. Just proven strategies that work.
          </p>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
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
              <div key={index} className="border-2 border-gray-200 hover:border-blue-500 transition-colors rounded-lg p-6">
                <p className="text-lg">{pain}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-6 text-xl font-semibold">
              What if there was a proven system that actually worked?
            </p>
            <a 
              href="https://app.gohighlevel.com/v2/preview/o6Eh2fviRJUWOjfqLZmr"
              className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 rounded-md font-medium transition-colors"
            >
              Show Me The System
            </a>
          </div>
        </div>
      </section>

      {/* Video Types Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Master All 4 Types of Business-Growing Videos
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Each type serves a specific purpose in your growth strategy. Master them all.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
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
                title: "AI-Enhanced Videos",
                subtitle: "Scale with technology",
                points: [
                  "AI tool recommendations",
                  "Automation workflows",
                  "Personalization at scale",
                  "Future-proof strategies"
                ]
              }
            ].map((type, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{type.title}</h3>
                  <p className="text-sm text-gray-600">{type.subtitle}</p>
                </div>
                <ul className="space-y-2">
                  {type.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a 
              href="https://app.gohighlevel.com/v2/preview/o6Eh2fviRJUWOjfqLZmr"
              className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 rounded-md font-medium transition-colors"
            >
              Get The Complete Video Playbook
            </a>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Real Results From Real Businesses
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            What happens when you implement these strategies?
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { metric: "300%", label: "Average view increase in 90 days" },
              { metric: "5x", label: "More qualified leads from video" },
              { metric: "47%", label: "Higher conversion rates" }
            ].map((stat, index) => (
              <div key={index} className="text-center border border-gray-200 rounded-lg p-8">
                <p className="mb-2 text-4xl font-bold text-blue-600">{stat.metric}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-blue-600 px-4 py-16 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Transform Your Video Marketing?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Stop guessing. Start growing. Get the exact blueprint that successful businesses use to dominate with video.
          </p>
          <a 
            href="https://app.gohighlevel.com/v2/preview/o6Eh2fviRJUWOjfqLZmr"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-md font-medium transition-colors"
          >
            Get Instant Access to the Video Growth Guide
          </a>
          <p className="mt-4 text-sm opacity-75">
            100% Free. No credit card required. Instant download.
          </p>
        </div>
      </section>
    </div>
  )
}