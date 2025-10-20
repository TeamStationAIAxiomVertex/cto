import type { TechEntry } from "@/lib/tech";
import { AlertTriangle, Workflow, ShieldCheck } from "lucide-react";

const dbt: TechEntry = {
  name: "dbt",
  category: "Data & AI",
  categorySlug: "data-ai",
  seo_title: "Hire dbt Developers | Analytics Engineering Experts",
  meta_description:
    "Hire elite dbt developers to bring software engineering best practices to your analytics workflow. Our vetted talent builds modular, tested, and documented data models you can trust.",
  intro:
    "dbt (Data Build Tool) is the core of modern **Analytics Engineering**. It’s not about writing SQL; it’s about treating analytics as a professional software engineering discipline. You need an expert who can transform your chaotic warehouse of tangled SQL scripts into a modular, version-controlled, and tested data asset. Our vetting identifies engineers who use dbt to build trust in your data, accelerate analytics development, and create a common language between data producers and consumers.",
  pains: [
    {
      icon: AlertTriangle,
      pain: '"Spaghetti SQL" and Untrustworthy Data Models',
      problem:
        "Your data warehouse is a black box of complex, undocumented SQL scripts. Business logic is duplicated and contradictory, nobody knows which tables to use, and a small change can break dozens of downstream reports.",
      solution:
        "A dbt expert refactors this chaos into a modular, layered data model. They use dbt to enforce dependencies (DAG), document every field, and implement version control, creating a single source of truth that is easy to understand and safe to modify.",
      kpi: "Reduce data model-related errors in reporting by 95%.",
    },
    {
      icon: AlertTriangle,
      pain: "No Testing for Your Most Critical Business Logic",
      problem:
        "Your most critical business logic—how you define revenue, active users, and other key metrics—lives in SQL with zero automated testing. You only find out about errors when an executive questions a dashboard.",
      solution:
        "Our dbt specialists implement a robust testing framework directly on your data models. They write tests for uniqueness, referential integrity, and custom business logic, ensuring that data is validated before it ever reaches a user.",
      kpi: "Achieve 100% test coverage for all critical business logic in the data warehouse.",
    },
    {
      icon: AlertTriangle,
      pain: "Slow, Manual, and Error-Prone Analytics Workflow",
      problem:
        "Onboarding new analysts takes months because they have to reverse-engineer years of undocumented SQL. Collaboration is impossible, and every change is a high-risk manual deployment.",
      solution:
        "A TeamStation dbt engineer builds a professional analytics development workflow. They integrate dbt with CI/CD to automate testing and deployment, use dbt Docs to provide living documentation, and create a modular codebase that is easy for new team members to contribute to.",
      kpi: "Reduce analyst onboarding time by 80% and accelerate analytics development cycles by 50%.",
    },
  ],
  evaluation: [
    "Deep expertise in Analytics Engineering principles and the dbt Core/Cloud platforms.",
    "Proven ability to design and implement modular data models using dbt.",
    "Mastery of dbt’s testing framework (schema and data tests).",
    "Proficiency in integrating dbt with CI/CD pipelines for automated deployments.",
    "Skills in performance tuning dbt models and optimizing warehouse compute.",
  ],
  technical_analysis:
    "The Axiom Cortex™ evaluation for dbt developers centers on their ability to build a professional-grade analytics engineering practice. Candidates must demonstrate how they would structure a complex dbt project for scalability and maintainability. We assess their ability to write custom tests and macros to solve complex business problems, and their experience with dbt’s deployment and documentation features. This ensures our engineers are not just dbt users, but true analytics engineers who can build the robust, trustworthy data models that your business needs to make critical decisions.",
  interlink_slugs: ["data-engineering", "sql", "snowflake", "ci-cd"],
  is_ready: true,
};

export default dbt;
