
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TeamStation vs Revelo: Which Model Actually Ships Faster?',
  description:
    "Compare TeamStation AI’s cognitive-science driven nearshore platform against Revelo’s talent marketplace. Evidence-based hiring, secure devices, and CFO-ready TCO.",
  alternates: {
    canonical: 'https://cto.teamstation.dev/comparisons/revelo',
  },
  openGraph: {
    title: 'TeamStation vs Revelo: Which Model Actually Ships Faster?',
    description:
      "Compare TeamStation AI’s cognitive-science driven nearshore platform against Revelo’s talent marketplace. Evidence-based hiring, secure devices, and CFO-ready TCO.",
    url: 'https://cto.teamstation.dev/comparisons/revelo',
    siteName: 'TeamStation AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TeamStation AI vs Revelo',
      },
    ],
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeamStation vs Revelo',
    description:
      "Evidence-driven nearshore teams vs marketplace staffing. Discover why TeamStation ships faster and safer than Revelo.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'TeamStation vs Revelo Comparison',
  description:
    "A CTO's guide comparing TeamStation AI’s integrated nearshore platform with Revelo’s marketplace model. Evidence-driven vetting, EOR compliance, and faster velocity.",
  brand: { '@type': 'Organization', name: 'TeamStation AI' },
  url: 'https://cto.teamstation.dev/comparisons/revelo',
  mainEntityOfPage: 'https://cto.teamstation.dev/comparisons/revelo',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is TeamStation different from Revelo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Revelo is primarily a marketplace that matches talent to companies, while TeamStation provides an integrated platform with Axiom Cortex™ AI vetting, MDM-managed devices, compliance, and CFO-ready TCO models.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Revelo provide secure devices and compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Revelo generally operates as a marketplace, leaving devices and compliance to the client. TeamStation includes corporate-owned, MDM-managed devices and REPSE/EOR compliance as part of one SLA.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which partner helps CTOs ship faster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TeamStation’s integrated model targets a first PR in under 10 business days with daylight overlap. Revelo timelines vary by candidate availability and client onboarding readiness.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does pricing compare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Revelo offers talent rates, but CTOs must account for hidden costs like vendor management and device security. TeamStation delivers a predictable, all-in TCO that finance teams approve.',
      },
    },
  ],
};

export default function ReveloComparisonPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />

      <main className="container max-w-4xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
          <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> /{' '}
          <span>Revelo</span>
        </div>

        <article className="prose dark:prose-invert max-w-none">
          <h1>TeamStation vs Revelo: What Actually Ships Faster?</h1>
          <p>
            Revelo is known as a marketplace for LATAM engineering talent. Their
            reach is large, but marketplaces put the burden of vetting, device
            security, and compliance on the client. TeamStation is different:
            we’re a full-stack platform that integrates Axiom Cortex™ cognitive
            vetting, corporate-owned devices, and EOR-native compliance in one
            SLA. The result? Faster onboarding, lower risk, and predictable TCO.
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
                <td>Vetting method</td>
                <td>Axiom Cortex™ cognitive vetting; scientific rubrics</td>
                <td>Marketplace interviews, variable processes</td>
              </tr>
              <tr>
                <td>Devices & MDM</td>
                <td>Corporate-owned, MDM-managed</td>
                <td>BYOD / client-provided</td>
              </tr>
              <tr>
                <td>Compliance</td>
                <td>EOR-native in 10+ LATAM countries</td>
                <td>Client-managed, varies</td>
              </tr>
              <tr>
                <td>Time-to-first-PR</td>
                <td>≤10 business days</td>
                <td>Varies by candidate</td>
              </tr>
              <tr>
                <td>Best fit</td>
                <td>CTOs seeking control + velocity</td>
                <td>Companies wanting candidate lists</td>
              </tr>
            </tbody>
          </table>

          <h2>Key Takeaways</h2>
          <ul>
            <li>
              <strong>Transparency:</strong> TeamStation provides auditable
              cognitive vetting and device compliance. Revelo leaves this to
              clients.
            </li>
            <li>
              <strong>Speed:</strong> We target first PRs within 10 business
              days. Marketplaces vary widely in timelines.
            </li>
            <li>
              <strong>TCO:</strong> Our platform includes hidden costs in a
              predictable model that CFOs sign off on.
            </li>
          </ul>

          <h2>FAQs</h2>
          <ul>
            <li>
              <strong>Does Revelo provide managed devices?</strong> – No, device
              security and MDM typically fall on the client.
            </li>
            <li>
              <strong>What’s the biggest difference?</strong> – TeamStation is a
              platform with one SLA covering hiring → devices → compliance →
              payroll. Revelo is a marketplace.
            </li>
            <li>
              <strong>Which is faster?</strong> – Our integrated onboarding
              enables code in ≤10 business days. Marketplaces vary.
            </li>
          </ul>

          <div className="mt-12 border-t border-border pt-6">
            <h3 className="font-semibold text-foreground">Explore More:</h3>
            <ul className="list-none p-0 space-y-2">
              <li>
                <Link href="/comparisons" className="text-primary hover:underline">
                  See All Comparisons <ArrowRight className="inline h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link href="/playbook/nearshore-vs-offshore" className="text-primary hover:underline">
                  Nearshore vs Offshore Playbook
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-primary hover:underline">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </>
  );
}
