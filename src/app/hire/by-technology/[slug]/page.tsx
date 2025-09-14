
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle } from 'lucide-react';

const allTech = {
  'node': { name: 'Node.js', category: 'APIs & Backend Services', categorySlug: 'backend-services', evaluation: ['Deep event loop knowledge', 'Async/await patterns', 'Experience with NestJS/Fastify', 'API security best practices'] },
  'python': { name: 'Python', category: 'APIs & Backend Services', categorySlug: 'backend-services', evaluation: ['WSGI/ASGI servers', 'ORM usage (SQLAlchemy)', 'Experience with FastAPI/Django', 'Concurrency models (asyncio, threading)'] },
  'java': { name: 'Java', category: 'APIs & Backend Services', categorySlug: 'backend-services', evaluation: ['Spring Boot expertise', 'JVM tuning basics', 'Hibernate/JPA experience', 'Microservice patterns'] },
  'go': { name: 'Go', category: 'APIs & Backend Services', categorySlug: 'backend-services', evaluation: ['Goroutines and channels', 'Standard library proficiency', 'Experience with Gin/Fiber', 'Interface design'] },
  'net': { name: '.NET', category: 'APIs & Backend Services', categorySlug: 'backend-services', evaluation: ['ASP.NET Core patterns', 'Entity Framework Core', 'LINQ proficiency', 'Azure integrations'] },
  'grpc': { name: 'gRPC', category: 'APIs & Backend Services', categorySlug: 'backend-services', evaluation: ['Protobuf definitions', 'Streaming patterns', 'Error handling and metadata', 'Performance trade-offs vs. REST'] },
  'graphql': { name: 'GraphQL', category: 'APIs & Backend Services', categorySlug: 'backend-services', evaluation: ['Schema design', 'Resolvers and data loaders', 'Apollo Federation/stitching', 'Caching strategies'] },
  'react': { name: 'React/TypeScript', category: 'Frontend & UI/UX', categorySlug: 'frontend-web', evaluation: ['Advanced hooks', 'State management (Zustand/Redux)', 'Component API design', 'Performance profiling'] },
  'nextjs': { name: 'Next.js', category: 'Frontend & UI/UX', categorySlug: 'frontend-web', evaluation: ['App vs. Pages Router', 'Server components vs. client', 'Data fetching patterns', 'Caching and revalidation'] },
  'vite': { name: 'Vite', category: 'Frontend & UI/UX', categorySlug: 'frontend-web', evaluation: ['Build/dev server configuration', 'Plugin ecosystem', 'Module Federation', 'Performance optimization'] },
  'tanstack': { name: 'TanStack Query', category: 'Frontend & UI/UX', categorySlug: 'frontend-web', evaluation: ['Server state management', 'Caching/invalidation strategies', 'Optimistic updates', 'Infinite scrolling patterns'] },
  'redux': { name: 'Redux Toolkit/Zustand', category: 'Frontend & UI/UX', categorySlug: 'frontend-web', evaluation: ['Global vs. local state', 'Middleware usage', 'Performance with large stores', 'Selector optimization'] },
  'tailwind': { name: 'Tailwind/shadcn/MUI', category: 'Frontend & UI/UX', categorySlug: 'frontend-web', evaluation: ['Design system implementation', 'Theming and customization', 'Component library architecture', 'Utility-first best practices'] },
  'testing': { name: 'Testing Library', category: 'Frontend & UI/UX', categorySlug: 'frontend-web', evaluation: ['User-centric testing', 'Mocking API requests', 'Testing custom hooks', 'Integration testing'] },
  'postgresql': { name: 'PostgreSQL', category: 'Data Modeling & Databases', categorySlug: 'data-engineering-analytics', evaluation: ['Advanced indexing', 'Query optimization (EXPLAIN)', 'JSONB usage', 'Connection pooling'] },
  'mysql': { name: 'MySQL', category: 'Data Modeling & Databases', categorySlug: 'data-engineering-analytics', evaluation: ['Storage engines (InnoDB)', 'Replication setup', 'Indexing strategies', 'Performance tuning'] },
  'sql': { name: 'SQL Server', category: 'Data Modeling & Databases', categorySlug: 'data-engineering-analytics', evaluation: ['T-SQL proficiency', 'Window functions', 'Indexing and query plans', 'Stored procedure design'] },
  'dbt': { name: 'dbt', category: 'Data Modeling & Databases', categorySlug: 'data-engineering-analytics', evaluation: ['Model design and materialization', 'Jinja/macros for DRY code', 'Source freshness and testing', 'Deployment and orchestration'] },
  'prisma': { name: 'Prisma', category: 'Data Modeling & Databases', categorySlug: 'data-engineering-analytics', evaluation: ['Schema design and migrations', 'Query engine performance', 'Type-safe database access', 'Transaction management'] },
  'sqlalchemy': { name: 'SQLAlchemy', category: 'Data Modeling & Databases', categorySlug: 'data-engineering-analytics', evaluation: ['Core vs. ORM', 'Session management', 'Lazy vs. eager loading', 'Alembic for migrations'] },
  'hibernate': { name: 'Hibernate', category: 'Data Modeling & Databases', categorySlug: 'data-engineering-analytics', evaluation: ['Entity lifecycle', 'Caching strategies (L1/L2)', 'N+1 problem solving', 'JPQL/HQL proficiency'] },
  'redis': { name: 'Redis', category: 'Data Modeling & Databases', categorySlug: 'data-engineering-analytics', evaluation: ['Data structures usage', 'Caching patterns (e.g., cache-aside)', 'Persistence options', 'High availability setup'] },
  'memcached': { name: 'Memcached', category: 'Data Modeling & Databases', categorySlug: 'data-engineering-analytics', evaluation: ['Cache invalidation strategies', 'Slab allocator knowledge', 'Use cases vs. Redis', 'Scaling strategies'] },
  'airflow': { name: 'Airflow/Prefect/Dagster', category: 'Pipelines & Orchestration', categorySlug: 'data-engineering-analytics', evaluation: ['DAG design and scheduling', 'Dynamic task generation', 'Idempotency and backfills', 'Scaling executors'] },
  'kafka': { name: 'Kafka/RabbitMQ/NATS', category: 'Pipelines & Orchestration', categorySlug: 'data-engineering-analytics', evaluation: ['Message delivery guarantees', 'Topic/partition design', 'Consumer group scaling', 'Dead-letter queue handling'] },
  'flink': { name: 'Flink/Beam', category: 'Pipelines & Orchestration', categorySlug: 'data-engineering-analytics', evaluation: ['Stateful streaming concepts', 'Windowing and watermarks', 'Connectors and sinks', 'Fault tolerance'] },
  'kubernetes': { name: 'Kubernetes', category: 'Pipelines & Orchestration', categorySlug: 'platform-infra-sre', evaluation: ['Resource management (requests/limits)', 'Custom controllers/operators', 'Networking (CNI, Ingress)', 'Service mesh integration (Istio/Linkerd)'] },
  'docker': { name: 'Docker', category: 'Pipelines & Orchestration', categorySlug: 'platform-infra-sre', evaluation: ['Multi-stage builds', 'Image size optimization', 'Security scanning', 'Compose for local dev'] },
  'pytorch': { name: 'PyTorch', category: 'ML/AI & LLM Ops', categorySlug: 'ml-ai-llm-ops', evaluation: ['Neural network architecture', 'DataLoader and datasets', 'Training loops and optimization', 'TorchServe for deployment'] },
  'transformers': { name: 'Transformers', category: 'ML/AI & LLM Ops', categorySlug: 'ml-ai-llm-ops', evaluation: ['Hugging Face ecosystem', 'Fine-tuning models', 'Tokenization strategies', 'Quantization and optimization'] },
  'vllm': { name: 'vLLM', category: 'ML/AI & LLM Ops', categorySlug: 'ml-ai-llm-ops', evaluation: ['PagedAttention concept', 'Continuous batching benefits', 'Deployment as a service', 'Performance tuning'] },
  'ray': { name: 'Ray Serve', category: 'ML/AI & LLM Ops', categorySlug: 'ml-ai-llm-ops', evaluation: ['Scaling model deployments', 'Autoscaling policies', 'Multi-model composition', 'Fault tolerance'] },
  'langchain': { name: 'LangChain/LlamaIndex', category: 'ML/AI & LLM Ops', categorySlug: 'ml-ai-llm-ops', evaluation: ['RAG pipeline construction', 'Agent design and tool use', 'Custom chains/indexes', 'Evaluation and tracing (LangSmith)'] },
  'pgvector': { name: 'pgvector/Pinecone', category: 'ML/AI & LLM Ops', categorySlug: 'ml-ai-llm-ops', evaluation: ['Vector indexing strategies (IVF, HNSW)', 'Metadata filtering', 'Hybrid search concepts', 'Scaling vector search'] },
  'mlflow': { name: 'MLflow/W&B', category: 'ML/AI & LLM Ops', categorySlug: 'ml-ai-llm-ops', evaluation: ['Experiment tracking', 'Model registry and versioning', 'Artifact logging', 'CI/CD integration'] },
  'ragas': { name: 'Ragas', category: 'ML/AI & LLM Ops', categorySlug: 'ml-ai-llm-ops', evaluation: ['RAG evaluation metrics', 'Faithfulness vs. relevance', 'Synthetic test data generation', 'Integrating into CI/CD'] },
  'prometheus': { name: 'Prometheus', category: 'Observability & SRE', categorySlug: 'platform-infra-sre', evaluation: ['PromQL proficiency', 'Instrumentation best practices', 'Alerting rules and Alertmanager', 'High-availability setup'] },
  'grafana': { name: 'Grafana', category: 'Observability & SRE', categorySlug: 'platform-infra-sre', evaluation: ['Dashboard design', 'Data source integration', 'Templating and variables', 'Alerting visualization'] },
  'opentelemetry': { name: 'OpenTelemetry', category: 'Observability & SRE', categorySlug: 'platform-infra-sre', evaluation: ['Auto vs. manual instrumentation', 'Collector configuration', 'Sampling strategies', 'Context propagation'] },
  'jaeger': { name: 'Jaeger/Loki', category: 'Observability & SRE', categorySlug: 'platform-infra-sre', evaluation: ['Distributed tracing analysis', 'Log correlation', 'Performance bottleneck identification', 'High-volume data ingestion'] },
  'terraform': { name: 'Terraform/Pulumi', category: 'Observability & SRE', categorySlug: 'platform-infra-sre', evaluation: ['Modular and reusable code', 'State management and backends', 'Testing strategies', 'Drift detection and remediation'] },
  'istio': { name: 'Istio/Linkerd', category: 'Observability & SRE', categorySlug: 'platform-infra-sre', evaluation: ['Traffic management (e.g., canary)', 'mTLS and security policies', 'Telemetry and observability', 'Performance overhead analysis'] },
  'vault': { name: 'Vault', category: 'Security & GRC', categorySlug: 'security-grc', evaluation: ['Secrets engines usage', 'Dynamic secrets', 'Auth methods integration', 'Policy and ACL management'] },
  'okta': { name: 'Okta/Auth0', category: 'Security & GRC', categorySlug: 'security-grc', evaluation: ['OIDC/OAuth2 flow implementation', 'User provisioning (SCIM)', 'MFA policy enforcement', 'Custom actions/rules'] },
  'codeql': { name: 'CodeQL/SonarQube/Snyk', category: 'Security & GRC', categorySlug: 'security-grc', evaluation: ['SAST/DAST integration in CI/CD', 'False positive triage', 'Custom rule creation', 'Dependency scanning'] },
  'trivy': { name: 'Trivy', category: 'Security & GRC', categorySlug: 'security-grc', evaluation: ['Container image scanning', 'SBOM generation', 'IaC misconfiguration scanning', 'CI/CD integration'] },
  'opa': { name: 'OPA', category: 'Security & GRC', categorySlug: 'security-grc', evaluation: ['Rego policy authoring', 'Integration with Kubernetes', 'Use cases (e.g., admission control)', 'Performance considerations'] },
  'soc': { name: 'SOC 2', category: 'Security & GRC', categorySlug: 'security-grc', evaluation: ['Control mapping to technical implementation', 'Evidence collection automation', 'Audit process experience', 'Trust Service Criteria understanding'] },
  'iso': { name: 'ISO 27001', category: 'Security & GRC', categorySlug: 'security-grc', evaluation: ['ISMS implementation', 'Annex A controls', 'Risk assessment and treatment', 'Internal audit process'] },
  'hipaa': { name: 'HIPAA', category: 'Security & GRC', categorySlug: 'security-grc', evaluation: ['PHI identification and handling', 'Technical safeguards implementation', 'BAA understanding', 'Breach notification rules'] },
  'playwright': { name: 'Playwright/Cypress', category: 'Testing & Quality Engineering', categorySlug: 'qa-quality-engineering', evaluation: ['Test automation patterns (Page Object Model)', 'Handling dynamic content', 'CI/CD integration and reporting', 'Debugging flaky tests'] },
  'jest': { name: 'Jest/Vitest', category: 'Testing & Quality Engineering', categorySlug: 'qa-quality-engineering', evaluation: ['Unit and integration testing', 'Mocking modules and functions', 'Snapshot testing', 'Code coverage analysis'] },
  'pytest': { name: 'PyTest/JUnit', category: 'Testing & Quality Engineering', categorySlug: 'qa-quality-engineering', evaluation: ['Fixture design and usage', 'Parameterized testing', 'Plugin ecosystem', 'Test discovery and organization'] },
  'k6': { name: 'k6/Locust', category: 'Testing & Quality Engineering', categorySlug: 'qa-quality-engineering', evaluation: ['Load testing script design', 'Thresholds and checks', 'Analyzing results', 'Distributed load testing'] },
  'pact': { name: 'Pact', category: 'Testing & Quality Engineering', categorySlug: 'qa-quality-engineering', evaluation: ['Consumer-driven contract testing concept', 'Pact Broker usage', 'CI/CD integration for verification', 'Provider state management'] },
  'gremlin': { name: 'Gremlin/Litmus', category: 'Testing & Quality Engineering', categorySlug: 'qa-quality-engineering', evaluation: ['Chaos engineering principles', 'GameDay planning and execution', 'Identifying system weaknesses', 'Measuring impact and recovery'] },
  'cloudzero': { name: 'CloudZero/Infracost', category: 'Cloud FinOps & BizTech', categorySlug: 'finops-biztech', evaluation: ['Cost anomaly detection', 'Cost allocation and showback', 'Unit cost economics', 'Budgeting and forecasting'] },
  'aws': { name: 'AWS Cost Explorer', category: 'Cloud FinOps & BizTech', categorySlug: 'finops-biztech', evaluation: ['Analyzing cost and usage reports', 'RI/Savings Plan recommendations', 'Tagging strategy for cost allocation', 'Custom report creation'] },
  'salesforce': { name: 'Salesforce', category: 'Cloud FinOps & BizTech', categorySlug: 'finops-biztech', evaluation: ['Apex and LWC development', 'SOQL query optimization', 'Flow and Process Builder automation', 'Integration patterns'] },
  'hubspot': { name: 'HubSpot', category: 'Cloud FinOps & BizTech', categorySlug: 'finops-biztech', evaluation: ['Custom object design', 'Workflow automation', 'API integration', 'Reporting and dashboard creation'] },
  'hightouch': { name: 'Hightouch/Census', category: 'Cloud FinOps & BizTech', categorySlug: 'finops-biztech', evaluation: ['Reverse ETL concepts', 'Data modeling for activation', 'Sync configuration and scheduling', 'Debugging sync failures'] },
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
    <main className="container max-w-4xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / 
        <Link href="/hire" className="hover:text-foreground">Hire</Link> / 
        <Link href="/hire/by-technology" className="hover:text-foreground">By Technology</Link> / 
        <span>{tech.name}</span>
      </div>
      <header className="my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Hire for {tech.name} Mastery</h1>
        <p className="mt-4 text-lg text-muted-foreground">
            You don't need someone who has just "used" {tech.name}. You need an expert who has mastered its complexities to build scalable, reliable, and maintainable systems. We find that talent for you.
        </p>
      </header>

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

