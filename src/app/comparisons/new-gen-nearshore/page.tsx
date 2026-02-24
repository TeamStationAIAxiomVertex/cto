
// NOTE: this file is a Server Component (no 'use client')
import 'server-only';

import type { Metadata } from 'next';
import Link from 'next/link';
import { DollarSign, GitCompare, Layers, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { JsonLd } from "../../../components/seo/JsonLd";
import { DecisionCard } from "../../../components/ui/DecisionCard";

// Load client-only widget as an island.
const ComparisonWidget = dynamic(() => import("../../../components/ComparisonWidget"),
  {
    ssr: false,
    loading: () => (
      <div className="text-center p-8 text-sm text-muted-foreground" aria-busy="true">
        Loading comparison widget…
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: { absolute: 'New-Gen Nearshore vs Offshore | TeamStation AI' },
  description: 'Evidence-based 5-way comparison of modern nearshore, onshore, offshore, and legacy models for software development.',
};

const sandlerCards = [
  {
    title: 'Cheap Hourly → Expensive Month',
    question: 'Why is the “cheap” option $5k+/mo more after overhead?',
    proof:
      'Evidence: $55/h offshore @173h with 25% overhead ≈ $11.9k/mo vs Co-Pilot Senior $6.9 $8.1k/mo.',
    icon: <DollarSign className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Overnight PRs → Daylight Cadence',
    question: 'How many releases died waiting for “LGTM”?',
    proof: 'Evidence: 120 PRs × (4h 1h) × $85 = $30,600/mo burned.',
    icon: <GitCompare className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Sprawl → System',
    question: 'How many vendors does it take to ship one roadmap?',
    proof: 'Evidence: Forecast vs actual variance <10%; fewer reopenings.',
    icon: <Layers className="h-8 w-8 text-primary" />,
  },
];

export default function NewGenNearshoreComparisonPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do you compare monthly costs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "We calculate a fully-loaded monthly cost. For 'Build-In' and 'Onshore', this includes salary plus a typical 30% burden for taxes and benefits. For 'Legacy' models, we add a configurable management overhead percentage to the base hourly rate to account for hidden administrative costs. The 'Nearshore IT Co-Pilot' has no hidden overhead; its all-inclusive rate is the final cost, reflecting bundled services like EOR, devices, and compliance.",
        },
      },
      {
        '@type': 'Question',
        name: 'Why count PR latency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "PR (Pull Request) latency is a direct measure of the 'Human Latency Tax' caused by time-zone differences. Every hour a developer waits for a review is wasted productivity. By quantifying this delay against a 1-hour ideal, we model the real financial cost of asynchronous communication, showing how daylight overlap (Nearshore) creates significant savings compared to overnight queues (Offshore).",
        },
      },
      {
        '@type': 'Question',
        name: 'What’s included in Nearshore IT Co-Pilot?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'The Nearshore IT Co-Pilot is an all-inclusive model. The rate includes not just the engineer\'s talent but a complete operational wrapper: Employer of Record (EOR) services for compliance, secure MDM-managed devices, enterprise-grade SSO/SAML/SCIM integration, and comprehensive cybersecurity insurance. This eliminates hidden costs and vendor sprawl, providing a single, predictable TCO.',
        },
      },
    ],
  };

  return (
    <main className="manual-page container max-w-7xl py-10">
      <JsonLd data={faqSchema} />
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>{' '}
        /{' '}
        <Link href="/comparisons" className="hover:text-foreground">
          Comparisons
        </Link>{' '}
        / <span>New-Gen Nearshore Analysis</span>
      </div>

      <header className="my-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-foreground">
          Fire offshore & legacy nearshore run an IT Co-Pilot in daylight.
        </h1>
        <p className="mt-4 max-w-[72ch] mx-auto text-lg leading-8 text-muted-foreground">
          Evidence, not theater. Day-one security, daylight shipping.
        </p>
         <nav className="mt-6 flex justify-center gap-4 text-sm">
            <Link href="/playbook/hub" className="text-primary hover:underline">CTO Playbook</Link>
            <Link href="/research/hub" className="text-primary hover:underline">Our Research</Link>
            <Link href="/hire" className="text-primary hover:underline">Hire Talent</Link>
        </nav>
      </header>

      {/* Client-only island */}
      <ComparisonWidget />

      <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {sandlerCards.map((card) => (
          <div
            key={card.title}
            className="glass-card-interactive gradient-ring rounded-2xl border border-border/70 bg-background/70 p-6 flex flex-col text-center shadow-lg"
          >
            <div className="flex justify-center">{card.icon}</div>
            <h3 className="text-lg font-bold text-foreground mt-4">
              {card.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-2 flex-grow">
              {card.proof}
            </p>
            <div className="mt-4 pt-4 border-t border-border/50">
              <p className="text-sm font-semibold text-primary/90 italic">
                {card.question}
              </p>
            </div>
          </div>
        ))}
      </div>
      <DecisionCard
        problem="CTOs face hidden risks in cost, compliance, and velocity when using legacy staffing models."
        stakes="Without addressing these fundamental issues, budgets spiral, projects miss critical deadlines, and security incidents become inevitable."
        approach="TeamStation AI's integrated platform delivers pre-vetted LATAM talent, audit-ready compliance with secure devices, and a predictable Total Cost of Ownership."
        evidence="On average, clients see a 40 60% lower TCO versus traditional models and US hiring. Case studies like [Currance](/case-studies) and [Parsable](/case-studies/parsable) demonstrate measurable improvements in velocity and security posture."
        related={[
          { label: "CTO Playbook", href: "/playbook/hub" },
          { label: "Our Vetting Process", href: "/technical-interview-evaluation" },
          { label: "Hire in Mexico", href: "/hire/by-country/mexico" }
        ]}
      />
    </main>
  );
}
