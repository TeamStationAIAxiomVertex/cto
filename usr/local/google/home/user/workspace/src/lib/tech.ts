
import type { ElementType } from 'react';
import type { Icon } from "lucide-react";
import allTechData from '@/data/technologies'; // Corrected to be the single source of truth

export interface PainPoint {
  icon: Icon;
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
  | 'react'
  | 'typescript'
  | 'nextjs'
  | 'angular'
  | 'vue'
  | 'pinia'
  | 'remix'
  | 'svelte'
  | 'web-accessibility'
  | 'rx-js' // <-- MISSING SLUG 1 (For Angular/Reactive Programming)

  // Backend/Core Languages (12)
  | 'node'
  | 'java'
  | 'python'
  | 'golang'
  | 'c-sharp'
  | 'rust'
  | 'php'
  | 'kotlin'
  | 'scala'
  | 'erlang'
  | 'haskell'
  | 'elixir'

  // DevOps & Cloud (18)
  | 'devops-engineering'
  | 'aws'
  | 'azure'
  | 'google-cloud'
  | 'kubernetes'
  | 'docker'
  | 'terraform'
  | 'ansible'
  | 'jenkins'
  | 'ci-cd'
  | 'prometheus'
  | 'grafana'
  | 'istio'
  | 'helm'
  | 'vault'
  | 'cloudformation'
  | 'gitops'
  | 'serverless'

  // Data & AI (18)
  | 'data-engineering'
  | 'sql'
  | 'etl-elt'
  | 'apache-spark'
  | 'dbt'
  | 'snowflake'
  | 'airbyte'
  | 'data-governance'
  | 'machine-learning'
  | 'data-warehousing'
  | 'power-bi'
  | 'tableau'
  | 'fivetran'
  | 'looker'
  | 'presto'
  | 'kafka'
  | 'data-science'
  | 'llms'
  | 'pandas' // <-- MISSING SLUG 2 (Data Science/Python)
  | 'numpy' // <-- MISSING SLUG 3 (Data Science/Python)

  // Databases (7)
  | 'postgresql'
  | 'mongodb'
  | 'redis'
  | 'cassandra'
  | 'mysql'
  | 'dynamodb'
  | 'elasticsearch'

  // QA & Security (5)
  | 'playwright'
  | 'cypress'
  | 'qa-automation'
  | 'security-engineering'
  | 'penetration-testing'
  | 'jest' // <-- MISSING SLUG 4 (Testing Framework)
  | 'vitest' // <-- MISSING SLUG 5 (Testing Framework)

  // Architecture & Integrations (8)
  | 'microservices'
  | 'grpc'
  | 'rest-api-design'
  | 'event-sourcing'
  | 'domain-driven-design'
  | 'message-queues'
  | 'api-gateway'
  | 'system-design'
  | 'api-security' // <-- MISSING SLUG 6 (General Security/API)

  // Mobile (2)
  | 'react-native'
  | 'flutter'

  // Vetting & Cognitive AI (1)
  | 'axiom-cortex'
  | 'graphql' // <-- MISSING SLUG 7 (Alternative to REST/gRPC)
  | 'pact'
;


export interface AllTech {
  [key: string]: TechEntry;
}

// The single source of truth for all technology data.
export const allTech: AllTech = allTechData;


export function getAllTechSlugs(): string[] {
    return Object.keys(allTech);
}
