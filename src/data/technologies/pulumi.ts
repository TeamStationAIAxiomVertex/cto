import type { TechEntry } from "@/lib/tech";
import { AlertTriangle } from "lucide-react";

const pulumi: TechEntry = {
  name: "Pulumi",
  category: "DevOps & Cloud",
  categorySlug: "platform-infra-sre",
  seo_title:
    "Hire Pulumi Experts | Infrastructure as Code with Programming Languages",
  meta_description:
    "Build and manage cloud infrastructure using familiar languages like TypeScript, Python, and Go. Hire elite remote Pulumi experts vetted for their deep understanding of IaC and multi-cloud deployments. Book a call.",
  intro:
    "Pulumi allows you to define and deploy cloud infrastructure using general-purpose programming languages. You need an engineer who can leverage the full power of a real programming language—loops, functions, classes, and package management—to create highly dynamic and reusable infrastructure code. Our vetting process identifies developers who are experts in Pulumi's programming model and its integration with cloud providers. By hiring a Pulumi expert, you get a developer who can build a modern, automated, and observable IaC practice that is more flexible and powerful than traditional DSL-based tools.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "Are you hitting the limits of your declarative IaC language?",
      problem:
        "Traditional IaC languages like HCL (Terraform) or YAML are limited. They lack the expressive power of a real programming language, making it difficult to implement complex logic, reuse code effectively, or integrate with existing software engineering workflows.",
      solution:
        "We vet for experts in <strong>Pulumi's imperative approach</strong>. Our engineers can use familiar languages like TypeScript or Python to build dynamic and highly abstract infrastructure components, bringing the full power of software engineering to your IaC.",
      kpi: "Dynamic and Reusable Infrastructure Components",
    },
    {
      icon: AlertTriangle,
      pain: "Is testing your infrastructure code difficult and unreliable?",
      problem:
        "Testing infrastructure defined in a DSL is often limited to static analysis or requires spinning up real resources, which is slow and expensive. This makes it difficult to catch bugs early and have high confidence in your changes.",
      solution:
        "Our engineers are masters of <strong>testing with Pulumi</strong>. They are vetted on their ability to write unit tests for their infrastructure code using standard testing frameworks (like Jest or PyTest), allowing for fast, reliable, and offline validation of your IaC logic.",
      kpi: "Comprehensive Unit Testing for Infrastructure",
    },
    {
      icon: AlertTriangle,
      pain: "Are you struggling to manage infrastructure across multiple cloud providers?",
      problem:
        "Managing a multi-cloud environment with different toolsets for each provider is a complex and fragmented process. This increases operational overhead and makes it difficult to have a unified view of your infrastructure.",
      solution:
        "We look for engineers proficient in <strong>multi-cloud deployments with Pulumi</strong>. They are vetted on their ability to use a single language and workflow to provision and manage resources across AWS, Azure, and GCP, simplifying your multi-cloud strategy and reducing operational complexity.",
      kpi: "Unified Multi-Cloud Infrastructure Management",
    },
  ],
  evaluation: [
    "Pulumi programming model and core concepts (Stack, Project, Config)",
    "Infrastructure as Code with general-purpose languages (TypeScript, Python)",
    "Unit testing infrastructure code",
    "Multi-cloud deployment strategies",
    "State management and integration with Pulumi Service",
  ],
  technical_analysis:
    "The Pulumi evaluation is focused on a candidate's ability to leverage a real programming language for infrastructure management. We assess their understanding of Pulumi's core concepts and their ability to design and implement a complex, multi-cloud infrastructure using TypeScript or Python. A critical part of the evaluation is their mastery of **unit testing infrastructure code**; candidates must demonstrate how to write tests for their infrastructure logic without needing to provision any cloud resources. We also test their ability to create and use **Component Resources** to build reusable, high-level abstractions. Finally, we assess their knowledge of Pulumi's state management and how to use the Pulumi Service for team collaboration and policy enforcement.",
  interlink_slugs: ["terraform", "aws", "azure", "google-cloud"],
};

export default pulumi;
