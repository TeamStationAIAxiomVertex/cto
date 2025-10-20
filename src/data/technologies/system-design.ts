import { AlertTriangle } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const systemDesign: TechEntry = {
  name: "System Design",
  category: "Architecture & Integrations",
  categorySlug: "architecture-integrations",
  seo_title:
    "Hire System Design Experts | Distributed Systems & Software Architecture Consultants",
  meta_description:
    "Build a scalable, resilient, and maintainable application. Hire elite remote system design experts vetted for their deep understanding of distributed systems, from the load balancer to the database. Book a call.",
  intro:
    "System design is the foundation of any modern, scalable application. You need an engineer who understands that building a high-performance, resilient system is not just about writing code, but about a deep understanding of the entire distributed systems ecosystem, from the load balancer and the API gateway to the database and the cache. Our vetting process identifies developers who are experts in the modern software architecture stack—and can architect a system that is as secure, efficient, and automated as it is scalable. By hiring a system design expert, you get a developer who can build a modern, automated, and observable system that is a joy to use, and a joy to maintain.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "Is your application a monolithic, hard-to-maintain mess?",
      problem:
        "In many organizations, the application is a monolithic, hard-to-maintain mess. This can lead to a user experience that is filled with downtime and a codebase that is a mess of spaghetti code and technical debt.",
      solution:
        "We vet for experts in **system design and distributed systems**. Our engineers are proficient in using tools like Kubernetes, Istio, and Linkerd to build a modern, scalable, and resilient system. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
      kpi: "A Modern, Scalable, and Resilient System",
    },
    {
      icon: AlertTriangle,
      pain: "Is your application not portable across different environments?",
      problem:
        "Many applications are not built to be portable across different environments. This can lead to a codebase that is a mess of environment-specific hacks and workarounds, and a cloud bill that is out of control.",
      solution:
        "Our engineers are masters of **modern, cloud-native architectures**. They are vetted on their ability to use services like AWS, Azure, and Google Cloud to build a modern, serverless, and container-based architecture. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
      kpi: "A Modern, Serverless, and Container-Based Architecture",
    },
    {
      icon: AlertTriangle,
      pain: "Is your team not leveraging the full power of the distributed systems ecosystem?",
      problem:
        "The distributed systems ecosystem is vast and powerful, but many teams are not leveraging its full potential. This can lead to a codebase that is a mess of reinvented wheels and a user experience that is not as rich as it could be.",
      solution:
        "We look for engineers proficient with **the distributed systems ecosystem and the modern software architecture stack**. They are vetted on their ability to build applications that are powered by the best of the distributed systems ecosystem. This results in a user experience that is a joy to use for everyone, and a codebase that is easy to maintain and test.",
      kpi: "An Application That is Powered by the Best of the Distributed Systems Ecosystem",
    },
  ],
  evaluation: [
    "The modern software architecture stack (e.g., Kubernetes, Istio, Linkerd)",
    "Distributed systems and system design",
    "The load balancer and the API gateway",
    "The database and the cache",
    "Security and best practices",
  ],
  technical_analysis:
    "The System Design evaluation focuses on a candidate's ability to build a scalable, resilient, and maintainable application. We assess their understanding of the entire distributed systems ecosystem, requiring them to design a complex application with a clean, automated, and observable architecture. A critical part of the evaluation is their mastery of **system design and the modern software architecture stack**; candidates must demonstrate how to use tools like Kubernetes, Istio, and Linkerd to build a modern, scalable, and resilient system, and how to use the load balancer and the API gateway to build a read model that is optimized for queries. We also test their ability to build **portable and environment-agnostic** applications that can run on any environment. Finally, we assess their knowledge of the distributed systems ecosystem, and their ability to leverage it to build a modern, high-performance backend.",
  interlink_slugs: ["kubernetes", "istio", "linkerd", "microservices"],
};

export default systemDesign;
