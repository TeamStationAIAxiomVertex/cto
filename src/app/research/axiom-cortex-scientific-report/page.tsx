
'use client';

import { AccordionItem } from '@/components/Accordion';
import { BrainCircuit, ShieldCheck, FileText, Scale } from 'lucide-react';

const scientificPillars = [
    {
        icon: <BrainCircuit className="icon" />,
        title: 'Neuro-Psychometric Profiling',
        description: 'Utilizes a Latent Trait Inference Engine (LTIE) to quantify and benchmark critical traits like Architectural Instinct (AI), Problem-Solving Agility (PSA), Learning Orientation (LO), and Collaborative Mindset (CM).'
    },
    {
        icon: <FileText className="icon" />,
        title: 'Advanced NLP Integration',
        description: 'Employs a comprehensive suite of Natural Language Processing techniques to analyze language patterns, thought organization, and conceptual understanding, prioritizing meaning over exact terminology.'
    },
    {
        icon: <ShieldCheck className="icon" />,
        title: 'Bias Mitigation (Cortex Calibration Layer)',
        description: 'A system-critical directive that applies algorithmic adjustments to raw scores based on detected L1 interference patterns, ensuring the evaluation of pure technical and logical signals, not linguistic "noise."'
    },
    {
        icon: <Scale className="icon" />,
        title: 'Behavioral Answer Deconstruction',
        description: 'For behavioral questions, answers are deconstructed into core conceptual components, avoiding rigid frameworks like STAR to respect cross-cultural communication theory and eliminate bias.'
    }
];

const faqs = [
    {
        title: 'What makes TeamStation AI and the Axiom Cortex different from other talent assessment tools?',
        content: 'TeamStation AI offers an end-to-end intelligent platform for nearshore IT operations. Axiom Cortex, as a core component, differentiates itself through its deep neuro-psychometric and NLP analysis, rigorous bias mitigation via the Cortex Calibration Layer, and its unique self-governing, phased micro-chunking methodology. It focuses on underlying cognitive and technical aptitude, not just linguistic fluency.'
    },
    {
        title: 'How does TeamStation AI ensure fairness for L2 ESL candidates?',
        content: 'Fairness is paramount. The Cortex Calibration Layer, combined with the emphasis on Conceptual Fidelity and detailed NLP analysis, ensures that linguistic variations and communication styles influenced by L1 backgrounds are understood and calibrated, not penalized. We evaluate the substance of the technical argument, not linguistic perfection.'
    },
    {
        title: 'What specific NLP techniques are employed by Axiom Cortex?',
        content: 'Axiom Cortex employs a broad spectrum of NLP techniques, including analysis of phonology, morphology, syntax (chunking, parsing), semantic processing, lexical semantics, and discourse analysis, all integrated via advanced prompt engineering directly within the LLM.'
    },
    {
        title: 'What is "Conceptual Fidelity" in this context?',
        content: 'Conceptual Fidelity is our core principle: evaluating whether a candidate understands the concept behind a technical problem, even if they express it using different words or analogies. We measure the alignment of their thinking, not just their vocabulary.'
    }
];

