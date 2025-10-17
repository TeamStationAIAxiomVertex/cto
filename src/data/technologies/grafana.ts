
import { BarChart, Zap, Shield, Code } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const grafana: TechEntry = {
    name: "Grafana",
    category: "Observability & SRE",
    categorySlug: "observability-sre",
    seo_title: "Hire Senior Grafana Experts | Observability and Monitoring Specialists",
    meta_description: "Hire elite Grafana experts specializing in building, managing, and scaling secure, and reliable observability solutions.",
    intro: "Grafana is a powerful and versatile observability platform. Our Grafana experts are vetted for their deep understanding of Grafana's core principles, from its powerful data visualization and dashboarding features to its robust security and performance tuning capabilities. They are the specialists who can help you build and manage a secure, and reliable observability solution.",
    pains: [
        {
            icon: BarChart,
            pain: "Our dashboards are a mess of spaghetti.",
            problem: "Poorly designed dashboards are difficult to understand, maintain, and reuse, leading to a lack of confidence in your data.",
            solution: "We vet for mastery in **Grafana's powerful data visualization and dashboarding features**. Our engineers can help you build a clean, modular, and well-documented observability solution.",
            kpi: "90% Dashboard Reusability"
        },
        {
            icon: Zap,
            pain: "We're struggling to keep up with the latest observability technologies.",
            problem: "The observability landscape is constantly evolving. It's difficult to keep up with the latest technologies, such as Prometheus and OpenTelemetry.",
            solution: "Our experts are tested on **the latest observability technologies**. They can help you take advantage of the latest features, so you can build the next generation of observability solutions.",
            kpi: "90% Reduction in Time to Market"
        },
        {
            icon: Shield,
            pain: "We're worried about the security of our data.",
            problem: "Data security is a top priority for every business. It's difficult to secure your data, especially when you're dealing with sensitive information.",
            solution: "We vet for expertise in **Grafana's security features**. Our engineers use the latest security best practices to protect your data from attack.",
            kpi: "100% Data Security"
        }
    ],
    evaluation: [
        "Deep understanding of Grafana's core principles.",
        "Mastery of Grafana's powerful data visualization and dashboarding features.",
        "Proficiency in building scalable, production-ready observability solutions.",
        "Experience with a variety of observability technologies.",
        "Expertise in Grafana's security features.",
    ],
    technical_analysis: "The Grafana vetting process is rigorous and hands-on. Candidates are required to build a production-ready observability solution from scratch. We test their ability to write clean, modular, and maintainable code, as well as their understanding of Grafana best practices. We also assess their experience with a variety of observability technologies and their ability to optimize for performance and security.",
    interlink_slugs: ["prometheus", "opentelemetry", "loki", "tempo", "mimir"],
    is_ready: true,
};

export default grafana;
