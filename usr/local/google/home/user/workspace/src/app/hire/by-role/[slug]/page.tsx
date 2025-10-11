
import Link from "next/link";
import { WithTooltip } from "../../../../components/ui/tooltip";
import type { Metadata } from "next";
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Bug,
  CloudCog,
  AlertTriangle,
  Key,
} from "lucide-react";
import { notFound } from "next/navigation";
import { JsonLd } from "../../../../components/seo/JsonLd";
import FurtherReading from "../../../../components/seo/FurtherReading";
import dynamic from "next/dynamic";
import * as LucideIcons from "lucide-react";

const ClientJsonLd = dynamic(() => import("@/components/seo/JsonLd"), {
  ssr: false,
});

type TechKeys = keyof typeof allTech;

const allTech: { [key: string]: { name: string, categorySlug: string } } = {
    "react": { "name": "React/TypeScript", "categorySlug": "frontend-web" },
    "typescript": { "name": "TypeScript", "categorySlug": "frontend-web" },
    "nextjs": { "name": "Next.js", "categorySlug": "frontend-web" },
    "angular": { "name": "Angular", "categorySlug": "frontend-web" },
    "vue": { "name": "Vue.js", "categorySlug": "frontend-web" },
    "pinia": { "name": "Pinia (Vue State)", "categorySlug": "frontend-web" },
    "remix": { "name": "Remix", "categorySlug": "frontend-web" },
    "svelte": { "name": "Svelte/SvelteKit", "categorySlug": "frontend-web" },
    "web-accessibility": { "name": "Web Accessibility (A11y)", "categorySlug": "frontend-web" },
    "rx-js": { "name": "RxJS", "categorySlug": "frontend-web" },
    "vite": { "name": "Vite", "categorySlug": "frontend-web" },
    "tailwind": { "name": "Tailwind CSS", "categorySlug": "frontend-web" },
    "tanstack": { "name": "TanStack Query", "categorySlug": "frontend-web" },
    "testing": { "name": "React Testing Library", "categorySlug": "qa-security" },
    "node": { "name": "Node.js", "categorySlug": "backend-services" },
    "java": { "name": "Java (Spring & JVM)", "categorySlug": "backend-services" },
    "python": { "name": "Python", "categorySlug": "backend-services" },
    "golang": { "name": "Go (Golang)", "categorySlug": "backend-services" },
    "c-sharp": { "name": "C# / .NET", "categorySlug": "backend-services" },
    "rust": { "name": "Rust", "categorySlug": "backend-services" },
    "php": { "name": "PHP (Laravel/Symfony)", "categorySlug": "backend-services" },
    "kotlin": { "name": "Kotlin", "categorySlug": "backend-services" },
    "scala": { "name": "Scala", "categorySlug": "backend-services" },
    "erlang": { "name": "Erlang", "categorySlug": "backend-services" },
    "haskell": { "name": "Haskell", "categorySlug": "backend-services" },
    "elixir": { "name": "Elixir", "categorySlug": "backend-services" },
    "ruby": { "name": "Ruby on Rails", "categorySlug": "backend-services" },
    "devops-engineering": { "name": "DevOps Engineering", "categorySlug": "devops-cloud" },
    "aws": { "name": "Amazon Web Services (AWS)", "categorySlug": "devops-cloud" },
    "azure": { "name": "Microsoft Azure", "categorySlug": "devops-cloud" },
    "google-cloud": { "name": "Google Cloud Platform (GCP)", "categorySlug": "devops-cloud" },
    "kubernetes": { "name": "Kubernetes (K8s)", "categorySlug": "devops-cloud" },
    "docker": { "name": "Docker", "categorySlug": "devops-cloud" },
    "terraform": { "name": "Terraform", "categorySlug": "devops-cloud" },
    "ansible": { "name": "Ansible", "categorySlug": "devops-cloud" },
    "jenkins": { "name": "Jenkins", "categorySlug": "devops-cloud" },
    "ci-cd": { "name": "CI/CD Pipeline Architecture", "categorySlug": "devops-cloud" },
    "prometheus": { "name": "Prometheus", "categorySlug": "devops-cloud" },
    "grafana": { "name": "Grafana", "categorySlug": "devops-cloud" },
    "istio": { "name": "Istio (Service Mesh)", "categorySlug": "devops-cloud" },
    "helm": { "name": "Helm", "categorySlug": "devops-cloud" },
    "vault": { "name": "HashiCorp Vault", "categorySlug": "devops-cloud" },
    "cloudformation": { "name": "AWS CloudFormation", "categorySlug": "devops-cloud" },
    "gitops": { "name": "GitOps", "categorySlug": "devops-cloud" },
    "serverless": { "name": "Serverless Architecture", "categorySlug": "devops-cloud" },
    "opentelemetry": { "name": "OpenTelemetry", "categorySlug": "platform-infra-sre" },
    "jaeger": { "name": "Jaeger", "categorySlug": "platform-infra-sre" },
    "sentry": { "name": "Sentry", "categorySlug": "platform-infra-sre" },
    "github-actions": { "name": "GitHub Actions", "categorySlug": "devops-cloud" },
    "pulumi": { "name": "Pulumi", "categorySlug": "platform-infra-sre" },
    "gitlab": { "name": "GitLab CI", "categorySlug": "platform-infra-sre" },
    "argocd": { "name": "Argo CD", "categorySlug": "platform-infra-sre" },
    "linkerd": { "name": "Linkerd", "categorySlug": "platform-infra-sre" },
    "loki": { "name": "Loki", "categorySlug": "platform-infra-sre" },
    "external-secrets": { "name": "External Secrets Operator", "categorySlug": "platform-infra-sre" },
    "launchdarkly": { "name": "LaunchDarkly", "categorySlug": "platform-infra-sre" },
    "openfeature": { "name": "OpenFeature", "categorySlug": "platform-infra-sre" },
    "data-engineering": { "name": "Data Engineering", "categorySlug": "data-engineering-analytics" },
    "sql": { "name": "SQL", "categorySlug": "data-engineering-analytics" },
    "etl-elt": { "name": "ETL/ELT", "categorySlug": "data-engineering-analytics" },
    "apache-spark": { "name": "Apache Spark", "categorySlug": "data-engineering-analytics" },
    "dbt": { "name": "dbt (Data Build Tool)", "categorySlug": "data-engineering-analytics" },
    "snowflake": { "name": "Snowflake", "categorySlug": "data-engineering-analytics" },
    "airbyte": { "name": "Airbyte", "categorySlug": "data-engineering-analytics" },
    "data-governance": { "name": "Data Governance", "categorySlug": "data-engineering-analytics" },
    "machine-learning": { "name": "Machine Learning", "categorySlug": "ml-ai-llm-ops" },
    "data-warehousing": { "name": "Data Warehousing", "categorySlug": "data-engineering-analytics" },
    "power-bi": { "name": "Power BI", "categorySlug": "data-engineering-analytics" },
    "tableau": { "name": "Tableau", "categorySlug": "data-engineering-analytics" },
    "fivetran": { "name": "Fivetran", "categorySlug": "data-engineering-analytics" },
    "looker": { "name": "Looker", "categorySlug": "data-engineering-analytics" },
    "presto": { "name": "Presto", "categorySlug": "data-engineering-analytics" },
    "kafka": { "name": "Kafka", "categorySlug": "data-engineering-analytics" },
    "data-science": { "name": "Data Science", "categorySlug": "ml-ai-llm-ops" },
    "llms": { "name": "LLMs", "categorySlug": "ml-ai-llm-ops" },
    "pandas": { "name": "pandas", "categorySlug": "data-engineering-analytics" },
    "numpy": { "name": "NumPy", "categorySlug": "data-engineering-analytics" },
    "vllm": { "name": "vLLM", "categorySlug": "ml-ai-llm-ops" },
    "pgvector": { "name": "pgvector", "categorySlug": "ml-ai-llm-ops" },
    "mlflow": { "name": "MLflow", "categorySlug": "ml-ai-llm-ops" },
    "langchain": { "name": "LangChain", "categorySlug": "ml-ai-llm-ops" },
    "ragas": { "name": "Ragas", "categorySlug": "ml-ai-llm-ops" },
    "hugging-face": { "name": "Hugging Face Transformers", "categorySlug": "ml-ai-llm-ops" },
    "transformers": { "name": "Hugging Face Transformers", "categorySlug": "ml-ai-llm-ops" },
    "airflow": { "name": "Airflow", "categorySlug": "data-engineering-analytics" },
    "postgresql": { "name": "PostgreSQL", "categorySlug": "databases" },
    "mongodb": { "name": "MongoDB", "categorySlug": "databases" },
    "redis": { "name": "Redis", "categorySlug": "databases" },
    "cassandra": { "name": "Cassandra", "categorySlug": "databases" },
    "mysql": { "name": "MySQL", "categorySlug": "databases" },
    "dynamodb": { "name": "DynamoDB", "categorySlug": "databases" },
    "elasticsearch": { "name": "Elasticsearch", "categorySlug": "databases" },
    "prisma": { "name": "Prisma", "categorySlug": "backend-services" },
    "hibernate": { "name": "Hibernate", "categorySlug": "backend-services" },
    "typeorm": { "name": "TypeORM", "categorySlug": "backend-services" },
    "ef-core": { "name": "Entity Framework Core", "categorySlug": "backend-services" },
    "sqlalchemy": { "name": "SQLAlchemy", "categorySlug": "databases" },
    "playwright": { "name": "Playwright", "categorySlug": "qa-security" },
    "cypress": { "name": "Cypress", "categorySlug": "qa-security" },
    "qa-automation": { "name": "QA Automation", "categorySlug": "qa-security" },
    "security-engineering": { "name": "Security Engineering", "categorySlug": "qa-security" },
    "penetration-testing": { "name": "Penetration Testing", "categorySlug": "qa-security" },
    "jest": { "name": "Jest", "categorySlug": "qa-security" },
    "vitest": { "name": "Vitest", "categorySlug": "qa-security" },
    "k6": { "name": "k6", "categorySlug": "qa-quality-engineering" },
    "pact": { "name": "Pact", "categorySlug": "qa-quality-engineering" },
    "codeql": { "name": "CodeQL", "categorySlug": "security-grc" },
    "opa": { "name": "Open Policy Agent (OPA)", "categorySlug": "security-grc" },
    "soc": { "name": "SOC 2", "categorySlug": "security-grc" },
    "iso": { "name": "ISO 27001", "categorySlug": "security-grc" },
    "trivy": { "name": "Trivy", "categorySlug": "qa-security" },
    "snyk": { "name": "Snyk", "categorySlug": "security-grc" },
    "browserstack": { "name": "BrowserStack", "categorySlug": "qa-quality-engineering" },
    "owasp-zap": { "name": "OWASP ZAP", "categorySlug": "qa-quality-engineering" },
    "microservices": { "name": "Microservices", "categorySlug": "architecture-integrations" },
    "grpc": { "name": "gRPC", "categorySlug": "architecture-integrations" },
    "rest-api-design": { "name": "REST API Design", "categorySlug": "architecture-integrations" },
    "event-sourcing": { "name": "Event Sourcing", "categorySlug": "architecture-integrations" },
    "domain-driven-design": { "name": "Domain-Driven Design", "categorySlug": "architecture-integrations" },
    "message-queues": { "name": "Message Queues", "categorySlug": "architecture-integrations" },
    "api-gateway": { "name": "API Gateway", "categorySlug": "architecture-integrations" },
    "system-design": { "name": "System Design", "categorySlug": "architecture-integrations" },
    "api-security": { "name": "API Security", "categorySlug": "architecture-integrations" },
    "react-native": { "name": "React Native", "categorySlug": "mobile" },
    "flutter": { "name": "Flutter", "categorySlug": "mobile" },
    "swift": { "name": "Swift", "categorySlug": "mobile" },
    "axiom-cortex": { "name": "Axiom Cortex", "categorySlug": "vetting-cognitive-ai" },
    "graphql": { "name": "GraphQL", "categorySlug": "vetting-cognitive-ai" },
    "cloudzero": { "name": "CloudZero", "categorySlug": "finops-biztech" },
    "salesforce": { "name": "Salesforce", "categorySlug": "finops-biztech" },
    "hubspot": { "name": "HubSpot", "categorySlug": "finops-biztech" },
    "hightouch": { "name": "Hightouch", "categorySlug": "finops-biztech" }
};