const appendices = [
    {
        title: 'Appendix A: Methods & Metrics',
        content: (
            <div className="prose">
                <p>This appendix specifies constructs, scoring rules, calibration procedures, and statistical methods used by Axiom Cortex. It formalizes phasic micro-analysis, Conceptual Fidelity scoring, the Cortex Calibration Layer, latent-trait computation, and the evaluation of reliability, validity, calibration, and fairness.</p>
                <h4>Primary Outputs (B-Axioms)</h4>
                <ul>
                    <li>B_A (Accuracy)</li>
                    <li>B_M (Mental Model)</li>
                    <li>B_P (Procedural Knowledge)</li>
                    <li>B_C (Clarity)</li>
                    <li>B_L (Cognitive Load)</li>
                </ul>
                <h4>Latent Traits</h4>
                <ul>
                    <li>AI (Analytical Intelligence)</li>
                    <li>PSA (Problem-Solving & Architecture)</li>
                    <li>CM (Collaboration & Modularity)</li>
                    <li>LO (Learning Orientation)</li>
                </ul>
            </div>
        )
    },
    {
        title: 'Appendix B: Compliance Matrix (NIST AI RMF, ISO/IEC 42001, etc.)',
        content: (
             <div className="prose">
                <p>This appendix maps TeamStation’s talent-evaluation system to widely used AI governance frameworks and regulations, including NIST AI RMF, ISO/IEC 42001, NYC Local Law 144, and the EU AI Act. It provides control objectives, implemented controls, and evidence locations.</p>
            </div>
        )
    },
    {
        title: 'Appendix C: Limitations and Misuse Scenarios',
        content: (
            <div className="prose">
                <p>Details known limitations, external validity bounds, sensitivity to input quality, and potential misinterpretations. It explicitly states non-goals, such as inferring protected attributes. Also covers misuse scenarios like plagiarism or impersonation and the controls in place to mitigate them.</p>
            </div>
        )
    },
        {
        title: 'Appendix D: Threat Model and Red-Teaming',
        content: (
            <div className="prose">
                <p>Outlines the threat model, including adversary classes and attack surfaces. It details specific threats (e.g., prompt-injection, voice cloning) and their mitigations. The red-teaming program is also described.</p>
            </div>
        )
    },
    {
        title: 'Appendix E-Q: Additional Governance',
        content: (
            <div className="prose">
                <p>These appendices cover a comprehensive range of governance topics:</p>
                <ul>
                    <li>Monitoring, Drift, and Recertification Plan</li>
                    <li>Model Card (Evaluator)</li>
                    <li>Dataset Documentation</li>
                    <li>Candidate Experience and Recourse</li>
                    <li>Versioning and Change Log</li>
                    <li>Benchmarking Protocol</li>
                    <li>Security Architecture</li>
                    <li>Data Retention, Deletion, and Residency</li>
                    <li>Reviewer Training and QA SOPs</li>
                    <li>And more...</li>
                </ul>
            </div>
        )
    }
]

export default function AxiomCortexReportPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/research">Research</a> / AxiomCortex™ R&D Report
      </div>
      <header className="my-8 text-center">
        <h1 className="h1">AxiomCortex™: Scientific R&D Report</h1>
        <p className="lead max-w-3xl mx-auto">
          A deep dive into the proprietary Cognitive AI engine that powers TeamStation AI's talent evaluation. This report outlines the system's core scientific pillars, its novel methodology, and the robust bias mitigation strategies that ensure unparalleled accuracy and fairness.
        </p>
      </header>

      <div className="section">
        <h2 className="h2 mt-0 text-center">2. The Axiom Cortex: Key Scientific Pillars</h2>
        <div className="grid grid-2 mt-6 gap-8">
            {scientificPillars.map(pillar => (
                <div className="icon-card" key={pillar.title}>
                    {pillar.icon}
                    <div>
                        <h3 className="h3 mt-0">{pillar.title}</h3>
                        <p className="text-sm text-slate-400 m-0">{pillar.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

       <div className="my-12">
        <h2 className="h2 text-center">3. The Axiom Cortex Methodology</h2>
         <div className="prose mx-auto text-center mt-4">
            <p>The operational backbone of Axiom Cortex is its novel approach to executing complex NLP tasks: a <strong>Self-Governing, Self-Learning Phasic Micro-Chunking NLP-based Prompt Engineering</strong> technique. This methodology is designed for maximum accuracy, token efficiency, and minimal external dependencies, allowing the LLM itself to perform the core analytical heavy lifting.</p>
         </div>
      </div>

       <div className="my-12">
        <h2 className="h2 text-center">5. Frequently Asked Questions (FAQs)</h2>
        <div className="grid grid-2 mt-6 gap-6 max-w-4xl mx-auto">
            {faqs.map(faq => (
                <div className="card" key={faq.title}>
                    <h3 className="h3 mt-0">{faq.title}</h3>
                    <p className="text-sm text-slate-400 m-0">{faq.content}</p>
                </div>
            ))}
        </div>
      </div>

      <div className="my-12">
            <h2 className="h2 text-center">Appendices: The Detailed Science</h2>
             <p className='lead text-center mx-auto max-w-3xl' style={{fontSize: '1rem'}}>
                The following sections provide a detailed breakdown of the methodologies, metrics, compliance frameworks, and governance protocols that underpin the Axiom Cortex engine.
            </p>
            <div className="mt-6 max-w-3xl mx-auto">
                {appendices.map(item => (
                     <AccordionItem title={item.title} key={item.title}>
                        {item.content}
                    </AccordionItem>
                ))}
            </div>
        </div>
    </main>
  );
}
