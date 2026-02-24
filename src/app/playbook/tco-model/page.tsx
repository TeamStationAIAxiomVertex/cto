
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, DollarSign, Zap, TestTube2, Users, Briefcase, ShieldCheck, Layers, GitCompare, UserCheck, HelpCircle, BookOpen, AlertTriangle, Scale } from 'lucide-react';
import { WithTooltip } from "../../../components/ui/tooltip";
import { JsonLd } from "../../../components/seo/JsonLd";
import { RevealBlock, RevealSection } from "../../../components/motion/MotionPrimitives";

const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
   {
     "@type": "Question",
     "name": "What is a Total Cost of Ownership (TCO) model for nearshore IT?",
     "acceptedAnswer": { "@type": "Answer", "text": "A TCO model accounts for direct salary, benefits, tools, devices, compliance, and hidden costs, offering CFOs a defensible all-in cost structure." }
   },
   {
     "@type": "Question",
     "name": "How much can CTOs save with nearshore TCO?",
     "acceptedAnswer": { "@type": "Answer", "text": "CTOs can achieve 40 60% savings versus U.S. hires or legacy offshore staffing, with predictable budget alignment." }
   }
 ]
};

export const metadata: Metadata = {
  title: 'TCO Model for Nearshore Engineering Teams',
  description: 'A tool for CTOs to model hidden costs of hiring and build a CFO-ready business case to turn engineering into a value driver.',
  keywords: 'tco model, total cost of ownership, nearshore engineering cost, cfo business case, engineering budget',
};

