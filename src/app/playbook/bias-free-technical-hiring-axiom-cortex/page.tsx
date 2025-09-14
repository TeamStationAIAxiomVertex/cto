
import Link from 'next/link';
import type { Metadata } from 'next';
import { Tooltip } from '@/components/Tooltip';
import { CheckCircle, ArrowRight, BrainCircuit, ShieldCheck, UserCheck, Briefcase, FileText, DollarSign, AlertTriangle, Zap, Scale, Layers, HelpCircle, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Build vs. Buy: The Definitive CTO Framework for Scaling Nearshore Teams',
  description: 'Should you build a nearshore operation from scratch or "buy" into an integrated platform? This data-driven playbook for CTOs models the trade-offs in Total Cost of Ownership (TCO), speed, and risk.',
};

const buildCosts = [
    { 
        area: "Recruitment & Hiring", 
        tax: "Months of your senior engineers' time wasted on screening and interviewing instead of building product. High agency fees and a low signal-to-noise ratio make this a costly gamble.", 
        impact: "$25,000 - $40,000", 
        icon: <UserCheck className="h-8 w-8 text-yellow-400" />,
        impactColor: "text-red-400"
    },
    { 
        area: "Legal & Entity Setup", 
        tax: "Navigating foreign labor laws, tax codes, and corporate registration is a legal minefield that requires expensive local counsel and months of administrative delay.", 
        impact: "$15,000 - $30,000+", 
        icon: <FileText className="h-8 w-8 text-yellow-400" />,
        impactColor: "text-red-400"
    },
    { 
        area: "HR & Payroll Admin", 
        tax: "Managing international payroll, benefits, and compliance for each country is a full-time job you now own. This is a massive, ongoing operational drag on your internal resources.", 
        impact: "$10,000 - $15,000 (annual)", 
        icon: <Briefcase className="h-8 w-8 text-yellow-400" />,
        impactColor: "text-red-400"
    },
    { 
        area: "IT & Security", 
        tax: "Procuring, shipping, securing (MDM), and managing laptops globally without a dedicated international IT team is an operational nightmare and a significant security risk.", 
        impact: "$5,000 - $8,000 (per hire)", 
        icon: <ShieldCheck className="h-8 w-8 text-yellow-400" />,
        impactColor: "text-red-400"
    },
    { 
        area: "The 'Mis-Hire Tax'", 
        tax: "A bad hire costs 6-12 months of salary in lost productivity, team disruption, management overhead, and the cost of re-hiring. It's the most expensive mistake you can make.", 
        impact: "$75,000 - $150,000", 
        icon: <BrainCircuit className="h-8 w-8 text-yellow-400" />,
        impactColor: "text-red-400"
    },
    { 
        area: "The 'Vacancy Tax'", 
        tax: "Every day a critical role sits empty, your company pays a 'Vacancy Tax' in delayed features, missed revenue targets, and lost market share. The industry average is 45-60 days.", 
        impact: "≈$160,000 per $1M ARR", 
        icon: <DollarSign className="h-8 w-8 text-yellow-400" />,
        impactColor: "text-red-400"
    },
];

const buySolutions = [
    { 
        pain: "Is your recruiting process a high-risk gamble?", 
        solutionTitle: "From Resume Keywords to Cognitive Proof",
        solution: "Our Axiom Cortex™ engine provides scientifically-vetted shortlists, cutting your team's interview time by >80%. We find candidates with the right 'mental shape' for the role, not just the right keywords.", 
        proof: "Mismatch Rate ≤ 10%",
        href: "/technical-interview-evaluation",
        linkLabel: "See Our Vetting Process",
        icon: <UserCheck className="h-8 w-8 text-primary" />
    },
    { 
        pain: "Are you drowning in legal and HR complexity?",
        solutionTitle: "From Multi-Vendor Chaos to One SLA",
        solution: "Our platform includes full Employer of Record (EOR) services. We handle all contracts, payroll, taxes, and benefits, ensuring full compliance in every LATAM country and eliminating your administrative burden.", 
        proof: "Zero legal or HR overhead",
        href: "/services/integrated-services",
        linkLabel: "Explore Integrated Services",
        icon: <FileText className="h-8 w-8 text-primary" />
    },
    { 
        pain: "Is your security posture full of holes?",
        solutionTitle: "From 'Bring Your Own Device' to Audit-Ready",
        solution: "We provide secure, MDM-managed devices and comprehensive Cyber/E&O insurance. Your security posture is audit-ready from Day 1, with no work from your IT team. We own the risk.", 
        proof: "SOC 2 & ISO Aligned posture",
        href: "/trust",
        linkLabel: "Visit Our Trust Center",
        icon: <ShieldCheck className="h-8 w-8 text-primary" />
    },
    { 
        pain: "Are you paying for vendors or for outcomes?",
        solutionTitle: "From Hidden Fees to Predictable TCO",
        solution: "Our all-inclusive pricing eliminates surprise fees. You get a predictable, CFO-ready Total Cost of Ownership that is often 40-60% lower than the fully-loaded cost of the 'Build' model.", 
        proof: "40-60% Lower TCO",
        href: "/playbook/latam-economics",
        linkLabel: "See the TCO Framework",
        icon: <Scale className="h-8 w-8 text-primary" />
    },
];


