import Tooltip from "@/components/Tooltip";
import {
  BrainCircuit,
  FileText,
  ShieldCheck,
  Laptop,
  Building,
  Scale,
} from "lucide-react";

export default function Home() {
  const trustLines = [
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
        "We handle all Employer of Record (EOR) complexities, including local contracts, payroll, and benefits, so you can focus on your product.",
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
      <div className="hero section">
        <div>
          <h1 className="h1" style={{ fontSize: '3rem', fontWeight: 700 }}>
            Hire Elite LATAM Engineers—Fast, Fair, Day-One Ready
          </h1>
          <p className="lead max-w-2xl mx-auto my-6">
            Evidence-based technical interviews, language-fair scoring, and day-one onboarding—so you get the right engineer, started fast, and performing quickly.
          </p>
          <div className="text-accent my-6">
            9-day time-to-offer • 7-14 days to start • 96% 90-day retention • 50–70% savings vs. onshore
          </div>
          <div style={{ marginTop: "24px" }}>
            <a className="btn" style={{ padding: '12px 24px', background: 'transparent', borderWidth: '1px', borderColor: 'var(--line)', color: 'var(--text)' }} href="/hire/">
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>

       <div className="section">
        <h2 className="h2 text-center mt-0 mb-6">An Integrated Platform for Secure, Scalable Nearshore Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trustLines.map(line => (
              <div className="icon-card" key={line.title}>
                {line.icon}
                <div>
                  <h3 className="h3" style={{ margin: 0, fontSize: "1rem" }}>
                    {line.title}
                  </h3>
                   <p className="text-sm text-slate-400 m-0">{line.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>


      <div className="grid grid-2" style={{ marginTop: "24px" }}>
        <div className="card">
          <h2 className="h2" style={{ marginTop: 0 }}>
            CTO Playbook
          </h2>
          <p className="lead" style={{ fontSize: "1rem" }}>
            Field-tested guides for diagnosing and solving the critical
            challenges of scaling a remote engineering team.
          </p>
          <a href="/playbook/">Explore the Playbook →</a>
        </div>
        <div className="card">
          <h2 className="h2" style={{ marginTop: 0 }}>
            Case Studies
          </h2>
          <p className="lead" style={{ fontSize: "1rem" }}>
            See how we've helped CTOs solve critical issues, from resolving SSO
            failures to scaling monoliths for 15,000+ users.
          </p>
          <a href="/case-studies/">Review the evidence →</a>
        </div>
      </div>
    </main>
  );
}
