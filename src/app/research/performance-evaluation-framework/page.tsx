import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen, CheckCircle, BarChart, GitCompare, ShieldCheck, Zap, Users, Briefcase, ArrowRight, AlertTriangle } from 'lucide-react';
import { WithTooltip } from "../../../components/ui/tooltip";

export const metadata: Metadata = {
    title: 'Software Engineer Performance & Growth Framework',
    description: 'A data-driven performance evaluation framework for software engineers that moves beyond broken traditional reviews to maximize impact.',
    keywords: 'software engineer performance, performance evaluation framework, technical performance review, bias-free evaluation, engineering impact',
};

const principles = [
    { title: 'Signal Over Noise', description: 'Our analytical engine isolates an engineer\'s true capability from the noise of interview anxiety, cultural differences, and unconscious bias.' },
    { title: 'Evidence Over Opinion', description: 'Every data point is anchored to a specific, observable behavior using a Behaviorally Anchored Rating Scale (BARS) to eliminate subjectivity.' },
    { title: 'Growth Over Judgment', description: 'The goal is to identify the single most impactful area for growth, creating momentum and a steep development curve.' },
    { title: 'Partnership Over Vending', description: 'Our transparent framework includes a "Partnership Health Check" because your success and our engineer\'s success are intertwined.' },
];

const phases = [
    { name: 'Phase 1: Onboarding & Baseline (Days 0-90)', goal: 'Successful integration and establishment of a performance baseline.', instrument: 'The 90-Day Onboarding Review' },
    { name: 'Phase 2: Performance & Growth Cycles (Quarterly)', goal: 'Measure and accelerate impact, velocity, and skill development.', instrument: 'The Quarterly Performance Check-in' },
    { name: 'Phase 3: Strategic Impact & Leverage (Ongoing)', goal: 'Transition from a solid contributor to a force multiplier.', instrument: 'Annual Strategic Review & Career Pathing' },
];

const competencies = [
    {
        pain: 'How effectively does the engineer design, execute, and maintain tests that ensure product quality?',
        solutionTitle: 'Technical Craftsmanship & Quality',
        solutionDescription: 'The disciplined application of QA principles to ensure product integrity.',
        proof: [
            { rating: 1, label: 'Foundational', detail: 'Work often requires significant review for correctness, coverage, or adherence to standards.' },
            { rating: 3, label: 'Effective', detail: 'Consistently delivers solid, reliable test suites that meet project requirements and quality standards.' },
            { rating: 5, label: 'Exemplary', detail: 'Goes beyond requirements to improve test architecture and elevate the team\'s overall quality bar.' },
        ]
    },
    {
        pain: 'Does the engineer proactively seek clarity, identify risks, and drive their tasks to completion without constant prompting?',
        solutionTitle: 'Proactive Ownership & Agency',
        solutionDescription: 'The drive to operate with autonomy and take responsibility for outcomes.',
        proof: [
            { rating: 1, label: 'Reactive', detail: 'Tends to wait for instructions; work can stall when faced with ambiguity.' },
            { rating: 3, label: 'Proactive', detail: 'Reliably asks clarifying questions, flags blockers, and manages tasks from start to finish.' },
            { rating: 5, label: 'Pre-emptive', detail: 'Thinks ahead, anticipates future problems, and takes ownership beyond their immediate tasks.' },
        ]
    },
    {
        pain: 'How effective is the engineer\'s communication in conveying findings and collaborating with developers?',
        solutionTitle: 'Communication & Collaborative Mindset',
        solutionDescription: 'The ability to act as a clear, effective node in the team\'s information network.',
        proof: [
            { rating: 1, label: 'Needs Development', detail: 'Communication can be unclear, leading to misunderstandings or rework.' },
            { rating: 3, label: 'Clear & Consistent', detail: 'Communicates effectively in tickets and stand-ups. A reliable collaborator.' },
            { rating: 5, label: 'Force Multiplier', detail: 'Their communication actively prevents ambiguity and accelerates the entire team.' },
        ]
    },
    {
        pain: 'How quickly has the engineer adapted to your specific tools, codebase, and workflows?',
        solutionTitle: 'Adaptability & Systems Integration',
        solutionDescription: 'The speed at which they become effective in your ecosystem.',
        proof: [
            { rating: 1, label: 'Slow to Adapt', detail: 'Struggles to adopt new tools or processes, requiring repeated instruction.' },
            { rating: 3, label: 'Adapts Well', detail: 'Got up to speed on the tech stack and workflows within the expected 90-day timeframe.' },
            { rating: 5, label: 'Rapidly Integrates', detail: 'Masters new tools exceptionally quickly. Seems like they\'ve been on the team for twice as long.' },
        ]
    },
    {
        pain: 'Does the engineer consistently demonstrate a "security-first" mindset in their daily work?',
        solutionTitle: 'Security & Compliance Mindset',
        solutionDescription: 'The non-negotiable understanding that security is a core feature of all work.',
        proof: [
            { rating: 1, label: 'Lacks Awareness', detail: 'Has made errors related to security protocols or requires frequent reminders.' },
            { rating: 3, label: 'Compliant', detail: 'Understands and consistently adheres to all documented security requirements. A safe pair of hands.' },
            { rating: 5, label: 'Vigilant', detail: 'Not only follows protocols but actively identifies potential security weaknesses in the product or processes.' },
        ]
    }
];

