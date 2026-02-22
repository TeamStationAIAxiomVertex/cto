import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { comparisonPages, getComparisonPage } from "@/lib/comparisonPages";
import type { Metadata } from "next";
import ComparisonProse from "@/components/ComparisonProse";
import Link from "next/link";
import CTOFieldManualBlock from "@/components/seo/CTOFieldManualBlock";
import BenchmarkBarsPanel from "@/components/graphs/BenchmarkBarsPanel";
import { RevealBlock, RevealSection } from "@/components/motion/MotionPrimitives";

const VerdictTable = dynamic(
  () => import("@/components/VerdictTable").then((mod) => mod.default),
  { ssr: true }
);

// --- 1. NEXT.JS STATIC PARAMS GENERATION ---
export async function generateStaticParams() {
  return comparisonPages.map((p) => ({ vendor: p.slug }));
}

// --- 2. NEXT.JS METADATA GENERATION ---
export async function generateMetadata({
  params,
}: {
  params: { vendor: string };
}): Promise<Metadata> {
  const page = getComparisonPage(params.vendor);
  if (!page) {
    return {
      title: "Comparison Not Found",
      description: "This vendor comparison is not available.",
    };
  }
  return {
    title: page.pageSEO.title,
    description: page.pageSEO.description,
    alternates: {
      canonical: page.pageSEO.canonical,
    },
  };
}

// --- 3. THE PAGE COMPONENT ---
export default function VendorComparisonPage({
  params,
}: {
  params: { vendor: string };
}) {
  const page = getComparisonPage(params.vendor);

  if (!page) {
    notFound();
  }

  const verdictRows = page.verdict.rows ?? [];
  const winningRows = verdictRows.filter((row) => row.isWinningRow).length;
  const keywordCount = (matcher: RegExp) =>
    verdictRows.filter((row) => matcher.test(`${row.criterion} ${String(row.teamstationVerdict)} ${String(row.competitorVerdict)}`)).length;

  const comparisonProfileBars = [
    {
      label: "Decision coverage",
      value: verdictRows.length,
      target: 4,
      note: "Number of explicit comparison dimensions covered in the verdict matrix.",
    },
    {
      label: "TeamStation advantage signals",
      value: winningRows,
      target: Math.max(2, Math.min(4, verdictRows.length)),
      note: "Rows marked as clear TeamStation advantages in the comparison matrix.",
    },
    {
      label: "Security and governance coverage",
      value: keywordCount(/security|compliance|device|sla|governance/i),
      target: 1,
      note: "Presence of governance, security, and compliance criteria in the evaluation.",
    },
    {
      label: "Economics and TCO coverage",
      value: keywordCount(/tco|cost|economic|pricing|ownership/i),
      target: 1,
      note: "Presence of total cost and financial control considerations in the comparison.",
    },
  ];

  return (
    <main className="manual-page container max-w-6xl py-10">
      <RevealBlock className="glass-panel gradient-ring hero-depth system-grid rounded-2xl p-6 md:p-8">
        <div className="text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>{" "}
          /
          <Link href="/comparisons" className="hover:text-foreground">
            Comparisons
          </Link>{" "}
          /<span>{page.vendorName}</span>
        </div>

        <header className="mt-5">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            {page.h1}
          </h1>
          <p
            className="mt-4 max-w-[72ch] text-lg leading-8 text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: page.intro }}
          />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/comparisons" className="rounded-md border border-border/70 bg-background/70 px-3 py-2 text-sm font-semibold text-foreground transition-ui hover:border-primary/40 hover:text-primary">
              Back to comparisons hub
            </Link>
            <Link href="/playbook/tco-model" className="rounded-md border border-border/70 bg-background/70 px-3 py-2 text-sm font-semibold text-foreground transition-ui hover:border-primary/40 hover:text-primary">
              View TCO model
            </Link>
          </div>
        </header>
      </RevealBlock>

      <RevealSection className="glass-panel gradient-ring mt-8 rounded-2xl p-5 md:p-6">
        <VerdictTable {...page.verdict} />
      </RevealSection>

      <RevealSection className="mt-8">
        <BenchmarkBarsPanel
          title="Comparison Decision Coverage"
          subtitle={`Use this checklist-style profile to confirm the ${page.vendorName} comparison covers the dimensions your CTO team needs before a vendor decision.`}
          unit=" rows"
          max={Math.max(4, verdictRows.length)}
          bars={comparisonProfileBars}
        />
      </RevealSection>

      <RevealSection className="glass-panel gradient-ring mt-8 rounded-2xl p-6 md:p-8">
        <div className="prose prose-xl dark:prose-invert max-w-none">
          <ComparisonProse vendorSlug={params.vendor} />
        </div>
      </RevealSection>

      <RevealBlock className="mt-8">
        <CTOFieldManualBlock
          title={`CTO Decision Manual for TeamStation AI versus ${page.vendorName}`}
          focus={`vendor comparison, operating fit, and proof based execution decisions`}
        />
      </RevealBlock>
    </main>
  );
}
