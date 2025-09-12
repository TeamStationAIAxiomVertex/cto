
import { Tooltip } from '@/components/Tooltip';
import { BrainCircuit, Scale, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bias-Free Hiring & AI Technical Interviews | TeamStation AI',
  description: 'A playbook for bias-free hiring using AI technical interviews. Replace resume-based gambling with a fair, accurate, and evidence-based system for hiring LATAM engineers.',
};

export default function BiasFreeHiringPage() {
  const principles = [
    {
      icon: <BrainCircuit size={24} className="text-primary" />,
      title: 'Cognitive Science over Credentials',
      description:
        'Axiom Cortex™ analyzes 44 distinct psychometric and NLP signals to evaluate problem-solving, architectural instinct, and learning orientation—traits that resumes cannot capture.',
    },
    {
      icon: <ShieldCheck size={24} className="text-primary" />,
      title: 'Language Fairness Calibration',
      description:
        'Our system is designed to mitigate bias against non-native English speakers. It focuses on the logical and technical substance of an answer, not just linguistic fluency.',
    },
    {
      icon: <Scale size={24} className="text-primary" />,
      title: 'Structured, Auditable Evidence',
      description:
        'Every evaluation is based on a structured interview and work-sample tests. The entire process is recorded and analyzed, creating an auditable evidence locker for every candidate.',
    },
  ];

  return (
    <main className="container max-w-4xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/">Home</Link> / <Link href="/playbook">CTO Playbook</Link> / <span>Bias-Free Technical Hiring</span>
      </div>
      <header className="my-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">Stop Gambling on Resumes. Start De-risking Your Hires.</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          You're here because you know traditional hiring is a broken, high-risk gamble. It's slow, it's biased, and it repeatedly fails to identify top talent. This is the playbook for replacing that broken system with a faster, fairer, and more accurate hiring engine.
        </p>
      </header>
      

      <article className="prose dark:prose-invert max-w-none my-8">
        <h2>The Problem: Your Hiring Process is Costing You a Fortune</h2>
        <p>
          Relying on resumes is like trying to value a company by looking at its logo. They tell you where a candidate has been, but nothing about how they think, solve problems, or learn. Unstructured interviews are even worse—they're a stage for charismatic speakers, not a filter for great engineers.
        </p>
        <p>
          The result? You waste months and burn political capital on a process that delivers inconsistent results. Worse, a single mis-hire can cost you 6-12 months of salary, destroy team morale, and derail your roadmap. You're not just missing out on exceptional talent; you're actively exposing your organization to massive financial and operational risk.
        </p>
      </article>

      <div className="my-16">
        <h2 className="text-3xl font-bold text-center">The Antidote: Three Pillars of Science-Based Hiring</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {principles.map((item) => (
             <div className="rounded-lg border bg-card p-6" key={item.title}>
                <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm mt-2 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <article className="prose dark:prose-invert max-w-none my-8">
        <h2>Putting It Into Practice: The Axiom Cortex™ Workflow</h2>
        <p>
          Our process standardizes evaluation to ensure every candidate is measured against the same objective, scientifically-validated criteria. It's a system, not a series of disconnected conversations.
        </p>
        <ol>
            <li><strong>Role Definition:</strong> We work with you to define the ideal cognitive and technical profile for the role. This becomes the non-negotiable benchmark for evaluation.</li>
            <li><strong>Structured Interview:</strong> Candidates undergo standardized AI technical interviews designed to test specific competencies and cognitive traits under pressure.</li>
            <li><strong>AI-Powered Analysis:</strong> The{' '}<Tooltip text="Axiom Cortex™ is TeamStation AI's proprietary Cognitive AI engine that uses 44 psychometric and NLP signals to evaluate engineering candidates.">Axiom Cortex™</Tooltip> engine analyzes the interview, scoring the candidate against the benchmark and identifying specific risks and strengths—with evidence.</li>
            <li><strong>Evidence-Based Decision:</strong> You get a detailed, auditable report with a cognitive fingerprint and an evidence locker. You make a data-driven decision, not a gut-feel guess.</li>
        </ol>
        <p>
            This methodology transforms hiring from a game of chance into a science. It's how you build an elite team based on proven capability, not just credentials on a PDF.
        </p>
      </article>

      <div className="text-center rounded-lg bg-primary/10 p-8">
          <h2 className="text-2xl font-bold">Stop Guessing. Start Building with Confidence.</h2>
          <p className="mt-2 mx-auto max-w-xl text-muted-foreground">Your most important asset is your talent. It's time to start making data-driven decisions about it.</p>
          <Link href="/research/axiom-cortex-scientific-report" className="cta-button mt-6">
            Read the Axiom Cortex™ Scientific Report
          </Link>
      </div>
    </main>
  );
}
