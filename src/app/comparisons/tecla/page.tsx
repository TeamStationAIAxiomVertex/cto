
// src/app/comparisons/tecla/page.tsx
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TeamStation vs TECLA: LATAM Talent Networks Compared',
  description:
    'CTO guide: TeamStation AI vs TECLA. Integrated vetting, secure MDM devices, compliance, and predictable TCO vs. a talent network referral model.',
  alternates: {
    canonical: 'https://cto.teamstation.dev/comparisons/tecla',
  },
  openGraph: {
    title: 'TeamStation vs TECLA: CTO Comparison',
    description:
      'Compare TeamStation AI’s integrated nearshore platform with TECLA’s curated network. Vetting science, compliance, devices, and TCO implications.',
    url: 'https://cto.teamstation.dev/comparisons/tecla',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'TeamStation vs TECLA: LATAM Network vs Platform',
    description:
      'Scientific vetting, MDM-secured devices, audit-ready compliance, and CFO-grade TCO vs. TECLA’s network referrals. Evidence for CTOs.',
  },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "TeamStation AI vs TECLA Comparison",
  "description": "CTO-focused comparison of TeamStation AI’s integrated platform against TECLA’s curated network model.",
  "brand": {
    "@type": "Organization",
    "name": "TeamStation AI",
    "url": "https://cto.teamstation.dev"
  },
  "isSimilarTo": {
    "@type": "Organization",
    "name": "TECLA",
    "url": "https://www.tecla.io/"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does TECLA work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TECLA operates as a curated talent network, referring candidates from its pool of pre-vetted engineers. Compliance, devices, and ramp-up depend on the client."
      }
    },
    {
      "@type": "Question",
      "name": "How is TeamStation different from TECLA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TeamStation integrates scientific vetting (Axiom Cortex™), corporate-owned secure devices, EOR-native compliance, and a predictable TCO framework in a single accountable SLA."
      }
    },
    {
      "@type": "Question",
      "name": "When is TECLA a better fit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TECLA is a fit if you want quick introductions to LATAM engineers and already have internal infrastructure to manage compliance, security, and onboarding."
      }
    },
    {
      "@type": "Question",
      "name": "What’s the difference in ramp-up time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TeamStation targets a first PR within 10 business days with daylight overlap. TECLA’s ramp depends on the client’s internal onboarding process."
      }
    }
  ]
};

export default function TeclaComparisonPage() {
  return (
    <main className="container max-w-4xl py-12">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />

      <article className="prose dark:prose-invert max-w-none">
        <h1>TeamStation vs TECLA: LATAM Talent Networks Compared</h1>
        <p>
          TECLA connects U.S. companies with Latin American engineers through a 
          curated network. It’s essentially a referral model—fast introductions, 
          but the operational load remains on your team. TeamStation AI is built 
          differently: it’s a full platform. Vetting, compliance, secure devices, 
          and ramp SLAs are built in so you get shipping code, not just candidate 
          names.
        </p>

        <h2>Verdict Snapshot</h2>
        <table>
          <thead>
            <tr>
              <th>Criterion</th>
              <th>TeamStation AI</th>
              <th>TECLA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vetting</td>
              <td>Axiom Cortex™, psychometrics, evidence-based</td>
              <td>Curated network; vetting depth varies</td>
            </tr>
            <tr>
              <td>Ramp to PR</td>
              <td>≤10 days with daylight SLAs</td>
              <td>Depends on client onboarding</td>
            </tr>
            <tr>
              <td>Devices</td>
              <td>Corporate-owned, MDM-managed, SOC2 aligned</td>
              <td>BYOD, client managed</td>
            </tr>
            <tr>
              <td>Compliance</td>
              <td>EOR-native in 10 countries, REPSE-aware</td>
              <td>Client responsibility</td>
            </tr>
            <tr>
              <td>Best for</td>
              <td>CTOs who need velocity, compliance, visibility</td>
              <td>Companies needing quick introductions</td>
            </tr>
          </tbody>
        </table>

        <h2>Explore More</h2>
        <ul>
          <li><Link href="/comparisons/bairesdev">BairesDev Comparison</Link></li>
          <li><Link href="/research/hub">Research Hub</Link></li>
          <li><Link href="/playbook/hub">Playbook Hub</Link></li>
          <li><Link href="/case-studies">Case Studies</Link></li>
        </ul>
      </article>
    </main>
  );
}
