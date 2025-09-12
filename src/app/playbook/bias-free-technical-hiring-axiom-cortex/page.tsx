import Tooltip from '@/components/Tooltip';
import { BrainCircuit, Scale, ShieldCheck } from 'lucide-react';

export default function BiasFreeHiringPage() {
  const principles = [
    {
      icon: <BrainCircuit size={24} className="text-blue-400" />,
      title: 'Cognitive Science over Credentials',
      description:
        'Axiom Cortex™ analyzes 44 distinct psychometric and NLP signals to evaluate problem-solving, architectural instinct, and learning orientation—traits that resumes cannot capture.',
    },
    {
      icon: <ShieldCheck size={24} className="text-green-400" />,
      title: 'Language Fairness Calibration',
      description:
        'Our system is designed to mitigate bias against non-native English speakers. It focuses on the logical and technical substance of an answer, not just linguistic fluency.',
    },
    {
      icon: <Scale size={24} className="text-amber-400" />,
      title: 'Structured, Auditable Evidence',
      description:
        'Every evaluation is based on a structured interview and work-sample tests. The entire process is recorded and analyzed, creating an auditable evidence locker for every candidate.',
    },
  ];

  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/playbook">CTO Playbook</a> / Bias-Free Technical Hiring
      </div>
      <h1 className="h1">Beyond Resumes: A Playbook for Bias-Free Technical Hiring</h1>
      <p className="lead">
        Traditional hiring is broken. It’s slow, biased, and often fails to identify the best talent. This playbook outlines how to use the Axiom Cortex™ engine to build a fairer, faster, and more accurate hiring process.
      </p>

      <div className="prose my-8">
        <h2 className="h2">The Problem: Why Resumes and Unstructured Interviews Fail</h2>
        <p>
          Relying on resumes is like navigating with an old, inaccurate map. They tell you where a candidate has been, but not how they think, how they solve problems, or how quickly they learn. Unstructured interviews are equally flawed, often devolving into conversations that favor charismatic speakers over deep thinkers, introducing unconscious bias.
        </p>
        <p>
          The result? You miss out on exceptional talent—especially from non-traditional backgrounds or those who are not native English speakers. You spend countless hours on a process that is not only inefficient but fundamentally unfair.
        </p>
      </div>

      <div className="section">
        <h2 className="h2 mt-0">The Solution: Three Pillars of Science-Based Hiring</h2>
         <div className="grid grid-3 mt-4">
          {principles.map((item) => (
             <div className="card" key={item.title}>
                <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="h3 m-0">{item.title}</h3>
                </div>
                <p className="text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose my-8">
        <h2 className="h2">Putting It Into Practice: The Axiom Cortex™ Workflow</h2>
        <p>
          Our process standardizes evaluation to ensure every candidate is measured against the same objective criteria.
        </p>
        <ol>
            <li><strong>Role Definition:</strong> We work with you to define the ideal cognitive and technical profile for the role. This becomes the benchmark for evaluation.</li>
            <li><strong>Structured Interview:</strong> Candidates undergo a standardized technical interview designed to test specific competencies and cognitive traits.</li>
            <li><strong>AI-Powered Analysis:</strong> The{' '}<Tooltip text="Axiom Cortex™ is TeamStation AI's proprietary Cognitive AI engine that uses 44 psychometric and NLP signals to evaluate engineering candidates.">Axiom Cortex™</Tooltip> engine analyzes the interview, scoring the candidate against the ideal profile and identifying potential risks and strengths.</li>
            <li><strong>Evidence-Based Decision:</strong> You receive a detailed report, including a cognitive fingerprint and an evidence locker with transcribed highlights, allowing you to make a data-driven decision.</li>
        </ol>
        <p>
            This methodology transforms hiring from a game of chance into a science. It's how you build an elite team, based on proven capability, not credentials.
        </p>
      </div>

      <div className="section my-8 text-center">
          <h2 className="h2 mt-0">Ready to Build a Fairer, More Effective Hiring Engine?</h2>
          <p className="lead" style={{marginBottom: '24px'}}>Stop guessing and start making data-driven decisions about your most important asset: your talent.</p>
          <a href="/research/axiom-cortex-scientific-report" className="cta">
            Read the Axiom Cortex™ Report
          </a>
      </div>
    </main>
  );
}
