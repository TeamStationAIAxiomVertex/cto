
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, DollarSign, Zap, TestTube2, Users, Briefcase, ShieldCheck, Layers, GitCompare, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Computational Cost & TCO Playbook | TeamStation AI',
  description: 'A CFO-grade analysis of the true Total Cost of Ownership (TCO) of engineering teams, presented in Sandler-style "Computational Cost" cards.',
};

const costCards = [
    {
      "id": "seat-cost-delta",
      "title": "Seat Cost Delta — Sticker vs Fully-Loaded",
      "segment": "Cost",
      "icon": <DollarSign className="h-8 w-8 text-primary" />,
      "problem": "U.S. senior salaries look manageable… until benefits, taxes, tools, and overhead land on the P&L.",
      "solution": "Replace/augment seats with nearshore seniors at $6,800/mo all-in under one SLA.",
      "formula": "Savings/yr = ((Salary * (1 + burden)) / 12 - NearshoreFee) * 12",
      "example_inputs": {
        "Salary": 120000,
        "burden": 0.3,
        "NearshoreFee": 6800
      },
      "example_outputs": {
        "Annual Savings": 74400
      },
      "proof_note": "Based on a fully-loaded cost including a typical 30% for U.S. payroll burden (taxes, benefits, 401k).",
      "cta_question": "How many seats until this delta funds an entire roadmap line item?",
      "learn_more_href": "/playbook/latam-economics"
    },
    {
      "id": "team-delta-six",
      "title": "Team Delta — Six Seniors, One Decision",
      "segment": "Cost",
      "icon": <Users className="h-8 w-8 text-primary" />,
      "problem": "You need a full squad; headcount is frozen.",
      "solution": "6 nearshore seniors under one contract, one invoice, one SLA.",
      "formula": "TeamSavingsYr = SavingsPerSeatYr * TeamSize",
       "example_inputs": {
        "SavingsPerSeatYr": 74400,
        "TeamSize": 6
      },
      "example_outputs": {
        "Annual Team Savings": 446400,
        "Monthly Team Savings": 37200
      },
      "proof_note": "Scales linearly. This saving alone can often fund an entire additional product team or strategic initiative.",
      "cta_question": "What could you ship with an extra $37,200/mo in engineering oxygen?",
      "learn_more_href": "/hire/by-team-topologies"
    },
    {
      "id": "cost-of-vacancy",
      "title": "Cost of Vacancy — The Invisible Tax",
      "segment": "Speed",
      "icon": <Zap className="h-8 w-8 text-primary" />,
      "problem": "Roles stay open; velocity stalls; opportunity cost compounds.",
      "solution": "Bench-ready nearshore talent; start in weeks, not quarters.",
      "formula": "Revenue_Recaptured = Daily_Value * (TTH_current - TTH_TS)",
      "example_inputs": {
        "Daily_Value": 3000,
        "TTH_current (days)": 60,
        "TTH_TS (days)": 14
      },
      "example_outputs": {
         "Revenue Recaptured": 138000
      },
      "proof_note": "Time-to-Hire (TTH) is a direct lever on revenue. Faster hiring pulls future revenue into the current fiscal year.",
      "cta_question": "What did last quarter’s open req actually cost your roadmap?",
      "learn_more_href": "/process"
    },
    {
      "id": "pr-lgtm-latency",
      "title": "PR “LGTM” Latency — Days Lost to Time Zones",
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
      "title": "Faster Onboarding — Time-to-Productivity",
      "segment": "Speed",
      "icon": <UserCheck className="h-8 w-8 text-primary" />,
      "problem": "New engineers take weeks to add useful code.",
      "solution": "Playbooked onboarding with nearshore leads embedded in your rituals.",
      "formula": "Savings = Hires * Daily_Cost * Days_Saved",
       "example_inputs": {
        "Hires": 6,
        "Daily_Cost": 600,
        "Days_Saved": 10
      },
      "example_outputs": {
        "Onboarding Savings": 36000
      },
      "proof_note": "A structured onboarding process directly translates to faster time-to-value for every new hire.",
      "cta_question": "What is your measured Time-to-First-PR seat-by-seat?",
      "learn_more_href": "/services/talent-onboarding"
    },
    {
      "id": "change-failure-rate",
      "title": "Change-Failure Rate — Fewer Hotfix Fridays",
      "segment": "Quality",
      "icon": <TestTube2 className="h-8 w-8 text-primary" />,
      "problem": "Failed changes burn cash and trust.",
      "solution": "Shift-left QA, contract tests, and canary releases run by our platform crew.",
      "formula": "Savings/mo = Deploys * (ΔCFR) * C_incident",
      "example_inputs": {
        "Deploys": 60,
        "ΔCFR": 0.04,
        "C_incident": 12000
      },
      "example_outputs": {
        "Monthly Savings": 28800
      },
      "proof_note": "Improving Change Failure Rate (CFR), a core DORA metric, directly reduces the high cost of incident response.",
      "cta_question": "Which metric—CFR, MTTR, or both—hurts your renewals more?",
      "learn_more_href": "/hire/by-role/qa-quality-engineering"
    },
    {
      "id": "attrition-replacement",
      "title": "Attrition & Replacement — Context Reset Penalty",
      "segment": "People",
      "icon": <Users className="h-8 w-8 text-primary" />,
      "problem": "Night-shift offshore drives churn; you keep paying the knowledge tax.",
      "solution": "Same-day schedules + retention ladders + documented runbooks.",
      "formula": "Savings/yr = Team * (ΔAttrition_Rate) * C_replace",
      "example_inputs": {
        "Team_Size": 12,
        "ΔAttrition_Rate": 0.08,
        "C_replace": 25000
      },
      "example_outputs": {
        "Annual Savings": 24000
      },
      "proof_note": "Lowering attrition avoids the massive costs of recruiting, interviewing, and ramping up a replacement.",
      "cta_question": "How many ‘new intros’ did your squad do this month?",
      "learn_more_href": "/process"
    },
    {
      "id": "management-overhead",
      "title": "Management Overhead — Meetings You Don’t Need",
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
      "title": "Compliance & Security — Questionnaire Drag",
      "segment": "Risk",
      "icon": <ShieldCheck className="h-8 w-8 text-primary" />,
      "problem": "SOC2/ISO gaps stall enterprise deals.",
      "solution": "Built-in SSO/SAML/SCIM, SBOMs, audit trails—operated in-timezone.",
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
      "solution": "Consolidate under one SLA at $6,800/mo per senior.",
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
    "Salary (US)", "burden (e.g., 0.30)", "US_FLC (fully loaded)", "PRs/mo", "Δreview_hours", "C_dev_hour", "D (deploys/mo)",
    "CFR₀/CFR₁", "C_incident", "H (hires in wave)", "C_day", "ΔTP", "Team", "attrition rates", "C_replace",
    "EM_hrs/PM_hrs", "C_EM/C_PM", "reduction", "H_audit_saved", "C_hour", "Travel", "Duplicate_Tools", "Credits"
];


export default function TCOModelPage() {
  return (
    <main className="container max-w-5xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / 
        <Link href="/playbook" className="hover:text-foreground">CTO Playbook</Link> / 
        <span>Computational Cost & TCO Playbook</span>
      </div>

      <header className="my-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">The Computational Cost & TCO Playbook</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          A CFO-grade analysis of the true Total Cost of Ownership (TCO) of engineering teams, presented in Sandler-style "Computational Cost" cards.
        </p>
      </header>
      
      <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {costCards.map(card => (
            <div key={card.id} className="rounded-xl border bg-card p-6 flex flex-col">
                <div className="flex items-start gap-4">
                    {card.icon}
                    <div>
                        <h2 className="text-lg font-bold text-foreground">{card.title}</h2>
                        <p className="text-sm font-semibold text-primary">{card.segment}</p>
                    </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border/50">
                    <h3 className="font-semibold text-foreground">Problem</h3>
                    <p className="text-sm text-muted-foreground m-0">{card.problem}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-border/50">
                    <h3 className="font-semibold text-foreground">Solution</h3>
                    <p className="text-sm text-muted-foreground m-0">{card.solution}</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border/50 flex-grow">
                    <h3 className="font-semibold text-foreground">Proof</h3>
                     <div className="font-mono text-xs bg-background/50 rounded p-3 my-2 border">
                        {card.formula}
                    </div>
                    <div className="bg-background/50 rounded border p-4">
                        <h4 className="font-semibold text-sm mb-2 text-primary">Calculation</h4>
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
                                <p className="font-semibold text-green-400">Outputs:</p>
                                {Object.entries(card.example_outputs).map(([key, value]) => (
                                    <div key={key} className="flex justify-between">
                                        <span>{key.replace(/_/g, ' ')}:</span>
                                        <span className="font-bold text-green-400">${Number(value).toLocaleString()}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {card.proof_note && <p className="text-xs text-muted-foreground mt-3 italic">{card.proof_note}</p>}
                         {card.learn_more_href && (
                            <Link href={card.learn_more_href} className="text-xs text-primary hover:underline mt-3 block">
                                Learn more <ArrowRight className="inline h-3 w-3"/>
                            </Link>
                        )}
                    </div>
                </div>

                 <div className="mt-6 text-sm text-center font-semibold text-primary/90 border-t border-border/50 pt-4">
                    <span className="font-bold not-italic">Question: </span>
                    <span className="italic">{card.cta_question}</span>
                </div>
            </div>
        ))}
      </div>

       <div className="my-16 rounded-lg border bg-card p-6">
            <h3 className="text-xl font-bold text-foreground">Tiny Legend (Variables for Estimation)</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {legend.map(item => <span key={item} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{item}</span>)}
            </div>
       </div>

    </main>
  );
}
