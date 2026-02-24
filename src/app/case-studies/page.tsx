import Link from "next/link";
import { getAllCaseStudies } from "../../lib/case-studies";
import {
  ArrowRight,
  Award,
  AlertTriangle,
  Shield,
  BarChart3,
  Clock3,
  Building2,
  Workflow,
} from "lucide-react";
import type { Metadata } from "next";
import FurtherReading from "../../components/seo/FurtherReading";
import CTOFieldManualBlock from "../../components/seo/CTOFieldManualBlock";
import BenchmarkBarsPanel from "@/components/graphs/BenchmarkBarsPanel";
import {
  RevealBlock,
  RevealSection,
  StaggerGrid,
  StaggerItem,
} from "@/components/motion/MotionPrimitives";
import { JsonLd } from '../../components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Nearshore Engineering Case Studies | TeamStation AI",
  description:
    "Operational proof for CTO and CIO teams evaluating nearshore engineering. Case studies by constraint, intervention, and measured outcomes.",
};

const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Nearshore Engineering Case Studies | TeamStation AI",
  description: "Operational proof for CTO and CIO teams evaluating nearshore engineering models.",
  url: "https://cto.teamstation.dev/case-studies",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: "https://cto.teamstation.dev" },
  publisher: { "@type": "Organization", name: "TeamStation AI", url: "https://teamstation.dev" },
  audience: { "@type": "Audience", audienceType: "Chief Technology Officer, Chief Information Officer" },
};

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies();
  const totalStudies = caseStudies.length;
  const withChallenge = caseStudies.filter((s) => Boolean(s.challenge)).length;
  const withOutcomes = caseStudies.filter((s) => Boolean(s.outcomes)).length;
  const withTechStack = caseStudies.filter((s) => (s.techStack?.length ?? 0) > 0).length;

  const industryCounts = caseStudies.reduce<Record<string, number>>((acc, study) => {
    const key = (study.industry || "Unspecified").trim();
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});
  const topIndustries = Object.entries(industryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([label, value]) => ({
      label,
      value,
      target: 1,
      note: "Industry proof concentration in this case study set.",
    }));

  const proofCoverageBars = [
    {
      label: "Case studies indexed",
      value: totalStudies,
      target: Math.max(4, Math.min(8, totalStudies)),
      note: "Total operational proof artifacts available in this hub.",
    },
    {
      label: "Context and constraint coverage",
      value: withChallenge,
      target: totalStudies,
      note: "Case studies with explicit challenge/context sections.",
    },
    {
      label: "Measured outcome coverage",
      value: withOutcomes,
      target: totalStudies,
      note: "Case studies with explicit outcome statements and result framing.",
    },
    {
      label: "Implementation detail coverage",
      value: withTechStack,
      target: Math.max(1, totalStudies - 1),
      note: "Case studies with technology stack references for technical validation.",
    },
  ];

  return (
    <main
      className="manual-page container max-w-5xl py-10">
      <JsonLd data={caseStudiesSchema} />
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Case Studies</span>
      </div>

      <RevealBlock className="glass-panel gradient-ring hero-depth system-grid my-8 rounded-2xl p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Field Evidence for CTO and CIO Teams
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Operational Proof, Not Vendor Claims
            </h1>
            <p className="mt-4 max-w-[72ch] text-lg leading-8 text-muted-foreground">
              Review field evidence by constraint, intervention pattern, and measured result.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
              <li className="rounded-lg border border-border/70 bg-background/60 px-3 py-2">
                Delivery control and execution stability
              </li>
              <li className="rounded-lg border border-border/70 bg-background/60 px-3 py-2">
                Governance readiness and security posture
              </li>
              <li className="rounded-lg border border-border/70 bg-background/60 px-3 py-2">
                Intervention pattern and operating response
              </li>
              <li className="rounded-lg border border-border/70 bg-background/60 px-3 py-2">
                Measurable outcomes and validation signals
              </li>
            </ul>
            <nav className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/playbook/hub" className="rounded-md border border-border/70 bg-background/70 px-3 py-2 font-semibold text-foreground transition-ui hover:border-primary/40 hover:text-primary">CTO Playbook</Link>
              <Link href="/comparisons" className="rounded-md border border-border/70 bg-background/70 px-3 py-2 font-semibold text-foreground transition-ui hover:border-primary/40 hover:text-primary">Vendor Comparisons</Link>
              <Link href="/playbook/tco-model" className="rounded-md border border-border/70 bg-background/70 px-3 py-2 font-semibold text-foreground transition-ui hover:border-primary/40 hover:text-primary">TCO Model</Link>
              <Link href="/hire" className="rounded-md border border-border/70 bg-background/70 px-3 py-2 font-semibold text-foreground transition-ui hover:border-primary/40 hover:text-primary">Hire Paths</Link>
            </nav>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="glass-card-interactive rounded-xl border border-border/70 bg-background/75 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Award className="h-4 w-4 text-primary" /> Proof corpus
              </div>
              <p className="mt-2 text-2xl font-bold text-foreground">{totalStudies}</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">Indexed case studies available for decision review.</p>
            </div>
            <div className="glass-card-interactive rounded-xl border border-border/70 bg-background/75 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Workflow className="h-4 w-4 text-primary" /> Outcome coverage
              </div>
              <p className="mt-2 text-2xl font-bold text-foreground">{withOutcomes}/{Math.max(totalStudies, 1)}</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">Pages with explicit outcome/result framing.</p>
            </div>
            <div className="glass-card-interactive rounded-xl border border-border/70 bg-background/75 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Shield className="h-4 w-4 text-primary" /> Validation method
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Use context → intervention → result review before pricing or vendor fit comparison.
              </p>
            </div>
          </div>
        </div>
      </RevealBlock>

      <RevealSection className="mx-auto my-10 max-w-5xl">
        <div className="grid gap-6 lg:grid-cols-2">
          <section aria-labelledby="proof-coverage-heading">
            <h2 id="proof-coverage-heading" className="sr-only">
              Operational Proof Coverage
            </h2>
            <BenchmarkBarsPanel
              title="Operational Proof Coverage"
              subtitle="Use this checklist view to confirm the case-study library contains enough context, outcomes, and implementation detail to support executive decision validation."
              bars={proofCoverageBars}
              max={Math.max(4, totalStudies)}
              unit=""
            />
          </section>
          <section aria-labelledby="industry-distribution-heading">
            <h2 id="industry-distribution-heading" className="sr-only">
              Industry Evidence Distribution
            </h2>
            <BenchmarkBarsPanel
              title="Industry Evidence Distribution"
              subtitle="Top industry concentrations in the current proof set. Use this to identify where you need more domain-specific validation before scaling a program."
              bars={topIndustries.length ? topIndustries : [{ label: "No indexed industries yet", value: 0, target: 1, note: "Add structured industry metadata to case study content files." }]}
              max={Math.max(1, ...(topIndustries.map((x) => x.value)))}
            />
          </section>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto my-10 max-w-5xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Case Study Library</h2>
            <p className="mt-2 max-w-[72ch] text-sm leading-7 text-muted-foreground">
              Each card is structured for buyer-side validation: operating context, intervention pattern, and measurable result.
            </p>
          </div>
          <div className="hidden rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary md:block">
            Context → Intervention → Outcome
          </div>
        </div>

        <StaggerGrid className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
          {caseStudies.map((study) => (
            <StaggerItem key={study.slug}>
              <article className="glass-card-interactive gradient-ring group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/70 bg-background/75 p-5 shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-3">
                    <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                      <Award className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                        {study.clientName}
                      </h3>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                        {study.industry || "Case Study"}
                      </p>
                    </div>
                  </div>
                  {study.lastModified ? (
                    <div className="hidden items-center gap-1 rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-[11px] text-muted-foreground sm:inline-flex">
                      <Clock3 className="h-3.5 w-3.5" />
                      Updated
                    </div>
                  ) : null}
                </div>

                <div className="mt-4 grid gap-3">
                  <section className="rounded-lg border border-border/70 bg-background/60 p-3" aria-labelledby={`${study.slug}-context`}>
                    <h4 id={`${study.slug}-context`} className="text-[11px] font-semibold uppercase tracking-[0.12em] text-destructive">
                      Context and constraint
                    </h4>
                    <p className="mt-1 max-w-[42ch] text-sm leading-6 text-muted-foreground">
                      {(study.challenge || "Case context details available in the full case study.").split("\n")[0].replace(/^-/, "").trim()}
                    </p>
                  </section>

                  <section className="rounded-lg border border-border/70 bg-background/60 p-3" aria-labelledby={`${study.slug}-intervention`}>
                    <h4 id={`${study.slug}-intervention`} className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                      Intervention pattern
                    </h4>
                    <p className="mt-1 max-w-[42ch] text-sm leading-6 text-foreground">{study.summary}</p>
                  </section>

                  <section className="rounded-lg border border-border/70 bg-background/60 p-3" aria-labelledby={`${study.slug}-outcome`}>
                    <h4 id={`${study.slug}-outcome`} className="text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-400">
                      Outcome signal
                    </h4>
                    <p className="mt-1 max-w-[42ch] text-sm leading-6 text-muted-foreground">
                      {(study.outcomes || "Operational results and validation notes are available in the full case study.").split("\n")[0].replace(/^-/, "").trim()}
                    </p>
                  </section>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {(study.techStack ?? []).slice(0, 4).map((tech) => (
                    <span key={tech.name} className="inline-flex rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-xs text-muted-foreground">
                      {tech.name}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-border/70 pt-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Building2 className="h-3.5 w-3.5" />
                    <span>Executive validation artifact</span>
                  </div>
                  <Link href={`/case-studies/${study.slug}`} className="inline-flex items-center text-sm font-semibold text-primary">
                    Read full case study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </RevealSection>

      <RevealSection className="glass-panel gradient-ring my-12 rounded-2xl p-6 md:p-8">
        <h2 className="text-3xl font-bold text-center">How to Read Operational Proof</h2>
        <p className="mx-auto mt-3 max-w-[72ch] text-center text-sm leading-7 text-muted-foreground">
          Use this sequence to evaluate case-study quality before using it in a vendor or operating model decision.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: AlertTriangle,
              title: "Start with the operating constraint",
              body: "Identify the delivery risk or execution bottleneck before reading the intervention. This keeps evaluation tied to business impact.",
            },
            {
              icon: Shield,
              title: "Validate the intervention pattern",
              body: "Check what changed in team workflow, ownership, governance, or engineering controls rather than only tooling additions.",
            },
            {
              icon: BarChart3,
              title: "Confirm measurable outcomes",
              body: "Look for result statements, cadence improvement, risk reduction, or throughput change that can be validated against your own environment.",
            },
          ].map((item) => (
            <section key={item.title} className="glass-card-interactive rounded-xl border border-border/70 bg-background/70 p-4">
              <item.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-3 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
            </section>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-border/70 bg-background/60 p-4">
          <h3 className="text-base font-semibold text-foreground">Related validation paths</h3>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
            <li>
              Review the{" "}
              <Link href="/playbook/hub" className="text-primary hover:underline">
                CTO playbook hub
              </Link>{" "}
              for operating model design.
            </li>
            <li>
              Compare economics in the{" "}
              <Link href="/playbook/latam-economics" className="text-primary hover:underline">
                LATAM economics guide
              </Link>
              .
            </li>
            <li>
              Validate measurement logic in the{" "}
              <Link href="/research/framework-for-measuring-capacity" className="text-primary hover:underline">
                capacity framework
              </Link>
              .
            </li>
            <li>
              Cross-check evidence with{" "}
              <a href="https://engineering.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                engineering.teamstation.dev
              </a>{" "}
              and{" "}
              <a href="https://research.teamstation.dev/research" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                research.teamstation.dev/research
              </a>
              .
            </li>
          </ul>
        </div>
      </RevealSection>

      <RevealBlock>
        <CTOFieldManualBlock
          title="CTO Field Manual for Evidence Based Vendor Decisions"
          focus="case study analysis, delivery risk diagnosis, and operating model proof"
        />
      </RevealBlock>
      <RevealBlock className="mt-8">
        <FurtherReading />
      </RevealBlock>
    </main>
  );
}
