import Link from "next/link";
import type { Metadata } from "next";
import { WithTooltip } from "../../../components/ui/tooltip";
import {
  CheckCircle,
  ArrowRight,
  BrainCircuit,
  ShieldCheck,
  UserCheck,
  Briefcase,
  FileText,
  DollarSign,
  AlertTriangle,
  Zap,
  Scale,
  Layers,
  HelpCircle,
  BookOpen,
  UserX,
} from "lucide-react";
import { JsonLd } from "../../../components/seo/JsonLd";
import ValuePropositionBlock from "../../../components/seo/ValuePropositionBlock";
import FurtherReading from "../../../components/seo/FurtherReading";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is cognitive AI hiring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cognitive AI hiring validates a candidate’s real problem-solving and reasoning skills instead of relying on resumes or keyword filters.",
      },
    },
    {
      "@type": "Question",
      name: "How does Axiom Cortex™ reduce mis-hires?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By applying psychometric and neurocognitive tests, Axiom Cortex™ reduces mismatches to less than 10%, compared to legacy resume-driven approaches.",
      },
    },
    {
      "@type": "Question",
      name: "Is this just another automated code test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. This is a human-led, AI-synthesized evaluation. A human expert conducts a structured interview to assess complex, real-world problem-solving. The AI provides a deep, unbiased analysis of the cognitive skills demonstrated during that live, dynamic conversation.",
      },
    },
    {
      "@type": "Question",
      name: "Can your system evaluate non-coding roles like Engineering Managers or QA Leads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The cognitive 'shape' required for different roles varies. We use different evaluation modules and benchmarks for leadership, QA, and other specialized technical roles to measure the specific traits that predict success in those positions.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Bias-Free Technical Hiring: A Playbook for CTOs | TeamStation AI",
  description:
    "A strategic framework for CTOs to transform hiring from a subjective art into a data-driven science, powered by our Axiom Cortex™ Cognitive AI.",
  keywords:
    "bias-free hiring, cognitive ai hiring, axiom cortex, technical recruiting, cto playbook",
  alternates: {
    canonical: "/playbook/bias-free-technical-hiring-axiom-cortex",
  },
};

const hiringPains = [
  {
    icon: UserX,
    pain: "Hiring process is a high-risk gamble",
    question: "Is your hiring process a high-risk gamble?",
    solutionTitle: "From Resume Keywords to Cognitive Proof",
    problem:
      "Traditional hiring relies on resume keywords and unstructured interviews a biased, low-signal process that tells you nothing about a candidate's actual problem-solving ability.",
    solution:
      "Our Axiom Cortex™ Cognitive AI engine synthesizes the interview conversation, using over 44 proprietary algorithms to provide scientific, evidence-based proof of a candidate's cognitive traits and mental shape.",
    kpi: "Mismatch Rate ≤ 10%",
    href: "/technical-interview-evaluation",
    linkLabel: "See a Real Evaluation Report",
  },
  {
    icon: UserCheck,
    pain: "Losing top talent to a slow, biased process",
    question: "Are you losing top talent to a slow, biased process?",
    solutionTitle: "From Subjective Interviews to Objective Evidence",
    problem:
      "Unstructured interviews favor charismatic speakers over the best engineers and are notoriously prone to interviewer bias, especially against non-native English speakers.",
    solution:
      "A human expert conducts a structured, bias-aware interview. Our Cognitive AI then provides a Cortex Calibration Layer to ensure we evaluate pure technical and logical signals, not just linguistic fluency or presentation style.",
    kpi: "Time-to-Offer ≈ 9 days",
    href: "/research/axiom-cortex-scientific-report",
    linkLabel: "Read the Scientific Paper",
  },
  {
    icon: FileText,
    pain: "Cannot defend hiring decisions with data",
    question: "Can you defend your hiring decisions with data?",
    solutionTitle: "From Gut-Feel to Auditable Proof",
    problem:
      "When a hire fails, there's often no data to explain why the decision was made. The process is a black box, making it impossible to learn from mistakes.",
    solution:
      "Every evaluation generates a complete 'Evidence Locker' with transcripts, scores, and an explainable hiring signal. You get a fully auditable evidence trail for every candidate, turning hiring into a science.",
    kpi: "100% Auditable Evidence Trail",
    href: "/process",
    linkLabel: "Explore Our Full Process",
  },
];

const hiddenTaxes = [
  {
    title: "The 'Mis-Hire Tax'",
    description:
      "The cost of a bad hire is 6-12 months of salary in lost productivity, team disruption, management overhead, and the cost of re-hiring. For a $150k engineer, that's a",
    impact: "$75,000 - $150,000",
    afterText: "direct hit to your P&L.",
    icon: BrainCircuit,
    impactColor: "text-destructive",
  },
  {
    title: "The 'Vacancy Tax'",
    description:
      "Every day a critical role sits empty, you pay a 'Vacancy Tax' in delayed features and lost market share. A 60-day hiring cycle for a feature worth $1M ARR costs you over",
    impact: "$160,000",
    afterText: "in lost opportunity.",
    icon: DollarSign,
    impactColor: "text-destructive",
  },
  {
    title: "The Management Overhead Tax",
    description:
      "Your engineering managers are expensive resources. A flawed hiring process forces them into endless screening and interviewing cycles. If an EM spends 25% of their time on this, that's a quarter of their salary ",
    impact: "$50,000+ per year",
    afterText: " dedicated to a problem that shouldn't exist.",
    icon: Briefcase,
    impactColor: "text-destructive",
  },
];

