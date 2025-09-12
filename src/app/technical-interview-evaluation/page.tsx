import Link from 'next/link';
import { BrainCircuit, FileCheck, ShieldCheck } from 'lucide-react';

export default function TalentEvaluationPage() {
    const features = [
        {
            icon: <BrainCircuit size={24} className="text-blue-400" />,
            title: 'Cognitive Fingerprint',
            description: 'We map each candidate\'s latent cognitive traits—like Architectural Instinct and Problem-Solving Agility—against the ideal profile for your role.',
        },
        {
            icon: <FileCheck size={24} className="text-green-400" />,
            title: 'Evidence Locker',
            description: 'You get a detailed analysis of the candidate\'s responses to key technical questions, including verbatim transcripts and a comparison against an ideal answer blueprint.',
        },
        {
            icon: <ShieldCheck size={24} className="text-amber-400" />,
            title: 'Risk & Mitigation Plan',
            description: 'We identify potential weaknesses or gaps in a candidate\'s knowledge and provide a concrete, actionable plan to mitigate those risks during onboarding.',
        },
    ];
  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / Services / Talent Evaluations
      </div>
      <h1 className="h1">The Axiom Cortex™ Talent Evaluation</h1>
      <p className="lead">
        Go beyond resumes and traditional interviews. Our proprietary Axiom Cortex™ engine provides a deep, scientific, and unbiased evaluation of a candidate's true engineering capabilities.
      </p>

      <div className="section my-12">
        <h2 className="h2 mt-0">What's in a TeamStation AI Evaluation Report?</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {features.map((item) => (
             <div className="card" key={item.title}>
                <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="h3 m-0 text-lg">{item.title}</h3>
                </div>
                <p className="text-sm mt-2 text-mute">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
       <div className="prose mx-auto my-12">
        <h2 className="h2 text-center">How It Works</h2>
        <ol>
            <li><strong>Standardized Interview:</strong> Every candidate goes through a structured technical interview designed to test for specific cognitive traits and technical competencies.</li>
            <li><strong>AI-Powered Analysis:</strong> Our Axiom Cortex™ engine analyzes the interview recording, using 44 different psychometric and NLP signals to score the candidate's performance.</li>
            <li><strong>Bias Mitigation:</strong> A language-fairness calibration layer ensures that non-native English speakers are not penalized, focusing on the substance of their answers.</li>
            <li><strong>Comprehensive Report:</strong> You receive a detailed report that gives you a 360-degree view of the candidate's strengths, weaknesses, and potential.</li>
        </ol>
      </div>

       <div className="my-8 text-center">
            <h2 className="h2">See a Real Evaluation in Action</h2>
            <p className="lead" style={{marginBottom: '24px'}}>
                Explore a real, anonymized evaluation report to see the depth and clarity our system provides.
            </p>
            <Link href="/research/technical-talent-evaluation-system" className="cta">
                View Sample Report
            </Link>
        </div>

    </main>
  );
}
