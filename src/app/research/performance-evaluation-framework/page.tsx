
import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen, Check, BarChart, GitCompare, ShieldCheck, Zap, Users, Briefcase } from 'lucide-react';
import { Tooltip } from '@/components/Tooltip';

export const metadata: Metadata = {
    title: 'The TeamStation Technical Talent Performance & Growth Framework',
    description: 'A data-driven approach to maximizing engineer impact and partnership success, moving beyond broken traditional performance reviews.',
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
        title: 'Technical Craftsmanship & Quality',
        description: 'The disciplined application of QA principles to ensure product integrity.',
        question: 'How effectively does the engineer design, execute, and maintain tests that ensure product quality?',
        scale: [
            { rating: 1, label: 'Foundational', detail: 'Work often requires significant review for correctness, coverage, or adherence to standards.' },
            { rating: 3, label: 'Effective', detail: 'Consistently delivers solid, reliable test suites that meet project requirements and quality standards.' },
            { rating: 5, label: 'Exemplary', detail: 'Goes beyond requirements to improve test architecture and elevate the team\'s overall quality bar.' },
        ]
    },
    {
        title: 'Proactive Ownership & Agency',
        description: 'The drive to operate with autonomy and take responsibility for outcomes.',
        question: 'Does the engineer proactively seek clarity, identify risks, and drive their tasks to completion without constant prompting?',
        scale: [
            { rating: 1, label: 'Reactive', detail: 'Tends to wait for instructions; work can stall when faced with ambiguity.' },
            { rating: 3, label: 'Proactive', detail: 'Reliably asks clarifying questions, flags blockers, and manages tasks from start to finish.' },
            { rating: 5, label: 'Pre-emptive', detail: 'Thinks ahead, anticipates future problems, and takes ownership beyond their immediate tasks.' },
        ]
    },
    {
        title: 'Communication & Collaborative Mindset',
        description: 'The ability to act as a clear, effective node in the team\'s information network.',
        question: 'How effective is the engineer\'s communication in conveying findings and collaborating with developers?',
        scale: [
            { rating: 1, label: 'Needs Development', detail: 'Communication can be unclear, leading to misunderstandings or rework.' },
            { rating: 3, label: 'Clear & Consistent', detail: 'Communicates effectively in tickets and stand-ups. A reliable collaborator.' },
            { rating: 5, label: 'Force Multiplier', detail: 'Their communication actively prevents ambiguity and accelerates the entire team.' },
        ]
    },
    {
        title: 'Adaptability & Systems Integration',
        description: 'The speed at which they become effective in your ecosystem.',
        question: 'How quickly has the engineer adapted to your specific tools, codebase, and workflows?',
        scale: [
            { rating: 1, label: 'Slow to Adapt', detail: 'Struggles to adopt new tools or processes, requiring repeated instruction.' },
            { rating: 3, label: 'Adapts Well', detail: 'Got up to speed on the tech stack and workflows within the expected 90-day timeframe.' },
            { rating: 5, label: 'Rapidly Integrates', detail: 'Masters new tools exceptionally quickly. Seems like they\'ve been on the team for twice as long.' },
        ]
    },
    {
        title: 'Security & Compliance Mindset',
        description: 'The non-negotiable understanding that security is a core feature of all work.',
        question: 'Does the engineer consistently demonstrate a "security-first" mindset in their daily work?',
        scale: [
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
              <h1 className="text-4xl font-extrabold md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">The TeamStation Performance & Growth Framework</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">A Data-Driven Approach to Maximizing Engineer Impact and Partnership Success.</p>
            </header>

            <section className="my-16 prose dark:prose-invert max-w-none">
                <h2 className="text-center">1. The Philosophy: Performance Management is Broken. We're Fixing It.</h2>
                <p className="text-center">Let's start with the ground truth: traditional performance reviews are a broken tool. They’re a backward-looking mix of subjective bias, recency effect, and goals that were irrelevant three months ago. They generate anxiety for engineers and very little actionable data for leaders. Our approach is different. <strong>We don't do "reviews." We run diagnostics.</strong></p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 not-prose">
                    {principles.map(p => (
                        <div key={p.title} className="p-6 rounded-lg border bg-card">
                            <h3 className="font-bold text-primary">{p.title}</h3>
                            <p className="text-sm text-muted-foreground mt-2">{p.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="my-16 prose dark:prose-invert max-w-none">
                <h2 className="text-center">2. The Program Architecture: The Talent Runway</h2>
                <p className="text-center">We structure an engineer's journey as a clear, multi-stage runway designed for acceleration and long-term success.</p>
                <div className="mt-12 space-y-8 not-prose">
                    {phases.map(phase => (
                        <div key={phase.name} className="p-6 rounded-lg border bg-card">
                            <h3 className="font-semibold text-foreground">{phase.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1"><strong>Goal:</strong> {phase.goal}</p>
                            <p className="text-sm text-muted-foreground mt-1"><strong>Key Instrument:</strong> {phase.instrument}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="my-16 prose dark:prose-invert max-w-none">
                <h2 className="text-center">3. The Core Instrument: The TeamStation-Client Diagnostic</h2>
                <p className="text-center">This is the engine of our entire program. It is the standardized, evidence-based tool we use at each stage of the Talent Runway. Below is the exact framework we will use with your leadership to evaluate our engineers.</p>

                <div className="not-prose mt-12 space-y-8">
                    {competencies.map(comp => (
                        <div key={comp.title} className="p-6 rounded-lg border bg-card">
                            <h3 className="text-lg font-bold text-primary">{comp.title}</h3>
                            <p className="text-sm italic text-muted-foreground">{comp.description}</p>
                            <p className="mt-4 text-sm font-semibold text-foreground">{comp.question}</p>
                            <div className="mt-4 space-y-2">
                                {comp.scale.map(item => (
                                    <div key={item.rating} className="text-sm flex items-start gap-2">
                                        <span className="font-bold text-primary">({item.rating}) {item.label}:</span>
                                        <span className="text-muted-foreground">{item.detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="my-16 prose dark:prose-invert max-w-none">
                <h2 className="text-center">4. The Outcomes: What This Delivers</h2>
                <p className="text-center">By committing to this rigorous, structured program, we create a powerful set of outcomes for both you as our client and for the engineers dedicated to your success.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 not-prose">
                    <div className="p-6 rounded-lg border bg-card">
                        <h3 className="font-bold text-primary">For Our Clients</h3>
                        <ul className="mt-4 space-y-2 list-none p-0">
                            <li className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 mt-0.5 text-green-500 shrink-0" /> <strong className="text-foreground">Actionable Performance Data:</strong> A clear picture of strengths and growth areas, free from subjective noise.</li>
                            <li className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 mt-0.5 text-green-500 shrink-0" /> <strong className="text-foreground">Reduced Management Overhead:</strong> Less time deciphering performance issues, more time on strategy.</li>
                            <li className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 mt-0.5 text-green-500 shrink-0" /> <strong className="text-foreground">Continuous Improvement Loop:</strong> A candid feedback channel to refine our joint processes for better results.</li>
                            <li className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 mt-0.5 text-green-500 shrink-0" /> <strong className="text-foreground">Higher Talent Retention & ROI:</strong> Engaged engineers with clear growth paths stay longer, ensuring stability.</li>
                        </ul>
                    </div>
                     <div className="p-6 rounded-lg border bg-card">
                        <h3 className="font-bold text-primary">For Our Engineers</h3>
                        <ul className="mt-4 space-y-2 list-none p-0">
                            <li className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 mt-0.5 text-green-500 shrink-0" /> <strong className="text-foreground">Clarity and Fair Expectations:</strong> They know exactly what the bar is and how they are measured.</li>
                            <li className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 mt-0.5 text-green-500 shrink-0" /> <strong className="text-foreground">Feedback They Can Use:</strong> Specific, actionable insights to build their skills, not vague judgments.</li>
                            <li className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 mt-0.5 text-green-500 shrink-0" /> <strong className="text-foreground">A Defined Career Runway:</strong> They see we are invested in their long-term success, fostering ownership.</li>
                        </ul>
                    </div>
                </div>
            </section>
            
        </main>
    );
}

    