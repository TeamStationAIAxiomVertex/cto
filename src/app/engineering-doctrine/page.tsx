import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "Engineering Doctrine for Distributed Teams | TeamStation AI",
  },
  description:
    "A formal engineering doctrine for CTO and CIO leaders running distributed teams. Team topology, delivery, integration, quality, and failure systems for 2026 and beyond.",
  keywords:
    "engineering doctrine, team topologies, distributed engineering, platform engineering, CTO operating model",
  alternates: {
    canonical: "/engineering-doctrine",
  },
};

const pageUrl = "https://cto.teamstation.dev/engineering-doctrine";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cto.teamstation.dev/" },
    { "@type": "ListItem", position: 2, name: "Engineering Doctrine", item: pageUrl },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: "Engineering Doctrine for Distributed Teams in 2026 and Beyond",
  description:
    "A practical doctrine for CTO and CIO leaders operating distributed teams across team topology, delivery flow, decisions, quality, integration, change, and failure.",
  mainEntityOfPage: pageUrl,
  author: { "@type": "Organization", name: "TeamStation AI" },
  publisher: { "@type": "Organization", name: "TeamStation AI" },
  inLanguage: "en-US",
  datePublished: "2026-02-21",
  dateModified: "2026-02-22",
  about: [
    "Team Topologies",
    "Engineering Management",
    "Platform Engineering",
    "Flow Efficiency",
    "Cognitive Fidelity",
    "Distributed Systems Operations",
    "Engineering Doctrine",
    "Distributed Engineering Operating System",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is TeamStation AI engineering doctrine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is a system of operating principles for distributed engineering teams focused on flow, reliability, quality, integration boundaries, and measurable decision quality.",
      },
    },
    {
      "@type": "Question",
      name: "How does team topology affect delivery outcomes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Topology defines ownership and interaction modes. Better topology reduces handoff delay, lowers coordination overhead, and improves release predictability.",
      },
    },
    {
      "@type": "Question",
      name: "Why does this matter for CTO and CIO leaders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It ties engineering execution to business outcomes by reducing hidden delivery risk, improving throughput stability, and strengthening governance under scale.",
      },
    },
  ],
};

const pillars = [
  {
    id: "teams",
    title: "Teams",
    thesis:
      "Reliability scales multiplicatively. One weak link can collapse the chain.",
    doctrine: [
      "O Ring Invariant for dependency heavy delivery systems.",
      "Sequential Probability Networks for effort across chained tasks.",
      "Wage Compression under AI pressure and replacement kinetics at end nodes.",
    ],
  },
  {
    id: "work",
    title: "Work",
    thesis:
      "Utilization above sustainable levels creates queue collapse and infinite delay.",
    doctrine: [
      "Kingman style queue behavior in software delivery systems.",
      "Code is inventory until deployed; inventory is liability.",
      "Cost of Delay should dominate local production optimization decisions.",
    ],
  },
  {
    id: "decisions",
    title: "Decisions",
    thesis:
      "Meaning is vector based, not keyword based. Boolean screening fails under complexity.",
    doctrine: [
      "Vector space evaluation for technical judgment and latent capability.",
      "Bayesian latent measurement for role fit decisions.",
      "Adverse selection controls via principal agent alignment mechanisms.",
    ],
  },
  {
    id: "quality",
    title: "Quality",
    thesis:
      "Syntax can be imitated; systems thinking and metacognition remain scarce.",
    doctrine: [
      "Cognitive Fidelity as an isomorphism between model and system state.",
      "Turing Trap mitigation through higher order evaluation design.",
      "Defect amplification economics and mutation based validation discipline.",
    ],
  },
  {
    id: "integration",
    title: "Integration",
    thesis:
      "Most failures occur at boundaries where ownership and context are weakest.",
    doctrine: [
      "Interface Invariant for cross team and cross service failure concentration.",
      "Dependency density growth and asynchronous delay amplification.",
      "Topology aware integration controls for distributed organizations.",
    ],
  },
  {
    id: "change",
    title: "Change",
    thesis:
      "Service models scale linearly; platform operating models scale exponentially.",
    doctrine: [
      "Platform economics as a throughput multiplier.",
      "Change programs must separate local wins from systemic improvements.",
      "Adoption design should reduce cognitive load before adding process load.",
    ],
  },
  {
    id: "failure",
    title: "Failure",
    thesis:
      "Failure is not noise. It is data about weak interfaces, weak ownership, and weak recovery design.",
    doctrine: [
      "Blameless failure science focused on system behavior, not personal blame.",
      "Recovery metrics that track system healing speed and repeat incident patterns.",
      "Mean time to restore trust, not only mean time to restore service.",
    ],
  },
];