const costCards = [
  {
    "id": "seat-cost-delta",
    "title": "Seat Cost Delta   Sticker vs Fully-Loaded",
    "segment": "Cost",
    "icon": <DollarSign className="h-8 w-8 text-primary" />,
    "problem": "U.S. senior salaries look manageable… until benefits, taxes, tools, and overhead land on the P&L.",
    "solution": "Replace/augment seats with nearshore seniors at an all-in, fully-loaded rate.",
    "formula": "SavingsYr = ((Salary*(1+burden))/12 - NearshoreFee) * 12",
    "example_inputs": {
      "Salary": 180000,
      "burden": 0.35,
      "NearshoreFee": 6960
    },
    "example_outputs": {
      "Annual Savings": 150480
    },
    "proof_note": "Based on a fully-loaded cost including a typical 35% for U.S. payroll burden (taxes, benefits, 401k).",
    "cta_question": "How many seats until this delta funds an entire roadmap line item?",
    "learn_more_href": "/playbook/latam-economics"
  },
  {
    "id": "team-delta-six",
    "title": "Team Delta   Six Seniors, One Decision",
    "segment": "Cost",
    "icon": <Users className="h-8 w-8 text-primary" />,
    "problem": "You need a full squad; headcount is frozen.",
    "solution": "6 nearshore seniors under one contract, one invoice, one SLA.",
    "formula": "TeamSavingsYr = SavingsPerSeatYr * TeamSize",
     "example_inputs": {
      "SavingsPerSeatYr": 150480,
      "TeamSize": 6
    },
    "example_outputs": {
      "Annual Team Savings": 902880
    },
    "proof_note": "Scales linearly. This saving alone can fund an entire additional product team or strategic initiative.",
    "cta_question": "What could you ship with an extra $75,240/mo in engineering oxygen?",
    "learn_more_href": "/hire/by-team-topologies"
  },
  {
    "id": "cost-of-vacancy",
    "title": "Cost of Vacancy   The Invisible Tax",
    "segment": "Speed",
    "icon": <Zap className="h-8 w-8 text-primary" />,
    "problem": "Roles stay open; velocity stalls; opportunity cost compounds.",
    "solution": "Bench-ready nearshore talent; start in weeks, not quarters.",
    "formula": "Revenue_Recaptured = (Daily_Value) * (TTH_current - TTH_TS)",
    "example_inputs": {
      "Daily_Value": 2740,
      "TTH_current (days)": 45,
      "TTH_TS (days)": 9
    },
    "example_outputs": {
       "Revenue Recaptured": 98640
    },
    "proof_note": "Time-to-Hire (TTH) is a direct lever on revenue. Faster hiring pulls future revenue into the current fiscal year.",
    "cta_question": "What did last quarter’s open req actually cost your roadmap?",
    "learn_more_href": "/process"
  },
  {
    "id": "pr-lgtm-latency",
    "title": "PR “LGTM” Latency   Days Lost to Time Zones",
    "segment": "Speed",
    "icon": <GitCompare className="h-8 w-8 text-primary" />,
    "problem": "One PR → one day lost; reviews trickle in overnight.",
    "solution": "Same-day PR SLAs in your timezone.",
    "formula": "Savings/mo = PRs/mo * (ΔReview_Hours) * C_dev_hour",
    "example_inputs": {
      "PRs_per_month": 120,
      "ΔReview_Hours": 3,
      "C_dev_hour": 85
    },
    "example_outputs": {
      "Monthly Savings": 30600
    },
    "proof_note": "This calculates the cost of developer time wasted waiting for feedback, a direct hit to productivity.",
    "cta_question": "How many quarters died waiting for “Looks Good To Me”?",
    "learn_more_href": "/playbook/nearshore-vs-offshore"
  },
  {
    "id": "faster-onboarding",
    "title": "Faster Onboarding   Time-to-Productivity",
    "segment": "Speed",
    "icon": <UserCheck className="h-8 w-8 text-primary" />,
    "problem": "New engineers take weeks to add useful code.",
    "solution": "Playbooked onboarding with nearshore leads embedded in your rituals.",
    "formula": "Value = Hires * Daily_Cost * Days_Saved",
     "example_inputs": {
      "Hires": 6,
      "Daily_Cost": 650,
      "Days_Saved": 10
    },
    "example_outputs": {
      "Onboarding Value": 39000
    },
    "proof_note": "A structured onboarding process directly translates to faster time-to-value for every new hire.",
    "cta_question": "What is your measured ΔTP seat-by-seat?",
    "learn_more_href": "/services/talent-onboarding"
  },
  {
    "id": "change-failure-rate",
    "title": "Change-Failure Rate   Fewer Hotfix Fridays",
    "segment": "Quality",
    "icon": <TestTube2 className="h-8 w-8 text-primary" />,
    "problem": "Failed changes burn cash and trust.",
    "solution": "Shift-left QA, contract tests, and canary releases run by our platform crew.",
    "formula": "Savings/mo = Deploys * (ΔCFR) * C_incident",
    "example_inputs": {
      "Deploys": 60,
      "ΔCFR": 0.05,
      "C_incident": 15000
    },
    "example_outputs": {
      "Monthly Savings": 45000
    },
    "proof_note": "Improving Change Failure Rate (CFR), a core DORA metric, directly reduces the high cost of incident response.",
    "cta_question": "Which metric CFR, MTTR, or both hurts your renewals more?",
    "learn_more_href": "/hire/by-role/qa-quality-engineering"
  },
  {
    "id": "attrition-replacement",
    "title": "Attrition & Replacement   Context Reset Penalty",
    "segment": "People",
    "icon": <Users className="h-8 w-8 text-primary" />,
    "problem": "Night-shift offshore drives churn; you keep paying the knowledge tax.",
    "solution": "Same-day schedules + retention ladders + documented runbooks.",
    "formula": "Savings/yr = Team * (ΔAttrition_Rate) * C_replace",
    "example_inputs": {
      "Team_Size": 12,
      "ΔAttrition_Rate": 0.10,
      "C_replace": 30000
    },
    "example_outputs": {
      "Annual Savings": 36000
    },
    "proof_note": "Lowering attrition avoids the massive costs of recruiting, interviewing, and ramping up a replacement.",
    "cta_question": "How many ‘new intros’ did your squad do this month?",
    "learn_more_href": "/process"
  },
  {
    "id": "management-overhead",
    "title": "Management Overhead   Meetings You Don’t Need",
    "segment": "Ops",
    "icon": <Briefcase className="h-8 w-8 text-primary" />,
    "problem": "EMs/PMs spend hours herding vendors across time zones.",
    "solution": "Single vendor, single SLA, single cadence.",
    "formula": "Savings/yr = 12 * ((EM_hrs*C_EM + PM_hrs*C_PM) * reduction)",
     "example_inputs": {
      "EM_hrs": 30,
      "PM_hrs": 20,
      "C_EM": 120,
      "C_PM": 95,
      "reduction": 0.5
    },
    "example_outputs": {
      "Annual Savings": 33000
    },
    "proof_note": "This is a direct productivity gain for your most expensive and valuable management resources.",
    "cta_question": "What would your EM do with 10 hours/week back?",
     "learn_more_href": "/playbook/build-vs-buy"
  },
  {
    "id": "compliance-security-drag",
    "title": "Compliance & Security   Questionnaire Drag",
    "segment": "Risk",
    "icon": <ShieldCheck className="h-8 w-8 text-primary" />,
    "problem": "SOC2/ISO gaps stall enterprise deals.",
    "solution": "Built-in SSO/SAML/SCIM, SBOMs, audit trails operated in-timezone.",
    "formula": "Savings/yr = Hours_Saved * C_hour",
    "example_inputs": {
      "Hours_Saved": 250,
      "C_hour": 110
    },
    "example_outputs": {
      "Annual Savings": 27500
    },
    "proof_note": "Having an audit-ready posture from day one dramatically reduces the internal time spent on security questionnaires.",
    "cta_question": "Which control is blocking the biggest open opportunity right now?",
    "learn_more_href": "/trust"
  },
  {
    "id": "all-in-vs-all-these-invoices",
    "title": "All-in vs. “All-these-Invoices”",
    "segment": "Consolidation",
    "icon": <Layers className="h-8 w-8 text-primary" />,
    "problem": "Fragmented vendors → duplicated tools, travel, and shadow staffing.",
    "solution": "Consolidate under one SLA at a fully-loaded rate.",
    "formula": "Savings/yr = Travel + Duplicate_Tools - Credits",
    "example_inputs": {
      "Annual_Travel": 20000,
      "Duplicate_Tools": 25000,
      "Credits": 8000
    },
    "example_outputs": {
      "Annual Savings": 37000
    },
    "proof_note": "Vendor consolidation reduces direct costs and eliminates the soft costs of managing multiple relationships.",
    "cta_question": "How many vendors do you really need to ship one roadmap?",
    "learn_more_href": "/comparisons"
  }
];

