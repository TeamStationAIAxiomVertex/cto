import { AlertTriangle } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const vault: TechEntry = {
  name: "Vault",
  category: "DevOps & Cloud",
  categorySlug: "devops-cloud",
  seo_title:
    "Hire Vault Experts | Secrets Management & DevOps Security Consultants",
  meta_description:
    "Build a secure, automated, and centralized secrets management platform. Hire elite remote Vault experts vetted for their deep understanding of secrets management, from the storage backend to the auth method. Book a call.",
  intro:
    "Vault is the de facto standard for secrets management. You need an engineer who understands that building a modern, secure application is not just about writing code, but about a deep understanding of the entire secrets management lifecycle, from the secure storage of secrets to the dynamic generation of just-in-time credentials. Our vetting process identifies developers who are experts in the HashiCorp ecosystem and can architect a secrets management platform that is as secure, efficient, and automated as it is scalable. By hiring a Vault expert, you get a developer who can build a modern, automated, and observable system that is a joy to use, and a joy to maintain.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "Are your secrets scattered across config files, environment variables, and code?",
      problem:
        "In many organizations, secrets are scattered across config files, environment variables, and code. This can lead to a user experience that is filled with security vulnerabilities and a codebase that is a mess of hardcoded credentials and other sensitive data.",
      solution:
        "We vet for experts in **Vault and secrets management**. Our engineers are proficient in using Vault to build a secure, automated, and centralized secrets management platform. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
      kpi: "A Secure, Automated, and Centralized Secrets Management Platform",
    },
    {
      icon: AlertTriangle,
      pain: "Is your application not portable across different environments?",
      problem:
        "Many applications are not built to be portable across different environments. This can lead to a codebase that is a mess of environment-specific hacks and workarounds, and a cloud bill that is out of control.",
      solution:
        "Our engineers are masters of **Vault and the modern DevOps ecosystem**. They are vetted on their ability to use Vault to build a portable, environment-agnostic application. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
      kpi: "A Portable, Environment-Agnostic Application",
    },
    {
      icon: AlertTriangle,
      pain: "Is your team not leveraging the full power of the secrets management ecosystem?",
      problem:
        "The secrets management ecosystem is vast and powerful, but many teams are not leveraging its full potential. This can lead to a codebase that is a mess of reinvented wheels and a user experience that is not as rich as it could be.",
      solution:
        "We look for engineers proficient with **the secrets management ecosystem and the Vault API**. They are vetted on their ability to build applications that are powered by the best of the secrets management ecosystem. This results in a user experience that is a joy to use for everyone, and a codebase that is easy to maintain and test.",
      kpi: "An Application That is Powered by the Best of the Secrets Management Ecosystem",
    },
  ],
  evaluation: [
    "The Vault CLI and the API",
    "Secrets management and the HashiCorp ecosystem",
    "The Vault storage backend and the auth method",
    "Vault security and best practices",
    "Vault on Kubernetes",
  ],
  technical_analysis:
    "The Vault evaluation focuses on a candidate's ability to build a secure, automated, and centralized secrets management platform. We assess their understanding of the entire secrets management ecosystem, requiring them to design a complex application with a clean, automated, and observable architecture. A critical part of the evaluation is their mastery of **the Vault CLI and the API**; candidates must demonstrate how to use the Vault CLI to manage the entire lifecycle of a secret, and how to use the API to programmatically access and manage secrets. We also test their ability to build **portable and environment-agnostic** applications that can run on any environment. Finally, we assess their knowledge of the Vault storage backend and the auth method, and their ability to leverage them to build a modern, high-performance backend.",
  interlink_slugs: ["terraform", "kubernetes", "docker", "devops-engineering"],
};

export default vault;
