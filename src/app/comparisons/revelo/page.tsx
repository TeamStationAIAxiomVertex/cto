
// src/app/comparisons/revelo/page.tsx
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TeamStation vs Revelo: LATAM Talent Platforms Compared',
  description:
    'CTO comparison: TeamStation AI vs Revelo. Evidence-based vetting, secure devices, compliance, and CFO-ready TCO vs. a candidate marketplace model.',
  alternates: {
    canonical: 'https://cto.teamstation.dev/comparisons/revelo',
  },
  openGraph: {
    title: 'TeamStation vs Revelo: CTO Guide',
    description:
      'Compare TeamStation AI’s integrated nearshore platform with Revelo’s marketplace. Vetting science, compliance, devices, and TCO trade-offs.',
    url: 'https://cto.teamstation.dev/comparisons/revelo',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'TeamStation vs Revelo: CTO Comparison',
    description:
      'Scientific vetting, secure MDM devices, EOR compliance, and predictable TCO vs. a candidate marketplace. Evidence for CTOs.',
  },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "TeamStation AI vs Revelo Comparison",
  "description": "CTO-focused comparison of TeamStation AI’s integrated platform against Revelo’s marketplace approach.",
  "brand": {
    "@type": "Organization",
    "name": "TeamStation AI",
    "url": "https://cto.teamstation.dev"
  },
  "isSimilarTo": {
    "@type": "Organization",
    "name": "Revelo",
    "url": "https://www.revelo.com/"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Revelo work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Revelo operates as a marketplace, connecting U.S. companies with LATAM candidates. It emphasizes matching speed but leaves compliance and device management to the client."
      }
    },
    {
      "@type": "Question",
      "name": "How does TeamStation differ from Revelo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TeamStation provides an integrated platform with Axiom Cortex™ scientific vetting, corporate-owned MDM-managed devices, audit-ready compliance, and CFO-ready TCO models."
      }
    },
    {
      "@type": "Question",
      "name": "Who is a better fit for Revelo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Revelo is a fit if you want to quickly browse a wide candidate pool and already have internal teams to handle compliance, devices, and onboarding."
      }
    },
    {
      "@type": "Question",
      "name": "What about ramp time and PR readiness?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TeamStation targets a first PR within 10 business days with daylight overlap. Revelo’s ramp speed depends on the client’s onboarding and management processes."
      }
    }
  ]
};

export default function ReveloComparisonPage() {
  return (
    <main className="container max-w-4xl py-12">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />

      <article className="prose dark:prose-invert max-w-none">
        <h1>TeamStation vs Revelo: LATAM Talent Platforms Compared</h1>
        <p>
          Revelo’s marketplace approach makes it simple to browse and contract 
          developers across LATAM. But CTOs often find that a marketplace is not 
          the same as a system. TeamStation AI integrates compliance, device 
          security, and cognitive vetting into one accountable SLA—so you get 
          teams that ship, not just resumes.
        </p>

        <h2>Verdict Snapshot</h2>
        <table>
          <thead>
            <tr>
              <th>Criterion</th>
              <th>TeamStation AI</th>
              <th>Revelo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vetting</td>
              <td>Axiom Cortex™, cognition-first, peer-reviewed</td>
              <td>Marketplace screening, CV/interview emphasis</td>
            </tr>
            <tr>
              <td>Ramp to PR</td>
              <td>≤10 days with daylight SLAs</td>
              <td>Depends on client onboarding & infra</td>
            </tr>
            <tr>
              <td>Devices</td>
              <td>Corporate-owned, MDM-managed, SOC2 aligned</td>
              <td>BYOD, client managed</td>
            </tr>
            <tr>
              <td>Compliance</td>
              <td>EOR-native in 10 countries, REPSE-aware</td>
              <td>Client responsibility, vendor optional</td>
            </tr>
            <tr>
              <td>Best for</td>
              <td>CTOs needing velocity, compliance, TCO control</td>
              <td>Startups needing fast access to resumes</td>
            </tr>
          </tbody>
        </table>

        <h2>Explore More</h2>
        <ul>
          <li><Link href="/playbook/hub">Playbook Hub</Link></li>
          <li><Link href="/research/hub">Research Hub</Link></li>
          <li><Link href="/case-studies">Case Studies</Link></li>
          <li><Link href="/hire/by-country/mexico">Hire in Mexico</Link></li>
        </ul>
      </article>
    </main>
  );
}