const furtherReadingLinks = [
  {
    href: "/research/axiom-cortex-scientific-report",
    title: "Axiom Cortex™ Scientific Report",
    description:
      "The official scientific paper detailing the data, methodology, and validation of our cognitive AI engine.",
  },
  {
    href: "/research/performance-evaluation-framework",
    title: "The Performance Evaluation Framework",
    description:
      "A framework for measuring and predicting developer performance beyond simple code tests.",
  },
  {
    href: "/research/platforming-nearshore-book",
    title: "Platforming the Nearshore Industry",
    description:
      "Our book on the scientific principles of de-risking and scaling nearshore teams.",
  },
];

export default function BiasFreeHiringAxiomCortexPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <main className="manual-page container max-w-5xl py-10">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/playbook/hub" className="hover:text-foreground">
            CTO Playbook
          </Link>{" "}
          / <span>Bias-Free Hiring</span>
        </div>

        <header className="my-8">
          <div className="glass-panel rounded-2xl p-6 md:p-10">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              The Playbook for Bias-Free Technical Hiring
            </h1>
            <div className="mt-8 max-w-4xl space-y-6">
              <div className="bg-background p-6 rounded-lg border border-primary/20">
                <h2 className="font-bold text-primary flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  The CTO's Dilemma
                </h2>
                <p className="mt-2 text-muted-foreground">
                  You’re here because your hiring process feels like a
                  high-stakes gamble. You've been burned by charismatic
                  candidates who aced the interview but couldn't write
                  production-ready code. You're losing your best engineers to a
                  slow, frustrating hiring loop. Your board is asking why
                  head-count is up but velocity is down. You know your current
                  process is broken, but you lack the data to prove it and a
                  system to fix it.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border/50">
                <p className="mt-2 text-muted-foreground">
                  This guide is not another list of interview questions. This is
                  a{" "}
                  <strong className="text-primary">strategic framework</strong>{" "}
                  for you, the CTO, to transform your hiring process from a
                  subjective, high-risk art form into a data-driven, low-risk
                  science. We will diagnose the hidden costs bleeding your
                  budget, quantify the financial impact, and provide a concrete
                  system powered by our{" "}
                  <WithTooltip content="Our proprietary Cognitive AI engine for talent evaluation.">
                    <span className="border-b border-dashed">
                      Axiom Cortex™
                    </span>
                  </WithTooltip>
                   to build a high-performance team you can bet your roadmap on.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="my-24">
          <h2 className="text-center text-4xl font-bold text-foreground">
            Part 1: Diagnosing Your Broken Hiring Funnel
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">
            If you recognize your organization in these scenarios, your hiring
            process isn't just inefficient; it's actively harming your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {hiringPains.map((point) => (
              <div
                key={point.pain}
                className="rounded-lg border bg-card p-6 flex flex-col"
              >
                <p className="text-sm font-semibold text-primary">
                  {point.question}
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <point.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {point.pain}
                  </h3>
                </div>
                <div className="mt-4 border-t border-border pt-4">
                  <h4 className="font-semibold text-destructive">
                    The Problem
                  </h4>
                  <p className="text-sm text-muted-foreground m-0">
                    {point.problem}
                  </p>
                </div>
                <div className="mt-4 border-t border-border pt-4 flex-grow">
                  <h4 className="font-semibold text-primary">
                    TeamStation AI operating model
                  </h4>
                  <p className="text-sm text-foreground m-0">
                    {point.solution}
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">
                    Validation: {point.kpi}
                  </p>
                  <Link
                    href={point.href}
                    className="mt-4 flex items-center text-sm font-semibold text-primary"
                  >
                    {point.linkLabel} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-24 glass-panel rounded-2xl p-6 md:p-10">
          <h2 className="text-center text-4xl font-bold text-foreground">
            Part 2 (The Budget): Quantifying the True Cost of a Bad Hire
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
            A bad hire isn't just a personnel problem; it's a significant
            financial event. This is the CFO-ready math to justify investing in
            a scientific hiring process. The "cheaper" ad-hoc approach is
            costing you a fortune.
          </p>
          <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {hiddenTaxes.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-lg border border-destructive/20 bg-background p-6 flex flex-col"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-8 w-8 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground flex-grow">
                    {item.description}
                    {item.impact && (
                      <strong className={`font-bold ${item.impactColor}`}>
                        {" "}
                        {item.impact}{" "}
                      </strong>
                    )}
                    {item.afterText}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="text-center my-8 p-6 rounded-lg bg-background border border-destructive/30">
            <h3 className="text-xl font-bold text-foreground">
              Total Hidden Cost (1st Year, per hire):
            </h3>
            <p className="text-4xl font-mono font-bold text-destructive mt-2">
              $97,000 - $185,000+
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              This is <em className="font-bold">in addition</em> to the
              engineer's salary. The "cheaper" build model is often twice as
              expensive in the first year.
            </p>
          </div>
        </section>

        <section className="my-24">
          <h2 className="text-center text-4xl font-bold text-foreground">
            Part 3: An Engineered System for Hiring
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">
            You don't build software with guesswork. It's time to stop building
            your team that way. Our process transforms hiring into a repeatable,
            auditable, and scientifically-grounded engineering discipline.
          </p>
          <div className="overflow-x-auto mt-12">
            <table className="w-full text-sm text-left">
              <thead className="border-b border-border/50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-foreground">
                    Phase
                  </th>
                  <th className="px-4 py-3 font-semibold text-foreground">
                    Traditional (High-Risk) Method
                  </th>
                  <th className="px-4 py-3 font-semibold text-foreground">
                    TeamStation AI (Low-Risk) System
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="px-4 py-4 font-bold text-foreground align-top">
                    1. Sourcing
                  </td>
                  <td className="px-4 py-4">
                    <p className="font-bold text-destructive">
                      Keyword Matching
                    </p>
                    <p className="text-xs text-muted-foreground m-0">
                      Scanning resumes for keywords ("React," "Python"). High
                      noise, low signal. Optimizes for candidates who are good
                      at writing resumes.
                    </p>
                  </td>
                  <td className="px-4 py-4">
                    <p className="font-bold text-primary">
                      Cognitive AI Sourcing
                    </p>
                    <p className="text-xs text-foreground m-0">
                      Our Nebula™ engine scans a 2.6M+ talent graph, using AI to
                      match your role's required cognitive profile (e.g., high
                      'Architectural Instinct') to candidates'
                      scientifically-validated traits.
                    </p>
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="px-4 py-4 font-bold text-foreground align-top">
                    2. Vetting
                  </td>
                  <td className="px-4 py-4">
                    <p className="font-bold text-destructive">
                      Unstructured Interviews
                    </p>
                    <p className="text-xs text-muted-foreground m-0">
                      Relies on "favorite questions" and "gut feel." Highly
                      susceptible to interviewer bias, leading to inconsistent
                      and indefensible evaluations.
                    </p>
                  </td>
                  <td className="px-4 py-4">
                    <p className="font-bold text-primary">
                      Evidence-Based Evaluation
                    </p>
                    <p className="text-xs text-foreground m-0">
                      A human expert conducts a structured, bias-aware
                      interview. Our{" "}
                      <WithTooltip content="Our proprietary Cognitive AI engine for talent evaluation.">
                        <span className="border-b border-dashed">
                          Axiom Cortex™
                        </span>
                      </WithTooltip>{" "}
                      AI synthesizes the conversation, providing a "Cognitive
                      Fingerprint" and a full{" "}
                      <WithTooltip content="Every evaluation generates a complete 'Evidence Locker' with transcripts, scores, and an explainable hiring signal.">
                        <span className="border-b border-dashed">
                          Evidence Locker
                        </span>
                      </WithTooltip>{" "}
                      to prove a candidate's abilities.
                    </p>
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="px-4 py-4 font-bold text-foreground align-top">
                    3. Decision
                  </td>
                  <td className="px-4 py-4">
                    <p className="font-bold text-destructive">
                      Subjective "Debrief"
                    </p>
                    <p className="text-xs text-muted-foreground m-0">
                      A meeting where the loudest voice or most senior person
                      often wins. Decisions are based on memory and opinion, not
                      data. The process is a black box.
                    </p>
                  </td>
                  <td className="px-4 py-4">
                    <p className="font-bold text-primary">
                      Data-Driven Go/No-Go
                    </p>{" "}
                    <p className="text-xs text-foreground m-0">
                      The hiring decision is made based on the auditable
                      Evidence Locker, comparing the candidate's Cognitive
                      Fingerprint against the role's ideal profile. The decision
                      is transparent, defensible, and based on objective data.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <ValuePropositionBlock
          pain="You're forced to make high-stakes hiring decisions based on low-quality, biased data like resumes and unstructured interviews."
          stakes="Every mis-hire costs you over $150,000 in lost productivity and burns engineering management cycles on a problem that shouldn't exist. Get it wrong, and you jeopardize your roadmap."
          prescription="Shift from subjective guesswork to a scientific, data-driven hiring process. Use an engineered system to gather auditable, cognitive evidence on every candidate."
          proof="Our Axiom Cortex™ engine provides a full Evidence Locker for every candidate, reducing mis-hires to less than 10%. See the [Axiom Cortex™ Scientific Report](/research/axiom-cortex-scientific-report) for the data."
          ctaHref="/technical-interview-evaluation"
          ctaText="View a Sample Evidence Locker"
        />

        <FurtherReading items={furtherReadingLinks} />

        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold">Ready to De-Risk Your Hiring?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Stop gambling with your most critical asset. Book a demo to see how
            TeamStation AI can help you build a high-performance team with
            confidence and scientific precision.
          </p>
          <div className="mt-8">
            <Link href="/pricing" className="cta-button">
              Book a Demo
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
