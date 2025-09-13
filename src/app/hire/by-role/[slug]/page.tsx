
import Link from 'next/link';
import { Tooltip } from '@/components/Tooltip';
import type { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';


const roleData: { [key: string]: { name: string; intro: string; roles: string[]; skills: string[]; tech: (string | React.ReactNode)[]; evaluation: string[] } } = {
  'platform-infra-sre': {
    name: 'Platform / Infra / SRE',
    intro: "You're here because system downtime, slow deployments, and runaway cloud bills are direct threats to your business. You need engineers who build resilient, observable, and cost-efficient platforms. That's a high-stakes role, and a mis-hire is not an option.",
    roles: ['Head of Platform', 'SRE/DevOps', 'Cloud Architect', 'Infra Sec Engineer', 'FinOps Lead'],
    skills: ['Cloud architecture (resilience, multi-AZ/region)', 'IaC', 'CI/CD', 'observability', 'cost control', 'incident mgmt (SLO/SLI/error budgets)'],
    tech: [
        'AWS/GCP/Azure', 
        'Docker',
        'Kubernetes (GKE/EKS/AKS)', 
        <Tooltip text="Infrastructure as Code: Managing infrastructure through code instead of manual processes (e.g., Terraform).">Terraform/Pulumi</Tooltip>,
        'GitHub Actions/GitLab CI/Argo CD', 
        <Tooltip text="Service mesh technologies that provide traffic management, security, and observability for microservices.">Istio/Linkerd</Tooltip>, 
        'Prometheus/Grafana', 
        <Tooltip text="An observability framework for instrumenting, generating, collecting, and exporting telemetry data.">OpenTelemetry</Tooltip>,
        'ELK/EFK/Loki/Jaeger',
        <Tooltip text="A tool for securely managing secrets and sensitive data.">Vault</Tooltip>,
        'External Secrets',
        'LaunchDarkly/OpenFeature'
    ],
    evaluation: [
        'Emphasis on systems thinking and understanding of distributed systems principles (CAP theorem, etc.).',
        'Practical evaluation of IaC skills with a focus on modularity, reusability, and state management.',
        'Scenario-based questions on incident response, debugging complex failures, and establishing SLOs/SLIs.',
        'Assessment of cost-consciousness and ability to analyze and optimize cloud spend.',
    ],
  },
   'security-grc': {
    name: 'Security & GRC',
    intro: "You're here because a single security breach can erase trust, revenue, and brand equity overnight. You need engineers who embed security into the SDLC, not bolt it on as an afterthought. Hiring someone who only knows checklists is a critical risk.",
    roles: ['CISO/Head of Security', 'AppSec', 'CloudSec', 'GRC Lead', 'IAM Engineer', 'Privacy Lead (DPO)'],
    skills: ['Threat modeling', 'SDLC security', 'secrets mgmt', 'identity', 'data protection', 'compliance ops'],
    tech: [
        'Okta/Auth0/Keycloak', 
        'OIDC/SAML', 
        <Tooltip text="HashiCorp Vault is a tool for securely managing secrets, credentials, and encryption keys.">HashiCorp Vault</Tooltip>, 
        'SOPS',
        <Tooltip text="Static & Dynamic Application Security Testing: Tools that scan code for vulnerabilities.">SAST/DAST (CodeQL, SonarQube, Snyk, OWASP ZAP, Trivy)</Tooltip>, 
        'CrowdStrike/Defender', 
        <Tooltip text="Governance, Risk, and Compliance: Frameworks like SOC 2, ISO 27001, HIPAA, and PCI DSS.">SOC 2, ISO 27001, HIPAA, PCI, GDPR, CCPA</Tooltip>
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
    tech: ['Node.js (NestJS/Fastify)', 'Python (FastAPI/Django)', 'Java (Spring Boot)', 'Go (Gin/Fiber)', '.NET', 'Ruby on Rails', 'PHP (Laravel/Symphony)', 'PostgreSQL', 'MySQL', 'SQL Server', 'Redis', 'Memcached', 'Kafka/RabbitMQ/NATS', <Tooltip text="A modern ORM for Node.js and TypeScript that makes database access easy and type-safe.">Prisma</Tooltip>, 'TypeORM', 'SQLAlchemy', 'Hibernate', 'EF Core'],
    evaluation: [
        'Focus on data modeling and database design, including normalization and indexing strategies.',
        'Practical API design exercises, evaluating choices between REST, gRPC, and GraphQL for different use cases.',
        'Assessment of asynchronous processing and event-driven architecture patterns.',
        'Emphasis on writing clean, testable code with robust unit and integration test coverage.',
    ],
  },
  'frontend-web': {
    name: 'Frontend / Web',
    intro: "You're here because your frontend is your product's face to the world. A slow, buggy, or inaccessible UI doesn't just frustrate users—it costs you revenue. You need engineers who are obsessed with performance, user experience, and code quality.",
    roles: ['Staff Frontend', 'Web Platform Eng', 'Design Systems Eng'],
    skills: ['Performance/CWV', 'accessibility', 'SSR/CSR trade-offs', 'state/query caching', 'e2e testing'],
    tech: ['React', 'TypeScript', 'Next.js', 'Vite', 'Angular', 'Vue.js', <Tooltip text="A powerful data-fetching and caching library for React that simplifies managing server state.">TanStack Query</Tooltip>, 'Redux Toolkit/Zustand', 'GraphQL (Apollo/Relay)', 'Tailwind CSS/shadcn/MUI', 'Storybook', 'Testing Library', 'Playwright/Cypress'],
     evaluation: [
        'Deep assessment of React and modern JavaScript fundamentals, including hooks and state management patterns.',
        'Practical exercises focused on performance optimization (memoization, virtualization, code splitting).',
        'Evaluation of component design and API choices, with an emphasis on reusability and accessibility (ARIA).',
        'Scenario-based questions on data fetching strategies, caching (client and server), and managing server state.',
    ],
  },
   'mobile-cross-platform': {
    name: 'Mobile / Cross-Platform',
    intro: "You're here because a native or cross-platform mobile experience is critical to your product strategy, and the complexities of device fragmentation, offline sync, and store releases are slowing you down.",
    roles: ['Mobile Lead', 'RN/Flutter Eng', 'iOS Engineer', 'Android Engineer', 'SDK Engineer'],
    skills: ['Native performance', 'offline-first architecture', 'OTA updates', 'crash reporting', 'mobile testing'],
    tech: ['React Native', 'Flutter', 'Swift (SwiftUI/UIKit)', 'Kotlin (Jetpack Compose)', 'Objective-C', 'Java', <Tooltip text="Over-the-Air updates allow you to deploy mobile app updates directly to users' devices.">OTA updates (CodePush)</Tooltip>, 'Crashlytics/Sentry', 'AppCenter', 'Fastlane', 'Detox/Appium/XCUITest'],
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
    tech: ['Snowflake/BigQuery/Redshift/ClickHouse', <Tooltip text="Data Build Tool: The industry standard for transforming data in the warehouse (ELT).">dbt</Tooltip>, 'Airflow/Prefect/Dagster', 'Fivetran/Airbyte/Stitch', 'Kafka/PubSub/Kinesis', 'Spark/Flink', 'Looker/Tableau/Power BI/Metabase/Superset', <Tooltip text="Data discovery and metadata platforms that create a unified catalog of your data assets.">DataHub/Amundsen/Apache Atlas</Tooltip>, 'Great Expectations/Soda'],
     evaluation: [
        'Strong focus on SQL and data modeling principles (Kimball/Inmon, dimensional modeling).',
        'Practical evaluation of dbt skills, including model design, testing, and documentation.',
        'Scenario-based questions on data pipeline architecture, choice of batch vs. streaming, and orchestration best practices.',
        'Assessment of data governance and data quality concepts, including lineage and anomaly detection.',
    ],
  },
  'ml-ai-llm-ops': {
    name: 'ML/AI & LLM Ops',
    intro: "You're here because integrating AI is no longer optional, but turning a Jupyter notebook into a production-ready, scalable service is a massive challenge. You need engineers who understand the full lifecycle of ML/LLM systems, from data to deployment to evaluation.",
    roles: ['ML Lead', 'Applied Scientist', 'MLOps/LLMOps', 'Prompt/RAG Engineer', 'Evaluation Engineer'],
    skills: ['Feature engineering', 'offline/online eval', 'retrieval design', 'safety/guardrails', 'cost/perf tuning'],
    tech: ['Python', 'PyTorch/TensorFlow/JAX', 'scikit-learn', 'Transformers (HF)', 'OpenAI/Anthropic/Cohere SDKs', 'vLLM/TensorRT-LLM', 'Ray Serve', <Tooltip text="Retrieval-Augmented Generation: Frameworks for building applications on top of LLMs using external data.">LangChain/LlamaIndex</Tooltip>, <Tooltip text="Vector databases used for efficient similarity search in RAG applications.">pgvector/Pinecone/Weaviate</Tooltip>, 'MLflow/W&B', 'Kubeflow', <Tooltip text="Frameworks for evaluating the quality and performance of LLM and RAG applications.">Ragas/DeepEval/Arize</Tooltip>, 'DVC', 'Feast/Tecton'],
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
    tech: ['Jira/Linear', 'Notion/Confluence', 'Figma/Sketch', 'GA4/Amplitude/Mixpanel/Heap', <Tooltip text="Platforms for A/B testing and feature flagging to enable data-driven product development.">Optimizely/GrowthBook/LaunchDarkly/VWO</Tooltip>],
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
    tech: ['Playwright/Cypress/Selenium', 'Jest/Vitest/JUnit/PyTest/TestNG', 'k6/Locust/JMeter', <Tooltip text="A tool for contract testing, ensuring that services (e.g., a frontend and backend) can communicate with each other.">Pact (contract)</Tooltip>, 'OWASP ZAP', 'BrowserStack/Sauce Labs', <Tooltip text="Tools for chaos engineering, the practice of intentionally injecting failure into systems to test their resilience.">Gremlin/Litmus</Tooltip>],
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
    tech: ['Google Workspace/Microsoft 365', <Tooltip text="Mobile Device Management (MDM) tools for managing and securing endpoints like laptops.">Intune/Jamf/Kandji</Tooltip>, 'ServiceNow/JSM', 'Okta/JumpCloud', 'CrowdStrike/SentinelOne', 'Proofpoint', 'EDR/XDR'],
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
    tech: [<Tooltip text="Tools for analyzing, monitoring, and optimizing cloud expenditure.">CloudZero/CloudHealth/Infracost/Spot</Tooltip>, 'AWS Cost Explorer', 'Salesforce (Apex, LWC)', 'HubSpot', 'Zuora/Chargebee', <Tooltip text="Reverse ETL tools that sync data from a data warehouse back into business applications like CRMs.">Hightouch/Census</Tooltip>, 'Stripe Billing'],
    evaluation: [
        'Scenario-based questions on diagnosing and optimizing cloud spend from real-world AWS/GCP billing data.',
        'For BizTech roles, practical exercises in designing automations and data flows within Salesforce or HubSpot.',
        'Assessment of data skills, particularly SQL and the ability to model data for financial and revenue reporting.',
        'Evaluation of understanding of SaaS metrics and how to implement systems for tracking them (e.g., ARR, NRR, LTV).',
    ],
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const roleName = roleData[params.slug]?.name || 'Engineer';
  return {
    title: `Hire Nearshore ${roleName} | TeamStation AI`,
    description: `Hire elite, pre-vetted LATAM ${roleName} engineers. Our scientific evaluation process de-risks hiring for critical roles in your tech stack.`,
  };
}


export default function RoleCategoryPage({ params }: { params: { slug: string } }) {
  const category = roleData[params.slug];
  
  if (!category) {
    return (
       <main className="container max-w-5xl py-12">
        <p>Category not found.</p>
       </main>
    )
  }

  const { name, intro, roles, skills, tech, evaluation } = category;

  const renderTech = (techItem: string | React.ReactNode, index: number) => {
    if (typeof techItem === 'string') {
      return (
        <span key={index} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          {techItem}
        </span>
      );
    }
    return <div key={index}>{techItem}</div>;
  };

  return (
    <main className="container max-w-5xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/hire" className="hover:text-foreground">Hire</Link> / <Link href="/hire/by-role" className="hover:text-foreground">By Role</Link> / <span>{name}</span>
      </div>
      <header className="my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">{name}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{intro}</p>
      </header>
      
      <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
            <h2 className="text-2xl font-bold border-b pb-2">Key Roles</h2>
            <ul className="mt-4 space-y-2 list-none p-0">
                {roles.map(role => <li key={role} className='text-muted-foreground'>{role}</li>)}
            </ul>
        </div>
        <div className="md:col-span-2">
            <h2 className="text-2xl font-bold border-b pb-2">Core Skills & Technologies</h2>
            <div className='mt-4'>
                <h3 className='font-semibold text-foreground'>Skills</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {skills.map(skill => {
                         if (skill === 'IaC') {
                            return <Tooltip key={skill} text="Infrastructure as Code: Managing infrastructure through code instead of manual processes.">
                                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground cursor-pointer">{skill}</span>
                            </Tooltip>;
                        }
                         if (skill.includes('SLO/SLI')) {
                            return <Tooltip key={skill} text="Service Level Objectives/Indicators: A framework for defining and measuring reliability.">
                                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground cursor-pointer">{skill}</span>
                            </Tooltip>;
                        }
                         if (skill === 'ELT') {
                            return <Tooltip key={skill} text="Extract, Load, Transform: A data integration process where data is loaded into the target system before transformation.">
                                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground cursor-pointer">{skill}</span>
                            </Tooltip>;
                        }
                        if (skill.includes('retrieval')) {
                            return <Tooltip key={skill} text="In RAG systems, this is the process of designing how to best find and retrieve relevant documents from a vector database.">
                                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground cursor-pointer">{skill}</span>
                            </Tooltip>;
                        }

                        return <span key={skill} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{skill}</span>
                    })}
                </div>
            </div>
             <div className='mt-6'>
                <h3 className='font-semibold text-foreground'>Technologies & Libraries</h3>
                <div className="flex flex-wrap gap-2 mt-2 items-center">
                    {tech.map((t, i) => {
                         if (typeof t === 'string') {
                            return <span key={i} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{t}</span>
                         }
                         return t;
                    })}
                </div>
            </div>
        </div>
      </div>


      <div className="my-16 rounded-lg border bg-card p-8">
        <h2 className="text-center text-3xl font-bold">Our Evaluation Approach for {name}</h2>
        <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
             For roles in <strong>{name}</strong>, we understand that "good enough" is a recipe for disaster. Our <Link href="/research/axiom-cortex-scientific-report" className='text-primary hover:underline'>Axiom Cortex™ evaluation</Link> goes beyond simple coding tests to de-risk your hiring decision.
        </p>
         <ul className="space-y-4 mt-8 max-w-2xl mx-auto">
            {evaluation.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span className='text-muted-foreground'>{point}</span>
                </li>
            ))}
        </ul>
         <p className="mt-6 max-w-3xl mx-auto text-center text-muted-foreground">
           This means you get a candidate who is not only technically proficient but is also a proven problem-solver, a strong collaborator, and ready to contribute from day one. You're not just hiring a resume; you're hiring a pre-validated, high-impact team member whose "mental shape" has been mapped to the specific demands of the role.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to Hire Elite {name} Talent?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
          Stop sifting through unqualified resumes. Let us provide you with a shortlist of 2-3 elite, pre-vetted candidates ready to make an impact.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a No-Obligation Strategy Call</Link>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(roleData).map(slug => ({ slug }));
}

    