
import { BrainCircuit, FileCheck, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function TalentEvaluationPage() {
    const features = [
        {
            icon: <BrainCircuit className="h-8 w-8 text-primary" />,
            title: 'Cognitive Fingerprint',
            description: 'We map each candidate\'s latent cognitive traits—like Architectural Instinct and Problem-Solving Agility—against the ideal profile for your role.',
        },
        {
            icon: <FileCheck className="h-8 w-8 text-primary" />,
            title: 'Evidence Locker',
            description: 'You get a detailed analysis of the candidate\'s responses to key technical questions, including verbatim transcripts and a comparison against an ideal answer blueprint.',
        },
        {
            icon: <ShieldCheck className="h-8 w-8 text-primary" />,
            title: 'Risk & Mitigation Plan',
            description: 'We identify potential weaknesses or gaps in a candidate\'s knowledge and provide a concrete, actionable plan to mitigate those risks during onboarding.',
        },
    ];
  return (
    <main className="container max-w-6xl">
      <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/process" className="hover:text-foreground">Services</Link> / <span>Talent Evaluations</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">The Axiom Cortex™ Talent Evaluation</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Go beyond resumes and traditional interviews. Our proprietary Axiom Cortex™ engine provides a deep, scientific, and unbiased evaluation of a candidate's true engineering capabilities.
        </p>
      </header>

      <div className="grid md:grid-cols-3 my-16 gap-8">
          {features.map((item) => (
             <div key={item.title} className="rounded-lg border bg-card p-8">
                {item.icon}
                <h2 className="mt-4 text-xl font-bold">{item.title}</h2>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
            </div>
          ))}
      </div>
      
       <div className="prose prose-lg dark:prose-invert mx-auto my-16">
        <h2 className="text-center">How It Works</h2>
        <ol>
            <li><strong>Standardized Interview:</strong> Every candidate goes through a structured technical interview designed to test for specific cognitive traits and technical competencies.</li>
            <li><strong>AI-Powered Analysis:</strong> Our Axiom Cortex™ engine analyzes the interview recording, using 44 different psychometric and NLP signals to score the candidate's performance.</li>
            <li><strong>Bias Mitigation:</strong> A language-fairness calibration layer ensures that non-native English speakers are not penalized, focusing on the substance of their answers.</li>
            <li><strong>Comprehensive Report:</strong> You receive a detailed report that gives you a 360-degree view of the candidate's strengths, weaknesses, and potential.</li>
        </ol>
      </div>

       <div className="text-center rounded-lg bg-primary/10 p-8">
            <h2 className="text-2xl font-bold">See a Real Evaluation in Action</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
                Explore a real, anonymized evaluation report to see the depth and clarity our system provides.
            </p>
            <Link href="/research/technical-talent-evaluation-system" className="cta-button mt-6">
                View Sample Report
            </Link>
        </div>

    </main>
  );
}
