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
      a: `Start with role specific evaluation criteria, require practical production scenarios, and map each candidate to clear ownership boundaries. For ${tech.name}, this means validating architecture judgment, execution quality, and communication under real constraints before onboarding.`,
    },
    {
      q: `What should CTO and CIO leaders measure in the first 90 days?`,
      a: `Track lead time, review-cycle latency, escaped defects, and delivery predictability. Tie those engineering signals to business outcomes such as release confidence, roadmap stability, and team operating cost. This creates a clear ROI model for ${tech.name} hiring.`,
    },
    {
      q: `How does nearshore ${tech.name} hiring compare to low-cost offshore models?`,
      a: `Hourly rate alone is not the KPI. A stronger model improves same day decision speed, reduces rework, and lowers management overhead. For most CTO and CIO teams, that combination produces better total cost of delivery than rate card optimization alone.`,
    },
    {
      q: `Which pages should we use for planning, hiring, and validation?`,
      a: `Use the technology guide for role targeting, the role guide for team composition, the playbook for economics and delivery strategy, and research protocols for evaluation rigor. This connected path prevents hiring drift and keeps execution aligned.`,
    },
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
            <p>
              The hiring decision for <strong>{tech.name}</strong> should be treated as an
              operating model decision, not a staffing transaction. High-performing teams do not
              optimize only for lower rates. They optimize for faster delivery loops, cleaner
              technical ownership, and lower coordination overhead. If your team is shipping with
              friction, the root issue is usually not effort, it is system design across people,
              process, and technical boundaries.
            </p>
            <p>
              A practical strategy is to define capability targets before sourcing. That means
              separating must-have architecture skills from trainable implementation details. It
              also means mapping candidate depth to business-critical workflows such as release
              reliability, incident handling, and cross team dependency management. This approach
              produces stronger hiring outcomes because it aligns evaluation with production reality.
            </p>
            <p>
              For easier execution, connect your hiring plan to the{" "}
              <Link href="/playbook/hub" className="text-primary hover:underline">
                CTO playbook hub
              </Link>
              , validate economics in the{" "}
              <Link href="/playbook/latam-economics" className="text-primary hover:underline">
                LATAM economics model
              </Link>
              , and benchmark evaluation rigor using the{" "}
              <Link
                href="/research/framework-for-measuring-capacity"
                className="text-primary hover:underline"
              >
                capacity measurement framework
              </Link>
              . These links are not decorative. They are the control system that keeps hiring
              quality, velocity, and budget aligned for executive stakeholders.
            </p>
            <p>
              In practice, teams that perform best with nearshore hiring keep role charters clear,
              keep review cycles short, and keep accountability explicit. If you combine those
              controls with strong screening standards, you reduce rework and protect roadmap
              confidence. This page is built to help CTO and CIO buyers move from reactive staffing
              to durable distributed engineering outcomes.
            </p>
            <p>
              Keep this process simple and repeatable: define outcome targets, evaluate against real
              delivery scenarios, and document the first 90-day ownership plan before onboarding.
              When the role charter, evaluation rubric, and execution metrics are aligned, nearshore
              {` ${tech.name} `} hiring becomes a predictable growth mechanism instead of a
              recruitment gamble. This is the practical standard high performing engineering
              organizations use to scale with lower risk and stronger delivery quality.
            </p>
            <p>
              The practical takeaway is straightforward: better selection standards plus tighter
              operating cadence create better delivery outcomes. That is the foundation for scaling
              distributed engineering with confidence.
            </p>
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
            <p>
              Week 1 to 2 should focus on baseline alignment: code standards, environment setup,
              ownership maps, and release guardrails. Week 3 to 6 should focus on throughput
              normalization: review latency, testing quality, and dependency flow. Week 7 to 12
              should focus on scale readiness: architectural debt burn-down, operational handoffs,
              and risk controls. This cadence is repeatable across most {tech.name} engagements.
            </p>
            <p>
              Use connected guides to keep implementation disciplined: role depth from{" "}
              <Link href="/hire/by-role" className="text-primary hover:underline">
                hire by role
              </Link>
              , technology validation from{" "}
              <Link href="/hire/by-technology" className="text-primary hover:underline">
                hire by technology
              </Link>
              , and operating model alignment from{" "}
              <Link href="/hire/by-team-topologies" className="text-primary hover:underline">
                team topology mapping
              </Link>
              . For subdomain navigation and intent continuity, route buyers to{" "}
              <a
                href="https://hire.teamstation.dev/roles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                hire.teamstation.dev/roles
              </a>
              ,{" "}
              <a
                href="https://hire.teamstation.dev/nearshore-software-development"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                nearshore software development
              </a>
              ,{" "}
              <a
                href="https://research.teamstation.dev/research"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                research archive
              </a>
              , and{" "}
              <a
                href="https://research.teamstation.dev/protocols/evaluation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                evaluation protocols
              </a>
              .
            </p>
            <p>
              This page is intentionally segmented so leadership can scan quickly and technical
              evaluators can go deep. The objective is not just page length; it is decision clarity.
              Every section is designed to help your team make better hiring calls for {tech.name},
              faster, with less operational variance.
            </p>
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
            <p>
              The most effective hiring decisions start by treating technology selection as an
              operating decision, not a sourcing decision. For {tech.name}, leaders should define
              outcome targets first: delivery predictability, quality stability, and ownership
              maturity. Then map those targets to the exact technical responsibilities the team
              must carry in production. This prevents a common failure mode where teams hire for
              tool familiarity but miss system-level execution quality.
            </p>
            <p>
              A practical framework uses three gates. Gate one is architecture judgment: can the
              candidate explain tradeoffs and failure boundaries with clarity. Gate two is
              implementation reliability: can the candidate convert design intent into maintainable,
              testable, and observable delivery. Gate three is operating behavior: can the
              candidate communicate risk early, close feedback loops quickly, and collaborate across
              dependencies without creating hidden coordination debt.
            </p>
            <p>
              For executive buyers, this framework creates clearer budget decisions. Strong
              {tech.name} capability usually lowers real cost of delivery by reducing rework,
              shortening review cycles, and increasing release confidence. Lower hourly rate without
              those outcomes often increases total cost through defects, delays, and management
              overhead. That is why this page emphasizes evaluation discipline and role alignment
              instead of generic recruiting language.
            </p>
            <p>
              Governance matters as much as selection. Define ownership boundaries, acceptance
              criteria, and escalation paths before onboarding. Track day 30, day 60, and day 90
              indicators tied to throughput, quality, and coordination behavior. When this structure
              is applied consistently, nearshore teams in {tech.name} functions integrate faster and
              produce measurable improvements in roadmap confidence.
            </p>
            <p>
              Decision-makers landing on this page need direct paths to role strategy, economics,
              and research frameworks. The related links above are designed to keep buyers in a
              coherent journey from initial discovery to actionable hiring decisions.
            </p>
          </div>
        </section>

        <section className="surface-card my-16 p-8">
          <h2 className="text-3xl font-bold text-center">
            90-Day Governance and Execution Scorecard
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-7">
            <p>
              A high-quality {tech.name} hire should be evaluated with an explicit scorecard, not
              subjective sentiment. In the first 30 days, score onboarding integration: environment
              readiness, code review behavior, documentation quality, and dependency mapping. In
              days 31 to 60, score execution reliability: cycle time stability, defect containment,
              and acceptance-quality consistency. In days 61 to 90, score sustained impact:
              measurable throughput contribution, lowered rework, and stronger operational signal.
            </p>
            <p>
              Keep metrics connected to business language. If cycle time improves, explain the
              effect on release confidence and launch timing. If defect leakage drops, explain the
              effect on support burden and customer trust. This translation layer helps executive
              stakeholders evaluate technical progress without losing precision and keeps cross team
              alignment strong during scale phases.
            </p>
            <p>
              Add a monthly risk register to prevent silent drift. Common risks include unclear
              ownership boundaries, hidden architectural debt, and weak dependency controls. Each
              risk should have a named owner, mitigation plan, and review date. This governance
              routine is lightweight but powerful for distributed teams because it keeps accountability
              explicit and prevents avoidable surprises late in release cycles.
            </p>
            <p>
              For organizations using multiple role types around {tech.name}, maintain a shared
              operating baseline across platform, product, security, and delivery functions. That
              baseline should define interface expectations, review cadence, and quality gates.
              Consistent standards reduce handoff friction and improve manager leverage, which is a
              core objective for CTO and CIO leaders scaling nearshore capacity.
            </p>
            <p>
              The final principle is repeatability. Pages that clearly define evaluation standards,
              delivery scorecards, and interlinking pathways become reusable assets for every new
              hiring cycle. This improves both SEO and execution quality, because the same decision
              model is applied every time. The result is a stronger distributed engineering system,
              not just a one-off recruitment outcome.
            </p>
          </div>
        </section>

        <section className="surface-card my-16 p-8">
          <h2 className="text-3xl font-bold text-center">
            CTO Decision System for {tech.name}
          </h2>
          <div className="mt-6 space-y-6 text-muted-foreground leading-7">
            <h3 className="text-xl font-semibold text-foreground">1. Identify the real constraint before hiring</h3>
            <p>
              Most teams start with a title. Strong teams start with a constraint. If releases are slipping,
              the real issue is usually not staffing volume. The issue is unclear ownership, weak technical
              boundaries, and long decision cycles. For {tech.name} work, define where decisions stall now:
              architecture choices, code review quality, production stability, or dependency alignment.
              This gives your hiring motion a measurable objective instead of a generic headcount request.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Document the exact workflow where delay starts.</li>
              <li>Define one delivery metric and one quality metric to improve first.</li>
              <li>Set a day 30 and day 90 target before interviews begin.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground">2. Validate practical capability not keyword familiarity</h3>
            <p>
              Buyers often over index on tool checklists and under index on system behavior. In practice,
              your outcome depends on how a candidate handles ambiguity, tradeoffs, and escalation paths.
              For {tech.name}, this means validating technical depth under realistic production pressure.
              Strong interview loops use scenario based prompts with clear evidence criteria and explicit
              thresholds for acceptance.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Evaluate architecture reasoning with tradeoff explanations.</li>
              <li>Evaluate execution quality with maintainability and testability controls.</li>
              <li>Evaluate collaboration quality with cross team handoff scenarios.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground">3. Convert hiring into an operating model</h3>
            <p>
              The hire itself is not the outcome. The outcome is a controlled system where throughput and
              quality improve while management overhead declines. For this reason, onboarding should include
              explicit ownership maps, decision rights, escalation channels, and delivery telemetry. When
              those controls are missing, even strong candidates can become trapped in unclear execution loops.
            </p>

            <h3 className="text-xl font-semibold text-foreground">Contextual Interlinking Mesh for CTO teams</h3>
            <p>
              Use these anchor paths to move from evaluation to economics to execution planning without
              losing decision context:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <Link href="/playbook/hub" className="text-primary hover:underline">CTO playbook hub for operating decisions</Link>
              </li>
              <li>
                <Link href="/playbook/latam-economics" className="text-primary hover:underline">LATAM economics model for budget and risk tradeoffs</Link>
              </li>
              <li>
                <Link href="/research/hub" className="text-primary hover:underline">research hub for methodology and evidence standards</Link>
              </li>
              <li>
                <Link href="/research/framework-for-measuring-capacity" className="text-primary hover:underline">capacity framework for throughput measurement</Link>
              </li>
              <li>
                <a href="https://engineering.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">engineering doctrine library for systems execution</a>
              </li>
              <li>
                <a href="https://research.teamstation.dev/protocols/evaluation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">evaluation protocols for role calibration</a>
              </li>
              <li>
                <a href="https://research.teamstation.dev/protocols/delivery" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">delivery protocols for operating cadence</a>
              </li>
              <li>
                <a href="https://hire.teamstation.dev/roles" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">role index for cross functional hiring design</a>
              </li>
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
