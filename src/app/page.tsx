import Image from "next/image";

export default function Home() {
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
            Cognitive AI vetting (44 signals), EOR/payroll & compliance, secure
            devices & MDM, offices/workspaces, cyber/E&O insurance, Day-1
            onboarding and performance diagnostics.
          </p>
          <div style={{ marginTop: "16px" }}>
            <a className="cta" href="/comparisons/all-vendors/">
              See how we compare →
            </a>
            <a className="btn" style={{ marginLeft: "8px" }} href="/pricing/">
              Transparent pricing
            </a>
          </div>
        </div>
        <div className="card">
          <p className="lead">Astronaut Image Placeholder</p>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h2 className="h2">Playbook</h2>
          <p className="lead">
            Pillars for high-performance nearshore teams.
          </p>
          <a href="/playbook/">Explore →</a>
        </div>
        <div className="card">
          <h2 className="h2">Comparisons</h2>
          <p className="lead">TeamStation vs top nearshore vendors.</p>
          <a href="/comparisons/">Open →</a>
        </div>
      </div>
    </main>
  );
}