export default function EngineeringDoctrinePage() {
  return (
    <main className="container max-w-6xl py-12">
      <JsonLd data={[breadcrumbSchema, articleSchema, faqSchema]} />

      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>{" "}
        / <span>Engineering Doctrine</span>
      </div>

      <header className="my-12 rounded-xl border bg-card p-8 md:p-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          TeamStation AI Engineering Doctrine
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
          The Distributed Engineering Operating System for 2026 and Beyond
        </h1>
        <p className="mt-5 text-muted-foreground leading-7">
          This doctrine is a formal system for CTO and CIO teams that run
          distributed engineering organizations. It explains team topology,
          delivery flow, decision quality, integration boundaries, and failure
          recovery in plain operating terms.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link href="/hire/by-team-topologies" className="text-primary hover:underline">
            Team Topologies Guide
          </Link>
          <Link href="/research/hub" className="text-primary hover:underline">
            Research Hub
          </Link>
          <Link href="/playbook/hub" className="text-primary hover:underline">
            CTO Playbook
          </Link>
          <Link href="/comparisons/bairesdev" className="text-primary hover:underline">
            TeamStation vs BairesDev
          </Link>
          <Link href="https://engineering.teamstation.dev" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
            Engineering Doctrine Source
          </Link>
        </div>
      </header>

      <section className="my-16">
        <h2 className="text-3xl font-bold">The Seven Pillars</h2>
        <p className="mt-4 text-muted-foreground leading-7">
          The doctrine uses seven pillars. Each pillar answers one practical
          question: where the pain comes from, what system to apply, and how
          you prove it is working.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => (
            <article key={pillar.id} className="rounded-lg border bg-card p-6">
              <h3 className="text-2xl font-bold">{pillar.title}</h3>
              <p className="mt-3 text-sm font-semibold text-primary">
                Core Thesis
              </p>
              <p className="mt-2 text-muted-foreground leading-7">
                {pillar.thesis}
              </p>
              <p className="mt-4 text-sm font-semibold text-primary">
                Doctrine Principles
              </p>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground space-y-2">
                {pillar.doctrine.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="my-16 rounded-lg border bg-card p-8">
        <h2 className="text-3xl font-bold">Team Topologies for 2026 and Beyond</h2>
        <div className="mt-6 space-y-5 text-muted-foreground leading-7">
          <p>
            In 2026, topology is not an org chart problem. It is a delivery
            physics problem. If ownership is unclear, delivery slows. If
            interfaces are weak, defects rise. If decision rights are fuzzy,
            roadmaps drift.
          </p>
          <p>
            Start with three checks: who owns the outcome, who owns the
            interface, and who owns incident recovery. If you cannot answer
            those quickly, your topology is already creating risk.
          </p>
          <p>
            The target state is simple: clear bounded teams, low handoff
            friction, stable queue behavior, and measurable recovery quality.
            This doctrine exists to help leadership build that state on purpose.
          </p>
        </div>
      </section>

      <section className="my-16 rounded-lg border bg-card p-8">
        <h2 className="text-3xl font-bold">Operating Implications for Market Visibility</h2>
        <div className="mt-6 space-y-5 text-muted-foreground leading-7">
          <p>
            Doctrine should not be treated as a single isolated page. It should
            function as a central knowledge node connected to team topology,
            hiring flows, playbook chapters, and research outputs. This creates
            topical depth and stronger crawl pathways for high intent leadership
            searches.
          </p>
          <p>
            For search performance, the doctrine page should be linked from high
            authority pages with intent aligned anchors such as distributed
            engineering doctrine, team topology operating model, and delivery
            reliability framework. Those anchors should map to both transactional
            and informational paths so users can move from strategy to action.
          </p>
          <p>
            The doctrine also strengthens entity-level trust. When combined with
            consistent structured data, clean canonical handling, and subdomain
            intent boundaries, it improves thematic authority for executive
            search topics where generic vendor pages often underperform.
          </p>
        </div>
      </section>

      <section className="my-16 rounded-lg border bg-card p-8">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-4">
          <article className="rounded border bg-background p-4">
            <h3 className="font-semibold">
              How does doctrine map to real team design decisions?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-6">
              Use doctrine to choose topology boundaries, interaction modes,
              queue controls, and governance scorecards before scaling headcount.
            </p>
          </article>
          <article className="rounded border bg-background p-4">
            <h3 className="font-semibold">
              Is this only for very large enterprises?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-6">
              No. Smaller teams benefit because doctrine prevents hidden delivery
              debt early, when org design errors are cheaper to fix.
            </p>
          </article>
          <article className="rounded border bg-background p-4">
            <h3 className="font-semibold">
              What should leadership do first?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-6">
              Start with the team topology model, baseline your queue and
              reliability metrics, then align role hiring and platform controls
              to the target operating state.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
