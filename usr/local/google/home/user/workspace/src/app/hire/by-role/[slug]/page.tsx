

import Link from 'next/link';
import { WithTooltip } from "../../../../components/ui/tooltip";
import type { Metadata } from 'next';
import { CheckCircle, ArrowRight, Shield, Bug, CloudCog, AlertTriangle, Key } from 'lucide-react';
import { notFound } from 'next/navigation';
import { roleCategories, getAllRoleSlugs } from "../../../../lib/roles";
import { JsonLd } from "../../../../components/seo/JsonLd";
import FurtherReading from "../../../../components/seo/FurtherReading";

const roleData: { [key: string]: { name: string; intro: string; roles: string[]; skills: string[]; tech: { name: string, slug: string }[]; evaluation: string[]; problems?: { pain: string; roles: string[]; skills: string[] }[] } } = {
  'platform-infra-sre': {
    name: 'Platform / Infra / SRE',
    intro: "You're here because system downtime, slow deployments, and runaway cloud bills are direct threats to your business. You need engineers who build resilient, observable, and cost-efficient platforms. That's a high-stakes role, and a mis-hire is not an option.",
    roles: ['Head of Platform', 'SRE/DevOps', 'Cloud Architect', 'Infra Sec Engineer', 'FinOps Lead'],
    skills: ['Cloud architecture (resilience, multi-AZ/region)', 'IaC', 'CI/CD', 'observability', 'cost control', 'incident mgmt (SLO/SLI/error budgets)'],
    tech: [
        { name: 'AWS/GCP/Azure', slug: 'aws' }, 
        { name: 'Docker', slug: 'docker' },
        { name: 'Kubernetes (GKE/EKS/AKS)', slug: 'kubernetes' }, 
        { name: 'Terraform/Pulumi', slug: 'terraform' },
        { name: 'GitHub Actions/GitLab CI/Argo CD', slug: 'github-actions' }, 
        { name: 'Istio/Linkerd', slug: 'istio' }, 
        { name: 'Prometheus/Grafana', slug: 'prometheus' }, 
        { name: 'OpenTelemetry', slug: 'opentelemetry' },
        { name: 'Jaeger/Loki', slug: 'jaeger' },
        { name: 'Vault', slug: 'vault' },
        { name: 'External Secrets', slug: 'external-secrets' },
        { name: 'LaunchDarkly/OpenFeature', slug: 'launchdarkly' }
    ],
    evaluation: [
        'Emphasis on systems thinking and understanding of distributed systems principles (CAP theorem, etc.).',
        'Practical evaluation of IaC skills with a focus on modularity, reusability, and state management.',
        'Scenario-based questions on incident response, debugging complex failures, and establishing SLOs/SLIs.',
        'Assessment of cost-consciousness and ability to analyze and optimize cloud spend.',
    ],
    problems: [
      {
        pain: "System downtime is a direct threat to revenue and reputation.",
        roles: ['SRE/DevOps', 'Cloud Architect'],
        skills: ['Resilience architecture', 'Incident management', 'SLO/SLI definition']
      },
      {
        pain: "Slow, manual deployments are killing our velocity.",
        roles: ['Head of Platform', 'SRE/DevOps'],
        skills: ['CI/CD automation', 'Infrastructure as Code (IaC)', 'GitOps']
      },
      {
        pain: "We're flying blind with no visibility into system performance.",
        roles: ['SRE/DevOps', 'Infra Sec Engineer'],
        skills: ['Observability stacks (metrics, logs, traces)', 'Monitoring & alerting']
      },
      {
        pain: "Our cloud bill is out of control and impossible to predict.",
        roles: ['FinOps Lead', 'Cloud Architect'],
        skills: ['Cloud cost optimization', 'FinOps principles', 'Capacity planning']
      }
    ]
  },
   'security-grc': {
    name: 'Security & GRC',
    intro: "You're here because a single security breach can erase trust, revenue, and brand equity overnight. You need engineers who embed security into the SDLC, not bolt it on as an afterthought. Hiring someone who only knows checklists is a critical risk.",
    roles: ['CISO/Head of Security', 'AppSec', 'CloudSec', 'GRC Lead', 'IAM Engineer', 'Privacy Lead (DPO)'],
    skills: ['Threat modeling', 'SDLC security', 'secrets mgmt', 'identity', 'data protection', 'compliance ops'],
    tech: [
        { name: 'Okta/Auth0/Keycloak', slug: 'okta' }, 
        { name: 'OIDC/SAML', slug: 'oidc' }, 
        { name: 'HashiCorp Vault', slug: 'vault' }, 
        { name: 'SOPS', slug: 'sops' },
        { name: 'SAST/DAST (CodeQL, SonarQube, Snyk, OWASP ZAP, Trivy)', slug: 'codeql' }, 
        { name: 'CrowdStrike/Defender', slug: 'crowdstrike' }, 
        { name: 'SOC 2, ISO 27001, HIPAA, PCI, GDPR, CCPA', slug: 'soc' }
    ],
    evaluation: [
        'Deep evaluation of threat modeling capabilities using real-world application scenarios.',
        'Practical assessment of secure coding knowledge and ability to identify common vulnerabilities (OWASP Top 10).',
        'Scenario-based questions on implementing and managing identity and access management (IAM) at scale.',
        'Review of experience with specific compliance frameworks and the ability to translate controls into technical requirements.',
    ],
  },
  'backend-services': {
    name: 'Backend / Services',
    intro: "You're here because your backend is the engine of your product. Scalability bottlenecks, poor API design, and data integrity issues can grind your business to a halt. You need engineers who can build robust, performant, and maintainable services.",
    roles: ['Principal/Staff Backend', 'API Platform Eng', 'Data Services Eng'],
    skills: ['Domain modeling', 'API design (REST/gRPC/GraphQL)', 'eventing', 'performance', 'caching', 'testing'],
    tech: [
        { name: 'Node.js (NestJS/Fastify)', slug: 'node' }, 
        { name: 'Python (FastAPI/Django)', slug: 'python' }, 
        { name: 'Java (Spring Boot)', slug: 'java' }, 
        { name: 'Go (Gin/Fiber)', slug: 'go' }, 
        { name: '.NET', slug: 'net' }, 
        { name: 'Ruby on Rails', slug: 'ruby' }, 
        { name: 'PHP (Laravel/Symphony)', slug: 'php' }, 
        { name: 'PostgreSQL', slug: 'postgresql' }, 
        { name: 'MySQL', slug: 'mysql' }, 
        { name: 'SQL Server', slug: 'sql' }, 
        { name: 'Redis', slug: 'redis' }, 
        { name: 'Memcached', slug: 'memcached' }, 
        { name: 'Kafka/RabbitMQ/NATS', slug: 'kafka' }, 
        { name: 'Prisma', slug: 'prisma' }, 
        { name: 'TypeORM', slug: 'typeorm' }, 
        { name: 'SQLAlchemy', slug: 'sqlalchemy' }, 
        { name: 'Hibernate', slug: 'hibernate' }, 
        { name: 'EF Core', slug: 'ef-core' }
    ],
    evaluation: [
        'Focus on data modeling and database design, including normalization and indexing strategies.',
        'Practical API design exercises, evaluating choices between REST, gRPC, and GraphQL for different use cases.',
        'Assessment of asynchronous processing and event-driven architecture patterns.',
        'Emphasis on writing clean, testable code with robust unit and integration test coverage.',
    ],
     problems: [
      {
        pain: "Our API is slow, inconsistent, and hard for clients to use.",
        roles: ['API Platform Eng', 'Principal Backend'],
        skills: ['API design (REST/gRPC/GraphQL)', 'Domain modeling', 'Performance tuning']
      },
      {
        pain: "The backend can't handle traffic spikes and frequently crashes.",
        roles: ['Principal/Staff Backend', 'Data Services Eng'],
        skills: ['Scalable architecture', 'Event-driven patterns', 'Caching strategies']
      },
      {
        pain: "Shipping new features is slow and risky due to a complex monolith.",
        roles: ['Principal/Staff Backend'],
        skills: ['Microservices architecture', 'Decoupling strategies', 'Comprehensive testing']
      }
    ]
  },
  'frontend-web': {
    name: 'Frontend / Web',
    intro: "You're here because your frontend is your product's face to the world. A slow, buggy, or inaccessible UI doesn't just frustrate users—it costs you revenue. You need engineers who are obsessed with performance, user experience, and code quality.",
    roles: ['Staff Frontend', 'Web Platform Eng', 'Design Systems Eng'],
    skills: ['Performance/CWV', 'accessibility', 'SSR/CSR trade-offs', 'state/query caching', 'e2e testing'],
    tech: [
        { name: 'React', slug: 'react' }, 
        { name: 'TypeScript', slug: 'typescript' }, 
        { name: 'Next.js', slug: 'nextjs' }, 
        { name: 'Vite', slug: 'vite' }, 
        { name: 'Angular', slug: 'angular' }, 
        { name: 'Vue.js', slug: 'vue' }, 
        { name: 'TanStack Query', slug: 'tanstack' }, 
        { name: 'Redux Toolkit/Zustand', slug: 'redux' }, 
        { name: 'GraphQL (Apollo/Relay)', slug: 'graphql' }, 
        { name: 'Tailwind CSS/shadcn/MUI', slug: 'tailwind' }, 
        { name: 'Storybook', slug: 'storybook' }, 
        { name: 'Testing Library', slug: 'testing' }, 
        { name: 'Playwright/Cypress', slug: 'playwright' }
    ],
     evaluation: [
        'Deep assessment of React and modern JavaScript fundamentals, including hooks and state management patterns.',
        'Practical exercises focused on performance optimization (memoization, virtualization, code splitting).',
        'Evaluation of component design and API choices, with an emphasis on reusability and accessibility (ARIA).',
        'Scenario-based questions on data fetching strategies, caching (client and server), and managing server state.',
    ],
    problems: [
      {
        pain: "Our website is slow and scores poorly on Core Web Vitals.",
        roles: ['Staff Frontend', 'Web Platform Eng'],
        skills: ['Performance optimization (CWV)', 'Modern rendering patterns (SSR/ISR)', 'Bundle analysis']
      },
      {
        pain: "The UI is inconsistent and our design system is a mess.",
        roles: ['Design Systems Eng', 'Staff Frontend'],
        skills: ['Component library architecture', 'Accessibility (ARIA)', 'Theming']
      },
      {
        pain: "State management is complex and leads to constant bugs.",
        roles: ['Staff Frontend'],
        skills: ['Server state management (TanStack Query)', 'Client state strategies (Zustand/Redux)', 'Data fetching patterns']
      }
    ]
  },
   'mobile-cross-platform': {
    name: 'Mobile / Cross-Platform',
    intro: "You're here because a native or cross-platform mobile experience is critical to your product strategy, and the complexities of device fragmentation, offline sync, and store releases are slowing you down.",
    roles: ['Mobile Lead', 'RN/Flutter Eng', 'iOS Engineer', 'Android Engineer', 'SDK Engineer'],
    skills: ['Native performance', 'offline-first architecture', 'OTA updates', 'crash reporting', 'mobile testing'],
    tech: [
        { name: 'React Native', slug: 'react-native' }, 
        { name: 'Flutter', slug: 'flutter' }, 
        { name: 'Swift (SwiftUI/UIKit)', slug: 'swift' }, 
        { name: 'Kotlin (Jetpack Compose)', slug: 'kotlin' }, 
        { name: 'Objective-C', slug: 'objective-c' }, 
        { name: 'Java', slug: 'java' }, 
        { name: 'OTA updates (CodePush)', slug: 'codepush' }, 
        { name: 'Crashlytics/Sentry', slug: 'sentry' }, 
        { name: 'AppCenter', slug: 'appcenter' }, 
        { name: 'Fastlane', slug: 'fastlane' }, 
        { name: 'Detox/Appium/XCUITest', slug: 'detox' }
    ],
     evaluation: [
        'Assessment of mobile-specific architectural patterns (e.g., handling state with limited connectivity).',
        'Practical exercises in debugging native module integrations and performance bottlenecks.',
        'Evaluation of testing strategies across a wide range of devices and OS versions.',
        'Knowledge of app store submission processes and lifecycle management.',
    ],
  },
  'data-engineering-analytics': {
    name: 'Data Engineering / Analytics',
    intro: "You're here because 'data-driven' is a mandate, not a buzzword. But without a reliable data platform, your business is flying blind. You need engineers who can build scalable, trustworthy data pipelines and empower the organization with clean, actionable insights.",
    roles: ['Head of Data', 'Analytics Eng (dbt)', 'Data Platform Eng', 'BI Developer'],
    skills: ['ELT', 'modeling', 'governance', 'streaming', 'DataOps', 'experimentation'],
    tech: [
        { name: 'Snowflake/BigQuery/Redshift', slug: 'snowflake' }, 
        { name: 'dbt', slug: 'dbt' }, 
        { name: 'Airflow/Prefect', slug: 'airflow' }, 
        { name: 'Fivetran/Airbyte', slug: 'fivetran' }, 
        { name: 'Kafka/PubSub/Kinesis', slug: 'kafka' }, 
        { name: 'Spark/Flink', slug: 'spark' }, 
        { name: 'Looker/Tableau/Power BI/Metabase/Superset', slug: 'looker' }, 
        { name: 'DataHub/Amundsen/Apache Atlas', slug: 'datahub' }, 
        { name: 'Great Expectations/Soda', slug: 'great-expectations' }
    ],
     evaluation: [
        'Strong focus on SQL and data modeling principles (Kimball/Inmon, dimensional modeling).',
        'Practical evaluation of dbt skills, including model design, testing, and documentation.',
        'Scenario-based questions on data pipeline architecture, choice of batch vs. streaming, and orchestration best practices.',
        'Assessment of data governance and data quality concepts, including lineage and anomaly detection.',
    ],
     problems: [
      {
        pain: "Our data is unreliable and business decisions are based on stale reports.",
        roles: ['Data Platform Eng', 'Analytics Eng (dbt)'],
        skills: ['Data modeling (dbt)', 'Data pipeline orchestration (Airflow)', 'Data quality testing']
      },
      {
        pain: "We can't get data from our various SaaS tools into one place.",
        roles: ['Data Platform Eng'],
        skills: ['ELT processes (Fivetran/Airbyte)', 'Data warehousing (Snowflake/BigQuery)']
      },
      {
        pain: "No one trusts the data because there's no documentation or governance.",
        roles: ['Head of Data', 'BI Developer'],
        skills: ['Data governance', 'Data cataloging (DataHub)', 'BI platform management']
      }
    ]
  },
  'ml-ai-llm-ops': {
    name: 'ML/AI & LLM Ops',
    intro: "You're here because integrating AI is no longer optional, but turning a Jupyter notebook into a production-ready, scalable service is a massive challenge. You need engineers who understand the full lifecycle of ML/LLM systems, from data to deployment to evaluation.",
    roles: ['ML Lead', 'Applied Scientist', 'MLOps/LLMOps', 'Prompt/RAG Engineer', 'Evaluation Engineer'],
    skills: ['Feature engineering', 'offline/online eval', 'retrieval design', 'safety/guardrails', 'cost/perf tuning'],
    tech: [
        { name: 'Python', slug: 'python' }, 
        { name: 'PyTorch/TensorFlow/JAX', slug: 'pytorch' }, 
        { name: 'scikit-learn', slug: 'scikit-learn' }, 
        { name: 'Transformers (HF)', slug: 'transformers' }, 
        { name: 'OpenAI/Anthropic SDKs', slug: 'openai' }, 
        { name: 'vLLM/TensorRT-LLM', slug: 'vllm' }, 
        { name: 'Ray Serve', slug: 'ray' }, 
        { name: 'LangChain/LlamaIndex', slug: 'langchain' }, 
        { name: 'pgvector/Pinecone/Weaviate', slug: 'pgvector' }, 
        { name: 'MLflow/W&B', slug: 'mlflow' }, 
        { name: 'Kubeflow', slug: 'kubeflow' }, 
        { name: 'Ragas/DeepEval/Arize', slug: 'ragas' }, 
        { name: 'DVC', slug: 'dvc' }, 
        { name: 'Feast/Tecton', slug: 'feast' }
    ],
     evaluation: [
        'Deep assessment of ML fundamentals and practical application of modeling techniques.',
        'For LLMOps, a strong focus on RAG architecture, vector databases, and retrieval strategies.',
        'Practical exercises in building and deploying a model as a scalable service, including containerization and monitoring.',
        'Evaluation of prompt engineering, fine-tuning, and evaluation strategies for LLMs, including safety and bias mitigation.',
    ],
  },
  'product-design-growth': {
    name: 'Product, Design & Growth',
    intro: "You're here because building features isn't enough. You need to build the *right* features, validate them with users, and drive meaningful business outcomes. You need product and design leaders who are data-fluent, user-obsessed, and strategically aligned.",
    roles: ['Product Lead/Group PM', 'Design Lead', 'UX Research', 'Growth PM', 'Experimentation Eng'],
    skills: ['Discovery', 'roadmap', 'analytics fluency', 'experiment design', 'funnel diagnostics'],
    tech: [
        { name: 'Jira/Linear', slug: 'jira' }, 
        { name: 'Notion/Confluence', slug: 'notion' }, 
        { name: 'Figma/Sketch', slug: 'figma' }, 
        { name: 'GA4/Amplitude/Mixpanel/Heap', slug: 'amplitude' }, 
        { name: 'Optimizely/GrowthBook/LaunchDarkly/VWO', slug: 'launchdarkly' }
    ],
     evaluation: [
        'Case-study based evaluation of product sense, including market analysis, user segmentation, and prioritization.',
        'Portfolio review and practical exercises for designers focused on UX principles, interaction design, and system thinking.',
        'For growth roles, a deep dive into data analysis, experiment design (A/B testing), and funnel optimization techniques.',
        'Assessment of communication and stakeholder management skills through simulated roadmap presentations and difficult trade-off scenarios.',
    ],
  },
  'qa-quality-engineering': {
    name: 'QA / Quality Engineering',
    intro: "You're here because shipping fast doesn't matter if you're also shipping bugs. You need engineers who think critically about quality and build automated guardrails that enable velocity, not hinder it. A manual tester isn't enough; you need a true Quality Engineer.",
    roles: ['QE Lead', 'SDET', 'Performance Eng', 'QA Automation Engineer', 'QA Manual Tester'],
    skills: ['Shift-left testing', 'e2e + contract tests', 'perf/load', 'chaos', 'accessibility', 'test planning', 'usability testing'],
    tech: [
        { name: 'Playwright/Cypress/Selenium', slug: 'playwright' }, 
        { name: 'Jest/Vitest/JUnit/PyTest/TestNG', slug: 'jest' }, 
        { name: 'k6/Locust/JMeter', slug: 'k6' }, 
        { name: 'Pact (contract)', slug: 'pact' }, 
        { name: 'OWASP ZAP', slug: 'owasp-zap' }, 
        { name: 'BrowserStack/Sauce Labs', slug: 'browserstack' }, 
        { name: 'Gremlin/Litmus', slug: 'gremlin' }
    ],
     evaluation: [
        'Strong emphasis on test automation strategy, including the testing pyramid (unit, integration, e2e).',
        'Practical coding exercises for writing clean, maintainable, and reliable automated tests (e.g., using Playwright or Cypress).',
        'Scenario-based questions on performance and load testing, including how to design tests and interpret results.',
        'Evaluation of non-functional testing knowledge, including security, accessibility, and chaos engineering principles.',
    ],
  },
  'it-enterprise-ops': {
    name: 'IT / Enterprise Ops',
    intro: "You're here because employee productivity and corporate security depend on a well-run IT infrastructure. You need engineers who can manage identities, secure endpoints, and automate internal processes at scale.",
    roles: ['IT Manager', 'MDM Engineer', 'ITSM Lead', 'Identity Engineer'],
    skills: ['Endpoint management', 'identity and access management (IAM)', 'IT service management (ITSM)', 'email security', 'data loss prevention (DLP)'],
    tech: [
        { name: 'Google Workspace/Microsoft 365', slug: 'google-workspace' }, 
        { name: 'Intune/Jamf/Kandji', slug: 'jamf' }, 
        { name: 'ServiceNow/JSM', slug: 'jira-service-management' }, 
        { name: 'Okta/JumpCloud', slug: 'okta' }, 
        { name: 'CrowdStrike/SentinelOne', slug: 'crowdstrike' }, 
        { name: 'Proofpoint', slug: 'proofpoint' }, 
        { name: 'EDR/XDR', slug: 'edr' }
    ],
     evaluation: [
        'Evaluation of experience with enterprise-scale device management and security policy enforcement.',
        'Scenario-based questions on managing identity providers and SSO integrations.',
        'Assessment of knowledge of ITSM principles and experience with platforms like ServiceNow or Jira Service Management.',
    ],
  },
  'finops-biztech': {
    name: 'FinOps / BizTech',
    intro: "You're here because cloud spend is a major line item and your go-to-market systems are critical infrastructure. You need engineers who can analyze and optimize cloud costs and connect your CRM, billing, and product data to drive revenue operations.",
    roles: ['FinOps Lead', 'Biz Systems Eng (RevOps)', 'Data FinOps', 'Salesforce Developer'],
    skills: ['Cloud cost optimization', 'RevOps engineering', 'Salesforce/HubSpot automation', 'Reverse ETL', 'Usage-based metering'],
    tech: [
      { name: 'CloudZero/CloudHealth/Infracost/Spot', slug: 'cloudzero' }, 
      { name: 'AWS Cost Explorer', slug: 'aws-cost-explorer' }, 
      { name: 'Salesforce (Apex, LWC)', slug: 'salesforce' }, 
      { name: 'HubSpot', slug: 'hubspot' }, 
      { name: 'Zuora/Chargebee', slug: 'zuora' }, 
      { name: 'Hightouch/Census', slug: 'hightouch' }, 
      { name: 'Stripe Billing', slug: 'stripe' }
    ],
    evaluation: [
        'Scenario-based questions on diagnosing and optimizing cloud spend from real-world AWS/GCP billing data.',
        'For BizTech roles, practical exercises in designing automations and data flows within Salesforce or HubSpot.',
        'Assessment of data skills, particularly SQL and the ability to model data for financial and revenue reporting.',
        'Evaluation of understanding of SaaS metrics and how to implement systems for tracking them (e.g., ARR, NRR, LTV).',
    ],
  }
};

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
      { name: 'Go', slug: 'go' },
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

export async function getAllTechSlugs(): Promise<string[]> {
    return Object.keys(allTech);
}
