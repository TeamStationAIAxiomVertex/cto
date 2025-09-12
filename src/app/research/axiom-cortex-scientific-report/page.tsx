

import { BrainCircuit, FileText, ShieldCheck, Scale, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function AxiomCortexReportPage() {
  const scientificPillars = [
    {
        icon: <BrainCircuit className="h-6 w-6 text-primary" />,
        title: 'Neuro-Psychometric Profiling',
        description: 'Utilizes a Latent Trait Inference Engine (LTIE) to quantify traits like Architectural Instinct and Problem-Solving Agility.'
    },
    {
        icon: <FileText className="h-6 w-6 text-primary" />,
        title: 'Advanced NLP Integration',
        description: 'Employs a suite of NLP techniques to analyze language patterns, thought organization, and conceptual understanding.'
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-primary" />,
        title: 'Bias Mitigation (Cortex Calibration Layer)',
        description: 'Applies algorithmic adjustments to raw scores to ensure the evaluation of pure technical and logical signals, not linguistic "noise."'
    },
    {
        icon: <Scale className="h-6 w-6 text-primary" />,
        title: 'Behavioral Answer Deconstruction',
        description: 'Deconstructs answers into core conceptual components, avoiding rigid frameworks like STAR to eliminate bias.'
    }
];

  return (
    <main className="container max-w-4xl py-12">
       <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/research" className="hover:text-foreground">Research</Link> / <span>AxiomCortex™ Report</span>
      </div>
      <header className="my-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">AxiomCortex™: Scientific R&D Report</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          A deep dive into the proprietary Cognitive AI engine that powers TeamStation AI's talent evaluation, outlining its core scientific pillars and bias mitigation strategies.
        </p>
      </header>

      <div className="prose dark:prose-invert mx-auto max-w-none">
        <div className="text-center rounded-lg bg-primary/10 p-6 my-8">
            <h2 className="text-2xl font-bold">Read the Full Paper</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
                Access the complete research paper on the Social Science Research Network (SSRN).
            </p>
            <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5433476" target="_blank" rel="noopener noreferrer" className="cta-button mt-4">
                <BookOpen className="mr-2 h-4 w-4" />
                View on SSRN
            </a>
        </div>
      </div>

      <div className="my-16">
        <h2 className="text-3xl font-bold text-center">Key Scientific Pillars</h2>
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
      </div>

       <div className="prose dark:prose-invert mx-auto my-16 text-center">
        <h2>Methodology</h2>
         <p>The operational backbone of Axiom Cortex is its novel approach to executing complex NLP tasks: a <strong>Self-Governing, Self-Learning Phasic Micro-Chunking NLP-based Prompt Engineering</strong> technique. This methodology is designed for maximum accuracy, token efficiency, and minimal external dependencies, allowing the LLM itself to perform the core analytical heavy lifting.</p>
        <div className="mt-8">
            <Link href="/technical-interview-evaluation" className="cta-button">See the Full Evaluation Process</Link>
        </div>
       </div>

    </main>
  );
}

    
