import { AlertTriangle } from "lucide-react";
import { Check, Zap, Code, Shield } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const flow: TechEntry = {
  name: "Flow",
  category: "Frontend & UI Engineering",
  categorySlug: "frontend-ui",
  seo_title:
    "Hire Senior Flow Developers | JavaScript and Type Checking Experts",
  meta_description:
    "Hire elite Flow developers specializing in building high-performance, scalable, and secure web applications.",
  intro:
    "Flow is a powerful and versatile static type checker for JavaScript. Our Flow experts are vetted for their deep understanding of Flow's core principles, from its powerful type checking capabilities to its growing ecosystem of integrations. They are the specialists who can help you build the next generation of web applications.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "Our codebase is a mess of spaghetti code.",
      problem:
        "Poorly written code is difficult to understand, maintain, and reuse, leading to a lack of confidence in your application.",
      solution:
        "We vet for mastery in **Flow's powerful type checking capabilities**. Our engineers can help you build a clean, modular, and well-documented codebase.",
      kpi: "90% Code Reusability",
    },
    {
      icon: AlertTriangle,
      pain: "We're struggling to keep up with the latest web technologies.",
      problem:
        "The web is constantly evolving. It's difficult to keep up with the latest technologies, such as TypeScript and React.",
      solution:
        "Our experts are tested on **the latest web technologies**. They can help you take advantage of the latest features, so you can build the next generation of web applications.",
      kpi: "90% Reduction in Time to Market",
    },
    {
      icon: AlertTriangle,
      pain: "We're worried about the security of our website.",
      problem:
        "Web security is a top priority for every business. It's difficult to secure a traditional client-side rendered application, especially when you're dealing with user authentication and data fetching.",
      solution:
        "We vet for expertise in **Flow's security features**. Our engineers use the latest security best practices to protect your website from attack.",
      kpi: "100% Website Security",
    },
  ],
  evaluation: [
    "Deep understanding of Flow's core principles.",
    "Mastery of Flow's powerful type checking capabilities.",
    "Proficiency in building scalable, production-ready web applications with Flow.",
    "Experience with a variety of web technologies.",
    "Expertise in Flow's security features.",
  ],
  technical_analysis:
    "The Flow vetting process is rigorous and hands-on. Candidates are required to build a production-ready web application with Flow from scratch. We test their ability to write clean, modular, and maintainable code, as well as their understanding of Flow best practices. We also assess their experience with a variety of web technologies and their ability to optimize for performance and security.",
  interlink_slugs: ["javascript", "typescript", "react", "vue", "angular"],
  is_ready: true,
};

export default flow;
