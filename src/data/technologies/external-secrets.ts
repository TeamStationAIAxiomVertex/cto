import { TechEntry } from "@/lib/tech";
import { AlertTriangle } from "lucide-react";

const externalSecrets: TechEntry = {
  name: "External Secrets Operator",
  category: "DevOps & Cloud",
  categorySlug: "platform-infra-sre",
  seo_title: "Hire External Secrets Operator Experts | Kubernetes Security",
  meta_description: "Synchronize secrets from external APIs into Kubernetes. Hire elite remote External Secrets Operator experts vetted for secure and automated secrets management. Book a call.",
  intro: "External Secrets Operator (ESO) is a Kubernetes operator that synchronizes secrets from external secret management systems like AWS Secrets Manager, HashiCorp Vault, or Google Secret Manager into Kubernetes Secrets. You need an engineer who can use ESO to provide a secure and automated way to manage secrets in your cluster. Our vetting process identifies developers who are experts in Kubernetes security and secrets management. By hiring an ESO expert, you get a developer who can build a modern, secure, and automated secrets management workflow.",
  pains: [
    {
      iconName: "\1",
      pain: "Are you manually creating and managing Kubernetes Secrets?",
      problem: "Manually creating and managing Kubernetes Secrets is a tedious and error-prone process. It's difficult to keep secrets in sync with your external secret management system, and it creates a security risk if secrets are accidentally committed to Git.",
      solution: "We vet for experts in <strong>automated secrets synchronization</strong>. Our engineers use External Secrets Operator to automatically create and update Kubernetes Secrets from your external secret management system, ensuring that your applications always have the latest credentials without any manual intervention.",
      kpi: "Automated and Secure Secrets Synchronization"
    },
    {
      iconName: "\1",
      pain: "Is rotating secrets a high-risk, manual process?",
      problem: "Rotating secrets across a large number of applications and environments is a complex and high-risk task. A single mistake can lead to application downtime and a lot of manual cleanup.",
      solution: "Our engineers are masters of <strong>automated secret rotation</strong>. They are vetted on their ability to use External Secrets Operator to automatically rotate secrets in your Kubernetes cluster, ensuring that your applications can seamlessly pick up the new credentials without any downtime.",
      kpi: "Seamless and Automated Secret Rotation"
    },
    {
      iconName: "\1",
      pain: "Are you struggling to provide a consistent secret management experience for your developers?",
      problem: "Without a standardized way to access secrets, developers have to learn the specifics of each secret management system. This increases cognitive load and slows down development.",
      solution: "We look for engineers proficient in building a <strong>unified secrets management workflow</strong>. They are vetted on their ability to use External Secrets Operator to provide a consistent, Kubernetes-native way for applications to consume secrets, regardless of where those secrets are stored.",
      kpi: "A Unified, Kubernetes-Native Secrets Management Workflow"
    }
  ],
  evaluation: [
    "External Secrets Operator architecture and core concepts",
    "Integration with external secret management systems (AWS, Vault, etc.)",
    "Secret synchronization and rotation strategies",
    "Security and RBAC for External Secrets Operator",
    "Troubleshooting and debugging synchronization issues"
  ],
  technical_analysis: "The External Secrets Operator evaluation focuses on a candidate's ability to build a secure and automated secrets management workflow for Kubernetes. We assess their understanding of how ESO works and their ability to configure it to sync secrets from various providers. A critical part of the evaluation is their mastery of **secret synchronization and rotation**; candidates must demonstrate how to configure ESO to automatically rotate secrets and how applications can consume the updated secrets without downtime. We also test their knowledge of the security implications, including how to configure RBAC to restrict access to the ExternalSecrets resources.",
  interlink_slugs: ["kubernetes", "vault", "aws", "security-engineering"],
};

export default externalSecrets;
