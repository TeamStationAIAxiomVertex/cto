
import type { ElementType } from "react";
import type { LucideIcon } from "lucide-react";
import allTechData from "@/data/technologies"; // Corrected to be the single source of truth

export interface PainPoint {
  icon: LucideIcon;
  pain: string;
  problem: string;
  solution: string;
  kpi: string;
}

export interface TechEntry {
  name: string;
  category: string;
  categorySlug: string;
  seo_title: string;
  meta_description: string;
  intro: string;
  pains: PainPoint[];
  evaluation: string[];
  technical_analysis: string;
  interlink_slugs: string[];
  comparison_slugs?: string[]; // Added for more specific interlinking
}

export type TechSlug =
  // Frontend/Full-Stack (10)
  | "react"
  | "typescript"
  | "nextjs"
  | "angular"
  | "vue"
  | "pinia"
  | "remix"
  | "svelte"
  | "web-accessibility"
  | "rx-js"
  | "vite"
  | "tailwind"
  | "tanstack"
  | "testing"

  // Backend/Core Languages (12)
  | "node"
  | "java"
  | "python"
  | "golang"
  | "c-sharp"
  | "rust"
  | "php"
  | "kotlin"
  | "scala"
  | "erlang"
  | "haskell"
  | "elixir"
  | "ruby"

  // DevOps & Cloud (18)
  | "devops-engineering"
  | "aws"
  | "azure"
  | "google-cloud"
  | "kubernetes"
  | "docker"
  | "terraform"
  | "ansible"
  | "jenkins"
  | "ci-cd"
  | "prometheus"
  | "grafana"
  | "istio"
  | "helm"
  | "vault"
  | "cloudformation"
  | "gitops"
  | "serverless"
  | "opentelemetry"
  | "jaeger"

  // Data & AI (18)
  | "data-engineering"
  | "sql"
  | "etl-elt"
  | "apache-spark"
  | "dbt"
  | "snowflake"
  | "airbyte"
  | "data-governance"
  | "machine-learning"
  | "data-warehousing"
  | "power-bi"
  | "tableau"
  | "fivetran"
  | "looker"
  | "presto"
  | "kafka"
  | "data-science"
  | "llms"
  | "pandas"
  | "numpy"
  | "vllm"
  | "pgvector"
  | "mlflow"
  | "langchain"
  | "ragas"
  | "hugging-face"
  | "transformers"

  // Databases (7)
  | "postgresql"
  | "mongodb"
  | "redis"
  | "cassandra"
  | "mysql"
  | "dynamodb"
  | "elasticsearch"
  | "prisma"
  | "hibernate"

  // QA & Security (7)
  | "playwright"
  | "cypress"
  | "qa-automation"
  | "security-engineering"
  | "penetration-testing"
  | "jest"
  | "vitest"
  | "k6"
  | "pact"
  | "codeql"
  | "opa"
  | "soc"
  | "iso"
  | "trivy"
  | "snyk"

  // Architecture & Integrations (8)
  | "microservices"
  | "grpc"
  | "rest-api-design"
  | "event-sourcing"
  | "domain-driven-design"
  | "message-queues"
  | "api-gateway"
  | "system-design"
  | "api-security"

  // Mobile (3)
  | "react-native"
  | "flutter"
  | "swift"

  // Vetting & Cognitive AI (2)
  | "axiom-cortex"
  | "graphql"
  
  // Cloud FinOps & BizTech
  | "cloudzero"
  | "salesforce"
  | "hubspot"
  | "hightouch";

export interface AllTech {
  [key: string]: TechEntry;
}

// The single source of truth for all technology data.
export const allTech: AllTech = allTechData;

export function getAllTechSlugs(): string[] {
  return Object.keys(allTech);
}
