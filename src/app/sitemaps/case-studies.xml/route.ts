// src/app/sitemaps/case-studies.xml/route.ts

import { NextResponse } from 'next/server';
import { generateSitemapXml } from '../../../lib/sitemap-utils';
import { collectCaseStudyUrls } from '../../../lib/sitemap-data'; 

/**
 * Handles GET requests to /sitemaps/case-studies.xml
 * Generates the sitemap for Case Studies and Research/Science Papers.
 */
export async function GET() {
  // 1. Collect all Case Study and Research URLs
  const urls = await collectCaseStudyUrls();

  // 2. Generate the XML string using the utility
  const xmlContent = generateSitemapXml(urls);

  // 3. Return the response with the correct headers for XML
  return new NextResponse(xmlContent, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
