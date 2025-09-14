import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  DollarSign,
  Zap,
  TestTube2,
  Users,
  Briefcase,
  ShieldCheck,
  Layers,
  GitCompare,
  UserCheck,
  HelpCircle,
  BookOpen,
  AlertTriangle,
  Scale,
  CheckCircle,
  BarChart,
  GitBranch,
  FileLock,
  Tv,
  FileSearch,
  MessageSquare,
  Clock,
  Database,
  BrainCircuit,
  GanttChartSquare,
  Users2,
  FileText,
} from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'LATAM IT Talent Performance Evaluations | TeamStation AI',
  description: 'A data-driven framework for nearshore LATAM engineering performance, growth, and promotion readiness, using Behaviorally Anchored Rating Scales (BARS).',
};

const valueProps = [
    {
        icon: <UserCheck className="h-6 w-6 text-primary"/>,
        title: 'Signal over noise',
        description: 'We isolate true capability from interview nerves, cultural phrasing, and unconscious bias using language-fair calibration and outcome-focused scoring.'
    },
    {
        icon: <FileSearch className="h-6 w-6 text-primary"/>,
        title: 'Evidence over opinion',
        description: 'Every rating is anchored to observable behaviors via BARS (behaviorally-anchored rating scales). No vibes—just evidence.'
    },
    {
        icon: <Zap className="h-6 w-6 text-primary"/>,
        title: 'Growth over judgment',
        description: 'Each cycle identifies one high-leverage growth vector (next-level behavior) and ties it to L1–L4 expectations and promotion signals.'
    },
    {
        icon: <Users className="h-6 w-6 text-primary"/>,
        title: 'Partnership over vending',
        description: 'Performance lives in a system. Our Partnership Health Check surfaces process/documentation friction so both sides improve.'
    }
]

const runwayLevels = [
    {
        level: 'L1',
        title: 'Proficient',
        subtitle: 'Guided contributor',
        description: 'Contributes on component-level tasks with guidance; follows standards reliably.',
        evaluations: [
            'Technical craftsmanship at the component level',
            'Ownership of assigned scope; asks for clarity early',
            'Clear, concise updates in stand-ups and PRs'
        ],
        promoSignal: 'Consistently demonstrates L2 independence on small features.'
    },
    {
        level: 'L2',
        title: 'Mid',
        subtitle: 'Independent feature owner',
        description: 'Owns and ships features end-to-end—design → build → test → release.',
        evaluations: [
            'Solution design and trade-offs for a feature/service',
            'Risk surfacing, task slicing, and on-time delivery',
            'Partnering with QA/PM; crisp handoffs and docs'
        ],
        promoSignal: 'Leads a cross-component project to L3 standards.'
    },
    {
        level: 'L3',
        title: 'Senior',
        subtitle: 'Leads complex projects',
        description: 'Orchestrates cross-component delivery, raises standards, mentors others.',
        evaluations: [
            'System design across boundaries; performance & reliability',
            'Technical direction, code review rigor, leveling up peers',
            'Incident prevention and steady delivery cadence'
        ],
        promoSignal: 'Shapes team-wide architecture/standards consistently (L4 signal).'
    },
    {
        level: 'L4',
        title: 'Expert',
        subtitle: 'Org-level architect',
        description: 'Sets technical strategy across teams; simplifies complexity at scale.',
        evaluations: [
            'Long-horizon architecture and risk posture',
            'Platform thinking, reusability, and cost/perf balance',
            'Coaching leads; elevating the whole engineering org'
        ],
        promoSignal: 'Sustained org-level impact aligned to business goals.'
    }
];

const diagnosticSteps = [
    {
        step: 1,
        title: 'Evidence Capture',
        description: 'Pulls specific examples from delivery, PRs, planning notes, and stakeholder feedback.'
    },
    {
        step: 2,
        title: 'BARS Scoring (Level-Calibrated)',
        description: 'Behaviors mapped to L1–L4 expectations; language-fair for ESL.'
    },
    {
        step: 3,
        title: 'Synthesis & Review',
        description: 'One growth vector, promotion readiness call, and partnership health notes.'
    }
]

