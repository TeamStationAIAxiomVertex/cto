import { BrainCircuit, FileText, ShieldCheck, Scale } from 'lucide-react';
import Link from 'next/link';

export default function AxiomCortexReportPage() {
  const scientificPillars = [
    {
        icon: <BrainCircuit className="icon" />,
        title: 'Neuro-Psychometric Profiling',
        description: 'Utilizes a Latent Trait Inference Engine (LTIE) to quantify traits like Architectural Instinct and Problem-Solving Agility.'
    },
    {
        icon: <FileText className="icon" />,
        title: 'Advanced NLP Integration',
        description: 'Employs a suite of NLP techniques to analyze language patterns, thought organization, and conceptual understanding.'
    },
    {
        icon: <ShieldCheck className="icon" />,
        title: 'Bias Mitigation (Cortex Calibration Layer)',
        description: 'Applies algorithmic adjustments to raw scores to ensure the evaluation of pure technical and logical signals, not linguistic "noise."'
    },
    {
        icon: <Scale className="icon" />,
        title: 'Behavioral Answer Deconstruction',
        description: 'Deconstructs answers into core conceptual components, avoiding rigid frameworks like STAR to eliminate bias.'
    }
];

  return (
    <div className="container mx-auto max-w-7xl px-6 py-12">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / <Link href="/research">Research</Link> / AxiomCortex™ Report
      </div>
      <header className="my-8 text-center">
        <h1 className="h1">AxiomCortex™: Scientific R&D Report</h1>
        <p className="lead max-w-3xl mx-auto">
          A deep dive into the proprietary Cognitive AI engine that powers TeamStation AI's talent evaluation.
        </p>
      </header>

      <div className="section">
        <h2 className="h2 mt-0 text-center">Key Scientific Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8 max-w-5xl mx-auto">
            {scientificPillars.map(pillar => (
                <div className="icon-card" key={pillar.title}>
                    {pillar.icon}
                    <div>
                        <h3 className="h3 mt-0 text-lg">{pillar.title}</h3>
                        <p className="text-sm text-mute m-0">{pillar.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

       <div className="prose mx-auto my-16 text-center">
        <h2 className="h2">Methodology</h2>
         <p>The operational backbone of Axiom Cortex is its novel approach to executing complex NLP tasks: a <strong>Self-Governing, Self-Learning Phasic Micro-Chunking NLP-based Prompt Engineering</strong> technique. This methodology is designed for maximum accuracy, token efficiency, and minimal external dependencies, allowing the LLM itself to perform the core analytical heavy lifting.</p>
       </div>

    </div>
  );
}
