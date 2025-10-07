// src/app/sitemaps/comparisons.xml/route.ts

import { NextResponse } from "next/server";
import { generateSitemapXml } from "@/lib/sitemap-utils";
import { collectComparisonUrls } from "@/lib/sitemap-data";

/**
 * Handles GET requests to /sitemaps/comparisons.xml
 * Generates the sitemap for competitor comparison pages (Direct Interception Pillar).
 */
export async function GET() {
  // 1. Collect all Comparison URLs
  const urls = await collectComparisonUrls();

  // 2. Generate the XML string using the utility
  const xmlContent = await generateSitemapXml(urls);

  // 3. Return the response with the correct headers for XML
  return new NextResponse(xmlContent, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
