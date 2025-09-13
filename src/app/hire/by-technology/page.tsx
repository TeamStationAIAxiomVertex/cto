
import Link from 'next/link';
import { ArrowRight, Code, Database, BrainCircuit, GanttChartSquare, TestTube2, ShieldCheck, Server, Wallet, Layers, Component } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Nearshore Developers by Technology | TeamStation AI',
  description: 'Hire vetted LATAM engineers with expertise in your stack: React, Node, Python, Go, AWS, GCP, Kubernetes, AI/ML, and more. Secure and compliant staff augmentation.',
};

const techCategories = [
  {
    name: 'APIs & Backend Services',
    pain: "Is your backend a bottleneck or a force multiplier?",
    icon: <Server className="h-6 w-6 text-primary" />,
    tech: ['Node (NestJS/Fastify)', 'Python (FastAPI/Django)', 'Java (Spring Boot)', 'Go (Gin/Fiber)', '.NET', 'gRPC', 'GraphQL (Apollo)'],
    roleSlug: 'backend-services',
    roleName: 'Backend / Services'
  },
  {
    name: 'Frontend & UI/UX',
    pain: "Is a slow, buggy UI costing you customers?",
    icon: <Layers className="h-6 w-6 text-primary" />,
    tech: ['React/TypeScript', 'Next.js/Vite', 'TanStack Query', 'Redux Toolkit/Zustand', 'Tailwind/shadcn/MUI', 'Testing Library'],
    roleSlug: 'frontend-web',
    roleName: 'Frontend / Web'
  },
  {
    name: 'Data Modeling & Databases',
    pain: "Is your data model built for scale or for future refactors?",
    icon: <Database className="h-6 w-6 text-primary" />,
    tech: ['PostgreSQL', 'MySQL', 'SQL Server', 'dbt', 'Prisma', 'SQLAlchemy', 'Hibernate', 'Redis', 'Memcached'],
    roleSlug: 'data-engineering-analytics',
    roleName: 'Data Engineering'
  },
  {
    name: 'Pipelines & Orchestration',
    pain: "Are your data pipelines brittle and unreliable?",
    icon: <Component className="h-6 w-6 text-primary" />,
    tech: ['Airflow/Prefect/Dagster', 'Kafka/RabbitMQ/NATS', 'Flink/Beam', 'Kubernetes', 'Docker'],
    roleSlug: 'data-engineering-analytics',
    roleName: 'Data Engineering'
  },
  {
    name: 'ML/AI & LLM Ops',
    pain: "Struggling to move AI from a notebook to production?",
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    tech: ['PyTorch', 'Transformers', 'vLLM', 'Ray Serve', 'LangChain/LlamaIndex', 'pgvector/Pinecone', 'MLflow/W&B', 'Ragas'],
    roleSlug: 'ml-ai-llm-ops',
    roleName: 'ML/AI & LLM Ops'
  },
  {
    name: 'Observability & SRE',
    pain: "Are you debugging in the dark when systems fail?",
    icon: <GanttChartSquare className="h-6 w-6 text-primary" />,
    tech: ['Prometheus', 'Grafana', 'OpenTelemetry', 'Jaeger/Loki', 'Terraform/Pulumi', 'Istio/Linkerd'],
    roleSlug: 'platform-infra-sre',
    roleName: 'Platform / Infra / SRE'
  },
  {
    name: 'Security & GRC',
    pain: "Is compliance an afterthought or built into your stack?",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    tech: ['Vault', 'Okta/Auth0', 'CodeQL/SonarQube/Snyk', 'Trivy', 'OPA', 'SOC 2', 'ISO 27001', 'HIPAA'],
    roleSlug: 'security-grc',
    roleName: 'Security & GRC'
  },
  {
    name: 'Testing & Quality Engineering',
    pain: "Does 'shipping fast' also mean 'shipping bugs'?",
    icon: <TestTube2 className="h-6 w-6 text-primary" />,
    tech: ['Playwright/Cypress', 'Jest/Vitest', 'PyTest/JUnit', 'k6/Locust', 'Pact', 'Gremlin/Litmus'],
    roleSlug: 'qa-quality-engineering',
    roleName: 'QA / Quality Engineering'
  },
  {
    name: 'Cloud FinOps & BizTech',
    pain: "Are runaway cloud costs eating into your margins?",
    icon: <Wallet className="h-6 w-6 text-primary" />,
    tech: ['CloudZero/Infracost', 'AWS Cost Explorer', 'Salesforce', 'HubSpot', 'Hightouch/Census'],
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
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Stop Hiring for Keywords. Start Hiring for Mastery.</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            You're here because finding an engineer who has simply "used" a technology isn't enough. You need someone who has mastered it to solve real-world problems. We provide experts with proven, deeply-rooted expertise in the specific technologies that power your business.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {techCategories.map((category) => (
          <div key={category.name} className="group rounded-lg border bg-card p-6 flex flex-col">
             <p className="text-sm font-semibold text-primary">{category.pain}</p>
            <div className="flex items-center gap-3 mt-3">
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
              Proof: See {category.roleName} Roles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>

       <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to Hire for Your Stack?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            Let's discuss your specific technology needs. In 15 minutes, we can map your stack to our evaluation process and find the right experts for your team.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Strategy Call</Link>
      </div>
    </main>
  );
}
