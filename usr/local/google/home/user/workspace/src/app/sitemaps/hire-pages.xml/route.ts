// src/app/sitemaps/hire-pages.xml/route.ts

import { NextResponse } from "next/server";
import { generateSitemapXml } from "../../../lib/sitemap-utils";
import {
  collectHireByCountryUrls,
  collectHireByRoleUrls,
  collectHireByTechnologyUrls,
} from "../../../lib/sitemap-data";

/**
 * Handles GET requests to /sitemaps/hire-pages.xml
 * Generates the sitemap for ALL programmatic hiring content
 * (by country, by role, by technology) designed for massive scale.
 */
export async function GET() {
  // 1. Collect all URLs from the three programmatic hiring pillars concurrently
  const [countryUrls, roleUrls, technologyUrls] = await Promise.all([
    collectHireByCountryUrls(),
    collectHireByRoleUrls(),
    collectHireByTechnologyUrls(),
  ]);

  // 2. Combine all URL lists into a single master list for this sitemap file
  const allHireUrls = [...countryUrls, ...roleUrls, ...technologyUrls];

  // 3. Generate the XML string using the utility
  const xmlContent = generateSitemapXml(allHireUrls);
  // 4. Return the response with the correct headers for XML
  return new NextResponse(xmlContent, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
