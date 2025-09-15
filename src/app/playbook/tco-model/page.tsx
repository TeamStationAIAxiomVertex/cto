
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, DollarSign, Zap, TestTube2, Users, Briefcase, ShieldCheck, Layers, GitCompare, UserCheck, HelpCircle, BookOpen, AlertTriangle, Scale } from 'lucide-react';
import { Tooltip } from '@/components/Tooltip';

export const metadata: Metadata = {
  title: 'TCO Model for Nearshore Engineering Teams | TeamStation AI',
  description: 'A strategic tool for CTOs to model the hidden costs of hiring, delays, and quality issues, and build a CFO-ready business case to turn your engineering organization into a value driver.',
  keywords: 'tco model, total cost of ownership, nearshore engineering cost, cfo business case, engineering budget',
};

const costCards = [
  {
    "id": "seat-cost-delta",
    "title": "Seat Cost Delta — Sticker vs Fully-Loaded",
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
    "title": "Team Delta — Six Seniors, One Decision",
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
    "title": "Cost of Vacancy — The Invisible Tax",
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
    "title": "Change-Failure Rate — Fewer Hotfix Fridays",
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


export default function TCOModelPage() {
  return (
    <main className="container max-w-5xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / 
        <Link href="/playbook/hub" className="hover:text-foreground">Playbook</Link> / 
        <span>TCO Model</span>
      </div>

       <header className="my-8">
          <div className="rounded-lg border bg-card p-8 md:p-12 shadow-lg">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Beyond Salary: The CTO's Guide to Total Cost of Ownership</h1>
              <div className="mt-8 max-w-4xl space-y-6">
                  <div className="bg-background p-6 rounded-lg border border-primary/20">
                      <h2 className="font-bold text-primary flex items-center gap-2"><AlertTriangle className="h-5 w-5"/>Foreword: The Flawed Conversation</h2>
                      <p className="mt-2 text-muted-foreground">The conversation about engineering cost is fundamentally broken. It revolves around a single, dangerously misleading number: the hourly rate or the base salary. Your CFO sees a lower number on a spreadsheet from an offshore vendor and calls it a "win," while you, the CTO, are left to deal with the catastrophic second-order effects: delayed timelines, burned-out senior engineers, and a constant state of fire-fighting.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg border border-border/50">
                      <p className="mt-2 text-muted-foreground">This is not a sustainable way to build a high-performance engineering organization. A true financial analysis must account for the <strong className="text-foreground"><Tooltip text="Total Cost of Ownership: Includes not just salary, but all direct and indirect costs like hiring, legal, IT, and management overhead.">Total Cost of Ownership (TCO)</Tooltip></strong>, a model that includes not just direct costs, but also the massive, often unmeasured "hidden taxes" on your budget: the cost of slow hiring, the penalty for poor quality, and the operational drag of managing a fragmented, global team.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg border border-border/50">
                      <h3 className="font-bold text-primary flex items-center gap-2"><BookOpen className="h-5 w-5"/>The Playbook's Purpose</h3>
                      <p className="mt-2 text-muted-foreground">This guide is your strategic weapon. It provides a CFO-ready framework, presented as a series of "Computational Cost" cards, to systematically dismantle the "cheaper is better" argument. Each card isolates a specific hidden cost, quantifies its financial impact using simple formulas, and demonstrates how an integrated nearshore platform turns that cost center into a source of value. This is how you shift the conversation from cost-cutting to <strong className="text-primary">strategic investment in velocity, quality, and risk mitigation.</strong></p>
                  </div>
              </div>
          </div>
      </header>
      
      <section className="my-24">
        <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground">The Computational Cost Cards: A CFO-Ready Analysis</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">Each card isolates a specific "hidden tax" on your engineering budget, quantifies its impact, and shows the TeamStation AI solution. Use these to build your business case.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {costCards.map(card => (
                <div key={card.id} className="rounded-xl border bg-card p-6 flex flex-col shadow-lg">
                    <div className="flex items-start gap-4">
                        {card.icon}
                        <div>
                            <h2 className="text-lg font-bold text-foreground">{card.title}</h2>
                            <p className="text-sm font-semibold text-primary">{card.segment}</p>
                        </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border/50">
                        <h3 className="font-semibold text-destructive">The Pain (Problem)</h3>
                        <p className="text-sm text-muted-foreground m-0">{card.problem}</p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border/50">
                        <h3 className="font-semibold text-primary">The Gain (Solution)</h3>
                        <p className="text-sm text-muted-foreground m-0">{card.solution}</p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border/50 flex-grow">
                        <h3 className="font-semibold text-foreground">Computational Proof</h3>
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
      </section>

       <section className="my-24 rounded-lg border bg-card p-8 md:p-12 shadow-lg">
        <h2 className="text-4xl font-bold text-center text-foreground">The Verdict: From Cost Center to Value Driver</h2>
        <div className="mt-8 max-w-4xl mx-auto space-y-6">
            <div className="bg-background p-6 rounded-lg border border-primary/20">
                <h3 className="font-bold text-primary flex items-center gap-2"><HelpCircle className="h-5 w-5"/>The Strategic Conversation</h3>
                <p className="mt-2 text-muted-foreground">The purpose of this framework is to elevate your conversation with Finance from a tactical argument over salaries to a strategic discussion about value creation and risk management. When you can walk into the boardroom and quantify the cost of slow hiring, the financial impact of poor quality, and the productivity gain from time-zone alignment, you are no longer just a manager of technical resources. You are a business partner making a data-driven case for investing in a system that generates a clear, predictable ROI.</p>
                <p className="mt-4 text-foreground">A low hourly rate is a vanity metric. <strong className="text-primary">Predictable TCO, accelerated revenue, and mitigated risk</strong> are the metrics that get budgets approved and build enduring companies. This framework is your tool to prove it.</p>
            </div>
        </div>
       </section>

       <div className="my-16 rounded-xl border bg-card p-6 shadow-lg">
            <h3 className="text-xl font-bold text-foreground">Variables for Estimation</h3>
            <p className="text-sm text-muted-foreground mt-1">A legend of variables used in the computational cost cards.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {legend.map(item => <span key={item} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{item}</span>)}
            </div>
       </div>

        <div className="text-center rounded-lg bg-primary/10 p-8 mt-12 shadow-lg">
            <h2 className="text-2xl font-bold">Ready to Build Your Business Case?</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
                Let's plug your numbers into this framework. In a 15-minute, no-obligation strategy call, we can build a CFO-ready TCO model for your specific situation.
            </p>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">
                Book a TCO Strategy Call <ArrowRight className="ml-2 h-4 w-4"/>
            </a>
        </div>
    </main>
  );
}