const competencies = [
    {
        icon: <Layers className="h-6 w-6 text-primary"/>,
        title: 'Technical craftsmanship & quality',
        description: 'Robust design, correctness, maintainability.'
    },
    {
        icon: <UserCheck className="h-6 w-6 text-primary"/>,
        title: 'Proactive ownership & agency',
        description: 'Risk surfacing, task slicing, on-time delivery.'
    },
    {
        icon: <MessageSquare className="h-6 w-6 text-primary"/>,
        title: 'Communication & collaboration',
        description: 'Clear docs/PRs; accelerates team alignment.'
    },
    {
        icon: <GitBranch className="h-6 w-6 text-primary"/>,
        title: 'Adaptability & systems integration',
        description: 'Speed to become effective in your stack.'
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-primary"/>,
        title: 'Security & compliance mindset',
        description: 'Defaults secure; flags vulnerabilities early.'
    }
]

const cycleSteps = [
    {
        step: 1,
        title: 'Days 0–90: Onboarding baseline',
        purpose: 'Establish L1–L4 fit, expectations, and early momentum.',
        activities: 'Access + environment ready, role brief, success criteria, docs gaps identified.',
        artifacts: [
            '90-day Onboarding Report (BARS snapshot + growth vector)',
            'Partnership Health Notes (documentation/process friction)',
            'Promotion Trajectory Callout (if early L2 signal appears)'
        ]
    },
    {
        step: 2,
        title: 'Quarterly diagnostic (Q1, Q2, Q3, Q4)',
        purpose: 'Evidence-based evaluation tied to current level and responsibilities.',
        activities: 'Evidence capture → BARS scoring → synthesis & review.',
        artifacts: [
            'Quarterly Diagnostic Memo (scores + rationale)',
            '1 Growth Vector (next-level behavior)',
            'Promotion Readiness Signal (yes/no + rationale)'
        ]
    },
    {
        step: 3,
        title: 'Project-end debrief (as needed)',
        purpose: 'Convert delivery into learning and durable signals.',
        activities: 'Retro artifacts, PRs, incident review, stakeholder feedback.',
        artifacts: [
            'Impact Summary (scope, risks handled, quality)',
            'Standards Raised (what improved for the team)',
            'Carry-Forward Focus (what to double-down next cycle)'
        ]
    },
    {
        step: 4,
        title: 'Annual synthesis',
        purpose: 'Long-horizon view across the year; calibration for level changes.',
        activities: 'Aggregate diagnostics, trend analysis, business outcomes.',
        artifacts: [
            'Year-in-Review Dossier (trend charts + narrative)',
            'Level Change Recommendation (if earned)',
            'Roadmap for Next Year (skills, scope, leadership)'
        ]
    }
];

const healthCheckItems = [
    {
        category: 'Onboarding & documentation',
        items: [
            'Clarity of setup docs (1–5) — Can a new engineer become productive without DM’ing for basics?',
            'Architecture overview (1–5) — Does a current systems map exist (services, data, auth)?',
            'Local dev experience (1–5) — One command to run; fixtures & seeds provided.',
            'Access provisioning (1–5) — Repos, CI, cloud, dashboards granted on Day 1.',
            'Blocking gap (free-text) — Name one doc or context that would’ve cut onboarding time by 50%.'
        ]
    },
    {
        category: 'Process & communication',
        items: [
            'Goal clarity (1–5) — Do OKRs/roadmap map to sprint scope cleanly?',
            'Ownership clarity (1–5) — Who signs off on requirements, QA, release?',
            'PR & review SLA (1–5) — Median <24h? Clear guidelines for “ready to merge”?',
            'Incident hygiene (1–5) — Postmortems with owners, actions, deadlines.',
            'One change that would 2× velocity (free-text) — Name the smallest rule that would accelerate delivery.'
        ]
    }
]

