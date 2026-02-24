import Link from "next/link";
import type { Metadata } from "next";
import {
  Clock,
  Users,
  FileSearch,
  Building,
  Zap,
  ArrowRight,
  AlertTriangle,
  BookOpen,
  BrainCircuit,
  GitCompare,
  CheckCircle,
} from "lucide-react";
import dynamic from "next/dynamic";
import { JsonLd } from "../../../components/seo/JsonLd";

const WithTooltip = dynamic(
  () =>
    import("../../../components/client/tooltip-hook").then(
      (mod) => mod.WithTooltip
    ),
  { ssr: false }
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between nearshore and offshore software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nearshore development ensures cultural alignment, compliance, and daylight overlap with U.S. teams, while offshore often introduces time-zone delays, hidden costs, and governance risks.",
      },
    },
    {
      "@type": "Question",
      name: "Why do CTOs prefer nearshore LATAM over offshore vendors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "U.S. CTOs choose nearshore LATAM because it eliminates PR latency, provides audit-ready compliance, and delivers predictable TCO with teams that operate in U.S. business hours.",
      },
    },
  ],
};

const ComparisonWidget = dynamic(
  () => import("../../../components/ComparisonWidget"),
  {
    ssr: false,
    loading: () => (
      <div
        className="text-center p-8 text-sm text-muted-foreground"
        aria-busy="true"
      >
        Loading comparison widget…
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "Nearshore vs. Offshore: The CTO’s Guide to Shipping Faster",
  description:
    "Data-driven CTO analysis of nearshore vs. offshore. Model the hidden costs of time-zone lag with a playbook for your global talent strategy.",
  keywords:
    "nearshore vs offshore, nearshore software development, offshore development, cto playbook, human latency tax",
};

const options = [
  {
    title: "Build In-House (Core IP)",
    icon: <Building className="h-8 w-8 text-primary" />,
    pain: "Headcount freeze vs critical path.",
    implication:
      "Extremely high cost, long time-to-hire (60+ days), and significant operational overhead. The 'Vacancy Tax' compounds daily.",
    useWhen:
      "For deeply proprietary domains and core architectural roles where long-term ownership is non-negotiable.",
    wtfCheck:
      "Can you afford a 3-month delay on your most critical roadmap item?",
  },
  {
    title: "Onshore (US Contractors)",
    icon: <Users className="h-8 w-8 text-primary" />,
    pain: "Fully-loaded cost and scarce supply.",
    implication:
      "Perfect time-zone overlap but carries brutal budget pressure and the same slow hiring cycle as in-house.",
    useWhen:
      "High-stakes discovery work, projects requiring extreme exec adjacency, or handling highly regulated data (e.g., ITAR).",
    wtfCheck:
      "Are you paying a 2x premium for work that could run in daylight elsewhere?",
  },
  {
    title: "Offshore (Legacy)",
    icon: <Clock className="h-8 w-8 text-primary" />,
    pain: "Overnight PRs = one day lost per question.",
    implication:
      "The 'Human Latency Tax' destroys agile. Appears cheap on a rate card but is expensive in reality due to rework, coordination overhead, and stalled velocity.",
    useWhen:
      "The backlog is simple, latency is tolerable, and the primary driver is the appearance of low hourly costs.",
    wtfCheck:
      "How many quarters died waiting for “LGTM” from a team 12 hours away?",
  },
  {
    title: "Nearshore (Legacy)",
    icon: <FileSearch className="h-8 w-8 text-primary" />,
    pain: "Better hours, same vendor theater.",
    implication:
      "Good time-zone overlap, but you still inherit the risk of weak vetting ('resume theater'), unmanaged devices, and a lack of true operational governance.",
    useWhen:
      "You need overlap but have the internal capacity to manage the security, compliance, and quality risks yourself.",
    wtfCheck: "Who can read prod today and how fast can you revoke it?",
  },
  {
    title: "Nearshore IT Co-Pilot (New Gen)",
    icon: <Zap className="h-8 w-8 text-primary" />,
    painRemoved: "PR latency, vacancy drag, audit friction, vendor sprawl.",
    mechanism:
      "Daylight review SLAs, Axiom Cortex™ cognitive vetting, MDM-secured devices, SSO/SAML/SCIM, single SLA.",
    outcome: "Observable cadence, defensible TCO, faster time-to-useful PR.",
    wtfCheck: "If you switched tomorrow, would production even notice?",
  },
];

export default async function NearshoreVsOffshorePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <main className="manual-page container max-w-5xl py-10">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/playbook/hub" className="hover:text-foreground">
            CTO Playbook
          </Link>{" "}
          / <span>Nearshore vs. Offshore</span>
        </div>

        <header className="my-8">
          <div className="glass-panel rounded-2xl p-6 md:p-10 shadow-lg">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Nearshore vs. Offshore: The CTO’s Guide to Shipping Faster
            </h1>
            <div className="mt-8 max-w-4xl space-y-6">
              <div className="bg-background p-6 rounded-lg border border-primary/20">
                <h2 className="font-bold text-primary flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  The Human Latency Tax
                </h2>
                <p className="mt-2 text-muted-foreground">
                  You're here because the 12-hour time lag with your offshore
                  team is silently killing your roadmap. A simple question on a
                  pull request turns into a 24-hour game of telephone. Your
                  senior engineers are forced into late-night calls, burning
                  them out and wasting their high-value time on coordination,
                  not creation. This "human latency tax" is the single biggest
                  hidden cost in software development, and it’s a direct result
                  of prioritizing a low hourly rate over a functional workflow.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border/50">
                <p className="mt-2 text-muted-foreground">
                  This playbook provides a data-driven framework to quantify
                  that tax. It's the business case for why daylight-native
                  nearshore isn't just "better" it's fundamentally more
                  capital-efficient. We'll give you the models to prove that a
                  slightly higher hourly rate that eliminates latency delivers a
                  dramatically lower{" "}
                  <Link
                    href="/playbook/tco-model"
                    className="text-primary hover:underline"
                  >
                    Total Cost of Ownership (TCO)
                  </Link>{" "}
                  and faster time-to-market.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="my-24">
          <h2 className="text-center text-4xl font-bold text-foreground">
            The Five Paths to Scaling Your Team: A CTO's Decision Matrix
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-muted-foreground">
            Each model represents a distinct trade-off between cost, control,
            speed, and risk. The wrong choice here is the most expensive
            decision a CTO can make.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 items-stretch">
            {options.slice(0, 4).map((option, index) => (
              <div
                key={option.title}
                className={`rounded-lg border p-6 flex flex-col shadow-lg bg-card`}
              >
                <div className="flex items-start gap-3">
                  {option.icon}
                  <h3 className={`font-bold text-lg text-foreground`}>
                    {option.title}
                  </h3>
                </div>

                <dl className="mt-4 space-y-4 flex-grow">
                  {option.pain && (
                    <div>
                      <dt className="text-destructive text-xs uppercase tracking-wider font-bold">
                        Risk
                      </dt>
                      <dd className="text-sm text-muted-foreground mt-1">
                        {option.pain}
                      </dd>
                    </div>
                  )}
                  {option.implication && (
                    <div>
                      <dt className="text-foreground text-xs uppercase tracking-wider font-bold">
                        Implication
                      </dt>
                      <dd className="text-sm text-muted-foreground mt-1">
                        {option.implication}
                      </dd>
                    </div>
                  )}
                  {option.useWhen && (
                    <div>
                      <dt className="text-foreground text-xs uppercase tracking-wider font-bold">
                        Use When
                      </dt>
                      <dd className="text-sm text-muted-foreground mt-1">
                        {option.useWhen}
                      </dd>
                    </div>
                  )}
                </dl>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="text-sm italic text-primary/80">
                    {option.title.includes("Offshore") ? (
                      <div className="inline">
                        How many quarters died waiting for “
                        <WithTooltip label="Looks Good To Me">
                          <span className="border-b border-dashed">LGTM</span>
                        </WithTooltip>
                        ”?
                      </div>
                    ) : (
                      `"${option.wtfCheck}"`
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="rounded-lg border p-6 flex flex-col shadow-lg bg-primary/10 border-primary md:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-3">
                {options[4].icon}
                <h3 className="font-bold text-lg text-primary">
                  {options[4].title}
                </h3>
              </div>
              <dl className="mt-4 space-y-4 flex-grow">
                {options[4].painRemoved && (
                  <div>
                    <dt className="text-green-400 text-xs uppercase tracking-wider font-bold">
                      Risk removed
                    </dt>
                    <dd className="text-sm text-muted-foreground mt-1">
                      {options[4].painRemoved}
                    </dd>
                  </div>
                )}
                {options[4].mechanism && (
                  <div>
                    <dt className="text-foreground text-xs uppercase tracking-wider font-bold">
                      Mechanism
                    </dt>
                    <dd className="text-sm text-muted-foreground mt-1">
                      <Link
                        href="/playbook/bias-free-technical-hiring-axiom-cortex"
                        className="text-primary hover:underline"
                      >
                        Axiom Cortex™
                      </Link>{" "}
                      cognitive vetting,{" "}
                      <WithTooltip label="Mobile Device Management">
                        <span className="border-b border-dashed">MDM</span>
                      </WithTooltip>
                      -secured devices,{" "}
                      <WithTooltip label="Single Sign-On/System for Cross-domain Identity Management">
                        <span className="border-b border-dashed">
                          SSO/SAML/SCIM
                        </span>
                      </WithTooltip>
                      , single{" "}
                      <WithTooltip label="Service Level Agreement">
                        <span className="border-b border-dashed">SLA</span>
                      </WithTooltip>
                      .
                    </dd>
                  </div>
                )}
                {options[4].outcome && (
                  <div>
                    <dt className="text-foreground text-xs uppercase tracking-wider font-bold">
                      Outcome
                    </dt>
                    <dd className="text-sm text-muted-foreground mt-1">
                      Observable cadence, defensible{" "}
                      <Link
                        href="/playbook/tco-model"
                        className="text-primary hover:underline"
                      >
                        TCO
                      </Link>
                      , faster time-to-useful PR.
                    </dd>
                  </div>
                )}
              </dl>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="text-sm italic text-primary/80">
                  "{options[4].wtfCheck}"
                </div>
              </div>
            </div>
          </div>
        </section>

        <ComparisonWidget />
      </main>
    </>
  );
}
