
import type { ElementType } from 'react';
import type { Icon } from "lucide-react";
import {
  AlertTriangle,
  AppWindow,
  BadgeCheck,
  BarChart,
  BookOpen,
  BrainCircuit,
  Bug,
  CheckCircle,
  ChevronsRight,
  ClipboardList,
  Clock,
  Cloud,
  Code,
  CodeSquare,
  Codepen,
  Component,
  Compass,
  Contact,
  Cpu,
  Database,
  Dna,
  DollarSign,
  DraftingCompass,
  ExternalLink,
  FileLock,
  FileText,
  GanttChartSquare,
  GitBranch,
  GitCompare,
  Github,
  Gitlab,
  Globe,
  Handshake,
  HelpCircle,
  Key,
  KeyRound,
  Laptop,
  Layers,
  Link,
  Linkedin,
  Mail,
  Map,
  MessageCircle,
  MessageSquare,
  Package,
  PenTool,
  PersonStanding,
  Plane,
  Pyramid,
  RadioTower,
  Rocket,
  Scale,
  Search,
  Server,
  Settings,
  ShieldCheck,
  Siren,
  Slack,
  Sprout,
  Star,
  Target,
  TestTube2,
  TrendingUp,
  Trophy,
  UserCheck,
  UserCog,
  UserPlus,
  UserX,
  Users,
  Wallet,
  Webhook,
  Workflow,
  Youtube,
  Zap,
} from "lucide-react";

import allTechData from '@/data/technologies';


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
  | 'rx-js' 

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

  // Data & AI (23)
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
  | 'pandas'
  | 'numpy' 
  | 'langchain'
  | 'pytorch'
  | 'transformers'

  // Databases (7)
  | 'postgresql'
  | 'mongodb'
  | 'redis'
  | 'cassandra'
  | 'mysql'
  | 'dynamodb'
  | 'elasticsearch'

  // QA & Security (7)
  | 'playwright'
  | 'cypress'
  | 'qa-automation'
  | 'security-engineering'
  | 'penetration-testing'
  | 'jest'
  | 'vitest'

  // Architecture & Integrations (9)
  | 'microservices'
  | 'grpc'
  | 'rest-api-design'
  | 'event-sourcing'
  | 'domain-driven-design'
  | 'message-queues'
  | 'api-gateway'
  | 'system-design'
  | 'api-security'

  // Mobile (2)
  | 'react-native'
  | 'flutter'

  // Vetting & Cognitive AI (2)
  | 'axiom-cortex'
  | 'graphql'
;


export interface AllTech {
  [key: string]: TechEntry;
}

export const allTech: AllTech = allTechData;


