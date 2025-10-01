import { MetadataRoute } from 'next';
import { countries } from '@/lib/countries';
import { roleCategories } from '@/lib/roles';
import { techCategories } from '@/lib/tech';
import { getAllCaseStudies } from '@/lib/case-studies';

const baseUrl = 'https://cto.teamstation.dev';

// --- STATIC PAGES ---
const staticPages = [
  '', '/about', '/comparisons', '/faq', '/hire', '/hire/by-country',
  '/hire/by-role', '/hire/by-team-topologies', '/hire/by-technology',
  '/platform', '/pricing', '/process',
  '/services/integrated-services', '/services/talent-onboarding',
  '/technical-interview-evaluation', '/trust',
  '/case-studies',
];

// --- PLAYBOOK & RESEARCH (higher priority, weekly) ---
const priorityWeekly = [
  '/playbook/hub', '/playbook/nearshore-vs-offshore',
  '/playbook/latam-economics', '/playbook/build-vs-buy',
  '/playbook/bias-free-technical-hiring-axiom-cortex',
  '/playbook/tco-model', '/research/hub',
  '/research/axiom-cortex-scientific-report',
  '/research/performance-evaluation-framework',
  '/research/technical-talent-evaluation-system',
  '/research/framework-for-measuring-capacity',
  '/research/heuristically-trained-ai',
  '/research/performance-metrics-in-ai-age',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  // Root + core pages
  const staticEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'daily' : 'monthly',
    priority: path === '' ? 1.0 : 0.8,
  }));

  // Playbook / Research priority cluster
  const weeklyEntries = priorityWeekly.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Programmatic: Hire by Country
  const hireByCountry = countries.map((c) => ({
    url: `${baseUrl}/hire/by-country/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Programmatic: Hire by Role
  const hireByRole = roleCategories.map((r) => ({
    url: `${baseUrl}/hire/by-role/${r.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Programmatic: Hire by Technology
  const hireByTech = techCategories.flatMap((cat) =>
    cat.tech.map((t) => ({
      url: `${baseUrl}/hire/by-technology/${t.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  // Case Studies
  const caseStudies = await getAllCaseStudies();
  const caseStudyEntries = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: study.lastModified
      ? new Date(study.lastModified).toISOString()
      : now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Legal / utility (low priority)
  const lowPriority = ['/terms-of-service', '/privacy-policy'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  return [
    ...staticEntries,
    ...weeklyEntries,
    ...hireByCountry,
    ...hireByRole,
    ...hireByTech,
    ...caseStudyEntries,
    ...lowPriority,
  ];
}
