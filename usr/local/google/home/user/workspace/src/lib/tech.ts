

import { Code, Database, BrainCircuit, GanttChartSquare, TestTube2, ShieldCheck, Server, Wallet, Layers, Component, Plane, AlertTriangle } from 'lucide-react';
import type { ReactNode } from 'react';

export interface Tech {
  name: string;
  slug: string;
}

export interface TechCategory {
  name: string;
  slug: string;
  pain: string;
  icon: React.ElementType;
  tech: Tech[];
}

export interface AllTech {
  [key: string]: {
    name: string;
    category: string;
    categorySlug: string;
    intro: string;
    pains: {
      icon: React.ElementType;
      pain: string;
      problem: string;
      solution: string;
      kpi: string;
    }[];
    evaluation: string[];
  }
}

export const allTech: AllTech = {
  'react': { 
    name: 'React/TypeScript', 
    category: 'Frontend & UI/UX', 
    categorySlug: 'frontend-web',
    intro: "You're not here because you need another developer who 'knows React.' You're here because your application feels sluggish, your state management is a tangled mess, and your component library is a collection of one-off hacks. You need a true React expert who obsesses over performance, architecture, and user experience as much as you do.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your app slow because of endless re-renders?",
            problem: "Many 'senior' React developers don't profile their code, leading to slow, janky UIs that frustrate users and kill conversion rates.",
            solution: "Our engineers are vetted for their deep understanding of the React render cycle. They master performance tools to hunt down bottlenecks and use techniques like memoization and virtualization to ensure a buttery-smooth experience.",
            kpi: "Expertise in React Profiler & why-did-you-render"
        },
        {
            icon: AlertTriangle,
            pain: "Is your state management a spaghetti of props and contexts?",
            problem: "Legacy patterns and a poor grasp of server-side state lead to complex, bug-prone applications that are a nightmare to maintain and scale.",
            solution: "We select for expertise in modern state management, separating client state (e.g., Zustand) from server cache (e.g., TanStack Query) for a simpler, more resilient architecture.",
            kpi: "Proven ability to architect scalable state"
        },
        {
            icon: AlertTriangle,
            pain: "Is your component library just a folder of inconsistent parts?",
            problem: "Without strong API design and accessibility standards, your component library becomes a source of tech debt, not a force multiplier.",
            solution: "We hire for strong component API design, accessibility (ARIA), and experience with tools like Storybook. You get a robust, reusable design system, not just a UI that 'looks right.'",
            kpi: "Focus on reusable & accessible components"
        }
    ],
    evaluation: ['Advanced hooks', 'State management (Zustand/Redux)', 'Component API design', 'Performance profiling'] 
  },
  'typescript': { 
    name: 'TypeScript', 
    category: 'Frontend & UI/UX', 
    categorySlug: 'frontend-web',
    intro: "You're tired of `any` types and runtime errors that should have been caught at compile time. You need more than just a JavaScript developer; you need a TypeScript expert who can leverage the full power of the type system to build safer, more maintainable, and self-documenting code.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your codebase littered with `any` types?",
            problem: "Using `any` is a viral infection that negates the entire purpose of TypeScript, letting errors slip through to runtime and making refactoring a dangerous guessing game.",
            solution: "We vet for engineers who can write precise, effective types using advanced features like generics, conditional types, and mapped types to create a truly type-safe codebase.",
            kpi: "Mastery of advanced TypeScript patterns"
        },
        {
            icon: AlertTriangle,
            pain: "Are you struggling to type complex third-party libraries?",
            problem: "Integrating untyped or poorly typed libraries introduces holes in your type safety.",
            solution: "Our engineers are skilled at writing custom declaration files (`.d.ts`) and using declaration merging to provide strong types for even the most complex JavaScript libraries.",
            kpi: "Expertise in custom type declarations"
        },
        {
            icon: AlertTriangle,
            pain: "Is your build process slow due to TypeScript compilation?",
            problem: "A poorly configured `tsconfig.json` or an inefficient build setup can make TypeScript a bottleneck.",
            solution: "We look for engineers who understand how to optimize the TypeScript compiler and build process, using project references and modern tools like Vite or esbuild to ensure a fast feedback loop.",
            kpi: "Proficiency in optimizing the TS build process"
        }
    ],
    evaluation: ['Advanced types (generics, conditional types)', 'Compiler configuration (tsconfig.json)', 'Declaration files and module augmentation', 'Type inference and narrowing', 'Integration with modern build tools'] 
  },
  'node': { 
    name: 'Node.js', 
    category: 'APIs & Backend Services', 
    categorySlug: 'backend-services', 
    intro: "You're not looking for someone who just wrote a few Express routes. You're here because you need an engineer who understands how to build high-throughput, non-blocking APIs that can handle real-world scale without falling over. You need someone who has tamed the event loop, not just heard of it.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your API blocking the event loop and causing slowdowns?",
            problem: "Many Node.js developers don't truly understand its single-threaded, non-blocking nature, leading to slow, synchronous code that negates Node's primary advantage.",
            solution: "We vet for a deep understanding of the event loop, libuv, and asynchronous patterns. Our engineers build truly non-blocking services that maximize throughput.",
            kpi: "Deep event loop & async pattern mastery"
        },
        {
            icon: AlertTriangle,
            pain: "Are you struggling with unhandled promise rejections and memory leaks?",
            problem: "Improper error handling and memory management in a long-running Node.js process can lead to crashes and instability.",
            solution: "Our evaluation includes scenarios on robust error handling, promise chains, and using tools like Heapdump to diagnose memory leaks, ensuring service reliability.",
            kpi: "Expertise in memory profiling & error handling"
        },
        {
            icon: AlertTriangle,
            pain: "Is your Express/Fastify app an unstructured mess?",
            problem: "Without a framework or architectural pattern, Node.js applications can quickly become hard to maintain and scale.",
            solution: "We look for experience with modern frameworks like NestJS or Fastify, which enforce structure, dependency injection, and modularity, leading to cleaner, more scalable codebases.",
            kpi: "Experience with modern, structured frameworks"
        }
    ], 
    evaluation: ['Deep event loop knowledge', 'Async/await & Promise patterns', 'Experience with NestJS/Fastify', 'API security best practices (rate limiting, input validation)', 'Performance tuning & memory profiling'] 
  },
  'python': { 
    name: 'Python', 
    category: 'APIs & Backend Services', 
    categorySlug: 'backend-services', 
    intro: "You need more than a data scientist who can write a script. You need a software engineer who can build robust, production-grade Python services. You're here because you need someone who understands the difference between a notebook and a scalable API—someone who can build systems that are maintainable, testable, and ready for prime time.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your Django/FastAPI app slow due to inefficient database queries?",
            problem: "A common pitfall is the N+1 query problem, where the ORM makes numerous unnecessary database calls, killing performance.",
            solution: "We test for deep ORM knowledge, including how to use tools like `select_related` and `prefetch_related` (Django) to write highly efficient, optimized database queries.",
            kpi: "Mastery of ORM query optimization"
        },
        {
            icon: AlertTriangle,
            pain: "Are you struggling with dependency conflicts and 'works on my machine' issues?",
            problem: "Poor dependency management leads to fragile environments that are difficult to replicate and deploy reliably.",
            solution: "Our engineers are experts in modern Python packaging and dependency management tools like Poetry or PDM, ensuring reproducible builds and stable deployments.",
            kpi: "Expertise in modern dependency management"
        },
        {
            icon: AlertTriangle,
            pain: "Is your API server blocking on I/O-bound tasks?",
            problem: "Using a traditional WSGI server for I/O-heavy tasks can lead to poor performance. Developers need to understand modern asynchronous servers.",
            solution: "We vet for experience with ASGI servers (like Uvicorn) and async-native frameworks (like FastAPI), ensuring your services are built for high-concurrency workloads.",
            kpi: "Experience with ASGI & async frameworks"
        }
    ], 
    evaluation: ['WSGI/ASGI server experience', 'ORM mastery (SQLAlchemy/Django ORM)', 'Experience with FastAPI/Django', 'Concurrency models (asyncio, threading, multiprocessing)', 'Packaging and dependency management'] 
  },
  'java': { 
    name: 'Java', 
    category: 'APIs & Backend Services', 
    categorySlug: 'backend-services', 
    intro: "Finding a true Java expert in a sea of enterprise developers can feel impossible. You're here because you need someone who not only knows the syntax but who thinks in terms of the JVM. You need an engineer who understands how to build resilient, high-performance, and scalable systems using modern Java frameworks, not just legacy J2EE.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your Spring Boot application slow to start and heavy on memory?",
            problem: "Over-reliance on auto-configuration and classpath scanning without understanding the internals can lead to bloated, slow applications.",
            solution: "We look for engineers who understand the Spring lifecycle and can optimize applications, potentially using newer technologies like GraalVM for native compilation.",
            kpi: "Knowledge of Spring optimization & GraalVM"
        },
        {
            icon: AlertTriangle,
            pain: "Are you plagued by 'Out Of Memory' errors in production?",
            problem: "A lack of understanding of JVM garbage collection and memory tuning is a common cause of instability in high-throughput Java applications.",
            solution: "Our evaluation assesses a candidate's practical knowledge of JVM tuning, garbage collection algorithms (like G1GC), and how to use profiling tools (like JVisualVM) to diagnose memory issues.",
            kpi: "Practical JVM tuning & memory profiling skills"
        },
        {
            icon: AlertTriangle,
            pain: "Are your microservices failing due to network issues and cascading failures?",
            problem: "Building distributed systems without proper resiliency patterns is a recipe for disaster.",
            solution: "We vet for experience with modern microservice patterns and libraries (like Resilience4j or Spring Cloud Circuit Breaker) to build fault-tolerant systems that can withstand network failures.",
            kpi: "Expertise in microservice resiliency patterns"
        }
    ], 
    evaluation: ['Modern Spring Boot expertise (actuators, auto-configuration)', 'JVM tuning fundamentals', 'Hibernate/JPA and N+1 problem solving', 'Microservice patterns (service discovery, circuit breakers)', 'Concurrency and multithreading concepts'] 
  },
  'go': { 
    name: 'Go', 
    category: 'APIs & Backend Services', 
    categorySlug: 'backend-services', 
    intro: "You're not just hiring for a language; you're hiring for a philosophy. You need a Go engineer who values simplicity, performance, and concurrency. You're here because you need systems that are fast, reliable, and easy to maintain, and you know that requires a developer who has truly mastered goroutines, channels, and Go's standard library.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are you dealing with deadlocks and race conditions?",
            problem: "Go's concurrency primitives are powerful but can be misused, leading to subtle and hard-to-debug concurrency issues.",
            solution: "We evaluate a candidate's deep understanding of channels, mutexes, and goroutine lifecycle management. We look for proficiency with Go's race detector to build safe concurrent programs.",
            kpi: "Mastery of safe concurrency patterns"
        },
        {
            icon: AlertTriangle,
            pain: "Is your error handling a maze of `if err != nil` checks?",
            problem: "Go's explicit error handling can lead to verbose and hard-to-read code if not handled with clear patterns.",
            solution: "We look for engineers who can demonstrate clean error handling strategies, such as wrapping errors for context and creating custom error types, leading to more maintainable code.",
            kpi: "Clean and idiomatic error handling"
        },
        {
            icon: AlertTriangle,
            pain: "Are your interfaces too large and your code too coupled?",
            problem: "A common mistake is to define large interfaces, violating Go's principle of 'accept interfaces, return structs.'",
            solution: "Our evaluation focuses on idiomatic Go, assessing a candidate's ability to use small, focused interfaces to write clean, decoupled, and highly testable code.",
            kpi: "Proficiency in idiomatic Go interface design"
        }
    ], 
    evaluation: ['Mastery of goroutines and channels', 'Standard library proficiency', 'Experience with Gin/Fiber for web services', 'Clean interface design and composition', 'Error handling best practices'] 
  },
  'net': { 
    name: '.NET', 
    category: 'APIs & Backend Services', 
    categorySlug: 'backend-services', 
    intro: "You need to move beyond legacy .NET Framework projects. You're looking for an expert in modern, cross-platform .NET who can build high-performance, cloud-native applications. You need someone who lives in ASP.NET Core, understands EF Core deeply, and can leverage the full power of the Azure ecosystem.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are you stuck on the legacy .NET Framework, unable to move to the cloud?",
            problem: "Migrating from .NET Framework to modern .NET is a complex process, and many developers lack the skills to do it effectively.",
            solution: "We find engineers with proven experience in modern, cross-platform .NET, who can help you migrate legacy applications and build new cloud-native services on ASP.NET Core.",
            kpi: "Expertise in modern ASP.NET Core"
        },
        {
            icon: AlertTriangle,
            pain: "Is your Entity Framework performance slow due to inefficient queries?",
            problem: "EF Core is powerful, but it's easy to write LINQ queries that translate to monstrously complex SQL and kill application performance.",
            solution: "We vet for deep expertise in EF Core, including the ability to analyze generated SQL, optimize LINQ queries, and use features like compiled queries for maximum performance.",
            kpi: "Advanced LINQ & EF Core optimization"
        },
        {
            icon: AlertTriangle,
            pain: "Are your Azure costs spiraling out of control?",
            problem: "Using Azure services without a deep understanding of their pricing models and capabilities can lead to massive cost overruns.",
            solution: "We look for engineers with practical experience in the Azure ecosystem who can choose the right service for the job (e.g., Functions vs. App Service) and optimize for cost and performance.",
            kpi: "Experience with Azure cost optimization"
        }
    ], 
    evaluation: ['Modern ASP.NET Core patterns (middleware, DI)', 'Entity Framework Core mastery', 'Advanced LINQ proficiency', 'Azure service integrations (Functions, App Service)', 'Performance tuning and diagnostics'] 
  },
  'ruby': {
    name: 'Ruby on Rails',
    category: 'APIs & Backend Services',
    categorySlug: 'backend-services',
    intro: "You're not just maintaining a Rails app; you're trying to scale one. You need an engineer who appreciates the 'Rails Way' but also knows when to deviate for performance. You're here because you need an expert who can optimize ActiveRecord, manage background jobs effectively, and ensure your mature codebase remains a competitive advantage, not a liability.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your app slow due to N+1 queries from ActiveRecord?",
            problem: "The convenience of the Rails ORM often leads to massive performance bottlenecks as developers fetch data inefficiently in loops.",
            solution: "We find engineers who are masters of ActiveRecord optimization, using tools like `includes`, `eager_load`, and the Bullet gem to hunt down and eliminate N+1 queries.",
            kpi: "Deep ActiveRecord optimization skills"
        },
        {
            icon: AlertTriangle,
            pain: "Are your background jobs failing or getting stuck?",
            problem: "Managing Sidekiq or Resque at scale requires a deep understanding of idempotency, retries, and monitoring to ensure reliability.",
            solution: "We vet for experience in building robust background job processing systems, ensuring your asynchronous tasks are reliable and fault-tolerant.",
            kpi: "Expertise in reliable background job processing"
        },
        {
            icon: AlertTriangle,
            pain: "Is your large Rails monolith becoming impossible to maintain?",
            problem: "Without discipline, 'fat models' and tangled dependencies can grind development to a halt.",
            solution: "We look for engineers with experience in modularizing large Rails applications, using techniques like service objects or even breaking out engines to manage complexity.",
            kpi: "Experience with modularizing Rails monoliths"
        }
    ],
    evaluation: ['Deep ActiveRecord knowledge (scoping, includes/joins)', 'Background job processing (Sidekiq, Resque)', 'Performance tuning (database indexing, caching)', 'Modern Rails practices (Hotwire, Stimulus)', 'Testing with RSpec and Capybara']
  },
  'php': {
    name: 'PHP (Laravel/Symphony)',
    category: 'APIs & Backend Services',
    categorySlug: 'backend-services',
    intro: "You're not running a simple WordPress site. You're running a sophisticated application on a modern PHP framework like Laravel or Symphony, and you need an engineer who respects the craft. You're here because you need an expert who can leverage PHP's modern features, build robust systems with its powerful ecosystem (Composer, PHPUnit), and write clean, maintainable, and performant code.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your app stuck on an old, insecure version of PHP?",
            problem: "Many developers lack the skills or discipline to keep up with the modern PHP ecosystem, leaving applications vulnerable and slow.",
            solution: "We find engineers who are experts in modern PHP (8+) and its features, able to build secure, performant applications and migrate legacy code safely.",
            kpi: "Proficiency in modern PHP (8+) features"
        },
        {
            icon: AlertTriangle,
            pain: "Is your Laravel/Symfony application poorly structured and hard to test?",
            problem: "Putting all logic in controllers and routes leads to 'fat controllers' and a codebase that is difficult to maintain and test.",
            solution: "We vet for deep framework knowledge, including the use of service containers, dependency injection, and proper architectural patterns (like repositories) to build clean, testable applications.",
            kpi: "Deep framework & architectural pattern knowledge"
        },
        {
            icon: AlertTriangle,
            pain: "Are you struggling with slow database queries from your ORM?",
            problem: "Like in other frameworks, the convenience of Eloquent or Doctrine can lead to severe N+1 query problems if not used carefully.",
            solution: "We look for engineers who are masters of ORM optimization, able to use eager loading and other techniques to write efficient database queries and prevent performance bottlenecks.",
            kpi: "Expertise in ORM performance optimization"
        }
    ],
    evaluation: ['Modern PHP features (PHP 8+)', 'Deep framework knowledge (Laravel or Symfony)', 'ORM proficiency (Eloquent, Doctrine)', 'Composer for dependency management', 'Testing with PHPUnit/Pest']
  },
  'aws': {
    name: 'AWS',
    category: 'Platform / Infra / SRE',
    categorySlug: 'platform-infra-sre',
    intro: "Your AWS bill is climbing, but your reliability isn't. You need an engineer who is a true AWS expert, not just someone who has clicked through the console. You need someone who can architect for resilience, automate with the CDK or Terraform, and optimize for cost.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your AWS bill a mystery that keeps growing?",
            problem: "Without a deep understanding of AWS pricing and services, costs can spiral out of control. Many engineers don't know how to architect for cost.",
            solution: "We find experts in AWS cost management who can use tools like Cost Explorer, set up budgets, and make architectural decisions (e.g., Graviton instances, Spot) to dramatically reduce your bill.",
            kpi: "Proven AWS cost optimization skills"
        },
        {
            icon: AlertTriangle,
            pain: "Are you building your infrastructure by hand in the console?",
            problem: "Manual infrastructure management is slow, error-prone, and impossible to replicate, leading to configuration drift and outages.",
            solution: "Our engineers are masters of Infrastructure as Code (IaC) using tools like the AWS CDK, Terraform, or CloudFormation to build automated, testable, and repeatable infrastructure.",
            kpi: "Mastery of Infrastructure as Code (IaC)"
        },
        {
            icon: AlertTriangle,
            pain: "Is your application vulnerable to a single-zone failure?",
            problem: "Many applications are not designed for high availability, putting them at risk of a complete outage if a single AWS Availability Zone fails.",
            solution: "We vet for expertise in designing resilient, multi-AZ architectures, using services like Auto Scaling Groups, Elastic Load Balancing, and RDS Multi-AZ to ensure high availability.",
            kpi: "Expertise in building resilient, multi-AZ systems"
        }
    ],
    evaluation: ['Core services mastery (EC2, S3, IAM, VPC)', 'Serverless architecture (Lambda, API Gateway, DynamoDB)', 'Container orchestration (EKS, ECS)', 'Infrastructure as Code (CDK, Terraform, CloudFormation)', 'Cost management and optimization']
  },
  'kubernetes': { 
    name: 'Kubernetes', 
    category: 'Pipelines & Orchestration', 
    categorySlug: 'platform-infra-sre', 
    intro: "You've adopted Kubernetes, but now you're drowning in YAML and complexity. You're here because you need an engineer who is a true K8s expert, not just someone who has used it. You need someone who can build custom controllers, design a secure networking strategy, and manage resources effectively to run a stable, scalable, and cost-efficient platform.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are your pods constantly getting OOMKilled or crashing?",
            problem: "Incorrectly configured resource requests and limits are a primary cause of instability in Kubernetes, leading to unreliable applications.",
            solution: "We vet for a deep understanding of Kubernetes resource management and scheduling, ensuring your applications are stable and use cluster resources efficiently.",
            kpi: "Mastery of K8s resource management"
        },
        {
            icon: AlertTriangle,
            pain: "Is your cluster networking a black box of security risks?",
            problem: "By default, all pods can talk to each other, creating a massive security hole. Managing ingress and service-to-service traffic is complex.",
            solution: "Our engineers are experts in Kubernetes networking, including CNI, Ingress controllers, and implementing NetworkPolicies to create a secure, zero-trust network environment.",
            kpi: "Expertise in secure Kubernetes networking"
        },
        {
            icon: AlertTriangle,
            pain: "Are you spending too much time on manual operational tasks?",
            problem: "Without automation, managing a Kubernetes cluster is a full-time job. Many teams get bogged down in repetitive manual tasks.",
            solution: "We look for engineers who have experience building automation on top of Kubernetes, often by writing custom controllers (Operators) to automate complex operational logic.",
            kpi: "Experience with the Operator pattern for automation"
        }
    ], 
    evaluation: ['Resource management (requests/limits) and scheduling', 'Custom controllers/operators pattern', 'Networking (CNI, Ingress, service-to-service)', 'Service mesh integration (Istio/Linkerd)', 'Security (PodSecurityPolicies, RBAC, network policies)'] 
  },
  'docker': { 
    name: 'Docker', 
    category: 'Pipelines & Orchestration', 
    categorySlug: 'platform-infra-sre', 
    intro: "Your 'it works on my machine' problems are grinding development to a halt, and your container images are bloated and insecure. You need an engineer who has mastered Docker, someone who can create optimized, multi-stage builds, implement security scanning, and streamline your local development environment with Compose. You're here to build a solid foundation for your containerized applications.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are your Docker images huge and slow to build/pull?",
            problem: "Inefficient Dockerfiles with bloated layers and unnecessary build dependencies slow down your CI/CD pipeline and increase storage costs.",
            solution: "We find engineers who are experts in creating optimized, multi-stage Docker builds that are small, secure, and fast.",
            kpi: "Mastery of multi-stage builds for optimization"
        },
        {
            icon: AlertTriangle,
            pain: "Are you shipping images with known vulnerabilities?",
            problem: "Failing to scan container images for security vulnerabilities is a massive and unnecessary risk.",
            solution: "Our evaluation includes integrating image security scanning tools (like Trivy or Snyk) directly into the CI/CD pipeline to catch vulnerabilities before they are deployed.",
            kpi: "Expertise in CI/CD integrated security scanning"
        },
        {
            icon: AlertTriangle,
            pain: "Is your local development setup a complex, inconsistent nightmare?",
            problem: "When developers can't easily run the full application stack locally, productivity plummets and integration bugs multiply.",
            solution: "We look for engineers who can create clean, maintainable Docker Compose configurations that allow for a one-command local startup of the entire application.",
            kpi: "Proficiency in Docker Compose for local dev"
        }
    ], 
    evaluation: ['Multi-stage builds for optimization', 'Image size reduction techniques', 'Image security scanning and vulnerability management', 'Docker Compose for local development environments', 'Understanding of container networking and storage'] 
  },
  'terraform': { 
    name: 'Terraform/Pulumi', 
    category: 'Observability & SRE', 
    categorySlug: 'platform-infra-sre', 
    intro: "Your infrastructure is a collection of manually-created resources and shell scripts, making it impossible to manage or replicate. You need an Infrastructure as Code (IaC) expert. You're here to find an engineer who has mastered Terraform or Pulumi to build modular, reusable, and testable infrastructure code that makes your platform reliable and scalable.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your infrastructure impossible to replicate across environments?",
            problem: "Manual infrastructure creation leads to configuration drift, making it impossible to create consistent dev, staging, and production environments.",
            solution: "We vet for mastery of IaC principles, ensuring engineers can write modular, reusable code (e.g., Terraform modules) that can be reliably deployed anywhere.",
            kpi: "Expertise in modular and reusable IaC"
        },
        {
            icon: AlertTriangle,
            pain: "Are you managing your Terraform state file on your laptop?",
            problem: "Local state management is a recipe for disaster, leading to conflicts, lost state, and security risks.",
            solution: "Our evaluation requires knowledge of remote state management best practices, using backends like S3 or Terraform Cloud to ensure state is managed securely and collaboratively.",
            kpi: "Mastery of remote state management"
        },
        {
            icon: AlertTriangle,
            pain: "Are infrastructure changes a high-risk, manual process?",
            problem: "Running `terraform apply` from a local machine is risky and lacks an audit trail.",
            solution: "We look for engineers who can integrate IaC into a CI/CD pipeline (e.g., with GitHub Actions), automating the plan and apply cycle with proper approvals and guardrails.",
            kpi: "Experience with CI/CD for automated IaC"
        }
    ], 
    evaluation: ['Modular and reusable code (modules, components)', 'State management and remote backends', 'Testing strategies for infrastructure (e.g., Terratest)', 'Drift detection and remediation strategies', 'CI/CD integration for automated infrastructure deployment'] 
  },
  'github-actions': {
    name: 'GitHub Actions',
    category: 'Platform / Infra / SRE',
    categorySlug: 'platform-infra-sre',
    intro: "Your CI/CD pipeline is slow, flaky, and a black box to most of your developers. You need an expert who can harness the full power of GitHub Actions to create fast, reliable, and secure build, test, and deployment workflows.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are your CI workflows a copy-paste mess?",
            problem: "Duplicated YAML across repositories makes workflows hard to maintain and update, leading to inconsistency and tech debt.",
            solution: "We look for engineers who can create reusable workflows and composite actions, centralizing logic and making your CI process DRY (Don't Repeat Yourself).",
            kpi: "Expertise in reusable workflows & composite actions"
        },
        {
            icon: AlertTriangle,
            pain: "Are you storing secrets directly in GitHub?",
            problem: "Plain-text secrets or even GitHub's encrypted secrets can be a security risk. You need a way to fetch secrets dynamically at runtime.",
            solution: "We vet for expertise in using OIDC (OpenID Connect) to securely connect GitHub Actions to a cloud provider (like AWS or GCP) and fetch temporary credentials, eliminating long-lived secrets.",
            kpi: "Mastery of secure OIDC integration for secrets"
        },
        {
            icon: AlertTriangle,
            pain: "Is your CI bill getting expensive and your builds slow?",
            problem: "Inefficient workflows with no caching can lead to long build times and high costs for GitHub-hosted runners.",
            solution: "Our engineers are skilled in optimizing workflows, using caching for dependencies and build layers to dramatically speed up builds and reduce costs.",
            kpi: "Proficiency in advanced caching strategies"
        }
    ],
    evaluation: ['Reusable workflows and composite actions', 'Secrets management and OIDC integration', 'Self-hosted vs. GitHub-hosted runners', 'Caching strategies for performance', 'Matrix builds for multi-platform testing']
  },
  'istio': { 
    name: 'Istio/Linkerd', 
    category: 'Observability & SRE', 
    categorySlug: 'platform-infra-sre', 
    intro: "Your microservices are a black box, and you have no control over traffic or security between them. You need a service mesh expert. You're here to find an engineer who can implement Istio or Linkerd to provide traffic management (canary releases, retries), mutual TLS security, and deep observability without changing application code.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are your service-to-service communications unencrypted and insecure?",
            problem: "In a Kubernetes cluster, traffic between services is often unencrypted by default, creating a major internal security vulnerability.",
            solution: "We find experts who can implement a service mesh to enforce strict mutual TLS (mTLS) for all internal traffic, creating a secure, zero-trust network.",
            kpi: "Experience with enforcing mTLS at scale"
        },
        {
            icon: AlertTriangle,
            pain: "Are your deployments high-risk, all-or-nothing events?",
            problem: "Traditional deployments risk a full-scale outage if a bug is introduced.",
            solution: "Our engineers use service mesh traffic management features to implement sophisticated canary deployments, gradually shifting traffic to the new version and automatically rolling back if errors increase.",
            kpi: "Mastery of advanced canary release patterns"
        },
        {
            icon: AlertTriangle,
            pain: "When a service fails, are you debugging in the dark?",
            problem: "In a complex microservices graph, it's nearly impossible to trace a single request and identify the source of latency or errors.",
            solution: "We look for engineers who can leverage a service mesh's deep observability features to provide distributed tracing, service-level metrics (e.g., golden signals), and a real-time topology graph.",
            kpi: "Expertise in service mesh observability"
        }
    ], 
    evaluation: ['Traffic management (e.g., canary deployments, retries)', 'Mutual TLS (mTLS) and security policy enforcement', 'Telemetry and observability features', 'Performance overhead analysis', 'Debugging and troubleshooting the data plane and control plane'] 
  },
  'prometheus': { 
    name: 'Prometheus', 
    category: 'Observability & SRE', 
    categorySlug: 'platform-infra-sre', 
    intro: "Your systems are failing, but your monitoring isn't telling you until it's too late. You need an engineer who is a master of Prometheus, someone who can write powerful PromQL queries, design effective alerting rules, and build a scalable, high-availability monitoring setup. You're here to build a proactive observability platform, not a reactive one.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are you getting paged for false alarms or missing real outages?",
            problem: "Poorly designed alerting rules create alert fatigue and erode trust in the monitoring system.",
            solution: "We find engineers who are masters of PromQL and can design high-signal, low-noise alerting rules based on SLOs and error budgets, not just simple CPU thresholds.",
            kpi: "Expertise in SLO-based alerting"
        },
        {
            icon: AlertTriangle,
            pain: "Is your Prometheus server constantly falling over or losing data?",
            problem: "A single Prometheus instance is not scalable or highly available for a production environment.",
            solution: "Our evaluation looks for experience with scalable Prometheus architectures, using tools like Thanos or Cortex to provide high availability and long-term storage.",
            kpi: "Experience with scalable Prometheus (Thanos/Cortex)"
        },
        {
            icon: AlertTriangle,
            pain: "Do you lack visibility into your custom applications?",
            problem: "Without proper instrumentation, your applications are a black box to your monitoring system.",
            solution: "We vet for engineers who can not only configure Prometheus but also instrument applications with client libraries to expose custom, business-relevant metrics.",
            kpi: "Proficiency in application instrumentation"
        }
    ], 
    evaluation: ['Advanced PromQL proficiency (aggregations, functions, joins)', 'Instrumentation best practices (application & infrastructure)', 'Alerting rule design and Alertmanager configuration', 'High-availability and long-term storage solutions (Thanos, Cortex)', 'Custom exporter development'] 
  },
  'opentelemetry': { 
    name: 'OpenTelemetry', 
    category: 'Observability & SRE', 
    categorySlug: 'platform-infra-sre', 
    intro: "You have metrics, logs, and traces, but they're all in separate silos. You're here because you need a unified observability strategy. You need an engineer who is an expert in OpenTelemetry, someone who can implement instrumentation, configure the collector, and manage context propagation to provide a complete picture of your system's behavior.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are you locked into your current observability vendor?",
            problem: "Proprietary instrumentation agents make it difficult and expensive to switch observability platforms.",
            solution: "We find engineers who are experts in OpenTelemetry, the open standard for instrumentation, allowing you to avoid vendor lock-in and maintain control of your data.",
            kpi: "Commitment to vendor-agnostic observability"
        },
        {
            icon: AlertTriangle,
            pain: "When an error occurs, do you have to manually correlate logs, metrics, and traces?",
            problem: "Siloed observability data makes it slow and difficult to debug production issues.",
            solution: "Our engineers can implement OpenTelemetry to automatically correlate signals, ensuring that your traces are linked to logs and metrics, dramatically reducing MTTR (Mean Time to Resolution).",
            kpi: "Expertise in automatic signal correlation"
        },
        {
            icon: AlertTriangle,
            pain: "Is your telemetry data too noisy or too expensive?",
            problem: "Collecting everything from every service is prohibitively expensive and often leads to low-signal data.",
            solution: "We vet for experience with advanced OpenTelemetry Collector configurations, including sampling strategies and data processing to reduce noise and control costs.",
            kpi: "Experience with advanced collector configurations"
        }
    ], 
    evaluation: ['Auto vs. manual instrumentation trade-offs', 'Collector configuration (pipelines, processors, exporters)', 'Sampling strategies for cost and performance', 'Context propagation across services', 'Vendor-agnostic observability principles'] 
  },
  'jaeger': { 
    name: 'Jaeger/Loki', 
    category: 'Observability & SRE', 
    categorySlug: 'platform-infra-sre', 
    intro: "When a request fails, you're stuck searching through terabytes of unstructured logs. You need an engineer who can use tools like Jaeger for distributed tracing and Loki for log aggregation to quickly diagnose and solve problems in a complex microservices environment. You're here to find an expert who can turn your logs and traces into a powerful debugging tool.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Can you trace a single user's request across all your microservices?",
            problem: "Without distributed tracing, diagnosing latency or errors in a microservices architecture is nearly impossible.",
            solution: "We find engineers who are experts in implementing and analyzing distributed traces with Jaeger, allowing you to visualize the entire lifecycle of a request and pinpoint bottlenecks.",
            kpi: "Mastery of distributed tracing analysis"
        },
        {
            icon: AlertTriangle,
            pain: "Is your logging bill out of control?",
            problem: "Traditional logging solutions that index the full content of logs are incredibly expensive at scale.",
            solution: "Our engineers are experienced with modern logging solutions like Loki, which indexes only metadata, making it dramatically more cost-effective to store and query large volumes of logs.",
            kpi: "Experience with cost-effective logging (Loki)"
        },
        {
            icon: AlertTriangle,
            pain: "When you find an error trace, do you still have to manually search for the logs?",
            problem: "A lack of correlation between traces and logs means you still have to do the painful manual work of connecting the dots during an incident.",
            solution: "We look for engineers who can configure systems to automatically inject trace IDs into logs, allowing you to jump from a slow span in Jaeger directly to the relevant logs in Loki with a single click.",
            kpi: "Expertise in trace-log correlation"
        }
    ], 
    evaluation: ['Analyzing distributed traces to find bottlenecks', 'Log correlation with traces and metrics', 'Performance bottleneck identification using traces', 'High-volume data ingestion and storage strategies', 'Querying and filtering in Loki (LogQL)'] 
  },
  'vault': { 
    name: 'Vault', 
    category: 'Security & GRC', 
    categorySlug: 'security-grc', 
    intro: "Your secrets are scattered in environment variables, config files, and code. You're here because you need to centralize and secure your secrets management. You need an engineer who is an expert in HashiCorp Vault, someone who can implement dynamic secrets, manage authentication methods, and write fine-grained policies to enforce least-privilege access to all your sensitive data.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are your database credentials long-lived and exposed?",
            problem: "Static, long-lived secrets are a massive security risk. If one leaks, it provides indefinite access to your systems.",
            solution: "We find engineers who can implement Vault's dynamic secrets engine, which generates ephemeral, on-demand credentials with a short TTL, dramatically reducing your risk exposure.",
            kpi: "Expertise in dynamic secrets management"
        },
        {
            icon: AlertTriangle,
            pain: "Are you struggling to give applications and developers secure access to secrets?",
            problem: "Managing authentication for dozens of services and developers is complex and often leads to overly permissive access.",
            solution: "Our engineers are experts in Vault's auth methods, able to integrate with platforms like Kubernetes or AWS IAM to provide secure, automated, and identity-based access to secrets.",
            kpi: "Mastery of Vault auth methods (K8s, AWS IAM)"
        },
        {
            icon: AlertTriangle,
            pain: "Is your secrets management system a single point of failure?",
            problem: "Running a single Vault server is not suitable for production and puts your entire infrastructure at risk if it fails.",
            solution: "We vet for engineers with experience in set-ting up and managing a high-availability Vault cluster, ensuring your secrets management is as resilient as the rest of your infrastructure.",
            kpi: "Experience with high-availability Vault clusters"
        }
    ], 
    evaluation: ['Secrets engines usage (KV, Database, PKI)', 'Dynamic secrets for ephemeral credentials', 'Auth methods integration (Kubernetes, AWS, OIDC)', 'Policy and ACL management for least privilege', 'High-availability and operational best practices'] 
  },
  'external-secrets': {
    name: 'External Secrets',
    category: 'Security & GRC',
    categorySlug: 'platform-infra-sre',
    intro: "Your Kubernetes secrets are checked into Git or manually managed, creating security risks and operational headaches. You need an expert in External Secrets Operator (ESO) to securely sync secrets from external stores like AWS Secrets Manager or HashiCorp Vault directly into your cluster.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are you checking encrypted secrets into Git and dealing with key management?",
            problem: "Managing GPG keys or KMS access for every developer and CI/CD system to decrypt secrets is a complex operational burden.",
            solution: "We find engineers who can use External Secrets Operator to completely separate secrets from your Git repository, allowing you to manage secrets in a dedicated store and sync them directly to Kubernetes.",
            kpi: "Decoupling secrets from Git"
        },
        {
            icon: AlertTriangle,
            pain: "How do you handle secret rotation for your applications?",
            problem: "Manually updating Kubernetes secrets after a rotation is error-prone and often forgotten, leaving applications with old credentials.",
            solution: "Our engineers can configure ESO to automatically poll for changes in the external secret store and update the Kubernetes secret, ensuring seamless secret rotation for your applications.",
            kpi: "Automated secret rotation"
        },
        {
            icon: AlertTriangle,
            pain: "Are you duplicating secrets across multiple namespaces or clusters?",
            problem: "Managing copies of the same secret (e.g., an image pull secret) across different environments is inefficient and increases risk.",
            solution: "We look for engineers who can leverage ESO's templating and cross-namespace capabilities to manage a single source of truth for a secret and distribute it securely wherever it's needed.",
            kpi: "Centralized, DRY secret management"
        }
    ],
    evaluation: ['Integration with various secret providers (AWS, Vault, GCP)', 'SecretStore and ExternalSecret configuration', 'Templating and data transformation', 'Refresh intervals and caching strategies', 'Security best practices and RBAC for ESO']
  },
  'launchdarkly': {
    name: 'LaunchDarkly/OpenFeature',
    category: 'Platform / Infra / SRE',
    categorySlug: 'platform-infra-sre',
    intro: "Your releases are high-stakes, all-or-nothing events. You need an engineer who can implement feature flagging to de-risk deployments, enable progressive rollouts, and empower product teams to run experiments. You need an expert in a platform like LaunchDarkly and the OpenFeature standard.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is every deployment a high-stress 'big bang' release?",
            problem: "Monolithic deployments create a massive blast radius, where a single bug can cause a full-site outage and require a risky rollback.",
            solution: "We find engineers who can use feature flags to decouple deployment from release, allowing you to merge code to production safely behind a flag and then release it to users with zero risk.",
            kpi: "Decoupling deployment from release"
        },
        {
            icon: AlertTriangle,
            pain: "Are you unable to test new features with real users before a full launch?",
            problem: "Without a way to target specific users, you're flying blind, unable to get feedback or measure the impact of a feature before it's live for everyone.",
            solution: "Our engineers are experts in LaunchDarkly's targeting capabilities, able to implement progressive rollouts (e.g., release to internal users, then 10% of customers) and run A/B tests to make data-driven decisions.",
            kpi: "Expertise in progressive rollouts & A/B testing"
        },
        {
            icon: AlertTriangle,
            pain: "When a bug is found in production, is your only option a full rollback?",
            problem: "A full rollback is a slow, blunt instrument. It often rolls back unrelated good changes along with the bad one.",
            solution: "We look for engineers who can use feature flags as a 'kill switch.' If a flagged feature causes problems, it can be turned off instantly in production for all users, without needing a new deployment.",
            kpi: "Implementing feature flags as a 'kill switch'"
        }
    ],
    evaluation: ['SDK integration (client-side and server-side)', 'Targeting rules and progressive rollouts', 'Experimentation and A/B testing setup', 'The OpenFeature standard and vendor neutrality', 'Performance and reliability considerations']
  },
  'okta': { 
    name: 'Okta/Auth0', 
    category: 'Security & GRC', 
    categorySlug: 'security-grc', 
    intro: "You're building your own authentication system, and it's becoming a complex and risky distraction from your core product. You need an identity expert. You're here to find an engineer who can leverage a platform like Okta or Auth0 to implement secure, scalable, and feature-rich identity management, including SSO, MFA, and user provisioning.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are you spending months building and maintaining your own user authentication?",
            problem: "Building a secure, feature-rich authentication system (password reset, MFA, social logins) is a massive undertaking that distracts from your core business.",
            solution: "We find engineers who are experts in identity platforms like Okta or Auth0, allowing you to outsource your authentication and focus on your product, not on password hashing algorithms.",
            kpi: "Faster time-to-market by outsourcing identity"
        },
        {
            icon: AlertTriangle,
            pain: "Can your enterprise customers sign in with their own SSO?",
            problem: "A lack of enterprise SSO (SAML/OIDC) is a major blocker for selling to large companies, who demand it for security and compliance.",
            solution: "Our engineers can rapidly integrate with any enterprise identity provider using Okta or Auth0's federation capabilities, unblocking your enterprise sales pipeline.",
            kpi: "Expertise in enterprise SSO & federation"
        },
        {
            icon: AlertTriangle,
            pain: "Are you struggling to manage user access across all your applications?",
            problem: "Manual provisioning and de-provisioning of users in multiple systems is slow, error-prone, and a security risk.",
            solution: "We vet for experience with SCIM (System for Cross-domain Identity Management) to automate user provisioning, ensuring access is granted and revoked instantly and correctly.",
            kpi: "Experience with automated user provisioning (SCIM)"
        }
    ], 
    evaluation: ['OIDC/OAuth2 flow implementation and best practices', 'User provisioning (SCIM) and directory integration', 'MFA policy enforcement and adaptive MFA', 'Custom actions/rules for extending functionality', 'API access management'] 
  },
  'oidc': {
    name: 'OIDC/SAML',
    category: 'Security & GRC',
    categorySlug: 'security-grc',
    intro: "Your applications have inconsistent, insecure login mechanisms. You need an expert in modern identity protocols like OpenID Connect (OIDC) and SAML to build a centralized, secure authentication and federation strategy.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is every application on your platform inventing its own login system?",
            problem: "Homegrown authentication is a notorious source of security vulnerabilities and a poor user experience. You need a centralized approach.",
            solution: "We find experts in OIDC and SAML who can help you implement a centralized identity provider, allowing all your applications to use a single, secure, and well-understood login flow.",
            kpi: "Centralized, secure authentication"
        },
        {
            icon: AlertTriangle,
            pain: "Can your enterprise customers use their own identity provider (e.g., Okta, Azure AD) to log in?",
            problem: "Forcing enterprise users to create a separate username and password for your app is a major sales and security obstacle.",
            solution: "Our engineers are masters of identity federation. They can use SAML or OIDC to securely connect your application to your customers' identity providers, enabling seamless and secure SSO.",
            kpi: "Unblocking enterprise sales with identity federation"
        },
        {
            icon: AlertTriangle,
            pain: "Are your mobile and single-page apps using insecure authentication flows?",
            problem: "Using the wrong OAuth 2.0 flow (e.g., implicit flow) can expose your applications to token theft and other attacks.",
            solution: "We vet for a deep understanding of modern security best practices, such as the Authorization Code flow with PKCE, ensuring your applications are using the most secure methods available.",
            kpi: "Expertise in secure OAuth 2.0 flows (PKCE)"
        }
    ],
    evaluation: ['Deep understanding of OAuth2 flows (Auth Code, PKCE)', 'OIDC token types (ID Token, Access Token) and claims', 'SAML assertions and IdP/SP-initiated flows', 'Security best practices (state parameter, nonce)', 'Debugging and troubleshooting federation issues']
  },
  'sops': {
    name: 'SOPS',
    category: 'Security & GRC',
    categorySlug: 'security-grc',
    intro: "You want to commit encrypted secrets to Git, but managing keys is a nightmare. You need an expert in SOPS (Secrets OPerationS) who can set up a secure workflow using KMS, GPG, or age to encrypt secrets at rest while maintaining a clean Git history.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are your secrets stored in plain text or scattered across insecure files?",
            problem: "Storing secrets insecurely is a recipe for a breach. Committing them to Git, even in private repos, is a major risk.",
            solution: "We find engineers who can use SOPS to encrypt secrets files, allowing you to safely store them in Git while ensuring only authorized users and services can decrypt them.",
            kpi: "Securely manage secrets in Git"
        },
        {
            icon: AlertTriangle,
            pain: "Is managing PGP keys for your team becoming a bottleneck?",
            problem: "GPG/PGP is powerful but notoriously difficult to manage, especially for a large team.",
            solution: "Our engineers are experts in using SOPS with cloud-based KMS (Key Management Service) providers like AWS KMS or GCP KMS, eliminating the need for individual PGP keys and simplifying key management.",
            kpi: "Simplified key management with cloud KMS"
        },
        {
            icon: AlertTriangle,
            pain: "How do you give your CI/CD pipeline access to secrets without exposing keys?",
            problem: "Storing decryption keys as environment variables in your CI/CD system is a major security vulnerability.",
            solution: "We vet for engineers who can configure a secure CI/CD workflow where the pipeline is granted a temporary IAM role that allows it to use KMS to decrypt the SOPS file, without ever handling a raw key.",
            kpi: "Secure, keyless CI/CD decryption workflows"
        }
    ],
    evaluation: ['Integration with KMS providers (AWS, GCP)', 'Key management and rotation strategies', 'Git integration and pre-commit hooks', 'CI/CD decryption workflows', 'User access control with GPG or age']
  },
  'codeql': { 
    name: 'CodeQL/Snyk', 
    category: 'Security & GRC', 
    categorySlug: 'security-grc', 
    intro: "Your security vulnerabilities are being discovered in production, not in the pull request. You're here because you need to 'shift left' and integrate security into your CI/CD pipeline. You need an AppSec engineer who can implement SAST/DAST tools like CodeQL, SonarQube, or Snyk to find and fix vulnerabilities before they ever reach production.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are you finding security bugs in production?",
            problem: "Finding vulnerabilities late in the cycle is 100x more expensive to fix and puts your business at risk.",
            solution: "We find AppSec engineers who can integrate Static Application Security Testing (SAST) tools like CodeQL or SonarQube directly into your CI/CD pipeline, catching bugs before they are even merged.",
            kpi: "Shift security left into the CI/CD pipeline"
        },
        {
            icon: AlertTriangle,
            pain: "Are you vulnerable to exploits in your open-source dependencies?",
            problem: "Your application is only as secure as its dependencies. A single vulnerable package can compromise your entire system.",
            solution: "Our engineers are experts in Software Composition Analysis (SCA) tools like Snyk or Trivy, which automatically scan your dependencies for known vulnerabilities and even suggest automated fixes.",
            kpi: "Automated dependency vulnerability scanning"
        },
        {
            icon: AlertTriangle,
            pain: "Are your security scans generating too much noise and false positives?",
            problem: "A noisy scanner that generates hundreds of false positives will be ignored by developers, rendering it useless.",
            solution: "We vet for engineers who have experience tuning and customizing security tools to reduce false positives and create high-signal, actionable security alerts that developers will actually fix.",
            kpi: "Experience in false positive triage and tuning"
        }
    ], 
    evaluation: ['SAST/DAST/SCA integration into CI/CD pipelines', 'False positive triage and tuning', 'Custom rule creation for specific vulnerabilities', 'Dependency scanning and license compliance', 'Reporting and metrics for security posture'] 
  },
  'crowdstrike': {
    name: 'CrowdStrike/Defender',
    category: 'IT / Enterprise Ops',
    categorySlug: 'it-enterprise-ops',
    intro: "You need to protect your endpoints from modern threats, but traditional antivirus isn't enough. You need a security analyst who is an expert in modern Endpoint Detection and Response (EDR) platforms like CrowdStrike Falcon or Microsoft Defender for Endpoint to provide real-time visibility and threat hunting capabilities.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your only endpoint protection a legacy antivirus that misses modern attacks?",
            problem: "Signature-based antivirus is blind to fileless malware, ransomware, and sophisticated attacker techniques.",
            solution: "We find security engineers who are experts in modern EDR platforms that use behavioral AI and threat intelligence to detect and respond to threats that legacy AV can't see.",
            kpi: "Detect and respond to modern threats"
        },
        {
            icon: AlertTriangle,
            pain: "When an alert fires, do you have the visibility to investigate it?",
            problem: "Without rich endpoint telemetry, security teams can't investigate alerts, determine the blast radius, or effectively remediate a threat.",
            solution: "Our engineers can leverage the deep visibility from EDR platforms to perform threat hunting, investigate incidents, and understand the full story of an attack, using frameworks like MITRE ATT&CK.",
            kpi: "Expertise in threat hunting & incident investigation"
        },
        {
            icon: AlertTriangle,
            pain: "Can you remotely contain a compromised endpoint?",
            problem: "During an incident, you need the ability to immediately isolate a compromised machine from the network to stop an attacker from moving laterally.",
            solution: "We look for engineers who are experienced with the response capabilities of EDR platforms, allowing them to remotely contain hosts, kill malicious processes, and remediate threats in real-time.",
            kpi: "Rapid incident response and containment"
        }
    ],
    evaluation: ['Policy management and tuning', 'Threat hunting and incident investigation', 'API integration for automation and SOAR', 'Understanding of MITRE ATT&CK framework', 'Deployment and sensor management']
  },
  'soc': { 
    name: 'SOC 2', 
    category: 'Security & GRC', 
    categorySlug: 'security-grc', 
    intro: "You're trying to sell to enterprise customers, but you can't get past their security review because you don't have a SOC 2 report. You're here because you need a GRC or security engineer who understands how to translate SOC 2 controls into technical implementations, automate evidence collection, and manage the audit process. You need to build a foundation of trust with your customers.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are you losing enterprise deals because you can't pass security reviews?",
            problem: "Enterprise customers require proof of your security posture. Without a SOC 2 report, you are often disqualified before you can even demo your product.",
            solution: "We find engineers who are experienced with the SOC 2 framework and can help you build the technical and procedural controls necessary to pass an audit and unblock enterprise sales.",
            kpi: "Unblock enterprise sales with SOC 2 compliance"
        },
        {
            icon: AlertTriangle,
            pain: "Is preparing for your SOC 2 audit a manual, all-hands-on-deck fire drill?",
            problem: "Manual evidence collection is time-consuming, error-prone, and takes your engineers away from building product.",
            solution: "Our engineers are experienced with compliance automation platforms (e.g., Vanta, Drata) and can help you automate evidence collection, turning your audit from a fire drill into a routine process.",
            kpi: "Automate evidence collection for continuous compliance"
        },
        {
            icon: AlertTriangle,
            pain: "Do you have policies, but no way to prove you're enforcing them?",
            problem: "Auditors don't just want to see your policies; they want to see evidence that they are being enforced consistently.",
            solution: "We look for engineers who can translate policies into technical reality, such as implementing Infrastructure as Code to enforce configuration standards or using MDM to enforce endpoint policies.",
            kpi: "Translate policies into technical controls"
        }
    ], 
    evaluation: ['Mapping Trust Service Criteria to technical controls', 'Evidence collection automation', 'Experience with the audit process (readiness, audit)', 'Policy and procedure documentation', 'Working with auditors and internal stakeholders'] 
  },
  'iso': { 
    name: 'ISO 27001', 
    category: 'Security & GRC', 
    categorySlug: 'security-grc', 
    intro: "You need to demonstrate a commitment to information security management to your enterprise customers and partners. You need an expert who understands the ISO 27001 framework and can help you build an Information Security Management System (ISMS) that meets international standards.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are you losing deals to competitors who are ISO 27001 certified?",
            problem: "For many enterprise and international customers, ISO 27001 certification is a non-negotiable requirement.",
            solution: "We find GRC experts who can guide you through the process of building an ISMS and achieving ISO 27001 certification, unblocking key sales opportunities.",
            kpi: "Achieve ISO 27001 certification to win enterprise deals"
        },
        {
            icon: AlertTriangle,
            pain: "Is your approach to security ad-hoc and reactive?",
            problem: "A reactive security posture means you're always one step behind the attackers.",
            solution: "Our engineers can help you implement a risk-based ISMS, which provides a systematic, proactive approach to managing your organization's information security risks.",
            kpi: "A systematic, risk-based approach to security"
        },
        {
            icon: AlertTriangle,
            pain: "Is your security documentation a mess of scattered, out-of-date documents?",
            problem: "A lack of centralized, up-to-date security documentation makes it impossible to pass an audit or effectively manage your security program.",
            solution: "We look for experts who can help you build the comprehensive documentation required for an ISMS, including the scope, policies, risk assessment, and Statement of Applicability.",
            kpi: "Comprehensive, audit-ready security documentation"
        }
    ], 
    evaluation: ['Understanding of ISMS scope and context', 'Annex A controls and their implementation', 'Risk assessment and treatment methodologies', 'Internal audit and management review processes', 'Continuous improvement and certification lifecycle'] 
  },
  'hipaa': { 
    name: 'HIPAA', 
    category: 'Security & GRC', 
    categorySlug: 'security-grc', 
    intro: "You're handling protected health information (PHI) and need to ensure your systems are HIPAA compliant. You need an expert who understands the Security Rule, Privacy Rule, and Breach Notification Rule, and can translate those requirements into technical and administrative controls.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are you at risk of massive fines for a HIPAA violation?",
            problem: "Handling PHI without proper safeguards is a massive legal and financial risk.",
            solution: "We find compliance experts who can help you implement the necessary technical, physical, and administrative safeguards to ensure you are fully compliant with HIPAA.",
            kpi: "Achieve and maintain HIPAA compliance"
        },
        {
            icon: AlertTriangle,
            pain: "Do you have business associate agreements (BAAs) in place with all your vendors?",
            problem: "If you share PHI with a vendor (like your cloud provider) without a BAA, you are in violation of HIPAA.",
            solution: "Our experts can help you manage your vendor risk and ensure that you have a signed BAA in place with every vendor that handles PHI.",
            kpi: "Comprehensive vendor risk management and BAAs"
        },
        {
            icon: AlertTriangle,
            pain: "Can you prove that you are encrypting PHI at rest and in transit?",
            problem: "Encryption of PHI is a core requirement of the HIPAA Security Rule. You must be able to prove it to an auditor.",
            solution: "We look for engineers who can implement and document the technical controls for encryption, access control, and audit logging required by HIPAA.",
            kpi: "Implementing the required technical safeguards"
        }
    ], 
    evaluation: ['Technical safeguards (access control, encryption)', 'Physical and administrative safeguards', 'Business Associate Agreements (BAAs)', 'Risk analysis and management', 'Breach notification procedures'] 
  },
  'grpc': { 
    name: 'gRPC', 
    category: 'APIs & Backend Services', 
    categorySlug: 'backend-services', 
    intro: "You need high-performance, low-latency communication between your microservices. You need a gRPC expert who can design efficient Protobuf schemas, leverage different RPC types (unary, streaming), and handle metadata and error handling effectively.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are your REST/JSON-based service-to-service calls slow and inefficient?",
            problem: "Text-based JSON payloads are verbose and slow to serialize/deserialize, creating a performance bottleneck for internal communication.",
            solution: "We find engineers who can use gRPC with Protobuf, a binary serialization format, to create highly efficient, low-latency communication channels between your microservices.",
            kpi: "High-performance, low-latency inter-service communication"
        },
        {
            icon: AlertTriangle,
            pain: "Are your APIs lacking a strong, type-safe contract?",
            problem: "REST APIs have no enforceable contract, leading to integration issues and runtime errors.",
            solution: "Our engineers are experts in designing strongly-typed API contracts with Protobuf, which automatically generates type-safe client and server code, catching errors at compile time.",
            kpi: "Strongly-typed, contract-first API design"
        },
        {
            icon: AlertTriangle,
            pain: "Are you unable to build real-time, bi-directional streaming applications?",
            problem: "Traditional request-response APIs are not suitable for real-time streaming use cases.",
            solution: "We look for engineers with experience in gRPC's bi-directional streaming capabilities, allowing you to build sophisticated real-time applications with ease.",
            kpi: "Building real-time apps with bi-directional streaming"
        }
    ], 
    evaluation: ['Protobuf schema design and best practices', 'Unary vs. streaming RPCs', 'Interceptors for middleware (logging, auth)', 'Error handling and status codes', 'Performance tuning and load balancing'] 
  },
  'socketio': { 
    name: 'Socket.IO', 
    category: 'Mobile & Cross-Platform', 
    categorySlug: 'mobile-cross-platform', 
    intro: "You need to build real-time features like chat, notifications, or live updates. You need a Socket.IO expert who understands how to manage connections, handle events, and scale a real-time communication server.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are you struggling to build real-time features with traditional HTTP polling?",
            problem: "HTTP polling is inefficient, slow, and doesn't provide a true real-time experience.",
            solution: "We find engineers who are experts in using Socket.IO (which uses WebSockets with fallbacks) to create persistent, real-time communication channels between the client and server.",
            kpi: "True real-time, bi-directional communication"
        },
        {
            icon: AlertTriangle,
            pain: "How do you broadcast messages to specific groups of users?",
            problem: "You need a way to send messages only to users who are interested in them, such as users in a specific chat room.",
            solution: "Our engineers are proficient in using Socket.IO's 'rooms' feature to efficiently manage and broadcast messages to specific groups of clients.",
            kpi: "Efficient message broadcasting with rooms"
        },
        {
            icon: AlertTriangle,
            pain: "Can your real-time server handle thousands of concurrent connections?",
            problem: "A single Socket.IO server doesn't scale. You need a way to distribute connections across multiple servers.",
            solution: "We look for engineers with experience in scaling Socket.IO horizontally using a Redis adapter, allowing you to handle a massive number of concurrent connections.",
            kpi: "Horizontal scaling for massive concurrency"
        }
    ], 
    evaluation: ['Event handling and emission', 'Room and namespace management', 'Scaling with Redis adapter', 'Authentication and middleware', 'Reconnection logic and reliability'] 
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
