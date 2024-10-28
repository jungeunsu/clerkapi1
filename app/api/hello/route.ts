import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    message: 'Hello next.js',
    contents: 'Hello Hello Hello',
  }
  return NextResponse.json(data)
}
