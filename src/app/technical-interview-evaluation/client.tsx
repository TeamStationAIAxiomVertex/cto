
'use client';

import { BrainCircuit, CheckCircle, GitCommit, Search, Users } from 'lucide-react';
import Link from 'next/link';
import { AccordionItem } from "@/components/Accordion";
import { DisclosureDrawer } from '@/components/DisclosureDrawer';

const metrics = [
    { value: '8-year', label: 'proprietary corpus' },
    { value: '12,000+', label: 'technical interviews' },
    { value: 'Expert-in-the-loop', label: 'governance' },
    { value: '44', label: 'Formulas & Algorithms' },
]

const traits = [
    {
        icon: <BrainCircuit className="h-6 w-6 text-primary" />,
        title: 'Architectural instinct',
        description: 'Designs that scale and fail gracefully; solid mental models.'
    },
    {
        icon: <GitCommit className="h-6 w-6 text-primary" />,
        title: 'Problem-solving agility',
        description: 'Decomposes fuzzy problems into shippable steps and trade-offs.'
    },
    {
        icon: <Search className="h-6 w-6 text-primary" />,
        title: 'Learning orientation',
        description: 'Absorbs new APIs/tools fast; adapts under changing constraints.'
    },
    {
        icon: <Users className="h-6 w-6 text-primary" />,
        title: 'Collaborative mindset',
        description: 'Communicates rationale, invites feedback, and unblocks teammates.'
    }
];

const processSteps = [
    {
        step: 1,
        title: 'Role goals & competency blueprint',
        description: 'We align with your business objectives and define core and secondary competencies (plus nice-to-have skills) with explicit weights and ideal-answer examples.'
    },
    {
        step: 2,
        title: 'Recorded technical interview (~60 min)',
        description: 'A senior evaluator runs a structured, evidence-based interview to surface spoken reasoning, architectural choices, trade-offs, and concrete examples.'
    },
    {
        step: 3,
        title: 'Transcript & Evidence Locker',
        description: 'We transcribe the recording, apply human QA, restore punctuation/terminology, time-stamp it, and produce a time-coded transcript with highlights tied to each competency.'
    },
    {
        step: 4,
        title: 'Semantic chunking in RAG and staged/multi-step prompting',
        description: 'We analyze the candidate’s transcript using semantic chunking in RAG and staged/multi-step prompting that govern our proprietary LLM. Each chunk carries a competency tag, weight, difficulty, and blueprint ID—ensuring coverage, a difficulty ramp, and verification.'
    },
    {
        step: 5,
        title: 'Per-question scoring (five checks)',
        description: 'For every chunk we score technical correctness, sound mental model, practical method, communication clarity, and effort & fluency.'
    },
    {
        step: 6,
        title: 'Ideal-answer alignment & language fairness',
        description: 'We compare responses to the role’s ideal answers and apply language fairness calibration so L2/ESL phrasing isn’t penalized—we judge the shape of thinking.'
    },
    {
        step: 7,
        title: 'Expert review & decision package',
        description: 'Human experts inspect integrity flags (including possible AI/lookup patterns), override/rescore where needed, and assemble a shortlist with rationale, risks/opportunities, targeted follow-ups, and L1–L4 leveling.'
    },
    {
        step: 8,
        title: 'Offer & onboarding',
        description: 'When you’re ready to hire, we handle EOR & payroll, background checks, device provisioning/MDM/security, and onboarding—one accountable SLA.'
    }
]

