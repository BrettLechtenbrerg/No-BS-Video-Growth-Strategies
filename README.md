# No BS Video Growth Strategies Landing Page

A high-converting landing page for video growth strategies built with Next.js 15, featuring NLP-driven copy and conversion-focused design.

## 🚀 Live Demo

**Landing Page**: Access at `/video-growth-strategies`

Visit the deployed version for team testing: [Coming Soon - Deploy to Vercel]

## 🎯 Features

### 🔥 Conversion-Optimized Design
- **No navigation header** for focused conversion
- **Multiple strategic CTAs** throughout the page
- **Sticky mobile CTA** that appears after 50% scroll
- **Go High Level integration** with UTM tracking

### 📝 NLP-Driven Content
- **Provocative headlines** using Socratic questioning
- **Objection handling** throughout the copy
- **Social proof** and authority positioning
- **Urgency creation** with FOMO tactics

### 📊 Complete Content Sections
1. **Hero Section** - Rotating attention-grabbing headlines
2. **Video Types** - Short-form, Long-form, UGC, AI-generated
3. **Metrics & ROI** - Visual performance data
4. **Equipment Reality** - Addressing the "$10K equipment" myth
5. **Common Pitfalls** - What kills 90% of video creators
6. **30-Day Quickstart** - Action plan preview

### 🔍 Analytics & Tracking
- **Page view tracking** with session management
- **Scroll depth analytics** (25%, 50%, 75%, 90%, 100%)
- **Click tracking** for all buttons and CTAs
- **Privacy-focused** - no external tracking services
- **Non-blocking** performance for optimal UX

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with design system tokens
- **UI Components**: shadcn/ui + Radix UI primitives
- **Database**: Prisma ORM with SQLite (dev) / PostgreSQL (prod)
- **Analytics**: Custom analytics with React hooks
- **Deployment**: Vercel-ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/BrettLechtenbrerg/No-BS-Video-Growth-Strategies.git
cd No-BS-Video-Growth-Strategies

# Install dependencies
npm install

# Set up the database
npx prisma db push

# Start development server
npm run dev
```

Visit `http://localhost:3000/video-growth-strategies` to view the landing page.

## 🎨 Design System

- **Color Palette**: Figma Creative theme with primary blue (#0066FF)
- **Typography**: Inter font family with heading/body variants
- **Spacing**: Design system classes (ds-1 through ds-6)
- **Components**: Consistent with design tokens
- **Responsive**: Mobile-first approach

## 📁 Project Structure

```
src/
├── app/
│   ├── video-growth-strategies/     # Landing page route
│   │   ├── layout.tsx              # No-header layout
│   │   └── page.tsx                # Main landing page
│   └── api/analytics/              # Analytics endpoints
├── components/
│   ├── landing/                    # Landing page components
│   │   ├── HeroSection.tsx         # NLP-driven hero
│   │   ├── VideoTypesSection.tsx   # Video type showcases
│   │   ├── MetricsSection.tsx      # ROI visualization
│   │   ├── CTAButton.tsx           # Tracked CTA component
│   │   └── ...                     # Other sections
│   └── ui/                         # shadcn/ui components
├── lib/
│   ├── analytics.ts                # Analytics manager
│   └── prisma.ts                   # Database client
└── hooks/
    ├── useScrollTracking.ts        # Scroll behavior tracking
    └── useClickTracking.ts         # Click behavior tracking
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub repository
2. Import project in Vercel dashboard
3. Configure environment variables:
   ```
   DATABASE_URL=your_postgres_connection_string
   NEXTAUTH_SECRET=your_secret_key
   ```
4. Deploy automatically

### Environment Variables
```bash
# Database
DATABASE_URL="your_database_connection_string"

# Authentication (if needed)
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="https://your-domain.com"
```

## 📊 Analytics Dashboard

Access analytics at `/api/analytics/dashboard` to view:
- Page view statistics
- Scroll depth metrics
- Click tracking data
- Session information

## 🧪 Testing

```bash
# Run tests
npm test

# Run build test
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🔧 Development Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking

### Database (Prisma)
- `npm run db:push` - Push schema to database
- `npm run db:generate` - Generate Prisma client
- `npm run db:studio` - Open database GUI

## 📝 Landing Page Copy Highlights

The landing page features compelling NLP copy including:
- "What if 87% of your competitors are already using video to steal your customers?"
- Equipment reality: "You don't need $10K equipment to start"
- Pitfall warnings: "6 mistakes that kill 90% of video creators"
- Social proof: "2,847+ businesses already growing with video"

## 🎯 Key Conversion Elements

### Strategic CTA Placement
- Hero section primary CTA
- Post-video types section CTA
- Equipment section CTA
- Post-pitfalls section CTA
- Quickstart section multiple CTAs
- Sticky mobile CTA (50% scroll trigger)

### UTM Tracking
All CTAs include proper UTM parameters:
- `utm_source`: Section-specific sources
- `utm_medium`: website
- `utm_campaign`: video_growth_strategies
- `utm_content`: Unique CTA identifiers

## 🔧 Built with Queen Claude Foundation

This project includes 31 essential packages:

### Core Stack
- ⚡ **Next.js 15** with App Router
- 🔒 **TypeScript** in strict mode  
- 🎨 **Tailwind CSS** with design system

### Authentication & Database
- 🗄️ **Prisma** - Type-safe database ORM
- ⚙️ **Type-safe env vars** - Runtime validation

### Forms & UI
- 📝 **React Hook Form + Zod** - Forms with validation
- 🎯 **Radix UI** - Primitive components
- 🌟 **Framer Motion** - Smooth animations

### State & Data
- 🏪 **Zustand** - Client state management  
- 🔄 **TanStack Query** - Server state, caching
- 📡 **Axios** - HTTP client

## 📄 License

This project is proprietary. All rights reserved.

---

**Built with ❤️ for conversion optimization and business growth**