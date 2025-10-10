
import { AlertTriangle } from "lucide-react";
import { TechEntry } from "@/lib/tech";

const jenkins: TechEntry = {
    name: "Jenkins",
    category: "DevOps & Cloud",
    categorySlug: "devops-cloud",
    seo_title: "Hire Jenkins Experts | CI/CD & DevOps Consultants",
    meta_description: "Build a consistent, automated, and efficient software delivery pipeline. Hire elite remote Jenkins experts vetted for their deep understanding of CI/CD, from the pipeline to the plugin. Book a call.",
    intro: "Jenkins is the de facto standard for CI/CD. You need an engineer who understands that building a modern software delivery pipeline is not just about writing code, but about a deep understanding of the entire CI/CD ecosystem, from the pipeline and the plugin to the agent and the controller. Our vetting process identifies developers who are experts in the CloudBees ecosystem—and can architect a software delivery pipeline that is as secure, efficient, and automated as it is scalable. By hiring a Jenkins expert, you get a developer who can build a modern, automated, and observable system that is a joy to use, and a joy to maintain.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your software delivery process slow, manual, and error-prone?",
            problem: "In many organizations, the software delivery process is a mess of manual handoffs, ad-hoc scripts, and long-running, error-prone deployments. This can lead to a user experience that is filled with bugs and a codebase that is a mess of hotfixes and rollbacks.",
            solution: "We vet for experts in **Jenkins and CI/CD**. Our engineers are proficient in using Jenkins to build a fully automated software delivery pipeline. This results in a codebase that is easy to reason about and a user experience that is free of bugs and regressions.",
            kpi: "A Fully Automated, Reliable, and Efficient Software Delivery Pipeline",
        },
        {
            icon: AlertTriangle,
            pain: "Is your application not portable across different environments?",
            problem: "Many applications are not built to be portable across different environments. This can lead to a codebase that is a mess of environment-specific hacks and workarounds, and a cloud bill that is out of control.",
            solution: "Our engineers are masters of **Jenkins and the CloudBees ecosystem**. They are vetted on their ability to use Jenkins to build a portable, environment-agnostic application. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
            kpi: "A Portable, Environment-Agnostic Application",
        },
        {
            icon: AlertTriangle,
            pain: "Is your team not leveraging the full power of the CI/CD ecosystem?",
            problem: "The CI/CD ecosystem is vast and powerful, but many teams are not leveraging its full potential. This can lead to a codebase that is a mess of reinvented wheels and a user experience that is not as rich as it could be.",
            solution: "We look for engineers proficient with **the CI/CD ecosystem and the Jenkins plugin registry**. They are vetted on their ability to build applications that are powered by the best of the CI/CD ecosystem. This results in a user experience that is a joy to use for everyone, and a codebase that is easy to maintain and test.",
            kpi: "An Application That is Powered by the Best of the CI/CD Ecosystem",
        }
    ],
    evaluation: [
        "The Jenkins CLI and the pipeline",
        "CI/CD and the CloudBees ecosystem",
        "The Jenkins plugin registry and the agent",
        "Jenkins security and best practices",
        "Jenkins on Kubernetes",
    ],
    technical_analysis: "The Jenkins evaluation focuses on a candidate's ability to build a consistent, automated, and efficient software delivery pipeline. We assess their understanding of the entire CI/CD ecosystem, requiring them to design a complex application with a clean, automated, and observable architecture. A critical part of the evaluation is their mastery of **the Jenkins CLI and the pipeline**; candidates must demonstrate how to use the Jenkins CLI to manage the entire lifecycle of a software delivery pipeline, and how to use the pipeline to define and configure a software delivery pipeline. We also test their ability to build **portable and environment-agnostic** applications that can run on any environment. Finally, we assess their knowledge of the Jenkins plugin registry, and their ability to leverage it to build a modern, high-performance backend.",
    interlink_slugs: ["devops-engineering", "docker", "kubernetes", "ansible"],
};

export default jenkins;
