
import { Milestone, Zap, Shield, Code } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const eventSourcing: TechEntry = {
    name: "Event Sourcing",
    category: "Architecture & Integrations",
    categorySlug: "architecture-integrations",
    seo_title: "Hire Senior Event Sourcing Experts | Event-Driven Architecture Specialists",
    meta_description: "Hire elite Event Sourcing experts specializing in building, managing, and scaling secure, and reliable event-driven systems.",
    intro: "Event Sourcing is a powerful and versatile event-driven architecture pattern. Our Event Sourcing experts are vetted for their deep understanding of Event Sourcing's core principles, from its powerful event store to its robust security and performance tuning capabilities. They are the specialists who can help you build and manage a secure, and reliable event-driven system.",
    pains: [
        {
            iconName: "\1",
            pain: "Our system is a mess of spaghetti code.",
            problem: "Poorly designed systems are difficult to understand, maintain, and reuse, leading to a lack of confidence in your system.",
            solution: "We vet for mastery in **Event Sourcing's powerful event store**. Our engineers can help you build a clean, modular, and well-documented event-driven system.",
            kpi: "90% Code Reusability"
        },
        {
            iconName: "\1",
            pain: "We're struggling to keep up with the latest event-driven technologies.",
            problem: "The event-driven landscape is constantly evolving. It's difficult to keep up with the latest technologies, such as Kafka and RabbitMQ.",
            solution: "Our experts are tested on **the latest event-driven technologies**. They can help you take advantage of the latest features, so you can build the next generation of event-driven systems.",
            kpi: "90% Reduction in Time to Market"
        },
        {
            iconName: "\1",
            pain: "We're worried about the security of our data.",
            problem: "Data security is a top priority for every business. It's difficult to secure your data, especially when you're dealing with sensitive information.",
            solution: "We vet for expertise in **Event Sourcing's security features**. Our engineers use the latest security best practices to protect your data from attack.",
            kpi: "100% Data Security"
        }
    ],
    evaluation: [
        "Deep understanding of Event Sourcing's core principles.",
        "Mastery of Event Sourcing's powerful event store.",
        "Proficiency in building scalable, production-ready event-driven systems.",
        "Experience with a variety of event-driven technologies.",
        "Expertise in Event Sourcing's security features.",
    ],
    technical_analysis: "The Event Sourcing vetting process is rigorous and hands-on. Candidates are required to build a production-ready event-driven system from scratch. We test their ability to write clean, modular, and maintainable code, as well as their understanding of Event Sourcing best practices. We also assess their experience with a variety of event-driven technologies and their ability to optimize for performance and security.",
    interlink_slugs: ["cqrs", "kafka", "rabbitmq", "microservices", "domain-driven-design"],
    is_ready: true,
};

export default eventSourcing;
