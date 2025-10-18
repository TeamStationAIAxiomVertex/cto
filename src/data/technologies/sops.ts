import { TechEntry } from "@/lib/tech";

import { AlertTriangle } from "lucide-react";

const sops: TechEntry = {
  name: "SOPS",
  category: "Security",
  categorySlug: "security-grc",
  seo_title: "Hire SOPS Experts | TeamStation AI",
  meta_description:
    "Hire expert SOPS developers to manage secrets securely and efficiently. Get pre-vetted LATAM talent to encrypt your secrets and commit them to Git safely.",
  intro:
    "SOPS (Secrets OPerationS) is an open-source editor for encrypted files that supports YAML, JSON, ENV, INI and BINARY formats and encrypts with AWS KMS, GCP KMS, Azure Key Vault, age, and PGP. Our security engineers use SOPS to encrypt secrets, enabling you to safely commit them to your Git repository.",
  pains: [
    {
      iconName: "\1",
      pain: "Are you struggling to manage secrets for your applications?",
      problem:
        "Managing secrets (like API keys, database passwords, and certificates) is a major security challenge. Storing them in plaintext in your code or configuration files is a huge security risk, but managing them in a separate system can be complex and cumbersome.",
      solution:
        "We use **SOPS to encrypt your secrets and store them directly in your Git repository**. This allows you to manage your secrets in the same way you manage your code, with versioning, pull requests, and code reviews, while ensuring that they are always encrypted and secure.",
      kpi: "Store secrets in Git with confidence, knowing they are encrypted and secure.",
    },
    {
      iconName: "\1",
      pain: "Is it difficult to share secrets securely with your team?",
      problem:
        "Sharing secrets with other developers and team members is often done through insecure channels like Slack, email, or text messages. This is a major security risk and makes it difficult to audit who has access to which secrets.",
      solution:
        "We use **SOPS with key management systems like AWS KMS, GCP KMS, or Azure Key Vault** to manage access to your secrets. This allows you to define granular access policies and audit who is encrypting and decrypting secrets, ensuring that only authorized users have access.",
      kpi: "Securely share secrets with your team and audit access with ease.",
    },
    {
      iconName: "\1",
      pain: "Is your secrets management workflow incompatible with your GitOps pipeline?",
      problem:
        "If you are using GitOps tools like Argo CD or Flux, you need a way to manage secrets that is compatible with your declarative, Git-based workflow. Traditional secrets management tools can be difficult to integrate with GitOps pipelines.",
      solution:
        "We use **SOPS to provide a seamless integration with your GitOps pipeline**. Since your encrypted secrets are stored in Git, your GitOps controller can automatically decrypt them at deployment time using a KMS key or a PGP key, enabling a fully automated and secure workflow.",
      kpi: "Achieve a fully automated and secure GitOps workflow with SOPS.",
    },
  ],
  evaluation: [
    "Deep expertise in SOPS and secrets management best practices.",
    "Proven ability to design and implement secure and scalable secrets management workflows.",
    "Experience integrating SOPS with various key management systems, such as AWS KMS, GCP KMS, and Azure Key Vault.",
    "Proficiency in using SOPS with GitOps tools like Argo CD and Flux.",
  ],
  technical_analysis:
    "SOPS is a powerful tool for managing secrets in a cloud-native environment. Our engineers are experts at using SOPS to encrypt a wide variety of file formats, including YAML, JSON, and .env files. We have extensive experience with the different SOPS backends, including AWS KMS, GCP KMS, Azure Key Vault, and PGP. We are also experts at configuring SOPS to work with your existing IAM roles and policies, ensuring that you have a secure and auditable secrets management workflow. For GitOps, we recommend using the SOPS integration for Flux or the SOPS plugin for Argo CD. This allows you to store your encrypted secrets in your Git repository and have them automatically decrypted by your GitOps controller at deployment time. By combining our deep knowledge of SOPS with our expertise in GitOps and cloud security, we can help you build a secure and scalable secrets management workflow that will meet the needs of your business.",
  interlink_slugs: [
    "vault",
    "external-secrets",
    "gitops",
    "security-engineering",
  ],
};

export default sops;