const legend = [
    "Salary (US)", "burden (e.g., 0.35)", "NearshoreFee", "PRs/mo", "ΔReview_Hours", "C_dev_hour", "Deploys",
    "ΔCFR", "C_incident", "Hires", "Daily_Cost", "Days_Saved", "TeamSize", "ΔAttrition_Rate", "C_replace",
    "EM_hrs", "PM_hrs", "C_EM", "C_PM", "reduction", "Hours_Saved", "C_hour", "Travel", "Duplicate_Tools", "Credits", "Daily_Value", "TTH_current", "TTH_TS"
];

const tcoSignals = [
  {
    label: "Budget lens",
    value: "Fully-loaded TCO",
    note: "Model salary, burden, ramp, latency, quality, and governance together.",
    icon: DollarSign,
  },
  {
    label: "CFO framing",
    value: "Risk-adjusted return",
    note: "Translate engineering decisions into cash protection and throughput lift.",
    icon: Scale,
  },
  {
    label: "CTO control point",
    value: "Delivery system design",
    note: "Headcount cost is secondary to flow, quality, and replacement risk.",
    icon: Layers,
  },
  {
    label: "Proof posture",
    value: "Computational cards",
    note: "Use formulas and assumptions to make finance conversations defensible.",
    icon: BookOpen,
  },
];

const tcoCostStack = [
  { label: "Base compensation", pct: 38, band: "Comp" },
  { label: "Payroll burden + benefits", pct: 16, band: "Burden" },
  { label: "Ramp + onboarding loss", pct: 10, band: "Ramp" },
  { label: "Coordination + review latency", pct: 12, band: "Flow" },
  { label: "Quality failure + rework", pct: 12, band: "Quality" },
  { label: "Compliance + security ops", pct: 7, band: "Risk" },
  { label: "Vendor fragmentation drag", pct: 5, band: "Ops" },
];

