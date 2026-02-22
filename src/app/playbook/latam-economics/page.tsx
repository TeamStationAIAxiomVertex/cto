import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PlaybookContentRenderer from "@/components/PlaybookContentRenderer";
import TableOfContents from "@/components/TableOfContents";
import PlaybookAuthor from "@/components/PlaybookAuthor";
import CTOFieldManualBlock from "@/components/seo/CTOFieldManualBlock";
import BenchmarkBarsPanel from "@/components/graphs/BenchmarkBarsPanel";
import { RevealBlock, RevealSection } from "@/components/motion/MotionPrimitives";
import { getPlaybookData } from "@/lib/playbook-data";

const relatedLinks = [
  { href: "/playbook/hub", label: "CTO Playbook Hub" },
  { href: "/playbook/tco-model", label: "TCO Model for Engineering Teams" },
  { href: "/playbook/build-vs-buy", label: "Build vs Buy Framework" },
  { href: "/playbook/nearshore-vs-offshore", label: "Nearshore vs Offshore" },
  {
    href: "/playbook/bias-free-technical-hiring-axiom-cortex",
    label: "Bias-Free Technical Hiring",
  },
  { href: "/research/framework-for-measuring-capacity", label: "Capacity Measurement Research" },
  { href: "/hire/by-team-topologies", label: "Team Topologies for CTOs" },
  { href: "/comparisons/bairesdev", label: "Compare vs BairesDev" },
  { href: "/platform", label: "Nearshore IT Co-Pilot Platform" },
];

const economicsModelBars = [
  {
    label: "Compensation and benefits",
    value: 42,
    target: 40,
    note: "Base compensation is the largest cost element, but it should be modeled with seniority mix and retention assumptions.",
  },
  {
    label: "Platform, tooling, and device control",
    value: 12,
    target: 10,
    note: "Security tooling, managed devices, and workflow stack costs are often omitted in vendor headline rates.",
  },
  {
    label: "Onboarding and enablement",
    value: 9,
    target: 8,
    note: "Ramp quality determines time to productive contribution and affects first-quarter throughput.",
  },
  {
    label: "Coordination and management overhead",
    value: 14,
    target: 12,
    note: "Handoff latency, manager load, and cross-timezone coordination cost should be modeled explicitly.",
  },
  {
    label: "Rework and defect recovery",
    value: 11,
    target: 8,
    note: "Quality misses compound TCO through delayed releases, recovery effort, and opportunity cost.",
  },
  {
    label: "Vacancy and replacement risk",
    value: 12,
    target: 9,
    note: "Vacancy days and replacement cycles directly affect roadmap predictability and realized economics.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPlaybookData("latam-economics");
  if (!data) return {};
  return {
    title: data.title,
    description: data.meta,
    alternates: {
      canonical: "https://cto.teamstation.dev/playbook/latam-economics",
    },
    keywords: data.keywords.join(", "),
  };
}

export default async function PlaybookPage() {
  const data = await getPlaybookData("latam-economics");
  if (!data) notFound();

  const { title, date, toc, author, keywords } = data;

  return (
    <main className="manual-page container mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Playbook", path: "/playbook" },
          { label: title, path: "/playbook/latam-economics" },
        ]}
      />

      <article className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-10">
        <aside className="lg:col-span-1">
          <div className="space-y-6 lg:sticky lg:top-8">
            <RevealBlock className="glass-panel gradient-ring rounded-2xl p-4">
              <PlaybookAuthor author={author} />
            </RevealBlock>
            <RevealBlock className="glass-panel gradient-ring rounded-2xl p-4">
              <TableOfContents items={toc} />
            </RevealBlock>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <RevealBlock className="glass-panel gradient-ring hero-depth system-grid mb-8 rounded-2xl p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              CTO Playbook Chapter
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Published: <time dateTime={date}>{date}</time>
              {author?.name ? <> • By: {author.name}</> : null}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(keywords ?? []).slice(0, 4).map((kw, idx) => (
                <span
                  key={`${kw}-${idx}`}
                  className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                >
                  {kw}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/playbook/tco-model"
                className="inline-flex items-center rounded-md border border-border/70 bg-background/70 px-4 py-2 text-sm font-semibold text-foreground transition-ui hover:border-primary/40 hover:text-primary"
              >
                Open TCO Model
              </Link>
              <Link
                href="/comparisons"
                className="inline-flex items-center rounded-md border border-border/70 bg-background/70 px-4 py-2 text-sm font-semibold text-foreground transition-ui hover:border-primary/40 hover:text-primary"
              >
                Compare models
              </Link>
            </div>
          </RevealBlock>

          <RevealSection className="glass-panel gradient-ring rounded-2xl p-6 md:p-8">
            <div className="prose prose-xl max-w-none dark:prose-invert">
              <PlaybookContentRenderer slug="latam-economics" />
            </div>
          </RevealSection>

          <RevealSection className="mt-10">
            <BenchmarkBarsPanel
              title="Economics Modeling Lens for CTO Planning"
              subtitle="Use a total cost view instead of bill-rate comparison. This planning model highlights the cost categories that most often distort LATAM hiring decisions when governance and execution costs are excluded."
              unit="%"
              max={50}
              bars={economicsModelBars}
            />
          </RevealSection>

          <RevealSection className="glass-panel gradient-ring mt-10 rounded-2xl p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Further Reading and Related Strategy
            </h2>
            <p className="mb-4 max-w-[72ch] text-sm leading-7 text-muted-foreground">
              Use these paths to move from economics analysis into operating model design, hiring decisions,
              and vendor model validation without breaking decision continuity.
            </p>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-sm text-foreground transition-ui hover:border-primary/40 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </RevealSection>

          <RevealBlock className="mt-10">
            <CTOFieldManualBlock
              title="CTO Field Manual Extension: LATAM Economics"
              focus="economic modeling, operating fit, and delivery cost governance"
            />
          </RevealBlock>
        </div>
      </article>
    </main>
  );
}
