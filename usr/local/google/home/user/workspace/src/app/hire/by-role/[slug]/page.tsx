
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
import { roleCategories } from "../../../../lib/roles";
import { JsonLd } from "../../../../components/seo/JsonLd";
import FurtherReading from "../../../../components/seo/FurtherReading";
import dynamic from 'next/dynamic';
import * as LucideIcons from 'lucide-react';

const ClientJsonLd = dynamic(() => import('@/components/seo/JsonLd'), { ssr: false });

const icons: { [key: string]: React.ElementType } = {
  ...LucideIcons,
  AlertTriangle,
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
- workspace/src/lib/playbook.ts:
```ts

import fs from 'fs/promises';
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
        const fileContents = await fs.readFile(filePath, 'utf8');
        const stats = await fs.stat(filePath);
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
import { getPages, formatPaths } from "./sitemap-utils";
import type { SitemapUrl } from "./sitemap-utils";

export { getPages, formatPaths } from "./sitemap-utils";
export type { SitemapUrl };

// This is a simple wrapper for now, but allows for more complex logic later.
export async function collectCoreUrls(): Promise<SitemapUrl[]> {
    const pageFiles = getPages("src/app", [
      "/app/case-studies",
      "/app/comparisons",
      "/app/hire",
      "/app/playbook",
      "/app/research",
      '[slug]', '[vendor]' 
    ]);
    const urls = formatPaths(pageFiles);
    const today = new Date().toISOString();
    return urls.map((url) => ({
      loc: url,
      lastmod: today,
      changefreq: "weekly",
      priority: 0.8,
    }));
}

export async function collectCaseStudyUrls(): Promise<SitemapUrl[]> {
    const pageFiles = getPages("src/app/case-studies", ['[slug]']);
    const urls = formatPaths(pageFiles);
    const today = new Date().toISOString();
    return urls.map((url) => ({
        loc: url,
        lastmod: today,
        changefreq: "monthly",
        priority: 0.7,
    }));
}

export async function collectComparisonUrls(): Promise<SitemapUrl[]> {
    const pageFiles = getPages("src/app/comparisons", ['[vendor]']);
    const urls = formatPaths(pageFiles);
    const today = new Date().toISOString();
    return urls.map((url) => ({
        loc: url,
        lastmod: today,
        changefreq: "monthly",
        priority: 0.7,
    }));
}

export async function collectHireByCountryUrls(): Promise<SitemapUrl[]> {
    const pageFiles = getPages("src/app/hire/by-country", ['[slug]']);
    const urls = formatPaths(pageFiles);
    const today = new Date().toISOString();
    return urls.map((url) => ({
        loc: url,
        lastmod: today,
        changefreq: "monthly",
        priority: 0.7,
    }));
}

export async function collectHireByRoleUrls(): Promise<SitemapUrl[]> {
    const pageFiles = getPages("src/app/hire/by-role", ['[slug]']);
    const urls = formatPaths(pageFiles);
    const today = new Date().toISOString();
    return urls.map((url) => ({
        loc: url,
        lastmod: today,
        changefreq: "monthly",
        priority: 0.7,
    }));
}

export async function collectHireByTechnologyUrls(): Promise<SitemapUrl[]> {
    const allHirePages = getPages("src/app/hire");
    const staticHirePages = allHirePages.filter(page => !page.includes('['));

    const techPages = staticHirePages.filter(page => {
        const isDirectTechPage = page.includes('/by-technology/');
        const isNestedTechPage = page.includes('/by-country/');

        if (isDirectTechPage) {
            return !page.endsWith('/by-technology/page.tsx');
        }
        if (isNestedTechPage) {
            return page.split('/').length > 6;
        }
        return false;
    });

    const urls = formatPaths(techPages);
    const today = new Date().toISOString();
    return urls.map((url) => ({
        loc: url,
        lastmod: today,
        changefreq: "monthly",
        priority: 0.6,
    }));
}

export async function collectResearchUrls(): Promise<SitemapUrl[]> {
  const researchFiles = getPages("src/app/research", ['[slug]']);
  const urls = formatPaths(researchFiles);
  const today = new Date().toISOString();
  return urls.map((url) => ({
    loc: url,
    lastmod: today,
    changefreq: "monthly",
    priority: 0.7,
  }));
}

export async function collectPlaybookUrls(): Promise<SitemapUrl[]> {
  const playbookFiles = getPages("src/app/playbook", ['[slug]']);
  const urls = formatPaths(playbookFiles);
  const today = new Date().toISOString();
  return urls.map((url) => ({
    loc: url,
    lastmod: today,
    changefreq: "monthly",
    priority: 0.7,
  }));
}

```
- workspace/src/lib/sitemap-utils.ts:
```ts

// src/lib/sitemap-utils.ts
import fs from 'fs';
import path from 'path';

export type SitemapUrl = {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
};

export const BASE_URL = 'https://cto.teamstation.dev';

// Function to generate the sitemap XML from a list of URLs
export function generateSitemapXml(urls: SitemapUrl[]): string {
    const urlset = urls.map(url => {
        const loc = url.loc.replace(/&/g, '&amp;');
        let urlEntry = `<url><loc>${loc}</loc>`;
        if (url.lastmod) urlEntry += `<lastmod>${url.lastmod}</lastmod>`;
        if (url.changefreq) urlEntry += `<changefreq>${url.changefreq}</changefreq>`;
        if (url.priority) urlEntry += `<priority>${url.priority.toFixed(1)}</priority>`;
        urlEntry += `</url>`;
        return urlEntry;
    }).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlset}
</urlset>`;
}

