import { AlertTriangle } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const ansible: TechEntry = {
  name: "Ansible",
  category: "Platform / Infra / SRE",
  categorySlug: "platform-infra-sre",
  seo_title:
    "Hire Senior Ansible Experts | Automation and Configuration Management Specialists",
  meta_description:
    "Hire elite Ansible experts specializing in building, managing, and scaling automated infrastructure across all major cloud providers.",
  intro:
    "Ansible is a powerful and versatile automation engine. Our Ansible experts are vetted for their ability to write clean, modular, and maintainable playbooks that can be used to manage complex, multi-cloud deployments. They are the specialists who enable your teams to build and manage infrastructure with confidence.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "Our Ansible playbooks are a mess of spaghetti code.",
      problem:
        "Poorly written Ansible playbooks are difficult to understand, maintain, and reuse, leading to configuration drift and a lack of confidence in your infrastructure.",
      solution:
        "We vet for mastery in **Ansible best practices**. Our engineers write clean, modular, and well-documented playbooks that are easy to understand, maintain, and reuse.",
      kpi: "90% Code Reusability",
    },
    {
      icon: AlertTriangle,
      pain: "We're struggling to manage our multi-cloud infrastructure.",
      problem:
        "Managing infrastructure across multiple cloud providers is complex and error-prone, leading to inconsistent configurations and a lack of visibility.",
      solution:
        "Our experts are tested on **multi-cloud deployments**. They use Ansible to create a single, unified workflow for managing infrastructure across all major cloud providers.",
      kpi: "100% Infrastructure Consistency",
    },
    {
      icon: AlertTriangle,
      pain: "Our infrastructure is not reproducible.",
      problem:
        "Manual changes and a lack of version control make it impossible to reproduce your infrastructure, leading to configuration drift and a fear of making changes.",
      solution:
        "We vet for expertise in building **immutable infrastructure**. Our engineers use Ansible to create a version-controlled, auditable, and reproducible infrastructure that can be deployed with confidence.",
      kpi: "100% Reproducibility",
    },
  ],
  evaluation: [
    "Deep understanding of Ansible's core concepts (playbooks, roles, modules).",
    "Mastery of Ansible best practices (clean, modular, and maintainable playbooks).",
    "Proficiency in managing complex, multi-cloud deployments.",
    "Experience with building and managing CI/CD pipelines for Ansible.",
    "Expertise in writing and using Ansible roles.",
  ],
  technical_analysis:
    "The Ansible vetting process is rigorous and hands-on. Candidates are required to write Ansible playbooks to provision a complex, multi-cloud infrastructure from scratch. We test their ability to write clean, modular, and maintainable playbooks, as well as their understanding of Ansible best practices. We also assess their experience with building and managing CI/CD pipelines for Ansible, and their ability to write and use Ansible roles.",
  interlink_slugs: ["terraform", "docker", "kubernetes", "ci-cd", "python"],
  is_ready: true,
};

export default ansible;
