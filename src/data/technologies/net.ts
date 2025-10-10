
import { AlertTriangle } from "lucide-react";
import { TechEntry } from "@/lib/tech";

const dotNet: TechEntry = {
    name: ".NET",
    category: "Software Development",
    categorySlug: "software-development",
    seo_title: "Hire .NET Developers | C#, ASP.NET, & Enterprise Application Experts",
    meta_description: "Build robust, high-performance, and cross-platform applications. Hire elite remote .NET experts vetted for their deep understanding of the .NET ecosystem, from C# mastery to ASP.NET Core. Book a call.",
    intro: ".NET is a powerful, open-source development platform for building a wide range of applications. You need an engineer who is not just a C# coder, but a true .NET expert who can leverage the entire ecosystem—from building high-performance web APIs with ASP.NET Core to creating cross-platform applications. Our vetting process identifies developers who have a deep, architectural understanding of the .NET runtime, the C# language, and the patterns that lead to scalable, maintainable enterprise software. By hiring a .NET expert from us, you get a developer who can build a secure, high-performance backend that is a joy to evolve and maintain.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your backend struggling to handle high traffic and complex workloads?",
            problem: "Many backends built on older or less performant technologies can't keep up with modern demands. This leads to slow response times, scalability bottlenecks, and a poor user experience as your user base grows.",
            solution: "We vet for experts in **high-performance .NET**. Our engineers are proficient in leveraging the power of ASP.NET Core, Kestrel, and the modern .NET runtime to build blazing-fast, asynchronous web APIs that can handle massive amounts of traffic with minimal server resources.",
            kpi: "Expertise in ASP.NET Core Performance & Scalability"
        },
        {
            icon: AlertTriangle,
            pain: "Is your codebase a fragmented mess of different platforms and languages?",
            problem: "Maintaining separate codebases for web, mobile, and desktop applications is expensive, time-consuming, and leads to inconsistencies. It creates silos within your engineering team and slows down feature development.",
            solution: "Our engineers are masters of the **unified .NET ecosystem**. They are vetted on their ability to use .NET to build cross-platform applications, sharing code and business logic across web, mobile (with MAUI or Xamarin), and desktop, all from a single, maintainable C# codebase.",
            kpi: "Proficiency in Building Cross-Platform .NET Applications"
        },
        {
            icon: AlertTriangle,
            pain: "Are you struggling to integrate with enterprise systems and cloud services?",
            problem: "Modern applications need to connect to a wide range of services, from databases and message queues to cloud-native services like object storage and authentication. Building these integrations from scratch is complex and error-prone.",
            solution: "We look for engineers proficient with **the rich .NET library ecosystem**. They are vetted on their ability to use libraries like Entity Framework Core for data access, and the official AWS, Azure, and Google Cloud SDKs to seamlessly integrate your application with any service you need.",
            kpi: "Mastery of Entity Framework Core & Cloud SDKs"
        }
    ],
    evaluation: [
        "Deep C# language proficiency (LINQ, async/await, delegates)",
        "ASP.NET Core for building high-performance web APIs",
        "Entity Framework Core for data access",
        "Cloud integration with Azure, AWS, or GCP",
        "Modern .NET concepts (dependency injection, middleware, configuration)",
    ],
    technical_analysis: "The .NET evaluation focuses on a candidate's ability to build robust, scalable, and high-performance applications. We assess their understanding of the entire .NET ecosystem, requiring them to design a complex N-tier application with a clean, decoupled architecture. A critical part of the evaluation is their mastery of **ASP.NET Core and C#**; candidates must demonstrate how to build a secure, high-performance web API, and how to use modern C# features to write clean, maintainable code. We also test their ability to build **data-driven applications** using Entity Framework Core. Finally, we assess their knowledge of the .NET ecosystem, and their ability to leverage it to build a modern, high-performance backend.",
    interlink_slugs: ["c-sharp", "azure", "sql-server", "microservices"],
};

export default dotNet;
