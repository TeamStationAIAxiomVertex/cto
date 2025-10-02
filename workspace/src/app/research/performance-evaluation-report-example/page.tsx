import React from "react";
import Link from "next/link";
import FurtherReading from "@/components/seo/FurtherReading";
import ValuePropositionBlock from "@/components/seo/ValuePropositionBlock";

export default function PerformanceEvaluationReportExample() {
  return (
    <main className="container py-12">
      <h1>Performance Evaluation Report Example</h1>
      <p>
        This example demonstrates how TeamStation AI measures engineering
        velocity and performance through data-driven evaluations.
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
