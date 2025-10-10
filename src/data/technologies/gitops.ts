
import { AlertTriangle } from "lucide-react";
import { TechEntry } from "@/lib/tech";

const gitops: TechEntry = {
    name: "GitOps",
    category: "DevOps & Cloud",
    categorySlug: "devops-cloud",
    seo_title: "Hire GitOps Experts | Kubernetes & DevOps Consultants",
    meta_description: "Build a modern, automated, and observable software delivery pipeline. Hire elite remote GitOps experts vetted for their deep understanding of GitOps, from the Git repository to the Kubernetes cluster. Book a call.",
    intro: "GitOps is the de facto standard for continuous delivery. You need an engineer who understands that building a modern software delivery pipeline is not just about writing code, but about a deep understanding of the entire GitOps ecosystem, from the Git repository and the CI/CD pipeline to the Kubernetes cluster and the observability backend. Our vetting process identifies developers who are experts in the Cloud Native Computing Foundation (CNCF) landscape—and can architect a software delivery pipeline that is as secure, efficient, and automated as it is scalable. By hiring a GitOps expert, you get a developer who can build a modern, automated, and observable system that is a joy to use, and a joy to maintain.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your software delivery process slow, manual, and error-prone?",
            problem: "In many organizations, the software delivery process is a mess of manual handoffs, ad-hoc scripts, and long-running, error-prone deployments. This can lead to a user experience that is filled with bugs and a codebase that is a mess of hotfixes and rollbacks.",
            solution: "We vet for experts in **GitOps and continuous delivery**. Our engineers are proficient in using GitOps to build a fully automated software delivery pipeline. This results in a codebase that is easy to reason about and a user experience that is free of bugs and regressions.",
            kpi: "A Fully Automated, Reliable, and Efficient Software Delivery Pipeline",
        },
        {
            icon: AlertTriangle,
            pain: "Is your application not portable across different environments?",
            problem: "Many applications are not built to be portable across different environments. This can lead to a codebase that is a mess of environment-specific hacks and workarounds, and a cloud bill that is out of control.",
            solution: "Our engineers are masters of **GitOps and the modern DevOps ecosystem**. They are vetted on their ability to use GitOps to build a portable, environment-agnostic application. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
            kpi: "A Portable, Environment-Agnostic Application",
        },
        {
            icon: AlertTriangle,
            pain: "Is your team not leveraging the full power of the continuous delivery ecosystem?",
            problem: "The continuous delivery ecosystem is vast and powerful, but many teams are not leveraging its full potential. This can lead to a codebase that is a mess of reinvented wheels and a user experience that is not as rich as it could be.",
            solution: "We look for engineers proficient with **the continuous delivery ecosystem and the GitOps toolkit**. They are vetted on their ability to build applications that are powered by the best of the continuous delivery ecosystem. This results in a user experience that is a joy to use for everyone, and a codebase that is easy to maintain and test.",
            kpi: "An Application That is Powered by the Best of the Continuous Delivery Ecosystem",
        }
    ],
    evaluation: [
        "The GitOps toolkit (e.g., Flux, Argo CD)",
        "Continuous delivery and the Cloud Native Computing Foundation (CNCF)",
        "The Git repository and the CI/CD pipeline",
        "GitOps security and best practices",
        "GitOps on Kubernetes",
    ],
    technical_analysis: "The GitOps evaluation focuses on a candidate's ability to build a modern, automated, and observable software delivery pipeline. We assess their understanding of the entire GitOps ecosystem, requiring them to design a complex application with a clean, automated, and observable architecture. A critical part of the evaluation is their mastery of **the GitOps toolkit and the CI/CD pipeline**; candidates must demonstrate how to use tools like Flux and Argo CD to build a fully automated software delivery pipeline, and how to use the CI/CD pipeline to build and test the application. We also test their ability to build **portable and environment-agnostic** applications that can run on any environment. Finally, we assess their knowledge of the Cloud Native Computing Foundation (CNCF), and their ability to leverage it to build a modern, high-performance backend.",
    interlink_slugs: ["kubernetes", "docker", "ci-cd", "devops-engineering"],
};

export default gitops;
