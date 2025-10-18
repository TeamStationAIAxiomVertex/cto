import { TechEntry } from "@/lib/tech";

import { AlertTriangle } from "lucide-react";

const googleWorkspace: TechEntry = {
  name: "Google Workspace",
  category: "IT & Enterprise",
  categorySlug: "it-enterprise-ops",
  seo_title: "Hire Google Workspace Experts | TeamStation AI",
  meta_description:
    "Hire expert Google Workspace administrators to manage your company's collaboration and productivity tools. Get pre-vetted LATAM talent to secure your data, manage users, and optimize your Google Workspace environment.",
  intro:
    "Google Workspace is a suite of cloud-based productivity and collaboration tools, including Gmail, Drive, Docs, and Meet. Our IT experts specialize in managing and securing Google Workspace environments, ensuring your team can collaborate effectively while your company's data remains protected.",
  pains: [
    {
      iconName: "\1",
      pain: "Are you struggling to manage user accounts and permissions across your organization?",
      problem:
        "Onboarding and offboarding employees is a manual and error-prone process. You're concerned about former employees retaining access to sensitive company data, and it's difficult to ensure new employees have the right permissions from day one.",
      solution:
        "We use the **Google Workspace Admin Console to centralize user lifecycle management**. We create automated workflows for onboarding and offboarding, enforce strong password policies, and implement the principle of least privilege to ensure users only have access to the data and applications they need.",
      kpi: "Automate 95% of user onboarding/offboarding tasks and eliminate unauthorized access by former employees.",
    },
    {
      iconName: "\1",
      pain: "Are you concerned about the security of your company's data in the cloud?",
      problem:
        "Your company's sensitive information is stored in Gmail, Google Drive, and other Workspace apps. You're worried about data leaks, phishing attacks, and malware, but you lack the expertise to configure Google Workspace's advanced security features.",
      solution:
        "We implement **Google Workspace's advanced security features** to protect your data. This includes configuring data loss prevention (DLP) policies, setting up advanced phishing and malware protection, enforcing 2-Step Verification, and using security sandbox and context-aware access to prevent threats.",
      kpi: "Reduce data security incidents by 90% and block 99.9% of phishing attempts.",
    },
    {
      iconName: "\1",
      pain: "Is your team's collaboration inefficient and disorganized?",
      problem:
        "Your team is struggling to collaborate effectively. Files are hard to find in shared drives, there's no clear communication strategy, and you're not taking full advantage of the collaboration features available in Google Workspace.",
      solution:
        "We **optimize your Google Workspace for maximum collaboration**. We design an intuitive Shared Drive structure, establish best practices for communication in Chat and Meet, and provide training on advanced features in Docs, Sheets, and Slides to boost your team's productivity.",
      kpi: "Improve team productivity by 25% and reduce time spent searching for information.",
    },
  ],
  evaluation: [
    "Deep expertise in the Google Workspace Admin Console and all core applications.",
    "Google Certified Professional Collaboration Engineer or similar certification.",
    "Proven ability to manage and secure Google Workspace for organizations of all sizes.",
    "Experience with data migration, user lifecycle management, and security policy implementation.",
    "Proficiency in using Google Vault for eDiscovery and compliance.",
  ],
  technical_analysis:
    "Google Workspace is a powerful platform, but its effective administration requires deep technical knowledge. Our experts have a thorough understanding of the entire Workspace ecosystem. We are adept at configuring organizational units (OUs) to apply granular policies to different groups of users. We master the security settings, implementing everything from basic 2-Step Verification to advanced Context-Aware Access rules that control access based on user identity and device context. We are skilled in setting up and managing Data Loss Prevention (DLP) rules to prevent exfiltration of sensitive data, and we use Google Vault to manage data retention and eDiscovery for legal and compliance needs. Our expertise extends to managing third-party app integrations, controlling access via OAuth scopes, and analyzing audit logs to investigate security incidents. By entrusting your Google Workspace administration to our experts, you ensure a secure, compliant, and highly productive environment for your team.",
  interlink_slugs: [
    "okta",
    "jamf",
    "it-enterprise-ops",
    "security-engineering",
  ],
};

export default googleWorkspace;
