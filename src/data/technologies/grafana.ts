
import { AlertTriangle } from "lucide-react";
import { TechEntry } from "@/lib/tech";

const grafana: TechEntry = {
    name: "Grafana",
    category: "DevOps & Cloud",
    categorySlug: "devops-cloud",
    seo_title: "Hire Grafana Experts | Observability & DevOps Consultants",
    meta_description: "Build a modern, observable, and reliable system. Hire elite remote Grafana experts vetted for their deep understanding of observability, from the data source to the dashboard. Book a call.",
    intro: "Grafana is the de facto standard for observability. You need an engineer who understands that building a modern, observable system is not just about visualizing metrics, but about a deep understanding of the entire observability ecosystem, from the data source and the query to the dashboard and the alert. Our vetting process identifies developers who are experts in the Cloud Native Computing Foundation (CNCF) landscape—and can architect an observability platform that is as secure, efficient, and automated as it is scalable. By hiring a Grafana expert, you get a developer who can build a modern, automated, and observable system that is a joy to use, and a joy to maintain.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your team flying blind when it comes to the health of your systems?",
            problem: "Many teams are not equipped to monitor and observe their systems in production. This can lead to a user experience that is frustrating and a codebase that is hard to maintain and test.",
            solution: "We vet for experts in **Grafana and observability**. Our engineers are proficient in using Grafana to build a modern, observable system. This results in a team that is equipped to monitor and observe their systems in production, and a user experience that is a joy to use for everyone.",
            kpi: "A Modern, Observable System That is a Joy to Use for Everyone",
        },
        {
            icon: AlertTriangle,
            pain: "Is your application not portable across different environments?",
            problem: "Many applications are not built to be portable across different environments. This can lead to a codebase that is a mess of environment-specific hacks and workarounds, and a cloud bill that is out of control.",
            solution: "Our engineers are masters of **Grafana and the modern DevOps ecosystem**. They are vetted on their ability to use Grafana to build a portable, environment-agnostic application. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
            kpi: "A Portable, Environment-Agnostic Application",
        },
        {
            icon: AlertTriangle,
            pain: "Is your team not leveraging the full power of the observability ecosystem?",
            problem: "The observability ecosystem is vast and powerful, but many teams are not leveraging its full potential. This can lead to a codebase that is a mess of reinvented wheels and a user experience that is not as rich as it could be.",
            solution: "We look for engineers proficient with **the observability ecosystem and the Grafana plugin registry**. They are vetted on their ability to build applications that are powered by the best of the observability ecosystem. This results in a user experience that is a joy to use for everyone, and a codebase that is easy to maintain and test.",
            kpi: "An Application That is Powered by the Best of the Observability Ecosystem",
        }
    ],
    evaluation: [
        "The Grafana server and the data source",
        "Observability and the Cloud Native Computing Foundation (CNCF)",
        "The Grafana plugin registry and the dashboard",
        "Grafana security and best practices",
        "Grafana on Kubernetes",
    ],
    technical_analysis: "The Grafana evaluation focuses on a candidate's ability to build a modern, observable, and reliable system. We assess their understanding of the entire observability ecosystem, requiring them to design a complex application with a clean, automated, and observable architecture. A critical part of the evaluation is their mastery of **the Grafana server and the dashboard**; candidates must demonstrate how to use the Grafana server to visualize metrics, and how to use the dashboard to create and manage them. We also test their ability to build **portable and environment-agnostic** applications that can run on any environment. Finally, we assess their knowledge of the Cloud Native Computing Foundation (CNCF), and their ability to leverage it to build a modern, high-performance backend.",
    interlink_slugs: ["prometheus", "kubernetes", "docker", "devops-engineering"],
};

export default grafana;
