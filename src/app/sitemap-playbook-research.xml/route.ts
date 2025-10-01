
import { MetadataRoute } from 'next';

const baseUrl = 'https://cto.teamstation.dev';

const playbookPages = [
  '/playbook/hub',
  '/playbook/nearshore-vs-offshore',
  '/playbook/latam-economics',
  '/playbook/build-vs-buy',
  '/playbook/bias-free-technical-hiring-axiom-cortex',
  '/playbook/tco-model',
];

const researchPages = [
  '/research/hub',
  '/research/axiom-cortex-scientific-report',
  '/research/heuristically-trained-ai',
  '/research/framework-for-measuring-capacity',
  '/research/performance-metrics-in-ai-age',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [...playbookPages, ...researchPages].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));
}
