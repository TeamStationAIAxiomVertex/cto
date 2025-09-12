
import Link from "next/link";
import {
  BrainCircuit,
  FileText,
  ShieldCheck,
  Laptop,
  Building,
  Scale,
} from "lucide-react";

export default function IntegratedServicesPage() {
  const services = [
    {
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      title: "AI-Powered Vetting",
      description:
        "Our Axiom Cortex™ engine uses cognitive science to validate engineering skills beyond resumes, reducing hiring bias and increasing team performance.",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Nearshore EOR & Payroll",
      description:
        "We handle all Employer of Record (EOR) complexities, including local contracts, payroll, and benefits, mitigating your legal and financial risk.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "SOC 2 / ISO Alignment",
      description:
        "Our operations are aligned with SOC 2 and ISO 27001 standards, providing an audit-ready security posture from day one.",
    },
    {
      icon: <Laptop className="h-8 w-8 text-primary" />,
      title: "Secure Device & MDM",
      description:
        "We provision, secure, and manage all developer laptops with enterprise-grade Mobile Device Management (MDM), eliminating a major security risk.",
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "LATAM Office Network",
      description:
        "Your team gets access to our network of secure, modern offices across Latin America for collaboration and reliable infrastructure.",
    },
    {
      icon: <Scale className="h-8 w-8 text-primary" />,
      title: "Cyber & E&O Insurance",
      description:
        "All work is covered by comprehensive Cybersecurity and Errors & Omissions (E&O) insurance, a level of protection most vendors don't offer.",
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
          <div className="rounded-lg border bg-card p-8" key={service.title}>
            {service.icon}
            <h2 className="mt-4 text-xl font-bold">{service.title}</h2>
            <p className="mt-2 text-muted-foreground">{service.description}</p>
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

      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to Simplify Your Operations?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            Stop managing vendors and start building your product. Let our integrated platform handle the operational complexity for you.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Strategy Call</Link>
      </div>
    </main>
  );
}
