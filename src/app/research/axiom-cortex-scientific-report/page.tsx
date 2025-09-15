
import { BrainCircuit, FileText, ShieldCheck, Scale, BookOpen, CheckCircle, FunctionSquare, Pilcrow, Sigma, GitBranch } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The AxiomCortex™ Scientific Framework | AI Talent Evaluation',
  description: 'The definitive scientific and mathematical framework for the AxiomCortex™ 3.0.0 engine, detailing the proprietary algorithms and psychometric models used for bias-free technical talent evaluation.',
  keywords: 'axiomcortex, ai talent evaluation, scientific framework, bias-free hiring, technical talent evaluation, psychometric models',
};

export default function AxiomCortexReportPage() {
  const pillars = [
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
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/research/hub" className="hover:text-foreground">Research</Link> / <span>AxiomCortex™ Framework 3.0.0</span>
      </div>
      <header className="my-8 text-center">
        <h1 className="text-4xl font-extrabold md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">The AxiomCortex™ Scientific Framework 3.0.0</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          This is the definitive public documentation of the proprietary Cognitive AI engine that powers TeamStation AI's talent evaluation. It outlines the core scientific pillars, the 44 mathematical models and algorithms, and the bias mitigation strategies that allow us to de-risk hiring.
        </p>
      </header>

       <section className="my-16">
        <h2 className="text-3xl font-bold text-center">Core Scientific Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
            {pillars.map(pillar => (
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

      <section className="prose dark:prose-invert mx-auto my-16 max-w-none">
        <h2 className="text-center">Methodology: Self-Governing NLP & Phasic Micro-Chunking</h2>
        <p>The operational backbone of Axiom Cortex is its novel approach to executing complex NLP tasks: a <strong>Self-Governing, Self-Learning Phasic Micro-Chunking NLP-based Prompt Engineering</strong> technique. This methodology is designed for maximum accuracy, token efficiency, and minimal external dependencies, allowing the LLM itself to perform the core analytical heavy lifting across 44 distinct algorithmic passes.</p>
        
        <h3 className='text-center'>Comprehensive Review of Core Functions, Formulas, and Algorithms</h3>

        <div className="space-y-8">
            <div>
                <h4 className="flex items-center gap-2"><FunctionSquare className="h-5 w-5 text-primary" />Function: Transcript Ingestion & Pre-processing</h4>
                <p className="text-sm">The initial phase where the raw video interview transcript is cleaned, speaker-diarized, and segmented into question-answer pairs.</p>
                <ul>
                    <li><strong>Algorithm 1: Utterance Normalization:</strong> Removes filler words, and standardizes punctuation.</li>
                    <li><strong>Algorithm 2: Speaker Diarization:</strong> Correctly attributes text to 'Interviewer' or 'Candidate'.</li>
                    <li><strong>Algorithm 3: Q/A Segmentation:</strong> Identifies and isolates discrete question and answer blocks for individual analysis.</li>
                </ul>
            </div>

            <div>
                <h4 className="flex items-center gap-2"><Pilcrow className="h-5 w-5 text-primary" />Protocol: Phasic Micro-Chunking Analysis</h4>
                <p className="text-sm">For each Q/A pair, the system performs a multi-pass analysis. This involves breaking the answer down into "micro-chunks" (individual sentences or clauses) and analyzing them for specific signals.</p>
                <ul>
                    <li><strong>Algorithm 4: Key Concept Extraction:</strong> Uses NER (Named Entity Recognition) to identify technical terms and concepts.</li>
                    <li><strong>Algorithm 5: Argument Structure Mapping:</strong> Maps the logical flow of the candidate's explanation.</li>
                    <li><strong>Algorithm 6: Evidence-to-Blueprint Comparison:</strong> Compares extracted concepts against a pre-defined "ideal answer blueprint" for the question.</li>
                </ul>
            </div>

             <div>
                <h4 className="flex items-center gap-2"><Sigma className="h-5 w-5 text-primary" />Formulas: BARS (Behaviorally Anchored Rating Scales) Scoring</h4>
                <p className="text-sm">A suite of algorithms (7-19) scores the answer chunk against multiple behavioral axioms. Each B-Axiom has its own scoring function.</p>
                <ul>
                    <li><strong>Algorithm 7 (B_P - Procedural Knowledge):</strong> Scores the correctness and completeness of the process described by the candidate.</li>
                    <li><strong>Algorithm 8 (B_M - Mental Model):</strong> Scores the underlying logic and conceptual soundness of the explanation.</li>
                    <li><strong>Algorithm 9 (B_A - Accuracy):</strong> Scores the factual correctness of the technical statements.</li>
                    <li><strong>Algorithm 10 (B_C - Clarity):</strong> Scores the clarity and conciseness of the explanation, after calibration for linguistic factors.</li>
                     <li><strong>Algorithm 11 (B_L - Cognitive Load):</strong> Measures linguistic markers of cognitive strain (hesitations, restarts) to assess difficulty.</li>
                     <li><strong>Formula: B-Axiom Score (BAS_q)</strong> for a given question `q`:</li>
                    <pre className="text-xs">{`BAS_q = (w_p*B_P) + (w_m*B_M) + (w_a*B_A) + (w_c*B_C) - (w_l*B_L)`}</pre>
                    <li><small>Where `w` denotes the weight for each axiom.</small></li>
                </ul>
            </div>

            <div>
                <h4 className="flex items-center gap-2"><GitBranch className="h-5 w-5 text-primary" />Protocol: Latent Trait Inference Engine (LTIE)</h4>
                <p className="text-sm">This is the core psychometric engine (Algorithms 20-35) that synthesizes scores from multiple questions to infer the four key latent traits.</p>
                <ul>
                    <li><strong>Algorithm 20-24 (Architectural Instinct):</strong> Aggregates scores from systems design questions, focusing on B_M (Mental Model).</li>
                    <li><strong>Algorithm 25-29 (Problem-Solving Agility):</strong> Aggregates scores from novel or unexpected questions, focusing on the ability to adapt.</li>
                    <li><strong>Algorithm 30-35 (Learning Orientation & Collaborative Mindset):</strong> Analyzes behavioral questions and "authenticityIncidents" across the entire transcript.</li>
                    <li><strong>Formula: Latent Trait Inference Score (LTIS_trait)</strong></li>
                    <pre className="text-xs">{`LTIS_trait = Σ(w_q * BAS_q) * λ_ccl`}</pre>
                    <li><small>Where `w_q` is the relevance weight of question `q` for the trait, `BAS_q` is the overall B-Axiom score for that question, and `λ_ccl` is the Cortex Calibration Layer coefficient.</small></li>
                </ul>
            </div>

            <div>
                <h4 className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" />Protocol: Cortex Calibration Layer (Bias Mitigation)</h4>
                <p className="text-sm">A set of algorithms (36-41) designed to identify and neutralize sources of bias in the evaluation.</p>
                <ul>
                    <li><strong>Algorithm 36: Linguistic Fluency Normalization:</strong> Identifies non-native speaker patterns (e.g., grammatical errors, phonetic approximations) and instructs the scoring model to focus on the conceptual content, not the delivery. Generates the `λ_ccl` coefficient.</li>
                    <li><strong>Algorithm 37: Authenticity Incident Detection:</strong> Flags instances of intellectual honesty (e.g., "I don't know," "I'm not the best at that"). This positively weights the Learning Orientation score.</li>
                    <li><strong>Algorithm 38: Jargon vs. First-Principles Detection:</strong> Determines if a candidate is using buzzwords without understanding (negative signal) or explaining concepts from fundamentals (positive signal).</li>
                    <li><strong>Formula: Conceptual Fidelity Score (CFS)</strong></li>
                    <pre className="text-xs">{`CFS = S_sem * (1 - P_jargon)`}</pre>
                     <li><small>Where `S_sem` is semantic similarity and `P_jargon` is a penalty for over-reliance on jargon.</small></li>
                </ul>
            </div>
             <div>
                <h4 className="flex items-center gap-2"><Sigma className="h-5 w-5 text-primary" />Formulas: Final Synthesis & Risk Analysis</h4>
                <p className="text-sm">The final algorithms (42-44) synthesize all data into the executive summary and risk mitigation plan.</p>
                <ul>
                    <li><strong>Algorithm 42: Metacognitive Conviction Index (MCI):</strong> Correlates a candidate's self-assessed confidence with their measured accuracy to gauge self-awareness.</li>
                     <pre className="text-xs">{`MCI = 1 - |(C_self - A_norm) / (C_self + A_norm)|`}</pre>
                    <li><small>Where `C_self` is self-assessed confidence and `A_norm` is normalized accuracy. An MCI close to 1 is a strong positive signal.</small></li>
                    <li><strong>Algorithm 43: Risk Triangulation:</strong> Identifies areas where a candidate's scores fall below the ideal profile for a specific trait and cross-references this with admissions of weakness (authenticityIncidents) to generate a specific, evidence-backed risk factor.</li>
                     <li><strong>Algorithm 44: Final Score Aggregation:</strong> Computes the final weighted average score based on all latent traits, providing the top-line "Strong Hire / Hire / No Hire" recommendation.</li>
                </ul>
            </div>
        </div>
      </section>

      <div className="prose dark:prose-invert mx-auto max-w-none">
        <div className="text-center rounded-lg bg-primary/10 p-6 my-8">
            <h2 className="text-2xl font-bold">Read the Full Peer-Reviewed Paper</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
                For a deeper academic analysis of the foundational principles, access the complete research paper on the Social Science Research Network (SSRN).
            </p>
            <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5433397" target="_blank" rel="noopener noreferrer" className="cta-button mt-4">
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
