
import type { MetadataRoute } from 'next';
import fs from 'node:fs/promises';

export const dynamic = 'force-static'; // static at build
const SITE = 'https://cto.teamstation.dev';

function normalize(raw: string): string | null {
  const t = raw.trim();
  if (!t) return null;

  // Ensure absolute using SITE as base.
  const u = new URL(t, SITE);

  // Keep only our domain.
  if (u.origin !== SITE) return null;

  // Drop query/hash; normalize trailing slash (except root).
  let path = u.pathname || '/';
  if (path !== '/' && path.endsWith('/')) path = path.slice(0, -1);

  // Exclude the XML sitemap itself.
  if (path === '/sitemap.xml') return null;

  return `${SITE}${path}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1) Read canonical list (one per line).
  const raw = await fs.readFile(
    `${process.cwd()}/src/data/sitemap-urls.txt`,
    'utf8'
  ).catch(() => '');

  // 2) Normalize + de-dupe.
  const set = new Set<string>();
  for (const line of raw.split(/\r?\n/)) {
    const n = normalize(line);
    if (n) set.add(n);
  }

  // 3) Sort for stable output.
  const urls = Array.from(set).sort((a, b) => a.localeCompare(b));

  // Helpful: count in build logs
  console.log(`[sitemap] Emitting ${urls.length} URLs`);

  const now = new Date();

  // 4) Emit MetadataRoute.Sitemap entries.
  return urls.map((url) => ({
    url,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: url === SITE ? 1 : 0.7,
  }));
}
