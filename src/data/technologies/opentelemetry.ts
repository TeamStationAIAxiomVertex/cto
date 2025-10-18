
import { AlertTriangle } from "lucide-react";
import { TechEntry } from "@/lib/tech";

const opentelemetry: TechEntry = {
    name: "OpenTelemetry",
    category: "Observability & SRE",
    categorySlug: "platform-infra-sre",
    seo_title: "Hire OpenTelemetry Experts | Observability & Distributed Tracing Consultants",
    meta_description: "Build a modern, observable, and vendor-neutral observability platform. Hire elite remote OpenTelemetry experts vetted for their deep understanding of distributed tracing, metrics, and logs. Book a call.",
    intro: "OpenTelemetry is the new standard for observability, providing a unified set of APIs, libraries, and agents to collect distributed traces, metrics, and logs. You need an engineer who can leverage OpenTelemetry to build a comprehensive and vendor-agnostic observability solution. Our vetting process identifies developers who are experts in the OpenTelemetry ecosystem and can architect an observability platform that is as secure, efficient, and automated as it is scalable. By hiring an OpenTelemetry expert, you get a developer who can build a modern, automated, and observable system that is a joy to use, and a joy to maintain.",
    pains: [
        {
            iconName: "\1",
            pain: "Is your observability data locked into a single vendor's ecosystem?",
            problem: "Using proprietary agents and libraries to collect observability data locks you into a single vendor's ecosystem. This makes it difficult to switch vendors, and it limits your ability to use the best tools for the job.",
            solution: "We vet for experts in **OpenTelemetry and vendor-agnostic observability**. Our engineers are proficient in using OpenTelemetry to build a unified observability pipeline that can send data to any backend, giving you the freedom to choose the best tools for your needs.",
            kpi: "A Vendor-Agnostic Observability Pipeline"
        },
        {
            iconName: "\1",
            pain: "Is your team struggling to instrument applications for observability?",
            problem: "Instrumenting applications for observability can be a complex and time-consuming task. Without a consistent approach, it's difficult to get a complete, end-to-end view of your system.",
            solution: "Our engineers are masters of **OpenTelemetry's auto-instrumentation**. They are vetted on their ability to use OpenTelemetry's automatic instrumentation libraries for popular frameworks and languages, ensuring that you get comprehensive trace data out-of-the-box with minimal developer effort.",
            kpi: "Comprehensive Observability with Auto-Instrumentation"
        },
        {
            iconName: "\1",
            pain: "Are you struggling to correlate metrics, logs, and traces?",
            problem: "Without a unified context, it's difficult to correlate metrics, logs, and traces. This makes it hard to troubleshoot issues and understand the full lifecycle of a request.",
            solution: "We look for engineers proficient with **OpenTelemetry's context propagation**. They are vetted on their ability to use OpenTelemetry to propagate a consistent trace context across all your services, enabling you to seamlessly link metrics, logs, and traces for a given request.",
            kpi: "Unified Context Propagation for Metrics, Logs, and Traces"
        }
    ],
    evaluation: [
        "OpenTelemetry core concepts (signals, resources, context propagation)",
        "Application instrumentation (manual and automatic)",
        "The OpenTelemetry Collector and processing pipeline",
        "Integration with various observability backends (e.g., Jaeger, Prometheus, Loki)",
        "Semantic conventions for standardized telemetry data"
    ],
    technical_analysis: "The OpenTelemetry evaluation focuses on a candidate's ability to build a comprehensive and vendor-agnostic observability solution. We assess their understanding of the three main signals (traces, metrics, logs) and how to correlate them using context propagation. A critical part of the evaluation is their mastery of the **OpenTelemetry Collector**; candidates must demonstrate how to configure a Collector pipeline to receive, process, and export telemetry data to multiple backends. We also test their ability to use **auto-instrumentation** to get up and running quickly, and their knowledge of when and how to add custom manual instrumentation for business-specific data. Finally, we assess their understanding of OpenTelemetry's semantic conventions, which are crucial for producing standardized and interoperable telemetry data.",
    interlink_slugs: ["jaeger", "prometheus", "grafana", "devops-engineering"]
};

export default opentelemetry;
