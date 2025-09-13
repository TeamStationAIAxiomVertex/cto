
import Link from 'next/link';
import type { Metadata } from 'next';
import { Tooltip } from '@/components/Tooltip';
import { CheckCircle, ArrowRight, BrainCircuit, ShieldCheck, FileText, Scale, UserX, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Stop Gambling on Resumes. Start De-risking Your Hires.',
  description: 'A playbook for replacing your broken, high-risk hiring process with a faster, fairer, and more accurate hiring engine powered by cognitive science.',
};

const hiringPains = [
    {
        icon: <UserX className="h-8 w-8 text-yellow-400" />,
        pain: "Is your hiring process a high-risk gamble?",
        solutionTitle: "From Resume Keywords to Cognitive Proof",
        problem: "Traditional hiring relies on resume keywords and unstructured interviews—a biased, low-signal process that tells you nothing about a candidate's actual problem-solving ability.",
        solution: "Our Axiom Cortex™ Cognitive AI engine synthesizes the interview conversation, using over 44 proprietary algorithms to provide scientific, evidence-based proof of a candidate's cognitive traits and mental shape.",
        proof: "Mismatch Rate ≤ 10%",
        href: "/technical-interview-evaluation",
        linkLabel: "See a Real Evaluation Report"
    },
    {
        icon: <UserCheck className="h-8 w-8 text-primary" />,
        pain: "Are you losing top talent to a slow, biased process?",
        solutionTitle: "From Subjective Interviews to Objective Evidence",
        problem: "Unstructured interviews favor charismatic speakers over the best engineers and are notoriously prone to interviewer bias, especially against non-native English speakers.",
        solution: "A human expert conducts a structured, bias-aware interview. Our Cognitive AI then provides a Cortex Calibration Layer to ensure we evaluate pure technical and logical signals, not just linguistic fluency or presentation style.",
        proof: "Time-to-Offer ≈ 9 days",
        href: "/research/axiom-cortex-scientific-report",
        linkLabel: "Read the Scientific Paper"
    },
    {
        icon: <FileText className="h-8 w-8 text-primary" />,
        pain: "Can you defend your hiring decisions with data?",
        solutionTitle: "From Gut-Feel to Auditable Proof",
        problem: "When a hire fails, there's often no data to explain why the decision was made. The process is a black box, making it impossible to learn from mistakes.",
        solution: "Every evaluation generates a complete 'Evidence Locker' with transcripts, scores, and an explainable hiring signal. You get a fully auditable evidence trail for every candidate, turning hiring into a science.",
        proof: "100% Auditable Evidence Trail",
        href: "/process",
        linkLabel: "Explore Our Full Process"
    }
];

export default function BiasFreeHiringPage() {
  return (
    <main className="container max-w-5xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/playbook" className="hover:text-foreground">CTO Playbook</Link> / <span>Bias-Free Hiring</span>
        </div>

        <header className="my-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">Stop Gambling on Resumes. Start De-risking Your Hires.</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">You're here because you know traditional hiring is a broken, high-risk gamble. It's slow, it's biased, and it repeatedly fails to identify top talent. This is the playbook for replacing that system with a faster, fairer, and more accurate hiring engine.</p>
        </header>

        <section className="my-24">
            <div className="text-center">
                <h2 className="text-3xl font-bold">The Problem: Your Hiring Process is Costing You a Fortune</h2>
                <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">A single mis-hire can cost you 6-12 months of salary, destroy team morale, and derail your roadmap. You're not just missing out on exceptional talent; you're exposing your organization to massive financial and operational risk.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                {hiringPains.map((item) => (
                    <div key={item.pain} className="rounded-lg border bg-card p-6 flex flex-col">
                        <p className="text-sm font-semibold text-primary">{item.pain}</p>
                        <div className="flex items-center gap-3 mt-3">
                            {item.icon}
                            <h3 className="text-lg font-semibold text-foreground">{item.solutionTitle}</h3>
                        </div>
                        
                        <div className="mt-4 flex-grow space-y-4">
                            <div>
                                <h4 className="font-semibold text-yellow-400">The Traditional Flaw</h4>
                                <p className="text-sm text-muted-foreground m-0">{item.problem}</p>
                            </div>
                            <div className="border-t border-border pt-4">
                                <h4 className="font-semibold text-green-400">The TeamStation AI Solution</h4>
                                <p className="text-sm text-foreground m-0">{item.solution.replace('Axiom Cortex™', '')}
                                  <Tooltip text="Our proprietary Cognitive AI engine for talent evaluation."><Link href="/research/axiom-cortex-scientific-report" className="text-primary hover:underline font-semibold">Axiom Cortex™</Link></Tooltip>
                                </p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {item.proof}</p>
                            <Link href={item.href} className="mt-4 flex items-center text-sm font-semibold text-primary">
                                {item.linkLabel} <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>

         <div className="prose dark:prose-invert max-w-none text-center">
            <h2 className="mt-12">The Verdict: From Guesswork to Science</h2>
            <p>This methodology transforms hiring from a game of chance into a science. It's how you build an elite team based on proven capability, not just credentials on a PDF. You get a detailed, auditable report with a cognitive fingerprint and an evidence locker, so you can make a data-driven decision, not a gut-feel guess.</p>
        </div>

        <div className="text-center rounded-lg bg-primary/10 p-8 mt-12">
            <h2 className="text-2xl font-bold">Ready to De-Risk Your Hiring?</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
                Let's discuss how our scientific evaluation process can find you the right talent, faster and more accurately than any other method.
            </p>
            <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">
                Book a Hiring Strategy Call
            </Link>
        </div>
    </main>
  );
}

    