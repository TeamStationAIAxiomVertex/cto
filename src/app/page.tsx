
import Link from 'next/link';
import { BrainCircuit, ShieldCheck, Scale, ArrowRight, BookOpen, GitCompare, FileText, AlertTriangle } from 'lucide-react';
import { getAllCaseStudies } from '@/lib/case-studies';
import { Tooltip } from '@/components/Tooltip';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nearshore Software Development & Staff Augmentation | TeamStation AI',
  description: 'The definitive, research-backed hub for CTOs evaluating nearshore software development, LATAM engineering, AI-driven hiring, and vendor choices like Bairesdev alternatives.',
};

function ServicePill({ icon: Icon, text }: { icon: React.ElementType, text: string }) {
    return (
        <div className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm text-muted-foreground">
            <Icon className="h-5 w-5 text-primary" />
            <span>{text}</span>
        </div>
    );
}

const trustNumbers = [
    { value: '≈9 days', label: 'Time-to-Offer' },
    { value: '2.6M+', label: 'Talent Graph Profiles' },
    { value: '≥95%', label: 'Day-1 Tool Readiness' },
    { value: '100%', label: 'Audit-Ready Compliance' }
]

const corePillars = [
    {
        icon: <BrainCircuit className="h-8 w-8 text-primary"/>,
        pain: "Wasting months on bad hires?",
        title: "De-Risk Your Hiring with Cognitive AI",
        description: "Stop gambling on resumes. Our Axiom Cortex™ Cognitive AI engine provides auditable, scientific proof of a candidate's problem-solving ability and mental shape, cutting your mis-hire risk by over 90%.",
        href: "/playbook/bias-free-technical-hiring-axiom-cortex",
        linkLabel: "Learn About Our Vetting",
        kpi: "Mismatch rate ≤10%"
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary"/>,
        pain: "Drowning in vendor management?",
        title: "Eliminate Vendor Chaos with One SLA",
        description: "Stop juggling 5+ vendors. We bundle EOR, payroll, secure devices (MDM), and insurance into one accountable SLA, giving you a single pane of glass for your entire operation.",
        href: "/services/integrated-services",
        linkLabel: "See Our Integrated Services",
        kpi: "1 contract, 1 invoice"
    },
    {
        icon: <Scale className="h-8 w-8 text-primary"/>,
        pain: "Struggling to justify your budget?",
        title: "Get a CFO-Ready TCO Model",
        description: "We provide a predictable, all-inclusive Total Cost of Ownership (TCO) that is often 40-60% lower than the 'hidden cost' of a DIY approach or a US hire. Make a business case your finance team will approve.",
        href: "/playbook/latam-economics",
        linkLabel: "View Our TCO Model",
        kpi: "≈$98k revenue pulled forward"
    }
]

const painPoints = [
    "Is your best engineer babysitting a failing offshore team?",
    "Did you spend 60 days hiring a 'senior' dev who can't ship code?",
    "Are you one insecure laptop away from a major compliance breach?",
    "Is 'vendor management' your secret second job?"
];

const comparisonPoints = {
    "Vetting": {
        pain: "Is your hiring process a high-risk gamble?",
        traditional: "Traditional staff augmentation relies on resume keywords and unstructured interviews, a biased process that frequently results in costly mis-hires.",
        teamstation: "Our Axiom Cortex™ Cognitive AI engine provides scientific, evidence-based proof of a candidate's problem-solving ability, not just their credentials.",
        proof: "Mismatch rate ≤10%",
        href: "/technical-interview-evaluation"
    },
    "Security": {
        pain: "Is your vendor creating massive security holes?",
        traditional: "Most vendors leave security to you. Unmanaged devices, no MDM, and no compliance framework expose you to catastrophic risk.",
        teamstation: "Our integrated platform is secure by default. We provide MDM-secured devices, EOR/compliance, and insurance under one SLA.",
        proof: "SOC 2 & ISO Aligned",
        href: "/trust"
    },
    "Cost": {
        pain: "Are hidden fees killing your budget?",
        traditional: "A low hourly rate hides a mountain of extra costs for EOR, IT, legal, and vendor management, inflating your Total Cost of Ownership (TCO).",
        teamstation: "Our all-inclusive rate provides a predictable, CFO-ready TCO that is often 40-60% lower than the fully-loaded cost of other models.",
        proof: "40-60% Lower TCO",
        href: "/playbook/latam-economics"
    }
}