const cfoNarrativeBlocks = [
  {
    title: "Present the <strong>rate card</strong> as a misleading proxy",
    body: "A low hourly rate can mask <strong>review latency</strong>, <strong>rework cost</strong>, and <strong>vacancy delay</strong>. Anchor the conversation on realized delivery output, not procurement optics.",
  },
  {
    title: "Quantify <strong>throughput risk</strong> in dollars",
    body: "Use the <strong>vacancy</strong>, <strong>PR latency</strong>, and <strong>change-failure</strong> cards to show how slow feedback loops and unstable releases create hard cash loss.",
  },
  {
    title: "Show the operating response, not just cost savings",
    body: "Pair each cost card with a control mechanism: <strong>timezone alignment</strong>, <strong>playbooked onboarding</strong>, <strong>single SLA governance</strong>, and <strong>platform-led QA</strong>.",
  },
];

const subdomainLinks = [
  { href: "https://cto.teamstation.dev", label: "CTO Hub", desc: "Executive doctrine, decision models, and operating playbooks." },
  { href: "https://hire.teamstation.dev", label: "Hiring Services", desc: "Role, stack, country, and topology hiring paths." },
  { href: "https://research.teamstation.dev", label: "Research", desc: "Evidence-backed models and scientific references." },
  { href: "https://docs.teamstation.dev", label: "Documentation", desc: "System docs and operating references for implementation teams." },
  { href: "https://app.teamstation.dev", label: "Application", desc: "Platform workflows and execution control surface." },
];

const segmentAccent: Record<string, string> = {
  Cost: "from-emerald-400/80 to-cyan-400/80",
  Speed: "from-blue-400/80 to-indigo-400/80",
  Quality: "from-violet-400/80 to-fuchsia-400/80",
  People: "from-amber-400/80 to-orange-400/80",
  Ops: "from-sky-400/80 to-teal-400/80",
  Risk: "from-rose-400/80 to-red-400/80",
  Consolidation: "from-primary/80 to-blue-400/80",
};


