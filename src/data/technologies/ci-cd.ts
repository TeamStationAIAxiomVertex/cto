
import { GitBranch, Server, Cloud, Shield } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const ciCd: TechEntry = {
    name: "CI/CD",
    category: "DevOps & Cloud Infrastructure",
    categorySlug: "devops-cloud",
    seo_title: "Hire Senior CI/CD Engineers | Automation and Pipeline Specialists",
    meta_description: "Hire elite CI/CD engineers specializing in building, managing, and scaling secure, and reliable software delivery pipelines.",
    intro: "CI/CD is a critical component of any modern, software development lifecycle. Our CI/CD experts are vetted for their deep understanding of CI/CD's core principles, from its powerful pipeline-as-code features to its robust security and performance testing capabilities. They are the specialists who can help you build and manage a secure, and reliable software delivery pipeline.",
    pains: [
        {
            iconName: "AlertTriangle",
            pain: "Our software delivery is slow and unreliable.",
            problem: "Poorly designed software delivery pipelines are a bottleneck for your entire system. They are difficult to scale, and can lead to a poor user experience.",
            solution: "We vet for mastery in **CI/CD's powerful pipeline-as-code features**. Our engineers can help you build a fast, and reliable software delivery pipeline.",
            kpi: "50% Reduction in Software Delivery Time"
        },
        {
            iconName: "AlertTriangle",
            pain: "We're struggling to keep up with the latest CI/CD technologies.",
            problem: "The CI/CD landscape is constantly evolving. It's difficult to keep up with the latest technologies, such as GitOps and DevSecOps.",
            solution: "Our experts are tested on **the latest CI/CD technologies**. They can help you take advantage of the latest features, so you can build the next generation of software delivery pipelines.",
            kpi: "90% Reduction in Time to Market"
        },
        {
            iconName: "AlertTriangle",
            pain: "We're worried about the security of our software.",
            problem: "Software security is a top priority for every business. It's difficult to secure your software, especially when you're dealing with sensitive information.",
            solution: "We vet for expertise in **CI/CD's security features**. Our engineers use the latest security best practices to protect your software from attack.",
            kpi: "100% Software Security"
        }
    ],
    evaluation: [
        "Deep understanding of CI/CD's core principles.",
        "Mastery of CI/CD's powerful pipeline-as-code features.",
        "Proficiency in building scalable, production-ready software delivery pipelines.",
        "Experience with a variety of CI/CD technologies.",
        "Expertise in CI/CD's security features.",
    ],
    technical_analysis: "The CI/CD vetting process is rigorous and hands-on. Candidates are required to build a production-ready software delivery pipeline from scratch. We test their ability to write clean, modular, and maintainable code, as well as their understanding of CI/CD best practices. We also assess their experience with a variety of CI/CD technologies and their ability to optimize for performance and security.",
    interlink_slugs: ["jenkins", "gitlab", "github-actions", "docker", "kubernetes"],
    is_ready: true,
};

export default ciCd;
