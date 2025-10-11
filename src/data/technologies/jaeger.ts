
import { AlertTriangle } from "lucide-react";
import { TechEntry } from "@/lib/tech";

const jaeger: TechEntry = {
    name: "Jaeger",
    category: "Observability & SRE",
    categorySlug: "platform-infra-sre",
    seo_title: "Hire Jaeger Experts | Distributed Tracing & Observability Consultants",
    meta_description: "Troubleshoot and monitor microservices. Hire elite remote Jaeger experts vetted for their deep understanding of distributed tracing and OpenTelemetry. Book a call.",
    intro: "Jaeger is a popular open-source, end-to-end **distributed tracing** system. You need an engineer who can instrument your applications to generate traces, manage a Jaeger deployment, and use trace data to debug performance and reliability issues in a complex microservices environment. Our vetting process identifies developers who are experts in the principles of distributed tracing and the **OpenTelemetry** standard. By hiring a Jaeger expert, you get a developer who can provide deep visibility into your system, dramatically reducing your Mean Time To Resolution (MTTR) for production incidents.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are you flying blind when debugging issues in your microservices?",
            problem: "In a microservices architecture, a single user request can traverse dozens of services. Without **distributed tracing**, it's nearly impossible to understand the full lifecycle of a request, making it incredibly difficult to pinpoint the source of latency or errors.",
            solution: "We vet for experts in **application instrumentation** and distributed tracing. Our engineers are proficient in using OpenTelemetry to generate and propagate traces across your services and can use Jaeger's UI to visualize and analyze them, quickly identifying bottlenecks and root causes.",
            kpi: "Reduced Mean Time To Resolution (MTTR) for Incidents"
        }
    ],
    evaluation: [
        "Deep understanding of distributed tracing concepts (spans, traces, context propagation)",
        "Application instrumentation with OpenTelemetry",
        "Deployment and management of the Jaeger backend",
        "Trace analysis and performance debugging",
        "Integration with other observability tools (e.g., Prometheus, Grafana)"
    ],
    technical_analysis: "The Jaeger evaluation focuses on a candidate's ability to use distributed tracing to solve real-world problems. We assess their understanding of how to instrument a polyglot microservices application using OpenTelemetry SDKs. A critical part of the evaluation is a practical debugging exercise: candidates are given a set of traces from a failing system and are required to use the Jaeger UI to identify the root cause of an issue. We also test their knowledge of deploying and scaling the Jaeger backend components (Collector, Agent, Query).",
    interlink_slugs: ["opentelemetry", "prometheus", "grafana", "devops-engineering"]
};

export default jaeger;