export default function TCOModelPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <main className="manual-page container max-w-5xl py-10">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> / 
          <Link href="/playbook/hub" className="hover:text-foreground">Playbook</Link> / 
          <span>TCO Model</span>
        </div>

        <RevealBlock className="my-8 glass-panel gradient-ring hero-depth system-grid rounded-2xl p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">CTO Playbook | CFO-Ready Finance Model</p>
              <h1 className="mt-3 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
                The Computational Cards: A CFO-Ready TCO Model
              </h1>
              <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                This page turns engineering delivery into a <strong className="text-foreground">financially defensible operating model</strong>.
                It quantifies the hidden taxes of traditional staffing and shows how a <strong className="text-foreground">governed nearshore system</strong>{" "}
                improves <strong className="text-foreground">speed</strong>, <strong className="text-foreground">quality</strong>, and <strong className="text-foreground">risk-adjusted cost</strong>.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Fully-loaded TCO", "CFO business case", "Throughput economics", "Risk-adjusted delivery"].map((pill) => (
                  <span key={pill} className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    {pill}
                  </span>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link href="/playbook/latam-economics" className="inline-flex items-center justify-center rounded-md border border-border/70 bg-background/70 px-4 py-2 text-sm font-semibold text-foreground transition-ui hover:border-primary/40 hover:text-primary">
                  Read <strong className="ml-1">LATAM Economics</strong>
                </Link>
                <Link href="/platform" className="inline-flex items-center justify-center rounded-md border border-border/70 bg-background/70 px-4 py-2 text-sm font-semibold text-foreground transition-ui hover:border-primary/40 hover:text-primary">
                  View <strong className="ml-1">Platform Model</strong>
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/60 p-4">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(59,130,246,0.14),transparent_56%),radial-gradient(circle_at_86%_14%,rgba(16,185,129,0.10),transparent_42%)]" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">TCO Control Surface</p>
                  <span className="flex items-center gap-1.5 text-[11px] text-foreground/80">
                    <span className="relative inline-flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                    </span>
                    CFO + CTO review
                  </span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {tcoSignals.map((signal) => (
                    <div key={signal.label} className="rounded-xl border border-border/60 bg-card/40 p-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-foreground/70">{signal.label}</p>
                        <signal.icon className="h-4 w-4 text-primary" />
                      </div>
                      <p className="mt-1 text-sm font-semibold text-foreground">{signal.value}</p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">{signal.note}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl border border-border/60 bg-background/50 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">Decision flow</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-foreground/90">
                    {["seat cost", "hidden tax", "delivery impact", "control model", "TCO case"].map((step, idx, arr) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="rounded-md border border-border/60 bg-card/40 px-2 py-1">{step}</span>
                        {idx < arr.length - 1 ? <ArrowRight className="h-3.5 w-3.5 text-primary" /> : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealBlock>

        <RevealSection className="mb-10 grid gap-4 xl:grid-cols-[1.05fr_.95fr]">
          <div className="glass-panel gradient-ring rounded-2xl p-5 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">TCO Composition Graphic</p>
            <h2 className="mt-2 text-xl font-bold text-foreground md:text-2xl">Where engineering spend actually goes</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              The <strong className="text-foreground">rate card</strong> is only one slice of the cost stack. A CFO-ready model must include
              <strong className="text-foreground"> burden</strong>, <strong className="text-foreground">ramp loss</strong>,
              <strong className="text-foreground"> coordination delay</strong>, <strong className="text-foreground">quality rework</strong>,
              and <strong className="text-foreground">compliance drag</strong>.
            </p>
            <div className="mt-5 rounded-2xl border border-border/60 bg-background/45 p-4">
              <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>Illustrative fully-loaded cost stack</span>
                <span>Total = 100%</span>
              </div>
              <div className="h-4 overflow-hidden rounded-full border border-border/60 bg-background/80">
                <div className="flex h-full w-full">
                  {tcoCostStack.map((part) => (
                    <div
                      key={part.label}
                      className={`h-full bg-gradient-to-r ${segmentAccent[part.band === "Comp" ? "Cost" : part.band === "Flow" ? "Speed" : part.band === "Quality" ? "Quality" : part.band === "Risk" ? "Risk" : part.band === "Ops" ? "Ops" : "Cost"]}`}
                      style={{ width: `${part.pct}%` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {tcoCostStack.map((part) => (
                  <div key={`${part.label}-row`} className="rounded-lg border border-border/50 bg-card/35 p-2.5">
                    <div className="flex items-center justify-between gap-2 text-sm">
                      <span className="font-medium text-foreground">{part.label}</span>
                      <span className="font-semibold text-primary">{part.pct}%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-background/80">
                      <div className="h-full rounded-full bg-[linear-gradient(90deg,rgba(129,140,248,0.95),rgba(52,211,153,0.9))]" style={{ width: `${part.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass-panel gradient-ring rounded-2xl p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">CFO Narrative Builder</p>
              <h2 className="mt-2 text-xl font-bold text-foreground">How to present the TCO case internally</h2>
              <div className="mt-4 space-y-3">
                {cfoNarrativeBlocks.map((item) => (
                  <div key={item.title} className="rounded-xl border border-border/60 bg-background/55 p-4">
                    <p className="text-sm font-semibold text-foreground" dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p className="mt-2 text-xs leading-5 text-muted-foreground" dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel gradient-ring rounded-2xl p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Internal + Subdomain Paths</p>
              <h2 className="mt-2 text-xl font-bold text-foreground">Decision continuity across the system</h2>
              <div className="mt-4 grid gap-3">
                <Link href="/process" className="rounded-xl border border-border/60 bg-background/55 px-4 py-3 text-sm text-foreground transition-ui hover:border-primary/40">
                  <strong>Process</strong>: model how <strong>time-to-offer</strong> and <strong>deployment readiness</strong> affect TCO.
                </Link>
                <Link href="/hire/by-team-topologies" className="rounded-xl border border-border/60 bg-background/55 px-4 py-3 text-sm text-foreground transition-ui hover:border-primary/40">
                  <strong>Team Topologies</strong>: connect <strong>coordination overhead</strong> and <strong>handoff latency</strong> to org design.
                </Link>
                <Link href="/technical-interview-evaluation" className="rounded-xl border border-border/60 bg-background/55 px-4 py-3 text-sm text-foreground transition-ui hover:border-primary/40">
                  <strong>Technical Evaluation</strong>: reduce <strong>mis-hire risk</strong> before it becomes a TCO penalty.
                </Link>
              </div>
              <div className="mt-4 grid gap-3">
                {subdomainLinks.map((item) => (
                  <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-border/60 bg-card/35 px-4 py-3 text-sm transition-ui hover:border-primary/40">
                    <span className="font-semibold text-primary">{item.label}</span>
                    <span className="ml-2 text-muted-foreground">{item.desc}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="mb-12 glass-panel gradient-ring rounded-2xl p-5 md:p-6">
          <div className="grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">The Playbook&apos;s Purpose</p>
              <h2 className="mt-2 text-xl font-bold text-foreground md:text-2xl">
                Build a <strong>data-backed CFO case</strong>, not a vendor pitch
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                These <strong className="text-foreground">Computational Cost Cards</strong> isolate hidden taxes across
                <strong className="text-foreground"> staffing</strong>, <strong className="text-foreground">delivery speed</strong>,
                <strong className="text-foreground"> quality</strong>, and <strong className="text-foreground">operational risk</strong>.
                Use them to shift internal discussion from <strong className="text-foreground">cost-based accounting</strong> to
                <strong className="text-foreground"> value-based engineering investment</strong>. Then pressure-test assumptions with
                <Link href="/playbook/latam-economics" className="mx-1 font-semibold text-primary hover:underline">LATAM economics</Link>
                and implementation constraints in the
                <Link href="/platform" className="mx-1 font-semibold text-primary hover:underline">platform model</Link>.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/45 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">Variable Legend / Formula Language</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {legend.slice(0, 18).map((term) => (
                  <WithTooltip key={term} label={`TCO formula variable: ${term}`}>
                    <span className="inline-flex cursor-help rounded-full border border-border/60 bg-card/35 px-2.5 py-1 text-xs text-foreground/90">
                      {term}
                    </span>
                  </WithTooltip>
                ))}
              </div>
              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                Hover terms for formula context. Use <strong className="text-foreground">consistent assumptions</strong> across cards when presenting to finance.
              </p>
            </div>
          </div>
        </RevealSection>
        
        <RevealSection className="my-20">
          <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Computational TCO Graphics</p>
              <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">The Computational Cost Cards: A CFO-Ready Analysis</h2>
              <p className="mt-4 mx-auto max-w-[72ch] text-base leading-8 text-muted-foreground">
                Each card isolates a specific <strong className="text-foreground">hidden tax</strong> on your engineering budget,
                quantifies its impact, and maps the <strong className="text-foreground">operating response</strong> that turns cost leakage into savings.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {["Cost", "Speed", "Quality", "People", "Ops", "Risk", "Consolidation"].map((segment) => (
                  <span key={segment} className="inline-flex rounded-full border border-border/60 bg-background/55 px-2.5 py-1 text-xs font-medium text-foreground/90">
                    {segment}
                  </span>
                ))}
              </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {costCards.map(card => (
                  <div key={card.id} className="glass-card-interactive gradient-ring rounded-xl border border-border/70 bg-background/70 p-6 flex flex-col shadow-lg">
                      <div className="flex items-start gap-4">
                          {card.icon}
                          <div>
                              <h2 className="text-lg font-bold text-foreground">{card.title}</h2>
                              <p className="text-sm font-semibold text-primary">{card.segment}</p>
                              <div className="mt-2 h-1.5 w-28 overflow-hidden rounded-full bg-background/80">
                                <div className={`h-full w-full rounded-full bg-gradient-to-r ${segmentAccent[card.segment] ?? segmentAccent.Cost}`} />
                              </div>
                          </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-border/50">
                          <h3 className="font-semibold text-destructive">Delivery risk</h3>
                          <p className="text-sm text-muted-foreground m-0">{card.problem}</p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-border/50">
                          <h3 className="font-semibold text-primary">Operating response</h3>
                          <p className="text-sm text-muted-foreground m-0">{card.solution}</p>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-border/50 flex-grow">
                          <h3 className="font-semibold text-foreground">Computational validation</h3>
                          <div className="font-mono text-xs bg-background/50 rounded p-3 my-2 border">
                              {card.formula}
                          </div>
                          <div className="bg-background/50 rounded border p-4">
                              <h4 className="font-semibold text-sm mb-2 text-primary">Example Calculation</h4>
                              <div className="grid grid-cols-2 gap-x-4 text-xs font-mono">
                                  <div>
                                      <p className="font-semibold text-muted-foreground">Inputs:</p>
                                      {Object.entries(card.example_inputs).map(([key, value]) => (
                                          <div key={key} className="flex justify-between">
                                              <span>{key.replace(/_/g, ' ')}:</span>
                                              <span className="text-foreground">{Number(value).toLocaleString()}</span>
                                          </div>
                                      ))}
                                  </div>
                                  <div className="border-l border-border pl-4">
                                      <p className="font-semibold text-primary">Outputs:</p>
                                      {Object.entries(card.example_outputs).map(([key, value]) => (
                                          <div key={key} className="flex justify-between">
                                              <span>{key.replace(/_/g, ' ')}:</span>
                                              <span className="font-bold text-primary">${Number(value).toLocaleString()}</span>
                                          </div>
                                      ))}
                                  </div>
                              </div>
                              {card.proof_note && <p className="text-xs text-muted-foreground mt-3 italic">{card.proof_note}</p>}
                          </div>
                      </div>
                      <div className="mt-4 rounded-xl border border-border/50 bg-background/45 p-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">Related operating path</p>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          Use this card with{" "}
                          <Link href="/process" className="font-semibold text-primary hover:underline">process controls</Link>,{" "}
                          <Link href="/hire" className="font-semibold text-primary hover:underline">hiring routes</Link>, and{" "}
                          <a href="https://research.teamstation.dev" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">research evidence</a>{" "}
                          to strengthen the CFO narrative.
                        </p>
                      </div>
                      <Link href={card.learn_more_href} className="mt-4 flex items-center text-sm font-semibold text-primary hover:underline">
                          Drill Down <ArrowRight className="inline h-4 w-4 ml-1"/>
                      </Link>

                      <div className="mt-6 text-sm text-center font-semibold text-primary/90 border-t border-border/50 pt-4">
                          <span className="font-bold not-italic text-foreground">The CFO Question: </span> 
                          <span className="italic">{card.cta_question}</span>
                      </div>
                  </div>
              ))}
          </div>
        </RevealSection>

        <RevealSection className="mb-12 glass-panel gradient-ring rounded-2xl p-5 md:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">CTO Implementation Notes</p>
          <h2 className="mt-2 text-xl font-bold text-foreground md:text-2xl">
            How to turn this model into a <strong>CFO-approved roadmap decision</strong>
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-background/55 p-4">
              <h3 className="text-sm font-semibold text-foreground">1. Baseline your current system</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Measure <strong className="text-foreground">vacancy days</strong>, <strong className="text-foreground">review latency</strong>,
                <strong className="text-foreground"> change-failure rate</strong>, and <strong className="text-foreground">replacement cost</strong>
                before comparing vendor proposals. Use the <Link href="/playbook/latam-economics" className="font-semibold text-primary hover:underline">LATAM economics chapter</Link> for the full decision lens.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/55 p-4">
              <h3 className="text-sm font-semibold text-foreground">2. Map savings to shipped output</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Finance approval improves when cost savings are tied to <strong className="text-foreground">roadmap throughput</strong>,
                <strong className="text-foreground"> incident reduction</strong>, or <strong className="text-foreground">deal acceleration</strong>.
                Cross-check with <Link href="/process" className="font-semibold text-primary hover:underline">process metrics</Link> and <a href="https://cto.teamstation.dev" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">CTO Hub</a> operating doctrine.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/55 p-4">
              <h3 className="text-sm font-semibold text-foreground">3. Validate quality and hiring signal</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                A lower-cost model fails if <strong className="text-foreground">quality</strong> drops. Pair TCO with
                <Link href="/technical-interview-evaluation" className="mx-1 font-semibold text-primary hover:underline">technical evaluation evidence</Link>
                and <Link href="/hire/by-team-topologies" className="font-semibold text-primary hover:underline">team topology design</Link>.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/55 p-4">
              <h3 className="text-sm font-semibold text-foreground">4. Run the decision through one control surface</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Use <strong className="text-foreground">one SLA</strong>, <strong className="text-foreground">one invoice</strong>,
                and <strong className="text-foreground">one governance model</strong> to reduce fragmentation cost. For implementation references, route teams to <a href="https://docs.teamstation.dev" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">Documentation</a> and <a href="https://app.teamstation.dev" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">Application</a>.
              </p>
            </div>
          </div>
        </RevealSection>
      </main>
    </>
  );
}
