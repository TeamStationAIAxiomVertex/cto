
import { MetadataRoute } from 'next';
import { countries } from '@/lib/countries';
import { roleCategories } from '@/lib/roles';
import { techCategories } from '@/lib/tech';

const baseUrl = 'https://cto.teamstation.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const byCountry = countries.map((c) => ({
    url: `${baseUrl}/hire/by-country/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const byRole = roleCategories.map((r) => ({
    url: `${baseUrl}/hire/by-role/${r.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const byTech = techCategories.flatMap((cat) =>
    cat.tech.map((t) => ({
      url: `${baseUrl}/hire/by-technology/${t.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  return [...byCountry, ...byRole, ...byTech];
}
