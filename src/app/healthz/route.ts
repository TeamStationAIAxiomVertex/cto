import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Optional: Add checks for database connectivity or other critical services
    return NextResponse.json({
      status: "ok",
      uptime: process.uptime(),
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
        { status: "error", message: errorMessage },
        { status: 503 }
    );
  }
}
