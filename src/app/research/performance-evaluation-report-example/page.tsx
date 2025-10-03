
import React from "react";
import Link from "next/link";
import FurtherReading from "../../../components/seo/FurtherReading";
import { DecisionCard } from "../../../components/ui/DecisionCard";

export default function PerformanceEvaluationReportExample() {
  return (
    <main className="container py-12">
      <h1>Performance Evaluation Report Example</h1>
      <p>
        This example demonstrates how TeamStation AI measures engineering
        velocity and performance through data-driven evaluations.
      </p>
      <DecisionCard
          problem="CTOs face hidden risks in cost, compliance, and velocity when using legacy staffing models."
          stakes="Without addressing these fundamental issues, budgets spiral, projects miss critical deadlines, and security incidents become inevitable."
          approach="TeamStation AI's integrated platform delivers pre-vetted LATAM talent, audit-ready compliance with secure devices, and a predictable Total Cost of Ownership."
          evidence="On average, clients see a 40–60% lower TCO versus traditional models and US hiring. Case studies like [Currance](/case-studies) and [Parsable](/case-studies/parsable) demonstrate measurable improvements in velocity and security posture."
          related={[
            { label: "CTO Playbook", href: "/playbook/hub" },
            { label: "Our Vetting Process", href: "/technical-interview-evaluation" },
            { label: "Hire in Mexico", href: "/hire/by-country/mexico" }
          ]}
        />
      <FurtherReading />
    </main>
  );
}
