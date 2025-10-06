
// src/app/sitemaps/static.xml/route.ts

import { NextResponse } from 'next/server';
import { generateSitemapXml } from '@/lib/sitemap-utils';
import { collectCoreUrls } from '@/lib/sitemap-data';

/**
 * Handles GET requests to /sitemaps/static.xml
 * This generates the sitemap for all top-level static pages.
 */
export async function GET() {
  const urls = await collectCoreUrls();

  // Generate the XML string using the utility
  const xmlContent = generateSitemapXml(urls);

  // Return the response with the correct headers for XML
  return new NextResponse(xmlContent, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, must-revalidate', 
    },
  });
}
