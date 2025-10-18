import { TechEntry } from "@/lib/tech";
import { AlertTriangle } from "lucide-react";

const loki: TechEntry = {
  name: "Loki",
  category: "DevOps & Cloud",
  categorySlug: "platform-infra-sre",
  seo_title: "Hire Loki Experts | Log Aggregation & Observability Consultants",
  meta_description: "Build a cost-effective, scalable, and powerful logging system. Hire elite remote Loki experts vetted for their deep understanding of log aggregation, from Promtail to LogQL. Book a call.",
  intro: "Loki is a horizontally scalable, highly available, multi-tenant log aggregation system inspired by Prometheus. You need an engineer who can leverage Loki's unique, index-free architecture to build a highly cost-effective and operationally simple logging solution. Our vetting process identifies developers who are experts in the entire Grafana observability stack, including Loki, Promtail, and Grafana for visualization. By hiring a Loki expert, you get a developer who can build a modern, automated, and observable logging system.",
  pains: [
    {
      iconName: "AlertTriangle",
      pain: "Is your logging system expensive and complex to operate?",
      problem: "Traditional logging systems that index the full text of your logs are incredibly expensive to run and scale. The operational overhead of managing a complex indexing infrastructure is a major drain on your DevOps team.",
      solution: "We vet for experts in <strong>Loki's index-free architecture</strong>. Our engineers are proficient in using Loki's strategy of indexing only metadata to dramatically reduce storage costs and operational complexity, while still providing fast and powerful log queries with LogQL.",
      kpi: "Cost-Effective, Index-Free Log Aggregation"
    },
    {
      iconName: "AlertTriangle",
      pain: "Are you struggling to collect logs from all your services and infrastructure?",
      problem: "Collecting logs from a diverse set of applications, servers, and Kubernetes clusters can be a complex task. Without a flexible and reliable log collection agent, you end up with missing logs and a partial view of your system.",
      solution: "Our engineers are masters of <strong>Promtail</strong>, Loki's official log collection agent. They are vetted on their ability to use Promtail's service discovery to automatically find and collect logs from all your targets, and to use its relabeling capabilities to add rich, queryable metadata to your log streams.",
      kpi: "Automated Log Collection with Promtail"
    },
    {
      iconName: "AlertTriangle",
      pain: "Is querying your logs slow and difficult?",
      problem: "Without a powerful and intuitive query language, finding the logs you need in a massive, high-volume system is like finding a needle in a haystack. This slows down debugging and makes it impossible to get real-time insights from your log data.",
      solution: "We look for engineers proficient in <strong>LogQL</strong>, Loki's query language. They are vetted on their ability to write complex queries to filter, parse, and analyze log data, and to create powerful dashboards and alerts in Grafana that provide deep visibility into your system.",
      kpi: "Powerful Log Analysis with LogQL and Grafana"
    }
  ],
  evaluation: [
    "Loki architecture (Distributor, Ingester, Querier)",
    "Log collection with Promtail (service discovery, relabeling)",
    "LogQL for querying and filtering logs",
    "Integration with Grafana for visualization and alerting",
    "Scalability and high-availability deployment"
  ],
  technical_analysis: "The Loki evaluation focuses on a candidate's ability to build and operate a scalable and cost-effective logging system. We assess their understanding of Loki's microservices-based architecture and their ability to deploy it in a highly available configuration. A critical part of the evaluation is their mastery of **LogQL**; candidates must demonstrate how to write complex queries to extract metrics from logs and create alerts. We also test their knowledge of **Promtail**, including how to configure it to collect logs from Kubernetes and how to use relabeling to enrich log streams with metadata. Finally, we assess their ability to integrate Loki with Grafana to build rich, interactive dashboards.",
  interlink_slugs: ["grafana", "prometheus", "kubernetes", "devops-engineering"],
};

export default loki;
