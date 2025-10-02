
import React from "react";
import Link from "next/link";
import FurtherReading from "@/components/seo/FurtherReading";
import ValuePropositionBlock from "@/components/seo/ValuePropositionBlock";

export default function IntegratedServicesPage() {
  return (
    <main className="container py-12">
      <h1>Integrated Services</h1>
      <p>
        TeamStation AI integrates compliance, device management, and engineering
        pods into a seamless Nearshore IT Co-Pilot.
      </p>
       <ValuePropositionBlock
            pain="CTOs face hidden risks in cost, compliance, and velocity."
            stakes="Without addressing these, budgets spiral and projects miss critical deadlines."
            prescription="TeamStation AI delivers audit-ready compliance, Axiom Cortex™ cognitive vetting, and predictable TCO."
            proof="40–60% lower TCO vs legacy models. Case studies: [Currance](/case-studies), [Parsable](/case-studies/parsable)."
        />
      <FurtherReading />
    </main>
  );
}
