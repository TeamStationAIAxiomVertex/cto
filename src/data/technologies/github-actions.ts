import type { TechEntry } from "@/lib/tech";

import { AlertTriangle, Clock, Shield } from "lucide-react";

const githubActions: TechEntry = {
  name: "GitHub Actions",
  category: "DevOps & Cloud",
  categorySlug: "platform-infra-sre",
  seo_title: "Hire GitHub Actions Experts | TeamStation AI",
  meta_description:
    "Hire elite GitHub Actions engineers to automate your CI/CD pipelines, improve code quality, and accelerate your deployments. Get pre-vetted LATAM talent.",
  intro:
    "GitHub Actions is a powerful CI/CD platform integrated directly into your GitHub repository. Our expert engineers leverage GitHub Actions to create robust, automated workflows that build, test, and deploy your code with speed and reliability.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "Slow, manual deployments are killing your team's velocity and introducing errors.",
      problem:
        "Your developers are bogged down by manual build and deployment processes, leading to context switching, long feedback loops, and a high risk of human error.",
      solution:
        "We design and implement fully automated CI/CD pipelines using GitHub Actions, enabling one-click or push-to-deploy workflows that are fast, repeatable, and secure.",
      kpi: "Reduce deployment time from hours to minutes.",
    },
    {
      icon: AlertTriangle,
      pain: "Inconsistent environments and failed deployments are eroding trust in your release process.",
      problem:
        "A lack of standardized pipelines means every deployment is a gamble. Inconsistencies between development, staging, and production lead to unexpected failures.",
      solution:
        "We create reusable and templated GitHub Actions workflows that ensure consistency across all environments, reducing failures and increasing developer confidence.",
      kpi: "Increase deployment success rate to over 99%.",
    },
    {
      icon: AlertTriangle,
      pain: "Security and compliance checks are manual, slow, and often skipped under pressure.",
      problem:
        "Critical security scans, linting, and quality checks are not integrated into the development lifecycle, exposing your application to vulnerabilities and technical debt.",
      solution:
        "We integrate automated security scanning (SAST, DAST), code quality analysis, and policy enforcement directly into your GitHub Actions pipelines, shifting security left.",
      kpi: "Catch 80% more vulnerabilities before they reach production.",
    },
  ],
  evaluation: [
    "Deep understanding of GitHub Actions syntax, including reusable workflows, custom actions, and matrix builds.",
    "Proven experience in designing and implementing complex CI/CD pipelines for various application types (e.g., web apps, microservices, mobile).",
    "Expertise in integrating security tools (Snyk, CodeQL, Trivy) and quality checks into automated workflows.",
    "Ability to optimize pipeline performance and cost by using caching, artifact management, and self-hosted runners.",
  ],
  technical_analysis:
    "GitHub Actions has become a dominant force in the CI/CD landscape due to its tight integration with the GitHub ecosystem. Its key strengths lie in its developer-friendly YAML syntax, a vast marketplace of pre-built actions, and robust support for container-based workflows. Our engineers are experts in leveraging features like reusable workflows (`workflow_call`) for maintaining DRY principles across large projects, and composite actions for encapsulating complex logic. We focus on building secure and efficient pipelines by default, incorporating secrets management via GitHub encrypted secrets or integration with external vaults like HashiCorp Vault, and optimizing build times through intelligent caching strategies for dependencies and Docker layers.",
  interlink_slugs: ["ci-cd", "docker", "terraform", "snyk"],
};

export default githubActions;