export default async function HomePage() {
  const caseStudies = (await getAllCaseStudies()).slice(0, 3);

  return (
    <div className="container mx-auto px-4">
      <section className="text-center py-16 md:py-24">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent px-2 py-4">
          Nearshore Software Development, Or Another Crisis?
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          We transformed and intelligently platformed the industry into a highly controllable box that our mission partners access to stay ahead of crisis and deliver certainty, continuity, and predictability to their clients.
        </p>
        <div className="mt-10">
            <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button">Book a Strategy Call</Link>
        </div>
      </section>

      <section id="trust-by-numbers" className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {trustNumbers.map(item => (
                <div key={item.label} className="text-center">
                    <p className="text-4xl font-bold text-primary">{item.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
                </div>
            ))}
        </div>
      </section>
      
       <section id="core-pillars" className="py-24">
         <h2 className="text-center text-4xl font-bold text-foreground">
            Your Unfair Advantage
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">We're not another vendor. We are a force multiplier for your engineering organization, giving you the leverage to succeed.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
            {corePillars.map(pillar => (
                 <div key={pillar.title} className="rounded-lg border bg-card p-6 flex flex-col">
                    <p className="text-sm font-semibold text-primary">{pillar.pain}</p>
                    <div className="flex items-center gap-3 mt-3">
                        {pillar.icon}
                        <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground flex-grow">{pillar.description.replace('Axiom Cortex™', '').replace('MDM', '').replace('EOR', '').replace('TCO', '')}
                      {pillar.title.includes("Cognitive AI") && <Tooltip text="Our proprietary Cognitive AI engine for talent evaluation."><Link href="/research/hub/axiom-cortex-scientific-report" className="text-primary hover:underline">Axiom Cortex™</Link></Tooltip>}
                      {pillar.description.includes("MDM") && <Tooltip text="Mobile Device Management: Software that secures, monitors, and manages devices like laptops.">MDM</Tooltip>}
                      {pillar.description.includes("EOR") && <Tooltip text="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.">EOR</Tooltip>}
                      {pillar.description.includes("TCO") && <Tooltip text="Total Cost of Ownership: Includes salary plus all direct and indirect costs like hiring, legal, IT, and management overhead.">TCO</Tooltip>}
                    </p>
                    <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">{pillar.kpi}</p>
                     <Link href={pillar.href} className="mt-6 flex items-center text-sm font-semibold text-primary">
                        {pillar.linkLabel} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            ))}
        </div>
      </section>

      <section id="pain-points" className="py-24 bg-card rounded-lg">
        <h2 className="text-center text-4xl font-bold text-foreground">Sound Familiar? It's the Cost of Doing Nothing.</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">These aren't just headaches. They are symptoms of a broken IT staff augmentation model.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {painPoints.map((pain, index) => (
                <div key={index} className="flex items-center gap-4 bg-background p-4 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-yellow-400 shrink-0"/>
                    <p className="m-0 font-medium text-muted-foreground">{pain}</p>
                </div>
            ))}
        </div>
      </section>

       <section id="comparison" className="py-24">
         <h2 className="text-center text-4xl font-bold text-foreground">
            There Is a Better Way
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">Here’s how our integrated platform solves these problems by design.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {Object.entries(comparisonPoints).map(([key, value]) => (
            <div key={key} className="rounded-lg border bg-card p-6 flex flex-col">
              <p className="text-sm font-semibold text-primary">{value.pain}</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{key}</h3>
              
              <div className="mt-4 flex-grow">
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-muted-foreground">Traditional Model</h4>
                  <p className="text-sm text-muted-foreground">{value.traditional.replace('Axiom Cortex™', '')}
                    {value.traditional.includes("TCO") && <Tooltip text="Total Cost of Ownership: Includes salary plus all direct and indirect costs like hiring, legal, IT, and management overhead.">TCO</Tooltip>}
                  </p>
                </div>
                <div className="mt-4 border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground">TeamStation AI Solution</h4>
                  <p className="text-sm text-foreground">{value.teamstation.replace('Axiom Cortex™', '')}
                    {value.teamstation.includes("Axiom Cortex") && <Tooltip text="Our proprietary Cognitive AI engine for talent evaluation."><Link href="/research/hub/axiom-cortex-scientific-report" className="text-primary hover:underline">Axiom Cortex™</Link></Tooltip>}
                    {value.teamstation.includes("MDM") && <Tooltip text="Mobile Device Management: Software that secures, monitors, and manages devices like laptops.">MDM</Tooltip>}
                    {value.teamstation.includes("EOR") && <Tooltip text="Employer of Record: A third-party organization that legally employs workers on behalf of another company.">EOR</Tooltip>}
                    {value.teamstation.includes("TCO") && <Tooltip text="Total Cost of Ownership: Includes salary plus all direct and indirect costs like hiring, legal, IT, and management overhead.">TCO</Tooltip>}
                  </p>
                </div>
              </div>
              
              <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">{value.proof}</p>
              <Link href={value.href} className="mt-6 flex items-center text-sm font-semibold text-primary">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
         <div className="text-center mt-12">
              <Link href="/comparisons" className="font-semibold text-primary hover:underline">
                See All Vendor Comparisons <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
      </section>


      <section id="case-studies" className="py-24">
        <h2 className="text-center text-4xl font-bold text-foreground">
            Evidence of Impact
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">See how CTOs like you have used our platform to solve critical problems and deliver results.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map(study => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group flex flex-col rounded-lg border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">{study.clientName}</h3>
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary my-3">{study.industry}</span>
                <p className="text-sm text-muted-foreground flex-grow">{study.summary}</p>
                 <div className="mt-6 flex items-center text-sm font-semibold text-primary">Read Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
            </Link>
            ))}
        </div>
        <div className="text-center mt-12">
            <Link href="/case-studies" className="font-semibold text-primary hover:underline">
                View All Case Studies <ArrowRight className="inline h-4 w-4" />
            </Link>
        </div>
      </section>

      <section id="contact" className="py-24">
         <div className="mx-auto max-w-3xl rounded-lg border bg-card p-8 text-center">
            <h2 className="text-3xl font-bold text-foreground">Stop Patching a Broken System. Build a Better One.</h2>
            <p className="mt-3 text-muted-foreground">In a 15-minute call, we won't give you a sales pitch. We'll give you a concrete plan to fix your hiring process, consolidate your vendors, and get a predictable, CFO-ready budget for your nearshore team. You will walk away with actionable advice, whether you work with us or not.</p>
            <div className="mt-6">
                <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button">Book a No-Obligation Strategy Call</Link>
            </div>
         </div>
      </section>
    </div>
  );
}