const governancePillars = [
    {
        title: 'Semantic chunking in RAG',
        description: 'We split the interview into meaning-based chunks, retrieve the right blueprints/examples, and guide the model through a controlled, stepwise sequence—the LLM is governed, not free-running.'
    },
    {
        title: 'Per-question “five checks”',
        description: 'Every response is scored on five independent checks—correctness, mental model, method, clarity, effort/fluency—then rolled into a role-specific trait profile.'
    },
    {
        title: 'Language fairness calibration',
        description: 'Adjusts for L2/ESL discourse markers and phrasing so candidates are judged on conceptual fidelity—the quality of the idea—not accent or word choice.'
    },
    {
        title: 'AI/lookup integrity checks',
        description: 'Detectors surface near-verbatim phrasing from public sources and pattern shifts vs baseline; flagged segments go to expert review.'
    },
    {
        title: 'Expert-in-the-loop governance',
        description: 'Senior reviewers gate decisions, can override scores, and provide plain-English rationale; the pipeline is auditable end-to-end.'
    },
    {
        title: 'From scores to decisions',
        description: 'A Constrained Bayesian Decision Theory model optimizes for expected utility under your specific constraints, turning calibrated scores into a defensible hiring recommendation.'
    }
]

const faqs = [
    {
        title: 'How are the “five checks” computed?',
        content: 'Each check is computed by a specialized LLM prompt that scores the candidate response against the ideal answer blueprint for that specific question. The scores are then aggregated and weighted based on the competency model for the role.'
    },
    {
        title: 'What is language-fairness calibration?',
        content: 'It\'s an algorithmic adjustment we apply to raw scores to mitigate bias against non-native English speakers. The model is trained to focus on the logical and technical substance of an answer, not just linguistic fluency or accent. This is achieved through a suite of L2-aware mathematical methods, including proficiency-normalized scoring and cross-lingual semantic fidelity tests.'
    },
    {
        title: 'Can the model free-run or hallucinate?',
        content: 'No. Our system uses a staged/multi-step prompting architecture with semantic chunking in RAG. The LLM is constrained to specific tasks at each stage and its output is validated against a schema. It is a governed, deterministic system, not a free-running chatbot, with a zero-tolerance policy for hallucination.'
    },
    {
        title: 'Do questions change by role and level?',
        content: 'Yes. Every role (e.g., Frontend, Backend, DevOps) and level (L1 to L4) has a different competency blueprint with a unique set of weighted questions designed to test for the specific skills required.'
    },
    {
        title: 'Can you use our internal rubrics?',
        content: 'Yes. We can work with you to map your internal rubrics and competency models into our Axiom Cortex™ engine to create a custom evaluation blueprint for your organization.'
    },
    {
        title: 'What do we actually receive?',
        content: 'You receive a comprehensive decision package for each shortlisted candidate, including their cognitive fingerprint, a detailed evidence locker with transcripts, a risk/mitigation plan, and a clear L1-L4 leveling recommendation. See a sample report here.'
    }
]

