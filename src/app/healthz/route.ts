import { NextResponse } from 'next/server';

// This is required by Google Cloud Run.
export async function GET() {
  return new Response("ok", { status: 200 });
}