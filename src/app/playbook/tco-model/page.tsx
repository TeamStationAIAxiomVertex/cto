
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
    "formula": [
        "US_FLC = Salary × (1 + burden)",
        "Savings/yr = (US_FLC ÷ 12 − 6,800) × 12"
    ],
    "example": "Salary $120,000, burden 30% → US_FLC $156,000 (=$13,000/mo). Savings = (13,000 − 6,800) × 12 = $74,400/yr per seat.",
    "cta_question": "How many seats until this delta funds an entire roadmap line item?"
  },
  {
    "id": "team-delta-six",
    "title": "Team Delta — Six Seniors, One Decision",
    "segment": "Cost",
    "icon": <Users className="h-8 w-8 text-primary" />,
    "problem": "You need a full squad; headcount is frozen.",
    "solution": "6 nearshore seniors under one contract, one invoice, one SLA.",
    "formula": [
        "Annual savings = 6 × 74,400"
    ],
    "example": "Result: $446,400/yr (using Card #1 math).",
    "cta_question": "What could you ship with an extra $37,200/mo in engineering oxygen?"
  },
  {
    "id": "cost-of-vacancy",
    "title": "Cost of Vacancy — The Invisible Tax",
    "segment": "Speed",
    "icon": <Zap className="h-8 w-8 text-primary" />,
    "problem": "Roles stay open; velocity stalls; opportunity cost compounds.",
    "solution": "Bench-ready nearshore talent; start in weeks, not quarters.",
    "formula": [
        "Vacancy_Cost = Daily_Value × (TTH_current − TTH_TS)"
    ],
    "example": "$3,000/day product value × (60d − 14d) = $138,000 not lost.",
    "cta_question": "What did last quarter’s open req actually cost your roadmap?"
  },
  {
    "id": "pr-lgtm-latency",
    "title": "PR “LGTM” Latency — Days Lost to Time Zones",
    "segment": "Speed",
    "icon": <GitCompare className="h-8 w-8 text-primary" />,
    "problem": "One PR → one day lost; reviews trickle in overnight.",
    "solution": "Same-day PR SLAs in your timezone.",
    "formula": [
        "Savings_PR = PRs/mo × Δreview_hours × C_dev_hour"
    ],
    "example": "120 PRs/mo × (4h − 1h) × $85 = $30,600/mo recaptured.",
    "cta_question": "How many quarters died waiting for “Looks Good To Me”?"
  },
  {
    "id": "faster-onboarding",
    "title": "Faster Onboarding — Time-to-Productivity",
    "segment": "Speed",
    "icon": <UserCheck className="h-8 w-8 text-primary" />,
    "problem": "New engineers take weeks to add useful code.",
    "solution": "Playbooked onboarding with nearshore leads embedded in your rituals.",
    "formula": [
        "Savings_onboard = H × C_day × ΔTP"
    ],
    "example": "H=6, C_day (US FLC) ≈ $156,000/260 ≈ $600/day, ΔTP=10 days → $36,000 saved.",
    "cta_question": "What is your measured ΔTP seat-by-seat?"
  },
  {
    "id": "change-failure-rate",
    "title": "Change-Failure Rate — Fewer Hotfix Fridays",
    "segment": "Quality",
    "icon": <TestTube2 className="h-8 w-8 text-primary" />,
    "problem": "Failed changes burn cash and trust.",
    "solution": "Shift-left QA, contract tests, and canary releases run by platform crew.",
    "formula": [
        "Savings_fc = D × (CFR₀ − CFR₁) × C_incident"
    ],
    "example": "D=60 deploys, CFR 8%→4%, C_incident=$12k → $28,800/mo saved.",
    "cta_question": "Which metric—CFR, MTTR, or both—hurts your renewals more?"
  },
  {
    "id": "attrition-replacement",
    "title": "Attrition & Replacement — Context Reset Penalty",
    "segment": "People",
    "icon": <Users className="h-8 w-8 text-primary" />,
    "problem": "Night-shift offshore drives churn; you keep paying the knowledge tax.",
    "solution": "Same-day schedules + retention ladders + documented runbooks.",
    "formula": [
        "Savings_attrition = Team × (rate₀ − rate₁) × C_replace"
    ],
    "example": "Team=12, 20%→12%, C_replace=$25k → $24,000/yr saved.",
    "cta_question": "How many ‘new intros’ did your squad do this month?"
  },
  {
    "id": "management-overhead",
    "title": "Management Overhead — Meetings You Don’t Need",
    "segment": "Ops",
    "icon": <Briefcase className="h-8 w-8 text-primary" />,
    "problem": "EMs/PMs spend hours herding vendors across time zones.",
    "solution": "Single vendor, single SLA, single cadence.",
    "formula": [
        "Savings_mgmt = 12 × (EM_hrs×C_EM + PM_hrs×C_PM) × reduction"
    ],
    "example": "(30h×$120 + 20h×$95) × 12 × 0.5 ≈ $33,000/yr freed.",
    "cta_question": "What would your EM do with 10 hours/week back?"
  },
  {
    "id": "compliance-security-drag",
    "title": "Compliance & Security — Questionnaire Drag",
    "segment": "Risk",
    "icon": <ShieldCheck className="h-8 w-8 text-primary" />,
    "problem": "SOC2/ISO gaps stall enterprise deals.",
    "solution": "Built-in SSO/SAML/SCIM, SBOMs, audit trails—operated in-timezone.",
    "formula": [
        "Savings_audit = H_audit_saved × C_hour"
    ],
    "example": "250 hours saved × $110/hr = $27,500/yr.",
    "cta_question": "Which control is blocking the biggest open opportunity right now?"
  },
  {
    "id": "all-in-vs-all-these-invoices",
    "title": "All-in vs. “All-these-Invoices”",
    "segment": "Consolidation",
    "icon": <Layers className="h-8 w-8 text-primary" />,
    "problem": "Fragmented vendors → duplicated tools, travel, and shadow staffing.",
    "solution": "Consolidate under one SLA at $6,800/mo per senior.",
    "formula": [
        "Consolidation_Savings = (Travel + Duplicate_Tools − Credits)"
    ],
    "example": "($20k + $25k − $8k) = $37,000/yr.",
    "cta_question": "How many vendors do you really need to ship one roadmap?"
  }
];

