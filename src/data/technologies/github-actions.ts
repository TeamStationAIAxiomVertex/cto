
import { AlertTriangle } from "lucide-react";
import { TechEntry } from "@/lib/tech";

const githubActions: TechEntry = {
    name: "GitHub Actions",
    category: "DevOps & Cloud",
    categorySlug: "devops-cloud",
    seo_title: "Hire GitHub Actions Experts | CI/CD & DevOps Automation",
    meta_description: "Automate your software delivery lifecycle. Hire elite remote GitHub Actions experts vetted for building complex workflows, custom actions, and secure deployment pipelines. Book a call.",
    intro: "GitHub Actions is a powerful and flexible CI/CD platform deeply integrated into the GitHub developer workflow. You need an engineer who can leverage its full potential to automate everything from testing and security scanning to deployments and infrastructure provisioning. Our vetting process identifies developers who are experts in designing complex, reusable workflows, creating custom actions, and implementing secure deployment patterns. By hiring a GitHub Actions expert, you get a developer who can transform your repository into a fully automated, high-velocity software delivery machine.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are your CI/CD pipelines slow, brittle, and difficult to maintain?",
            problem: "Monolithic, single-file workflows with a lot of duplicated code are hard to manage and slow to execute. This leads to long feedback cycles for developers and a CI/CD process that becomes a bottleneck rather than an accelerator.",
            solution: "We vet for experts in **reusable and composite workflows**. Our engineers are proficient in breaking down complex pipelines into smaller, reusable workflows and creating custom actions to encapsulate common tasks. This results in a clean, modular, and maintainable automation codebase.",
            kpi: "Modular Workflows and Custom Actions"
        },
        {
            icon: AlertTriangle,
            pain: "Is your deployment process insecure and exposing secrets?",
            problem: "Hardcoding secrets in your workflow YAML files is a massive security risk. Without proper secret management and environment protection rules, anyone with repository access could potentially deploy to production or expose sensitive credentials.",
            solution: "Our engineers are masters of **secure deployments with GitHub Actions**. They are vetted on their ability to use encrypted secrets, OpenID Connect (OIDC) for cloud authentication, and environment protection rules to create a secure, auditable path to production.",
            kpi: "Secure Deployments with OIDC and Environment Protection"
        },
        {
            icon: AlertTriangle,
            pain: "Are you struggling to manage complex workflows for monorepos?",
            problem: "In a monorepo, you want to run CI/CD pipelines only for the specific projects that have changed. A naive setup that triggers all workflows on every commit is incredibly inefficient and wastes a huge amount of compute time and money.",
            solution: "We look for engineers proficient in **monorepo workflow optimization**. They are vetted on their ability to use path filtering and matrix strategies to dynamically run only the necessary jobs, ensuring a fast and cost-effective CI/CD process for your monorepo.",
            kpi: "Optimized Monorepo Workflows"
        }
    ],
    evaluation: [
        "Workflow syntax and event triggers",
        "Reusable workflows and custom actions",
        "Matrix strategies and parallelism",
        "Security (secrets, OIDC, environment protection)",
        "Integration with the GitHub ecosystem (e.g., CodeQL, Dependabot)"
    ],
    technical_analysis: "The GitHub Actions evaluation focuses on a candidate's ability to build complex, secure, and efficient CI/CD pipelines. We assess their understanding of the workflow syntax, including advanced features like expressions and contexts. A critical part of the evaluation is their ability to design a secure deployment workflow using OpenID Connect (OIDC) to authenticate with a cloud provider without storing long-lived credentials. We also test their knowledge of creating and using custom actions to promote code reuse. Finally, we assess their ability to optimize workflows for performance and cost, particularly in a monorepo context.",
    interlink_slugs: ["ci-cd", "docker", "terraform", "devops-engineering"]
};

export default githubActions;