const ctoAppendixContent = `
<div class="prose prose-sm dark:prose-invert max-w-none">
    <h4>Scoring & aggregation</h4>
    <ul>
        <li>Five-Checks Per-Chunk Scoring (correctness, mental model, method, clarity, effort/fluency)</li>
        <li>Weighted Composite Score (core/secondary competency weighting)</li>
        <li>Role/Level Normalization & Cut-Score Mapping (L1–L4)</li>
        <li>Semantic Alignment Scoring (embedding/cross-encoder similarity to blueprints)</li>
        <li>Retrieval Scoring in Semantic RAG (BM25, dense ANN; diversity via MMR)</li>
        <li>Trait Synthesis via Hierarchical/Bayesian Fusion (AI, PSA, LO, CM)</li>
        <li>Confidence Alignment Index (Metacognitive Conviction Index, MCI)</li>
    </ul>
    <h4>Drift & stability monitoring</h4>
    <ul>
        <li>Population Stability Index (PSI)</li>
        <li>Kolmogorov–Smirnov (KS) & Anderson–Darling</li>
        <li>KL / Jensen–Shannon Divergence for feature distributions</li>
        <li>Page–Hinkley / ADWIN for streaming drift</li>
    </ul>
     <h4>Item calibration & measurement</h4>
    <ul>
        <li>Item Response Theory (2-PL / 3-PL)</li>
        <li>Many-Facet Rasch Modeling (candidate × item × rater × modality)</li>
        <li>Role/Level Normalization & Cut-Score Mapping (L1–L4)</li>
        <li>Generalizability Theory (G-studies / D-studies)</li>
    </ul>
    <h4>Calibration & reliability</h4>
    <ul>
        <li>Probability Calibration (Platt scaling / Isotonic regression)</li>
        <li>Calibration Metrics (Brier Score, ECE/MCE/ACE)</li>
        <li>Internal Consistency (Cronbach’s α, McDonald’s ω)</li>
        <li>Split-Half / Spearman–Brown Reliability</li>
        <li>Test–Retest / Interclass Correlation (ICC)</li>
        <li>Inter-Rater Reliability (Cohen’s κ, Fleiss’ κ, Krippendorff’s α)</li>
    </ul>
     <h4>Fairness & bias control</h4>
    <ul>
        <li>Language-Fairness Normalization (residualization / domain adaptation)</li>
        <li>Group Fairness: Demographic Parity, Equal Opportunity, Equalized Odds</li>
        <li>Predictive Parity & Calibration-Within-Groups</li>
        <li>Differential Item Functioning (Mantel–Haenszel, Logistic-DIF)</li>
        <li>Counterfactual Fairness Probes (textual perturbations)</li>
        <li>Threshold Optimization under Fairness Constraints</li>
    </ul>
     <h4>Integrity & anomaly detection</h4>
    <ul>
        <li>Near-Verbatim Match & Source Overlap (n-gram/cosine, MinHash)</li>
        <li>Stylometric/Baseline Shift Detection (KL / Jensen–Shannon)</li>
        <li>Latency & Fluency Pattern Shifts (answer-tempo anomalies)</li>
        <li>CUSUM/Robust Z-Score Outliering for answer series</li>
        <li>Test–Retest / Interclass Correlation (ICC)</li>
    </ul>
     <h4>Decision & gates</h4>
    <ul>
        <li>Probabilistic Core-Competency Gates (chance-of-meeting-target)</li>
        <li>Utility-Optimized Recommendation (constrained Bayesian decision)</li>
        <li>Cost-Sensitive Thresholding (Youden’s J, custom cost curves)</li>
        <li>Multi-Objective Trade-offs (fairness–utility Pareto checks)</li>
    </ul>
    <h4>Uncertainty reporting</h4>
    <ul>
        <li>Nonparametric Bootstrap / Jackknife CIs</li>
        <li>Bayesian Credible Intervals</li>
        <li>Delta-Method Approximation for composites</li>
    </ul>
     <h4>RAG & prompting governance</h4>
    <ul>
        <li>Semantic Chunking in RAG (meaning-based units, blueprint retrieval)</li>
        <li>Staged / Multi-Step Prompting (schema-constrained outputs)</li>
        <li>Cross-Step Verification & Self-Consistency Checks</li>
        <li>Prompt/Model Versioning & Provenance</li>
    </ul>
    <h4>Governance & auditability</h4>
    <ul>
        <li>ICAL Consistency Checkpoints (self-validation/re-processing)</li>
        <li>Reviewer Override Protocols (explanations required)</li>
        <li>Full Audit Trail (rubric versions, evidence links, decision rationale)</li>
    </ul>
</div>
`;