export default function PerformanceEvaluationFrameworkPage() {
    return (
        <main className="container max-w-5xl py-12">
             <div className="text-sm text-muted-foreground mb-8">
                <Link href="/" className="hover:text-foreground">Home</Link> / 
                <Link href="/research/hub" className="hover:text-foreground">Research</Link> / 
                <span>Performance & Growth Framework</span>
            </div>
            
            <header className="my-8 text-center">
              <h1 className="text-4xl font-extrabold md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">The Performance & Growth Framework</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">A data-driven software engineer performance evaluation framework designed to maximize impact and ensure partnership success.</p>
              <div className="mt-6">
                <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4749129" target="_blank" rel="noopener noreferrer" className="cta-button">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read the Peer-Reviewed Paper on SSRN
                </a>
              </div>
            </header>

            <section className="my-16">
                 <div className="rounded-lg border bg-card p-6 shadow-lg">
                    <p className="text-sm font-semibold text-primary">The Pain: Performance Management is Broken</p>
                    <div className="flex items-center gap-3 mt-3">
                         <AlertTriangle className="h-8 w-8 text-primary" />
                        <h2 className="text-xl font-semibold text-foreground">Traditional technical performance reviews are subjective, backward-looking, and generate zero actionable data.</h2>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">Let's start with the ground truth: traditional performance reviews are a broken tool. They’re a mix of subjective bias, recency effect, and goals that were irrelevant three months ago. They generate anxiety for engineers and very little useful data for leaders.</p>

                    <div className="mt-6 border-t border-border pt-4">
                        <h3 className="font-semibold text-primary">The Solution: A Diagnostic System, Not a Judgment</h3>
                         <p className="mt-2 text-sm text-foreground">Our approach is different. We don't do "reviews." We run diagnostics. Our entire framework is built on four core principles to turn performance management from a subjective art into an objective science.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {principles.map(p => (
                                <div key={p.title} className="p-4 rounded-lg bg-background">
                                    <h4 className="font-bold text-foreground text-base">{p.title}</h4>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {p.description.includes("BARS") ? 
                                          <>
                                            {p.description.split('BARS')[0]}
                                            <WithTooltip content="Behaviorally Anchored Rating Scale: A method that ties ratings to specific, observable behaviors to reduce subjectivity.">
                                                <span className="border-b border-dashed">BARS</span>
                                            </WithTooltip>
                                            {p.description.split('BARS')[1]}
                                          </> 
                                          : p.description
                                        }
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="mt-6 border-t border-border pt-4">
                        <h3 className="font-semibold text-foreground">The Proof: Predictable Growth & Higher Retention</h3>
                        <p className="mt-2 text-sm text-muted-foreground">This system provides a clear, high-velocity runway for our engineers to succeed within your organization. It's the proof behind our high retention rates and the predictable impact our engineers deliver.</p>
                         <Link href="/process" className="mt-4 flex items-center text-sm font-semibold text-primary">
                            See How This Fits Our Process <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="my-16">
                <h2 className="text-center text-3xl font-bold">The Program Architecture: The Talent Runway</h2>
                <p className="text-center mt-2 text-muted-foreground">We structure an engineer's journey as a clear, multi-stage runway designed for acceleration and long-term success.</p>
                <div className="mt-12 space-y-8">
                    {phases.map(phase => (
                        <div key={phase.name} className="p-6 rounded-lg border bg-card shadow-lg">
                            <h3 className="font-semibold text-foreground text-xl">{phase.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1"><strong>Goal:</strong> {phase.goal}</p>
                            <p className="text-sm text-muted-foreground mt-1"><strong>Key Instrument:</strong> {phase.instrument}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="my-16">
                <h2 className="text-center text-3xl font-bold">The Core Instrument: The TeamStation-Client Diagnostic</h2>
                <p className="text-center mt-2 text-muted-foreground">This is the engine of our entire program a standardized, evidence-based tool we use at each stage of the Talent Runway. Below is the exact framework we use with your leadership to evaluate our engineers.</p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {competencies.map((comp, index) => (
                        <div key={index} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg">
                            <p className="text-sm font-semibold text-primary">{comp.pain}</p>

                            <div className="mt-4 pt-4 border-t border-border">
                                <h4 className="font-semibold text-primary">{comp.solutionTitle}</h4>
                                <p className="text-sm italic text-muted-foreground">{comp.solutionDescription}</p>
                            </div>
                            
                            <div className="mt-4 pt-4 border-t border-border flex-grow">
                                <h4 className="font-semibold text-foreground">Proof (BARS Scale)</h4>
                                <div className="mt-2 space-y-2">
                                    {comp.proof.map(item => (
                                        <div key={item.rating} className="text-sm flex items-start gap-2">
                                            <span className="font-bold text-primary">({item.rating}) {item.label}:</span>
                                            <span className="text-muted-foreground">{item.detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-8">
                    <Link href="/research/performance-evaluation-report-example" className="font-semibold text-primary hover:underline">
                        See a Real Sample Report <ArrowRight className="inline h-4 w-4" />
                    </Link>
                </div>
            </section>

            <section className="my-16">
                <h2 className="text-center text-3xl font-bold">The Outcomes: What This Delivers</h2>
                <p className="text-center mt-2 text-muted-foreground">By committing to this rigorous, structured program, we create a powerful set of outcomes for both you as our client and for the engineers dedicated to your success.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="p-6 rounded-lg border bg-card shadow-lg">
                        <h3 className="font-bold text-primary text-xl">For Our Clients</h3>
                        <ul className="mt-4 space-y-3 list-none p-0">
                            <li className="flex items-start gap-3 text-sm"><CheckCircle className="h-4 w-4 mt-0.5 text-green-500 shrink-0" /> <div><strong className="text-foreground">Actionable Performance Data:</strong> A clear picture of strengths and growth areas, free from subjective noise.</div></li>
                            <li className="flex items-start gap-3 text-sm"><CheckCircle className="h-4 w-4 mt-0.5 text-green-500 shrink-0" /> <div><strong className="text-foreground">Reduced Management Overhead:</strong> Less time deciphering performance issues, more time on strategy.</div></li>
                            <li className="flex items-start gap-3 text-sm"><CheckCircle className="h-4 w-4 mt-0.5 text-green-500 shrink-0" /> <div><strong className="text-foreground">Continuous Improvement Loop:</strong> A candid feedback channel to refine our joint processes for better results.</div></li>
                            <li className="flex items-start gap-3 text-sm"><CheckCircle className="h-4 w-4 mt-0.5 text-green-500 shrink-0" /> <div><strong className="text-foreground">Higher Talent Retention & ROI:</strong> Engaged engineers with clear growth paths stay longer, ensuring stability.</div></li>
                        </ul>
                    </div>
                     <div className="p-6 rounded-lg border bg-card shadow-lg">
                        <h3 className="font-bold text-primary text-xl">For Our Engineers</h3>
                        <ul className="mt-4 space-y-3 list-none p-0">
                            <li className="flex items-start gap-3 text-sm"><CheckCircle className="h-4 w-4 mt-0.5 text-green-500 shrink-0" /> <div><strong className="text-foreground">Clarity and Fair Expectations:</strong> They know exactly what the bar is and how they are measured.</div></li>
                            <li className="flex items-start gap-3 text-sm"><CheckCircle className="h-4 w-4 mt-0.5 text-green-500 shrink-0" /> <div><strong className="text-foreground">Feedback They Can Use:</strong> Specific, actionable insights to build their skills, not vague judgments.</div></li>
                            <li className="flex items-start gap-3 text-sm"><CheckCircle className="h-4 w-4 mt-0.5 text-green-500 shrink-0" /> <div><strong className="text-foreground">A Defined Career Runway:</strong> They see we are invested in their long-term success, fostering ownership.</div></li>
                        </ul>
                    </div>
                </div>
            </section>
            
        </main>
    );
}
