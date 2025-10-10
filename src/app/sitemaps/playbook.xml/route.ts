
// src/app/sitemaps/playbook.xml/route.ts

import { NextResponse } from 'next/server';
import { generateSitemapXml } from '@/lib/sitemap-utils';
import { collectPlaybookUrls } from '@/lib/sitemap-data'; // Use the function the agent provided

/**
 * Handles GET requests to /sitemaps/playbook.xml
 * Generates the sitemap for the high-volume Playbook content.
 */
export async function GET() {
  // 1. Collect all Playbook URLs using the specific gatherer function
  const urls = await collectPlaybookUrls();

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
