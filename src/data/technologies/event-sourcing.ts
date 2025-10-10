
import { AlertTriangle } from "lucide-react";
import { TechEntry } from "@/lib/tech";

const eventSourcing: TechEntry = {
    name: "Event Sourcing",
    category: "Architecture & Integrations",
    categorySlug: "architecture-integrations",
    seo_title: "Hire Event Sourcing Experts | Distributed Systems & CQRS Consultants",
    meta_description: "Build a scalable, resilient, and auditable application. Hire elite remote event sourcing experts vetted for their deep understanding of distributed systems, from the event to the projection. Book a call.",
    intro: "Event sourcing is a powerful architectural pattern for building scalable, resilient, and auditable applications. You need an engineer who understands that building a modern, event-sourced application is not just about writing code, but about a deep understanding of the entire distributed systems ecosystem, from the event and the aggregate to the projection and the query. Our vetting process identifies developers who are experts in the modern data stack—and can architect a data platform that is as secure, efficient, and automated as it is scalable. By hiring an event sourcing expert, you get a developer who can build a modern, automated, and observable system that is a joy to use, and a joy to maintain.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your application a monolithic, hard-to-maintain mess?",
            problem: "In many organizations, the application is a monolithic, hard-to-maintain mess. This can lead to a user experience that is filled with downtime and a codebase that is a mess of spaghetti code and technical debt.",
            solution: "We vet for experts in **event sourcing and distributed systems**. Our engineers are proficient in using tools like Kafka, EventStoreDB, and Axon to build a modern, scalable, and resilient event-sourced application. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
            kpi: "A Modern, Scalable, and Resilient Event-Sourced Application",
        },
        {
            icon: AlertTriangle,
            pain: "Is your application not auditable and hard to debug?",
            problem: "Many applications are not built to be auditable and hard to debug. This can lead to a codebase that is a mess of environment-specific hacks and workarounds, and a cloud bill that is out of control.",
            solution: "Our engineers are masters of **event sourcing and the modern data stack**. They are vetted on their ability to use event sourcing to build an auditable, debuggable, and observable application. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
            kpi: "An Auditable, Debuggable, and Observable Application",
        },
        {
            icon: AlertTriangle,
            pain: "Is your team not leveraging the full power of the distributed systems ecosystem?",
            problem: "The distributed systems ecosystem is vast and powerful, but many teams are not leveraging its full potential. This can lead to a codebase that is a mess of reinvented wheels and a user experience that is not as rich as it could be.",
            solution: "We look for engineers proficient with **the distributed systems ecosystem and the modern data stack**. They are vetted on their ability to build applications that are powered by the best of the distributed systems ecosystem. This results in a user experience that is a joy to use for everyone, and a codebase that is easy to maintain and test.",
            kpi: "An Application That is Powered by the Best of the Distributed Systems Ecosystem",
        }
    ],
    evaluation: [
        "The modern data stack (e.g., Kafka, EventStoreDB, Axon)",
        "Distributed systems and event sourcing",
        "The event and the aggregate",
        "Projections and CQRS",
        "Security and best practices",
    ],
    technical_analysis: "The Event Sourcing evaluation focuses on a candidate's ability to build a scalable, resilient, and auditable application. We assess their understanding of the entire distributed systems ecosystem, requiring them to design a complex application with a clean, automated, and observable architecture. A critical part of the evaluation is their mastery of **event sourcing and the modern data stack**; candidates must demonstrate how to use tools like Kafka, EventStoreDB, and Axon to build a modern, scalable, and resilient event-sourced application, and how to use projections and CQRS to build a read model that is optimized for queries. We also test their ability to build **auditable and debuggable** applications that can run on any environment. Finally, we assess their knowledge of the distributed systems ecosystem, and their ability to leverage it to build a modern, high-performance backend.",
    interlink_slugs: ["kafka", "eventstoredb", "axon", "microservices"],
};

export default eventSourcing;
