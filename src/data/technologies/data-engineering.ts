
import { Cpu, DollarSign, Database, Workflow } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const dataEngineering: TechEntry = {
    name: "Data Engineering",
    category: "Data & AI Engineering",
    categorySlug: "data-ai",
    seo_title: "Hire Senior Data Engineering Experts | ETL/ELT, Cloud Data Warehousing, and Pipeline Orchestration",
    meta_description: "Hire elite Data Engineers specializing in building, maintaining, and scaling mission-critical data pipelines, modern cloud data warehouses (Snowflake, BigQuery), and real-time streaming platforms.",
    intro: "Modern Data Engineering is the foundation of business intelligence and AI initiatives. Our experts are vetted on their ability to design robust, reliable, and scalable ETL/ELT pipelines using tools like Apache Spark, dbt, Airflow, and cloud platforms like Snowflake. They are the specialists who ensure data is clean, accessible, and ready for consumption by analytics and machine learning teams.",
    pains: [
        {
            icon: Workflow,
            pain: "Our data pipelines are constantly failing or producing inaccurate reports.",
            problem: "Poorly orchestrated pipelines lack proper error handling, lineage tracking, and data quality checks, leading to unreliable data and a lack of trust in BI reports.",
            solution: "We vet for mastery in orchestration (Airflow/Dagster) and **data observability**. Our engineers implement robust data quality validation (e.g., using Great Expectations) and comprehensive monitoring to ensure pipelines are self-healing.",
            kpi: "99.9% Data Pipeline Reliability and Trust Score"
        },
        {
            icon: Database,
            pain: "Our data warehouse queries are slow and expensive.",
            problem: "Legacy data warehouses or improperly configured cloud platforms (Snowflake, Redshift) suffer from poor data modeling (lack of star/snowflake schemas), leading to slow, costly queries.",
            solution: "Our experts are tested on advanced **data modeling (dbt)** and data warehouse optimization techniques, ensuring data structures are efficient and query performance meets analyst and BI tool requirements.",
            kpi: "75% Reduction in P95 Query Latency"
        },
        {
            icon: DollarSign,
            pain: "We are stuck on batch processing and lack real-time insights.",
            problem: "Relying solely on nightly batch processes prevents the business from reacting quickly to real-time events, making systems like fraud detection or inventory management obsolete.",
            solution: "We vet for expertise in **real-time data streaming** using platforms like Kafka or Kinesis, enabling the construction of lambda or kappa architectures for instant data ingestion and low-latency consumption.",
            kpi: "Deployment of Real-Time Data Stream within 3 Months"
        }
    ],
    evaluation: [
        "Mastery of cloud data platforms (Snowflake, BigQuery, Redshift) and cost optimization.",
        "Deep expertise in ETL/ELT tools and orchestration (Airflow, dbt, Fivetran).",
        "Proficiency in data modeling (star, snowflake schemas) and SQL optimization.",
        "Experience with real-time streaming platforms (Kafka/Kinesis) and distributed processing (Apache Spark).",
        "Implementation of data quality checks and data lineage tracking.",
    ],
    technical_analysis: "The Data Engineering vetting focuses on the full life-cycle, not just SQL. Candidates must demonstrate proficiency in Python/Scala for data processing and a strategic understanding of the modern data stack (dbt/Snowflake). A critical assessment involves designing a complete data pipeline from ingestion (streaming vs. batch) through transformation (dbt models) to consumption (BI tools). We specifically test their ability to handle schema evolution and implement strict data governance and quality controls.",
    interlink_slugs: ["snowflake", "dbt", "apache-spark", "kafka", "python"],
    is_ready: true,
};

export default dataEngineering;
