
import Link from 'next/link';
import { ArrowRight, Code, Database, BrainCircuit, GanttChartSquare, TestTube2, ShieldCheck, Server, Wallet, Layers, Component } from 'lucide-react';
import type { Metadata } from 'next';
import { SiReact, SiNodedotjs, SiPython, SiGo, SiDotnet, SiRubyonrails, SiPhp, SiGraphql, SiAmazonaws, SiKubernetes, SiDocker, SiTerraform, SiGithubactions, SiIstio, SiPrometheus, SiOpentelemetry, SiJaeger, SiHashicorp, SiNextdotjs, SiVite, SiAngular, SiVuedotjs, SiRedux, SiApollographql, SiTailwindcss, SiStorybook, SiTestinglibrary, SiCypress, SiPostgresql, SiMysql, SiMicrosoftsqlserver, SiRedis, SiMemcached, SiTypescript, SiPrisma, SiAmazondynamodb, SiSnowflake, SiGooglebigquery, SiAmazonredshift, SiDbt, SiApacheairflow, SiFivetran, SiApachekafka, SiApachespark, SiLooker, SiTableau, SiPowerbi, SiDatadog, SiNewrelic, SiSentry, SiPytorch, SiTensorflow, SiHuggingface, SiOpenai, SiVercel, SiLangchain, SiWeaviate, SiPinecone, SiMlflow, SiJira, SiNotion, SiFigma, SiGoogleanalytics, SiAmplitude, SiMixpanel, SiJest, SiVitest, SiJunit5, SiK6, SiGremlin, SiOkta, SiAuth0, SiVault, SiSnyk, SiTrivy, SiOpenpolicyagent, SiSocketdotio, SiStripe, SiSalesforce, SiHubspot, SiNginx, SiAirtable, SiZapier } from 'react-icons/si';

export const metadata: Metadata = {
  title: 'Hire Nearshore Developers by Technology | TeamStation AI',
  description: 'Hire vetted LATAM engineers with expertise in your stack: React, Node, Python, Go, AWS, GCP, Kubernetes, AI/ML, and more. Secure and compliant staff augmentation.',
  keywords: 'hire by technology, nearshore developers, latam engineers, react developers, node developers, python developers, aws experts, kubernetes experts, ai/ml engineers',
};

