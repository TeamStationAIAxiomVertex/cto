
import { Shield, Lock, Key, Code } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const apiSecurity: TechEntry = {
    name: "API Security",
    category: "Architecture & Integrations",
    categorySlug: "architecture-integrations",
    seo_title: "Hire Senior API Security Experts | API Protection Specialists",
    meta_description: "Hire elite API Security experts specializing in building, managing, and scaling secure, and reliable APIs.",
    intro: "API Security is a critical component of any modern, microservices-based architecture. Our API Security experts are vetted for their deep understanding of API Security's core principles, from its powerful authentication and authorization features to its robust encryption and throttling capabilities. They are the specialists who can help you build and manage a secure, and reliable API.",
    pains: [
        {
            icon: Shield,
            pain: "Our APIs are vulnerable to attack.",
            problem: "Poorly designed APIs are a security risk for your entire system. They are difficult to secure, and can lead to a data breach.",
            solution: "We vet for mastery in **API Security's powerful authentication and authorization features**. Our engineers can help you build a secure, and reliable API.",
            kpi: "100% API Security"
        },
        {
            icon: Lock,
            pain: "We're struggling to keep up with the latest API security technologies.",
            problem: "The API security landscape is constantly evolving. It's difficult to keep up with the latest technologies, such as OAuth 2.0 and OpenID Connect.",
            solution: "Our experts are tested on **the latest API security technologies**. They can help you take advantage of the latest features, so you can build the next generation of secure APIs.",
            kpi: "90% Reduction in Time to Market"
        },
        {
            icon: Key,
            pain: "We're worried about the security of our data.",
            problem: "Data security is a top priority for every business. It's difficult to secure your data, especially when you're dealing with sensitive information.",
            solution: "We vet for expertise in **API Security's encryption features**. Our engineers use the latest encryption best practices to protect your data from attack.",
            kpi: "100% Data Security"
        }
    ],
    evaluation: [
        "Deep understanding of API Security's core principles.",
        "Mastery of API Security's powerful authentication and authorization features.",
        "Proficiency in building scalable, production-ready, secure APIs.",
        "Experience with a variety of API security technologies.",
        "Expertise in API Security's encryption features.",
    ],
    technical_analysis: "The API Security vetting process is rigorous and hands-on. Candidates are required to build a production-ready, secure API from scratch. We test their ability to write clean, modular, and maintainable code, as well as their understanding of API Security best practices. We also assess their experience with a variety of API security technologies and their ability to optimize for performance and security.",
    interlink_slugs: ["rest-api-design", "graphql", "grpc", "microservices", "aws"],
    is_ready: true,
};

export default apiSecurity;
