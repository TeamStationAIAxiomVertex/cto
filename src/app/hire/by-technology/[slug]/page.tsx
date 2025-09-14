
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle, BrainCircuit, ShieldCheck, FileText, Scale, UserX, UserCheck, AlertTriangle } from 'lucide-react';
import { Tooltip } from '@/components/Tooltip';

const allTech: { 
    [key: string]: { 
        name: string; 
        category: string; 
        categorySlug: string; 
        intro: string;
        pains: {
            icon: React.ReactNode;
            pain: string;
            problem: string;
            solution: string;
            kpi: string;
        }[];
        evaluation: string[];
    } 
} = {
  'react': { 
    name: 'React/TypeScript', 
    category: 'Frontend & UI/UX', 
    categorySlug: 'frontend-web',
    intro: "You're not here because you need another developer who 'knows React.' You're here because your application feels sluggish, your state management is a tangled mess, and your component library is a collection of one-off hacks. You need a true React expert who obsesses over performance, architecture, and user experience as much as you do.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-yellow-400" />,
            pain: "Is your app slow because of endless re-renders?",
            problem: "Many 'senior' React developers don't profile their code, leading to slow, janky UIs that frustrate users and kill conversion rates.",
            solution: "Our engineers are vetted for their deep understanding of the React render cycle. They master performance tools to hunt down bottlenecks and use techniques like memoization and virtualization to ensure a buttery-smooth experience.",
            kpi: "Expertise in React Profiler & why-did-you-render"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-yellow-400" />,
            pain: "Is your state management a spaghetti of props and contexts?",
            problem: "Legacy patterns and a poor grasp of server-side state lead to complex, bug-prone applications that are a nightmare to maintain and scale.",
            solution: "We select for expertise in modern state management, separating client state (e.g., Zustand) from server cache (e.g., TanStack Query) for a simpler, more resilient architecture.",
            kpi: "Proven ability to architect scalable state"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-yellow-400" />,
            pain: "Is your component library just a folder of inconsistent parts?",
            problem: "Without strong API design and accessibility standards, your component library becomes a source of tech debt, not a force multiplier.",
            solution: "We hire for strong component API design, accessibility (ARIA), and experience with tools like Storybook. You get a robust, reusable design system, not just a UI that 'looks right.'",
            kpi: "Focus on reusable & accessible components"
        }
    ],
    evaluation: ['Advanced hooks', 'State management (Zustand/Redux)', 'Component API design', 'Performance profiling'] 
  },
  'node': { name: 'Node.js', category: 'APIs & Backend Services', categorySlug: 'backend-services', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Deep event loop knowledge', 'Async/await patterns', 'Experience with NestJS/Fastify', 'API security best practices'] },
  'python': { name: 'Python', category: 'APIs & Backend Services', categorySlug: 'backend-services', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['WSGI/ASGI servers', 'ORM usage (SQLAlchemy)', 'Experience with FastAPI/Django', 'Concurrency models (asyncio, threading)'] },
  'java': { name: 'Java', category: 'APIs & Backend Services', categorySlug: 'backend-services', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Spring Boot expertise', 'JVM tuning basics', 'Hibernate/JPA experience', 'Microservice patterns'] },
  'go': { name: 'Go', category: 'APIs & Backend Services', categorySlug: 'backend-services', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Goroutines and channels', 'Standard library proficiency', 'Experience with Gin/Fiber', 'Interface design'] },
  'net': { name: '.NET', category: 'APIs & Backend Services', categorySlug: 'backend-services', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['ASP.NET Core patterns', 'Entity Framework Core', 'LINQ proficiency', 'Azure integrations'] },
  'grpc': { name: 'gRPC', category: 'APIs & Backend Services', categorySlug: 'backend-services', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Protobuf definitions', 'Streaming patterns', 'Error handling and metadata', 'Performance trade-offs vs. REST'] },
  'graphql': { name: 'GraphQL', category: 'APIs & Backend Services', categorySlug: 'backend-services', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Schema design', 'Resolvers and data loaders', 'Apollo Federation/stitching', 'Caching strategies'] },
  'nextjs': { name: 'Next.js', category: 'Frontend & UI/UX', categorySlug: 'frontend-web', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['App vs. Pages Router', 'Server components vs. client', 'Data fetching patterns', 'Caching and revalidation'] },
  'vite': { name: 'Vite', category: 'Frontend & UI/UX', categorySlug: 'frontend-web', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Build/dev server configuration', 'Plugin ecosystem', 'Module Federation', 'Performance optimization'] },
  'tanstack': { name: 'TanStack Query', category: 'Frontend & UI/UX', categorySlug: 'frontend-web', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Server state management', 'Caching/invalidation strategies', 'Optimistic updates', 'Infinite scrolling patterns'] },
  'redux': { name: 'Redux Toolkit/Zustand', category: 'Frontend & UI/UX', categorySlug: 'frontend-web', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Global vs. local state', 'Middleware usage', 'Performance with large stores', 'Selector optimization'] },
  'tailwind': { name: 'Tailwind/shadcn/MUI', category: 'Frontend & UI/UX', categorySlug: 'frontend-web', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Design system implementation', 'Theming and customization', 'Component library architecture', 'Utility-first best practices'] },
  'testing': { name: 'Testing Library', category: 'Frontend & UI/UX', categorySlug: 'frontend-web', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['User-centric testing', 'Mocking API requests', 'Testing custom hooks', 'Integration testing'] },
  'postgresql': { name: 'PostgreSQL', category: 'Data Modeling & Databases', categorySlug: 'data-engineering-analytics', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Advanced indexing', 'Query optimization (EXPLAIN)', 'JSONB usage', 'Connection pooling'] },
  'mysql': { name: 'MySQL', category: 'Data Modeling & Databases', categorySlug: 'data-engineering-analytics', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Storage engines (InnoDB)', 'Replication setup', 'Indexing strategies', 'Performance tuning'] },
  'sql': { name: 'SQL Server', category: 'Data Modeling & Databases', categorySlug: 'data-engineering-analytics', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['T-SQL proficiency', 'Window functions', 'Indexing and query plans', 'Stored procedure design'] },
  'dbt': { name: 'dbt', category: 'Data Modeling & Databases', categorySlug: 'data-engineering-analytics', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Model design and materialization', 'Jinja/macros for DRY code', 'Source freshness and testing', 'Deployment and orchestration'] },
  'prisma': { name: 'Prisma', category: 'Data Modeling & Databases', categorySlug: 'data-engineering-analytics', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Schema design and migrations', 'Query engine performance', 'Type-safe database access', 'Transaction management'] },
  'sqlalchemy': { name: 'SQLAlchemy', category: 'Data Modeling & Databases', categorySlug: 'data-engineering-analytics', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Core vs. ORM', 'Session management', 'Lazy vs. eager loading', 'Alembic for migrations'] },
  'hibernate': { name: 'Hibernate', category: 'Data Modeling & Databases', categorySlug: 'data-engineering-analytics', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Entity lifecycle', 'Caching strategies (L1/L2)', 'N+1 problem solving', 'JPQL/HQL proficiency'] },
  'redis': { name: 'Redis', category: 'Data Modeling & Databases', categorySlug: 'data-engineering-analytics', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Data structures usage', 'Caching patterns (e.g., cache-aside)', 'Persistence options', 'High availability setup'] },
  'memcached': { name: 'Memcached', category: 'Data Modeling & Databases', categorySlug: 'data-engineering-analytics', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Cache invalidation strategies', 'Slab allocator knowledge', 'Use cases vs. Redis', 'Scaling strategies'] },
  'airflow': { name: 'Airflow/Prefect/Dagster', category: 'Pipelines & Orchestration', categorySlug: 'data-engineering-analytics', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['DAG design and scheduling', 'Dynamic task generation', 'Idempotency and backfills', 'Scaling executors'] },
  'kafka': { name: 'Kafka/RabbitMQ/NATS', category: 'Pipelines & Orchestration', categorySlug: 'data-engineering-analytics', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Message delivery guarantees', 'Topic/partition design', 'Consumer group scaling', 'Dead-letter queue handling'] },
  'flink': { name: 'Flink/Beam', category: 'Pipelines & Orchestration', categorySlug: 'data-engineering-analytics', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Stateful streaming concepts', 'Windowing and watermarks', 'Connectors and sinks', 'Fault tolerance'] },
  'kubernetes': { name: 'Kubernetes', category: 'Pipelines & Orchestration', categorySlug: 'platform-infra-sre', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Resource management (requests/limits)', 'Custom controllers/operators', 'Networking (CNI, Ingress)', 'Service mesh integration (Istio/Linkerd)'] },
  'docker': { name: 'Docker', category: 'Pipelines & Orchestration', categorySlug: 'platform-infra-sre', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Multi-stage builds', 'Image size optimization', 'Security scanning', 'Compose for local dev'] },
  'pytorch': { name: 'PyTorch', category: 'ML/AI & LLM Ops', categorySlug: 'ml-ai-llm-ops', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Neural network architecture', 'DataLoader and datasets', 'Training loops and optimization', 'TorchServe for deployment'] },
  'transformers': { name: 'Transformers', category: 'ML/AI & LLM Ops', categorySlug: 'ml-ai-llm-ops', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Hugging Face ecosystem', 'Fine-tuning models', 'Tokenization strategies', 'Quantization and optimization'] },
  'vllm': { name: 'vLLM', category: 'ML/AI & LLM Ops', categorySlug: 'ml-ai-llm-ops', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['PagedAttention concept', 'Continuous batching benefits', 'Deployment as a service', 'Performance tuning'] },
  'ray': { name: 'Ray Serve', category: 'ML/AI & LLM Ops', categorySlug: 'ml-ai-llm-ops', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Scaling model deployments', 'Autoscaling policies', 'Multi-model composition', 'Fault tolerance'] },
  'langchain': { name: 'LangChain/LlamaIndex', category: 'ML/AI & LLM Ops', categorySlug: 'ml-ai-llm-ops', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['RAG pipeline construction', 'Agent design and tool use', 'Custom chains/indexes', 'Evaluation and tracing (LangSmith)'] },
  'pgvector': { name: 'pgvector/Pinecone', category: 'ML/AI & LLM Ops', categorySlug: 'ml-ai-llm-ops', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Vector indexing strategies (IVF, HNSW)', 'Metadata filtering', 'Hybrid search concepts', 'Scaling vector search'] },
  'mlflow': { name: 'MLflow/W&B', category: 'ML/AI & LLM Ops', categorySlug: 'ml-ai-llm-ops', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Experiment tracking', 'Model registry and versioning', 'Artifact logging', 'CI/CD integration'] },
  'ragas': { name: 'Ragas', category: 'ML/AI & LLM Ops', categorySlug: 'ml-ai-llm-ops', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['RAG evaluation metrics', 'Faithfulness vs. relevance', 'Synthetic test data generation', 'Integrating into CI/CD'] },
  'prometheus': { name: 'Prometheus', category: 'Observability & SRE', categorySlug: 'platform-infra-sre', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['PromQL proficiency', 'Instrumentation best practices', 'Alerting rules and Alertmanager', 'High-availability setup'] },
  'grafana': { name: 'Grafana', category: 'Observability & SRE', categorySlug: 'platform-infra-sre', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Dashboard design', 'Data source integration', 'Templating and variables', 'Alerting visualization'] },
  'opentelemetry': { name: 'OpenTelemetry', category: 'Observability & SRE', categorySlug: 'platform-infra-sre', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Auto vs. manual instrumentation', 'Collector configuration', 'Sampling strategies', 'Context propagation'] },
  'jaeger': { name: 'Jaeger/Loki', category: 'Observability & SRE', categorySlug: 'platform-infra-sre', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Distributed tracing analysis', 'Log correlation', 'Performance bottleneck identification', 'High-volume data ingestion'] },
  'terraform': { name: 'Terraform/Pulumi', category: 'Observability & SRE', categorySlug: 'platform-infra-sre', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Modular and reusable code', 'State management and backends', 'Testing strategies', 'Drift detection and remediation'] },
  'istio': { name: 'Istio/Linkerd', category: 'Observability & SRE', categorySlug: 'platform-infra-sre', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Traffic management (e.g., canary)', 'mTLS and security policies', 'Telemetry and observability', 'Performance overhead analysis'] },
  'vault': { name: 'Vault', category: 'Security & GRC', categorySlug: 'security-grc', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Secrets engines usage', 'Dynamic secrets', 'Auth methods integration', 'Policy and ACL management'] },
  'okta': { name: 'Okta/Auth0', category: 'Security & GRC', categorySlug: 'security-grc', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['OIDC/OAuth2 flow implementation', 'User provisioning (SCIM)', 'MFA policy enforcement', 'Custom actions/rules'] },
  'codeql': { name: 'CodeQL/SonarQube/Snyk', category: 'Security & GRC', categorySlug: 'security-grc', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['SAST/DAST integration in CI/CD', 'False positive triage', 'Custom rule creation', 'Dependency scanning'] },
  'trivy': { name: 'Trivy', category: 'Security & GRC', categorySlug: 'security-grc', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Container image scanning', 'SBOM generation', 'IaC misconfiguration scanning', 'CI/CD integration'] },
  'opa': { name: 'OPA', category: 'Security & GRC', categorySlug: 'security-grc', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Rego policy authoring', 'Integration with Kubernetes', 'Use cases (e.g., admission control)', 'Performance considerations'] },
  'soc': { name: 'SOC 2', category: 'Security & GRC', categorySlug: 'security-grc', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Control mapping to technical implementation', 'Evidence collection automation', 'Audit process experience', 'Trust Service Criteria understanding'] },
  'iso': { name: 'ISO 27001', category: 'Security & GRC', categorySlug: 'security-grc', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['ISMS implementation', 'Annex A controls', 'Risk assessment and treatment', 'Internal audit process'] },
  'hipaa': { name: 'HIPAA', category: 'Security & GRC', categorySlug: 'security-grc', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['PHI identification and handling', 'Technical safeguards implementation', 'BAA understanding', 'Breach notification rules'] },
  'playwright': { name: 'Playwright/Cypress', category: 'Testing & Quality Engineering', categorySlug: 'qa-quality-engineering', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Test automation patterns (Page Object Model)', 'Handling dynamic content', 'CI/CD integration and reporting', 'Debugging flaky tests'] },
  'jest': { name: 'Jest/Vitest', category: 'Testing & Quality Engineering', categorySlug: 'qa-quality-engineering', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Unit and integration testing', 'Mocking modules and functions', 'Snapshot testing', 'Code coverage analysis'] },
  'pytest': { name: 'PyTest/JUnit', category: 'Testing & Quality Engineering', categorySlug: 'qa-quality-engineering', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Fixture design and usage', 'Parameterized testing', 'Plugin ecosystem', 'Test discovery and organization'] },
  'k6': { name: 'k6/Locust', category: 'Testing & Quality Engineering', categorySlug: 'qa-quality-engineering', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Load testing script design', 'Thresholds and checks', 'Analyzing results', 'Distributed load testing'] },
  'pact': { name: 'Pact', category: 'Testing & Quality Engineering', categorySlug: 'qa-quality-engineering', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Consumer-driven contract testing concept', 'Pact Broker usage', 'CI/CD integration for verification', 'Provider state management'] },
  'gremlin': { name: 'Gremlin/Litmus', category: 'Testing & Quality Engineering', categorySlug: 'qa-quality-engineering', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Chaos engineering principles', 'GameDay planning and execution', 'Identifying system weaknesses', 'Measuring impact and recovery'] },
  'cloudzero': { name: 'CloudZero/Infracost', category: 'Cloud FinOps & BizTech', categorySlug: 'finops-biztech', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Cost anomaly detection', 'Cost allocation and showback', 'Unit cost economics', 'Budgeting and forecasting'] },
  'aws': { name: 'AWS Cost Explorer', category: 'Cloud FinOps & BizTech', categorySlug: 'finops-biztech', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Analyzing cost and usage reports', 'RI/Savings Plan recommendations', 'Tagging strategy for cost allocation', 'Custom report creation'] },
  'salesforce': { name: 'Salesforce', category: 'Cloud FinOps & BizTech', categorySlug: 'finops-biztech', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Apex and LWC development', 'SOQL query optimization', 'Flow and Process Builder automation', 'Integration patterns'] },
  'hubspot': { name: 'HubSpot', category: 'Cloud FinOps & BizTech', categorySlug: 'finops-biztech', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Custom object design', 'Workflow automation', 'API integration', 'Reporting and dashboard creation'] },
  'hightouch': { name: 'Hightouch/Census', category: 'Cloud FinOps & BizTech', categorySlug: 'finops-biztech', intro: 'You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems.', pains: [], evaluation: ['Reverse ETL concepts', 'Data modeling for activation', 'Sync configuration and scheduling', 'Debugging sync failures'] },
};

type TechKeys = keyof typeof allTech;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tech = allTech[params.slug as TechKeys];
  const techName = tech?.name || 'Technology';
  return {
    title: `Hire Nearshore ${techName} Developers | TeamStation AI`,
    description: `Hire elite, pre-vetted LATAM engineers with expertise in ${techName}. Our scientific evaluation process de-risks hiring for critical roles in your tech stack.`,
  };
}

export default function TechPage({ params }: { params: { slug: string } }) {
  const tech = allTech[params.slug as TechKeys];

  if (!tech) {
    return (
      <main className="container max-w-5xl py-12">
        <p>Technology not found.</p>
      </main>
    )
  }

  return (
    <main className="container max-w-5xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / 
        <Link href="/hire" className="hover:text-foreground">Hire</Link> / 
        <Link href="/hire/by-technology" className="hover:text-foreground">By Technology</Link> / 
        <span>{tech.name}</span>
      </div>
      <header className="my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Hire for {tech.name} Mastery</h1>
        <p className="mt-4 text-lg text-muted-foreground">
            {tech.intro}
        </p>
      </header>

      {tech.pains && tech.pains.length > 0 && (
        <section className="my-16">
            <h2 className="text-center text-3xl font-bold">Sound Familiar?</h2>
            <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">Common problems we solve by providing true {tech.name} experts.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {tech.pains.map((item) => (
                    <div key={item.pain} className="rounded-lg border bg-card p-6 flex flex-col">
                        <p className="text-sm font-semibold text-primary">{item.pain}</p>
                        <div className="flex items-center gap-3 mt-3">
                            {item.icon}
                            <h3 className="text-lg font-semibold text-foreground">The Problem</h3>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground ">{item.problem}</p>
                        
                        <div className="mt-4 border-t border-border pt-4">
                            <h4 className="font-semibold text-green-400">The TeamStation AI Solution</h4>
                            <p className="text-sm text-foreground m-0">{item.solution}</p>
                        </div>
                        <div className="flex-grow"></div>
                        <div className="mt-6">
                            <p className="text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {item.kpi}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
      )}


      <div className="my-16 rounded-lg border bg-card p-8">
        <h2 className="text-center text-3xl font-bold">Our Evaluation Approach for {tech.name}</h2>
        <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
          For roles requiring deep {tech.name} expertise, our <Link href="/technical-interview-evaluation" className='text-primary hover:underline'>Axiom Cortex™ evaluation</Link> focuses on practical application and deep system understanding, not just trivia. We assess candidates on:
        </p>
         <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-8 max-w-2xl mx-auto">
            {tech.evaluation.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span className='text-muted-foreground'>{point}</span>
                </li>
            ))}
        </ul>
         <div className="text-center mt-8">
            <Link href={`/hire/by-role/${tech.categorySlug}`} className="font-semibold text-primary hover:underline">
                Explore Related Role: {tech.category} <ArrowRight className="inline h-4 w-4" />
            </Link>
        </div>
      </div>
      
       <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to Hire Elite {tech.name} Talent?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
          Stop sifting through unqualified resumes. Let us provide you with a shortlist of 2-3 elite, pre-vetted candidates with proven {tech.name} mastery.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a No-Obligation Strategy Call</Link>
      </div>

    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(allTech).map(slug => ({ slug }));
}