const techCategories = [
  {
    name: 'APIs & Backend Services',
    slug: 'backend-services',
    pain: "Is your backend a bottleneck or a force multiplier?",
    icon: <Server className="h-6 w-6 text-primary" />,
    tech: [
      { name: 'Node.js', slug: 'node', icon: <SiNodedotjs /> },
      { name: 'Python', slug: 'python', icon: <SiPython /> },
      { name: 'Java', slug: 'java', icon: <SiPython /> },
      { name: 'Go', slug: 'go', icon: <SiGo /> },
      { name: '.NET', slug: 'net', icon: <SiDotnet /> },
      { name: 'Ruby on Rails', slug: 'ruby', icon: <SiRubyonrails /> },
      { name: 'PHP (Laravel/Symphony)', slug: 'php', icon: <SiPhp /> },
      { name: 'gRPC', slug: 'grpc', icon: <SiGo /> },
      { name: 'GraphQL', slug: 'graphql', icon: <SiGraphql /> },
    ],
  },
  {
    name: 'Frontend & UI/UX',
    slug: 'frontend-web',
    pain: "Is a slow, buggy UI costing you customers?",
    icon: <Layers className="h-6 w-6 text-primary" />,
    tech: [
      { name: 'React/TypeScript', slug: 'react', icon: <SiReact /> },
      { name: 'Next.js', slug: 'nextjs', icon: <SiNextdotjs /> },
      { name: 'Vite', slug: 'vite', icon: <SiVite /> },
      { name: 'TanStack Query', slug: 'tanstack', icon: <SiReact /> },
      { name: 'Redux/Zustand', slug: 'redux', icon: <SiRedux /> },
      { name: 'Tailwind/shadcn', slug: 'tailwind', icon: <SiTailwindcss /> },
      { name: 'Testing Library', slug: 'testing', icon: <SiTestinglibrary /> },
    ],
  },
  {
    name: 'Data Modeling & Databases',
    slug: 'data-engineering-analytics',
    pain: "Is your data model built for scale or for future refactors?",
    icon: <Database className="h-6 w-6 text-primary" />,
    tech: [
      { name: 'PostgreSQL', slug: 'postgresql', icon: <SiPostgresql /> },
      { name: 'MySQL', slug: 'mysql', icon: <SiMysql /> },
      { name: 'SQL Server', slug: 'sql', icon: <SiMicrosoftsqlserver /> },
      { name: 'dbt', slug: 'dbt', icon: <SiDbt /> },
      { name: 'Prisma', slug: 'prisma', icon: <SiPrisma /> },
      { name: 'SQLAlchemy', slug: 'sqlalchemy', icon: <SiPython /> },
      { name: 'Hibernate', slug: 'hibernate', icon: <SiPython /> },
      { name: 'Redis', slug: 'redis', icon: <SiRedis /> },
      { name: 'Memcached', slug: 'memcached', icon: <SiMemcached /> },
    ],
  },
  {
    name: 'Pipelines & Orchestration',
    slug: 'data-engineering-analytics',
    pain: "Are your data pipelines brittle and unreliable?",
    icon: <Component className="h-6 w-6 text-primary" />,
    tech: [
      { name: 'Airflow/Prefect', slug: 'airflow', icon: <SiApacheairflow /> },
      { name: 'Kafka/RabbitMQ', slug: 'kafka', icon: <SiApachekafka /> },
      { name: 'Flink/Beam', slug: 'flink', icon: <SiApachespark /> },
      { name: 'Kubernetes', slug: 'kubernetes', icon: <SiKubernetes /> },
      { name: 'Docker', slug: 'docker', icon: <SiDocker /> },
    ],
  },
  {
    name: 'ML/AI & LLM Ops',
    slug: 'ml-ai-llm-ops',
    pain: "Struggling to move AI from a notebook to production?",
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    tech: [
      { name: 'PyTorch', slug: 'pytorch', icon: <SiPytorch /> },
      { name: 'Transformers', slug: 'transformers', icon: <SiHuggingface /> },
      { name: 'vLLM', slug: 'vllm', icon: <SiVercel /> },
      { name: 'Ray Serve', slug: 'ray', icon: <SiDatadog /> },
      { name: 'LangChain', slug: 'langchain', icon: <SiLangchain /> },
      { name: 'pgvector/Pinecone', slug: 'pgvector', icon: <SiPinecone /> },
      { name: 'MLflow/W&B', slug: 'mlflow', icon: <SiMlflow /> },
      { name: 'Ragas', slug: 'ragas', icon: <SiPython /> },
    ],
  },
  {
    name: 'Observability & SRE',
    slug: 'platform-infra-sre',
    pain: "Are you debugging in the dark when systems fail?",
    icon: <GanttChartSquare className="h-6 w-6 text-primary" />,
    tech: [
      { name: 'Prometheus', slug: 'prometheus', icon: <SiPrometheus /> },
      { name: 'Grafana', slug: 'grafana', icon: <SiGrafana /> },
      { name: 'OpenTelemetry', slug: 'opentelemetry', icon: <SiOpentelemetry /> },
      { name: 'Jaeger/Loki', slug: 'jaeger', icon: <SiJaeger /> },
      { name: 'Terraform/Pulumi', slug: 'terraform', icon: <SiTerraform /> },
      { name: 'Istio/Linkerd', slug: 'istio', icon: <SiIstio /> },
    ],
  },
  {
    name: 'Security & GRC',
    slug: 'security-grc',
    pain: "Is compliance an afterthought or built into your stack?",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    tech: [
      { name: 'Vault', slug: 'vault', icon: <SiVault /> },
      { name: 'Okta/Auth0', slug: 'okta', icon: <SiOkta /> },
      { name: 'CodeQL/Snyk', slug: 'codeql', icon: <SiSnyk /> },
      { name: 'Trivy', slug: 'trivy', icon: <SiTrivy /> },
      { name: 'OPA', slug: 'opa', icon: <SiOpenpolicyagent /> },
      { name: 'SOC 2', slug: 'soc', icon: <SiJira /> },
      { name: 'ISO 27001', slug: 'iso', icon: <SiJira /> },
      { name: 'HIPAA', slug: 'hipaa', icon: <SiJira /> },
    ],
  },
  {
    name: 'Testing & Quality Engineering',
    slug: 'qa-quality-engineering',
    pain: "Does 'shipping fast' also mean 'shipping bugs'?",
    icon: <TestTube2 className="h-6 w-6 text-primary" />,
    tech: [
      { name: 'Playwright/Cypress', slug: 'playwright', icon: <SiCypress /> },
      { name: 'Jest/Vitest', slug: 'jest', icon: <SiJest /> },
      { name: 'PyTest/JUnit', slug: 'pytest', icon: <SiJunit5 /> },
      { name: 'k6/Locust', slug: 'k6', icon: <SiK6 /> },
      { name: 'Pact', slug: 'pact', icon: <SiJira /> },
      { name: 'Gremlin/Litmus', slug: 'gremlin', icon: <SiGremlin /> },
    ],
  },
  {
    name: 'Cloud FinOps & BizTech',
    slug: 'finops-biztech',
    pain: "Are runaway cloud costs eating into your margins?",
    icon: <Wallet className="h-6 w-6 text-primary" />,
    tech: [
      { name: 'CloudZero/Infracost', slug: 'cloudzero', icon: <SiAmazonaws /> },
      { name: 'AWS Cost Explorer', slug: 'aws', icon: <SiAmazonaws /> },
      { name: 'Salesforce', slug: 'salesforce', icon: <SiSalesforce /> },
      { name: 'HubSpot', slug: 'hubspot', icon: <SiHubspot /> },
      { name: 'Hightouch/Census', slug: 'hightouch', icon: <SiAirtable /> },
    ],
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
                  <Link href={`/hire/by-technology/${tech.slug}`} key={tech.slug} className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors">
                    <span className="text-base">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </Link>
                )
              )}
            </div>
            <div className="flex-grow"></div>
            <Link href={`/hire/by-role/${category.slug}`} className="group mt-4 flex items-center text-sm font-semibold text-primary">
              Related Role: {category.name}
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