const roleData: {
  [key: string]: {
    name: string;
    intro: string;
    roles: string[];
    skills: string[];
    tech: { name: string; slug: string }[];
    evaluation: string[];
    problems?: { pain: string; roles: string[]; skills: string[] }[];
  };
} = {
  "platform-infra-sre": {
    name: "Platform / Infra / SRE",
    intro:
      "You're here because system downtime, slow deployments, and runaway cloud bills are direct threats to your business. You need engineers who build resilient, observable, and cost-efficient platforms. That's a high-stakes role, and a mis-hire is not an option.",
    roles: [
      "Head of Platform",
      "SRE/DevOps",
      "Cloud Architect",
      "Infra Sec Engineer",
      "FinOps Lead",
    ],
    skills: [
      "Cloud architecture (resilience, multi-AZ/region)",
      "IaC",
      "CI/CD",
      "observability",
      "cost control",
      "incident mgmt (SLO/SLI/error budgets)",
    ],
    tech: [
      { name: "AWS/GCP/Azure", slug: "aws" },
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes (GKE/EKS/AKS)", slug: "kubernetes" },
      { name: "Terraform/Pulumi", slug: "terraform" },
      { name: "GitHub Actions/GitLab CI/Argo CD", slug: "github-actions" },
      { name: "Istio/Linkerd", slug: "istio" },
      { name: "Prometheus/Grafana", slug: "prometheus" },
      { name: "OpenTelemetry", slug: "opentelemetry" },
      { name: "Jaeger/Loki", slug: "jaeger" },
      { name: "Vault", slug: "vault" },
      { name: "External Secrets", slug: "external-secrets" },
      { name: "LaunchDarkly/OpenFeature", slug: "launchdarkly" },
    ],
    evaluation: [
      "Emphasis on systems thinking and understanding of distributed systems principles (CAP theorem, etc.).",
      "Practical evaluation of IaC skills with a focus on modularity, reusability, and state management.",
      "Scenario-based questions on incident response, debugging complex failures, and establishing SLOs/SLIs.",
      "Assessment of cost-consciousness and ability to analyze and optimize cloud spend.",
    ],
    problems: [
      {
        pain: "System downtime is a direct threat to revenue and reputation.",
        roles: ["SRE/DevOps", "Cloud Architect"],
        skills: [
          "Resilience architecture",
          "Incident management",
          "SLO/SLI definition",
        ],
      },
      {
        pain: "Slow, manual deployments are killing our velocity.",
        roles: ["Head of Platform", "SRE/DevOps"],
        skills: ["CI/CD automation", "Infrastructure as Code (IaC)", "GitOps"],
      },
      {
        pain: "We're flying blind with no visibility into system performance.",
        roles: ["SRE/DevOps", "Infra Sec Engineer"],
        skills: [
          "Observability stacks (metrics, logs, traces)",
          "Monitoring & alerting",
        ],
      },
      {
        pain: "Our cloud bill is out of control and impossible to predict.",
        roles: ["FinOps Lead", "Cloud Architect"],
        skills: [
          "Cloud cost optimization",
          "FinOps principles",
          "Capacity planning",
        ],
      },
    ],
  },
  "security-grc": {
    name: "Security & GRC",
    intro:
      "You're here because a single security breach can erase trust, revenue, and brand equity overnight. You need engineers who embed security into the SDLC, not bolt it on as an afterthought. Hiring someone who only knows checklists is a critical risk.",
    roles: [
      "CISO/Head of Security",
      "AppSec",
      "CloudSec",
      "GRC Lead",
      "IAM Engineer",
      "Privacy Lead (DPO)",
    ],
    skills: [
      "Threat modeling",
      "SDLC security",
      "secrets mgmt",
      "identity",
      "data protection",
      "compliance ops",
    ],
    tech: [
      { name: "Okta/Auth0/Keycloak", slug: "okta" },
      { name: "OIDC/SAML", slug: "oidc" },
      { name: "HashiCorp Vault", slug: "vault" },
      { name: "SOPS", slug: "sops" },
      {
        name: "SAST/DAST (CodeQL, SonarQube, Snyk, OWASP ZAP, Trivy)",
        slug: "codeql",
      },
      { name: "CrowdStrike/Defender", slug: "crowdstrike" },
      { name: "SOC 2, ISO 27001, HIPAA, PCI, GDPR, CCPA", slug: "soc" },
    ],
    evaluation: [
      "Deep evaluation of threat modeling capabilities using real-world application scenarios.",
      "Practical assessment of secure coding knowledge and ability to identify common vulnerabilities (OWASP Top 10).",
      "Scenario-based questions on implementing and managing identity and access management (IAM) at scale.",
      "Review of experience with specific compliance frameworks and the ability to translate controls into technical requirements.",
    ],
  },
  "backend-services": {
    name: "Backend / Services",
    intro:
      "You're here because your backend is the engine of your product. Scalability bottlenecks, poor API design, and data integrity issues can grind your business to a halt. You need engineers who can build robust, performant, and maintainable services.",
    roles: ["Principal/Staff Backend", "API Platform Eng", "Data Services Eng"],
    skills: [
      "Domain modeling",
      "API design (REST/gRPC/GraphQL)",
      "eventing",
      "performance",
      "caching",
      "testing",
    ],
    tech: [
      { name: "Node.js (NestJS/Fastify)", slug: "node" },
      { name: "Python (FastAPI/Django)", slug: "python" },
      { name: "Java (Spring Boot)", slug: "java" },
      { name: "Go (Gin/Fiber)", slug: "go" },
      { name: ".NET", slug: "net" },
      { name: "Ruby on Rails", slug: "ruby" },
      { name: "PHP (Laravel/Symphony)", slug: "php" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "SQL Server", slug: "sql" },
      { name: "Redis", slug: "redis" },
      { name: "Memcached", slug: "memcached" },
      { name: "Kafka/RabbitMQ/NATS", slug: "kafka" },
      { name: "Prisma", slug: "prisma" },
      { name: "TypeORM", slug: "typeorm" },
      { name: "SQLAlchemy", slug: "sqlalchemy" },
      { name: "Hibernate", slug: "hibernate" },
      { name: "EF Core", slug: "ef-core" },
    ],
    evaluation: [
      "Focus on data modeling and database design, including normalization and indexing strategies.",
      "Practical API design exercises, evaluating choices between REST, gRPC, and GraphQL for different use cases.",
      "Assessment of asynchronous processing and event-driven architecture patterns.",
      "Emphasis on writing clean, testable code with robust unit and integration test coverage.",
    ],
    problems: [
      {
        pain: "Our API is slow, inconsistent, and hard for clients to use.",
        roles: ["API Platform Eng", "Principal Backend"],
        skills: [
          "API design (REST/gRPC/GraphQL)",
          "Domain modeling",
          "Performance tuning",
        ],
      },
      {
        pain: "The backend can't handle traffic spikes and frequently crashes.",
        roles: ["Principal/Staff Backend", "Data Services Eng"],
        skills: [
          "Scalable architecture",
          "Event-driven patterns",
          "Caching strategies",
        ],
      },
      {
        pain: "Shipping new features is slow and risky due to a complex monolith.",
        roles: ["Principal/Staff Backend"],
        skills: [
          "Microservices architecture",
          "Decoupling strategies",
          "Comprehensive testing",
        ],
      },
    ],
  },
  "frontend-web": {
    name: "Frontend / Web",
    intro:
      "You're here because your frontend is your product's face to the world. A slow, buggy, or inaccessible UI doesn't just frustrate users—it costs you revenue. You need engineers who are obsessed with performance, user experience, and code quality.",
    roles: ["Staff Frontend", "Web Platform Eng", "Design Systems Eng"],
    skills: [
      "Performance/CWV",
      "accessibility",
      "SSR/CSR trade-offs",
      "state/query caching",
      "e2e testing",
    ],
    tech: [
      { name: "React", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Next.js", slug: "nextjs" },
      { name: "Vite", slug: "vite" },
      { name: "Angular", slug: "angular" },
      { name: "Vue.js", slug: "vue" },
      { name: "TanStack Query", slug: "tanstack" },
      { name: "Redux Toolkit/Zustand", slug: "redux" },
      { name: "GraphQL (Apollo/Relay)", slug: "graphql" },
      { name: "Tailwind CSS/shadcn/MUI", slug: "tailwind" },
      { name: "Storybook", slug: "storybook" },
      { name: "Testing Library", slug: "testing" },
      { name: "Playwright/Cypress", slug: "playwright" },
    ],
    evaluation: [
      "Deep assessment of React and modern JavaScript fundamentals, including hooks and state management patterns.",
      "Practical exercises focused on performance optimization (memoization, virtualization, code splitting).",
      "Evaluation of component design and API choices, with an emphasis on reusability and accessibility (ARIA).",
      "Scenario-based questions on data fetching strategies, caching (client and server), and managing server state.",
    ],
    problems: [
      {
        pain: "Our website is slow and scores poorly on Core Web Vitals.",
        roles: ["Staff Frontend", "Web Platform Eng"],
        skills: [
          "Performance optimization (CWV)",
          "Modern rendering patterns (SSR/ISR)",
          "Bundle analysis",
        ],
      },
      {
        pain: "The UI is inconsistent and our design system is a mess.",
        roles: ["Design Systems Eng", "Staff Frontend"],
        skills: [
          "Component library architecture",
          "Accessibility (ARIA)",
          "Theming",
        ],
      },
      {
        pain: "State management is complex and leads to constant bugs.",
        roles: ["Staff Frontend"],
        skills: [
          "Server state management (TanStack Query)",
          "Client state strategies (Zustand/Redux)",
          "Data fetching patterns",
        ],
      },
    ],
  },
  "mobile-cross-platform": {
    name: "Mobile / Cross-Platform",
    intro:
      "You're here because a native or cross-platform mobile experience is critical to your product strategy, and the complexities of device fragmentation, offline sync, and store releases are slowing you down.",
    roles: [
      "Mobile Lead",
      "RN/Flutter Eng",
      "iOS Engineer",
      "Android Engineer",
      "SDK Engineer",
    ],
    skills: [
      "Native performance",
      "offline-first architecture",
      "OTA updates",
      "crash reporting",
      "mobile testing",
    ],
    tech: [
      { name: "React Native", slug: "react-native" },
      { name: "Flutter", slug: "flutter" },
      { name: "Swift (SwiftUI/UIKit)", slug: "swift" },
      { name: "Kotlin (Jetpack Compose)", slug: "kotlin" },
      { name: "Objective-C", slug: "objective-c" },
      { name: "Java", slug: "java" },
      { name: "OTA updates (CodePush)", slug: "codepush" },
      { name: "Crashlytics/Sentry", slug: "sentry" },
      { name: "AppCenter", slug: "appcenter" },
      { name: "Fastlane", slug: "fastlane" },
      { name: "Detox/Appium/XCUITest", slug: "detox" },
    ],
    evaluation: [
      "Assessment of mobile-specific architectural patterns (e.g., handling state with limited connectivity).",
      "Practical exercises in debugging native module integrations and performance bottlenecks.",
      "Evaluation of testing strategies across a wide range of devices and OS versions.",
      "Knowledge of app store submission processes and lifecycle management.",
    ],
  },
  "data-engineering-analytics": {
    name: "Data Engineering / Analytics",
    intro:
      "You're here because 'data-driven' is a mandate, not a buzzword. But without a reliable data platform, your business is flying blind. You need engineers who can build scalable, trustworthy data pipelines and empower the organization with clean, actionable insights.",
    roles: [
      "Head of Data",
      "Analytics Eng (dbt)",
      "Data Platform Eng",
      "BI Developer",
    ],
    skills: [
      "ELT",
      "modeling",
      "governance",
      "streaming",
      "DataOps",
      "experimentation",
    ],
    tech: [
      { name: "Snowflake/BigQuery/Redshift", slug: "snowflake" },
      { name: "dbt", slug: "dbt" },
      { name: "Airflow/Prefect", slug: "airflow" },
      { name: "Fivetran/Airbyte", slug: "fivetran" },
      { name: "Kafka/PubSub/Kinesis", slug: "kafka" },
      { name: "Spark/Flink", slug: "spark" },
      { name: "Looker/Tableau/Power BI/Metabase/Superset", slug: "looker" },
      { name: "DataHub/Amundsen/Apache Atlas", slug: "datahub" },
      { name: "Great Expectations/Soda", slug: "great-expectations" },
    ],
    evaluation: [
      "Strong focus on SQL and data modeling principles (Kimball/Inmon, dimensional modeling).",
      "Practical evaluation of dbt skills, including model design, testing, and documentation.",
      "Scenario-based questions on data pipeline architecture, choice of batch vs. streaming, and orchestration best practices.",
      "Assessment of data governance and data quality concepts, including lineage and anomaly detection.",
    ],
    problems: [
      {
        pain: "Our data is unreliable and business decisions are based on stale reports.",
        roles: ["Data Platform Eng", "Analytics Eng (dbt)"],
        skills: [
          "Data modeling (dbt)",
          "Data pipeline orchestration (Airflow)",
          "Data quality testing",
        ],
      },
      {
        pain: "We can't get data from our various SaaS tools into one place.",
        roles: ["Data Platform Eng"],
        skills: [
          "ELT processes (Fivetran/Airbyte)",
          "Data warehousing (Snowflake/BigQuery)",
        ],
      },
      {
        pain: "No one trusts the data because there's no documentation or governance.",
        roles: ["Head of Data", "BI Developer"],
        skills: [
          "Data governance",
          "Data cataloging (DataHub)",
          "BI platform management",
        ],
      },
    ],
  },
  "ml-ai-llm-ops": {
    name: "ML/AI & LLM Ops",
    intro:
      "You're here because integrating AI is no longer optional, but turning a Jupyter notebook into a production-ready, scalable service is a massive challenge. You need engineers who understand the full lifecycle of ML/LLM systems, from data to deployment to evaluation.",
    roles: [
      "ML Lead",
      "Applied Scientist",
      "MLOps/LLMOps",
      "Prompt/RAG Engineer",
      "Evaluation Engineer",
    ],
    skills: [
      "Feature engineering",
      "offline/online eval",
      "retrieval design",
      "safety/guardrails",
      "cost/perf tuning",
    ],
    tech: [
      { name: "Python", slug: "python" },
      { name: "PyTorch/TensorFlow/JAX", slug: "pytorch" },
      { name: "scikit-learn", slug: "scikit-learn" },
      { name: "Transformers (HF)", slug: "transformers" },
      { name: "OpenAI/Anthropic SDKs", slug: "openai" },
      { name: "vLLM/TensorRT-LLM", slug: "vllm" },
      { name: "Ray Serve", slug: "ray" },
      { name: "LangChain/LlamaIndex", slug: "langchain" },
      { name: "pgvector/Pinecone/Weaviate", slug: "pgvector" },
      { name: "MLflow/W&B", slug: "mlflow" },
      { name: "Kubeflow", slug: "kubeflow" },
      { name: "Ragas/DeepEval/Arize", slug: "ragas" },
      { name: "DVC", slug: "dvc" },
      { name: "Feast/Tecton", slug: "feast" },
    ],
    evaluation: [
      "Deep assessment of ML fundamentals and practical application of modeling techniques.",
      "For LLMOps, a strong focus on RAG architecture, vector databases, and retrieval strategies.",
      "Practical exercises in building and deploying a model as a scalable service, including containerization and monitoring.",
      "Evaluation of prompt engineering, fine-tuning, and evaluation strategies for LLMs, including safety and bias mitigation.",
    ],
  },
  "product-design-growth": {
    name: "Product, Design & Growth",
    intro:
      "You're here because building features isn't enough. You need to build the *right* features, validate them with users, and drive meaningful business outcomes. You need product and design leaders who are data-fluent, user-obsessed, and strategically aligned.",
    roles: [
      "Product Lead/Group PM",
      "Design Lead",
      "UX Research",
      "Growth PM",
      "Experimentation Eng",
    ],
    skills: [
      "Discovery",
      "roadmap",
      "analytics fluency",
      "experiment design",
      "funnel diagnostics",
    ],
    tech: [
      { name: "Jira/Linear", slug: "jira" },
      { name: "Notion/Confluence", slug: "notion" },
      { name: "Figma/Sketch", slug: "figma" },
      { name: "GA4/Amplitude/Mixpanel/Heap", slug: "amplitude" },
      { name: "Optimizely/GrowthBook/LaunchDarkly/VWO", slug: "launchdarkly" },
    ],
    evaluation: [
      "Case-study based evaluation of product sense, including market analysis, user segmentation, and prioritization.",
      "Portfolio review and practical exercises for designers focused on UX principles, interaction design, and system thinking.",
      "For growth roles, a deep dive into data analysis, experiment design (A/B testing), and funnel optimization techniques.",
      "Assessment of communication and stakeholder management skills through simulated roadmap presentations and difficult trade-off scenarios.",
    ],
  },
  "qa-quality-engineering": {
    name: "QA / Quality Engineering",
    intro:
      "You're here because shipping fast doesn't matter if you're also shipping bugs. You need engineers who think critically about quality and build automated guardrails that enable velocity, not hinder it. A manual tester isn't enough; you need a true Quality Engineer.",
    roles: [
      "QE Lead",
      "SDET",
      "Performance Eng",
      "QA Automation Engineer",
      "QA Manual Tester",
    ],
    skills: [
      "Shift-left testing",
      "e2e + contract tests",
      "perf/load",
      "chaos",
      "accessibility",
      "test planning",
      "usability testing",
    ],
    tech: [
      { name: "Playwright/Cypress/Selenium", slug: "playwright" },
      { name: "Jest/Vitest/JUnit/PyTest/TestNG", slug: "jest" },
      { name: "k6/Locust/JMeter", slug: "k6" },
      { name: "Pact (contract)", slug: "pact" },
      { name: "OWASP ZAP", slug: "owasp-zap" },
      { name: "BrowserStack/Sauce Labs", slug: "browserstack" },
      { name: "Gremlin/Litmus", slug: "gremlin" },
    ],
    evaluation: [
      "Strong emphasis on test automation strategy, including the testing pyramid (unit, integration, e2e).",
      "Practical coding exercises for writing clean, maintainable, and reliable automated tests (e.g., using Playwright or Cypress).",
      "Scenario-based questions on performance and load testing, including how to design tests and interpret results.",
      "Evaluation of non-functional testing knowledge, including security, accessibility, and chaos engineering principles.",
    ],
  },
  "it-enterprise-ops": {
    name: "IT / Enterprise Ops",
    intro:
      "You're here because employee productivity and corporate security depend on a well-run IT infrastructure. You need engineers who can manage identities, secure endpoints, and automate internal processes at scale.",
    roles: ["IT Manager", "MDM Engineer", "ITSM Lead", "Identity Engineer"],
    skills: [
      "Endpoint management",
      "identity and access management (IAM)",
      "IT service management (ITSM)",
      "email security",
      "data loss prevention (DLP)",
    ],
    tech: [
      { name: "Google Workspace/Microsoft 365", slug: "google-workspace" },
      { name: "Intune/Jamf/Kandji", slug: "jamf" },
      { name: "ServiceNow/JSM", slug: "jira-service-management" },
      { name: "Okta/JumpCloud", slug: "okta" },
      { name: "CrowdStrike/SentinelOne", slug: "crowdstrike" },
      { name: "Proofpoint", slug: "proofpoint" },
      { name: "EDR/XDR", slug: "edr" },
    ],
    evaluation: [
      "Evaluation of experience with enterprise-scale device management and security policy enforcement.",
      "Scenario-based questions on managing identity providers and SSO integrations.",
      "Assessment of knowledge of ITSM principles and experience with platforms like ServiceNow or Jira Service Management.",
    ],
  },
  "finops-biztech": {
    name: "FinOps / BizTech",
    intro:
      "You're here because cloud spend is a major line item and your go-to-market systems are critical infrastructure. You need engineers who can analyze and optimize cloud costs and connect your CRM, billing, and product data to drive revenue operations.",
    roles: [
      "FinOps Lead",
      "Biz Systems Eng (RevOps)",
      "Data FinOps",
      "Salesforce Developer",
    ],
    skills: [
      "Cloud cost optimization",
      "RevOps engineering",
      "Salesforce/HubSpot automation",
      "Reverse ETL",
      "Usage-based metering",
    ],
    tech: [
      { name: "CloudZero/CloudHealth/Infracost/Spot", slug: "cloudzero" },
      { name: "AWS Cost Explorer", slug: "aws-cost-explorer" },
      { name: "Salesforce (Apex, LWC)", slug: "salesforce" },
      { name: "HubSpot", slug: "hubspot" },
      { name: "Zuora/Chargebee", slug: "zuora" },
      { name: "Hightouch/Census", slug: "hightouch" },
      { name: "Stripe Billing", slug: "stripe" },
    ],
    evaluation: [
      "Scenario-based questions on diagnosing and optimizing cloud spend from real-world AWS/GCP billing data.",
      "For BizTech roles, practical exercises in designing automations and data flows within Salesforce or HubSpot.",
      "Assessment of data skills, particularly SQL and the ability to model data for financial and revenue reporting.",
      "Evaluation of understanding of SaaS metrics and how to implement systems for tracking them (e.g., ARR, NRR, LTV).",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const role = roleData[params.slug];
  const roleName = role ? role.name : "Engineer";
  return {
    title: `Hire Nearshore ${roleName}`,
    description: `Hire elite, pre-vetted LATAM engineers with expertise in ${roleName}. Our scientific evaluation de-risks hiring for critical tech roles.`,
    keywords: `hire nearshore ${roleName}, latam ${roleName}, ${roleName} staff augmentation`,
    alternates: {
      canonical: `/hire/by-role/${params.slug}`,
    },
  };
}

const SecurityContent = () => (
  <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* AppSec Pillar */}
    <div className="rounded-lg border bg-card p-6 shadow-inner">
      <h3 className="text-xl font-bold flex items-center gap-3">
        <Bug className="h-6 w-6 text-primary" />
        Application Security
      </h3>
      <p className="text-sm text-muted-foreground mt-2">
        <strong>Problem Solved:</strong> Preventing vulnerabilities in your own
        code before they reach production.
      </p>
      <div className="mt-4 pt-4 border-t">
        <h4 className="font-semibold text-foreground">Key Roles</h4>
        <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
          <li>AppSec Engineer</li>
          <li>Security Champion (embedded in dev team)</li>
        </ul>
      </div>
      <div className="mt-4 pt-4 border-t">
        <h4 className="font-semibold text-foreground">Core Skills</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {[
            "Threat modeling",
            "Secure SDLC",
            "SAST/DAST",
            "Secrets management",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-primary/20 text-primary px-3 py-1 text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 pt-4 border-t">
        <h4 className="font-semibold text-foreground">Key Technologies</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {["CodeQL", "Snyk", "SonarQube", "OWASP ZAP", "Vault", "SOPS"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-full bg-primary/20 text-primary px-3 py-1 text-xs font-medium"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </div>

    {/* CloudSec / GRC Pillar */}
    <div className="space-y-8">
      <div className="rounded-lg border bg-card p-6 shadow-inner">
        <h3 className="text-xl font-bold flex items-center gap-3">
          <CloudCog className="h-6 w-6 text-primary" />
          Cloud Security
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          <strong>Problem Solved:</strong> Securing your cloud infrastructure
          and managing identities.
        </p>
        <div className="mt-4 pt-4 border-t">
          <h4 className="font-semibold text-foreground">Key Roles</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
            <li>Cloud Security Engineer</li>
            <li>Identity & Access Management (IAM) Engineer</li>
          </ul>
        </div>
        <div className="mt-4 pt-4 border-t">
          <h4 className="font-semibold text-foreground">Key Technologies</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Okta", "Auth0", "OIDC/SAML", "CrowdStrike", "AWS IAM"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-primary/20 text-primary px-3 py-1 text-xs font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
      <div className="rounded-lg border bg-card p-6 shadow-inner">
        <h3 className="text-xl font-bold flex items-center gap-3">
          <Shield className="h-6 w-6 text-primary" />
          Governance, Risk & Compliance (GRC)
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          <strong>Problem Solved:</strong> Passing audits and proving your
          security posture to enterprise customers.
        </p>
        <div className="mt-4 pt-4 border-t">
          <h4 className="font-semibold text-foreground">Key Roles</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
            <li>CISO / Head of Security</li>
            <li>GRC Lead</li>
            <li>Privacy Lead (DPO)</li>
          </ul>
        </div>
        <div className="mt-4 pt-4 border-t">
          <h4 className="font-semibold text-foreground">Key Frameworks</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {["SOC 2", "ISO 27001", "HIPAA", "PCI DSS", "GDPR/CCPA"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-primary/20 text-primary px-3 py-1 text-xs font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function RoleCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = roleData[params.slug];

  if (!category) {
    notFound();
  }

  const { name, intro, roles, skills, tech, evaluation, problems } = category;
  const siteUrl = "https://cto.teamstation.dev";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Hire Nearshore ${name} Engineers`,
    serviceType: "IT Staff Augmentation",
    provider: {
      "@type": "Organization",
      name: "TeamStation AI",
    },
    areaServed: "LATAM",
    description: intro,
    keywords: `hire ${name}, nearshore ${name}, latam ${name}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hire",
        item: `${siteUrl}/hire`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "By Role",
        item: `${siteUrl}/hire/by-role`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: name,
        item: `${siteUrl}/hire/by-role/${params.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <main className="container max-w-5xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/hire" className="hover:text-foreground">
            Hire
          </Link>{" "}
          /{" "}
          <Link href="/hire/by-role" className="hover:text-foreground">
            By Role
          </Link>{" "}
          / <span>{name}</span>
        </div>
        <header className="my-12">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            {name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{intro}</p>
        </header>

        {name === "Security & GRC" ? (
          <SecurityContent />
        ) : (
          <div className="my-16">
            {problems && problems.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-center">
                  Problems We Solve
                </h2>
                <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">
                  We provide experts who solve these specific, high-stakes
                  business problems.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  {problems.map((problem) => (
                    <div
                      key={problem.pain}
                      className="rounded-lg border bg-card p-6 shadow-lg"
                    >
                      <p className="font-semibold text-primary flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 mt-1 shrink-0" />
                        {problem.pain}
                      </p>
                      <div className="mt-4 border-t pt-4">
                        <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
                          <Key className="h-4 w-4" />
                          Relevant Roles & Skills
                        </h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {problem.roles.map((r) => (
                            <span
                              key={r}
                              className="text-xs font-medium bg-primary/20 text-primary px-2 py-1 rounded-full"
                            >
                              {r}
                            </span>
                          ))}
                          {problem.skills.map((s) => (
                            <span
                              key={s}
                              className="text-xs font-medium bg-background px-2 py-1 rounded-full"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-bold border-b pb-2">Key Roles</h2>
                <ul className="mt-4 space-y-2 list-none p-0">
                  {roles.map((role) => (
                    <li key={role} className="text-muted-foreground">
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold border-b pb-2">
                  Core Skills & Technologies
                </h2>
                <div className="mt-4">
                  <h3 className="font-semibold text-foreground">Skills</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-primary/20 text-primary px-3 py-1 text-xs font-medium"
                      >
                        {skill.includes("IaC") ? (
                          <WithTooltip label="Infrastructure as Code: Managing infrastructure through code instead of manual processes.">
                            <span className="border-b border-dashed">IaC</span>
                          </WithTooltip>
                        ) : skill.includes("SLO/SLI") ? (
                          <WithTooltip label="Service Level Objectives/Indicators: A framework for defining and measuring reliability.">
                            <span className="border-b border-dashed">
                              SLO/SLI/error budgets
                            </span>
                          </WithTooltip>
                        ) : skill.includes("ELT") ? (
                          <WithTooltip label="Extract, Load, Transform: A data integration process where data is loaded into the target system before transformation.">
                            <span className="border-b border-dashed">ELT</span>
                          </WithTooltip>
                        ) : skill.includes("retrieval") ? (
                          <WithTooltip label="In RAG systems, this is the process of designing how to best find and retrieve relevant documents from a vector database.">
                            <span className="border-b border-dashed">
                              retrieval design
                            </span>
                          </WithTooltip>
                        ) : (
                          skill
                        )}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold text-foreground">
                    Technologies & Libraries
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2 items-center">
                    {tech.map((t, i) => (
                      <Link
                        href={`/hire/by-technology/${t.slug}`}
                        key={t.slug}
                        className="rounded-full bg-primary/20 text-primary px-3 py-1 text-xs font-medium hover:bg-primary/30 transition-colors"
                      >
                        {t.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="my-16 rounded-lg border bg-card p-8 shadow-lg">
          <h2 className="text-center text-3xl font-bold">
            Our Evaluation Approach for {name}
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
            For roles in <strong>{name}</strong>, we understand that "good
            enough" is a recipe for disaster. Our{" "}
            <Link
              href="/research/axiom-cortex-scientific-report"
              className="text-primary hover:underline"
            >
              Axiom Cortex™ evaluation
            </Link>{" "}
            goes beyond simple coding tests to de-risk your hiring decision.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-8 max-w-2xl mx-auto">
            {evaluation.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl mx-auto text-center text-muted-foreground">
            This means you get a candidate who is not only technically
            proficient but is also a proven problem-solver, a strong
            collaborator, and ready to contribute from day one. You're not just
            hiring a resume; you're hiring a pre-validated, high-impact team
            member whose "mental shape" has been mapped to the specific demands
            of the role.
          </p>
        </div>

        <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
          <h2 className="text-2xl font-bold">
            Ready to Hire Elite {name} Talent?
          </h2>
          <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            Stop sifting through unqualified resumes. Let us provide you with a
            shortlist of 2-3 elite, pre-vetted candidates ready to make an
            impact.
          </p>
          <Link
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button mt-6"
          >
            Book a No-Obligation Strategy Call
          </Link>
        </div>
        <FurtherReading comparison={params.slug} />
      </main>
    </>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllRoleSlugs();
  return slugs.map((slug) => ({ slug }));
}

```
- workspace/src/lib/playbook-data.ts:
```ts
// src/lib/playbook-data.ts

// --- 1. TYPE DEFINITIONS (E-E-A-T Focus) ---

export type Author = {
    name: string;
    title: string;
    credentials: string; // e.g., "Former AWS Principal Engineer, 20+ years in distributed systems"
    imageUrl: string; // For the author profile picture
};

export type TocItem = {
    id: string; // Anchor link ID (e.g., #daylight-flow)
    level: number; // h2 = 2, h3 = 3
    title: string;
};

// The core structure for a single Playbook chapter's data
export type PlaybookFactPack = {
    slug: string;
    title: string;
    meta: string;
    date: string; // ISO 8601 date string for structured data
    author: Author;
    keywords: string[];
    toc: TocItem[];
};

// --- 2. DYNAMIC DATA SIMULATION (Placeholder for Database/CMS Fetch) ---

// Define a set of programmatic slugs for static generation
const MOCK_SLUGS = ['nearshore-vs-offshore', 'bias-free-technical-hiring-axiom-cortex', 'latam-economics', 'build-vs-buy', 'tco-model'];

// Define the high-authority author for E-E-A-T
const MOCK_AUTHOR_CTO: Author = {
    name: 'Dr. Evelyn Reed',
    title: 'Chief Strategy Officer & Author',
    credentials: 'PhD in Cognitive Computing, Former VP of Engineering at Google X, 20+ patents in AI Vetting.',
    imageUrl: '/authors/evelyn-reed.jpg', // Placeholder image URL
};

// Full data pack simulation for a key pillar chapter
const MOCK_DATA_NEARSHORE: PlaybookFactPack = {
    slug: 'nearshore-vs-offshore',
    title: 'The CTO\'s Guide: Nearshore vs. Offshore Development Strategy',
    meta: 'Analyze the trade-offs of nearshore (LATAM) vs. offshore (Asia/Eastern Europe) engineering talent. Focus on Daylight PR Flow and time-to-productivity.',
    date: '2025-05-01',
    author: MOCK_AUTHOR_CTO,
    keywords: ['Nearshore', 'Offshore', 'LATAM', 'Hiring Strategy', 'Timezone Overlap', 'Productivity'],
    toc: [
        { id: 'introduction', level: 2, title: 'Introduction: The Unspoken Cost of Async' },
        { id: 'daylight-flow', level: 2, title: 'Daylight PR Flow: The Throughput Multiplier' },
        { id: 'latam-advantage', level: 3, title: 'LATAM: A Cultural and Cognitive Fit' },
        { id: 'cost-risk', level: 2, title: 'Cost vs. Risk: Why Cheapest is not Cheapest' },
        { id: 'conclusion', level: 2, title: 'Conclusion: Building a 100% Aligned Pod' },
    ],
};

const MOCK_DATA_AXIOM_CORTEX: PlaybookFactPack = {
    slug: 'bias-free-technical-hiring-axiom-cortex',
    title: 'Bias-Free Technical Hiring with Axiom Cortex™',
    meta: 'Learn how to eliminate hiring bias and identify top performers with Axiom Cortex™, a cognitive evaluation platform.',
    date: '2025-05-15',
    author: MOCK_AUTHOR_CTO,
    keywords: ['Hiring Bias', 'Axiom Cortex', 'Technical Vetting', 'Cognitive Science', 'Performance Prediction'],
    toc: [
        { id: 'problem-with-interviews', level: 2, title: 'The Flawed Proxy: Why Traditional Interviews Fail' },
        { id: 'cognitive-load-testing', level: 2, title: 'Axiom Cortex™: Measuring What Matters' },
        { id: 'how-it-works', level: 3, title: 'Simulating Real-World Problem Solving' },
        { id: 'validation', level: 2, title: 'Case Study: 6x Reduction in Mis-Hires' },
        { id: 'implementation', level: 2, title: 'Integrating Axiom Cortex™ into Your Workflow' },
    ],
};

const MOCK_DATA_LATAM_ECONOMICS: PlaybookFactPack = {
    slug: 'latam-economics',
    title: 'The Economic Case for LATAM Nearshore Teams',
    meta: 'A data-driven analysis of the total cost of ownership (TCO) for high-performing nearshore teams in Latin America.',
    date: '2025-06-01',
    author: MOCK_AUTHOR_CTO,
    keywords: ['LATAM Economics', 'Total Cost of Ownership', 'Nearshore Value', 'Engineering ROI', 'Global Talent'],
    toc: [
        { id: 'beyond-salary', level: 2, title: 'Beyond Salary: The TCO Equation' },
        { id: 'productivity-index', level: 2, title: 'The Productivity Index: Output per Dollar' },
        { id: 'attrition-costs', level: 3, title: 'Hidden Costs: The Price of Attrition' },
        { id: 'fully-loaded-model', level: 2, title: 'Financial Model: Fully-Loaded Cost Analysis' },
        { id: 'summary', level: 2, title: 'Summary: The Strategic ROI of LATAM' },
    ],
};

const MOCK_DATA_BUILD_VS_BUY: PlaybookFactPack = {
    slug: 'build-vs-buy',
    title: 'Build vs. Buy: A Framework for Nearshore Operations',
    meta: 'A CTO\'s guide to deciding between building an in-house nearshore operation versus buying into a managed platform.',
    date: '2025-06-15',
    author: MOCK_AUTHOR_CTO,
    keywords: ['Build vs Buy', 'Nearshore Operations', 'TCO', 'Risk Management', 'Scaling Teams'],
    toc: [
        { id: 'intro', level: 2, title: 'The Build vs. Buy Decision' },
        { id: 'build-costs', level: 2, title: 'The Hidden Costs of Building' },
        { id: 'buy-advantages', level: 2, title: 'The Advantages of Buying a Platform' },
        { id: 'framework', level: 2, title: 'A Decision Framework' },
    ],
};

const MOCK_DATA_TCO_MODEL: PlaybookFactPack = {
    slug: 'tco-model',
    title: 'The Total Cost of Ownership (TCO) Model',
    meta: 'A detailed financial model for calculating the true cost of engineering talent, accounting for hidden costs.',
    date: '2025-07-01',
    author: MOCK_AUTHOR_CTO,
    keywords: ['TCO Model', 'Engineering Costs', 'Financial Planning', 'Budgeting', 'ROI'],
    toc: [
        { id: 'tco-intro', level: 2, title: 'Introduction to TCO' },
        { id: 'direct-costs', level: 2, title: 'Direct Costs' },
        { id: 'indirect-costs', level: 2, title: 'Indirect Costs (The Hidden Taxes)' },
        { id: 'tco-calculator', level: 2, title: 'The TCO Calculator' },
    ],
};

/**
 * Retrieves all available programmatic slugs for Next.js build configuration (SSG).
 */
export async function getPlaybookSlugs(): Promise<string[]> {
    // In production, this would query a CMS API for all published slugs.
    return MOCK_SLUGS;
}

/**
 * Retrieves the full data pack for a given Playbook chapter slug.
 */
export async function getPlaybookData(slug: string): Promise<PlaybookFactPack | null> {
    // In production, this would query a CMS database with the slug.
    if (slug === 'nearshore-vs-offshore') return MOCK_DATA_NEARSHORE;
    if (slug === 'bias-free-technical-hiring-axiom-cortex') return MOCK_DATA_AXIOM_CORTEX;
    if (slug === 'latam-economics') return MOCK_DATA_LATAM_ECONOMICS;
    if (slug === 'build-vs-buy') return MOCK_DATA_BUILD_VS_BUY;
    if (slug === 'tco-model') return MOCK_DATA_TCO_MODEL;

    // Simple mock for other slugs to ensure SSG works, but returns null if truly not found.
    const isMocked = MOCK_SLUGS.includes(slug);
    if (!isMocked) return null;

    return {
        ...MOCK_DATA_NEARSHORE,
        slug: slug,
        title: `Strategy Deep Dive: ${slug.replace(/-/g, ' ')}`,
    }
}
```
- workspace/src/lib/tech-categories.ts:
```ts

import type { ElementType } from 'react';
import {
  Server,
  Layers,
  Plane,
  Database,
  Component,
  BrainCircuit,
  GanttChartSquare,
  ShieldCheck,
  TestTube2,
  Wallet,
} from 'lucide-react';

export interface TechCategory {
  name: string;
  slug: string;
  pain: string;
  icon: ElementType;
  tech: Array<{ name: string; slug: string }>;
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
      { name: 'SQL Server', slug: 'sql-server' },
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
  },
];

```
- workspace/src/lib/tech.ts:
```ts
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
  | "golang"
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
  | "graphql";

export interface AllTech {
  [key: string]: TechEntry;
}

// The single source of truth for all technology data.
export const allTech: AllTech = allTechData;

export function getAllTechSlugs(): string[] {
  return Object.keys(allTech);
}

```
- workspace/src/lib/utils.ts:
```ts
// src/lib/utils.ts
// This file can be used for any shared utility functions.

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```
- workspace/src/providers/app-providers.tsx:
```tsx

'use client';

import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider delayDuration={0}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </TooltipProvider>
  );
}

```
- workspace/tailwind.config.ts:
```ts

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.md',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
       typography: ({ theme }: { theme: any }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'hsl(var(--muted-foreground))',
            '--tw-prose-headings': 'hsl(var(--primary))',
            '--tw-prose-lead': 'hsl(var(--muted-foreground))',
            '--tw-prose-links': 'hsl(var(--primary))',
            '--tw-prose-bold': 'hsl(var(--foreground))',
            '--tw-prose-counters': 'hsl(var(--muted-foreground))',
            '--tw-prose-bullets': 'hsl(var(--border))',
            '--tw-prose-hr': 'hsl(var(--border))',
            '--tw-prose-quotes': 'hsl(var(--foreground))',
            '--tw-prose-quote-borders': 'hsl(var(--border))',
            '--tw-prose-captions': 'hsl(var(--muted-foreground))',
            '--tw-prose-code': 'hsl(var(--foreground))',
            '--tw-prose-pre-code': 'hsl(var(--foreground))',
            '--tw-prose-pre-bg': 'hsl(var(--card))',
            '--tw-prose-th-borders': 'hsl(var(--border))',
            '--tw-prose-td-borders': 'hsl(var(--border))',
            '--tw-prose-invert-body': 'hsl(var(--muted-foreground))',
            '--tw-prose-invert-headings': 'hsl(var(--primary))',
            '--tw-prose-invert-lead': 'hsl(var(--muted-foreground))',
            '--tw-prose-invert-links': 'hsl(var(--primary))',
            '--tw-prose-invert-bold': 'hsl(var(--foreground))',
            '--tw-prose-invert-counters': 'hsl(var(--muted-foreground))',
            '--tw-prose-invert-bullets': 'hsl(var(--border))',
            '--tw-prose-invert-hr': 'hsl(var(--border))',
            '--tw-prose-invert-quotes': 'hsl(var(--foreground))',
            '--tw-prose-invert-quote-borders': 'hsl(var(--border))',
            '--tw-prose-invert-captions': 'hsl(var(--muted-foreground))',
            '--tw-prose-invert-code': 'hsl(var(--foreground))',
            '--tw-prose-invert-pre-code': 'hsl(var(--foreground))',
            '--tw-prose-invert-pre-bg': 'hsl(var(--card))',
            '--tw-prose-invert-th-borders': 'hsl(var(--border))',
            '--tw-prose-invert-td-borders': 'hsl(var(--border))',
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;

```
- workspace/src/data/technologies/k6.json:
```json
import { TechEntry } from "@/lib/tech";
import { AlertTriangle } from "lucide-react";

const pact: TechEntry = {
    "name": "Pact",
    "category": "QA & Security",
    "categorySlug": "qa-quality-engineering",
    "seo_title": "Hire Pact Experts | Contract Testing & Microservices QA",
    "meta_description": "Ensure your microservices can communicate reliably. Hire elite remote Pact experts vetted for contract-driven development and CI/CD integration. Book a call.",
    "intro": "Pact is the leading framework for <strong>Consumer-Driven Contract Testing</strong>, ensuring that services (e.g., an API provider and a client) can evolve independently without breaking integrations. You need an engineer who understands that reliable microservices aren't just about unit tests, but about guaranteeing the contract between services. Our vetting process identifies developers who are experts in implementing Pact, defining clear consumer expectations, and integrating contract testing into the CI/CD pipeline. By hiring a Pact expert from us, you get a developer who can eliminate costly, slow, and flaky end-to-end integration tests, and dramatically increase your confidence in deploying microservices independently.",
    "pains": [
        {
            "icon": AlertTriangle,
            "pain": "Are your integration tests slow, flaky, and a deployment bottleneck?",
            "problem": "Heavy reliance on full end-to-end integration tests makes your CI/CD pipeline slow, expensive, and unreliable. A failure in one minor service can block the entire release train, making it impossible to deploy services independently.",
            "solution": "We vet for experts in <strong>Consumer-Driven Contract Testing</strong>. Our engineers use Pact to replace slow integration tests with fast, reliable contract tests that run in isolation. This allows teams to verify service integrations without needing to deploy the entire environment, enabling safe and independent service releases.",
            "kpi": "Decoupled Service Deployments and Reduced CI Time"
        },
        {
            "icon": AlertTriangle,
            "pain": "Are you constantly breaking consumers of your API?",
            "problem": "When an API provider makes a change, they often have no idea which consumers will be affected. This leads to unexpected breakages in production, frantic rollbacks, and a breakdown of trust between teams.",
            "solution": "Our engineers are masters of the <strong>Pact Broker</strong>. They are vetted on their ability to set up and use a Pact Broker as a central hub for sharing contracts and verification results. This provides immediate visibility into which consumers will break *before* the provider deploys a change, enabling safe, collaborative evolution of APIs.",
            "kpi": "Safe and Collaborative API Evolution with Pact Broker"
        },
        {
            "icon": AlertTriangle,
            "pain": "Do you lack a clear, enforceable contract for your microservices?",
            "problem": "Without a formal contract, assumptions about how services communicate lead to misunderstandings and integration bugs. API documentation is often out-of-date and provides no guarantee of correctness.",
            "solution": "We look for engineers proficient in <strong>Contract-Driven Development</strong>. They are vetted on their ability to use Pact to create an executable, verifiable contract that becomes the single source of truth for how services interact. This ensures that documentation is always up-to-date and that all parties adhere to the agreed-upon contract.",
            "kpi": "Executable Contracts as a Single Source of Truth"
        }
    ],
    "evaluation": [
        "Consumer-Driven Contract Testing principles",
        "Pact framework for both consumer and provider testing",
        "Integration with CI/CD pipelines (e.g., Jenkins, GitHub Actions)",
        "Pact Broker for contract sharing and verification",
        "Strategies for handling evolving contracts and versioning"
    ],
    "technical_analysis": "The Pact evaluation focuses on a candidate's ability to implement a robust contract testing strategy for a microservices architecture. We assess their understanding of the consumer-driven workflow, requiring them to write both a consumer test that generates a pact file and a provider verification test that validates it. A critical part of the evaluation is their mastery of the <strong>Pact Broker</strong>; candidates must demonstrate how to publish contracts, retrieve them for verification, and use the 'can-i-deploy' tool to ensure safe deployments. We also test their ability to integrate Pact into a CI/CD pipeline, ensuring that contract tests are run automatically on every build. Finally, we assess their knowledge of handling more complex scenarios, such as provider states and message-based contract testing for asynchronous systems.",
    "interlink_slugs": ["microservices", "ci-cd", "devops-engineering", "qa-automation"]
};

export default pact;
```
- workspace/src/lib/playbook.ts:
```ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src', 'content', 'playbook');

// Statically define the slugs for the existing playbook pages.
// This prevents the build process from trying to find markdown files that no longer exist.
const playbookSlugs = [
    'bias-free-technical-hiring-axiom-cortex',
    'build-vs-buy',
    'latam-economics',
    'nearshore-vs-offshore',
    'tco-model'
];

export async function getAllPlaybookSlugs(): Promise<string[]> {
    return playbookSlugs;
}

export async function getPlaybookBySlug(slug: string) {
    try {
        const filePath = path.join(contentDirectory, `${slug}.mdx`); // Assuming .mdx, adjust if needed
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const stats = fs.statSync(filePath);
        const { data } = matter(fileContents);
        
        return {
            slug,
            title: data.title,
            description: data.description,
            lastModified: (data.lastModified || data.date || stats.mtime).toISOString(),
        };
    } catch (error) {
        console.error(`Could not get playbook for slug: ${slug}`, error);
        return null;
    }
}

```
- workspace/src/lib/sitemap-data.ts:
```ts
// src/lib/sitemap-data.ts
import { getPages, formatPaths } from './sitemap-utils';
import { getAllTechSlugs as getTechSlugs } from "./tech";
import { countries } from "@/lib/countries";
import { getAllCaseStudies } from "./case-studies";
import { getAllRoleSlugs } from "./roles";
import { getAllPlaybookSlugs } from "./playbook";
import type { SitemapUrl } from "./sitemap-utils";
import { comparisonPages } from "@/lib/comparisonPages";

const BASE_URL = "https://cto.teamstation.dev";
const today = new Date().toISOString();

// 1. Core Pages (Static)
export async function collectCoreUrls(): Promise<SitemapUrl[]> {
  // Define a list of patterns to exclude
  const excludePatterns = [
    '/api/',                // Exclude all API routes
    '/sitemaps/',           // Exclude the sitemap generation routes
    'sitemap.xml',          // Exclude the main sitemap file
    '[slug]', '[vendor]'     // Exclude all dynamic route templates
  ];

  // Get all page.tsx files from the app directory, applying the exclusion list
  const pageFiles = getPages('src/app', excludePatterns);
  
  // Format the file paths into full URLs
  const urls = formatPaths(pageFiles);

  return urls.map(url => ({
    loc: url,
    lastmod: today,
    changefreq: "weekly",
    priority: 0.8, // Default priority for static pages
  }));
}

// 2. Playbook URLs (Dynamic)
export async function collectPlaybookUrls(): Promise<SitemapUrl[]> {
  const playbookSlugs = await getAllPlaybookSlugs();
  return playbookSlugs.map((slug) => ({
    loc: `${BASE_URL}/playbook/${slug}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.7,
  }));
}

// 2b. Research/Case Study URLs (Dynamic)
export async function collectCaseStudyUrls(): Promise<SitemapUrl[]> {
  const caseStudies = await getAllCaseStudies();

  const caseStudyEntries = caseStudies.map(
    (study): SitemapUrl => ({
      loc: `${BASE_URL}/case-studies/${study.slug}`,
      lastmod: study.lastModified || new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    })
  );

  return caseStudyEntries;
}

// 3. Comparison URLs (Dynamic)
export async function collectComparisonUrls(): Promise<SitemapUrl[]> {
  const slugs = comparisonPages.map((p) => p.slug);
  return slugs.map(
    (slug): SitemapUrl => ({
      loc: `${BASE_URL}/comparisons/${slug}`,
      lastmod: new Date().toISOString(),
      changefreq: "quarterly",
      priority: 0.8,
    })
  );
}

// 4. Programmatic Hire-By-Country URLs (Dynamic)
export async function collectHireByCountryUrls(): Promise<SitemapUrl[]> {
  const techSlugs = await getTechSlugs();
  return countries.flatMap((country) => {
    const base: SitemapUrl = {
      loc: `${BASE_URL}/hire/by-country/${country.slug}`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    };
    const techPages: SitemapUrl[] = techSlugs.map(
      (techSlug): SitemapUrl => ({
        loc: `${BASE_URL}/hire/by-country/${country.slug}/${techSlug}`,
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.7,
      })
    );
    return [base, ...techPages];
  });
}

// 5. Programmatic Hire-By-Role URLs (Dynamic)
export async function collectHireByRoleUrls(): Promise<SitemapUrl[]> {
  const slugs = getAllRoleSlugs();
  return slugs.map(
    (slug): SitemapUrl => ({
      loc: `${BASE_URL}/hire/by-role/${slug}`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    })
  );
}

// 6. Programmatic Hire-By-Technology URLs (Dynamic)
export async function collectHireByTechnologyUrls(): Promise<SitemapUrl[]> {
  const slugs = await getTechSlugs();
  return slugs.map((slug) => ({
    loc: `${BASE_URL}/hire/by-technology/${slug}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.8,
  }));
}

```
- workspace/src/lib/tech-categories.ts:
```ts

import type { ElementType } from 'react';
import {
  Server,
  Layers,
  Plane,
  Database,
  Component,
  BrainCircuit,
  GanttChartSquare,
  ShieldCheck,
  TestTube2,
  Wallet,
} from 'lucide-react';

export interface TechCategory {
  name: string;
  slug: string;
  pain: string;
  icon: ElementType;
  tech: Array<{ name: string; slug: string }>;
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
      { name: 'SQL Server', slug: 'sql-server' },
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
  },
];

```
- workspace/src/lib/tech.ts:
```ts
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
  | "golang"
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
  | "graphql";

export interface AllTech {
  [key: string]: TechEntry;
}

// The single source of truth for all technology data.
export const allTech: AllTech = allTechData;

export function getAllTechSlugs(): string[] {
  return Object.keys(allTech);
}

```
- workspace/src/lib/utils.ts:
```ts
// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```
