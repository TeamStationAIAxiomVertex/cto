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

  // Backend/Core Languages (12)
  | "node"
  | "java"
  | "python"
  | "c-sharp"
  | "rust"
  | "php"
  | "kotlin"
  | "scala"
  | "erlang"
  | "haskell"
  | "elixir"

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

  // Databases (7)
  | "postgresql"
  | "mongodb"
  | "redis"
  | "cassandra"
  | "mysql"
  | "dynamodb"
  | "elasticsearch"

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
  | "langchain"
  | "pytorch"
  | "transformers"
  | "go"
  | "preact"
  | "ember-js"
  | "solid-js"
  | "jquery"
  | "nuxt-js"
  | "gatsby"
  | "sveltekit"
  | "astro"
  | "redux"
  | "mobx"
  | "aws-cost-explorer"
  | "socketio"
  | "ragas"
  | "airflow"
  | "sqlalchemy"
  | "swift"
  | "memcached"
  | "trivy"
  | "flink"
  | "iso"
  | "soc"
  | "opa"
  | "codeql"
  | "jaeger"
  | "gremlin"
  | "pytest"
  | "hipaa"
  | "ray"
  | "vllm"
  | "net";

export type AllTech = {
  [key in TechSlug]: TechEntry;
};

// The single source of truth for all technology data.
export const allTech: AllTech = allTechData;

export function getAllTechSlugs(): TechSlug[] {
  return Object.keys(allTech) as TechSlug[];
}
