
import { MetadataRoute } from 'next';
import { countries } from '@/lib/countries';
import { roleCategories } from '@/lib/roles';
import { techCategories } from '@/lib/tech';
import { getAllCaseStudies } from '@/lib/case-studies';

const baseUrl = 'https://cto.teamstation.dev';

const staticPages = [
  { path: '', title: 'TeamStation AI – Nearshore IT Co-Pilot for CTOs' },
  { path: '/about', title: 'About TeamStation AI' },
  { path: '/comparisons', title: 'Vendor Comparisons Hub' },
  { path: '/faq', title: 'FAQ for CTOs' },
  { path: '/hire', title: 'Hire Nearshore Software Developers' },
  { path: '/hire/by-country', title: 'Hire Developers by Country' },
  { path: '/hire/by-role', title: 'Hire Developers by Role' },
  { path: '/hire/by-team-topologies', title: 'Hire by Team Topology' },
  { path: '/hire/by-technology', title: 'Hire by Technology' },
  { path: '/platform', title: 'TeamStation Platform Overview' },
  { path: '/playbook/hub', title: 'CTO Playbook Hub' },
  { path: '/pricing', title: 'Pricing & Engagement Models' },
  { path: '/process', title: 'Onboarding Process' },
  { path: '/privacy-policy', title: 'Privacy Policy' },
  { path: '/research/hub', title: 'Research Hub' },
  { path: '/services/integrated-services', title: 'Integrated Services' },
  { path: '/services/talent-onboarding', title: 'Talent Onboarding' },
  { path: '/technical-interview-evaluation', title: 'Technical Interview Evaluation' },
  { path: '/terms-of-service', title: 'Terms of Service' },
  { path: '/trust', title: 'Trust & Compliance Center' },
  { path: '/case-studies', title: 'Case Studies' },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  const staticEntries = staticPages.map((p) => ({
    url: `${baseUrl}${p.path}`,
    lastModified: now,
    changeFrequency: p.path === '' ? 'daily' : 'monthly',
    priority: p.path === '' ? 1.0 : 0.8,
  }));

  const hireByCountry = countries.map((c) => ({
    url: `${baseUrl}/hire/by-country/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const hireByRole = roleCategories.map((r) => ({
    url: `${baseUrl}/hire/by-role/${r.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const hireByTech = techCategories.flatMap((cat) =>
    cat.tech.map((t) => ({
      url: `${baseUrl}/hire/by-technology/${t.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  const caseStudies = await getAllCaseStudies();
  const caseStudyEntries = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: study.lastModified ? new Date(study.lastModified).toISOString() : now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticEntries,
    ...hireByCountry,
    ...hireByRole,
    ...hireByTech,
    ...caseStudyEntries,
  ];
}
