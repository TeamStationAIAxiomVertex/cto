
import Link from 'next/link';
import { BrainCircuit, ShieldCheck, Scale, ArrowRight, BookOpen, GitCompare, FileText } from 'lucide-react';
import { getAllCaseStudies } from '@/lib/case-studies';

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
        title: "AI-Powered Vetting",
        description: "Our Axiom Cortex™ engine moves beyond resumes to evaluate cognitive ability, reducing bias and identifying elite problem-solvers.",
        href: "/technical-interview-evaluation",
        linkLabel: "Learn About Our Vetting"
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary"/>,
        title: "Integrated Nearshore Operations",
        description: "We bundle EOR, payroll, secure devices (MDM), and insurance into one SLA, eliminating vendor chaos and reducing your TCO.",
        href: "/services/nearshore-integrated-services",
        linkLabel: "See Our Integrated Services"
    },
    {
        icon: <Scale className="h-8 w-8 text-primary"/>,
        title: "Radical Transparency",
        description: "From our all-inclusive pricing to our evidence-based evaluations, we provide the data you need to make confident decisions.",
        href: "/pricing",
        linkLabel: "View Our Pricing Model"
    }
]


export default async function HomePage() {
  const caseStudies = (await getAllCaseStudies()).slice(0, 3);

  return (
    <div className="container mx-auto px-4">
      <section className="text-center py-16 md:py-24">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          The CTO Playbook
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          The definitive, research-backed hub for CTOs evaluating nearshore LATAM engineering, AI-driven hiring, and vendor choices.
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
            The Nearshore IT Co-Pilot™
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">We are a technology company that provides a single, unified platform for building and running elite nearshore teams.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
            {corePillars.map(pillar => (
                <div key={pillar.title} className="rounded-lg border bg-card p-8 flex flex-col">
                    {pillar.icon}
                    <h3 className="mt-4 text-xl font-bold text-foreground">{pillar.title}</h3>
                    <p className="mt-2 text-muted-foreground flex-grow">{pillar.description}</p>
                    <Link href={pillar.href} className="mt-6 flex items-center text-sm font-semibold text-primary">
                        {pillar.linkLabel} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            ))}
        </div>
      </section>

      <section id="case-studies" className="py-24">
        <h2 className="text-center text-4xl font-bold text-foreground">
            Evidence of Impact
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">See how our integrated platform and elite talent have delivered tangible results for companies like yours.</p>
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
            <h2 className="text-3xl font-bold text-foreground">Ready to Build a High-Performance Team?</h2>
            <p className="mt-3 text-muted-foreground">Stop managing vendors and start shipping product. In a 15-minute call, we can map your roles to our talent graph, define security requirements, and provide a clear, all-inclusive TCO model.</p>
            <div className="mt-6">
                <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button">Book a No-Obligation Strategy Call</Link>
            </div>
         </div>
      </section>
    </div>
  );
}
