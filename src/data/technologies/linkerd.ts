import { TechEntry } from "@/lib/tech";
import { AlertTriangle } from "lucide-react";

const linkerd: TechEntry = {
  name: "Linkerd",
  category: "DevOps & Cloud",
  categorySlug: "platform-infra-sre",
  seo_title: "Hire Linkerd Experts | Service Mesh & Cloud Native Consultants",
  meta_description: "Build a secure, observable, and reliable microservices architecture. Hire elite remote Linkerd experts vetted for their deep understanding of the service mesh, from mTLS to traffic splitting. Book a call.",
  intro: "Linkerd is a lightweight, ultra-fast, and security-focused service mesh for Kubernetes. You need an engineer who can leverage Linkerd's simplicity to add critical security, reliability, and observability to your microservices without the operational complexity of other meshes. Our vetting process identifies developers who are experts in the core features of Linkerd, including automatic mutual TLS (mTLS), traffic splitting, and golden metrics. By hiring a Linkerd expert, you get a developer who can build a modern, secure, and observable microservices platform.",
  pains: [
    {
      iconName: "\1",
      pain: "Is your service-to-service communication insecure and unencrypted?",
      problem: "By default, traffic between pods in a Kubernetes cluster is unencrypted and unauthenticated. This is a major security vulnerability that exposes your application to man-in-the-middle attacks and data breaches.",
      solution: "We vet for experts in <strong>automatic mTLS encryption</strong>. Our engineers are proficient in using Linkerd to transparently encrypt all TCP communication between your services, providing a secure, zero-trust network with no application code changes required.",
      kpi: "Automatic Mutual TLS (mTLS) for All Services"
    },
    {
      iconName: "\1",
      pain: "Are you flying blind when it comes to the health of your microservices?",
      problem: "Without a service mesh, getting consistent, high-quality metrics for every service is a major challenge. This makes it difficult to monitor the health of your application, set meaningful SLOs, and debug performance issues.",
      solution: "Our engineers are masters of <strong>golden metrics and observability</strong>. They are vetted on their ability to use Linkerd's out-of-the-box dashboards to get immediate visibility into success rates, request volumes, and latencies for every service in your mesh.",
      kpi: "Golden Metrics for Every Service, Out-of-the-Box"
    },
    {
      iconName: "\1",
      pain: "Are your deployments risky, all-or-nothing affairs?",
      problem: "Rolling out a new version of a service to all users at once is a high-risk deployment strategy. A single bug can cause a major outage. Without the ability to gradually shift traffic, you can't perform safe, controlled canary releases.",
      solution: "We look for engineers proficient in <strong>traffic splitting and canary releases</strong>. They are vetted on their ability to use Linkerd's SMI TrafficSplit API to safely shift a small percentage of traffic to a new version of a service, allowing you to validate its performance and correctness before rolling it out to everyone.",
      kpi: "Safe, Controlled Canary Releases with Traffic Splitting"
    }
  ],
  evaluation: [
    "Linkerd architecture (control plane, data plane, proxy)",
    "Automatic mTLS and security policies",
    "Traffic splitting and canary deployments",
    "Observability with golden metrics and distributed tracing",
    "Debugging and troubleshooting with Linkerd's CLI tools"
  ],
  technical_analysis: "The Linkerd evaluation is focused on a candidate's ability to implement a secure, observable, and reliable service mesh. We assess their understanding of Linkerd's lightweight and Rust-based proxy. A critical part of the evaluation is their mastery of **automatic mTLS**; candidates must demonstrate how to secure a multi-service application with zero configuration. We also test their ability to perform **canary releases** using traffic splitting. Finally, we assess their knowledge of using Linkerd's built-in observability features to debug a failing service.",
  interlink_slugs: ["istio", "kubernetes", "microservices", "devops-engineering"],
};

export default linkerd;