const faqs = [
    {
      question: "How do you reduce bias—especially for ESL engineers?",
      answer: "We use behavior anchors (BARS), clarity-normalized prompts, and semantic chunking to evaluate what was demonstrated, not accent or jargon. Experts cross-review and reconcile."
    },
    {
      question: "What’s the cadence and how much manager time is needed?",
      answer: "90-day onboarding review, then quarterly check-ins. Manager effort is ~20–30 minutes per engineer per cycle (evidence links + quick rubric)."
    },
    {
      question: "Can this plug into our tools (Jira, GitHub, GitLab, Azure DevOps)?",
      answer: "Yes. We can customize a read-only access to pull evidence links from your workflow (PRs, tickets, docs). Nothing changes about how your team ships—evaluation reads the trail."
    },
    {
      question: "How do you handle data security and privacy?",
      answer: "PII redaction, least-privilege access, encrypted artifacts at rest/in transit, access logs, and defined retention windows. SSO and customer-owned storage options available."
    },
    {
      question: "How do promotion signals work?",
      answer: "“Yes / Not yet” is tied to repeated next-level behaviors across cycles—documented with BARS examples and links to real work. No opinion-only verdicts."
    }
]

export default function PerformanceEvaluationPage() {
  return (
    <main className="container max-w-6xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">Home</Link> / 
            <Link href="/research/hub" className="hover:text-foreground">Research</Link> / 
            <span>Performance Evaluations</span>
        </div>

        <header className="text-center my-12">
            <p className="text-sm font-semibold text-primary">LATAM IT Talent Performance Evaluations</p>
            <h1 className="mt-2 text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Performance Management Is Broken. We’re Fixing It.</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Traditional reviews are backward-looking and biased. We don’t “review”—we diagnose. TeamStation runs evidence-based, level-calibrated evaluations so nearshore LATAM engineers get a fair runway to grow—and your org gets reliable performance data you can act on.
            </p>
            <div className="mt-4 text-xs font-mono text-primary">
                8-year proprietary corpus • 12,000+ technical interviews • Expert-in-the-loop
            </div>
        </header>

        <section className="my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map(prop => (
                <div key={prop.title} className="text-center">
                    <div className="flex justify-center">{prop.icon}</div>
                    <h3 className="mt-4 font-bold text-foreground">{prop.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{prop.description}</p>
                </div>
            ))}
        </section>

        <section className="my-24">
            <h2 className="text-4xl font-bold text-center text-foreground">The L1–L4 Talent Runway</h2>
            <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">Level-calibrated expectations, behavior-anchored ratings, and clear signals for promotion readiness.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                {runwayLevels.map(level => (
                    <div key={level.level} className="rounded-lg border bg-card p-6 flex flex-col h-full">
                        <div className="text-center">
                            <div className="inline-block bg-primary/10 text-primary font-bold rounded-full px-3 py-1 text-sm">{level.level} {level.title}</div>
                            <h3 className="text-lg font-bold text-foreground mt-2">{level.subtitle}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{level.description}</p>
                        </div>
                        <div className="mt-4 border-t border-border pt-4 flex-grow">
                             <h4 className="text-sm font-semibold text-foreground mb-2">Evaluation Focus:</h4>
                             <ul className="space-y-2">
                                {level.evaluations.map(item => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <CheckCircle className="h-4 w-4 shrink-0 mt-1 text-green-500"/>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-4 border-t border-border pt-4">
                            <p className="text-xs font-semibold text-primary/80">PROMOTION SIGNAL</p>
                            <p className="text-sm text-muted-foreground italic">{level.promoSignal}</p>
                        </div>
                    </div>
                ))}
            </div>
             <p className="text-center mt-8 text-sm font-mono text-primary">BARS-calibrated per level • Language-fair scoring (ESL aware) • Expert review with growth vector each cycle</p>
        </section>
        
        <section className="my-24 rounded-lg bg-card border p-8">
            <h2 className="text-4xl font-bold text-center text-foreground">The TeamStation–Client Diagnostic</h2>
            <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">A standardized, level-calibrated instrument. Every cycle we capture evidence, score behaviors with BARS, and deliver a single growth vector plus promotion signals you can act on.</p>
            
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                {diagnosticSteps.map((step, index) => (
                    <React.Fragment key={step.step}>
                        <div className="flex flex-col items-center max-w-xs">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center ring-8 ring-background flex-shrink-0">
                                <span className="text-primary font-bold">{step.step}</span>
                            </div>
                            <h3 className="mt-4 font-bold text-foreground">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                        {index < diagnosticSteps.length - 1 && (
                            <ArrowRight className="h-6 w-6 text-border hidden md:block" />
                        )}
                    </React.Fragment>
                ))}
            </div>
             <p className="text-center mt-8 text-sm font-mono text-primary">Auditable rubric • Language-fair calibration • Expert review</p>
        </section>


        <section className="my-24">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-foreground">What we measure (BARS by competency)</h2>
                    <div className="mt-8 space-y-6">
                        {competencies.map(comp => (
                            <div key={comp.title} className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg">{comp.icon}</div>
                                <div>
                                    <h3 className="font-bold text-foreground">{comp.title}</h3>
                                    <p className="text-sm text-muted-foreground m-0">{comp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rounded-lg border bg-card p-6">
                    <h3 className="text-xl font-bold text-primary">What is "BARS"?</h3>
                    <p className="mt-2 text-foreground font-semibold">Behaviorally Anchored Rating Scales: a scoring method where each rating point is tied to a concrete, observable behavior for a specific level (L1–L4). This reduces opinion drift, improves fairness (incl. ESL/communication differences), and makes feedback actionable.</p>
                    <p className="mt-4 text-sm text-muted-foreground">We calibrate BARS to the engineer’s current level; consistent next-level behavior triggers promotion signals.</p>
                     <blockquote className="mt-4 border-l-2 border-primary pl-4 text-sm italic text-muted-foreground">
                        The expert’s skill is not a single thing, but a large, indexed library of patterns. The expert is not just ‘smarter’—they have a different kind of knowledge, organized for action.
                        <footer className="mt-2 not-italic">— Herbert Simon, Nobel Laureate</footer>
                    </blockquote>

                    <h4 className="font-bold text-foreground mt-6">Why it matters</h4>
                     <ul className="mt-2 space-y-2 text-sm">
                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-1"/><span>Same language, same bar across teams</span></li>
                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-1"/><span>Evidence &gt; opinion</span></li>
                        <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-1"/><span>Clear next-level behaviors for growth</span></li>
                    </ul>

                    <h4 className="font-bold text-foreground mt-6">Mini example — Communication (L2 target)</h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li><strong className="text-foreground">(1) Foundational:</strong> Updates are late/unclear; teammates need to chase context.</li>
                        <li><strong className="text-foreground">(3) Effective:</strong> Shares concise status, PR context, and asks for clarity early.</li>
                        <li><strong className="text-foreground">(5) Exemplary:</strong> Proactively creates docs that unblock others across teams.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="my-24">
            <h2 className="text-4xl font-bold text-center text-foreground">Quarterly rhythm, clear artifacts.</h2>
            <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">A predictable cadence from onboarding baseline to quarterly diagnostics and annual synthesis—each with concrete deliverables.</p>
            <div className="mt-12 flow-root">
                <div className="max-w-3xl mx-auto">
                    <ul className="-mb-8">
                    {cycleSteps.map((item, itemIdx) => (
                        <li key={item.step}>
                        <div className="relative pb-8">
                            {itemIdx !== cycleSteps.length - 1 ? (
                            <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-border" aria-hidden="true" />
                            ) : null}
                            <div className="relative flex items-start space-x-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center ring-8 ring-background flex-shrink-0">
                                <span className="text-primary font-bold">{item.step}</span>
                                </div>
                            <div className="min-w-0 flex-1 pt-1.5 rounded-lg border bg-card p-4">
                                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                                <p className="mt-1 text-sm"><strong className="text-primary/90">Purpose:</strong> <span className="text-muted-foreground">{item.purpose}</span></p>
                                <p className="mt-1 text-sm"><strong className="text-primary/90">Activities:</strong> <span className="text-muted-foreground">{item.activities}</span></p>
                                <div className="mt-2 border-t border-border pt-2">
                                     <p className="text-xs font-semibold text-primary/80 mb-1">ARTIFACTS:</p>
                                    <ul className="space-y-1">
                                        {item.artifacts.map(artifact => (
                                             <li key={artifact} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <CheckCircle className="h-4 w-4 shrink-0 mt-1 text-green-500"/>
                                                <span>{artifact}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
             <p className="text-center mt-8 text-sm font-mono text-primary">Time-to-Productivity • Cycle-time Δ • Defect rate Δ • Stakeholder NPS • Promotion throughput</p>
        </section>


        <section className="my-24">
            <h2 className="text-4xl font-bold text-center text-foreground">Partnership Health & Process Check</h2>
            <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">Performance lives inside a system. Each cycle we run a light diagnostic on the environment so engineers can execute at full potential.</p>
            <p className="text-center mt-4 text-sm font-mono text-primary">KPI focus: Onboarding TTP ↓ • Review latency ↓ • Unblocked PR rate ↑ • Incident repeat rate ↓</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {healthCheckItems.map(check => (
                    <div key={check.category} className="rounded-lg border bg-card p-6">
                        <h3 className="text-xl font-bold text-foreground">{check.category}</h3>
                        <ul className="mt-4 space-y-2">
                            {check.items.map(item => (
                                <li key={item} className="text-sm text-muted-foreground">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>

        <section className="my-24">
             <div className="text-center">
                 <p className="text-sm font-semibold text-primary">THE OUTPUT</p>
                <h2 className="text-4xl font-bold text-foreground mt-2">The Synthesis: Signal from the Noise</h2>
                <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">Clear decisions each cycle: proven strengths, one growth vector, and a promotion signal.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="rounded-lg border bg-card p-6">
                    <h3 className="font-bold text-foreground">Key Strengths</h3>
                    <p className="text-sm text-muted-foreground mt-1">1–2 behaviors with repeat evidence (PRs, designs, incidents prevented).</p>
                </div>
                <div className="rounded-lg border-2 border-primary bg-card p-6">
                    <h3 className="font-bold text-primary">Primary Growth Vector (Next Quarter)</h3>
                    <p className="text-sm text-muted-foreground mt-1">One focus that unlocks next-level behavior; success criteria included.</p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                    <h3 className="font-bold text-foreground">Promotion Readiness Signal</h3>
                    <p className="text-sm text-muted-foreground mt-1">Yes / Not yet — with rationale tied to BARS examples.</p>
                </div>
            </div>
        </section>

        <section className="my-24">
            <h2 className="text-4xl font-bold text-center text-foreground">Performance & evaluation: common questions</h2>
            <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">Look through the answers to the most popular questions of our customers.</p>
            <div className="mt-12 max-w-3xl mx-auto space-y-6">
                {faqs.map(faq => (
                     <div key={faq.question} className="rounded-lg border bg-card p-6">
                        <h3 className="font-semibold text-foreground">{faq.question}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
            <h2 className="text-2xl font-bold">Turn interviews into predictable performance outcomes</h2>
            <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            Evidence-based evaluations, clear growth vectors, and nearshore teams that deliver.
            </p>
            <div className="mt-4 text-center">
                <span className="inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-semibold text-primary">From $20 / $30 / $40 / $50 per hour • 173 hrs/mo basis • Devices & compliance included</span>
            </div>
            <Link href="/pricing" className="cta-button mt-6">
                See Pricing & TCO Model
            </Link>
        </section>

    </main>
  )
}