export function getAllTechSlugs(): string[] {
    return Object.keys(allTech);
}
export const techCategories: TechCategory[] = [
  {
    name: 'APIs & Backend Services',
    slug: 'backend-services',
    pain: "Is your backend a bottleneck or a force multiplier?",
    icon: Server,
    tech: [
      { name: 'Node.js', slug: 'node' },
      { name: 'Python', slug: 'python' },
      { name: 'Java', slug: 'java' },
      { name: 'Go', slug: 'golang' },
      { name: '.NET', slug: 'net' },
      { name: 'Ruby on Rails', slug: 'ruby' },
      { name: 'PHP (Laravel/Symphony)', slug: 'php' },
      { name: 'gRPC', slug: 'grpc' },
      { name: 'GraphQL', slug: 'graphql' },
    ],
  },
  {
    name: 'Frontend & UI/UX',
    slug: 'frontend-web',
    pain: "Is a slow, buggy UI costing you customers?",
    icon: Layers,
    tech: [
      { name: 'React/TypeScript', slug: 'react' },
      { name: 'Next.js', slug: 'nextjs' },
      { name: 'Vite', slug: 'vite' },
      { name: 'Angular', slug: 'angular' },
      { name: 'Vue.js', slug: 'vue' },
      { name: 'TanStack Query', slug: 'tanstack' },
      { name: 'Redux/Zustand', slug: 'redux' },
      { name: 'Tailwind/shadcn', slug: 'tailwind' },
      { name: 'Testing Library', slug: 'testing' },
    ],
  },
    {
    name: 'Mobile & Cross-Platform',
    slug: 'mobile-cross-platform',
    pain: "Is your mobile experience falling behind?",
    icon: Plane,
    tech: [
        { name: 'React Native', slug: 'react-native' },
        { name: 'Flutter', slug: 'flutter' },
        { name: 'Swift', slug: 'swift' },
        { name: 'Kotlin', slug: 'kotlin' },
        { name: 'Socket.IO', slug: 'socketio' },
    ],
  },
  {
    name: 'Data Modeling & Databases',
    slug: 'data-engineering-analytics',
    pain: "Is your data model built for scale or for future refactors?",
    icon: Database,
    tech: [
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'MySQL', slug: 'mysql' },
      { name: 'SQL Server', slug: 'sql' },
      { name: 'dbt', slug: 'dbt' },
      { name: 'Prisma', slug: 'prisma' },
      { name: 'SQLAlchemy', slug: 'sqlalchemy' },
      { name: 'Hibernate', slug: 'hibernate' },
      { name: 'Redis', slug: 'redis' },
      { name: 'Memcached', slug: 'memcached' },
      { name: 'DynamoDB', slug: 'dynamodb' },
    ],
  },
  {
    name: 'Pipelines & Orchestration',
    slug: 'data-engineering-analytics',
    pain: "Are your data pipelines brittle and unreliable?",
    icon: Component,
    tech: [
      { name: 'Airflow/Prefect', slug: 'airflow' },
      { name: 'Kafka/RabbitMQ', slug: 'kafka' },
      { name: 'Flink/Beam', slug: 'flink' },
      { name: 'Kubernetes', slug: 'kubernetes' },
      { name: 'Docker', slug: 'docker' },
    ],
  },
  {
    name: 'ML/AI & LLM Ops',
    slug: 'ml-ai-llm-ops',
    pain: "Struggling to move AI from a notebook to production?",
    icon: BrainCircuit,
    tech: [
      { name: 'PyTorch', slug: 'pytorch' },
      { name: 'Transformers', slug: 'transformers' },
      { name: 'vLLM', slug: 'vllm' },
      { name: 'Ray Serve', slug: 'ray' },
      { name: 'LangChain', slug: 'langchain' },
      { name: 'pgvector/Pinecone', slug: 'pgvector' },
      { name: 'MLflow/W&B', slug: 'mlflow' },
      { name: 'Ragas', slug: 'ragas' },
    ],
  },
  {
    name: 'Observability & SRE',
    slug: 'platform-infra-sre',
    pain: "Are you debugging in the dark when systems fail?",
    icon: GanttChartSquare,
    tech: [
      { name: 'Prometheus', slug: 'prometheus' },
      { name: 'Grafana', slug: 'grafana' },
      { name: 'OpenTelemetry', slug: 'opentelemetry' },
      { name: 'Jaeger/Loki', slug: 'jaeger' },
      { name: 'Terraform/Pulumi', slug: 'terraform' },
      { name: 'Istio/Linkerd', slug: 'istio' },
    ],
  },
  {
    name: 'Security & GRC',
    slug: 'security-grc',
    pain: "Is compliance an afterthought or built into your stack?",
    icon: ShieldCheck,
    tech: [
      { name: 'Vault', slug: 'vault' },
      { name: 'Okta/Auth0', slug: 'okta' },
      { name: 'CodeQL/Snyk', slug: 'codeql' },
      { name: 'Trivy', slug: 'trivy' },
      { name: 'OPA', slug: 'opa' },
      { name: 'SOC 2', slug: 'soc' },
      { name: 'ISO 27001', slug: 'iso' },
      { name: 'HIPAA', slug: 'hipaa' },
    ],
  },
  {
    name: 'Testing & Quality Engineering',
    slug: 'qa-quality-engineering',
    pain: "Does 'shipping fast' also mean 'shipping bugs'?",
    icon: TestTube2,
    tech: [
      { name: 'Playwright/Cypress', slug: 'playwright' },
      { name: 'Jest/Vitest', slug: 'jest' },
      { name: 'PyTest/JUnit', slug: 'pytest' },
      { name: 'k6/Locust', slug: 'k6' },
      { name: 'Pact', slug: 'pact' },
      { name: 'Gremlin/Litmus', slug: 'gremlin' },
    ],
  },
  {
    name: 'Cloud FinOps & BizTech',
    slug: 'finops-biztech',
    pain: "Are runaway cloud costs eating into your margins?",
    icon: Wallet,
    tech: [
      { name: 'CloudZero/Infracost', slug: 'cloudzero' },
      { name: 'AWS Cost Explorer', slug: 'aws' },
      { name: 'Salesforce', slug: 'salesforce' },
      { name: 'HubSpot', slug: 'hubspot' },
      { name: 'Hightouch/Census', slug: 'hightouch' },
    ],
  }
];
