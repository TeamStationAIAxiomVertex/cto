import type { TechEntry } from "@/lib/tech";
import { AlertTriangle, Workflow, ShieldCheck } from "lucide-react";

const dataEngineering: TechEntry = {
  name: "Data Engineering",
  category: "Data & AI",
  categorySlug: "data-ai",
  seo_title: "Hire Data Engineers | Experts in Modern Data Stacks & Pipelines",
  meta_description:
    "Hire elite Data Engineers to build reliable, scalable data platforms. Our vetted talent transforms your data chaos into a trustworthy foundation for analytics and machine learning.",
  intro:
    "Data Engineering is the bedrock of a data-driven organization. It’s not about writing brittle ETL scripts; it’s about building a scalable, observable, and trustworthy data factory. You need an architect of the modern data stack. Our vetting identifies engineers who design for data quality, implement robust data models, and build the reliable pipelines that turn raw data into your company’s most valuable asset.",
  pains: [
    {
      icon: AlertTriangle,
      pain: 'Untrustworthy Data and "Report Roulette"',
      problem:
        "Your dashboards are a minefield of conflicting metrics. Business leaders have lost all faith in the data because every report tells a different story, leading to analysis paralysis or decisions based on gut feel.",
      solution:
        'A skilled Data Engineer implements a "single source of truth." They build robust data models, enforce data quality contracts, and create observable pipelines so that data is not just moved, but validated and trusted at every stage.',
      kpi: "Achieve 99.9% data uptime and reduce data-related support tickets by 90%.",
    },
    {
      icon: AlertTriangle,
      pain: "Brittle, Unscalable Data Pipelines",
      problem:
        "Your data pipelines are a house of cards held together with cron jobs and duct tape. They fail silently, are impossible to debug, and cannot handle increasing data volumes, leaving your data stale and your analytics team blocked.",
      solution:
        "Our experts architect and build modern data platforms using tools like dbt, Airflow, and Snowflake. They replace fragility with resilience, implementing automated testing, lineage tracking, and proactive monitoring to ensure data flows reliably.",
      kpi: "Increase data pipeline reliability to over 99.5% and support 10x data volume growth.",
    },
    {
      icon: AlertTriangle,
      pain: "Data Team as a Bottleneck",
      problem:
        "The business needs answers, but the data team is buried in ad-hoc requests and pipeline maintenance. Getting a new data source integrated takes months, and the backlog is endless. Innovation is impossible.",
      solution:
        "A TeamStation Data Engineer builds self-service platforms. By creating well-documented, reliable data assets and models, they empower analysts and data scientists to answer their own questions, freeing the core team to focus on strategic platform improvements.",
      kpi: "Reduce the lead time for new data requests from months to days.",
    },
  ],
  evaluation: [
    "Deep expertise in data modeling (Kimball, Inmon, Data Vault) and modern data warehousing.",
    "Proven ability to build and orchestrate complex data pipelines (e.g., Airflow, Prefect, Dagster).",
    "Mastery of data transformation and quality tools (e.g., dbt, Great Expectations).",
    "Proficiency with major cloud data platforms (Snowflake, BigQuery, Redshift).",
    "Skills in data governance, data lineage, and implementing data observability.",
  ],
  technical_analysis:
    "The Axiom Cortex™ evaluation for Data Engineers is intensely focused on their ability to build production-grade data systems, not just write SQL. Candidates must architect a data platform from scratch, justifying their choices in modeling, orchestration, and quality control. We assess their ability to debug complex pipeline failures and implement robust monitoring and alerting. This ensures our engineers are not just data movers, but true platform builders who can create the reliable foundation required for high-impact analytics and machine learning.",
  interlink_slugs: ["dbt", "snowflake", "airflow", "data-governance"],
  is_ready: true,
};

export default dataEngineering;
