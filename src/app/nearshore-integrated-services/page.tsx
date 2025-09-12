import Tooltip from "@/components/Tooltip";
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
      icon: <BrainCircuit className="icon" />,
      title: "AI-Powered Vetting",
      description:
        "Our Axiom Cortex™ engine uses cognitive science to validate engineering skills beyond resumes, reducing hiring bias and increasing team performance.",
    },
    {
      icon: <FileText className="icon" />,
      title: "Nearshore EOR & Payroll",
      description:
        "We handle all Employer of Record (EOR) complexities, including local contracts, payroll, and benefits, mitigating your legal and financial risk.",
    },
    {
      icon: <ShieldCheck className="icon" />,
      title: "SOC 2 / ISO Alignment",
      description:
        "Our operations are aligned with SOC 2 and ISO 27001 standards, providing an audit-ready security posture from day one.",
    },
    {
      icon: <Laptop className="icon" />,
      title: "Secure Device & MDM",
      description:
        "We provision, secure, and manage all developer laptops with enterprise-grade Mobile Device Management (MDM), eliminating a major security risk.",
    },
    {
      icon: <Building className="icon" />,
      title: "LATAM Office Network",
      description:
        "Your team gets access to our network of secure, modern offices across Latin America for collaboration and reliable infrastructure.",
    },
    {
      icon: <Scale className="icon" />,
      title: "Cyber & E&O Insurance",
      description:
        "All work is covered by comprehensive Cybersecurity and Errors & Omissions (E&O) insurance, a level of protection most vendors don't offer.",
    },
  ];

  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / Services / Integrated Services
      </div>
      <header className="text-center my-8">
        <h1 className="h1">A Single SLA for Your Entire Nearshore Operation</h1>
        <p className="lead max-w-3xl mx-auto">
          TeamStation AI is not a collection of services; it's a single, unified platform that bundles everything you need to hire, run, and scale an elite nearshore engineering team. We replace multi-vendor complexity with one accountable partner.
        </p>
      </header>

      <div className="grid grid-3 my-12 gap-8">
        {services.map((service) => (
          <div className="icon-card" key={service.title}>
            {service.icon}
            <div>
              <h3 className="h3 mt-0">{service.title}</h3>
              <p className="text-sm text-slate-400 m-0">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

       <div className="prose mx-auto my-12">
        <h2 className="h2 text-center">Why an Integrated Approach Matters</h2>
        <p>
            In a traditional model, a CTO might have to juggle a recruiting agency, a separate EOR provider for payroll, an IT consultant for device security, and a law firm for compliance. This is not only inefficient but also creates dangerous gaps in accountability. If something goes wrong, who is responsible?
        </p>
        <p>
           Our integrated platform eliminates these gaps. From the moment you engage with us, every aspect of your nearshore operation is managed under our single, comprehensive Master Services Agreement (MSA). This unified approach provides clarity, reduces risk, and allows you to focus on what matters most: building great software.
        </p>
      </div>

      <div className="section text-center">
        <h2 className="h2 mt-0">Ready to Simplify Your Operations?</h2>
        <p className="lead" style={{fontSize: '1rem', maxWidth: '800px', margin: '0 auto 24px auto'}}>
            Stop managing vendors and start building your product. Let our integrated platform handle the operational complexity for you.
        </p>
        <a href="/hire" className="cta">Book a Strategy Call</a>
      </div>
    </main>
  );
}
