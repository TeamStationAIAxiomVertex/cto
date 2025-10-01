import Link from "next/link";
import {
  BrainCircuit,
  FileText,
  ShieldCheck,
  Laptop,
  Building,
  Scale,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integrated Nearshore Services: One SLA for Ops',
  description: 'TeamStation AI bundles EOR, payroll, secure devices (MDM), and compliance into a single SLA for nearshore IT staff augmentation.',
  keywords: 'integrated nearshore services, nearshore sla, nearshore eor, nearshore payroll, secure nearshore devices, nearshore compliance',
};

export default function IntegratedServicesPage() {
  const services = [
    {
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      pain: "Gambling on resume keywords?",
      title: "Cognitive AI-Powered Vetting & Onboarding",
      description:
        "Our Axiom Cortex™ Cognitive AI engine validates problem-solving ability, not just credentials. A human expert interviews, and our system synthesizes the conversation to determine the candidate's mental shape. We then run a structured, auditable onboarding process to ensure Day-1 readiness.",
      kpi: "Mismatch Rate ≤10%",
      href: "/process"
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      pain: "Worried about complex local labor laws?",
      title: "Nearshore EOR, Payroll & Compliance",
      description:
        "We handle all Employer of Record (EOR) complexities: country-legal contracts, payroll, taxes, and statutory benefits, mitigating your legal and financial risk.",
      kpi: "Zero compliance overhead",
      href: "/trust"
    },
    {
      icon: <Laptop className="h-8 w-8 text-primary" />,
      pain: "Exposed by insecure remote laptops?",
      title: "Secure Devices & Endpoint Security (MDM)",
      description:
        "We procure, ship, enroll, patch, and monitor all developer laptops via enterprise-grade MDM, enforcing CIS-aligned guardrails and 24/7 endpoint visibility.",
       kpi: "MDM enrollment ≥99% (24h)",
       href: "/trust"
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      pain: "Lacking an audit-ready security posture?",
      title: "SOC 2 / ISO 27001 Alignment & Governance",
      description:
        "Our operational controls for security, availability, and privacy are aligned with leading industry standards, providing you an auditable posture from day one.",
      kpi: "100% auditable evidence trail",
      href: "/trust"
    },
    {
      icon: <Scale className="h-8 w-8 text-primary" />,
      pain: "Carrying all the liability for remote work?",
      title: "Cyber, E&O Insurance & IP Protection",
      description:
        "All work is covered by our comprehensive Cybersecurity and Errors & Omissions (E&O) insurance, plus Work-for-Hire IP protection, giving you a critical liability shield.",
       kpi: "Liability shield included",
       href: "/trust"
    },
     {
      icon: <Building className="h-8 w-8 text-primary" />,
      pain: "Need a physical space for your team?",
      title: "Global Office Network & Infrastructure",
      description:
        "Through our partnership with WeWork, your team gets access to a global network of secure, modern offices for collaboration and reliable infrastructure.",
       kpi: "45+ LATAM Hubs available",
       href: "/hire/by-country"
    },
  ];

  return (
    <main className="container max-w-6xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Services</span> / <span>Integrated Services</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">A Single SLA for Your Entire Operation</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          TeamStation AI is not a collection of services; it's a single, unified platform that bundles everything you need to hire, run, and scale an elite nearshore engineering team. We replace multi-vendor complexity with one accountable partner.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 my-16 gap-8">
        {services.map((service) => (
           <div key={service.title} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
              <p className="text-sm font-semibold text-primary">{service.pain}</p>
              <div className="flex items-center gap-3 mt-3">
                  {service.icon}
                  <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground flex-grow">{service.description}</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {service.kpi}</p>
                <Link href={service.href} className="stretched-link mt-4 flex items-center text-sm font-semibold text-primary" target={service.href.startsWith('http') ? '_blank' : '_self'} rel={service.href.startsWith('http') ? 'noopener noreferrer' : ''}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
          </div>
        ))}
      </div>

       <div className="prose prose-lg dark:prose-invert mx-auto my-16 max-w-4xl">
        <h2 className="text-center">Why an Integrated Approach Matters</h2>
        <p>
            In a traditional model, a CTO might have to juggle a recruiting agency, a separate EOR provider for payroll, an IT consultant for device security, and a law firm for compliance. This is not only inefficient but also creates dangerous gaps in accountability. If something goes wrong, who is responsible?
        </p>
        <p>
           Our integrated platform eliminates these gaps. From the moment you engage with us, every aspect of your nearshore operation is managed under our single, comprehensive Master Services Agreement (MSA). This unified approach provides clarity, reduces risk, and allows you to focus on what matters most: building great software.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Ready to Simplify Your Operations?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            Stop managing vendors and start building your product. Let our integrated platform handle the operational complexity for you.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Strategy Call</Link>      </div>

      <section className="my-16 border-t border-border pt-12">
        <h2 className="text-2xl font-bold">Why It Matters</h2>
        <p className="mt-2 text-muted-foreground">
          CTOs don’t buy marketing—they buy measurable velocity, compliance, and secure outcomes.
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-2 text-muted-foreground">
          <li><a href="/playbook" className="text-primary hover:underline">CTO Playbook</a></li>
          <li><a href="/comparisons" className="text-primary hover:underline">Vendor Comparisons</a></li>
          <li><a href="/hire/by-country/mexico" className="text-primary hover:underline">Hire in Mexico</a></li>
        </ul>
      </section>
    </main>
  );
}
