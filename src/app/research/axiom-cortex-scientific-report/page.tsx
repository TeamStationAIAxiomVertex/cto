
import { BrainCircuit, FileText, ShieldCheck, Scale, BookOpen, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The AxiomCortex™ Scientific Framework | AI Talent Evaluation',
  description: 'The definitive scientific and mathematical framework for the AxiomCortex™ engine, detailing the proprietary algorithms and psychometric models used for bias-free technical talent evaluation.',
};

export default function AxiomCortexReportPage() {
  const scientificPillars = [
    {
        icon: <BrainCircuit className="h-6 w-6 text-primary" />,
        title: '1. Neuro-Psychometric Profiling',
        description: 'Utilizes a Latent Trait Inference Engine (LTIE) to quantify traits like Architectural Instinct and Problem-Solving Agility from conversational data.'
    },
    {
        icon: <FileText className="h-6 w-6 text-primary" />,
        title: '2. Advanced NLP & Semantic Analysis',
        description: 'Employs a suite of NLP techniques to analyze language patterns, semantic meaning, and conceptual understanding, independent of jargon.'
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-primary" />,
        title: '3. Cortex Calibration Layer (Bias Mitigation)',
        description: 'Applies algorithmic adjustments to raw scores to ensure the evaluation of pure technical and logical signals, neutralizing linguistic and cultural "noise."'
    },
    {
        icon: <Scale className="h-6 w-6 text-primary" />,
        title: '4. Behavioral Deconstruction (Beyond STAR)',
        description: 'Deconstructs answers into core conceptual components and validated behavioral markers, avoiding rigid frameworks to eliminate presentation bias.'
    }
];

  return (
    <main className="container max-w-4xl py-12">
       <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/research/hub" className="hover:text-foreground">Research</Link> / <span>AxiomCortex™ Framework</span>
      </div>
      <header className="my-8 text-center">
        <h1 className="text-4xl font-extrabold md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">The AxiomCortex™ Scientific Framework</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          This is the definitive public documentation of the proprietary Cognitive AI engine that powers TeamStation AI's talent evaluation. It outlines the core scientific pillars, mathematical models, and bias mitigation strategies that allow us to de-risk hiring.
        </p>
      </header>

       <section className="my-16">
        <h2 className="text-3xl font-bold text-center">Core Scientific Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
            {scientificPillars.map(pillar => (
                <div className="flex items-start gap-4 rounded-lg border bg-card p-6" key={pillar.title}>
                    {pillar.icon}
                    <div>
                        <h3 className="font-semibold text-foreground">{pillar.title}</h3>
                        <p className="text-sm text-muted-foreground m-0">{pillar.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      <section className="prose dark:prose-invert mx-auto my-16">
        <h2 className="text-center">Methodology: Self-Governing NLP & Phasic Micro-Chunking</h2>
         <p>The operational backbone of Axiom Cortex is its novel approach to executing complex NLP tasks: a <strong>Self-Governing, Self-Learning Phasic Micro-Chunking NLP-based Prompt Engineering</strong> technique. This methodology is designed for maximum accuracy, token efficiency, and minimal external dependencies, allowing the LLM itself to perform the core analytical heavy lifting.</p>
        
        <h3 className='text-center'>Key Algorithms &amp; Formulas</h3>

        <h4>Latent Trait Inference Score (LTIS)</h4>
        <p>The LTIS for a specific trait (e.g., Architectural Instinct) is calculated as a weighted sum of Behaviorally Anchored Rating Scale (BARS) scores from relevant interview questions, adjusted by the Cortex Calibration Layer.</p>
        <pre>{`LTIS_trait = Σ(w_q * BARS_q) * λ_ccl`}</pre>
        <ul>
            <li><code>w_q</code>: Weight of question <code>q</code> for the given trait.</li>
            <li><code>BARS_q</code>: The raw BARS score for question <code>q</code> (1-5 scale).</li>
            <li><code>λ_ccl</code>: The Cortex Calibration Layer coefficient, a factor derived from linguistic markers to mitigate bias (typically 0.9-1.1).</li>
        </ul>

        <h4>Conceptual Fidelity Score (CFS)</h4>
        <p>Measures the candidate's understanding of a concept, independent of their use of specific jargon.</p>
        <pre>{`CFS = S_sem * (1 - P_jargon)`}</pre>
        <ul>
            <li><code>S_sem</code>: Semantic similarity score between the candidate's explanation and the ideal conceptual blueprint.</li>
            <li><code>P_jargon</code>: A penalty factor for over-reliance on buzzwords without demonstrating underlying understanding.</li>
        </ul>
        
        <h4>Metacognitive Conviction Index (MCI)</h4>
        <p>Quantifies the calibration between a candidate's confidence and their demonstrated accuracy. A key indicator of self-awareness and coachability.</p>
        <pre>{`MCI = 1 - |(C_self - A_norm) / (C_self + A_norm)|`}</pre>
        <ul>
            <li><code>C_self</code>: Self-assessed confidence score.</li>
            <li><code>A_norm</code>: Normalized accuracy score from technical questions. An MCI close to 1 indicates high self-awareness.</li>
        </ul>
      </section>

      <div className="prose dark:prose-invert mx-auto max-w-none">
        <div className="text-center rounded-lg bg-primary/10 p-6 my-8">
            <h2 className="text-2xl font-bold">Read the Full Peer-Reviewed Paper</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
                For a deeper academic analysis, access the complete research paper on the Social Science Research Network (SSRN).
            </p>
            <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4533476" target="_blank" rel="noopener noreferrer" className="cta-button mt-4">
                <BookOpen className="mr-2 h-4 w-4" />
                View on SSRN
            </a>
        </div>
      </div>

       <div className="text-center mt-8">
            <Link href="/technical-interview-evaluation" className="font-semibold text-primary hover:underline">See This Framework Applied in a Sample Report →</Link>
        </div>

    </main>
  );
}
