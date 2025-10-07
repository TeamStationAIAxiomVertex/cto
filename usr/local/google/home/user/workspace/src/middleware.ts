// src/middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("X-Frame-Options", "SAMEORIGIN");
  // Consider a CSP once you inventory all inline scripts/styles
  return res;
}

export const config = {
  matcher: ["/((?!_next/|favicon.ico|robots.txt|manifest.webmanifest).*)"],
};
