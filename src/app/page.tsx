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
      <div className="breadcrumb">Home</div>
      <div className="hero section">
        <div>
          <span className="badge">Nearshore IT Co-Pilot™</span>
          <h1 className="h1">
            Hire. Onboard. Run LATAM Engineering — under one SLA.
          </h1>
          <p className="lead">
            An integrated platform for CTOs who need to ship faster without
            sacrificing security or quality. We provide the talent,
            governance, and infrastructure.
          </p>
          <div style={{ marginTop: "16px" }}>
            <a className="cta" href="/comparisons/">
              See how we compare →
            </a>
            <a className="btn" style={{ marginLeft: "8px" }} href="/pricing/">
              Transparent pricing
            </a>
          </div>
        </div>
        <div>
          <div className="grid grid-2">
            {trustLines.map((line) => (
              <div className="icon-card" key={line.title}>
                {line.icon}
                <div>
                  <h3 className="h3" style={{ margin: 0, fontSize: "1rem" }}>
                    <Tooltip text={line.description}>{line.title}</Tooltip>
                  </h3>
                </div>
              </div>
            ))}
          </div>
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
