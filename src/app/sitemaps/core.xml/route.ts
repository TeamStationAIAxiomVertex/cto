
// src/app/sitemaps/core.xml/route.ts
import { NextResponse } from 'next/server';
import type { MetadataRoute } from 'next';
import { getAllCaseStudies } from '@/lib/case-studies';
import { countries } from '@/lib/countries';
import { roleCategories } from '@/lib/roles';
import { techCategories } from '@/lib/tech';
import { comparisonPages } from '@/lib/comparisonPages';

export async function GET() {
  const base = 'https://cto.teamstation.dev';
  const now = new Date().toISOString();

  const hubs = [
    '/playbook/hub','/research/hub','/comparisons','/case-studies',
    '/hire','/hire/by-country','/hire/by-role','/hire/by-team-topologies',
    '/hire/by-technology','/faq'
  ];

  const statics = [
    '/about','/platform','/pricing','/process','/services/integrated-services',
    '/services/talent-onboarding','/technical-interview-evaluation','/trust'
  ];

  const legal = ['/privacy-policy','/terms-of-service','/sitemap'];

  const caseStudies = await getAllCaseStudies();
  const caseStudyEntries = caseStudies.map(s => ({
    url: `${base}/case-studies/${s.slug}`,
    lastModified: s.lastModified || now,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  const comparisonEntries = comparisonPages.map(p => ({
    url: `${base}/comparisons/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  const hireByCountryEntries = countries.flatMap(c => {
    const baseEntry = {
      url: `${base}/hire/by-country/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    };
    const techPages = techCategories.flatMap(cat => cat.tech).map(t => ({
      url: `${base}/hire/by-country/${c.slug}/${t.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6
    }));
    return [baseEntry, ...techPages];
  });

  const hireByRoleEntries = roleCategories.map(r => ({
    url: `${base}/hire/by-role/${r.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  const hireByTechEntries = techCategories.flatMap(cat =>
    cat.tech.map(t => ({
      url: `${base}/hire/by-technology/${t.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6
    }))
  );

  const simple = (paths: string[], prio = 0.8, cf: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly') =>
    paths.map(p => ({ url: `${base}${p}`, lastModified: now, changeFrequency: cf, priority: prio }));

  const home = [{ url: base, lastModified: now, changeFrequency: 'weekly' as const, priority: 1.0 }];

  const urls: MetadataRoute.Sitemap = [
    ...home,
    ...simple(hubs, 0.9, 'weekly'),
    ...simple(statics, 0.8, 'monthly'),
    ...simple(legal, 0.3, 'yearly'),
    ...caseStudyEntries,
    ...comparisonEntries,
    ...hireByCountryEntries,
    ...hireByRoleEntries,
    ...hireByTechEntries
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.url}</loc>
    <lastmod>${u.lastModified}</lastmod>
    <changefreq>${u.changeFrequency}</changefreq>
    <priority>${u.priority?.toFixed(1) ?? '0.5'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