export default function TalentEvaluationClient() {
  return (
    <main className="container max-w-6xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Services</span> / <span>Talent Evaluations</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Evidence-Based Evaluation of Technical Interviews</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Where Semantic RAG and cognitive-science methods intersect with expert review—reproducible, calibrated, and explainable for LATAM engineering teams.
        </p>
      </header>

       <section id="metrics" className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {metrics.map(item => (
                <div key={item.label} className="text-center">
                    <p className="text-4xl font-bold text-primary">{item.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
                </div>
            ))}
        </div>
      </section>

      <section id="what-we-measure" className="py-16">
        <h2 className="text-center text-4xl font-bold text-foreground">What We Measure: The Axiom Cortex™ Cognitive Fingerprint</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">Scores roll up from per-question “B-axioms” into a role-specific cognitive fingerprint.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {traits.map(trait => (
                <div key={trait.title} className="rounded-lg border bg-card p-6">
                    {trait.icon}
                    <h3 className="mt-4 text-lg font-bold text-foreground">{trait.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{trait.description}</p>
                </div>
            ))}
        </div>
      </section>

      <section id="how-we-hire" className="py-16">
        <h2 className="text-center text-4xl font-bold text-foreground">How We Hire the Right Person</h2>
        <div className="mt-12 max-w-3xl mx-auto">
            {processSteps.map(step => (
                <div key={step.step} className="flex gap-6">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg">{step.step}</div>
                        {step.step !== processSteps.length && <div className="w-px flex-grow bg-border"></div>}
                    </div>
                    <div className="pb-12">
                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
        <p className="text-center text-sm text-muted-foreground">Bias is reduced by focusing on reasoning patterns; integrity checks flag near-verbatim web phrasing and sudden speech-pattern shifts.</p>
      </section>

      <section id="governance" className="py-16">
         <div className="max-w-4xl mx-auto rounded-lg border bg-card p-8">
            <h2 className="text-center text-3xl font-bold text-foreground">Axiom Cortex™ Governance & L2-Fairness Engine</h2>
             <p className="text-center mt-2 text-muted-foreground">Governed by semantic chunking in RAG and staged/multi-step prompting; the LLM is constrained, never free-running.</p>
             <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {governancePillars.map(pillar => (
                    <div key={pillar.title}>
                        <h3 className="font-semibold text-primary">{pillar.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{pillar.description}</p>
                    </div>
                ))}
             </div>
        </div>
      </section>

       <section id="cto-appendix" className="py-16 max-w-4xl mx-auto">
        <div className="rounded-lg border bg-card p-8">
          <h2 className="text-center text-3xl font-bold text-foreground">Nearshore LATAM Technical Interview Evaluation — 44 Methods & Metrics</h2>
          <p className="text-center text-muted-foreground mt-2">(CTO Appendix)</p>
          <DisclosureDrawer title="View the 44 Methods & Metrics">
            <div dangerouslySetInnerHTML={{ __html: ctoAppendixContent }} />
          </DisclosureDrawer>
        </div>
       </section>
      
       <section id="privacy" className="py-16">
         <h2 className="text-center text-4xl font-bold text-foreground">Data Handling, Privacy & Integrity</h2>
         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 mt-1 text-primary" />
                <div>
                    <h3 className="font-semibold text-foreground">Consent-based recording</h3>
                    <p className="text-sm text-muted-foreground">Candidates are informed; recordings are used only for evaluation.</p>
                </div>
            </div>
            <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 mt-1 text-primary" />
                <div>
                    <h3 className="font-semibold text-foreground">Encryption in transit & at rest</h3>
                    <p className="text-sm text-muted-foreground">Standard modern TLS for transport; encrypted storage for media/transcripts.</p>
                </div>
            </div>
             <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 mt-1 text-primary" />
                <div>
                    <h3 className="font-semibold text-foreground">Access control & audit</h3>
                    <p className="text-sm text-muted-foreground">Least-privilege reviewer access; activity logs retained for audits.</p>
                </div>
            </div>
             <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 mt-1 text-primary" />
                <div>
                    <h3 className="font-semibold text-foreground">Redaction & sharing</h3>
                    <p className="text-sm text-muted-foreground">Public samples are redacted; customers receive secure links, not e-mail attachments.</p>
                </div>
            </div>
         </div>
       </section>

       <section id="faq" className="py-16 max-w-3xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-2">
            {faqs.map(faq => (
                 <AccordionItem title={faq.title} key={faq.title}>
                    <p>{faq.content}</p>
                </AccordionItem>
            ))}
        </div>
       </section>


       <div className="text-center rounded-lg bg-primary/10 p-8">
            <h2 className="text-2xl font-bold">Ready to see this on your next role?</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
                We’ll map your role blueprint, run a recorded interview, and deliver a language-fair, expert-reviewed evaluation.
            </p>
            <Link href="/research/technical-talent-evaluation-system" className="cta-button mt-6">
                View Sample Report
            </Link>
        </div>

    </main>
  );
}