export default function BuildVsBuyPage() {
  return (
    <main className="container max-w-5xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/playbook/hub" className="hover:text-foreground">CTO Playbook</Link> / <span>Bias-Free Hiring</span>
      </div>

      <header className="my-8">
        <div className="rounded-lg border bg-card p-8 md:p-12">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">The Playbook for Bias-Free Technical Hiring</h1>
            <div className="mt-8 max-w-4xl space-y-6">
                  <div className="bg-background p-6 rounded-lg border border-primary/20">
                      <h2 className="font-bold text-primary flex items-center gap-2"><AlertTriangle className="h-5 w-5"/>The CTO's Dilemma</h2>
                      <p className="mt-2 text-muted-foreground">You’re here because your hiring process feels like a high-stakes gamble. You've been burned by charismatic candidates who aced the interview but couldn't write production-ready code. You're losing your best engineers to a slow, frustrating hiring loop. Your board is asking why head-count is up but velocity is down. You know your current process is broken, but you lack the data to prove it and a system to fix it.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg border border-border/50">
                       <p className="mt-2 text-muted-foreground">This guide is not another list of interview questions. This is a <strong className="text-primary">strategic framework</strong> for you, the CTO, to transform your hiring process from a subjective, high-risk art form into a data-driven, low-risk science. We will diagnose the hidden costs bleeding your budget, quantify the financial impact, and provide a concrete system—powered by our <Tooltip text="Our proprietary Cognitive AI engine for talent evaluation."><Link href="/research/hub/axiom-cortex-scientific-report" className="text-primary hover:underline">Axiom Cortex™</Link></Tooltip>—to build a high-performance team you can bet your roadmap on.</p>
                  </div>
              </div>
        </div>
      </header>

      <section className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">Part 1 (The Pain): Diagnosing Your Broken Hiring Funnel</h2>
        <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">If you recognize your organization in these scenarios, your hiring process isn't just inefficient; it's actively harming your business.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {hiringPains.map((point) => (
            <div key={point.title} className="rounded-lg border bg-card p-6 flex flex-col">
              <p className="text-sm font-semibold text-primary">{point.question}</p>
              <div className="flex items-center gap-3 mt-3">
                {point.icon}
                <h3 className="text-lg font-semibold text-foreground">{point.pain}</h3>
              </div>
               <div className="mt-4 border-t border-border pt-4">
                <h4 className="font-semibold text-yellow-400/80">The Problem</h4>
                <p className="text-sm text-muted-foreground m-0">{point.problem}</p>
              </div>
              <div className="mt-4 border-t border-border pt-4 flex-grow">
                <h4 className="font-semibold text-green-400">The Solution (The TeamStation Way)</h4>
                <p className="text-sm text-foreground m-0">{point.solution}</p>
              </div>
               <div className="mt-6">
                <p className="text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {point.kpi}</p>
                 <Link href={point.href} className="mt-4 flex items-center text-sm font-semibold text-primary">
                    {point.linkLabel} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
               </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-24 rounded-lg border bg-card p-8 md:p-12">
        <h2 className="text-center text-4xl font-bold text-foreground">Part 2 (The Budget): Quantifying the True Cost of a Bad Hire</h2>
        <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
         A bad hire isn't just a personnel problem; it's a significant financial event. This is the CFO-ready math to justify investing in a scientific hiring process. The "cheaper" ad-hoc approach is costing you a fortune.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {hiddenTaxes.map((tax, index) => (
                <div key={index} className="bg-background/50 rounded-lg border border-red-500/20 p-6">
                    <div className="flex items-center gap-3">
                        {tax.icon}
                        <h3 className="text-lg font-bold text-foreground">{tax.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                        {tax.description}
                        {tax.impact && (
                             <strong className={`font-bold ${tax.impactColor}`}> {tax.impact} </strong>
                        )}
                        {tax.afterText}
                    </p>
                </div>
            ))}
        </div>
         <div className="mt-8 text-center">
            <Link href="/playbook/latam-economics" className="cta-button">
              See the Full TCO Framework <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </div>
      </section>
      
      <section className="my-24">
        <h2 className="text-center text-4xl font-bold text-foreground">Part 3 (The Solution): An Engineered System for Hiring</h2>
         <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">You don't build software with guesswork. It's time to stop building your team that way. Our process transforms hiring into a repeatable, auditable, and scientifically-grounded engineering discipline.</p>
        <div className="overflow-x-auto mt-12">
          <table className="w-full text-sm text-left">
            <thead className="border-b border-border/50">
              <tr>
                <th className="px-4 py-3 font-semibold text-foreground">Phase</th>
                <th className="px-4 py-3 font-semibold text-foreground">Traditional (High-Risk) Method</th>
                <th className="px-4 py-3 font-semibold text-foreground">TeamStation AI (Low-Risk) System</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="px-4 py-4 font-bold text-foreground align-top">1. Sourcing</td>
                <td className="px-4 py-4">
                  <p className="font-bold text-yellow-400">Keyword Matching</p>
                  <p className="text-xs text-muted-foreground m-0">Scanning resumes for keywords ("React," "Python"). High noise, low signal. Optimizes for candidates who are good at writing resumes.</p>
                </td>
                <td className="px-4 py-4">
                   <p className="font-bold text-green-400">Cognitive AI Sourcing</p>
                   <p className="text-xs text-foreground m-0">Our Nebula™ engine scans a 2.6M+ talent graph, using AI to match your role's required cognitive profile (e.g., high 'Architectural Instinct') to candidates' scientifically-validated traits.</p>
                </td>
              </tr>
               <tr className="border-b border-border/50">
                <td className="px-4 py-4 font-bold text-foreground align-top">2. Vetting</td>
                <td className="px-4 py-4">
                  <p className="font-bold text-yellow-400">Unstructured Interviews</p>
                  <p className="text-xs text-muted-foreground m-0">Relies on "favorite questions" and "gut feel." Highly susceptible to interviewer bias, leading to inconsistent and indefensible evaluations.</p>
                </td>
                <td className="px-4 py-4">
                   <p className="font-bold text-green-400">Evidence-Based Evaluation</p>
                   <p className="text-xs text-foreground m-0">A human expert conducts a structured, bias-aware interview. Our <Tooltip text="Our proprietary Cognitive AI engine for talent evaluation."><Link href="/research/hub/axiom-cortex-scientific-report" className="text-primary hover:underline">Axiom Cortex™</Link></Tooltip> AI synthesizes the conversation, providing a "Cognitive Fingerprint" and a full <Tooltip text="Every evaluation generates a complete 'Evidence Locker' with transcripts, scores, and an explainable hiring signal."><Link href="/technical-interview-evaluation" className="text-primary hover:underline">Evidence Locker</Link></Tooltip> to prove a candidate's abilities.</p>
                </td>
              </tr>
                <tr className="border-b border-border/50">
                <td className="px-4 py-4 font-bold text-foreground align-top">3. Decision</td>
                <td className="px-4 py-4">
                  <p className="font-bold text-yellow-400">Subjective "Debrief"</p>
                  <p className="text-xs text-muted-foreground m-0">A meeting where the loudest voice or most senior person often wins. Decisions are based on memory and opinion, not data. The process is a black box.</p>
                </td>
                <td className="px-4 py-4">
                   <p className="font-bold text-green-400">Data-Driven Go/No-Go</p>
                   <p className="text-xs text-foreground m-0">The hiring decision is made based on the auditable Evidence Locker, comparing the candidate's Cognitive Fingerprint against the role's ideal profile. The decision is transparent, defensible, and based on objective data.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="my-24">
        <div className="rounded-lg border bg-card p-8 md:p-12">
            <h2 className="text-4xl font-bold text-center text-foreground">The Verdict: From Guesswork to Science</h2>
            <div className="mt-8 max-w-4xl mx-auto space-y-6">
                <div className="bg-background p-6 rounded-lg border border-primary/20">
                    <h3 className="font-bold text-primary flex items-center gap-2"><CheckCircle className="h-5 w-5"/>The Strategic Imperative</h3>
                    <p className="mt-2 text-muted-foreground">You cannot build a world-class engineering organization on a foundation of hiring guesswork. The single most leveraged activity a CTO can perform is to de-risk the process of bringing new talent into the organization. A scientific, evidence-based hiring system is not a "nice-to-have"; it is the fundamental prerequisite for predictable delivery, innovation, and long-term success.</p>
                    <p className="mt-4 text-foreground">This methodology transforms hiring from a game of chance into a science. It's how you build an elite team based on <strong className="text-primary">proven capability</strong>, not just credentials on a PDF. Our platform provides the auditable report, the cognitive fingerprint, and the evidence locker, so you can make a data-driven decision, not a gut-feel guess. It's the system that allows you to stop gambling and start engineering your team with the same rigor you apply to your software.</p>
                </div>
            </div>
        </div>
      </section>

       <div className="text-center rounded-lg bg-primary/10 p-8 mt-12">
            <h2 className="text-2xl font-bold">Ready to De-Risk Your Hiring?</h2>
            <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
                This isn't a sales pitch. It's a strategic consultation to build your CFO-ready business case for a scientific hiring process. Let's discuss how our evaluation process can find you the right talent, faster and more accurately than any other method.
            </p>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">
                Book a Hiring Strategy Call <ArrowRight className="ml-2 h-4 w-4"/>
            </a>
        </div>
    </main>
  );
}

    