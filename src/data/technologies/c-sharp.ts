import { TechEntry } from "@/lib/tech";
import { AlertTriangle } from "lucide-react";

const csharp: TechEntry = {
  name: "C# / .NET",
  category: "Backend & APIs",
  categorySlug: "backend-services",
  seo_title:
    "Hire Senior C# / .NET Developers | Enterprise & Cloud-Native Backend",
  meta_description:
    "Build fast, secure enterprise applications. Hire elite C#/.NET experts vetted for ASP.NET Core, Azure integration, and microservices architecture. Book a call.",
  intro:
    "Modern C# and the .NET platform are no longer Windows-bound; they are a leading choice for cross-platform, high-performance, and cloud-native backend development, especially within the Azure ecosystem. You need a senior engineer who masters the latest features of **.NET Core**, asynchronous programming (`async/await`), and advanced architecture patterns like microservices and event-driven design. Our vetting process is designed to find professionals who excel at building robust APIs with **ASP.NET Core**, understand Entity Framework Core for data access, and are proficient in performance optimization and security. By hiring our C#/.NET talent, you get a developer who can deliver enterprise-grade stability, speed, and deep integration with Azure or other cloud services, ensuring a reliable and scalable foundation for your core business logic.",
  pains: [
    {
      iconName: "\1",
      pain: "Is your application suffering from asynchronous deadlocks?",
      problem:
        "Incorrect use of `async` and `await` (especially mixing synchronous and asynchronous code) leads to concurrency issues, deadlocks, and severe performance degradation, particularly in desktop applications or older .NET codebases. This results in service freezing and unreliability.",
      solution:
        "Our C# experts are masters of asynchronous programming. They are rigorously tested on modern `async/await` best practices, including the correct use of `ConfigureAwait(false)` in library code and understanding the TPL (Task Parallel Library). They build highly responsive, non-blocking APIs with ASP.NET Core that scale gracefully under load.",
      kpi: "API throughput and task completion metrics",
    },
    {
      iconName: "\1",
      pain: "Are you struggling to manage data access in a complex microservices environment?",
      problem:
        "Using traditional, monolithic ORMs (like older Entity Framework) across many microservices leads to tightly coupled data access, performance bottlenecks, and difficulty managing data schema evolution.",
      solution:
        "We vet for expertise in modern data access: efficient use of **Entity Framework Core (EF Core)** for simple services, and proficiency with lightweight, high-performance tools like Dapper for critical, high-read endpoints. Our candidates are also skilled in using event-driven architecture (Kafka/Azure Service Bus) to decouple microservices at the data layer.",
      kpi: "Database query performance and ORM efficiency",
    },
    {
      iconName: "\1",
      pain: "Are your cloud-native services insecure and difficult to deploy?",
      problem:
        "In the cloud, services must be built to be resilient, secure, and easily containerized. Lack of expertise in modern .NET hosting and security means you struggle with configuration, deployment, and vulnerability management.",
      solution:
        "Our experts are proficient in building cloud-native services with **ASP.NET Core** and **Minimal APIs**. They understand containerization (Docker), security (IdentityServer/Azure AD), and building resilient services using Polly for transient fault handling. You get a modern, deployable, secure application.",
      kpi: "Container image size and security vulnerability score",
    },
  ],
  evaluation: [
    "ASP.NET Core and Minimal APIs mastery",
    "Asynchronous programming (async/await) and TPL",
    "Data access (EF Core, Dapper)",
    "Microservices architecture and inter-service communication (gRPC)",
    "Azure/Cloud-native deployment and security (IdentityServer)",
  ],
  technical_analysis:
    "The C#/.NET evaluation focuses on enterprise readiness, performance, and architecture. The critical assessment is the candidate's mastery of the **Task-based Asynchronous Pattern (TAP)**; they are given scenarios to diagnose and fix asynchronous deadlocks and inefficient thread usage. We test their architectural skills by requiring them to design a multi-layered ASP.NET Core application, focusing on the correct use of Dependency Injection (DI) to create loosely coupled services. Expertise in **Entity Framework Core (EF Core)** is mandatory, specifically assessing their ability to write performant LINQ queries, use projections, and manage change tracking to avoid common performance pitfalls like the N+1 problem. Finally, we assess their knowledge of the C# language features (e.g., LINQ, records, pattern matching) and their ability to write clean, idiomatic, and testable code using modern testing frameworks.",
  interlink_slugs: ["azure", "microservices", "grpc"],
};

export default csharp;
