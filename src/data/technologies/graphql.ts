
import { Share2, Zap, Shield, Code } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const graphql: TechEntry = {
    name: "GraphQL",
    category: "APIs & Backend Services",
    categorySlug: "backend-services",
    seo_title: "Hire Senior GraphQL Developers | API and Web Experts",
    meta_description: "Hire elite GraphQL developers specializing in building high-performance, scalable, and secure APIs.",
    intro: "GraphQL is a powerful and versatile query language for APIs. Our GraphQL experts are vetted for their deep understanding of GraphQL's core principles, from its powerful query language to its robust security and performance tuning capabilities. They are the specialists who can help you build the next generation of APIs.",
    pains: [
        {
            iconName: "\1",
            pain: "Our APIs are slow and inefficient.",
            problem: "Traditional REST APIs are often slow and inefficient, especially when you're dealing with complex data fetching requirements.",
            solution: "We vet for mastery in **GraphQL's powerful query language**. Our engineers can help you build a fast, and efficient API.",
            kpi: "50% Reduction in API Latency"
        },
        {
            iconName: "AlertTriangle",
            pain: "We're struggling to keep up with the latest API technologies.",
            problem: "The API landscape is constantly evolving. It's difficult to keep up with the latest technologies, such as gRPC and WebSockets.",
            solution: "Our experts are tested on **the latest API technologies**. They can help you take advantage of the latest features, so you can build the next generation of APIs.",
            kpi: "90% Reduction in Time to Market"
        },
        {
            iconName: "AlertTriangle",
            pain: "We're worried about the security of our APIs.",
            problem: "API security is a top priority for every business. It's difficult to secure your APIs, especially when you're dealing with user authentication and authorization.",
            solution: "We vet for expertise in **GraphQL's security features**. Our engineers use the latest security best practices to protect your APIs from attack.",
            kpi: "100% API Security"
        }
    ],
    evaluation: [
        "Deep understanding of GraphQL's core principles.",
        "Mastery of GraphQL's powerful query language.",
        "Proficiency in building scalable, production-ready APIs with GraphQL.",
        "Experience with a variety of API technologies.",
        "Expertise in GraphQL's security features.",
    ],
    technical_analysis: "The GraphQL vetting process is rigorous and hands-on. Candidates are required to build a production-ready API with GraphQL from scratch. We test their ability to write clean, modular, and maintainable code, as well as their understanding of GraphQL best practices. We also assess their experience with a variety of API technologies and their ability to optimize for performance and security.",
    interlink_slugs: ["apollo", "relay", "graphql-yoga", "graphql-tools", "graphql-shield"],
    is_ready: true,
};

export default graphql;
