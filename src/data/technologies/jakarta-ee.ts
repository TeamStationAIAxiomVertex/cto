import { AlertTriangle } from "lucide-react";
import { Server, Zap, Code, Shield } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const jakartaEE: TechEntry = {
  name: "Jakarta EE",
  category: "APIs & Backend Services",
  categorySlug: "backend-services",
  seo_title: "Hire Senior Jakarta EE Developers | Java and Enterprise Experts",
  meta_description:
    "Hire elite Jakarta EE developers specializing in building high-performance, scalable, and secure enterprise applications.",
  intro:
    "Jakarta EE is a powerful and versatile enterprise Java framework. Our Jakarta EE experts are vetted for their deep understanding of Jakarta EE's core principles, from its powerful component model to its growing ecosystem of integrations. They are the specialists who can help you build the next generation of enterprise applications.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "Our enterprise applications are slow and expensive to host.",
      problem:
        "Traditional monolithic applications are slow to load and expensive to host. They don't take advantage of the latest web technologies, such as microservices and serverless.",
      solution:
        "We vet for mastery in **Jakarta EE's powerful component model**. Our engineers can help you build a fast, scalable, and cost-effective enterprise application.",
      kpi: "50% Reduction in Page Load Time",
    },
    {
      icon: AlertTriangle,
      pain: "We're struggling to keep up with the latest enterprise Java technologies.",
      problem:
        "The enterprise Java landscape is constantly evolving. It's difficult to keep up with the latest technologies, such as MicroProfile and Quarkus.",
      solution:
        "Our experts are tested on **the latest enterprise Java technologies**. They can help you take advantage of the latest features, so you can build the next generation of enterprise applications.",
      kpi: "90% Reduction in Time to Market",
    },
    {
      icon: AlertTriangle,
      pain: "We're worried about the security of our enterprise applications.",
      problem:
        "Enterprise security is a top priority for every business. It's difficult to secure a traditional monolithic application, especially when you're dealing with user authentication and data fetching.",
      solution:
        "We vet for expertise in **Jakarta EE's security features**. Our engineers use the latest security best practices to protect your enterprise application from attack.",
      kpi: "100% Application Security",
    },
  ],
  evaluation: [
    "Deep understanding of Jakarta EE's core principles.",
    "Mastery of Jakarta EE's powerful component model.",
    "Proficiency in building scalable, production-ready enterprise applications with Jakarta EE.",
    "Experience with a variety of enterprise Java technologies.",
    "Expertise in Jakarta EE's security features.",
  ],
  technical_analysis:
    "The Jakarta EE vetting process is rigorous and hands-on. Candidates are required to build a production-ready enterprise application with Jakarta EE from scratch. We test their ability to write clean, modular, and maintainable code, as well as their understanding of Jakarta EE best practices. We also assess their experience with a variety of enterprise Java technologies and their ability to optimize for performance and security.",
  interlink_slugs: [
    "java",
    "microprofile",
    "quarkus",
    "spring-boot",
    "hibernate",
  ],
  is_ready: true,
};

export default jakartaEE;
