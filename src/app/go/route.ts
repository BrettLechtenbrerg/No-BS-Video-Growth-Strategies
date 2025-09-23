import { redirect } from 'next/navigation'

export async function GET() {
  // Server-side redirect to Go High Level
  // This bypasses any browser extensions that might block client-side navigation
  redirect('https://app.gohighlevel.com/location/boPxhNvcNB6T3F2CLP0M/page-builder/nWuS6gee27ffuHmp1R93')
}