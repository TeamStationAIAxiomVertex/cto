import { NextResponse } from 'next/server';

// This is required by Google Cloud Run for health checks.
export async function GET() {
  return new Response("ok", { status: 200 });
}
