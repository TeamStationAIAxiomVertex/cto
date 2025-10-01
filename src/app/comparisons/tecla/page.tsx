// src/app/comparisons/tecla/page.tsx
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TeamStation vs TECLA: A CTO’s Comparison | TeamStation AI',
  description:
    'CTO’s guide to evaluating TECLA vs TeamStation AI. Compare vetting, compliance, devices, velocity, and total cost. Evidence, not vendor marketing.',
  alternates: {
    canonical: 'https://cto.teamstation.dev/comparisons/tecla',
  },
  openGraph: {
    title: 'TeamStation vs TECLA: A CTO’s Comparison',
    description:
      'CTO’s guide to evaluating TECLA vs TeamStation AI. Compare vetting, compliance, devices, velocity, and total cost.',
    url: 'https://cto.teamstation.dev/comparisons/tecla',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'TeamStation vs TECLA',
    description:
      'CTO’s guide to evaluating TECLA vs TeamStation AI with evidence, not marketing.',
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "TeamStation vs TECLA: A CTO’s Comparison",
  "author": { "@type": "Organization", "name": "TeamStation AI" },
  "publisher": { "@type": "Organization", "name": "TeamStation AI" },
  "mainEntityOfPage": "https://cto.teamstation.dev/comparisons/tecla",
  "description":
    "This article compares TeamStation AI’s integrated platform to TECLA’s community-driven model, focusing on vetting, compliance, velocity, and TCO.",
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
        "text": "TECLA operates as a curated talent network that connects companies with pre-vetted engineers. It focuses on matching but leaves compliance, devices, and delivery cadence to clients."
      }
    },
    {
      "@type": "Question",
      "name": "How is TeamStation different from TECLA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TeamStation provides an integrated nearshore IT Co-Pilot platform with cognitive vetting, device management, EOR compliance, and SLA-driven cadence — not just introductions."
      }
    },
    {
      "@type": "Question",
      "name": "When is TECLA a better fit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TECLA may fit companies with strong in-house HR and IT functions who only need help sourcing engineers, but not full operational governance."
      }
    },
    {
      "@type": "Question",
      "name": "Which model reduces risk more?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TeamStation reduces mis-hire risk with Axiom Cortex™ cognitive vetting and audit-ready operational controls. TECLA focuses on candidate sourcing, so delivery risk remains with the client."
      }
    }
  ]
};

export default function TeclaComparisonPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />
      <main className="container max-w-4xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> /{" "}
          <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> /{" "}
          <span>TECLA</span>
        </div>

        <article className="prose dark:prose-invert max-w-none">
          <h1>TeamStation vs TECLA: What CTOs Need to Know</h1>
          <p>
            TECLA operates as a curated talent community with LATAM engineers, while
            TeamStation AI provides a <strong>platformized nearshore IT Co-Pilot</strong>.
            This page compares the two so CTOs can choose based on evidence, not
            marketing.
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
                <td>Vetting Method</td>
                <td>Axiom Cortex™ psychometric & work-sample evidence</td>
                <td>Community membership, resume + interview driven</td>
              </tr>
              <tr>
                <td>Devices & MDM</td>
                <td>Corporate-owned, MDM-managed, SOC 2 aligned</td>
                <td>BYOD; device policies vary by client</td>
              </tr>
              <tr>
                <td>Compliance</td>
                <td>EOR-native across 10 LATAM countries; REPSE aware</td>
                <td>Marketplace model, compliance depends on partners</td>
              </tr>
              <tr>
                <td>Time to First PR</td>
                <td>≤10 business days (with envs ready)</td>
                <td>Varies; sourcing & onboarding adds friction</td>
              </tr>
              <tr>
                <td>Best for</td>
                <td>Audit-ready, daylight pods with velocity SLAs</td>
                <td>Startups needing flexible access to talent pools</td>
              </tr>
            </tbody>
          </table>

          <h2>Problem</h2>
          <p>
            Choosing between TECLA and TeamStation means deciding between a{" "}
            <em>community marketplace</em> and an <em>integrated platform</em>.
            Marketplace models often limit visibility into vetting and compliance.
          </p>

          <h2>Stakes</h2>
          <p>
            Without transparency, you risk mis-hires, audit failures, and higher
            true costs. A misaligned engineer or compliance gap can derail roadmaps.
          </p>

          <h2>Prescription</h2>
          <p>
            Use a system designed for <strong>scientific evidence and operational
            control</strong>. TeamStation AI gives you auditable proof via Axiom
            Cortex™, MDM security, and SLA-driven delivery.
          </p>

          <h2>Proof</h2>
          <p>
            Our platform offers a <strong>single pane of glass</strong> for
            compliance, vetting, and delivery telemetry. Evidence replaces opacity.
          </p>

          <h2>FAQs</h2>
          <h3>When is TECLA a better fit?</h3>
          <p>
            If your team needs flexible, short-term access to LATAM engineers and
            you can manage vetting, devices, and compliance internally.
          </p>
          <h3>What does TeamStation AI add?</h3>
          <p>
            Scientific vetting, managed devices, EOR compliance, and velocity SLAs —
            all bundled into one operational wrapper.
          </p>

          <nav className="mt-12 border-t border-border pt-6 text-sm">
            <h3 className="font-semibold text-foreground">Explore More:</h3>
            <ul className="list-none p-0 space-y-2">
              <li>
                <Link href="/comparisons" className="text-primary hover:underline">
                  All Comparisons
                </Link>
              </li>
              <li>
                <Link href="/playbook/hub" className="text-primary hover:underline">
                  CTO Playbook Hub
                </Link>
              </li>
              <li>
                <Link href="/research/hub" className="text-primary hover:underline">
                  Research Hub
                </Link>
              </li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}