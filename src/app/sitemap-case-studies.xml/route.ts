import { MetadataRoute } from 'next';
import { getAllCaseStudies } from '@/lib/case-studies';

const baseUrl = 'https://cto.teamstation.dev';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();
  const caseStudies = await getAllCaseStudies();

  return caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: study.lastModified ? new Date(study.lastModified).toISOString() : now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
}
