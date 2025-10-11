
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
import { roleCategories, getAllRoleSlugs } from "../../../../lib/roles";
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
                          <WithTooltip content="Infrastructure as Code: Managing infrastructure through code instead of manual processes.">
                            <span className="border-b border-dashed">IaC</span>
                          </WithTooltip>
                        ) : skill.includes("SLO/SLI") ? (
                          <WithTooltip content="Service Level Objectives/Indicators: A framework for defining and measuring reliability.">
                            <span className="border-b border-dashed">
                              SLO/SLI/error budgets
                            </span>
                          </WithTooltip>
                        ) : skill.includes("ELT") ? (
                          <WithTooltip content="Extract, Load, Transform: A data integration process where data is loaded into the target system before transformation.">
                            <span className="border-b border-dashed">ELT</span>
                          </WithTooltip>
                        ) : skill.includes("retrieval") ? (
                          <WithTooltip content="In RAG systems, this is the process of designing how to best find and retrieve relevant documents from a vector database.">
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
