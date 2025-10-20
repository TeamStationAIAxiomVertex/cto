import type { TechEntry } from "@/lib/tech";
import { AlertTriangle, Workflow, ShieldCheck } from "lucide-react";

const pact: TechEntry = {
  name: "Pact",
  category: "QA & Security",
  // FIX: Ensure this matches the parent category slug: 'qa-quality-engineering'
  categorySlug: "qa-quality-engineering",
  seo_title:
    "Hire Pact Experts | Consumer-Driven Contract Testing & Microservices QA",
  meta_description:
    "Hire elite Pact experts for robust contract testing. Our vetted talent ensures microservices communicate reliably and integrates contract testing into CI/CD for pre-deployment confidence.",
  intro:
    "Pact is the premier framework for **Consumer-Driven Contract Testing**, replacing slow, fragile end-to-end integration tests. You need an engineer who can define and enforce reliable contracts between microservices. Our vetting focuses on engineers who can eliminate service dependency bottlenecks, leverage the Pact Broker for verification, and dramatically accelerate your deployment frequency.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "Integration Test Hell: Slow and Brittle Deployments",
      problem:
        "Your reliance on full-stack integration tests makes your CI/CD pipeline slow, expensive, and a single point of failure. Deployments are stalled waiting for the entire environment to be ready.",
      solution:
        "Pact experts implement consumer-driven contract testing, allowing services to be verified independently. This replaces slow integration tests with fast, reliable contract checks run in isolation.",
      kpi: "80% reduction in integration test suite run times and CI time.",
    },
    {
      icon: AlertTriangle,
      pain: "Uncontrolled Microservice Mismatches in Production",
      problem:
        "When an API provider changes its output, consumer services fail silently in production because there is no mechanism to check compatibility *before* deployment.",
      solution:
        "Our experts establish a **Pact Broker** workflow for continuous verification. This provides immediate, real-time visibility into service compatibility, allowing providers to see breaking changes before they deploy.",
      kpi: "95% decrease in production incidents caused by breaking API changes.",
    },
    {
      icon: AlertTriangle,
      pain: "Lack of Clear, Enforceable API Contracts",
      problem:
        "API documentation is often outdated or ambiguous, leading to integration bugs, development rework, and a breakdown of trust between service teams.",
      solution:
        "With Pact, the contract is code—an executable, verifiable artifact. This ensures that documentation is always synchronized with reality, creating a single source of truth for service interactions.",
      kpi: "50% faster feature delivery due to parallelized, non-blocking development.",
    },
  ],
  evaluation: [
    "Deep mastery of Consumer-Driven Contract Testing principles.",
    "Expertise with the Pact Broker for contract sharing, verification, and versioning.",
    'Ability to integrate Pact into CI/CD pipelines (e.g., "can-i-deploy" check).',
    "Proficiency in both consumer-side and provider-side testing across various languages.",
    "Strategies for handling evolving contracts, messaging queues, and state management.",
  ],
  technical_analysis:
    'The Axiom Cortex™ evaluation for Pact developers is centered on operational rigor within a microservices environment. Candidates must demonstrate the ability to design and implement a contract testing strategy from scratch, including writing both consumer and provider verification tests. We assess their fluency with the **Pact Broker** to manage contract lifecycles, and their ability to integrate the "can-i-deploy" tool into a CI/CD pipeline, proving they can guarantee safe deployments. This guarantees the candidate can implement a production-ready, contract-first development workflow that eliminates integration surprises.',
  interlink_slugs: [
    "microservices",
    "ci-cd",
    "qa-quality-engineering", // Use the correct, fixed category slug for interlinking
    "devops-engineering",
  ],
  // CRITICAL FIX: Set the page to be built and indexed
  is_ready: true,
};

export default pact;
