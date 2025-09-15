
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your app slow because of endless re-renders?",
            problem: "Many 'senior' React developers don't profile their code, leading to slow, janky UIs that frustrate users and kill conversion rates.",
            solution: "Our engineers are vetted for their deep understanding of the React render cycle. They master performance tools to hunt down bottlenecks and use techniques like memoization and virtualization to ensure a buttery-smooth experience.",
            kpi: "Expertise in React Profiler & why-did-you-render"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your state management a spaghetti of props and contexts?",
            problem: "Legacy patterns and a poor grasp of server-side state lead to complex, bug-prone applications that are a nightmare to maintain and scale.",
            solution: "We select for expertise in modern state management, separating client state (e.g., Zustand) from server cache (e.g., TanStack Query) for a simpler, more resilient architecture.",
            kpi: "Proven ability to architect scalable state"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your component library just a folder of inconsistent parts?",
            problem: "Without strong API design and accessibility standards, your component library becomes a source of tech debt, not a force multiplier.",
            solution: "We hire for strong component API design, accessibility (ARIA), and experience with tools like Storybook. You get a robust, reusable design system, not just a UI that 'looks right.'",
            kpi: "Focus on reusable & accessible components"
        }
    ],
    evaluation: ['Advanced hooks', 'State management (Zustand/Redux)', 'Component API design', 'Performance profiling'] 
  },
  'node': { 
    name: 'Node.js', 
    category: 'APIs & Backend Services', 
    categorySlug: 'backend-services', 
    intro: "You're not looking for someone who just wrote a few Express routes. You're here because you need an engineer who understands how to build high-throughput, non-blocking APIs that can handle real-world scale without falling over. You need someone who has tamed the event loop, not just heard of it.",
    pains: [], 
    evaluation: ['Deep event loop knowledge', 'Async/await & Promise patterns', 'Experience with NestJS/Fastify', 'API security best practices (rate limiting, input validation)', 'Performance tuning & memory profiling'] 
  },
  'python': { 
    name: 'Python', 
    category: 'APIs & Backend Services', 
    categorySlug: 'backend-services', 
    intro: "You need more than a data scientist who can write a script. You need a software engineer who can build robust, production-grade Python services. You're here because you need someone who understands the difference between a notebook and a scalable API—someone who can build systems that are maintainable, testable, and ready for prime time.",
    pains: [], 
    evaluation: ['WSGI/ASGI server experience', 'ORM mastery (SQLAlchemy/Django ORM)', 'Experience with FastAPI/Django', 'Concurrency models (asyncio, threading, multiprocessing)', 'Packaging and dependency management'] 
  },
  'java': { 
    name: 'Java', 
    category: 'APIs & Backend Services', 
    categorySlug: 'backend-services', 
    intro: "Finding a true Java expert in a sea of enterprise developers can feel impossible. You're here because you need someone who not only knows the syntax but who thinks in terms of the JVM. You need an engineer who understands how to build resilient, high-performance, and scalable systems using modern Java frameworks, not just legacy J2EE.",
    pains: [], 
    evaluation: ['Modern Spring Boot expertise (actuators, auto-configuration)', 'JVM tuning fundamentals', 'Hibernate/JPA and N+1 problem solving', 'Microservice patterns (service discovery, circuit breakers)', 'Concurrency and multithreading concepts'] 
  },
  'go': { 
    name: 'Go', 
    category: 'APIs & Backend Services', 
    categorySlug: 'backend-services', 
    intro: "You're not just hiring for a language; you're hiring for a philosophy. You need a Go engineer who values simplicity, performance, and concurrency. You're here because you need systems that are fast, reliable, and easy to maintain, and you know that requires a developer who has truly mastered goroutines, channels, and Go's standard library.",
    pains: [], 
    evaluation: ['Mastery of goroutines and channels', 'Standard library proficiency', 'Experience with Gin/Fiber for web services', 'Clean interface design and composition', 'Error handling best practices'] 
  },
  'net': { 
    name: '.NET', 
    category: 'APIs & Backend Services', 
    categorySlug: 'backend-services', 
    intro: "You need to move beyond legacy .NET Framework projects. You're looking for an expert in modern, cross-platform .NET who can build high-performance, cloud-native applications. You need someone who lives in ASP.NET Core, understands EF Core deeply, and can leverage the full power of the Azure ecosystem.",
    pains: [], 
    evaluation: ['Modern ASP.NET Core patterns (middleware, DI)', 'Entity Framework Core mastery', 'Advanced LINQ proficiency', 'Azure service integrations (Functions, App Service)', 'Performance tuning and diagnostics'] 
  },
  'ruby': {
    name: 'Ruby on Rails',
    category: 'APIs & Backend Services',
    categorySlug: 'backend-services',
    intro: "You're not just maintaining a Rails app; you're trying to scale one. You need an engineer who appreciates the 'Rails Way' but also knows when to deviate for performance. You're here because you need an expert who can optimize ActiveRecord, manage background jobs effectively, and ensure your mature codebase remains a competitive advantage, not a liability.",
    pains: [],
    evaluation: ['Deep ActiveRecord knowledge (scoping, includes/joins)', 'Background job processing (Sidekiq, Resque)', 'Performance tuning (database indexing, caching)', 'Modern Rails practices (Hotwire, Stimulus)', 'Testing with RSpec and Capybara']
  },
  'php': {
    name: 'PHP (Laravel/Symphony)',
    category: 'APIs & Backend Services',
    categorySlug: 'backend-services',
    intro: "You're not running a simple WordPress site. You're running a sophisticated application on a modern PHP framework like Laravel or Symfony, and you need an engineer who respects the craft. You're here because you need an expert who can leverage PHP's modern features, build robust systems with its powerful ecosystem (Composer, PHPUnit), and write clean, maintainable, and performant code.",
    pains: [],
    evaluation: ['Modern PHP features (PHP 8+)', 'Deep framework knowledge (Laravel or Symfony)', 'ORM proficiency (Eloquent, Doctrine)', 'Composer for dependency management', 'Testing with PHPUnit/Pest']
  },
  'aws': {
    name: 'AWS',
    category: 'Platform / Infra / SRE',
    categorySlug: 'platform-infra-sre',
    intro: "Your AWS bill is climbing, but your reliability isn't. You need an engineer who is a true AWS expert, not just someone who has clicked through the console. You need someone who can architect for resilience, automate with the CDK or Terraform, and optimize for cost.",
    pains: [],
    evaluation: ['Core services mastery (EC2, S3, IAM, VPC)', 'Serverless architecture (Lambda, API Gateway, DynamoDB)', 'Container orchestration (EKS, ECS)', 'Infrastructure as Code (CDK, Terraform, CloudFormation)', 'Cost management and optimization']
  },
  'kubernetes': { 
    name: 'Kubernetes', 
    category: 'Pipelines & Orchestration', 
    categorySlug: 'platform-infra-sre', 
    intro: "You've adopted Kubernetes, but now you're drowning in YAML and complexity. You're here because you need an engineer who is a true K8s expert, not just someone who has used it. You need someone who can build custom controllers, design a secure networking strategy, and manage resources effectively to run a stable, scalable, and cost-efficient platform.",
    pains: [], 
    evaluation: ['Resource management (requests/limits) and scheduling', 'Custom controllers/operators pattern', 'Networking (CNI, Ingress, service-to-service)', 'Service mesh integration (Istio/Linkerd)', 'Security (PodSecurityPolicies, RBAC, network policies)'] 
  },
  'docker': { 
    name: 'Docker', 
    category: 'Pipelines & Orchestration', 
    categorySlug: 'platform-infra-sre', 
    intro: "Your 'it works on my machine' problems are grinding development to a halt, and your container images are bloated and insecure. You need an engineer who has mastered Docker, someone who can create optimized, multi-stage builds, implement security scanning, and streamline your local development environment with Compose. You're here to build a solid foundation for your containerized applications.",
    pains: [], 
    evaluation: ['Multi-stage builds for optimization', 'Image size reduction techniques', 'Image security scanning and vulnerability management', 'Docker Compose for local development environments', 'Understanding of container networking and storage'] 
  },
  'terraform': { 
    name: 'Terraform/Pulumi', 
    category: 'Observability & SRE', 
    categorySlug: 'platform-infra-sre', 
    intro: "Your infrastructure is a collection of manually-created resources and shell scripts, making it impossible to manage or replicate. You need an Infrastructure as Code (IaC) expert. You're here to find an engineer who has mastered Terraform or Pulumi to build modular, reusable, and testable infrastructure code that makes your platform reliable and scalable.",
    pains: [], 
    evaluation: ['Modular and reusable code (modules, components)', 'State management and remote backends', 'Testing strategies for infrastructure (e.g., Terratest)', 'Drift detection and remediation strategies', 'CI/CD integration for automated infrastructure deployment'] 
  },
  'github-actions': {
    name: 'GitHub Actions',
    category: 'Platform / Infra / SRE',
    categorySlug: 'platform-infra-sre',
    intro: "Your CI/CD pipeline is slow, flaky, and a black box to most of your developers. You need an expert who can harness the full power of GitHub Actions to create fast, reliable, and secure build, test, and deployment workflows.",
    pains: [],
    evaluation: ['Reusable workflows and composite actions', 'Secrets management and OIDC integration', 'Self-hosted vs. GitHub-hosted runners', 'Caching strategies for performance', 'Matrix builds for multi-platform testing']
  },
  'istio': { 
    name: 'Istio/Linkerd', 
    category: 'Observability & SRE', 
    categorySlug: 'platform-infra-sre', 
    intro: "Your microservices are a black box, and you have no control over traffic or security between them. You need a service mesh expert. You're here to find an engineer who can implement Istio or Linkerd to provide traffic management (canary releases, retries), mutual TLS security, and deep observability without changing application code.",
    pains: [], 
    evaluation: ['Traffic management (e.g., canary deployments, retries)', 'Mutual TLS (mTLS) and security policy enforcement', 'Telemetry and observability features', 'Performance overhead analysis', 'Debugging and troubleshooting the data plane and control plane'] 
  },
  'prometheus': { 
    name: 'Prometheus', 
    category: 'Observability & SRE', 
    categorySlug: 'platform-infra-sre', 
    intro: "Your systems are failing, but your monitoring isn't telling you until it's too late. You need an engineer who is a master of Prometheus, someone who can write powerful PromQL queries, design effective alerting rules, and build a scalable, high-availability monitoring setup. You're here to build a proactive observability platform, not a reactive one.",
    pains: [], 
    evaluation: ['Advanced PromQL proficiency (aggregations, functions, joins)', 'Instrumentation best practices (application & infrastructure)', 'Alerting rule design and Alertmanager configuration', 'High-availability and long-term storage solutions (Thanos, Cortex)', 'Custom exporter development'] 
  },
  'opentelemetry': { 
    name: 'OpenTelemetry', 
    category: 'Observability & SRE', 
    categorySlug: 'platform-infra-sre', 
    intro: "You have metrics, logs, and traces, but they're all in separate silos. You're here because you need a unified observability strategy. You need an engineer who is an expert in OpenTelemetry, someone who can implement instrumentation, configure the collector, and manage context propagation to provide a complete picture of your system's behavior.",
    pains: [], 
    evaluation: ['Auto vs. manual instrumentation trade-offs', 'Collector configuration (pipelines, processors, exporters)', 'Sampling strategies for cost and performance', 'Context propagation across services', 'Vendor-agnostic observability principles'] 
  },
  'jaeger': { 
    name: 'Jaeger/Loki', 
    category: 'Observability & SRE', 
    categorySlug: 'platform-infra-sre', 
    intro: "When a request fails, you're stuck searching through terabytes of unstructured logs. You need an engineer who can use tools like Jaeger for distributed tracing and Loki for log aggregation to quickly diagnose and solve problems in a complex microservices environment. You're here to find an expert who can turn your logs and traces into a powerful debugging tool.",
    pains: [], 
    evaluation: ['Analyzing distributed traces to find bottlenecks', 'Log correlation with traces and metrics', 'Performance bottleneck identification using traces', 'High-volume data ingestion and storage strategies', 'Querying and filtering in Loki (LogQL)'] 
  },
  'vault': { 
    name: 'Vault', 
    category: 'Security & GRC', 
    categorySlug: 'security-grc', 
    intro: "Your secrets are scattered in environment variables, config files, and code. You're here because you need to centralize and secure your secrets management. You need an engineer who is an expert in HashiCorp Vault, someone who can implement dynamic secrets, manage authentication methods, and write fine-grained policies to enforce least-privilege access to all your sensitive data.",
    pains: [], 
    evaluation: ['Secrets engines usage (KV, Database, PKI)', 'Dynamic secrets for ephemeral credentials', 'Auth methods integration (Kubernetes, AWS, OIDC)', 'Policy and ACL management for least privilege', 'High-availability and operational best practices'] 
  },
  'external-secrets': {
    name: 'External Secrets',
    category: 'Security & GRC',
    categorySlug: 'platform-infra-sre',
    intro: "Your Kubernetes secrets are checked into Git or manually managed, creating security risks and operational headaches. You need an expert in External Secrets Operator (ESO) to securely sync secrets from external stores like AWS Secrets Manager or HashiCorp Vault directly into your cluster.",
    pains: [],
    evaluation: ['Integration with various secret providers (AWS, Vault, GCP)', 'SecretStore and ExternalSecret configuration', 'Templating and data transformation', 'Refresh intervals and caching strategies', 'Security best practices and RBAC for ESO']
  },
  'launchdarkly': {
    name: 'LaunchDarkly/OpenFeature',
    category: 'Platform / Infra / SRE',
    categorySlug: 'platform-infra-sre',
    intro: "Your releases are high-stakes, all-or-nothing events. You need an engineer who can implement feature flagging to de-risk deployments, enable progressive rollouts, and empower product teams to run experiments. You need an expert in a platform like LaunchDarkly and the OpenFeature standard.",
    pains: [],
    evaluation: ['SDK integration (client-side and server-side)', 'Targeting rules and progressive rollouts', 'Experimentation and A/B testing setup', 'The OpenFeature standard and vendor neutrality', 'Performance and reliability considerations']
  },
  'okta': { 
    name: 'Okta/Auth0', 
    category: 'Security & GRC', 
    categorySlug: 'security-grc', 
    intro: "You're building your own authentication system, and it's becoming a complex and risky distraction from your core product. You need an identity expert. You're here to find an engineer who can leverage a platform like Okta or Auth0 to implement secure, scalable, and feature-rich identity management, including SSO, MFA, and user provisioning.",
    pains: [], 
    evaluation: ['OIDC/OAuth2 flow implementation and best practices', 'User provisioning (SCIM) and directory integration', 'MFA policy enforcement and adaptive MFA', 'Custom actions/rules for extending functionality', 'API access management'] 
  },
  'oidc': {
    name: 'OIDC/SAML',
    category: 'Security & GRC',
    categorySlug: 'security-grc',
    intro: "Your applications have inconsistent, insecure login mechanisms. You need an expert in modern identity protocols like OpenID Connect (OIDC) and SAML to build a centralized, secure authentication and federation strategy.",
    pains: [],
    evaluation: ['Deep understanding of OAuth2 flows (Auth Code, PKCE)', 'OIDC token types (ID Token, Access Token) and claims', 'SAML assertions and IdP/SP-initiated flows', 'Security best practices (state parameter, nonce)', 'Debugging and troubleshooting federation issues']
  },
  'sops': {
    name: 'SOPS',
    category: 'Security & GRC',
    categorySlug: 'security-grc',
    intro: "You want to commit encrypted secrets to Git, but managing keys is a nightmare. You need an expert in SOPS (Secrets OPerationS) who can set up a secure workflow using KMS, GPG, or age to encrypt secrets at rest while maintaining a clean Git history.",
    pains: [],
    evaluation: ['Integration with KMS providers (AWS, GCP)', 'Key management and rotation strategies', 'Git integration and pre-commit hooks', 'CI/CD decryption workflows', 'User access control with GPG or age']
  },
  'codeql': { 
    name: 'CodeQL/Snyk', 
    category: 'Security & GRC', 
    categorySlug: 'security-grc', 
    intro: "Your security vulnerabilities are being discovered in production, not in the pull request. You're here because you need to 'shift left' and integrate security into your CI/CD pipeline. You need an AppSec engineer who can implement SAST/DAST tools like CodeQL, SonarQube, or Snyk to find and fix vulnerabilities before they ever reach production.",
    pains: [], 
    evaluation: ['SAST/DAST/SCA integration into CI/CD pipelines', 'False positive triage and tuning', 'Custom rule creation for specific vulnerabilities', 'Dependency scanning and license compliance', 'Reporting and metrics for security posture'] 
  },
  'crowdstrike': {
    name: 'CrowdStrike/Defender',
    category: 'Security & GRC',
    categorySlug: 'security-grc',
    intro: "You need to protect your endpoints from modern threats, but traditional antivirus isn't enough. You need an expert in modern Endpoint Detection and Response (EDR) platforms like CrowdStrike Falcon or Microsoft Defender for Endpoint to provide real-time visibility and threat hunting capabilities.",
    pains: [],
    evaluation: ['Policy management and tuning', 'Threat hunting and incident investigation', 'API integration for automation and SOAR', 'Understanding of MITRE ATT&CK framework', 'Deployment and sensor management']
  },
  'soc': { 
    name: 'SOC 2', 
    category: 'Security & GRC', 
    categorySlug: 'security-grc', 
    intro: "You're trying to sell to enterprise customers, but you can't get past their security review because you don't have a SOC 2 report. You're here because you need a GRC or security engineer who understands how to translate SOC 2 controls into technical implementations, automate evidence collection, and manage the audit process. You need to build a foundation of trust with your customers.",
    pains: [], 
    evaluation: ['Mapping Trust Service Criteria to technical controls', 'Evidence collection automation', 'Experience with the audit process (readiness, audit)', 'Policy and procedure documentation', 'Working with auditors and internal stakeholders'] 
  },
  'nextjs': { 
    name: 'Next.js', 
    category: 'Frontend & UI/UX', 
    categorySlug: 'frontend-web', 
    intro: "You know that Next.js is more than just a React framework; it's a full-stack toolkit with a complex set of trade-offs. You need an engineer who understands the difference between Server Components and Client Components, who can strategically choose data fetching patterns, and who knows how to optimize caching to build truly high-performance web applications.",
    pains: [], 
    evaluation: ['App vs. Pages Router trade-offs', 'Server Components vs. Client Components', 'Data fetching patterns (server-side, static, incremental)', 'Caching and revalidation strategies (ISR, On-demand)', 'Performance optimization and bundle analysis'] 
  },
  'vite': { 
    name: 'Vite', 
    category: 'Frontend & UI/UX', 
    categorySlug: 'frontend-web', 
    intro: "Your local development server takes minutes to start, and your build process is a slow, complex beast. You're here because you need to accelerate your frontend workflow. You need an engineer who can leverage Vite's speed and simplicity to create a lightning-fast developer experience and a highly optimized production build.",
    pains: [], 
    evaluation: ['Build/dev server configuration and optimization', 'Plugin ecosystem knowledge', 'Module Federation for micro-frontends', 'HMR (Hot Module Replacement) debugging', 'Library mode for reusable components'] 
  },
  'angular': {
    name: 'Angular',
    category: 'Frontend & UI/UX',
    categorySlug: 'frontend-web',
    intro: "Your enterprise application needs a robust, opinionated framework. You need an Angular expert who has mastered TypeScript, RxJS, and dependency injection to build large-scale, maintainable applications.",
    pains: [],
    evaluation: ['Component and module architecture', 'Deep RxJS knowledge for state management', 'NgRx for enterprise-scale state', 'Change detection strategies and performance', 'Testing with Jasmine and Karma']
  },
  'vue': {
    name: 'Vue.js',
    category: 'Frontend & UI/UX',
    categorySlug: 'frontend-web',
    intro: "You need to build a reactive, performant UI without the boilerplate. You're looking for a Vue expert who understands the Composition API, can manage state effectively with Pinia, and can build a clean, approachable codebase.",
    pains: [],
    evaluation: ['Composition API vs. Options API', 'Reactivity system fundamentals', 'State management with Pinia', 'Routing with Vue Router', 'Testing with Vitest and Vue Testing Library']
  },
  'tanstack': { 
    name: 'TanStack Query', 
    category: 'Frontend & UI/UX', 
    categorySlug: 'frontend-web', 
    intro: "Your application's state is a chaotic mix of server data and UI state, leading to bugs and complexity. You're here because you need an engineer who understands that `useState` and `useEffect` are not the right tools for managing server cache. You need an expert in TanStack Query (formerly React Query) to simplify data fetching, eliminate stale data, and build a more resilient UI.",
    pains: [], 
    evaluation: ['Mastery of server state management concepts', 'Caching/invalidation strategies (query keys)', 'Optimistic updates for a faster UX', 'Infinite scrolling and pagination patterns', 'Error handling and retries'] 
  },
  'redux': { 
    name: 'Redux Toolkit/Zustand', 
    category: 'Frontend & UI/UX', 
    categorySlug: 'frontend-web', 
    intro: "Your global state is a bloated, hard-to-trace mess. You're here because you need an engineer who can architect a clean, scalable, and performant state management solution. You need someone who knows when to use a global store and when to rely on component state or server cache, using modern tools like Redux Toolkit or Zustand effectively.",
    pains: [], 
    evaluation: ['Global vs. local state trade-offs', 'Middleware usage (e.g., for logging, async actions)', 'Performance with large stores and selector optimization', 'Architecting slices/stores for maintainability', 'Debugging state changes with devtools'] 
  },
  'graphql': { 
    name: 'GraphQL', 
    category: 'APIs & Backend Services', 
    categorySlug: 'frontend-web', 
    intro: "Your frontend teams are drowning in API calls, and your API is either over-fetching or under-fetching data. You need a GraphQL expert who can build a flexible, efficient data layer that empowers your clients. You're here because you need to solve the N+1 problem, design a scalable schema, and potentially manage a federated graph.",
    pains: [], 
    evaluation: ['Schema design principles', 'Resolvers and data loader patterns (to solve N+1)', 'Apollo Federation/stitching for microservices', 'Caching strategies (client and server-side)', 'Security (depth limiting, query cost analysis)'] 
  },
  'tailwind': { 
    name: 'Tailwind/shadcn', 
    category: 'Frontend & UI/UX', 
    categorySlug: 'frontend-web', 
    intro: "Your UI is an inconsistent collection of custom CSS and one-off components. You need an engineer who can build a scalable and maintainable design system. You're looking for an expert in utility-first CSS and component libraries like shadcn/ui or MUI who can create a consistent, beautiful, and accessible user experience.",
    pains: [], 
    evaluation: ['Design system implementation from scratch', 'Theming and customization of component libraries', 'Component API design for reusability', 'Utility-first best practices and maintainability', 'Accessibility (ARIA) implementation'] 
  },
  'storybook': {
    name: 'Storybook',
    category: 'Frontend & UI/UX',
    categorySlug: 'frontend-web',
    intro: "Your component library is undocumented and hard to test in isolation. You need an expert in Storybook to create a workshop environment for your UI, enabling visual testing, documentation, and collaborative development.",
    pains: [],
    evaluation: ['Component Story Format (CSF)', 'Controls, args, and mocking data', 'Addons for accessibility, testing, and documentation', 'Visual regression testing integration', 'Publishing and versioning a Storybook instance']
  },
  'testing': {
    name: 'Testing Library', 
    category: 'Frontend & UI/UX', 
    categorySlug: 'frontend-web', 
    intro: "Your tests are brittle, tied to implementation details, and fail with every minor refactor. You're here because you need to ship with confidence. You need an engineer who understands how to write tests that resemble how users interact with your app, using tools like Testing Library to ensure your application works as intended, not just that your code runs.",
    pains: [], 
    evaluation: ['User-centric testing philosophy', 'Mocking API requests and server state', 'Testing custom hooks and complex user interactions', 'Integration testing vs. unit testing trade-offs', 'Code coverage as a guide, not a goal'] 
  },
  'playwright': { 
    name: 'Playwright/Cypress', 
    category: 'Testing & Quality Engineering', 
    categorySlug: 'frontend-web', 
    intro: "Your end-to-end tests are slow, flaky, and a nightmare to debug. You're here because you need a Quality Engineer who can build a fast, reliable, and maintainable test automation suite using modern tools like Playwright or Cypress. You need an expert who can write tests that are resistant to UI changes and provide actionable feedback, not just noise.",
    pains: [], 
    evaluation: ['Test automation patterns (Page Object Model, App Actions)', 'Handling dynamic content and asynchronous operations', 'CI/CD integration, parallelization, and reporting', 'Debugging flaky tests and improving reliability', 'Cross-browser and responsive testing'] 
  },
  'react-native': {
    name: 'React Native',
    category: 'Mobile / Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "You need to ship on both iOS and Android, but you're struggling with performance issues and native module complexity. You need a React Native expert who understands the bridge, can debug performance bottlenecks, and can build a smooth, native-like experience.",
    pains: [],
    evaluation: ['Performance debugging (bridge, UI/JS thread)', 'Native module linking and troubleshooting', 'OTA update strategies (CodePush)', 'New architecture (JSI, Fabric, TurboModules)', 'Platform-specific UI/UX adaptation']
  },
  'flutter': {
    name: 'Flutter',
    category: 'Mobile / Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "You want a beautiful, high-performance cross-platform app from a single codebase. You need a Flutter expert who has mastered Dart, understands widget composition, and can manage complex state efficiently.",
    pains: [],
    evaluation: ['Effective widget composition', 'State management solutions (Provider, BLoC, Riverpod)', 'Dart language features (isolates, futures)', 'Platform channel communication', 'Performance profiling and optimization (DevTools)']
  },
  'swift': {
    name: 'Swift',
    category: 'Mobile / Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "You need a world-class iOS application, and that requires a true Swift expert. You're looking for someone who understands modern Swift patterns, can build declarative UIs with SwiftUI, and can manage the complexities of the Apple ecosystem.",
    pains: [],
    evaluation: ['SwiftUI vs. UIKit trade-offs', 'Declarative UI and data flow', 'Concurrency (async/await, actors)', 'Memory management (ARC)', 'App Store submission and provisioning']
  },
  'kotlin': {
    name: 'Kotlin',
    category: 'Mobile / Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "You're building for the modern Android ecosystem. You need a Kotlin expert who has mastered coroutines for asynchronous programming, can build declarative UIs with Jetpack Compose, and understands the nuances of the Android lifecycle.",
    pains: [],
    evaluation: ['Jetpack Compose for declarative UI', 'Coroutines and structured concurrency', 'Android architecture components (ViewModel, LiveData, Room)', 'Dependency injection with Hilt or Koin', 'Testing and debugging Android applications']
  },
  'objective-c': {
    name: 'Objective-C',
    category: 'Mobile / Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "You have a mature iOS application with a legacy Objective-C codebase that needs maintenance or modernization. You need a rare expert who is fluent in Objective-C, understands manual memory management, and can safely interoperate with modern Swift code.",
    pains: [],
    evaluation: ['Manual memory management (retain/release)', 'Interoperability with Swift (bridging headers)', 'Grand Central Dispatch (GCD) for concurrency', 'Legacy frameworks and patterns', 'Modernization strategies']
  },
  'codepush': {
    name: 'CodePush',
    category: 'Mobile / Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "You need to push updates to your React Native app without going through the slow app store review process. You need an expert in CodePush who can set up a reliable Over-the-Air (OTA) update pipeline, manage releases, and handle rollbacks.",
    pains: [],
    evaluation: ['CI/CD integration for automated releases', 'Staging and production deployment strategies', 'Handling breaking native changes', 'Rollback and error monitoring', 'User experience of updates (silent, on-next-resume)']
  },
  'sentry': {
    name: 'Sentry',
    category: 'Mobile / Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "You're flying blind when your mobile app crashes on a user's device. You need an expert in Sentry who can integrate crash reporting, capture meaningful context, and set up alerting to help you find and fix bugs before they impact more users.",
    pains: [],
    evaluation: ['SDK integration and configuration', 'Source maps for de-minification', 'Custom context and breadcrumbs for debugging', 'Alerting and issue triage workflows', 'Performance monitoring and transaction tracing']
  },
  'appcenter': {
    name: 'AppCenter',
    category: 'Mobile / Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "You need a unified platform to build, test, distribute, and monitor your mobile applications. You need an expert in App Center who can set up your entire mobile CI/CD pipeline, from automated builds to beta distribution and crash analytics.",
    pains: [],
    evaluation: ['Build service configuration (signing, environment variables)', 'Distribution groups for beta testing', 'Crash and analytics integration', 'UI test integration and execution', 'API for automation and scripting']
  },
  'fastlane': {
    name: 'Fastlane',
    category: 'Mobile / Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "You're tired of the manual, error-prone process of signing and deploying your mobile apps. You need an expert in Fastlane who can automate your entire release process, from code signing and version bumping to uploading screenshots and submitting to the app stores.",
    pains: [],
    evaluation: ['Fastfile and lane creation', 'Code signing management (match)', 'Automated screenshots and metadata', 'Integration with CI/CD systems', 'Plugin ecosystem knowledge']
  },
  'detox': {
    name: 'Detox',
    category: 'Mobile / Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "Your mobile app's end-to-end tests are flaky and unreliable. You need an expert in gray-box testing with Detox who can write stable, fast, and maintainable E2E tests for your React Native application.",
    pains: [],
    evaluation: ['Test runner integration (Jest)', 'Matchers and actions for interacting with the UI', 'Mocking native modules and network requests', 'CI/CD integration and parallel execution', 'Debugging and troubleshooting test failures']
  },
  'postgresql': { 
    name: 'PostgreSQL', 
    category: 'Data Modeling & Databases', 
    categorySlug: 'data-engineering-analytics', 
    intro: "Your database is a black box, and slow queries are killing your application's performance. You need more than just a SQL writer; you need a PostgreSQL expert who understands indexing, query planning, and advanced features like JSONB and window functions. You're here to find someone who can turn your database from a bottleneck into a powerhouse.",
    pains: [], 
    evaluation: ['Advanced indexing strategies (GIN, GiST, BRIN)', 'Query optimization using EXPLAIN ANALYZE', 'Proper use of advanced data types (JSONB, PostGIS)', 'Connection pooling and performance tuning', 'Replication and high-availability concepts'] 
  },
  'mysql': { 
    name: 'MySQL', 
    category: 'Data Modeling & Databases', 
    categorySlug: 'data-engineering-analytics', 
    intro: "You're running one of the world's most popular databases, but are you using it to its full potential? You're here because you need an engineer who knows the deep specifics of MySQL, from storage engine trade-offs (InnoDB vs. MyISAM) to replication strategies and performance tuning. You need an expert who can ensure your database is reliable and scalable.",
    pains: [], 
    evaluation: ['Storage engine trade-offs (especially InnoDB)', 'Replication setup and troubleshooting', 'Advanced indexing strategies', 'Performance tuning and using the slow query log', 'Understanding of character sets and collations'] 
  },
  'sql': { 
    name: 'SQL Server', 
    category: 'Data Modeling & Databases', 
    categorySlug: 'data-engineering-analytics', 
    intro: "Your enterprise relies on SQL Server, but performance is suffering and technical debt is mounting. You need an engineer with deep T-SQL knowledge who can write optimized queries, design robust stored procedures, and analyze execution plans to solve complex performance problems. You're here to find an expert who can manage your mission-critical data layer.",
    pains: [], 
    evaluation: ['Deep T-SQL proficiency, including window functions', 'Analyzing query execution plans and using hints', 'Indexing strategies (clustered vs. non-clustered, columnstore)', 'Stored procedure design and optimization', 'Transaction management and isolation levels'] 
  },
  'redis': { 
    name: 'Redis', 
    category: 'Data Modeling & Databases', 
    categorySlug: 'data-engineering-analytics', 
    intro: "Your application is slow because you're hitting your primary database for everything. You need an engineer who understands how to use Redis as a powerful tool for caching, session storage, and real-time messaging. You're here to find an expert who knows Redis data structures inside and out and can implement effective caching patterns to dramatically improve your application's performance.",
    pains: [], 
    evaluation: ['Optimal use of Redis data structures', 'Caching patterns (e.g., cache-aside, write-through)', 'Persistence options (RDB vs. AOF)', 'High availability with Redis Sentinel or Cluster', 'Use cases for Pub/Sub and Streams'] 
  },
  'memcached': { 
    name: 'Memcached', 
    category: 'Data Modeling & Databases', 
    categorySlug: 'data-engineering-analytics', 
    intro: "You need a simple, fast, and scalable in-memory caching layer, and you don't need the complexity of Redis. You're here because you need an engineer who understands how to use Memcached effectively for object caching. You need an expert who can design a solid cache invalidation strategy and scale a distributed caching layer to reduce database load and speed up your application.",
    pains: [], 
    evaluation: ['Effective cache invalidation strategies', 'Understanding of the slab allocator', 'Use cases and trade-offs vs. Redis', 'Scaling strategies for a distributed cache', 'Handling cache misses and stampedes'] 
  },
  'typeorm': {
    name: 'TypeORM',
    category: 'Data Modeling & Databases',
    categorySlug: 'backend-services',
    intro: "Your TypeScript backend's data layer is a mess of untyped queries. You need a TypeORM expert who can build a type-safe, maintainable data access layer, manage migrations, and optimize queries without getting tangled in ORM pitfalls.",
    pains: [],
    evaluation: ['Entity and repository patterns', 'QueryBuilder vs. FindOptions', 'Managing relations and avoiding N+1', 'Migration generation and execution', 'Transaction management']
  },
  'ef-core': {
    name: 'EF Core',
    category: 'Data Modeling & Databases',
    categorySlug: 'backend-services',
    intro: "You're building on the .NET stack and need a robust data access layer. You need an Entity Framework Core expert who can model complex domains, write efficient LINQ queries, and manage database migrations flawlessly.",
    pains: [],
    evaluation: ['DbContext configuration and lifetime', 'Advanced LINQ query translation', 'Change tracking and performance', 'Migration strategies (code-first)', 'Raw SQL queries and stored procedures']
  },
  'snowflake': {
    name: 'Snowflake/BigQuery/Redshift',
    category: 'Data Engineering / Analytics',
    categorySlug: 'data-engineering-analytics',
    intro: "Your data warehouse is slow and expensive. You need an expert in modern cloud data warehouses like Snowflake, BigQuery, or Redshift who can optimize storage, tune query performance, and build a cost-effective, scalable analytics platform.",
    pains: [],
    evaluation: ['Architecture and data storage concepts (e.g., micro-partitions)', 'Performance tuning (clustering, partitioning)', 'Cost management and virtual warehouse optimization', 'Data sharing and security features', 'SQL extensions and UDFs']
  },
  'dbt': { 
    name: 'dbt', 
    category: 'Data Modeling & Databases', 
    categorySlug: 'data-engineering-analytics', 
    intro: "Your data warehouse is a swamp of untested, undocumented SQL scripts. You're here because you need to bring software engineering best practices to your analytics workflow. You need an analytics engineer who is a master of dbt, someone who can build modular, testable, and well-documented data models that your entire organization can trust.",
    pains: [],
    evaluation: ['Data modeling for analytics (Kimball, dimensional modeling)', 'Advanced Jinja and macro usage for DRY code', 'dbt testing (generic, singular, custom)', 'Materialization strategies and performance tuning', 'Deployment, orchestration, and CI/CD for dbt projects'] 
  },
  'airflow': { 
    name: 'Airflow/Prefect', 
    category: 'Pipelines & Orchestration', 
    categorySlug: 'data-engineering-analytics', 
    intro: "Your data pipelines are a collection of fragile cron jobs and shell scripts that fail silently in the middle of the night. You're here because you need to build a reliable, observable, and maintainable data orchestration platform. You need an engineer who is an expert in modern workflow orchestrators like Airflow, Prefect, or Dagster to turn your pipeline chaos into a production-grade system.",
    pains: [], 
    evaluation: ['DAG design, scheduling, and idempotency', 'Dynamic task generation and complex dependencies', 'Idempotency, backfills, and historical runs', 'Scaling executors and managing parallelism', 'Custom operators and hooks'] 
  },
  'fivetran': {
    name: 'Fivetran/Airbyte',
    category: 'Data Engineering / Analytics',
    categorySlug: 'data-engineering-analytics',
    intro: "You're spending too much engineering time building and maintaining brittle data ingestion pipelines. You need an expert in automated ELT tools like Fivetran or Airbyte who can quickly and reliably sync data from all your sources into your data warehouse.",
    pains: [],
    evaluation: ['Connector configuration and troubleshooting', 'Data replication strategies (incremental, full)', 'Handling schema changes and drift', 'Custom connector development (Airbyte)', 'Monitoring and alerting for sync failures']
  },
  'kafka': { 
    name: 'Kafka/RabbitMQ', 
    category: 'Pipelines & Orchestration', 
    categorySlug: 'data-engineering-analytics', 
    intro: "Your services are either tightly coupled and fragile, or you're losing data between asynchronous processes. You need an engineer who understands how to build resilient, event-driven systems with a message broker. You're here to find an expert in Kafka, RabbitMQ, or NATS who can design a robust messaging architecture that guarantees delivery and enables your system to scale.",
    pains: [], 
    evaluation: ['Message delivery guarantees (at-least-once, etc.)', 'Topic/exchange and partition design', 'Consumer group scaling and rebalancing', 'Dead-letter queue (DLQ) and error handling patterns', 'Performance tuning for throughput and latency'] 
  },
  'spark': {
    name: 'Spark',
    category: 'Data Engineering / Analytics',
    categorySlug: 'data-engineering-analytics',
    intro: "You're dealing with massive datasets that can't be processed on a single machine. You need a Spark expert who can write optimized distributed data processing jobs, tune for performance, and manage a Spark cluster effectively.",
    pains: [],
    evaluation: ['Core concepts (RDDs, DataFrames, Datasets)', 'Performance tuning (shuffling, partitioning)', 'Spark SQL and query optimization', 'Structured Streaming for real-time processing', 'Deployment on YARN or Kubernetes']
  },
  'looker': {
    name: 'Looker/Tableau',
    category: 'Data Engineering / Analytics',
    categorySlug: 'data-engineering-analytics',
    intro: "You have data, but your business users can't get answers from it. You need a BI expert who can master Looker or Tableau to build intuitive dashboards, create reliable data models, and empower your organization to make data-driven decisions.",
    pains: [],
    evaluation: ['Data modeling (LookML in Looker)', 'Advanced visualization and dashboard design', 'Performance optimization for dashboards', 'Row-level security and access control', 'Embedding analytics into other applications']
  },
  'datahub': {
    name: 'DataHub/Amundsen',
    category: 'Data Engineering / Analytics',
    categorySlug: 'data-engineering-analytics',
    intro: "Your data landscape is a black box. No one knows where data comes from, who owns it, or if it can be trusted. You need an expert in data discovery and cataloging tools like DataHub or Amundsen to create a single source of truth for your data assets.",
    pains: [],
    evaluation: ['Metadata ingestion from various sources', 'Data lineage visualization and troubleshooting', 'Data ownership and governance workflows', 'Customizing the metadata model', 'Deployment and scaling of the data catalog']
  },
  'great-expectations': {
    name: 'Great Expectations',
    category: 'Data Engineering / Analytics',
    categorySlug: 'data-engineering-analytics',
    intro: "You're tired of discovering data quality issues in your production dashboards. You need a data quality expert who can use Great Expectations to define, validate, and monitor the quality of your data pipelines, catching issues before they impact your business.",
    pains: [],
    evaluation: ['Creating and managing expectation suites', 'Integrating data validation into data pipelines (e.g., with Airflow)', 'Data profiling and automated expectation generation', 'Data Docs for documentation and reporting', 'Custom expectation development']
  },
  'prisma': { 
    name: 'Prisma', 
    category: 'Data Modeling & Databases', 
    categorySlug: 'backend-services', 
    intro: "You want the safety of TypeScript across your entire stack, including your database layer. You're here because you need an engineer who can leverage Prisma to build type-safe, maintainable, and performant database applications. You need an expert who understands schema design, migrations, and how to use the Prisma Client effectively without running into performance pitfalls.",
    pains: [], 
    evaluation: ['Schema design and migration workflows', 'Query engine performance and optimization', 'Type-safe data access patterns', 'Transaction management and interactive transactions', 'Extending Prisma Client with custom methods'] 
  },
  'sqlalchemy': { 
    name: 'SQLAlchemy', 
    category: 'Data Modeling & Databases', 
    categorySlug: 'backend-services', 
    intro: "Your Python application's database access is a mix of raw SQL strings and fragile, custom-built logic. You need an engineer who can build a robust and maintainable data access layer using SQLAlchemy, the gold standard in the Python world. You need an expert who knows the trade-offs between the Core and the ORM and can solve performance issues like the N+1 problem.",
    pains: [], 
    evaluation: ['Core vs. ORM trade-offs', 'Session management and transaction patterns', 'Lazy vs. eager loading strategies (to avoid N+1)', 'Alembic for database migrations', 'Advanced query construction and optimization'] 
  },
  'hibernate': { 
    name: 'Hibernate', 
    category: 'Data Modeling & Databases', 
    categorySlug: 'backend-services', 
    intro: "Your Java application is plagued by slow database performance and complex data access logic. You're here because you need a Hibernate expert who can navigate the complexities of an enterprise-grade ORM. You need someone who understands the entity lifecycle, caching, and how to write efficient JPQL/HQL to build high-performance, data-driven applications.",
    pains: [], 
    evaluation: ['Entity lifecycle and state management', 'Caching strategies (L1/L2) and their pitfalls', 'Solving the N+1 problem with fetch strategies', 'JPQL/HQL proficiency and optimization', 'Transaction management and isolation levels'] 
  },
  'flink': { 
    name: 'Flink/Beam', 
    category: 'Pipelines & Orchestration', 
    categorySlug: 'data-engineering-analytics', 
    intro: "You need to process data in real-time, not just in hourly batches. You're here because you need to build sophisticated, stateful stream processing applications. You need an expert in Flink or Beam who understands the complexities of windowing, watermarks, and state management to derive insights from your data as it happens.",
    pains: [], 
    evaluation: ['Stateful streaming concepts and backends', 'Windowing (tumbling, sliding, session) and watermarks', 'Connectors, sources, and sinks', 'Fault tolerance and checkpointing', 'Beam portability and runner specifics'] 
  },
  'pytorch': { 
    name: 'PyTorch', 
    category: 'ML/AI & LLM Ops', 
    categorySlug: 'ml-ai-llm-ops', 
    intro: "You're moving beyond basic models and need to build custom neural networks. You're here because you need an engineer with deep PyTorch expertise who can design complex architectures, create efficient data loading pipelines, and write optimized training loops. You need an expert who can take a research paper and turn it into a working, high-performance model.",
    pains: [], 
    evaluation: ['Custom neural network architecture design', 'DataLoader, datasets, and data preprocessing', 'Optimized training loops and GPU utilization', 'TorchServe or other deployment strategies', 'Debugging and performance profiling in PyTorch'] 
  },
  'scikit-learn': {
    name: 'scikit-learn',
    category: 'ML/AI & LLM Ops',
    categorySlug: 'ml-ai-llm-ops',
    intro: "You need to build classical machine learning models, but you need someone who can go beyond a simple `model.fit()`. You need an expert in scikit-learn who understands preprocessing pipelines, cross-validation, and model evaluation to build robust and reliable ML systems.",
    pains: [],
    evaluation: ['Pipelines for preprocessing and modeling', 'Cross-validation and hyperparameter tuning', 'Model evaluation metrics and interpretation', 'Feature engineering and selection', 'Deploying scikit-learn models as services']
  },
  'transformers': { 
    name: 'Transformers', 
    category: 'ML/AI & LLM Ops', 
    categorySlug: 'ml-ai-llm-ops', 
    intro: "You're building applications with Large Language Models, and you need an engineer who is an expert in the Hugging Face ecosystem. You're here because you need someone who knows how to fine-tune models for specific tasks, implement efficient tokenization strategies, and optimize models for production inference using techniques like quantization.",
    pains: [], 
    evaluation: ['Hugging Face ecosystem (Datasets, Tokenizers, Accelerate)', 'Fine-tuning pre-trained models (e.g., with PEFT/LoRA)', 'Tokenization strategies and their impact', 'Quantization and optimization for inference', 'Deploying and serving Transformer models'] 
  },
  'openai': {
    name: 'OpenAI/Anthropic SDKs',
    category: 'ML/AI & LLM Ops',
    categorySlug: 'ml-ai-llm-ops',
    intro: "You're integrating powerful foundation models into your product, but you need an engineer who can do more than just make a simple API call. You need an expert who understands how to handle streaming, manage retries, and structure calls for reliable and cost-effective results.",
    pains: [],
    evaluation: ['API authentication and security best practices', 'Streaming responses for better UX', 'Error handling and retry logic', 'Function calling and tool use implementation', 'Cost management and token optimization']
  },
  'vllm': { 
    name: 'vLLM', 
    category: 'ML/AI & LLM Ops', 
    categorySlug: 'ml-ai-llm-ops', 
    intro: "Your LLM inference is slow and expensive, and you can't serve enough concurrent users. You're here because you need to dramatically improve the throughput and efficiency of your model serving. You need an expert in vLLM who understands concepts like PagedAttention and continuous batching to build a high-performance, cost-effective inference service.",
    pains: [], 
    evaluation: ['Understanding of PagedAttention and its benefits', 'Continuous batching for high throughput', 'Deployment as a scalable API service', 'Performance tuning and GPU utilization', 'Compatibility with different model architectures'] 
  },
  'ray': { 
    name: 'Ray Serve', 
    category: 'ML/AI & LLM Ops', 
    categorySlug: 'ml-ai-llm-ops', 
    intro: "You need to deploy multiple ML models at scale, but building a custom serving infrastructure is complex and time-consuming. You're here because you need an engineer who can use Ray Serve to build a scalable, fault-tolerant, and flexible model deployment platform. You need an expert who can manage autoscaling, compose multiple models, and ensure high availability.",
    pains: [], 
    evaluation: ['Scaling model deployments horizontally and vertically', 'Autoscaling policies based on traffic', 'Composition of multiple models into a single graph', 'Fault tolerance and high availability', 'Integration with the broader Ray ecosystem (Ray Core, Ray Data)'] 
  },
  'langchain': { 
    name: 'LangChain/LlamaIndex', 
    category: 'ML/AI & LLM Ops', 
    categorySlug: 'ml-ai-llm-ops', 
    intro: "You're building a RAG application, but it's becoming a complex web of prompts and data sources. You need an engineer who is an expert in frameworks like LangChain or LlamaIndex to structure your application, build robust data ingestion pipelines, and create evaluatable chains and agents. You're here to move from a simple script to a production-ready LLM application.",
    pains: [], 
    evaluation: ['RAG pipeline construction (Load, Split, Embed, Store, Retrieve, Generate)', 'Agent design and tool use', 'Custom chains, indexes, and retrievers', 'Evaluation and tracing with LangSmith or equivalent', 'Understanding the trade-offs and abstractions'] 
  },
  'pgvector': { 
    name: 'pgvector/Pinecone', 
    category: 'ML/AI & LLM Ops', 
    categorySlug: 'ml-ai-llm-ops', 
    intro: "Your RAG system's performance depends entirely on the quality of your retrieval, and that requires a robust vector database. You need an engineer who understands vector indexing strategies, metadata filtering, and the trade-offs of hybrid search. You're here to find an expert in pgvector, Pinecone, or Weaviate who can build and scale the retrieval backbone of your AI application.",
    pains: [], 
    evaluation: ['Vector indexing strategies (IVF, HNSW) and their trade-offs', 'The importance of metadata filtering for accuracy', 'Hybrid search concepts (keyword + vector)', 'Scaling vector search for large datasets', 'Data ingestion and embedding pipelines'] 
  },
  'mlflow': { 
    name: 'MLflow/W&B', 
    category: 'ML/AI & LLM Ops', 
    categorySlug: 'ml-ai-llm-ops', 
    intro: "Your ML experiments are chaotic and irreproducible. You're here because you need to bring discipline and MLOps best practices to your team. You need an engineer who can implement MLflow or Weights & Biases to track experiments, manage models in a central registry, and automate the path from training to production.",
    pains: [], 
    evaluation: ['Comprehensive experiment tracking (params, metrics, artifacts)', 'Model registry for versioning and staging (dev, staging, prod)', 'Artifact logging for data and code versions', 'CI/CD integration for automated model deployment', 'Collaboration and reporting features'] 
  },
  'kubeflow': {
    name: 'Kubeflow',
    category: 'ML/AI & LLM Ops',
    categorySlug: 'ml-ai-llm-ops',
    intro: "You need a complete MLOps platform on Kubernetes, but you're struggling with the complexity. You need a Kubeflow expert who can set up and manage pipelines, serve models, and provide a multi-tenant environment for your data science team.",
    pains: [],
    evaluation: ['Kubeflow Pipelines (KFP) for orchestration', 'KFServing for model deployment', 'Notebook server management', 'Multi-user isolation and security', 'Integration with other Kubernetes ecosystem tools']
  },
  'ragas': { 
    name: 'Ragas', 
    category: 'ML/AI & LLM Ops', 
    categorySlug: 'ml-ai-llm-ops', 
    intro: "Your RAG application 'looks' okay, but you have no objective way to measure its quality. You're here because you need to move beyond anecdotal evidence and implement a rigorous evaluation framework. You need an expert in Ragas or other evaluation tools who can measure metrics like faithfulness, answer relevancy, and context precision to systematically improve your application's performance.",
    pains: [], 
    evaluation: ['Understanding core RAG evaluation metrics', 'The difference between faithfulness, relevance, and precision', 'Synthetic test data generation for evaluation', 'Integrating evaluation into a CI/CD pipeline (eval-driven development)', 'Analyzing results to diagnose and fix issues'] 
  },
  'dvc': {
    name: 'DVC',
    category: 'ML/AI & LLM Ops',
    categorySlug: 'ml-ai-llm-ops',
    intro: "You're trying to version your data and models alongside your code, but Git LFS isn't cutting it. You need an expert in DVC who can set up a robust data versioning pipeline, ensuring reproducibility and collaboration for your ML projects.",
    pains: [],
    evaluation: ['Data and model versioning with remote storage', 'DVC pipelines for reproducible workflows', 'Integration with Git', 'Experiment tracking', 'Collaboration workflows for data scientists']
  },
  'feast': {
    name: 'Feast/Tecton',
    category: 'ML/AI & LLM Ops',
    categorySlug: 'ml-ai-llm-ops',
    intro: "Your data scientists are rebuilding the same features over and over, and you have no consistency between training and serving. You need an expert in feature stores like Feast or Tecton to create a centralized, reliable source of features for your ML models.",
    pains: [],
    evaluation: ['Feature definition and registration', 'Online vs. offline store concepts', 'Point-in-time correct feature retrieval for training', 'Low-latency feature serving for inference', 'Feature discovery and governance']
  },
  'jira': {
    name: 'Jira/Linear',
    category: 'Product, Design & Growth',
    categorySlug: 'product-design-growth',
    intro: "Your product development process is chaotic and untrackable. You need an expert in Jira or Linear who can configure workflows, set up reporting, and turn your project management tool into the central nervous system of your product org.",
    pains: [],
    evaluation: ['Custom workflow and screen configuration', 'Advanced JQL for reporting', 'Roadmapping and dependency tracking', 'Integration with other tools (GitHub, Slack)', 'Agile board setup (Scrum/Kanban)']
  },
  'notion': {
    name: 'Notion/Confluence',
    category: 'Product, Design & Growth',
    categorySlug: 'product-design-growth',
    intro: "Your product documentation is scattered and out of date. You need an expert in Notion or Confluence who can create a structured, maintainable, and collaborative documentation system that becomes your team's single source of truth.",
    pains: [],
    evaluation: ['Information architecture and space/database design', 'Template creation for PRDs, specs, and meeting notes', 'Integration with other tools (Jira, Figma)', 'User permissions and access control', 'Driving adoption and best practices']
  },
  'figma': {
    name: 'Figma/Sketch',
    category: 'Product, Design & Growth',
    categorySlug: 'product-design-growth',
    intro: "Your design process is disconnected from development, leading to inconsistency and rework. You need a design expert who has mastered Figma or Sketch to build component libraries, create interactive prototypes, and facilitate a smooth handoff to engineering.",
    pains: [],
    evaluation: ['Component library and design system creation', 'Auto layout and responsive design', 'Interactive prototyping and user testing', 'Developer handoff and design tokens', 'Plugin and integration ecosystem']
  },
  'amplitude': {
    name: 'Amplitude/Mixpanel',
    category: 'Product, Design & Growth',
    categorySlug: 'product-design-growth',
    intro: "You're flying blind, making product decisions based on gut feel instead of data. You need a product analytics expert who can use Amplitude or Mixpanel to define events, analyze funnels, and uncover the user behaviors that drive your business.",
    pains: [],
    evaluation: ['Event taxonomy and instrumentation planning', 'Funnel, retention, and segmentation analysis', 'Creating and interpreting dashboards', 'A/B testing analysis', 'Identifying user personas and behavioral cohorts']
  },
  'jest': { 
    name: 'Jest/Vitest', 
    category: 'Testing & Quality Engineering', 
    categorySlug: 'qa-quality-engineering', 
    intro: "You have no unit or integration tests, and every code change is a gamble. You're here because you need to build a safety net for your codebase. You need an engineer who is an expert in Jest or Vitest, someone who can write effective unit and integration tests, set up mocking, and analyze code coverage to increase your confidence in every deployment.",
    pains: [], 
    evaluation: ['Effective unit and integration testing strategies', 'Advanced mocking of modules, functions, and timers', 'Snapshot testing for UI components', 'Code coverage analysis as a tool for improvement', 'Configuration for different environments (JS, TS, React)'] 
  },
  'pytest': { 
    name: 'PyTest/JUnit', 
    category: 'Testing & Quality Engineering', 
    categorySlug: 'qa-quality-engineering', 
    intro: "Your backend code is untested, and refactoring is a high-risk activity. You're here because you need to build a robust testing culture for your Java or Python services. You need an engineer who is an expert in PyTest or JUnit, someone who can design powerful fixtures, write parameterized tests, and build a comprehensive suite that prevents regressions.",
    pains: [], 
    evaluation: ['Fixture design and usage for setup/teardown', 'Parameterized testing for data-driven tests', 'Leveraging the plugin ecosystem', 'Test discovery and organization for large codebases', 'Mocking and patching for isolating units of work'] 
  },
  'k6': { 
    name: 'k6/Locust', 
    category: 'Testing & Quality Engineering', 
    categorySlug: 'qa-quality-engineering', 
    intro: "You don't know if your application can handle production traffic until it's already falling over. You're here because you need to proactively find your system's breaking points. You need a performance engineer who can use k6 or Locust to design and execute load tests, analyze the results, and identify performance bottlenecks before your users do.",
    pains: [], 
    evaluation: ['Load testing script design (user scenarios)', 'Setting appropriate thresholds and checks for SLOs', 'Analyzing results to identify bottlenecks', 'Distributed load testing for high-volume tests', 'Scripting in JavaScript (k6) or Python (Locust)'] 
  },
  'pact': { 
    name: 'Pact', 
    category: 'Testing & Quality Engineering', 
    categorySlug: 'qa-quality-engineering', 
    intro: "Your microservices are constantly breaking each other because there are no enforced API contracts. You're here because you need to stop integration failures after deployment. You need an engineer who understands consumer-driven contract testing and can implement Pact to ensure your services can communicate reliably, allowing them to evolve independently but safely.",
    pains: [], 
    evaluation: ['Deep understanding of consumer-driven contract testing', 'Pact Broker for contract management and discovery', 'CI/CD integration for consumer and provider verification', 'Provider state management for complex scenarios', 'Avoiding the pitfalls of over-specification'] 
  },
  'owasp-zap': {
    name: 'OWASP ZAP',
    category: 'Testing & Quality Engineering',
    categorySlug: 'qa-quality-engineering',
    intro: "You're worried about common web application vulnerabilities but don't have a dedicated security tester. You need a QA engineer who can use a DAST tool like OWASP ZAP to automate security scanning and find issues like XSS and SQL injection in your CI/CD pipeline.",
    pains: [],
    evaluation: ['Automated and manual scanning techniques', 'CI/CD integration for security testing', 'Alert triage and false positive reduction', 'Session management and authenticated scanning', 'Reporting and issue tracking integration']
  },
  'browserstack': {
    name: 'BrowserStack/Sauce Labs',
    category: 'Testing & Quality Engineering',
    categorySlug: 'qa-quality-engineering',
    intro: "You can't possibly test your web app on every browser and device. You need a QA engineer who is an expert in cloud testing platforms like BrowserStack or Sauce Labs to run your automated tests across a massive grid of real and virtual devices, ensuring broad compatibility.",
    pains: [],
    evaluation: ['Integration with test automation frameworks (Playwright, Selenium)', 'Parallel test execution for speed', 'Debugging tests on remote devices', 'Visual regression testing', 'Managing platform credentials and security']
  },
  'gremlin': { 
    name: 'Gremlin/Litmus', 
    category: 'Testing & Quality Engineering', 
    categorySlug: 'qa-quality-engineering', 
    intro: "You believe your system is resilient, but you've never actually tested it against real-world failures. You're here because you need to move from 'chaos theory' to 'chaos engineering.' You need an engineer who can use a tool like Gremlin or Litmus to safely inject failures into your system, run GameDays, and uncover hidden weaknesses before they cause a real outage.",
    pains: [], 
    evaluation: ['Chaos engineering principles and safety best practices', 'GameDay planning and execution', 'Identifying system weaknesses (e.g., timeouts, retries)', 'Measuring impact and time to recovery', 'Automating chaos experiments in CI/CD'] 
  },
  'google-workspace': {
    name: 'Google Workspace/M365',
    category: 'IT / Enterprise Ops',
    categorySlug: 'it-enterprise-ops',
    intro: "Your company's core productivity suite is a tangle of inconsistent settings and security gaps. You need an IT expert who can administer Google Workspace or Microsoft 365 to enforce security policies, manage users and groups, and ensure smooth collaboration.",
    pains: [],
    evaluation: ['User and group management at scale', 'Security policy enforcement (e.g., 2FA, data loss prevention)', 'Email security and anti-phishing rules', 'Device management integration', 'Application and third-party integration control']
  },
  'jamf': {
    name: 'Intune/Jamf/Kandji',
    category: 'IT / Enterprise Ops',
    categorySlug: 'it-enterprise-ops',
    intro: "Your employees' laptops are unmanaged, unsecure, and a compliance nightmare. You need an MDM expert who can use Intune, Jamf, or Kandji to automate device enrollment, enforce security policies, and manage your entire fleet of endpoints.",
    pains: [],
    evaluation: ['Zero-touch deployment and enrollment', 'Policy and configuration profile management', 'Software deployment and patching', 'Compliance reporting and enforcement', 'Scripting and automation']
  },
  'jira-service-management': {
    name: 'Jira Service Mgmt',
    category: 'IT / Enterprise Ops',
    categorySlug: 'it-enterprise-ops',
    intro: "Your IT support is a chaotic mess of emails and Slack messages. You need an ITSM expert who can implement Jira Service Management to create a structured service desk, automate workflows, and provide a great support experience for your employees.",
    pains: [],
    evaluation: ['Service catalog and request fulfillment design', 'Incident, problem, and change management workflows', 'CMDB population and management', 'Reporting and SLA tracking', 'Automation and integration with other systems']
  },
  'edr': {
    name: 'EDR/XDR',
    category: 'IT / Enterprise Ops',
    categorySlug: 'it-enterprise-ops',
    intro: "You need to detect and respond to sophisticated threats on your endpoints. You need a security analyst who is an expert in EDR/XDR platforms to hunt for threats, investigate alerts, and contain attacks before they can spread.",
    pains: [],
    evaluation: ['Threat hunting using platform-specific query languages', 'Alert triage and incident investigation', 'Host containment and remediation actions', 'Custom detection rule creation', 'Understanding of attacker techniques (MITRE ATT&CK)']
  },
  'proofpoint': {
    name: 'Proofpoint',
    category: 'IT / Enterprise Ops',
    categorySlug: 'it-enterprise-ops',
    intro: "Phishing is your number one threat vector. You need an email security expert who can manage Proofpoint to block malicious emails, prevent data loss, and protect your organization from Business Email Compromise (BEC) and other advanced threats.",
    pains: [],
    evaluation: ['Email gateway policy and rule configuration', 'Threat analysis and forensics (TAP)', 'Data Loss Prevention (DLP) rule creation', 'Targeted attack protection and impersonation detection', 'End-user training and awareness integration']
  },
  'cloudzero': { 
    name: 'CloudZero/Infracost', 
    category: 'Cloud FinOps & BizTech', 
    categorySlug: 'finops-biztech', 
    intro: "Your cloud bill is a mystery, and you have no idea what features or customers are driving your costs. You're here because you need to achieve cloud cost intelligence. You need a FinOps engineer who can use a platform like CloudZero to map costs to business metrics and a tool like Infracost to see the cost impact of code changes before they're merged.",
    pains: [], 
    evaluation: ['Cost anomaly detection and root cause analysis', 'Cost allocation and showback/chargeback', 'Calculating unit cost economics (e.g., cost per feature)', 'Budgeting, forecasting, and trend analysis', 'Integrating cost into the developer workflow'] 
  },
  'aws-cost-explorer': { 
    name: 'AWS Cost Explorer', 
    category: 'Cloud FinOps & BizTech', 
    categorySlug: 'finops-biztech', 
    intro: "Your AWS bill is growing, but you're flying blind without the data to make optimization decisions. You need an engineer who can master AWS Cost Explorer to analyze your cost and usage data, make recommendations for Reserved Instances or Savings Plans, and build a robust tagging strategy to provide visibility to the entire organization.",
    pains: [], 
    evaluation: ['Deep analysis of Cost and Usage Reports (CUR)', 'RI/Savings Plan analysis and recommendations', 'Designing and enforcing a cost allocation tagging strategy', 'Creating custom reports and dashboards', 'Setting up budgets and alerts'] 
  },
  'salesforce': { 
    name: 'Salesforce', 
    category: 'Cloud FinOps & BizTech', 
    categorySlug: 'finops-biztech', 
    intro: "Your go-to-market teams are stuck with manual processes and disconnected data inside Salesforce. You need a Salesforce Developer or RevOps engineer who can build custom automation, optimize your data model, and integrate Salesforce with the rest of your stack. You're here to turn your CRM from a simple database into a revenue-driving engine.",
    pains: [], 
    evaluation: ['Apex and Lightning Web Components (LWC) development', 'SOQL query optimization for large data volumes', 'Declarative automation with Flow and Process Builder', 'Integration patterns (REST/SOAP APIs, Platform Events)', 'Governor limits and scalable architecture'] 
  },
  'hubspot': { 
    name: 'HubSpot', 
    category: 'Cloud FinOps & BizTech', 
    categorySlug: 'finops-biztech', 
    intro: "Your marketing and sales teams are struggling to work efficiently in HubSpot. You need a BizTech or RevOps engineer who can design custom objects, build powerful workflow automations, and integrate HubSpot with your product and billing systems. You're here to unlock the full potential of your HubSpot investment.",
    pains: [], 
    evaluation: ['Custom object and property design', 'Advanced workflow automation and branching logic', 'HubSpot API integration and custom apps', 'Reporting and dashboard creation for marketing/sales KPIs', 'Data hygiene and management best practices'] 
  },
  'zuora': {
    name: 'Zuora/Chargebee',
    category: 'Cloud FinOps & BizTech',
    categorySlug: 'finops-biztech',
    intro: "You're launching a usage-based or subscription product, and your billing logic is getting complicated. You need an expert in a modern billing platform like Zuora or Chargebee to model your product catalog, manage subscriptions, and integrate with your payment gateway.",
    pains: [],
    evaluation: ['Product catalog and rate plan configuration', 'Subscription lifecycle management (upgrades, downgrades, cancellations)', 'Usage-based billing and metering', 'Invoice generation and dunning management', 'Integration with CRMs and ERPs']
  },
  'hightouch': {
    name: 'Hightouch/Census',
    category: 'Cloud FinOps & BizTech',
    categorySlug: 'finops-biztech',
    intro: "Your customer data is trapped in your data warehouse, and your go-to-market teams are working with stale, incomplete information. You need a RevOps or Data engineer who understands Reverse ETL. You're here to find an expert in Hightouch or Census who can sync data from your warehouse back into business tools like Salesforce and HubSpot, empowering your teams with the data they need to act.",
    pains: [],
    evaluation: ['Understanding of Reverse ETL concepts and use cases', 'Data modeling for activation in business tools', 'Sync configuration, scheduling, and debugging', 'Identity resolution and mapping', 'Measuring the impact of data activation on GTM efforts']
  },
  'stripe': {
    name: 'Stripe Billing',
    category: 'Cloud FinOps & BizTech',
    categorySlug: 'finops-biztech',
    intro: "You're building a subscription business and need a powerful, developer-friendly billing system. You need an expert in Stripe Billing who can integrate the API, manage subscription lifecycles, and handle complex scenarios like metered billing and coupons.",
    pains: [],
    evaluation: ['Subscription and customer API integration', 'Webhook handling for lifecycle events', 'Metered billing and usage reporting', 'Invoice and tax management', 'Checkout and Payment Element customization']
  },
  'grafana': {
    name: 'Grafana',
    category: 'Observability & SRE',
    categorySlug: 'platform-infra-sre',
    intro: "Your dashboards are a mess, and you can't visualize your system's health effectively. You need a Grafana expert who can build insightful, actionable dashboards that correlate metrics, logs, and traces to give you a complete picture of your system's performance.",
    pains: [],
    evaluation: ['Advanced dashboard design and visualization techniques', 'Data source integration (Prometheus, Loki, etc.)', 'Templating and variables for dynamic dashboards', 'Alerting configuration and integration', 'Plugin development and usage']
  },
  'trivy': {
    name: 'Trivy',
    category: 'Security & GRC',
    categorySlug: 'security-grc',
    intro: "You need a simple, fast, and comprehensive vulnerability scanner for your container images and other artifacts. You need an expert in Trivy who can integrate it into your CI/CD pipeline to find vulnerabilities before they reach production.",
    pains: [],
    evaluation: ['CI/CD integration for automated scanning', 'Vulnerability database management and updates', 'Image, filesystem, and Git repository scanning', 'Filtering and ignoring vulnerabilities', 'Output formatting for reporting and alerting']
  },
  'opa': {
    name: 'OPA',
    category: 'Security & GRC',
    categorySlug: 'security-grc',
    intro: "You need a unified way to enforce policies across your entire stack, from microservices to Kubernetes. You need an expert in Open Policy Agent (OPA) who can write declarative policies in Rego to decouple policy from your application logic.",
    pains: [],
    evaluation: ['Rego policy language proficiency', 'Integration with Kubernetes via Gatekeeper', 'API authorization use cases', 'Testing and debugging policies', 'Performance considerations for the OPA agent']
  },
  'iso': {
    name: 'ISO 27001',
    category: 'Security & GRC',
    categorySlug: 'security-grc',
    intro: "You need to demonstrate a commitment to information security management to your enterprise customers and partners. You need an expert who understands the ISO 27001 framework and can help you build an Information Security Management System (ISMS) that meets international standards.",
    pains: [],
    evaluation: ['Understanding of ISMS scope and context', 'Annex A controls and their implementation', 'Risk assessment and treatment methodologies', 'Internal audit and management review processes', 'Continuous improvement and certification lifecycle']
  },
  'hipaa': {
    name: 'HIPAA',
    category: 'Security & GRC',
    categorySlug: 'security-grc',
    intro: "You're handling protected health information (PHI) and need to ensure your systems are HIPAA compliant. You need an expert who understands the Security Rule, Privacy Rule, and Breach Notification Rule, and can translate those requirements into technical and administrative controls.",
    pains: [],
    evaluation: ['Technical safeguards (access control, encryption)', 'Physical and administrative safeguards', 'Business Associate Agreements (BAAs)', 'Risk analysis and management', 'Breach notification procedures']
  },
  'grpc': {
    name: 'gRPC',
    category: 'APIs & Backend Services',
    categorySlug: 'backend-services',
    intro: "You need high-performance, low-latency communication between your microservices. You need a gRPC expert who can design efficient Protobuf schemas, leverage different RPC types (unary, streaming), and handle metadata and error handling effectively.",
    pains: [],
    evaluation: ['Protobuf schema design and best practices', 'Unary vs. streaming RPCs', 'Interceptors for middleware (logging, auth)', 'Error handling and status codes', 'Performance tuning and load balancing']
  }
};

type TechKeys = keyof typeof allTech;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tech = allTech[params.slug as TechKeys];
  const techName = tech?.name || 'Technology';
  return {
    title: `Hire Nearshore ${techName} Developers | TeamStation AI`,
    description: `Hire elite, pre-vetted LATAM engineers with expertise in ${techName}. Our scientific evaluation process de-risks hiring for critical roles in your tech stack.`,
    keywords: `hire nearshore ${techName} developers, latam ${techName} engineers, ${techName} staff augmentation`,
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
                            <h4 className="font-semibold text-primary">The TeamStation AI Solution</h4>
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
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
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
