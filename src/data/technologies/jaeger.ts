
import { AlertTriangle } from "lucide-react";
import { TechEntry } from "@/lib/tech";

const jaeger: TechEntry = {
    name: "Jaeger",
    category: "Observability & SRE",
    categorySlug: "platform-infra-sre",
    seo_title: "Hire Jaeger Experts | Distributed Tracing & Observability Consultants",
    meta_description: "Troubleshoot and monitor microservices. Hire elite remote Jaeger experts vetted for their deep understanding of distributed tracing and OpenTelemetry. Book a call.",
    intro: "Jaeger is a popular open-source, end-to-end **distributed tracing** system. You need an engineer who can instrument your applications to generate traces, manage a Jaeger deployment, and use trace data to debug performance and reliability issues in a complex microservices environment. Our vetting process identifies developers who are experts in the principles of distributed tracing and the **OpenTelemetry** standard. By hiring a Jaeger expert from us, you get a developer who can provide deep visibility into your system, dramatically reducing your Mean Time To Resolution (MTTR) for production incidents.",
    pains: [
        {
            iconName: "AlertTriangle",
            pain: "Are you flying blind when debugging issues in your microservices?",
            problem: "In a microservices architecture, a single user request can traverse dozens of services. Without **distributed tracing**, it's nearly impossible to understand the full lifecycle of a request, making it incredibly difficult to pinpoint the source of latency or errors.",
            solution: "We vet for experts in <strong>application instrumentation and distributed tracing</strong>. Our engineers are proficient in using OpenTelemetry to generate and propagate traces across your services and can use Jaeger's UI to visualize and analyze them, quickly identifying bottlenecks and root causes.",
            kpi: "Reduced Mean Time To Resolution (MTTR) for Incidents"
        },
        {
            iconName: "AlertTriangle",
            pain: "Is your trace data disconnected from your metrics and logs?",
            problem: "Tracing alone is not enough. Without a way to correlate a specific trace with relevant application logs and system metrics, debugging is still a slow, manual process of switching between different tools and trying to match up timestamps.",
            solution: "Our engineers are experts in building a <strong>unified observability stack</strong>. They are vetted on their ability to configure data source links between Jaeger, Prometheus, and Loki/Elastic, allowing for seamless drill-down from a trace to the exact logs and metrics for that request.",
            kpi: "Unified Metrics, Traces, and Logs"
        },
        {
            iconName: "AlertTriangle",
            pain: "Is instrumenting your code for tracing a manual, inconsistent effort?",
            problem: "Manually adding tracing code to every function in every service is tedious, error-prone, and leads to inconsistent trace data. This makes it difficult to get a complete, end-to-end view of your system.",
            solution: "We look for engineers proficient in <strong>auto-instrumentation</strong>. They are vetted on their ability to use OpenTelemetry's automatic instrumentation libraries for popular frameworks and languages, ensuring that you get comprehensive trace data out-of-the-box with minimal developer effort.",
            kpi: "Comprehensive Tracing with Auto-Instrumentation"
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
