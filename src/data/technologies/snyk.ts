import { TechEntry } from "@/lib/tech";

import { Shield, Code, Box } from "lucide-react";

const snyk: TechEntry = {
  name: "Snyk",
  category: "DevOps & Cloud",
  categorySlug: "platform-infra-sre",
  seo_title: "Hire Snyk Experts | TeamStation AI",
  meta_description:
    "Hire Snyk experts to find and fix vulnerabilities in your code, dependencies, containers, and IaC. Get pre-vetted LATAM talent to secure your SDLC.",
  intro:
    "Snyk is a developer-first security platform that helps you find and fix vulnerabilities in your code, open source dependencies, container images, and infrastructure as code. Our expert engineers use Snyk to embed security into your development workflow, not slow it down.",
  pains: [
    {
      iconName: "AlertTriangle",
      pain: "Your application is riddled with open source vulnerabilities you don't know about.",
      problem:
        "Modern applications are built on a mountain of open source dependencies, each a potential vector for attack. Manually tracking and patching these vulnerabilities is impossible.",
      solution:
        "We integrate Snyk Open Source into your CI/CD pipeline to automatically scan dependencies, find vulnerabilities, and provide one-click fixes or automated pull requests.",
      kpi: "Reduce time-to-remediate critical vulnerabilities by 90%.",
    },
    {
      iconName: "AlertTriangle",
      pain: "Security issues are only found late in the cycle, causing delays and rework.",
      problem:
        "Static analysis (SAST) is slow, noisy, and run by a separate security team, creating a bottleneck. Developers get security feedback too late to be effective.",
      solution:
        "We implement Snyk Code within the developer's IDE and Git workflow, providing real-time, actionable feedback on security flaws as they write code.",
      kpi: "Fix vulnerabilities 10x faster with developer-first tooling.",
    },
    {
      iconName: "AlertTriangle",
      pain: "Container images and IaC configurations are a black box for security risks.",
      problem:
        "Your container images and Terraform/CloudFormation scripts have misconfigurations and vulnerabilities that could lead to a major breach, but you have no visibility.",
      solution:
        "We use Snyk Container and Snyk IaC to scan for vulnerabilities and misconfigurations, providing prioritized fixes and ensuring your deployments are secure from the start.",
      kpi: "Prevent 95% of container vulnerabilities from reaching production.",
    },
  ],
  evaluation: [
    "Deep expertise in configuring and integrating the Snyk platform (Open Source, Code, Container, IaC) across complex projects.",
    "Proven ability to build and enforce security policies and quality gates within CI/CD pipelines using Snyk.",
    "Experience in triaging and prioritizing vulnerabilities based on context and exploitability.",
    "Strong understanding of developer workflows and how to effectively embed security without causing friction.",
  ],
  technical_analysis:
    "Snyk's power comes from its developer-centric approach and its comprehensive vulnerability database. Our engineers are adept at leveraging Snyk’s CLI and API to create sophisticated automation. We configure Snyk to provide context-rich, prioritized, and actionable security insights, dramatically reducing the noise often associated with security tools. We focus on fine-tuning policies to align with your organization’s risk appetite, setting up automated pull requests for dependency upgrades, and using Snyk’s reporting to give you a clear view of your security posture over time. By integrating Snyk directly into the tools developers use every day—like VS Code, JetBrains, and GitHub—we make security a natural part of the development process.",
  interlink_slugs: ["security-engineering", "ci-cd", "docker", "terraform"],
};

export default snyk;