// Utility function to recursively find all page.tsx files
export function getPages(dir: string, exclude: string[] = []): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(getPages(filePath, exclude));
    } else if (path.basename(filePath) === 'page.tsx') {
      const isExcluded = exclude.some(pattern => filePath.includes(pattern));
      if (!isExcluded) {
        results.push(filePath);
      }
    }
  });

  return results;
}

// Helper to transform file paths to URL paths
export function formatPaths(paths: string[]): string[] {
  return paths.map(p => {
    let route = p.replace(/^src\/app/, '').replace(/\/page\.tsx$/, '');
    if (route === '') route = '/';
    if (route.length > 1 && route.endsWith('/')) route = route.slice(0, -1);
    return `${BASE_URL}${route}`;
  });
}

```
- workspace/src/lib/tech-data.ts:
```ts

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
import { TechEntry } from "./tech";
  
  export const allTech: Record<string, TechEntry> = {
    net: {
      name: ".NET",
      category: "Backend",
      categorySlug: "backend-developer",
      seo_title: "Hire Nearshore .NET Developers | TeamStation AI",
      meta_description:
        "Elite, pre-vetted .NET engineers in LATAM. Axiom Cortex™ vetting, EOR compliance, and audit-ready ops. Book a strategy call today.",
      intro:
        "Our developers are experts in building robust, scalable applications using the .NET framework.",
      pains: [
        {
          icon: Code,
          problem: "Monolithic architecture slowing down development",
          pain: "Your large, tightly-coupled .NET application is difficult to maintain and deploy, leading to slow development cycles and high regression risk.",
          solution:
            "We provide experts in microservices architecture who can break down your monolith into smaller, manageable services, improving agility and scalability.",
          kpi: "Reduced deployment time by 50% and decreased bug count by 30%.",
        },
        {
          icon: Cloud,
          problem: "High infrastructure costs",
          pain: "Your on-premise .NET infrastructure is expensive to maintain and doesn't scale efficiently with demand.",
          solution:
            "Our developers are proficient in migrating .NET applications to cloud platforms like Azure, optimizing for cost and performance.",
          kpi: "Lowered infrastructure costs by 40% and improved application performance by 25%.",
        },
        {
          icon: GitBranch,
          problem: "Lack of modern CI/CD practices",
          pain: "Your development process is manual and error-prone, resulting in slow releases and frequent rollbacks.",
          solution:
            "We implement modern CI/CD pipelines for .NET applications using tools like Azure DevOps, automating the build, test, and deployment process.",
          kpi: "Increased deployment frequency by 3x and reduced rollback rate by 90%.",
        },
      ],
      evaluation: [
        "Proficiency in C# and .NET Core",
        "Experience with Azure services",
        "Knowledge of microservices architecture",
        "Expertise in database design and optimization",
      ],
      technical_analysis:
        "Our .NET developers are vetted for their ability to design and build enterprise-grade applications. We focus on their understanding of software architecture, cloud-native development, and DevOps practices.",
      interlink_slugs: ["csharp", "azure", "sql-server"],
    },
    dbt: {
      name: 'dbt (Data Build Tool)',
      category: 'Data & AI',
      categorySlug: 'data-engineering-analytics',
      seo_title: 'Hire Senior dbt Developers | Analytics Engineering & Data Modeling',
      meta_description: 'Build reliable, well-tested data pipelines. Hire elite remote dbt experts vetted for advanced data modeling, performance optimization, and DataOps. Book a call.',
      intro: "dbt has become the industry standard for transforming data in the warehouse, bringing software engineering best practices to analytics. You need an Analytics Engineer who can move beyond simple `SELECT` statements to build a robust, modular, and well-tested dbt project. Our vetting process is designed to find these experts. We assess their deep understanding of dbt's core concepts—models, tests, sources, and packages—and their ability to architect scalable data transformations that are both reliable and easy to maintain. By hiring a dbt expert from us, you get a developer who can turn your raw data into a trusted, high-quality asset for the entire organization.",
      pains: [
          {
              icon: AlertTriangle,
              pain: "Is your data pipeline a slow, tangled 'spaghetti' of SQL queries?",
              problem: "Without a modular approach, data transformation logic becomes a monolithic, unmanageable mess. This 'SQL spaghetti' is impossible to debug, difficult to update, and runs inefficiently, causing long pipeline delays and a lack of trust in the data.",
              solution: "We vet for mastery of **dbt's modular architecture**. Our experts must demonstrate the ability to break down complex transformations into small, incremental models that build on each other, using `ref()` to create a clear, testable, and maintainable Directed Acyclic Graph (DAG) of dependencies.",
              kpi: "Modular Data Modeling and DAG Optimization"
          },
          {
              icon: AlertTriangle,
              pain: "Are you constantly fighting data quality issues and untrustworthy reports?",
              problem: "Without automated testing, data quality issues (e.g., null values, failed relationship checks) go undetected, silently corrupting your data warehouse and leading to incorrect business decisions. This erodes trust in the entire data platform.",
              solution: "Our engineers are experts in **dbt's testing framework**. They are vetted on their ability to write and implement comprehensive data tests (generic, singular, and custom) to guarantee data quality, ensuring that every data model is accurate, fresh, and reliable.",
              kpi: "Comprehensive Data Testing and Quality Assurance"
          },
          {
              icon: AlertTriangle,
              pain: "Are your dbt runs slow, inefficient, and costly?",
              problem: "Inefficient dbt project configuration and poor model materialization strategies can lead to slow pipeline runs and excessive data warehouse costs. Developers who don't understand the trade-offs between different materializations (`view`, `table`, `incremental`) waste valuable time and money.",
              solution: "We look for engineers proficient in **dbt performance tuning**. They are vetted on their ability to choose the correct materialization strategy for each model, implement efficient incremental models for large datasets, and optimize dbt run commands for maximum parallelism and performance.",
              kpi: "Performance Tuning and Incremental Modeling"
          }
      ],
      evaluation: ['Advanced dbt project structure and modularity', 'Data modeling and materialization strategies', 'Custom and generic data testing', 'Jinja and macro development for code reuse', 'Performance tuning and incremental models'],
      technical_analysis: "The dbt evaluation is focused on analytics engineering best practices. Candidates are required to design a dbt project for a complex business scenario, demonstrating a clear understanding of staging, intermediate, and marts layers. The critical assessment is their choice of **materializations** and their ability to implement a robust **incremental modeling** strategy for a large fact table, proving their understanding of performance and cost optimization. We rigorously test their testing discipline, requiring them to write both generic and custom data tests to ensure data integrity. Finally, we assess their proficiency with **Jinja macros** for writing DRY, reusable transformation logic.",
      interlink_slugs: ['snowflake', 'data-engineering', 'sql', 'python']
    },
    python: { 
      name: 'Python', 
      category: 'Backend & APIs', 
      categorySlug: 'backend-services', 
      seo_title: 'Hire Senior Python Developers | AI, Data Science & Backend APIs',
      meta_description: 'Hire elite remote Python engineers for scalable APIs (FastAPI), complex data science, and robust backend systems. Vetted for performance and architecture.',
      intro: "Python's versatility makes it the engine for everything from high-traffic APIs (FastAPI) to the core of data science and machine learning (PyTorch/TensorFlow). You need an engineer who can bridge these worlds: a developer who understands both the architectural needs of a robust backend and the unique performance demands of data processing. Our vetting process finds these experts. We focus on their ability to write efficient, clean code (adhering to PEP 8), their mastery of asynchronous programming (asyncio), and their deep knowledge of key libraries like NumPy, Pandas, and Scikit-learn. For backend roles, we test their expertise in modern, high-performance frameworks like FastAPI and Django. By hiring our Python talent, you are investing in a flexible, powerful engineer capable of building intelligent, data-driven applications that scale with your business.",
      pains: [
          {
              icon: AlertTriangle,
              pain: "Is your API performance crippled by the GIL (Global Interpreter Lock)?",
              problem: "Python's GIL prevents true parallel execution of native threads, making I/O-heavy web services and CPU-intensive data tasks perform poorly under concurrent load. Developers who don't understand `asyncio` or multiprocess architecture fail to utilize modern cloud resources efficiently.",
              solution: "Our engineers are masters of asynchronous Python (`asyncio`) and modern frameworks like **FastAPI**. They demonstrate the ability to build high-throughput APIs that utilize asynchronous I/O to maximize performance. For CPU-bound tasks, they implement correct parallel execution using the `multiprocessing` module or offload work to a task queue like Celery.",
              kpi: "API throughput (RPS) and latency"
          },
          {
              icon: AlertTriangle,
              pain: "Is your data pipeline code slow and unmaintainable?",
              problem: "Many developers use base Python loops and data structures for large-scale data processing, which is incredibly slow. Additionally, a lack of clear architecture in data code leads to brittle, untestable, and costly-to-maintain data pipelines.",
              solution: "We vet for deep expertise in vectorized operations using **NumPy** and **Pandas**. Our candidates write highly efficient, idiomatic data processing code that is orders of magnitude faster. For data engineers, they are vetted on their ability to build structured, version-controlled pipelines using tools like **dbt** or **Apache Spark**.",
              kpi: "Data processing time reduction"
          },
          {
              icon: AlertTriangle,
              pain: "Are your ML models stuck in notebooks, not production?",
              problem: "The jump from a data science notebook to a production-ready, scalable ML service is massive. Most data scientists lack the DevOps and software engineering skills to package, deploy, monitor, and maintain models in a live environment.",
              solution: "We hire **MLOps-aware** Python engineers who can build a full ML lifecycle. They are proficient in deploying models as microservices (using FastAPI or Flask) and integrating them with cloud platforms (AWS Sagemaker, Azure ML) and containerization (Docker/Kubernetes).",
              kpi: "Time-to-deploy and model latency"
          }
      ], 
      evaluation: ['Asyncio and non-blocking I/O mastery', 'Modern API frameworks (FastAPI, Django/DRF)', 'Data science stack (NumPy, Pandas, Scikit-learn)', 'MLOps and production model deployment', 'Clean, idiomatic Python (PEP 8)'],
      technical_analysis: "The Python evaluation is bifurcated for core software engineering and data science roles. For backend roles, we test `asyncio` mastery, requiring candidates to design a high-concurrency service using FastAPI and explain how they would handle blocking operations. For data-centric roles, the focus is on efficient data manipulation using NumPy and Pandas, specifically vectorized operations over loops. Both tracks require strong software engineering fundamentals: modular design, dependency management (Poetry/Pipenv), and TDD using Pytest. MLOps awareness is now mandatory, requiring candidates to articulate a strategy for containerizing a model and deploying it to a cloud environment for low-latency inference.",
      interlink_slugs: ['data-engineering', 'machine-learning', 'sql']
    },
    node: {
      name: 'Node.js',
      category: 'Backend & APIs',
      categorySlug: 'backend-services',
      seo_title: 'Hire Senior Node.js Developers | Backend API & Microservices Experts',
      meta_description: 'Build fast, scalable server-side applications. Hire elite remote Node.js experts vetted for event loop mastery, microservices, and performance. Book a call.',
      intro: "You're here because you need a backend that can handle high-concurrency and real-time data without breaking a sweat. Node.js, with its non-blocking, event-driven architecture, is the perfect tool for the job. But you need an engineer who truly understands the **Node.js Event Loop**, a non-negotiable skill for avoiding performance-killing blocking operations. Our vetting process is laser-focused on this architectural core, assessing a candidate's ability to design asynchronous, highly concurrent applications—the very definition of a scalable backend. We look for expertise in building robust, performant APIs (both REST and GraphQL) and their ability to architect microservices using Node.js for maximum agility and decoupling. By hiring a Node.js expert from us, you get a developer who can guarantee your backend can handle explosive user growth without scaling headaches or costly infrastructure overruns.",
      pains: [
          {
              icon: AlertTriangle,
              pain: "Is your server performance plagued by blocking I/O operations?",
              problem: "The Node.js Event Loop is a single thread. Inexperienced developers often use synchronous methods or fail to correctly delegate long-running tasks, causing the Event Loop to block. This stops all concurrent operations, leading to slow response times, high latency, and a server that collapses under load.",
              solution: "We vet for an explicit and deep understanding of the Event Loop. Our experts must demonstrate their ability to write non-blocking asynchronous code, correctly use the `process.nextTick` and `setImmediate` queues, and leverage worker threads or external services for CPU-intensive tasks, guaranteeing peak concurrency and low latency.",
              kpi: "Event Loop Mastery and Non-Blocking I/O"
          },
          {
              icon: AlertTriangle,
              pain: "Is your API logic a monolithic, untestable mess?",
              problem: "A common anti-pattern is building a single, monolithic Express server where business logic, database queries, and routing are tightly coupled. This makes the application nearly impossible to test, refactor, and evolve, slowing down feature development to a crawl.",
              solution: "Our engineers are masters of architectural patterns like the **Clean Architecture** or **Hexagonal Architecture** within Node.js. They are vetted on their ability to structure code with clear separation of concerns (Controllers, Services, Repositories), leading to a highly modular, unit-testable, and maintainable codebase that scales with your business logic.",
              kpi: "Modular Backend Architecture (e.g., Clean/Hexagonal)"
          },
          {
              icon: AlertTriangle,
              pain: "Are you struggling to handle security and input validation correctly?",
              problem: "Failure to implement proper input validation (Joi, Zod) or to correctly manage authentication (JWT, OAuth) and authorization leads to vulnerable APIs susceptible to injection attacks, data breaches, and unauthorized access. Security is often an afterthought.",
              solution: "We look for engineers who integrate security and validation as first-class citizens. They are proficient in modern validation libraries and demonstrate expertise in securing API endpoints with appropriate middleware, token management, and encryption, ensuring your data and users are safe from day one.",
              kpi: "API Security and Validation Expertise"
          }
      ],
      evaluation: ['Event Loop architecture and non-blocking I/O', 'API design (REST, GraphQL) and routing', 'Asynchronous patterns (Promises, Async/Await) and concurrency', 'Modular architecture and code structure', 'Security (Authentication, Authorization, Input Sanitization)'],
      technical_analysis: "The Node.js evaluation is centered on a candidate's mastery of the asynchronous programming model and backend architecture. The critical assessment point is the **Node.js Event Loop**: candidates are given scenarios that intentionally lead to blocking code and are required to diagnose the bottleneck and refactor it into a non-blocking solution, demonstrating an understanding of the different phases (Timers, Pending Callbacks, I/O, Check, Close). For architecture, we evaluate their ability to design a scalable API using modern frameworks (e.g., NestJS, Express) with a clear separation of concerns (e.g., service and repository layers). We specifically test their knowledge of security best practices, including correct implementation of CORS, handling JWTs, and using validation libraries to prevent common API vulnerabilities. Finally, we assess their proficiency with ORMs (e.g., Prisma, TypeORM) and their ability to integrate with diverse data stores (PostgreSQL, MongoDB) efficiently.",
      interlink_slugs: ['typescript', 'microservices', 'rest-api-design', 'postgresql']
    }
  };

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

export function getAllTechSlugs(): string[] {
    return Object.keys(allTech);
}

```
- workspace/src/lib/utils.ts:
```ts
// src/utils/cn.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

```
- workspace/src/providers/app-providers.tsx:
```tsx
'use client';

import React from 'react';
import { ThemeProvider } from '@/components/theme-provider'; // Corrected path
import { TooltipProvider } from '@/components/client/tooltip-provider'; // Corrected path

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
- workspace/src/types/content.ts:
```ts

export type CaseStudy = {
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  summary: string;
  content: string;
  ogImage?: { 
    src?: { 
      url?: string;
      width?: number;
      height?: number;
    },
    aiHint?: string;
  };
  techStack: { name: string; link: string }[];
  canonical: string;
};

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
