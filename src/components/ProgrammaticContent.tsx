// src/components/ProgrammaticContent.tsx
import React from "react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { allTech, TechEntry } from "@/lib/tech";
import CardGuidanceTooltip from "@/components/ui/card-guidance-tooltip";
import { InfoDropdown } from "@/components/client/info-dropdown";
import { CheckCircle, Gauge, ShieldCheck } from "lucide-react";
import {
  LiftCard,
  RevealBlock,
  RevealSection,
  StaggerGrid,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";

interface ProgrammaticContentProps {
  tech: TechEntry;
  slug: string;
}

type CategoryLens = {
  operatingSurface: string;
  failurePattern: string;
  validationFocus: string;
  first90Signals: string;
  ownershipBoundary: string;
};

function slugHash(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function pickBySeed<T>(items: T[], seed: number): T {
  return items[seed % items.length];
}

function normalizePhrase(value: string): string {
  return value
    .replace(/\*\*/g, "")
    .replace(/\.$/, "")
    .replace(/^Our\s+/i, "")
    .replace(/^We\s+(vet|test|assess)\s+for\s+/i, "")
    .replace(/^Deep understanding of\s+/i, "")
    .replace(/^Mastery of\s+/i, "")
    .trim();
}

function getCategoryLens(tech: TechEntry): CategoryLens {
  const key = `${tech.categorySlug} ${tech.category}`.toLowerCase();

  if (/(devops|cloud|infra|platform|sre|kubernetes|terraform)/.test(key)) {
    return {
      operatingSurface: "deployment pipelines, cloud environments, and runtime controls",
      failurePattern: "configuration drift, brittle releases, and hidden platform bottlenecks",
      validationFocus: "infrastructure design judgment, automation quality, and incident response behavior",
      first90Signals: "change-failure rate, deployment lead time, and rollback quality",
      ownershipBoundary: "platform ownership, release controls, and cross-team enablement expectations",
    };
  }
  if (/(frontend|ui|web|react|vue|angular)/.test(key)) {
    return {
      operatingSurface: "product UX delivery, interface quality, and front-end performance",
      failurePattern: "slow review cycles, inconsistent UI patterns, and regressions in release velocity",
      validationFocus: "component architecture, state management decisions, and product collaboration quality",
      first90Signals: "cycle time, bug escape rate, and UX consistency across shipped features",
      ownershipBoundary: "product engineering ownership, design handoff rules, and release acceptance criteria",
    };
  }
  if (/(data|analytics|bi|warehouse|dbt|etl|ml|ai)/.test(key)) {
    return {
      operatingSurface: "data pipelines, model reliability, and reporting trust",
      failurePattern: "pipeline fragility, unclear lineage, and slow issue resolution across stakeholders",
      validationFocus: "data modeling tradeoffs, observability discipline, and production troubleshooting",
      first90Signals: "pipeline reliability, freshness SLA adherence, and downstream defect reduction",
      ownershipBoundary: "data contracts, monitoring ownership, and escalation paths for business-critical flows",
    };
  }
  if (/(security|soc|iam|compliance|edr|zap|snyk)/.test(key)) {
    return {
      operatingSurface: "security controls, policy enforcement, and audit readiness",
      failurePattern: "control gaps, weak escalation loops, and reactive remediation work",
      validationFocus: "risk judgment, control implementation quality, and communication under incident pressure",
      first90Signals: "time-to-detect, remediation SLA adherence, and control coverage improvement",
      ownershipBoundary: "security decision rights, exception handling, and coordination with engineering leads",
    };
  }
  if (/(mobile|android|ios|react-native|flutter)/.test(key)) {
    return {
      operatingSurface: "mobile release cadence, device quality, and app reliability in production",
      failurePattern: "release delays, platform-specific defects, and weak QA feedback loops",
      validationFocus: "mobile architecture choices, release process discipline, and debugging depth",
      first90Signals: "release predictability, crash trend improvement, and cycle time stability",
      ownershipBoundary: "platform-specific ownership, QA gates, and escalation rules for hotfixes",
    };
  }

  return {
    operatingSurface: "delivery workflows, technical ownership, and execution quality",
    failurePattern: "rework, coordination drag, and unclear accountability across teams",
    validationFocus: "architecture reasoning, execution reliability, and communication under constraints",
    first90Signals: "lead time, defect containment, and delivery predictability",
    ownershipBoundary: "role scope, decision rights, and measurable production responsibilities",
  };
}

/**
 * Renders the primary prose content for programmatic pages.
 */
export const ProgrammaticContent: React.FC<ProgrammaticContentProps> = ({
  tech,
  slug,
}) => {
  const siteUrl = "https://cto.teamstation.dev";
  const relatedTech = (tech.interlink_slugs || [])
    .map((s) => ({ slug: s, entry: (allTech as Record<string, TechEntry>)[s] }))
    .filter(
      (item): item is { slug: string; entry: TechEntry } => Boolean(item.entry)
    )
    .slice(0, 16);

  const comparisonLinks = (tech.comparison_slugs || []).slice(0, 8);
  const seed = slugHash(slug);
  const lens = getCategoryLens(tech);
  const evalHighlights = (tech.evaluation || [])
    .slice(0, 3)
    .map(normalizePhrase)
    .filter(Boolean);
  const painThemes = (tech.pains || [])
    .slice(0, 2)
    .map((pain) => normalizePhrase(pain.pain))
    .filter(Boolean);
  const relatedTechNames = relatedTech.slice(0, 3).map((item) => item.entry.name);
  const comparisonCount = comparisonLinks.length;
  const categoryKeyword = tech.category.split("&")[0]?.trim() || tech.category;
  const briefOpener = pickBySeed(
    [
      `For **${tech.name}** hiring, the CTO decision is about system performance, not just staffing volume.`,
      `A strong **${tech.name}** hiring plan should be treated as a delivery-system decision, not a recruiting transaction.`,
      `Hiring **${tech.name}** talent is an operating model choice because it directly changes execution speed and control quality.`,
    ],
    seed
  );
  const sourcingAngle = pickBySeed(
    [
      "Define capability targets before sourcing so interview loops measure real production work.",
      "Start with outcome targets before outreach so the team hires for execution fit instead of keyword overlap.",
      "Lock the role charter first, then source against measurable production responsibilities.",
    ],
    seed + 7
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Hire", item: `${siteUrl}/hire` },
      {
        "@type": "ListItem",
        position: 3,
        name: "By Technology",
        item: `${siteUrl}/hire/by-technology`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: tech.name,
        item: `${siteUrl}/hire/by-technology/${slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Hire ${tech.name} Engineers`,
    serviceType: "Nearshore IT Staff Augmentation",
    provider: {
      "@type": "Organization",
      name: "TeamStation AI",
      url: siteUrl,
    },
    areaServed: "United States",
    description: tech.meta_description || tech.intro,
    keywords: `${tech.name}, nearshore ${tech.name}, hire ${tech.name} engineers, latam ${tech.name}`,
    url: `${siteUrl}/hire/by-technology/${slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Why hire nearshore ${tech.name} engineers?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Nearshore ${tech.name} teams improve delivery velocity with daylight overlap, faster feedback loops, and stronger engineering accountability.`,
        },
      },
      {
        "@type": "Question",
        name: `How does TeamStation evaluate ${tech.name} talent?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Candidates are assessed through practical technical scenarios, role specific evaluation criteria, and production readiness review aligned to the target stack.`,
        },
      },
      {
        "@type": "Question",
        name: `What work is this ${tech.name} team typically responsible for?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: tech.technical_analysis,
        },
      },
    ],
  };

  const faqItems = [
    {
      q: `How do we reduce delivery risk when hiring ${tech.name} engineers?`,
      a: `Start with a clear ownership charter, then evaluate candidates against real ${tech.name} production scenarios. For this page, the key checks are ${lens.validationFocus}. Tie interview evidence to a day-30 onboarding plan before you extend an offer.`,
    },
    {
      q: `What should CTO and CIO leaders measure in the first 90 days?`,
      a: `Track ${lens.first90Signals}. Translate each metric into business language such as release confidence, roadmap stability, and support load. This is how a ${tech.name} hiring decision becomes a measurable operating outcome.`,
    },
    {
      q: `How does nearshore ${tech.name} hiring compare to low-cost offshore models?`,
      a: `Hourly rate alone is not the KPI. A stronger model improves same day decision speed, reduces rework, and lowers management overhead. For most CTO and CIO teams, that combination produces better total cost of delivery than rate card optimization alone.`,
    },
    {
      q: `Which pages should we use for planning, hiring, and validation?`,
      a: `Use this ${tech.name} page for role targeting and proof checkpoints, then connect to the playbook for economics, the role guides for team design, and research protocols for evaluation rigor. This interlinked path reduces hiring drift and improves executive decision speed.`,
    },
  ];

  const executiveBriefParagraphs = [
    <>
      {briefOpener} High-performing teams optimize for <strong>delivery loops</strong>, <strong>technical ownership</strong>, and{" "}
      <strong>coordination cost</strong>. For {tech.name}, the real execution surface is{" "}
      {lens.operatingSurface}. When teams feel friction here, the root problem is usually{" "}
      {lens.failurePattern}, not effort.
    </>,
    <>
      {sourcingAngle} Separate <strong>must-have skills</strong> from trainable details, and tie interviews to business-critical workflows. On most {tech.name} teams, that means testing {lens.validationFocus}. This lowers false positives and keeps hiring aligned with production reality.
    </>,
    <>
      Use the{" "}
      <Link href="/playbook/tco-model" className="text-primary hover:underline">
        <strong>TCO model</strong>
      </Link>{" "}
      to price the role as a <strong>throughput decision</strong>, validate economics in the{" "}
      <Link href="/playbook/latam-economics" className="text-primary hover:underline">
        LATAM economics guide
      </Link>
      , and connect evaluation rigor through the{" "}
      <Link href="/technical-interview-evaluation" className="text-primary hover:underline">
        technical evaluation report pattern
      </Link>
      . If you need operating doctrine, route stakeholders to{" "}
      <a href="https://cto.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
        cto.teamstation.dev
      </a>{" "}
      and hiring paths at{" "}
      <a href="https://hire.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
        hire.teamstation.dev
      </a>
      .
    </>,
    <>
      Keep language simple inside your process: define outcomes, prove capability, assign ownership, and measure the first 90 days. For {tech.name}, the first executive scorecard should track {lens.first90Signals}. That is how you turn hiring into a repeatable operating system.
    </>,
    ...(painThemes.length
      ? [
          <>
            Common trigger conditions on this page include <strong>{painThemes.join(" and ")}</strong>. Those are not isolated recruiting issues. They usually signal gaps in role design, validation quality, or governance cadence. Use the pain cards below as diagnosis inputs, then build the role charter around measurable outcomes.
          </>,
        ]
      : []),
  ];

  const implementationBlueprintParagraphs = [
    <>
      <strong>Weeks 1-2:</strong> set the operating baseline for {tech.name}. Define {lens.ownershipBoundary}, environment access, review standards, and escalation rules. This protects onboarding speed without losing control.
    </>,
    <>
      <strong>Weeks 3-6:</strong> normalize execution loops. Focus on {lens.validationFocus} in real work, not synthetic tasks. Track early signals tied to {lens.first90Signals} and adjust scope before hidden drift builds up.
    </>,
    <>
      <strong>Weeks 7-12:</strong> move from onboarding to durable contribution. By this stage, the role should show stable throughput, clear handoffs, and lower management overhead across {categoryKeyword.toLowerCase()} workflows.
    </>,
    <>
      Keep the rollout connected: use{" "}
      <Link href="/hire/by-role" className="text-primary hover:underline">
        hire by role
      </Link>{" "}
      for role depth,{" "}
      <Link href="/hire/by-team-topologies" className="text-primary hover:underline">
        team topology mapping
      </Link>{" "}
      for ownership design, and{" "}
      <a
        href="https://research.teamstation.dev/protocols/evaluation"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        evaluation protocols
      </a>{" "}
      for calibration standards.
    </>,
  ];

  const decisionFrameworkParagraphs = [
    <>
      The best CTO decisions for <strong>{tech.name}</strong> start with outcome targets, not resume filters. Define the delivery constraint first, then map the role to explicit production responsibilities across {lens.operatingSurface}.
    </>,
    <>
      Use three gates in the interview loop: <strong>architecture judgment</strong>, <strong>execution reliability</strong>, and <strong>operating behavior</strong>. For {tech.name}, your evidence set should include {evalHighlights.join(", ").toLowerCase() || lens.validationFocus}.
    </>,
    <>
      The financial model should be <strong>risk-adjusted</strong>. A stronger {tech.name} hire often lowers total cost by reducing rework, shortening decision cycles, and improving release confidence. Rate-only optimization usually hides the cost of delay and management drag.
    </>,
    <>
      Before onboarding, document {lens.ownershipBoundary}. This makes handoffs measurable and gives the CTO a clean line of sight into performance during the first quarter.
    </>,
    ...(relatedTechNames.length
      ? [
          <>
            If this role interacts heavily with <strong>{relatedTechNames.join(", ")}</strong>, define interface ownership up front. Cross-stack ambiguity is one of the fastest ways to lose delivery speed after hiring.
          </>,
        ]
      : []),
  ];

  const governanceScorecardParagraphs = [
    <>
      A good {tech.name} hire needs a <strong>90-day scorecard</strong>. In days 1-30, measure onboarding integration and handoff quality. In days 31-60, measure execution stability. In days 61-90, measure sustained impact against {lens.first90Signals}.
    </>,
    <>
      Translate each engineering signal into executive language. If review latency drops or reliability improves, show how that changes release confidence, roadmap timing, and cost predictability. This creates a clear operating narrative for CTO and CIO stakeholders.
    </>,
    <>
      Keep a small monthly risk register. Use named owners, mitigation dates, and simple status labels. For {tech.name} roles, this prevents silent drift in {lens.ownershipBoundary.toLowerCase()}.
    </>,
    <>
      Repeat the same scorecard logic across new hiring cycles. Reusable standards improve both <strong>SEO intent coverage</strong> and execution quality because each page supports a consistent decision process while staying specific to the technology.
    </>,
  ];

  const decisionSystemSteps = [
    {
      title: "1. Define the constraint before opening requisitions",
      body: `Start with the production bottleneck, not the job title. For ${tech.name}, identify where delivery slows down today: ${lens.failurePattern}. This gives the hiring motion a measurable objective and prevents resume-driven selection.`,
      bullets: [
        `Document the exact ${tech.name} workflow where delay starts.`,
        `Set one speed metric and one quality metric tied to ${lens.first90Signals}.`,
        "Name the owner who will accept or reject role scope before sourcing begins.",
      ],
    },
    {
      title: "2. Prove capability with real delivery scenarios",
      body: `Keyword familiarity is not enough. Interview loops should test ${lens.validationFocus} using scenarios that mirror your real operating environment. This increases hiring signal quality and reduces onboarding surprises.`,
      bullets: [
        `Use evidence-based prompts tied to ${tech.name} production responsibilities.`,
        "Score tradeoff reasoning, implementation reliability, and escalation behavior separately.",
        "Reject vague answers even if tool vocabulary is strong.",
      ],
    },
    {
      title: "3. Convert selection into an operating system",
      body: `The hire is only step one. The outcome is a controlled operating model with clear ${lens.ownershipBoundary.toLowerCase()} and visible telemetry. When these controls exist, management overhead drops and delivery quality improves faster.`,
      bullets: [
        "Define day-1 ownership, review cadence, and escalation path.",
        "Track day-30/day-60/day-90 scorecard signals in one dashboard.",
        "Escalate role-design mismatches early instead of masking them as performance issues.",
      ],
    },
  ];

  const contextualLinkMesh = [
    { href: "/playbook/hub", label: "CTO playbook hub for operating decisions", external: false },
    { href: "/playbook/tco-model", label: "TCO model for cost and throughput tradeoffs", external: false },
    { href: "/playbook/latam-economics", label: "LATAM economics guide for budget planning", external: false },
    { href: "/research/hub", label: "research hub for evidence frameworks", external: false },
    { href: "/research/framework-for-measuring-capacity", label: "capacity framework for throughput measurement", external: false },
    { href: "https://hire.teamstation.dev", label: "hire.teamstation.dev for hiring path continuity", external: true },
    { href: "https://research.teamstation.dev/protocols/evaluation", label: "evaluation protocols for role calibration", external: true },
    { href: "https://docs.teamstation.dev", label: "docs.teamstation.dev for implementation references", external: true },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <div className="manual-page reading-shell py-10">
        <div className="mb-6 rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>{" "}
          /
          <Link href="/hire" className="hover:text-foreground">
            Hire
          </Link>{" "}
          /
          <Link href="/hire/by-technology" className="hover:text-foreground">
            By Technology
          </Link>{" "}
          /<span>{tech.name}</span>
        </div>
        <RevealBlock className="glass-panel gradient-ring hero-depth system-grid my-8 rounded-2xl p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Hire by Technology
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Hire {tech.name} Engineers
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{tech.intro}</p>
          <StaggerGrid className="mt-5 grid gap-3 md:grid-cols-3">
            <StaggerItem className="rounded-xl border border-border/70 bg-background/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Delivery fit</p>
              <p className="mt-2 text-sm text-muted-foreground">Role charter and execution ownership aligned to production outcomes.</p>
            </StaggerItem>
            <StaggerItem className="rounded-xl border border-border/70 bg-background/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Evaluation signal</p>
              <p className="mt-2 text-sm text-muted-foreground">Evidence based screening before shortlist delivery and onboarding risk.</p>
            </StaggerItem>
            <StaggerItem className="rounded-xl border border-border/70 bg-background/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Operating control</p>
              <p className="mt-2 text-sm text-muted-foreground">Telemetry and governance checkpoints for CTO and CIO oversight.</p>
            </StaggerItem>
          </StaggerGrid>
          <div className="mt-5">
            <InfoDropdown label="How to use this guide">
              <p>Use this page to identify the issue, validate the solution pattern, and confirm proof checkpoints before you hire.</p>
            </InfoDropdown>
          </div>
        </RevealBlock>

        <RevealSection className="glass-panel gradient-ring my-12 rounded-2xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-center">
            Executive Brief for CTO and CIO Teams
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-7">
            {executiveBriefParagraphs.map((paragraph, idx) => (
              <p key={`${slug}-exec-brief-${idx}`}>{paragraph}</p>
            ))}
          </div>
        </RevealSection>

        {tech.pains && tech.pains.length > 0 && (
          <RevealSection className="my-12">
            <h2 className="text-center text-3xl font-bold">Sound Familiar?</h2>
            <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">
              Common problems we solve by providing true {tech.name} experts.
            </p>
            <StaggerGrid className="card-grid-tight-3 mt-8">
              {tech.pains.map((item) => (
                <StaggerItem
                  key={item.pain}
                  className="mx-auto w-full max-w-sm"
                >
                  <LiftCard className="glass-card-interactive gradient-ring flex w-full flex-col rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-primary">
                      {item.pain}
                    </p>
                    <CardGuidanceTooltip
                      issue={item.problem}
                      solution={item.solution}
                      proof={item.kpi}
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                      {React.createElement(item.icon, {
                        className: "h-6 w-6 text-primary",
                      })}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      Operating reality
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground ">
                    {item.problem}
                  </p>
                  <div className="mt-4 border-t border-border/70 pt-4">
                    <h4 className="font-semibold text-primary">
                      TeamStation AI approach
                    </h4>
                    <p className="text-sm text-foreground m-0">{item.solution}</p>
                  </div>
                  <div className="flex-grow"></div>
                  <div className="mt-6">
                    <p className="text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">
                      Evidence: {item.kpi}
                    </p>
                  </div>
                  </LiftCard>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </RevealSection>
        )}

        {tech.evaluation?.length > 0 && (
          <section className="glass-panel my-12 rounded-2xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-center">
              Evaluation Criteria for {tech.name} Roles
            </h2>
            <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
              Every candidate is measured against production grade expectations before shortlist delivery.
            </p>
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {tech.evaluation.map((item, idx) => (
                <li key={`${slug}-eval-${idx}`} className="rounded-lg border border-border/70 bg-background/70 px-4 py-3 text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {tech.technical_analysis && (
          <section className="glass-panel my-12 rounded-2xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-center">
              Technical Delivery Analysis: {tech.name}
            </h2>
            <p className="mt-4 text-muted-foreground leading-7">
              {tech.technical_analysis}
            </p>
          </section>
        )}

        <section className="glass-panel my-12 rounded-2xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-center">
            Implementation Blueprint: First 12 Weeks
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-7">
            {implementationBlueprintParagraphs.map((paragraph, idx) => (
              <p key={`${slug}-impl-${idx}`}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="glass-panel my-12 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-center">Executive Control and Validation Signals</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-border/70 bg-background/60 p-4">
              <Gauge className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-semibold text-foreground">Delivery telemetry</p>
              <p className="mt-2 text-sm text-muted-foreground">Track review latency, throughput stability, and early execution drift in one operating view.</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-background/60 p-4">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-semibold text-foreground">Governance readiness</p>
              <p className="mt-2 text-sm text-muted-foreground">Keep onboarding controls, role ownership, and escalation paths defined before scale.</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-background/60 p-4">
              <CheckCircle className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-semibold text-foreground">Decision confidence</p>
              <p className="mt-2 text-sm text-muted-foreground">Use evidence based evaluation criteria so hiring decisions map to production outcomes.</p>
            </div>
          </div>
        </section>

        <section className="surface-card my-16 p-8">
          <h2 className="text-3xl font-bold text-center">Related Resources</h2>
          <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
            Explore adjacent guides, research, and comparisons for this topic.
          </p>

          {relatedTech.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Related Technology Guides</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedTech.map(({ slug: relatedSlug, entry }) => (
                  <Link
                    key={`${slug}-related-${relatedSlug}`}
                    href={`/hire/by-technology/${relatedSlug}`}
                    className="rounded-full bg-primary/20 text-primary px-3 py-1 text-xs font-medium hover:bg-primary/30 transition-colors"
                  >
                    {entry.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <h3 className="text-xl font-semibold">Playbook and Research</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Start with the{" "}
              <Link href="/playbook/hub" className="text-primary hover:underline">CTO Playbook hub</Link>,{" "}
              then review the{" "}
              <Link href="/playbook/latam-economics" className="text-primary hover:underline">LATAM economics guide</Link>,{" "}
              <Link href="/research/hub" className="text-primary hover:underline">research hub</Link>, and{" "}
              <Link href="/research/framework-for-measuring-capacity" className="text-primary hover:underline">capacity framework</Link>.
            </p>
          </div>

          {comparisonLinks.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Comparison Pages</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {comparisonLinks.map((cmp) => (
                  <Link
                    key={`${slug}-cmp-${cmp}`}
                    href={`/comparisons/${cmp}`}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium hover:bg-primary hover:text-white transition-colors"
                  >
                    {cmp}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className="surface-card my-16 p-8">
          <h2 className="text-3xl font-bold text-center">
            CTO and CIO Decision Framework for {tech.name}
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-7">
            {decisionFrameworkParagraphs.map((paragraph, idx) => (
              <p key={`${slug}-framework-${idx}`}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="surface-card my-16 p-8">
          <h2 className="text-3xl font-bold text-center">
            90-Day Governance and Execution Scorecard
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-7">
            {governanceScorecardParagraphs.map((paragraph, idx) => (
              <p key={`${slug}-scorecard-${idx}`}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="surface-card my-16 p-8">
          <h2 className="text-3xl font-bold text-center">
            CTO Decision System for {tech.name}
          </h2>
          <div className="mt-6 space-y-6 text-muted-foreground leading-7">
            {decisionSystemSteps.map((step, idx) => (
              <div key={`${slug}-decision-step-${idx}`} className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p>{step.body}</p>
                <ul className="list-disc space-y-2 pl-6">
                  {step.bullets.map((bullet, bulletIdx) => (
                    <li key={`${slug}-decision-step-${idx}-bullet-${bulletIdx}`}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
            <h3 className="text-xl font-semibold text-foreground">Contextual Interlinking Mesh for CTO teams</h3>
            <p>
              Use these anchor paths to move from evaluation to economics to execution planning without
              losing decision context:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              {contextualLinkMesh.map((item) => (
                <li key={`${slug}-mesh-${item.href}`}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className="text-primary hover:underline">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              {relatedTechNames.length > 0 && (
                <li>
                  <span className="text-foreground">Related stack pages for this role:</span>{" "}
                  {relatedTechNames.map((name, idx) => (
                    <span key={`${slug}-related-inline-${name}`}>
                      {idx > 0 ? ", " : ""}
                      <strong>{name}</strong>
                    </span>
                  ))}
                </li>
              )}
            </ul>
          </div>
        </section>

        <section className="surface-card my-16 p-8">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            {faqItems.map((item, idx) => (
              <article key={`${slug}-faq-${idx}`} className="rounded border bg-background p-4">
                <h3 className="font-semibold text-foreground">{item.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-6">{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
