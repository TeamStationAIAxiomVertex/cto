
import { Server, Shield, Database, Code } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const aix: TechEntry = {
    name: "AIX",
    category: "Platform / Infra / SRE",
    categorySlug: "platform-infra-sre",
    seo_title: "Hire Senior AIX Administrators | IBM AIX Experts",
    meta_description: "Hire elite AIX administrators specializing in managing, and maintaining IBM AIX systems.",
    intro: "AIX is a powerful and reliable operating system for enterprise environments. Our AIX experts are vetted for their deep understanding of AIX's core principles, from its logical volume manager to its security features. They are the specialists who can help you keep your mission-critical systems running smoothly.",
    pains: [
        {
            iconName: "AlertTriangle",
            pain: "Our AIX systems are unstable and constantly crashing.",
            problem: "Misconfigured systems, improper resource allocation, and a lack of monitoring lead to cascading failures and application downtime.",
            solution: "We vet for mastery in **AIX administration**. Our engineers implement robust monitoring, and self-healing mechanisms to ensure your systems are resilient and highly available.",
            kpi: "99.99% System Uptime"
        },
        {
            iconName: "AlertTriangle",
            pain: "We're worried about the security of our AIX systems.",
            problem: "Default AIX installations are not secure. Open network policies, and a lack of RBAC controls expose your systems to attack.",
            solution: "Our experts are tested on **AIX security best practices**. They implement network policies, and least-privilege RBAC to secure your systems from internal and external threats.",
            kpi: "Zero Critical Security Vulnerabilities"
        },
        {
            iconName: "AlertTriangle",
            pain: "Our developers are struggling to use AIX effectively.",
            problem: "A steep learning curve and complex configurations make it difficult for developers to deploy and manage their applications on AIX.",
            solution: "We vet for expertise in building **developer-friendly platforms** on top of AIX. Our engineers use tools like Ansible to simplify the developer experience and accelerate adoption.",
            kpi: "50% Reduction in Developer Onboarding Time"
        }
    ],
    evaluation: [
        "Deep understanding of AIX architecture.",
        "Mastery of AIX administration (system setup, upgrades, troubleshooting).",
        "Proficiency in AIX security (RBAC, network policies).",
        "Experience with AIX networking.",
        "Expertise in building and managing CI/CD pipelines for AIX.",
    ],
    technical_analysis: "The AIX vetting process is rigorous and hands-on. Candidates are required to build a secure, multi-tenant AIX system from scratch, and then deploy a complex microservices application to it. We test their ability to troubleshoot common system issues, such as networking problems and storage failures. We also assess their understanding of AIX security best practices, including how to secure the system.",
    interlink_slugs: ["ansible", "docker", "kubernetes", "ci-cd", "python"],
    is_ready: true,
};

export default aix;