const legend = "Salary (US), burden (e.g., 0.30), US_FLC (fully loaded), PRs/mo, Δreview_hours, C_dev_hour, D (deploys/mo), CFR₀/CFR₁, C_incident, H (hires in wave), C_day, ΔTP, Team, attrition rates, C_replace, EM_hrs/PM_hrs, C_EM/C_PM, reduction, H_audit_saved, C_hour, Travel, Duplicate_Tools, Credits.";

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
            <div key={card.id} className="rounded-lg border bg-card p-6 flex flex-col">
                <div className="flex items-center gap-4">
                    {card.icon}
                    <h2 className="text-xl font-bold text-foreground">{card.title}</h2>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50">
                    <h3 className="font-semibold text-primary">Problem</h3>
                    <p className="text-sm text-muted-foreground m-0">{card.problem}</p>
                </div>
                <div className="mt-4">
                    <h3 className="font-semibold text-green-400">Solution</h3>
                    <p className="text-sm text-muted-foreground m-0">{card.solution}</p>
                </div>
                <div className="mt-4 flex-grow">
                    <h3 className="font-semibold">Proof</h3>
                    <div className="font-mono text-sm bg-background/50 rounded p-4 my-2">
                        {card.formula.map(line => <p key={line} className='m-0 font-normal'>{line}</p>)}
                    </div>
                     <p className="text-sm text-muted-foreground"><span className='font-semibold'>Example:</span> {card.example}</p>
                </div>
                 <div className="mt-6 text-sm italic text-primary/80 border-t border-border/50 pt-4">
                    <span className="font-bold not-italic">Question: </span>{card.cta_question}
                </div>
            </div>
        ))}
      </div>

       <div className="my-16 rounded-lg border bg-card p-6">
            <h3 className="text-xl font-bold text-foreground">Tiny Legend (Variables for Estimation)</h3>
            <p className="mt-2 text-sm text-muted-foreground font-mono">{legend}</p>
       </div>

    </main>
  );
}
