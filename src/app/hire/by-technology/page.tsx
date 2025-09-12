
import Link from 'next/link';
import { ArrowRight, Code, Database, BrainCircuit, GanttChartSquare, TestTube2, ShieldCheck, Server, Wallet, Layers, Component } from 'lucide-react';

const techCategories = [
  {
    name: 'APIs',
    icon: <Server className="h-6 w-6 text-primary" />,
    tech: ['NestJS/Fastify', 'FastAPI', 'Spring Boot', 'gRPC', 'Apollo GraphQL'],
    roleSlug: 'backend-services',
    roleName: 'Backend / Services'
  },
  {
    name: 'State & Data-fetching (FE)',
    icon: <Layers className="h-6 w-6 text-primary" />,
    tech: ['TanStack Query', 'Redux Toolkit', 'Zustand'],
    roleSlug: 'frontend-web',
    roleName: 'Frontend / Web'
  },
  {
    name: 'Data Modeling & Transform',
    icon: <Database className="h-6 w-6 text-primary" />,
    tech: ['dbt', 'Prisma', 'SQLAlchemy', 'Hibernate'],
    roleSlug: 'data-engineering-analytics',
    roleName: 'Data Engineering'
  },
  {
    name: 'Pipelines & Orchestration',
    icon: <Component className="h-6 w-6 text-primary" />,
    tech: ['Airflow/Prefect', 'Kafka', 'Flink/Beam'],
    roleSlug: 'data-engineering-analytics',
    roleName: 'Data Engineering'
  },
  {
    name: 'ML/LLM',
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    tech: ['PyTorch', 'Transformers', 'vLLM', 'MLflow', 'LangChain', 'pgvector'],
    roleSlug: 'ml-ai-llm-ops',
    roleName: 'ML/AI & LLM Ops'
  },
  {
    name: 'Observability',
    icon: <GanttChartSquare className="h-6 w-6 text-primary" />,
    tech: ['Prometheus', 'Grafana', 'OpenTelemetry', 'Jaeger', 'Loki'],
    roleSlug: 'platform-infra-sre',
    roleName: 'Platform / Infra / SRE'
  },
  {
    name: 'Security',
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    tech: ['Vault', 'CodeQL', 'SonarQube', 'Snyk', 'Trivy', 'OPA'],
    roleSlug: 'security-grc',
    roleName: 'Security & GRC'
  },
  {
    name: 'Testing',
    icon: <TestTube2 className="h-6 w-6 text-primary" />,
    tech: ['Playwright', 'Cypress', 'Jest/Vitest', 'PyTest', 'k6/Locust'],
    roleSlug: 'qa-quality-engineering',
    roleName: 'QA / Quality Engineering'
  },
  {
    name: 'Cloud Cost',
    icon: <Wallet className="h-6 w-6 text-primary" />,
    tech: ['CloudZero', 'Infracost', 'AWS Cost Explorer'],
    roleSlug: 'finops-biztech',
    roleName: 'FinOps / BizTech'
  }
];


export default function HireByTechnologyPage() {
  return (
    <main className="container py-12">
       <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/hire" className="hover:text-foreground">Hire</Link> / <span>By Technology</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Your Stack, Their Expertise</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            You're here because finding an engineer who has simply "used" a technology isn't enough. You need someone who has mastered it to solve real-world problems. We don't just find candidates with keyword matches; we find experts with proven, deeply-rooted expertise in the specific technologies you rely on.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {techCategories.map((category) => (
          <div key={category.name} className="rounded-lg border bg-card p-6 flex flex-col">
            <div className="flex items-center gap-3">
              {category.icon}
              <h2 className="text-xl font-bold text-foreground">{category.name}</h2>
            </div>
            <div className="flex flex-wrap gap-2 my-4">
              {category.tech.map(tech => (
                <span key={tech} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{tech}</span>
              ))}
            </div>
            <div className="flex-grow"></div>
            <Link href={`/hire/by-role/${category.roleSlug}`} className="group mt-4 flex items-center text-sm font-semibold text-primary">
              See <span className="hidden sm:inline-block mx-1">{category.roleName}</span> Roles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
