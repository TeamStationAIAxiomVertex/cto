
import { Code, Cloud, Repeat, Shield } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const terraform: TechEntry = {
    name: "Terraform",
    category: "DevOps & Cloud Infrastructure",
    categorySlug: "devops-cloud",
    seo_title: "Hire Senior Terraform Experts | Infrastructure as Code (IaC) Specialists",
    meta_description: "Hire elite Terraform experts specializing in building, managing, and scaling immutable infrastructure across all major cloud providers.",
    intro: "Terraform is the industry standard for Infrastructure as Code. Our Terraform experts are vetted for their ability to write clean, modular, and maintainable Terraform code that can be used to manage complex, multi-cloud deployments. They are the specialists who enable your teams to build and manage infrastructure with confidence.",
    pains: [
        {
            icon: Code,
            pain: "Our Terraform code is a mess of spaghetti code.",
            problem: "Poorly written Terraform code is difficult to understand, maintain, and reuse, leading to configuration drift and a lack of confidence in your infrastructure.",
            solution: "We vet for mastery in **Terraform best practices**. Our engineers write clean, modular, and well-documented code that is easy to understand, maintain, and reuse.",
            kpi: "90% Code Reusability"
        },
        {
            icon: Cloud,
            pain: "We're struggling to manage our multi-cloud infrastructure.",
            problem: "Managing infrastructure across multiple cloud providers is complex and error-prone, leading to inconsistent configurations and a lack of visibility.",
            solution: "Our experts are tested on **multi-cloud deployments**. They use Terraform to create a single, unified workflow for managing infrastructure across all major cloud providers.",
            kpi: "100% Infrastructure Consistency"
        },
        {
            icon: Repeat,
            pain: "Our infrastructure is not reproducible.",
            problem: "Manual changes and a lack of version control make it impossible to reproduce your infrastructure, leading to configuration drift and a fear of making changes.",
            solution: "We vet for expertise in building **immutable infrastructure**. Our engineers use Terraform to create a version-controlled, auditable, and reproducible infrastructure that can be deployed with confidence.",
            kpi: "100% Reproducibility"
        }
    ],
    evaluation: [
        "Deep understanding of Terraform's core concepts (providers, resources, modules).",
        "Mastery of Terraform best practices (clean, modular, and maintainable code).",
        "Proficiency in managing complex, multi-cloud deployments.",
        "Experience with building and managing CI/CD pipelines for Terraform.",
        "Expertise in writing and using Terraform modules.",
    ],
    technical_analysis: "The Terraform vetting process is rigorous and hands-on. Candidates are required to write Terraform code to provision a complex, multi-cloud infrastructure from scratch. We test their ability to write clean, modular, and maintainable code, as well as their understanding of Terraform best practices. We also assess their experience with building and managing CI/CD pipelines for Terraform, and their ability to write and use Terraform modules.",
    interlink_slugs: ["aws", "google-cloud", "azure", "kubernetes", "ci-cd"],
    is_ready: true,
};

export default terraform;
