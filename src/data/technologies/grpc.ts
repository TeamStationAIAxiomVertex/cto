import type { TechEntry } from "@/lib/tech";
import { Share2, AlertTriangle } from "lucide-react";

const grpc: TechEntry = {
  name: "gRPC",
  category: "APIs & Backend Services",
  categorySlug: "backend-services",
  seo_title: "Hire Senior gRPC Developers | API and Web Experts",
  meta_description:
    "Hire elite gRPC developers specializing in building high-performance, scalable, and secure APIs.",
  intro:
    "gRPC is a powerful and versatile RPC framework. Our gRPC experts are vetted for their deep understanding of gRPC's core principles, from its powerful protocol buffers to its robust security and performance tuning capabilities. They are the specialists who can help you build the next generation of APIs.",
  pains: [
    {
      icon: Share2,
      pain: "Our APIs are slow and inefficient.",
      problem:
        "Traditional REST APIs are often slow and inefficient, especially when you're dealing with complex data fetching requirements.",
      solution:
        "We vet for mastery in **gRPC's powerful protocol buffers**. Our engineers can help you build a fast, and efficient API.",
      kpi: "50% Reduction in API Latency",
    },
    {
      icon: AlertTriangle,
      pain: "We're struggling to keep up with the latest API technologies.",
      problem:
        "The API landscape is constantly evolving. It's difficult to keep up with the latest technologies, such as GraphQL and WebSockets.",
      solution:
        "Our experts are tested on **the latest API technologies**. They can help you take advantage of the latest features, so you can build the next generation of APIs.",
      kpi: "90% Reduction in Time to Market",
    },
    {
      icon: AlertTriangle,
      pain: "We're worried about the security of our APIs.",
      problem:
        "API security is a top priority for every business. It's difficult to secure your APIs, especially when you're dealing with user authentication and authorization.",
      solution:
        "We vet for expertise in **gRPC's security features**. Our engineers use the latest security best practices to protect your APIs from attack.",
      kpi: "100% API Security",
    },
  ],
  evaluation: [
    "Deep understanding of gRPC's core principles.",
    "Mastery of gRPC's powerful protocol buffers.",
    "Proficiency in building scalable, production-ready APIs with gRPC.",
    "Experience with a variety of API technologies.",
    "Expertise in gRPC's security features.",
  ],
  technical_analysis:
    "The gRPC vetting process is rigorous and hands-on. Candidates are required to build a production-ready API with gRPC from scratch. We test their ability to write clean, modular, and maintainable code, as well as their understanding of gRPC best practices. We also assess their experience with a variety of API technologies and their ability to optimize for performance and security.",
  interlink_slugs: [
    "protobuf",
    "http2",
    "microservices",
    "kubernetes",
    "envoy",
  ],
  is_ready: true,
};

export default grpc;
