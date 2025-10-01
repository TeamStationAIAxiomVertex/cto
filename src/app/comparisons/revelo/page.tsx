// src/app/comparisons/revelo/page.tsx
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TeamStation vs Revelo: Nearshore IT Co-Pilot vs Talent Marketplace',
  description:
    'CTO comparison: TeamStation AI’s integrated nearshore platform vs. Revelo’s talent marketplace. Scientific vetting, secure devices, compliance, and TCO.',
  alternates: {
    canonical: 'https://cto.teamstation.dev/comparisons/revelo',
  },
  openGraph: {
    title: 'TeamStation vs Revelo: Platform vs Talent Marketplace',
    description:
      'Compare TeamStation AI’s evidence-driven platform with Revelo’s LATAM talent marketplace. Cognitive vetting, EOR compliance, and predictable TCO.',
    url: 'https://cto.teamstation.dev/comparisons/revelo',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'TeamStation vs Revelo: Platform vs Marketplace',
    description:
      'TeamStation offers scientific vetting, device security, and audit-ready compliance. Revelo provides a marketplace of developers. Which model fits your roadmap?',
  },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "TeamStation AI vs Revelo Comparison",
  "description": "CTO-focused comparison of TeamStation AI’s platform vs. Revelo’s talent marketplace.",
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
      "name": "What is Revelo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Revelo is a talent marketplace that connects U.S. companies with developers in Latin America. It focuses on sourcing engineers but leaves compliance and operations to the client."
      }
    },
    {
      "@type": "Question",
      "name": "How is TeamStation different from Revelo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TeamStation bundles scientific vetting, secure devices, EOR compliance, and SLA-driven operations into one integrated platform, not just talent sourcing."
      }
    },
    {
      "@type": "Question",
      "name": "When is Revelo a better fit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Revelo can work for companies that already have strong HR, IT, and compliance infrastructure and simply want to add candidates from LATAM."
      }
    },
    {
      "@type": "Question",
      "name": "What’s the cost difference?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Revelo’s rates appear lower on a per-hour basis but don’t include hidden TCO costs like device management, compliance, or time-to-ramp. TeamStation provides CFO-ready TCO models with full operational coverage."
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
        <h1>TeamStation vs Revelo: Nearshore IT Co-Pilot vs Talent Marketplace</h1>
        <p>
          Revelo is a well-known LATAM talent marketplace connecting U.S. firms with
          regional developers. For CTOs, this model provides access to candidates,
          but leaves vetting, compliance, and operations largely in your hands.
          TeamStation AI takes a different path: a full platform that de-risks every
          step of nearshore hiring and delivery.
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
              <td>Axiom Cortex™, scientific, psychometric + work-sample evidence</td>
              <td>Marketplace screening, resumes + interviews</td>
            </tr>
            <tr>
              <td>Ramp</td>
              <td>≤10 business days to first PR</td>
              <td>Varies, candidate-dependent</td>
            </tr>
            <tr>
              <td>Devices</td>
              <td>Corporate-owned, MDM-managed</td>
              <td>Client responsibility</td>
            </tr>
            <tr>
              <td>Compliance</td>
              <td>EOR-native across LATAM, REPSE-aware</td>
              <td>Marketplace facilitation; client must ensure compliance</td>
            </tr>
            <tr>
              <td>Best for</td>
              <td>CTOs needing audit-ready pods with predictable TCO</td>
              <td>Companies with internal HR/IT wanting direct hires</td>
            </tr>
          </tbody>
        </table>

        <h2>Explore More</h2>
        <ul>
          <li><Link href="/comparisons/bairesdev">BairesDev Comparison</Link></li>
          <li><Link href="/comparisons/globant">Globant Comparison</Link></li>
          <li><Link href="/comparisons/tecla">TECLA Comparison</Link></li>
          <li><Link href="/research/hub">Research Hub</Link></li>
        </ul>
      </article>
    </main>
  );
}
