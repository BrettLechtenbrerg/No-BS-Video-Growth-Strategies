import { NextResponse } from 'next/server'

export async function GET() {
  // Force redirect to the correct Go High Level URL
  const GO_HIGH_LEVEL_URL = 'https://app.gohighlevel.com/v2/preview/o6Eh2fviRJUWOjfqLZmr'
  
  return NextResponse.redirect(GO_HIGH_LEVEL_URL, {
    status: 301,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    }
  })
}