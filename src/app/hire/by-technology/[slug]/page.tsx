
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle, BrainCircuit, ShieldCheck, FileText, Scale, UserX, UserCheck, AlertTriangle, Plane } from 'lucide-react';
import { WithTooltip } from '@/components/ui/tooltip';
import { notFound } from 'next/navigation';
import TypeScriptPSPSection from "@/components/seo/sections/TypeScriptPSPSection";

export const allTech: { 
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
  'typescript': { 
    name: 'TypeScript', 
    category: 'Frontend & UI/UX', 
    categorySlug: 'frontend-web',
    intro: "You're tired of `any` types and runtime errors that should have been caught at compile time. You need more than just a JavaScript developer; you need a TypeScript expert who can leverage the full power of the type system to build safer, more maintainable, and self-documenting code.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your codebase littered with `any` types?",
            problem: "Using `any` is a viral infection that negates the entire purpose of TypeScript, letting errors slip through to runtime and making refactoring a dangerous guessing game.",
            solution: "We vet for engineers who can write precise, effective types using advanced features like generics, conditional types, and mapped types to create a truly type-safe codebase.",
            kpi: "Mastery of advanced TypeScript patterns"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to type complex third-party libraries?",
            problem: "Integrating untyped or poorly typed libraries introduces holes in your type safety.",
            solution: "Our engineers are skilled at writing custom declaration files (`.d.ts`) and using declaration merging to provide strong types for even the most complex JavaScript libraries.",
            kpi: "Expertise in custom type declarations"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your API blocking the event loop and causing slowdowns?",
            problem: "Many Node.js developers don't truly understand its single-threaded, non-blocking nature, leading to slow, synchronous code that negates Node's primary advantage.",
            solution: "We vet for a deep understanding of the event loop, libuv, and asynchronous patterns. Our engineers build truly non-blocking services that maximize throughput.",
            kpi: "Deep event loop & async pattern mastery"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling with unhandled promise rejections and memory leaks?",
            problem: "Improper error handling and memory management in a long-running Node.js process can lead to crashes and instability.",
            solution: "Our evaluation includes scenarios on robust error handling, promise chains, and using tools like Heapdump to diagnose memory leaks, ensuring service reliability.",
            kpi: "Expertise in memory profiling & error handling"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your Django/FastAPI app slow due to inefficient database queries?",
            problem: "A common pitfall is the N+1 query problem, where the ORM makes numerous unnecessary database calls, killing performance.",
            solution: "We test for deep ORM knowledge, including how to use tools like `select_related` and `prefetch_related` (Django) to write highly efficient, optimized database queries.",
            kpi: "Mastery of ORM query optimization"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling with dependency conflicts and 'works on my machine' issues?",
            problem: "Poor dependency management leads to fragile environments that are difficult to replicate and deploy reliably.",
            solution: "Our engineers are experts in modern Python packaging and dependency management tools like Poetry or PDM, ensuring reproducible builds and stable deployments.",
            kpi: "Expertise in modern dependency management"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your Spring Boot application slow to start and heavy on memory?",
            problem: "Over-reliance on auto-configuration and classpath scanning without understanding the internals can lead to bloated, slow applications.",
            solution: "We look for engineers who understand the Spring lifecycle and can optimize applications, potentially using newer technologies like GraalVM for native compilation.",
            kpi: "Knowledge of Spring optimization & GraalVM"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you plagued by 'Out Of Memory' errors in production?",
            problem: "A lack of understanding of JVM garbage collection and memory tuning is a common cause of instability in high-throughput Java applications.",
            solution: "Our evaluation assesses a candidate's practical knowledge of JVM tuning, garbage collection algorithms (like G1GC), and how to use profiling tools (like JVisualVM) to diagnose memory issues.",
            kpi: "Practical JVM tuning & memory profiling skills"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you dealing with deadlocks and race conditions?",
            problem: "Go's concurrency primitives are powerful but can be misused, leading to subtle and hard-to-debug concurrency issues.",
            solution: "We evaluate a candidate's deep understanding of channels, mutexes, and goroutine lifecycle management. We look for proficiency with Go's race detector to build safe concurrent programs.",
            kpi: "Mastery of safe concurrency patterns"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your error handling a maze of `if err != nil` checks?",
            problem: "Go's explicit error handling can lead to verbose and hard-to-read code if not handled with clear patterns.",
            solution: "We look for engineers who can demonstrate clean error handling strategies, such as wrapping errors for context and creating custom error types, leading to more maintainable code.",
            kpi: "Clean and idiomatic error handling"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you stuck on the legacy .NET Framework, unable to move to the cloud?",
            problem: "Migrating from .NET Framework to modern .NET is a complex process, and many developers lack the skills to do it effectively.",
            solution: "We find engineers with proven experience in modern, cross-platform .NET, who can help you migrate legacy applications and build new cloud-native services on ASP.NET Core.",
            kpi: "Expertise in modern ASP.NET Core"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your Entity Framework performance slow due to inefficient queries?",
            problem: "EF Core is powerful, but it's easy to write inefficient LINQ queries that translate to slow SQL and kill application performance.",
            solution: "We vet for deep expertise in EF Core, including the ability to analyze generated SQL, optimize LINQ queries, and use features like compiled queries for maximum performance.",
            kpi: "Advanced LINQ & EF Core optimization"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your app slow due to N+1 queries from ActiveRecord?",
            problem: "The convenience of the Rails ORM often leads to massive performance bottlenecks as developers fetch data inefficiently in loops.",
            solution: "We find engineers who are masters of ActiveRecord optimization, using tools like `includes`, `eager_load`, and the Bullet gem to hunt down and eliminate N+1 queries.",
            kpi: "Deep ActiveRecord optimization skills"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your background jobs failing or getting stuck?",
            problem: "Managing Sidekiq or Resque at scale requires a deep understanding of idempotency, retries, and monitoring to ensure reliability.",
            solution: "We vet for experience in building robust background job processing systems, ensuring your asynchronous tasks are reliable and fault-tolerant.",
            kpi: "Expertise in reliable background job processing"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your app stuck on an old, insecure version of PHP?",
            problem: "Many developers lack the skills or discipline to keep up with the modern PHP ecosystem, leaving applications vulnerable and slow.",
            solution: "We find engineers who are experts in modern PHP (8+) and its features, able to build secure, performant applications and migrate legacy code safely.",
            kpi: "Proficiency in modern PHP (8+) features"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your Laravel/Symfony application poorly structured and hard to test?",
            problem: "Putting all logic in controllers and routes leads to 'fat controllers' and a codebase that is difficult to maintain and test.",
            solution: "We vet for deep framework knowledge, including the use of service containers, dependency injection, and proper architectural patterns (like repositories) to build clean, testable applications.",
            kpi: "Deep framework & architectural pattern knowledge"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your AWS bill a mystery that keeps growing?",
            problem: "Without a deep understanding of AWS pricing and services, costs can spiral out of control. Many engineers don't know how to architect for cost.",
            solution: "We find experts in AWS cost management who can use tools like Cost Explorer, set up budgets, and make architectural decisions (e.g., Graviton instances, Spot) to dramatically reduce your bill.",
            kpi: "Proven AWS cost optimization skills"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you building your infrastructure by hand in the console?",
            problem: "Manual infrastructure management is slow, error-prone, and impossible to replicate, leading to configuration drift and outages.",
            solution: "Our engineers are masters of Infrastructure as Code (IaC) using tools like the AWS CDK, Terraform, or CloudFormation to build automated, testable, and repeatable infrastructure.",
            kpi: "Mastery of Infrastructure as Code (IaC)"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your pods constantly getting OOMKilled or crashing?",
            problem: "Incorrectly configured resource requests and limits are a primary cause of instability in Kubernetes, leading to unreliable applications.",
            solution: "We vet for a deep understanding of Kubernetes resource management and scheduling, ensuring your applications are stable and use cluster resources efficiently.",
            kpi: "Mastery of K8s resource management"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your cluster networking a black box of security risks?",
            problem: "By default, all pods can talk to each other, creating a massive security hole. Managing ingress and service-to-service traffic is complex.",
            solution: "Our engineers are experts in Kubernetes networking, including CNI, Ingress controllers, and implementing NetworkPolicies to create a secure, zero-trust network environment.",
            kpi: "Expertise in secure Kubernetes networking"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your Docker images huge and slow to build/pull?",
            problem: "Inefficient Dockerfiles with bloated layers and unnecessary build dependencies slow down your CI/CD pipeline and increase storage costs.",
            solution: "We find engineers who are experts in creating optimized, multi-stage Docker builds that are small, secure, and fast.",
            kpi: "Mastery of multi-stage builds for optimization"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you shipping images with known vulnerabilities?",
            problem: "Failing to scan container images for security vulnerabilities is a massive and unnecessary risk.",
            solution: "Our evaluation includes integrating image security scanning tools (like Trivy or Snyk) directly into the CI/CD pipeline to catch vulnerabilities before they are deployed.",
            kpi: "Expertise in CI/CD integrated security scanning"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your infrastructure impossible to replicate across environments?",
            problem: "Manual infrastructure creation leads to configuration drift, making it impossible to create consistent dev, staging, and production environments.",
            solution: "We vet for mastery of IaC principles, ensuring engineers can write modular, reusable code (e.g., Terraform modules) that can be reliably deployed anywhere.",
            kpi: "Expertise in modular and reusable IaC"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you managing your Terraform state file on your laptop?",
            problem: "Local state management is a recipe for disaster, leading to conflicts, lost state, and security risks.",
            solution: "Our evaluation requires knowledge of remote state management best practices, using backends like S3 or Terraform Cloud to ensure state is managed securely and collaboratively.",
            kpi: "Mastery of remote state management"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your CI workflows a copy-paste mess?",
            problem: "Duplicated YAML across repositories makes workflows hard to maintain and update, leading to inconsistency and tech debt.",
            solution: "We look for engineers who can create reusable workflows and composite actions, centralizing logic and making your CI process DRY (Don't Repeat Yourself).",
            kpi: "Expertise in reusable workflows & composite actions"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you storing secrets directly in GitHub?",
            problem: "Plain-text secrets or even GitHub's encrypted secrets can be a security risk. You need a way to fetch secrets dynamically at runtime.",
            solution: "We vet for expertise in using OIDC (OpenID Connect) to securely connect GitHub Actions to a cloud provider (like AWS or GCP) and fetch temporary credentials, eliminating long-lived secrets.",
            kpi: "Mastery of secure OIDC integration for secrets"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your service-to-service communications unencrypted and insecure?",
            problem: "In a Kubernetes cluster, traffic between services is often unencrypted by default, creating a major internal security vulnerability.",
            solution: "We find experts who can implement a service mesh to enforce strict mutual TLS (mTLS) for all internal traffic, creating a secure, zero-trust network.",
            kpi: "Experience with enforcing mTLS at scale"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your deployments high-risk, all-or-nothing events?",
            problem: "Traditional deployments risk a full-scale outage if a bug is introduced.",
            solution: "Our engineers use service mesh traffic management features to implement sophisticated canary deployments, gradually shifting traffic to the new version and automatically rolling back if errors increase.",
            kpi: "Mastery of advanced canary release patterns"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you getting paged for false alarms or missing real outages?",
            problem: "Poorly designed alerting rules create alert fatigue and erode trust in the monitoring system.",
            solution: "We find engineers who are masters of PromQL and can design high-signal, low-noise alerting rules based on SLOs and error budgets, not just simple CPU thresholds.",
            kpi: "Expertise in SLO-based alerting"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your Prometheus server constantly falling over or losing data?",
            problem: "A single Prometheus instance is not scalable or highly available for a production environment.",
            solution: "Our evaluation looks for experience with scalable Prometheus architectures, using tools like Thanos or Cortex to provide high availability and long-term storage.",
            kpi: "Experience with scalable Prometheus (Thanos/Cortex)"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you locked into your current observability vendor?",
            problem: "Proprietary instrumentation agents make it difficult and expensive to switch observability platforms.",
            solution: "We find engineers who are experts in OpenTelemetry, the open standard for instrumentation, allowing you to avoid vendor lock-in and maintain control of your data.",
            kpi: "Commitment to vendor-agnostic observability"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "When an error occurs, do you have to manually correlate logs, metrics, and traces?",
            problem: "Siloed observability data makes it slow and difficult to debug production issues.",
            solution: "Our engineers can implement OpenTelemetry to automatically correlate signals, ensuring that your traces are linked to logs and metrics, dramatically reducing MTTR (Mean Time to Resolution).",
            kpi: "Expertise in automatic signal correlation"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Can you trace a single user's request across all your microservices?",
            problem: "Without distributed tracing, diagnosing latency or errors in a microservices architecture is nearly impossible.",
            solution: "We find engineers who are experts in implementing and analyzing distributed traces with Jaeger, allowing you to visualize the entire lifecycle of a request and pinpoint bottlenecks.",
            kpi: "Mastery of distributed tracing analysis"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your logging bill out of control?",
            problem: "Traditional logging solutions that index the full content of logs are incredibly expensive at scale.",
            solution: "Our engineers are experienced with modern logging solutions like Loki, which indexes only metadata, making it dramatically more cost-effective to store and query large volumes of logs.",
            kpi: "Experience with cost-effective logging (Loki)"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your database credentials long-lived and exposed?",
            problem: "Static, long-lived secrets are a massive security risk. If one leaks, it provides indefinite access to your systems.",
            solution: "We find engineers who can implement Vault's dynamic secrets engine, which generates ephemeral, on-demand credentials with a short TTL, dramatically reducing your risk exposure.",
            kpi: "Expertise in dynamic secrets management"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to give applications and developers secure access to secrets?",
            problem: "Managing authentication for dozens of services and developers is complex and often leads to overly permissive access.",
            solution: "Our engineers are experts in Vault's auth methods, able to integrate with platforms like Kubernetes or AWS IAM to provide secure, automated, and identity-based access to secrets.",
            kpi: "Mastery of Vault auth methods (K8s, AWS IAM)"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you checking encrypted secrets into Git and dealing with key management?",
            problem: "Managing GPG keys or KMS access for every developer and CI/CD system to decrypt secrets is a complex operational burden.",
            solution: "We find engineers who can use External Secrets Operator to completely separate secrets from your Git repository, allowing you to manage secrets in a dedicated store and sync them directly to Kubernetes.",
            kpi: "Decoupling secrets from Git"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "How do you handle secret rotation for your applications?",
            problem: "Manually updating Kubernetes secrets after a rotation is error-prone and often forgotten, leaving applications with old credentials.",
            solution: "Our engineers can configure ESO to automatically poll for changes in the external secret store and update the Kubernetes secret, ensuring seamless secret rotation for your applications.",
            kpi: "Automated secret rotation"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is every deployment a high-stress 'big bang' release?",
            problem: "Monolithic deployments create a massive blast radius, where a single bug can cause a full-site outage and require a risky rollback.",
            solution: "We find engineers who can use feature flags to decouple deployment from release, allowing you to merge code to production safely behind a flag and then release it to users with zero risk.",
            kpi: "Decoupling deployment from release"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you unable to test new features with real users before a full launch?",
            problem: "Without a way to target specific users, you're flying blind, unable to get feedback or measure the impact of a feature before it's live for everyone.",
            solution: "Our engineers are experts in LaunchDarkly's targeting capabilities, able to implement progressive rollouts (e.g., release to internal users, then 10% of customers) and run A/B tests to make data-driven decisions.",
            kpi: "Expertise in progressive rollouts & A/B testing"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you spending months building and maintaining your own user authentication?",
            problem: "Building a secure, feature-rich authentication system (password reset, MFA, social logins) is a massive undertaking that distracts from your core business.",
            solution: "We find engineers who are experts in identity platforms like Okta or Auth0, allowing you to outsource your authentication and focus on your product, not on password hashing algorithms.",
            kpi: "Faster time-to-market by outsourcing identity"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Can your enterprise customers sign in with their own SSO?",
            problem: "A lack of enterprise SSO (SAML/OIDC) is a major blocker for selling to large companies, who demand it for security and compliance.",
            solution: "Our engineers can rapidly integrate with any enterprise identity provider using Okta or Auth0's federation capabilities, unblocking your enterprise sales pipeline.",
            kpi: "Expertise in enterprise SSO & federation"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to manage user access across all your applications?",
            problem: "Manually provisioning and de-provisioning users in multiple systems is slow, error-prone, and a security risk.",
            solution: "We vet for experience with SCIM (System for Cross-domain Identity Management) to automate user provisioning, ensuring that access is granted and revoked instantly and correctly.",
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is every application on your platform inventing its own login system?",
            problem: "Homegrown authentication is a notorious source of security vulnerabilities and a poor user experience. You need a centralized approach.",
            solution: "We find experts in OIDC and SAML who can help you implement a centralized identity provider, allowing all your applications to use a single, secure, and well-understood login flow.",
            kpi: "Centralized, secure authentication"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Can your enterprise customers use their own identity provider (e.g., Okta, Azure AD) to log in?",
            problem: "Forcing enterprise users to create a separate username and password for your app is a major sales and security obstacle.",
            solution: "Our engineers are masters of identity federation. They can use SAML or OIDC to securely connect your application to your customers' identity providers, enabling seamless and secure SSO.",
            kpi: "Unblocking enterprise sales with identity federation"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your secrets stored in plain text or scattered across insecure files?",
            problem: "Storing secrets insecurely is a recipe for a breach. Committing them to Git, even in private repos, is a major risk.",
            solution: "We find engineers who can use SOPS to encrypt secrets files, allowing you to safely store them in Git while ensuring only authorized users and services can decrypt them.",
            kpi: "Securely manage secrets in Git"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is managing PGP keys for your team becoming a bottleneck?",
            problem: "GPG/PGP is powerful but notoriously difficult to manage, especially for a large team.",
            solution: "Our engineers are experts in using SOPS with cloud-based KMS (Key Management Service) providers like AWS KMS or GCP KMS, eliminating the need for individual PGP keys and simplifying key management.",
            kpi: "Simplified key management with cloud KMS"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you finding security bugs in production?",
            problem: "Finding vulnerabilities late in the cycle is 100x more expensive to fix and puts your business at risk.",
            solution: "We find AppSec engineers who can integrate Static Application Security Testing (SAST) tools like CodeQL or SonarQube directly into your CI/CD pipeline, catching bugs before they are even merged.",
            kpi: "Shift security left into the CI/CD pipeline"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you vulnerable to exploits in your open-source dependencies?",
            problem: "Your application is only as secure as its dependencies. A single vulnerable package can compromise your entire system.",
            solution: "Our engineers are experts in Software Composition Analysis (SCA) tools like Snyk or Trivy, which automatically scan your dependencies for known vulnerabilities and even suggest automated fixes.",
            kpi: "Automated dependency vulnerability scanning"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your only endpoint protection a legacy antivirus that misses modern attacks?",
            problem: "Signature-based antivirus is blind to fileless malware, ransomware, and sophisticated attacker techniques.",
            solution: "We find security engineers who are experts in modern EDR platforms that use behavioral AI and threat intelligence to detect and respond to threats that legacy AV can't see.",
            kpi: "Detect and respond to modern threats"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "When an alert fires, do you have the visibility to investigate it?",
            problem: "Without rich endpoint telemetry, security teams can't investigate alerts, determine the blast radius, or effectively remediate a threat.",
            solution: "Our engineers can leverage the deep visibility from EDR platforms to perform threat hunting, investigate incidents, and understand the full story of an attack, using frameworks like MITRE ATT&CK.",
            kpi: "Expertise in threat hunting & incident investigation"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you losing enterprise deals because you can't pass security reviews?",
            problem: "Enterprise customers require proof of your security posture. Without a SOC 2 report, you are often disqualified before you can even demo your product.",
            solution: "We find engineers who are experienced with the SOC 2 framework and can help you build the technical and procedural controls necessary to pass an audit and unblock enterprise sales.",
            kpi: "Unblock enterprise sales with SOC 2 compliance"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is preparing for your SOC 2 audit a manual, all-hands-on-deck fire drill?",
            problem: "Manual evidence collection is time-consuming, error-prone, and takes your engineers away from building product.",
            solution: "Our engineers are experienced with compliance automation platforms (e.g., Vanta, Drata) and can help you automate evidence collection, turning your audit from a fire drill into a routine process.",
            kpi: "Automate evidence collection for continuous compliance"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do you have policies, but no way to prove you're enforcing them?",
            problem: "Auditors don't just want to see your policies; they want to see evidence that they are being enforced consistently.",
            solution: "We look for engineers who can translate policies into technical reality, such as implementing Infrastructure as Code to enforce configuration standards or using MDM to enforce endpoint policies.",
            kpi: "Translate policies into technical controls"
        }
    ], 
    evaluation: ['Mapping Trust Service Criteria to technical controls', 'Evidence collection automation', 'Experience with the audit process (readiness, audit)', 'Policy and procedure documentation', 'Working with auditors and internal stakeholders'] 
  },
  'nextjs': { 
    name: 'Next.js', 
    category: 'Frontend & UI/UX', 
    categorySlug: 'frontend-web', 
    intro: "You know that Next.js is more than just a React framework; it's a full-stack toolkit with a complex set of trade-offs. You need an engineer who understands the difference between Server Components and Client Components, who can strategically choose data fetching patterns, and who knows how to optimize caching to build truly high-performance web applications.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your app shipping too much JavaScript to the client?",
            problem: "Overusing Client Components leads to large bundle sizes and slow initial page loads, hurting your Core Web Vitals and user experience.",
            solution: "We find engineers who are experts in the Next.js App Router and can strategically use Server Components by default to minimize the client-side JavaScript footprint.",
            kpi: "Mastery of Server Components"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you re-fetching the same data over and over?",
            problem: "Inefficient data fetching and caching leads to slow page navigations and unnecessary API load.",
            solution: "Our engineers are experts in Next.js data fetching and caching strategies, from static site generation (SSG) and incremental static regeneration (ISR) to on-demand revalidation, ensuring your data is always fresh but fast.",
            kpi: "Expertise in advanced data fetching & caching"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling with layout shifts and poor image performance?",
            problem: "Improperly using images is a common cause of poor performance and layout shift (CLS).",
            solution: "We vet for expertise in using the built-in `next/image` component correctly, ensuring images are properly sized, optimized, and prioritized to deliver a fast, stable user experience.",
            kpi: "Proficiency with `next/image` for optimization"
        }
    ], 
    evaluation: ['App vs. Pages Router trade-offs', 'Server Components vs. Client Components', 'Data fetching patterns (server-side, static, incremental)', 'Caching and revalidation strategies (ISR, On-demand)', 'Performance optimization and bundle analysis'] 
  },
  'vite': { 
    name: 'Vite', 
    category: 'Frontend & UI/UX', 
    categorySlug: 'frontend-web', 
    intro: "Your local development server takes minutes to start, and your build process is a slow, complex beast. You're here because you need to accelerate your frontend workflow. You need an engineer who can leverage Vite's speed and simplicity to create a lightning-fast developer experience and a highly optimized production build.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your local development server painfully slow to start?",
            problem: "Slow feedback loops kill developer productivity. Waiting minutes for a dev server to start or update is a massive waste of time.",
            solution: "We find engineers who can migrate your frontend to Vite, which uses native ES modules to provide an instant-on development server and lightning-fast Hot Module Replacement (HMR).",
            kpi: "Near-instantaneous dev server startup & HMR"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your build configuration a complex, unmaintainable mess?",
            problem: "Complex bundler configurations (like Webpack) are a source of constant pain and require specialized knowledge to maintain.",
            solution: "Our engineers are experts in Vite's simple, config-light approach. It provides sensible defaults and a powerful plugin API, making your build process faster and easier to manage.",
            kpi: "Simplified, maintainable build configurations"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to adopt modern frontend tooling?",
            problem: "Older setups can make it difficult to use modern features like TypeScript, JSX, and CSS pre-processors out of the box.",
            solution: "We look for engineers who can use Vite to provide a seamless, out-of-the-box experience for the entire modern frontend ecosystem, accelerating your team's ability to adopt best practices.",
            kpi: "First-class support for the modern frontend ecosystem"
        }
    ], 
    evaluation: ['Build/dev server configuration and optimization', 'Plugin ecosystem knowledge', 'Module Federation for micro-frontends', 'HMR (Hot Module Replacement) debugging', 'Library mode for reusable components'] 
  },
  'angular': {
    name: 'Angular',
    category: 'Frontend & UI/UX',
    categorySlug: 'frontend-web',
    intro: "Your enterprise application needs a robust, opinionated framework. You need an Angular expert who has mastered TypeScript, RxJS, and dependency injection to build large-scale, maintainable applications.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your application's state a tangled mess of services and subjects?",
            problem: "Managing complex state in a large Angular application without a clear pattern leads to bugs and maintenance nightmares.",
            solution: "We find engineers who are experts in enterprise-scale state management with NgRx, providing a predictable, testable, and maintainable state architecture.",
            kpi: "Expertise in NgRx for enterprise state management"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your application slow due to inefficient change detection?",
            problem: "Angular's powerful change detection can become a performance bottleneck if not managed correctly, leading to a sluggish UI.",
            solution: "Our engineers understand how to optimize Angular performance by using the OnPush change detection strategy and building well-structured, performant components.",
            kpi: "Proficiency in Angular performance optimization"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to manage asynchronous streams of data?",
            problem: "Reactive programming with RxJS is powerful but has a steep learning curve, and incorrect usage can lead to memory leaks and complex bugs.",
            solution: "We vet for a deep understanding of RxJS, including operators, subjects, and subscription management, ensuring your asynchronous code is both powerful and correct.",
            kpi: "Deep RxJS mastery for reactive programming"
        }
    ],
    evaluation: ['Component and module architecture', 'Deep RxJS knowledge for state management', 'NgRx for enterprise-scale state', 'Change detection strategies and performance', 'Testing with Jasmine and Karma']
  },
  'vue': {
    name: 'Vue.js',
    category: 'Frontend & UI/UX',
    categorySlug: 'frontend-web',
    intro: "You need to build a reactive, performant UI without the boilerplate. You're looking for a Vue expert who understands the Composition API, can manage state effectively with Pinia, and can build a clean, approachable codebase.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your codebase a mix of old Options API and new Composition API?",
            problem: "Inconsistent use of Vue's APIs leads to a confusing and hard-to-maintain codebase.",
            solution: "We find engineers who are experts in the modern Composition API, enabling them to write more organized, reusable, and type-safe logic.",
            kpi: "Mastery of the modern Composition API"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your state management with Vuex overly complex and full of boilerplate?",
            problem: "Vuex, while powerful, can be verbose. For many applications, a simpler, more intuitive state management solution is better.",
            solution: "Our engineers are proficient in Pinia, the official and more modern state management library for Vue, which offers a simpler API, better TypeScript support, and a more intuitive developer experience.",
            kpi: "Expertise in Pinia for clean state management"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to get the benefits of TypeScript in your Vue app?",
            problem: "Getting full type-safety in Vue requires a deep understanding of the ecosystem, especially with the Composition API.",
            solution: "We vet for engineers who can leverage TypeScript effectively within the Vue ecosystem, particularly with `<script setup>`, to build more robust and maintainable applications.",
            kpi: "Proficiency in building type-safe Vue applications"
        }
    ],
    evaluation: ['Composition API vs. Options API', 'Reactivity system fundamentals', 'State management with Pinia', 'Routing with Vue Router', 'Testing with Vitest and Vue Testing Library']
  },
  'tanstack': { 
    name: 'TanStack Query', 
    category: 'Frontend & UI/UX', 
    categorySlug: 'frontend-web', 
    intro: "Your application's state is a chaotic mix of server data and UI state, leading to bugs and complexity. You're here because you need an engineer who understands that `useState` and `useEffect` are not the right tools for managing server cache. You need an expert in TanStack Query (formerly React Query) to simplify data fetching, eliminate stale data, and build a more resilient UI.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you manually managing loading and error states for every API call?",
            problem: "Using `useState` and `useEffect` for data fetching leads to massive amounts of boilerplate code to handle loading, error, and data states.",
            solution: "We find engineers who are masters of TanStack Query, which completely automates the management of async state, dramatically simplifying your code and reducing bugs.",
            kpi: "Eliminate boilerplate async state management"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your application displaying stale data?",
            problem: "Without a proper caching strategy, your UI can easily fall out of sync with the server, leading to a poor user experience.",
            solution: "Our engineers leverage TanStack Query's powerful caching and background refetching capabilities to ensure your data is always fresh and your UI is always responsive.",
            kpi: "Automated caching and background refetching"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your UI slow because you're waiting for every mutation to complete?",
            problem: "Waiting for a server response after a user action (like submitting a form) can make your application feel slow and unresponsive.",
            solution: "We look for engineers who can implement optimistic updates with TanStack Query, instantly updating the UI and then rolling back only if the server request fails, creating a lightning-fast user experience.",
            kpi: "Expertise in optimistic updates for a faster UX"
        }
    ], 
    evaluation: ['Mastery of server state management concepts', 'Caching/invalidation strategies (query keys)', 'Optimistic updates for a faster UX', 'Infinite scrolling and pagination patterns', 'Error handling and retries'] 
  },
  'redux': { 
    name: 'Redux Toolkit/Zustand', 
    category: 'Frontend & UI/UX', 
    categorySlug: 'frontend-web', 
    intro: "Your global state is a bloated, hard-to-trace mess. You're here because you need an engineer who can architect a clean, scalable, and performant state management solution. You need someone who knows when to use a global store and when to rely on component state or server cache, using modern tools like Redux Toolkit or Zustand effectively.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your Redux setup full of boilerplate and hard to follow?",
            problem: "Classic Redux required writing huge amounts of boilerplate for actions, reducers, and selectors, making it complex and unwieldy.",
            solution: "We find engineers who are experts in modern Redux Toolkit, which dramatically reduces boilerplate with features like `createSlice` and provides a much simpler, more powerful developer experience.",
            kpi: "Expertise in modern, boilerplate-free Redux Toolkit"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you putting your server cache (API data) in your global Redux store?",
            problem: "This is a common anti-pattern that duplicates state, makes caching difficult, and leads to complex, hard-to-maintain code.",
            solution: "Our engineers understand the difference between client state and server state. They use a global store like Redux or Zustand only for true global UI state, while managing server cache with a dedicated tool like TanStack Query.",
            kpi: "Separating client state from server cache"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do you need a simpler global state solution than Redux?",
            problem: "For many applications, Redux can be overkill. You need a solution that is simple, small, and intuitive.",
            solution: "We look for engineers who are proficient in lightweight state management libraries like Zustand, which provides a minimal, hook-based API for managing global state without the complexity of Redux.",
            kpi: "Proficiency in lightweight state managers like Zustand"
        }
    ], 
    evaluation: ['Global vs. local state trade-offs', 'Middleware usage (e.g., for logging, async actions)', 'Performance with large stores and selector optimization', 'Architecting slices/stores for maintainability', 'Debugging state changes with devtools'] 
  },
  'graphql': { 
    name: 'GraphQL', 
    category: 'APIs & Backend Services', 
    categorySlug: 'frontend-web', 
    intro: "Your frontend teams are drowning in API calls, and your API is either over-fetching or under-fetching data. You need a GraphQL expert who can build a flexible, efficient data layer that empowers your clients. You're here because you need to solve the N+1 problem, design a scalable schema, and potentially manage a federated graph.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your clients making dozens of API calls to render a single page?",
            problem: "Traditional REST APIs often require clients to make multiple round trips to fetch all the data they need, leading to slow performance.",
            solution: "We find engineers who can design a GraphQL schema that allows clients to fetch all the data they need in a single request, dramatically improving performance and simplifying client-side logic.",
            kpi: "Eliminate API round trips"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your GraphQL server slow due to the N+1 problem?",
            problem: "A naive GraphQL resolver implementation can easily lead to the N+1 query problem, where a single GraphQL query triggers thousands of database queries.",
            solution: "Our engineers are experts in solving the N+1 problem using the DataLoader pattern, which batches database queries together, ensuring your GraphQL server is fast and efficient.",
            kpi: "Mastery of the DataLoader pattern"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your monolithic GraphQL schema becoming a bottleneck for your microservices?",
            problem: "As you move to microservices, a single, centralized GraphQL schema can become a point of contention and slow down development.",
            solution: "We vet for experience with GraphQL federation (e.g., Apollo Federation), which allows each microservice to own its part of the graph, enabling independent development and deployment.",
            kpi: "Experience with GraphQL federation"
        }
    ], 
    evaluation: ['Schema design principles', 'Resolvers and data loader patterns (to solve N+1)', 'Apollo Federation/stitching for microservices', 'Caching strategies (client and server-side)', 'Security (depth limiting, query cost analysis)'] 
  },
  'tailwind': { 
    name: 'Tailwind/shadcn', 
    category: 'Frontend & UI/UX', 
    categorySlug: 'frontend-web', 
    intro: "Your UI is an inconsistent collection of custom CSS and one-off components. You need an engineer who can build a scalable and maintainable design system. You're looking for an expert in utility-first CSS and component libraries like shadcn/ui or MUI who can create a consistent, beautiful, and accessible user experience.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your CSS a mess of specificity wars and unused styles?",
            problem: "Traditional CSS can quickly become hard to maintain, with global styles causing unintended side effects and file sizes ballooning.",
            solution: "We find engineers who are experts in utility-first CSS with Tailwind, allowing them to build custom designs quickly without ever leaving their HTML and avoiding CSS bloat.",
            kpi: "Rapid, maintainable UI development with Tailwind"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you constantly reinventing the wheel for common UI components?",
            problem: "Building accessible, high-quality components like dialogs, dropdowns, and date pickers from scratch is incredibly time-consuming and difficult.",
            solution: "Our engineers are proficient in modern component libraries like shadcn/ui, which provides a set of beautifully designed, accessible, and customizable components that can be copied directly into your project.",
            kpi: "Accelerated development with shadcn/ui"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your design system hard to customize and theme?",
            problem: "Many component libraries are difficult to adapt to your brand's specific look and feel.",
            solution: "We look for engineers who can leverage Tailwind and CSS variables to create a highly customizable and themeable design system, allowing for features like light/dark mode with ease.",
            kpi: "Experience in building themeable design systems"
        }
    ], 
    evaluation: ['Design system implementation from scratch', 'Theming and customization of component libraries', 'Component API design for reusability', 'Utility-first best practices and maintainability', 'Accessibility (ARIA) implementation'] 
  },
  'storybook': {
    name: 'Storybook',
    category: 'Frontend & UI/UX',
    categorySlug: 'frontend-web',
    intro: "Your component library is undocumented and hard to test in isolation. You need an expert in Storybook to create a workshop environment for your UI, enabling visual testing, documentation, and collaborative development.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do your designers and developers struggle to communicate about components?",
            problem: "Without a shared, interactive environment, component variations and states are hard to see, leading to inconsistency and rework.",
            solution: "We find engineers who can use Storybook to create an interactive component workshop, allowing designers and developers to see all component states and variations in one place.",
            kpi: "A single source of truth for your UI components"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is it hard to test your UI components in isolation?",
            problem: "Testing components within the context of a full application is difficult and slow. You need a way to test them independently.",
            solution: "Our engineers use Storybook to develop components in isolation, making it easy to write unit, integration, and even visual regression tests for every component.",
            kpi: "Faster, more reliable component testing"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your component library poorly documented and hard for new developers to use?",
            problem: "A lack of documentation makes it nearly impossible for new team members to discover and use existing components, leading to duplicated effort.",
            solution: "We look for engineers who can leverage Storybook's documentation features to automatically generate a living style guide from your components, complete with interactive props and code examples.",
            kpi: "Living documentation for your design system"
        }
    ],
    evaluation: ['Component Story Format (CSF)', 'Controls, args, and mocking data', 'Addons for accessibility, testing, and documentation', 'Visual regression testing integration', 'Publishing and versioning a Storybook instance']
  },
  'testing': { 
    name: 'Testing Library', 
    category: 'Frontend & UI/UX', 
    categorySlug: 'frontend-web', 
    intro: "Your tests are brittle, tied to implementation details, and fail with every minor refactor. You're here because you need to ship with confidence. You need an engineer who understands how to write tests that resemble how users interact with your app, using tools like Testing Library to ensure your application works as intended, not just that your code runs.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do your tests break every time you refactor a component's internal structure?",
            problem: "Tests that rely on implementation details (like CSS classes or component state) are brittle and slow down development.",
            solution: "We find engineers who are masters of the Testing Library philosophy, writing tests that find elements the way a user would (e.g., by accessible role, label, or text) to create resilient, maintainable tests.",
            kpi: "Resilient, implementation-free tests"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to test complex user interactions?",
            problem: "Testing a multi-step user flow (like filling out a form) can be complex and flaky.",
            solution: "Our engineers are experts in using `user-event` with Testing Library to simulate real user interactions, providing high confidence that your application works as expected.",
            kpi: "High-confidence tests that simulate real users"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do you have 100% code coverage but still have bugs in production?",
            problem: "Code coverage is a meaningless vanity metric if your tests aren't actually asserting anything useful.",
            solution: "We vet for engineers who focus on testing for accessibility and behavior, ensuring that your tests provide real value and catch real bugs, rather than just chasing a coverage percentage.",
            kpi: "Focus on behavioral testing over coverage"
        }
    ], 
    evaluation: ['User-centric testing philosophy', 'Mocking API requests and server state', 'Testing custom hooks and complex user interactions', 'Integration testing vs. unit testing trade-offs', 'Code coverage as a guide, not a goal'] 
  },
  'playwright': { 
    name: 'Playwright/Cypress', 
    category: 'Testing & Quality Engineering', 
    categorySlug: 'frontend-web', 
    intro: "Your end-to-end tests are slow, flaky, and a nightmare to debug. You're here because you need a Quality Engineer who can build a fast, reliable, and maintainable test automation suite using modern tools like Playwright or Cypress. You need an expert who can write tests that are resistant to UI changes and provide actionable feedback, not just noise.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your E2E tests flaky and constantly failing in CI?",
            problem: "Flaky tests erode trust and are often disabled, leaving you with no safety net.",
            solution: "We find engineers who are experts in writing reliable E2E tests, using modern features like Playwright's auto-waits and locators to eliminate flakiness.",
            kpi: "Reliable, non-flaky E2E test suites"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your test suite too slow to run in your CI/CD pipeline?",
            problem: "Slow tests create a bottleneck and prevent you from getting fast feedback on your changes.",
            solution: "Our engineers can leverage the parallel execution capabilities of Playwright and Cypress to run your entire test suite in minutes, not hours.",
            kpi: "Fast feedback with parallel test execution"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "When a test fails, is it impossible to debug what went wrong?",
            problem: "Debugging a failed test in a headless CI environment is incredibly difficult and time-consuming.",
            solution: "We look for engineers who can use modern debugging tools like Playwright's Trace Viewer, which provides a full recording of the test run, including screenshots, console logs, and network requests.",
            kpi: "Powerful debugging with trace viewers"
        }
    ], 
    evaluation: ['Test automation patterns (Page Object Model, App Actions)', 'Handling dynamic content and asynchronous operations', 'CI/CD integration, parallelization, and reporting', 'Debugging flaky tests and improving reliability', 'Cross-browser and responsive testing'] 
  },
  'react-native': {
    name: 'React Native',
    category: 'Mobile & Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "You need to ship on both iOS and Android, but you're struggling with performance issues and native module complexity. You need a React Native expert who understands the bridge, can debug performance bottlenecks, and can build a smooth, native-like experience.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your React Native app's performance sluggish and not 'native-like'?",
            problem: "Inefficient use of the JavaScript thread, oversized images, and too many passes over the bridge can lead to a slow, janky user experience.",
            solution: "We find engineers who are experts in React Native performance debugging, using tools like Flipper to profile the UI and JS threads and optimize for a smooth, 60fps experience.",
            kpi: "Expertise in React Native performance profiling"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to integrate complex native SDKs?",
            problem: "Writing or troubleshooting native modules for iOS and Android requires native development skills that many React Native developers lack.",
            solution: "Our evaluation looks for engineers who are comfortable dropping down to the native layer (Swift/Objective-C or Kotlin/Java) to link and debug native modules.",
            kpi: "Experience with native module integration"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is the app store review process slowing down your release cycle?",
            problem: "Waiting days for app store approval for a simple bug fix is a major bottleneck.",
            solution: "We look for engineers with experience in Over-the-Air (OTA) update services like CodePush, allowing you to push JavaScript bundle updates directly to users, bypassing the app store.",
            kpi: "Proficiency in OTA updates with CodePush"
        }
    ],
    evaluation: ['Performance debugging (bridge, UI/JS thread)', 'Native module linking and troubleshooting', 'OTA update strategies (CodePush)', 'New architecture (JSI, Fabric, TurboModules)', 'Platform-specific UI/UX adaptation']
  },
  'flutter': {
    name: 'Flutter',
    category: 'Mobile & Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "You want a beautiful, high-performance cross-platform app from a single codebase. You need a Flutter expert who has mastered Dart, understands widget composition, and can manage complex state efficiently.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your widget tree a deeply nested, unmaintainable mess?",
            problem: "Poor widget composition leads to code that is hard to read, refactor, and test.",
            solution: "We find engineers who are experts in effective widget composition, breaking down complex UIs into smaller, reusable, and well-structured widgets.",
            kpi: "Mastery of effective widget composition"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your application state scattered and hard to manage?",
            problem: "Without a clear state management strategy, Flutter apps can quickly become buggy and unpredictable.",
            solution: "Our engineers are proficient in modern Flutter state management solutions like Provider, BLoC, or Riverpod, allowing them to build scalable and maintainable applications.",
            kpi: "Expertise in modern state management (Bloc/Riverpod)"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling with performance issues or 'jank'?",
            problem: "Inefficient builds, large widgets, or blocking the UI thread can lead to dropped frames and a poor user experience.",
            solution: "We vet for engineers who know how to use Flutter's DevTools to profile performance, diagnose jank, and optimize applications for a smooth, 60fps experience.",
            kpi: "Proficiency in Flutter performance profiling"
        }
    ],
    evaluation: ['Effective widget composition', 'State management solutions (Provider, BLoC, Riverpod)', 'Dart language features (isolates, futures)', 'Platform channel communication', 'Performance profiling and optimization (DevTools)']
  },
  'swift': {
    name: 'Swift',
    category: 'Mobile & Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "You need a world-class iOS application, and that requires a true Swift expert. You're looking for someone who understands modern Swift patterns, can build declarative UIs with SwiftUI, and can manage the complexities of the Apple ecosystem.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to adopt modern, declarative UI with SwiftUI?",
            problem: "Many iOS developers are still stuck in the imperative world of UIKit, leading to complex, hard-to-manage view controller code.",
            solution: "We find engineers who are experts in modern SwiftUI, able to build clean, declarative, and state-driven UIs that are easier to reason about and maintain.",
            kpi: "Mastery of modern SwiftUI"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your app full of completion handlers and 'callback hell'?",
            problem: "Legacy asynchronous code is hard to read, error-prone, and can lead to race conditions.",
            solution: "Our engineers are proficient in modern Swift concurrency with async/await and actors, allowing them to write clean, safe, and highly readable asynchronous code.",
            kpi: "Expertise in modern Swift Concurrency (async/await)"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you dealing with memory leaks and retain cycles?",
            problem: "Even with ARC (Automatic Reference Counting), memory management can be tricky, especially with closures and delegates.",
            solution: "We vet for a deep understanding of Swift's memory management model, including how to use `weak` and `unowned` references to prevent retain cycles and memory leaks.",
            kpi: "Deep understanding of Swift memory management"
        }
    ],
    evaluation: ['SwiftUI vs. UIKit trade-offs', 'Declarative UI and data flow', 'Concurrency (async/await, actors)', 'Memory management (ARC)', 'App Store submission and provisioning']
  },
  'kotlin': {
    name: 'Kotlin',
    category: 'Mobile & Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "You're building for the modern Android ecosystem. You need a Kotlin expert who has mastered coroutines for asynchronous programming, can build declarative UIs with Jetpack Compose, and understands the nuances of the Android lifecycle.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your UI code a complex mess of XML layouts and imperative views?",
            problem: "Legacy Android development is verbose and leads to a disconnect between UI and business logic.",
            solution: "We find engineers who are experts in Jetpack Compose, allowing them to build beautiful, native UIs with a modern, declarative, and state-driven approach.",
            kpi: "Mastery of Jetpack Compose for declarative UI"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your asynchronous code complex and prone to leaking context?",
            problem: "Legacy async patterns like AsyncTask are deprecated and error-prone. You need a modern, safe approach.",
            solution: "Our engineers are masters of Kotlin Coroutines and structured concurrency, ensuring that background tasks are managed safely and efficiently without leaking resources.",
            kpi: "Expertise in Kotlin Coroutines & structured concurrency"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your app's architecture a 'massive activity' or 'massive fragment'?",
            problem: "Without a clear architectural pattern, Android apps can become hard to test and maintain.",
            solution: "We vet for expertise in modern Android Architecture Components (ViewModel, LiveData, Room) and dependency injection with Hilt, leading to clean, modular, and testable applications.",
            kpi: "Proficiency in modern Android Architecture Components"
        }
    ],
    evaluation: ['Jetpack Compose for declarative UI', 'Coroutines and structured concurrency', 'Android architecture components (ViewModel, LiveData, Room)', 'Dependency injection with Hilt or Koin', 'Testing and debugging Android applications']
  },
  'objective-c': {
    name: 'Objective-C',
    category: 'Mobile & Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "You have a mature iOS application with a legacy Objective-C codebase that needs maintenance or modernization. You need a rare expert who is fluent in Objective-C, understands manual memory management, and can safely interoperate with modern Swift code.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to find developers who can maintain your legacy Objective-C app?",
            problem: "The pool of skilled Objective-C developers is shrinking, making it hard to support critical legacy applications.",
            solution: "We have a specialized network of senior engineers who are not only fluent in Objective-C but are also experts in modernizing legacy codebases.",
            kpi: "Access to a specialized pool of Objective-C talent"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your app crashing due to memory management issues?",
            problem: "Objective-C's manual or early-ARC memory management is complex and a common source of crashes and leaks if not handled by an expert.",
            solution: "Our engineers have a deep understanding of Objective-C's memory management model, allowing them to diagnose and fix complex memory issues in mature applications.",
            kpi: "Deep expertise in Objective-C memory management"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "How do you add new features to your Objective-C app using modern Swift?",
            problem: "Safely mixing Swift and Objective-C requires a deep understanding of interoperability and bridging.",
            solution: "We look for engineers who are experts in creating and managing the bridging headers and patterns required to safely call Swift from Objective-C and vice-versa, enabling a gradual modernization of your app.",
            kpi: "Mastery of Swift & Objective-C interoperability"
        }
    ],
    evaluation: ['Manual memory management (retain/release)', 'Interoperability with Swift (bridging headers)', 'Grand Central Dispatch (GCD) for concurrency', 'Legacy frameworks and patterns', 'Modernization strategies']
  },
  'codepush': {
    name: 'CodePush',
    category: 'Mobile & Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "You need to push updates to your React Native app without going through the slow app store review process. You need an expert in CodePush who can set up a reliable Over-the-Air (OTA) update pipeline, manage releases, and handle rollbacks.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is the app store review process delaying your critical bug fixes?",
            problem: "Waiting days for Apple or Google to approve a small fix is a massive drag on velocity and leaves your users exposed to bugs.",
            solution: "We find engineers who can implement CodePush to allow you to push JavaScript and image updates directly to your users' devices, bypassing the store review process.",
            kpi: "Bypass the app store for instant updates"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "How do you roll back a bad update that you pushed via OTA?",
            problem: "Pushing a bad update directly to users can be disastrous if you don't have a rollback plan.",
            solution: "Our engineers are experienced in set-ting up staged rollouts and automated rollbacks with CodePush, ensuring that you can release with confidence.",
            kpi: "Reliable rollbacks and staged rollouts"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "How do you handle updates that involve native code changes?",
            problem: "CodePush can only update JS assets. A workflow that involves native changes requires careful management of binary vs. JS updates.",
            solution: "We vet for engineers who understand how to manage a hybrid update strategy, using CodePush for JS-only changes and coordinating with binary updates when native code is involved.",
            kpi: "Experience with hybrid update strategies"
        }
    ],
    evaluation: ['CI/CD integration for automated releases', 'Staging and production deployment strategies', 'Handling breaking native changes', 'Rollback and error monitoring', 'User experience of updates (silent, on-next-resume)']
  },
  'sentry': {
    name: 'Sentry',
    category: 'Mobile & Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "You're flying blind when your mobile app crashes on a user's device. You need an expert in Sentry who can integrate crash reporting, capture meaningful context, and set up alerting to help you find and fix bugs before they impact more users.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do you only find out about crashes when users complain?",
            problem: "Without proactive crash reporting, you are completely unaware of the stability issues affecting your users.",
            solution: "We find engineers who can integrate Sentry to provide real-time, aggregated crash reporting, so you know about problems the moment they happen.",
            kpi: "Real-time, proactive crash reporting"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "When a crash report comes in, is it missing the context you need to debug it?",
            problem: "A simple stack trace is often not enough to diagnose a complex bug. You need more context about the user and device.",
            solution: "Our engineers are experts in enriching Sentry error reports with custom context, tags, and breadcrumbs to provide a full picture of what went wrong.",
            kpi: "Rich, contextual error reports for faster debugging"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to connect your frontend errors to your backend traces?",
            problem: "In a modern application, a user-facing error might be caused by a problem in a backend service. You need to connect the dots.",
            solution: "We look for engineers who can implement Sentry's performance monitoring and distributed tracing to connect frontend errors to backend transactions, giving you full-stack visibility.",
            kpi: "Full-stack visibility with distributed tracing"
        }
    ],
    evaluation: ['SDK integration and configuration', 'Source maps for de-minification', 'Custom context and breadcrumbs for debugging', 'Alerting and issue triage workflows', 'Performance monitoring and transaction tracing']
  },
  'appcenter': {
    name: 'AppCenter',
    category: 'Mobile & Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "You need a unified platform to build, test, distribute, and monitor your mobile applications. You need an expert in App Center who can set up your entire mobile CI/CD pipeline, from automated builds to beta distribution and crash analytics.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your mobile build and signing process a manual, error-prone nightmare?",
            problem: "Manual building and signing mobile apps is complex and requires specialized knowledge that is often a single point of failure.",
            solution: "We find engineers who can automate your entire build and signing process in App Center, creating a reliable, repeatable pipeline that anyone on the team can use.",
            kpi: "Automated mobile build & signing pipelines"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "How do you distribute beta builds to your testers?",
            problem: "Emailing .apk or .ipa files around is insecure and inefficient. You need a structured way to manage beta testing.",
            solution: "Our engineers are experts in using App Center's distribution features to manage testing groups and send new builds to internal and external testers with a single click.",
            kpi: "Streamlined beta distribution"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you juggling multiple tools for builds, crash reporting, and analytics?",
            problem: "Using a dozen different tools for your mobile DevOps lifecycle is complex and inefficient.",
            solution: "We look for engineers who can leverage the full, integrated suite of App Center services—Build, Test, Distribute, and Diagnostics—to create a single, unified workflow.",
            kpi: "A single, unified mobile DevOps platform"
        }
    ],
    evaluation: ['Build service configuration (signing, environment variables)', 'Distribution groups for beta testing', 'Crash and analytics integration', 'UI test integration and execution', 'API for automation and scripting']
  },
  'fastlane': {
    name: 'Fastlane',
    category: 'Mobile & Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "You're tired of the manual, error-prone process of signing and deploying your mobile apps. You need an expert in Fastlane who can automate your entire release process, from code signing and version bumping to uploading screenshots and submitting to the app stores.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is managing iOS code signing profiles and certificates a constant headache?",
            problem: "iOS code signing is notoriously complex and a common source of failed builds and frustration.",
            solution: "We find engineers who are masters of Fastlane's `match` tool, which automates the creation and syncing of certificates and provisioning profiles, completely solving the code signing nightmare.",
            kpi: "Automated and reliable iOS code signing"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is submitting a new version to the App Store a 20-step manual process?",
            problem: "Manually taking screenshots, uploading binaries, and filling out metadata is slow and error-prone.",
            solution: "Our engineers can use Fastlane to automate the entire submission process, including capturing screenshots, uploading builds, and updating metadata, turning a day's work into a single command.",
            kpi: "Fully automated App Store submission"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your release process undocumented and dependent on one person?",
            problem: "When your release process isn't codified, it becomes a single point of failure and impossible to improve.",
            solution: "We look for engineers who can codify your entire release process in a `Fastfile`, creating a single, version-controlled source of truth that anyone on the team can run.",
            kpi: "Codified, repeatable release process"
        }
    ],
    evaluation: ['Fastfile and lane creation', 'Code signing management (match)', 'Automated screenshots and metadata', 'Integration with CI/CD systems', 'Plugin ecosystem knowledge']
  },
  'detox': {
    name: 'Detox',
    category: 'Mobile & Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    intro: "Your mobile app's end-to-end tests are flaky and unreliable. You need an expert in gray-box testing with Detox who can write stable, fast, and maintainable E2E tests for your React Native application.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your E2E tests for React Native constantly failing due to timing issues?",
            problem: "Black-box testing frameworks are inherently flaky because they are not synchronized with the app's internal state, leading to tests that fail randomly.",
            solution: "We find engineers who are experts in Detox's gray-box testing approach. Detox automatically synchronizes with the app, eliminating flakiness and creating fast, reliable tests.",
            kpi: "Reliable, synchronization-based testing"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is it difficult to test native UI components in your React Native app?",
            problem: "Testing interactions with native components that are outside of React's control is a major challenge for traditional testing tools.",
            solution: "Our engineers can use Detox's native element matchers to write tests that can interact with and assert on any element, whether it's from React Native or a pure native view.",
            kpi: "Test native and React Native views seamlessly"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "How do you mock native device behavior like push notifications or location services in your tests?",
            problem: "Testing features that rely on device-level APIs is difficult and often requires manual intervention.",
            solution: "We look for engineers who can leverage Detox's mocking capabilities to simulate native device behavior, allowing you to write automated tests for even the most complex features.",
            kpi: "Built-in mocking for native device features"
        }
    ],
    evaluation: ['Test runner integration (Jest)', 'Matchers and actions for interacting with the UI', 'Mocking native modules and network requests', 'CI/CD integration and parallel execution', 'Debugging and troubleshooting test failures']
  },
  'postgresql': { 
    name: 'PostgreSQL', 
    category: 'Data Modeling & Databases', 
    categorySlug: 'data-engineering-analytics', 
    intro: "Your database is a black box, and slow queries are killing your application's performance. You need more than just a SQL writer; you need a PostgreSQL expert who understands indexing, query planning, and advanced features like JSONB and window functions. You're here to find someone who can turn your database from a bottleneck into a powerhouse.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your queries slow, but you don't know why?",
            problem: "Without understanding how to analyze query plans, developers are just guessing at how to improve performance.",
            solution: "We find engineers who are masters of `EXPLAIN ANALYZE`, able to read PostgreSQL's query plans, identify bottlenecks (like a full table scan), and create the right indexes to fix them.",
            kpi: "Mastery of `EXPLAIN ANALYZE` for query tuning"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to query and index semi-structured data?",
            problem: "Storing JSON in a text field makes it impossible to query efficiently. You need to leverage the database's native JSON capabilities.",
            solution: "Our engineers are experts in PostgreSQL's powerful JSONB data type and know how to use GIN indexes to create highly performant queries on semi-structured data.",
            kpi: "Expertise in JSONB and GIN indexing"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your database locking up under high concurrency?",
            problem: "Improper transaction management and a lack of connection pooling can lead to deadlocks and poor performance under load.",
            solution: "We vet for a deep understanding of transaction isolation levels and experience with connection poolers like PgBouncer to ensure your database is both consistent and performant.",
            kpi: "Proficiency in connection pooling & transaction mgmt"
        }
    ], 
    evaluation: ['Advanced indexing strategies (GIN, GiST, BRIN)', 'Query optimization using EXPLAIN ANALYZE', 'Proper use of advanced data types (JSONB, PostGIS)', 'Connection pooling and performance tuning', 'Replication and high-availability concepts'] 
  },
  'mysql': { 
    name: 'MySQL', 
    category: 'Data Modeling & Databases', 
    categorySlug: 'data-engineering-analytics', 
    intro: "You're running one of the world's most popular databases, but are you using it to its full potential? You're here because you need an engineer who knows the deep specifics of MySQL, from storage engine trade-offs (InnoDB vs. MyISAM) to replication strategies and performance tuning. You need an expert who can ensure your database is reliable and scalable.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your database reads causing locks and blocking writes?",
            problem: "Without a transactional storage engine, read operations can lock tables and grind your application to a halt under concurrent load.",
            solution: "We find engineers who have a deep understanding of MySQL storage engines and know why InnoDB is almost always the right choice for its support of row-level locking and ACID transactions.",
            kpi: "Deep understanding of InnoDB"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your single database server a single point of failure?",
            problem: "Without a replication strategy, the failure of your primary database server means a full outage and potential data loss.",
            solution: "Our engineers are experienced in set-ting up and managing MySQL replication (primary-replica), ensuring high availability for reads and a solid disaster recovery strategy.",
            kpi: "Experience with MySQL replication for high availability"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your queries getting slower as your tables grow?",
            problem: "A lack of proper indexing is the number one cause of poor database performance.",
            solution: "We vet for engineers who are experts in MySQL indexing, able to use the slow query log and `EXPLAIN` to identify missing indexes and optimize query performance.",
            kpi: "Expertise in MySQL indexing and performance tuning"
        }
    ], 
    evaluation: ['Storage engine trade-offs (especially InnoDB)', 'Replication setup and troubleshooting', 'Advanced indexing strategies', 'Performance tuning and using the slow query log', 'Understanding of character sets and collations'] 
  },
    'sql': { 
    name: 'SQL Server', 
    category: 'Data Modeling & Databases', 
    categorySlug: 'data-engineering-analytics', 
    intro: "Your enterprise relies on SQL Server, but performance is suffering and technical debt is mounting. You need an engineer with deep T-SQL knowledge who can write optimized queries, design robust stored procedures, and analyze execution plans to solve complex performance problems. You're here to find an expert who can manage your mission-critical data layer.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your complex business logic queries slow and hard to maintain?",
            problem: "Placing complex logic in application code can lead to multiple round trips to the database and poor performance.",
            solution: "We find engineers who are experts in T-SQL and can write powerful, optimized stored procedures to encapsulate complex business logic directly in the database, reducing network latency and improving performance.",
            kpi: "Expertise in T-SQL and stored procedures"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do you know why your queries are slow?",
            problem: "Without the ability to analyze query execution plans, developers are just guessing at how to fix performance issues.",
            solution: "Our engineers are skilled in analyzing SQL Server's graphical execution plans to identify bottlenecks like index scans vs. seeks and apply the correct indexing strategy to solve them.",
            kpi: "Proficiency in analyzing query execution plans"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling with massive, slow-growing tables?",
            problem: "As tables grow into the billions of rows, query performance can degrade significantly, even with proper indexing.",
            solution: "We look for engineers with experience in advanced SQL Server features like table partitioning to manage massive datasets and maintain high performance.",
            kpi: "Experience with table partitioning for large scale"
        }
    ], 
    evaluation: ['Deep T-SQL proficiency, including window functions', 'Analyzing query execution plans and using hints', 'Indexing strategies (clustered vs. non-clustered, columnstore)', 'Stored procedure design and optimization', 'Transaction management and isolation levels'] 
  },
    'dynamodb': {
    name: 'DynamoDB',
    category: 'Data Modeling & Databases',
    categorySlug: 'data-engineering-analytics',
    intro: "You need a fast, scalable NoSQL database, but your data model is inefficient and your costs are spiraling. You need a DynamoDB expert who understands single-table design, can choose the right keys and indexes, and can optimize for both performance and cost.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your DynamoDB bill unpredictable and expensive?",
            problem: "Using provisioned capacity without understanding your traffic patterns leads to either overprovisioning (wasted money) or underprovisioning (throttled requests).",
            solution: "We find engineers who can analyze your usage and implement a cost-effective strategy, using on-demand capacity or auto-scaling to match capacity to your actual needs.",
            kpi: "Cost optimization with on-demand vs. provisioned capacity"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you modeling your DynamoDB table like a relational database?",
            problem: "Using a multi-table, normalized design in DynamoDB is an anti-pattern that leads to multiple round trips and kills the performance benefits of NoSQL.",
            solution: "Our engineers are experts in single-table design, modeling all access patterns into a single table with carefully chosen partition and sort keys to enable fast, single-query data access.",
            kpi: "Mastery of single-table design"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you forced to use slow, expensive `Scan` operations?",
            problem: "If you can't access your data with a `Query`, you don't have an effective data model. `Scan` operations are a symptom of a broken design.",
            solution: "We vet for engineers who can design effective primary keys and secondary indexes (GSI/LSI) to support all of your application's access patterns with efficient `Query` operations.",
            kpi: "Designing for efficient `Query` access patterns"
        }
    ],
    evaluation: ['Single-table vs. multi-table design trade-offs', 'Primary key and secondary index selection', 'Query vs. scan operations and performance', 'Capacity management (provisioned vs. on-demand)', 'Advanced features (streams, transactions, TTL)']
  },
  'redis': { 
    name: 'Redis', 
    category: 'Data Modeling & Databases', 
    categorySlug: 'data-engineering-analytics', 
    intro: "Your application is slow because you're hitting your primary database for everything. You need an engineer who understands how to use Redis as a powerful tool for caching, session storage, and real-time messaging. You're here to find an expert who knows Redis data structures inside and out and can implement effective caching patterns to dramatically improve your application's performance.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your database overloaded with repetitive queries?",
            problem: "Hitting your primary database for frequently accessed but rarely changed data is inefficient and a major performance bottleneck.",
            solution: "We find engineers who are experts in implementing caching patterns (like cache-aside) with Redis to offload traffic from your database and serve requests at in-memory speed.",
            kpi: "Expertise in caching patterns to reduce DB load"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you using the wrong Redis data structure for the job?",
            problem: "Using only strings (GET/SET) in Redis is a common mistake. Redis has powerful, specialized data structures that are far more efficient for specific tasks.",
            solution: "Our engineers have a deep understanding of Redis data structures, knowing when to use Hashes for objects, Sets for uniqueness, or Sorted Sets for leaderboards, leading to more efficient memory usage and simpler code.",
            kpi: "Deep knowledge of Redis data structures"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your Redis cache a single point of failure?",
            problem: "A single Redis instance is not highly available. If it fails, your application's performance will degrade significantly as all traffic hits the primary database.",
            solution: "We look for engineers with experience in set-ting up high-availability Redis with Sentinel or Cluster, ensuring your caching layer is as resilient as your database.",
            kpi: "Experience with high-availability Redis (Sentinel/Cluster)"
        }
    ], 
    evaluation: ['Optimal use of Redis data structures', 'Caching patterns (e.g., cache-aside, write-through)', 'Persistence options (RDB vs. AOF)', 'High availability with Redis Sentinel or Cluster', 'Use cases for Pub/Sub and Streams'] 
  },
  'memcached': { 
    name: 'Memcached', 
    category: 'Data Modeling & Databases', 
    categorySlug: 'data-engineering-analytics', 
    intro: "You need a simple, fast, and scalable in-memory caching layer, and you don't need the complexity of Redis. You're here because you need an engineer who understands how to use Memcached effectively for object caching. You need an expert who can design a solid cache invalidation strategy and scale a distributed caching layer to reduce database load and speed up your application.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your application still serving stale data from the cache?",
            problem: "Cache invalidation is one of the hard problems in computer science. An incorrect invalidation strategy leads to a poor user experience.",
            solution: "We find engineers who can implement robust cache invalidation strategies, knowing when to write-through, write-around, or use TTLs to ensure data consistency.",
            kpi: "Expertise in cache invalidation strategies"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "What happens when your cache fills up?",
            problem: "Without understanding Memcached's memory allocation (slabs) and eviction policies (LRU), you can't predict how it will behave under pressure.",
            solution: "Our engineers understand how Memcached manages memory, allowing them to configure it for optimal performance and predict its behavior at scale.",
            kpi: "Understanding of Memcached's memory management"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "How do you scale your caching layer as your application grows?",
            problem: "A single Memcached server won't be enough. You need a strategy to distribute your cache across multiple servers.",
            solution: "We vet for engineers who have experience with client-side hashing to build a scalable, distributed Memcached cluster that can grow with your application.",
            kpi: "Experience with building distributed Memcached clusters"
        }
    ], 
    evaluation: ['Effective cache invalidation strategies', 'Understanding of the slab allocator', 'Use cases and trade-offs vs. Redis', 'Scaling strategies for a distributed cache', 'Handling cache misses and stampedes'] 
  },
  'typeorm': {
    name: 'TypeORM',
    category: 'Data Modeling & Databases',
    categorySlug: 'backend-services',
    intro: "Your TypeScript backend's data layer is a mess of untyped queries. You need a TypeORM expert who can build a type-safe, maintainable data access layer, manage migrations, and optimize queries without gettings tangled in ORM pitfalls.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you writing raw SQL queries and losing the benefits of TypeScript?",
            problem: "A lack of type safety in your data layer leads to runtime errors and makes refactoring a nightmare.",
            solution: "We find engineers who are masters of TypeORM, able to build a fully type-safe data access layer using entities and repositories, catching errors at compile time, not in production.",
            kpi: "Building a fully type-safe data access layer"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling with the N+1 query problem?",
            problem: "Like any ORM, TypeORM can easily generate inefficient queries if you're not careful, especially when dealing with relations.",
            solution: "Our engineers are experts in using TypeORM's QueryBuilder and relation options to craft efficient queries and avoid the dreaded N+1 problem.",
            kpi: "Expertise in TypeORM query optimization"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your database schema changes a manual, error-prone process?",
            problem: "Managing database schema changes by hand is risky and leads to inconsistencies between environments.",
            solution: "We look for engineers who can use TypeORM's migration system to manage database schema changes in a safe, repeatable, and version-controlled way.",
            kpi: "Reliable database schema management with migrations"
        }
    ],
    evaluation: ['Entity and repository patterns', 'QueryBuilder vs. FindOptions', 'Managing relations and avoiding N+1', 'Migration generation and execution', 'Transaction management']
  },
  'ef-core': {
    name: 'EF Core',
    category: 'Data Modeling & Databases',
    categorySlug: 'backend-services',
    intro: "You're building on the .NET stack and need a robust data access layer. You need an Entity Framework Core expert who can model complex domains, write efficient LINQ queries, and manage database migrations flawlessly.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is EF Core generating slow, inefficient SQL queries?",
            problem: "It's easy to write LINQ that looks simple but translates to monstrously complex SQL. Without understanding the translation, you can't fix performance issues.",
            solution: "We find engineers who are experts in analyzing the SQL generated by EF Core and can write optimized LINQ queries to ensure high performance.",
            kpi: "Mastery of LINQ query optimization"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling with change tracking performance and unexpected updates?",
            problem: "EF Core's powerful change tracker can sometimes have surprising performance implications if not used correctly.",
            solution: "Our engineers have a deep understanding of the DbContext and change tracker lifecycle, allowing them to use features like `AsNoTracking()` for read-only queries to maximize performance.",
            kpi: "Deep understanding of the DbContext lifecycle"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your code-first migration history a mess?",
            problem: "Managing migrations in a team environment can lead to conflicts and a broken migration history if not handled with discipline.",
            solution: "We look for engineers with experience in managing EF Core migrations in a team setting, using best practices to ensure a clean, linear, and reliable migration path.",
            kpi: "Best practices for team-based migration management"
        }
    ],
    evaluation: ['DbContext configuration and lifetime', 'Advanced LINQ query translation', 'Change tracking and performance', 'Migration strategies (code-first)', 'Raw SQL queries and stored procedures']
  },
  'snowflake': {
    name: 'Snowflake/BigQuery/Redshift',
    category: 'Data Engineering / Analytics',
    categorySlug: 'data-engineering-analytics',
    intro: "Your data warehouse is slow and expensive. You need an expert in modern cloud data warehouses like Snowflake, BigQuery, or Redshift who can optimize storage, tune query performance, and build a cost-effective, scalable analytics platform.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your data warehouse bill growing uncontrollably?",
            problem: "Cloud data warehouses have a consumption-based pricing model. Without careful management of compute and storage, costs can quickly spiral.",
            solution: "We find engineers who are experts in cloud warehouse cost optimization, able to configure virtual warehouses, set resource monitors, and choose the right storage strategies to control costs.",
            kpi: "Expertise in cloud warehouse cost optimization"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your queries taking minutes or even hours to run?",
            problem: "Poor data modeling and a lack of performance tuning can bring your analytics to a grinding halt.",
            solution: "Our engineers are skilled in performance tuning, using techniques like clustering (Snowflake), partitioning (BigQuery), and distribution keys (Redshift) to make your queries run orders of magnitude faster.",
            kpi: "Mastery of cloud warehouse performance tuning"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you unable to share data securely with partners and customers?",
            problem: "Moving large datasets around is slow, insecure, and expensive. You need a way to share data in-place.",
            solution: "We look for engineers with experience in modern data sharing features, allowing you to securely share live data with other accounts without creating any copies.",
            kpi: "Experience with secure data sharing"
        }
    ],
    evaluation: ['Architecture and data storage concepts (e.g., micro-partitions)', 'Performance tuning (clustering, partitioning)', 'Cost management and virtual warehouse optimization', 'Data sharing and security features', 'SQL extensions and UDFs']
  },
  'dbt': { 
    name: 'dbt', 
    category: 'Data Engineering / Analytics', 
    categorySlug: 'data-engineering-analytics', 
    intro: "Your data warehouse is a swamp of untested, undocumented SQL scripts. You're here because you need to bring software engineering best practices to your analytics workflow. You need an analytics engineer who is a master of dbt, someone who can build modular, testable, and well-documented data models that your entire organization can trust.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Does anyone trust the data in your dashboards?",
            problem: "Without testing, data pipelines are brittle and produce unreliable data, eroding trust across the organization.",
            solution: "We find analytics engineers who are experts in dbt's testing features, able to write data quality tests that guarantee your models are accurate, fresh, and trustworthy.",
            kpi: "Building trustworthy, tested data models"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your data transformation logic a copy-paste mess of SQL scripts?",
            problem: "Duplicated SQL logic is impossible to maintain and leads to inconsistencies and bugs.",
            solution: "Our engineers are masters of dbt's Jinja templating and macros, allowing them to build modular, DRY (Don't Repeat Yourself) data models that are easy to maintain and refactor.",
            kpi: "Modular and maintainable data models with Jinja"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your data warehouse a black box with no documentation?",
            problem: "Without documentation, business users can't discover or understand your data, making self-service analytics impossible.",
            solution: "We look for engineers who can leverage dbt's documentation features to automatically generate a living, browsable data catalog, complete with data lineage graphs, empowering the entire organization.",
            kpi: "Automated data cataloging and documentation"
        }
    ],
    evaluation: ['Data modeling for analytics (Kimball, dimensional modeling)', 'Advanced Jinja and macro usage for DRY code', 'dbt testing (generic, singular, custom)', 'Materialization strategies and performance tuning', 'Deployment, orchestration, and CI/CD for dbt projects'] 
  },
  'airflow': { 
    name: 'Airflow/Prefect', 
    category: 'Pipelines & Orchestration', 
    categorySlug: 'data-engineering-analytics', 
    intro: "Your data pipelines are a collection of fragile cron jobs and shell scripts that fail silently in the middle of the night. You're here because you need to build a reliable, observable, and maintainable data orchestration platform. You need an engineer who is an expert in modern workflow orchestrators like Airflow, Prefect, or Dagster to turn your pipeline chaos into a production-grade system.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do your data pipelines fail silently, corrupting your data?",
            problem: "Cron jobs have no built-in alerting, retries, or dependency management, making them completely unsuitable for production data pipelines.",
            solution: "We find engineers who are experts in Airflow, able to build reliable pipelines with automated retries, alerting, and complex dependency management.",
            kpi: "Building reliable, observable data pipelines"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is it impossible to re-run a failed pipeline from the point of failure?",
            problem: "When a cron job fails halfway through, you often have to start from scratch, which is slow and expensive.",
            solution: "Our engineers design idempotent tasks and DAGs in Airflow, allowing you to safely re-run pipelines and backfill historical data without causing side effects.",
            kpi: "Idempotent DAG design for safe backfills & retries"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your orchestration system a bottleneck that can't scale?",
            problem: "A single scheduler can't handle a large number of concurrent tasks. You need a way to scale out your workers.",
            solution: "We look for engineers with experience in scaling Airflow, using executors like the Celery or Kubernetes executor to run thousands of tasks in parallel.",
            kpi: "Experience with scaling Airflow for high concurrency"
        }
    ], 
    evaluation: ['DAG design, scheduling, and idempotency', 'Dynamic task generation and complex dependencies', 'Idempotency, backfills, and historical runs', 'Scaling executors and managing parallelism', 'Custom operators and hooks'] 
  },
  'fivetran': {
    name: 'Fivetran/Airbyte',
    category: 'Data Engineering / Analytics',
    categorySlug: 'data-engineering-analytics',
    intro: "You're spending too much engineering time building and maintaining brittle data ingestion pipelines. You need an expert in automated ELT tools like Fivetran or Airbyte who can quickly and reliably sync data from all your sources into your data warehouse.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your engineers wasting weeks building and maintaining custom API connectors?",
            problem: "Every SaaS tool your company uses has a different API. Building and maintaining pipelines for each one is a massive, low-leverage time sink.",
            solution: "We find engineers who can use pre-built connectors from Fivetran or Airbyte to sync data from hundreds of sources in minutes, freeing up your team to work on high-value data modeling.",
            kpi: "Eliminate time spent on building custom connectors"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do your data pipelines break every time a source API changes its schema?",
            problem: "Upstream schema changes are a constant source of pipeline failures.",
            solution: "Our engineers are experienced with tools that automatically detect and adapt to schema changes, ensuring your pipelines are resilient and your data is never lost.",
            kpi: "Automated schema change handling"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to get data from a source that isn't supported?",
            problem: "What do you do when a pre-built connector doesn't exist for one of your niche internal tools?",
            solution: "We look for engineers with experience in Airbyte's Connector Development Kit (CDK), allowing them to rapidly build new, custom connectors when needed.",
            kpi: "Ability to build custom connectors with the CDK"
        }
    ],
    evaluation: ['Connector configuration and troubleshooting', 'Data replication strategies (incremental, full)', 'Handling schema changes and drift', 'Custom connector development (Airbyte)', 'Monitoring and alerting for sync failures']
  },
  'kafka': { 
    name: 'Kafka/RabbitMQ', 
    category: 'Pipelines & Orchestration', 
    categorySlug: 'data-engineering-analytics', 
    intro: "Your services are either tightly coupled and fragile, or you're losing data between asynchronous processes. You need an engineer who understands how to build resilient, event-driven systems with a message broker. You're here to find an expert in Kafka, RabbitMQ, or NATS who can design a robust messaging architecture that guarantees delivery and enables your system to scale.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your services so tightly coupled that a failure in one brings down the whole system?",
            problem: "Synchronous communication between microservices creates a chain of dependencies that is fragile and hard to scale.",
            solution: "We find engineers who are experts in event-driven architecture, using a message broker to decouple services and build a more resilient, scalable system.",
            kpi: "Decoupling services with event-driven architecture"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you losing critical data when a downstream service is unavailable?",
            problem: "Without a persistent message queue, transient failures can lead to permanent data loss.",
            solution: "Our engineers can design a messaging architecture with the right delivery guarantees (at-least-once) and dead-letter queues (DLQs) to ensure that no message is ever lost.",
            kpi: "Guaranteed message delivery & no data loss"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Can your system handle sudden spikes in traffic?",
            problem: "Sudden traffic spikes can overload your services and cause them to fail.",
            solution: "We look for engineers who can use a message queue as a buffer to absorb traffic spikes, allowing your services to process messages at their own pace without being overwhelmed.",
            kpi: "Using a message queue as a load-leveling buffer"
        }
    ], 
    evaluation: ['Message delivery guarantees (at-least-once, etc.)', 'Topic/exchange and partition design', 'Consumer group scaling and rebalancing', 'Dead-letter queue (DLQ) and error handling patterns', 'Performance tuning for throughput and latency'] 
  },
  'spark': {
    name: 'Spark',
    category: 'Data Engineering / Analytics',
    categorySlug: 'data-engineering-analytics',
    intro: "You're dealing with massive datasets that can't be processed on a single machine. You need a Spark expert who can write optimized distributed data processing jobs, tune for performance, and manage a Spark cluster effectively.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your Spark jobs slow and expensive due to excessive data shuffling?",
            problem: "The 'shuffle' is the most expensive operation in Spark. Poorly designed jobs can spend most of their time shuffling data across the network.",
            solution: "We find engineers who are experts in Spark performance tuning, able to use techniques like partitioning, broadcasting, and choosing the right join strategies to minimize shuffling and optimize performance.",
            kpi: "Expertise in minimizing data shuffling"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling with 'Out Of Memory' errors on your Spark workers?",
            problem: "Incorrectly sized executors or inefficient data structures can easily lead to memory issues in a distributed environment.",
            solution: "Our engineers understand how Spark manages memory and can configure executors, and tune serialization to ensure jobs run reliably without memory errors.",
            kpi: "Proficiency in Spark memory management"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you trying to process real-time data with a batch-oriented tool?",
            problem: "Using Spark's legacy RDDs or micro-batch streaming for true real-time use cases is inefficient.",
            solution: "We look for engineers with experience in Spark's modern Structured Streaming engine, which provides a high-level API for building robust, end-to-end stream processing applications.",
            kpi: "Experience with modern Structured Streaming"
        }
    ],
    evaluation: ['Core concepts (RDDs, DataFrames, Datasets)', 'Performance tuning (shuffling, partitioning)', 'Spark SQL and query optimization', 'Structured Streaming for real-time processing', 'Deployment on YARN or Kubernetes']
  },
  'looker': {
    name: 'Looker/Tableau',
    category: 'Data Engineering / Analytics',
    categorySlug: 'data-engineering-analytics',
    intro: "You have data, but your business users can't get answers from it. You need a BI expert who can master Looker or Tableau to build intuitive dashboards, create reliable data models, and empower your organization to make data-driven decisions.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do you have dozens of dashboards that all show different numbers for the same metric?",
            problem: "Without a centralized data modeling layer, every dashboard becomes a new source of truth, leading to inconsistency and eroding trust in data.",
            solution: "We find engineers who are experts in building a centralized, version-controlled modeling layer (e.g., LookML in Looker) to create a single source of truth for all your business metrics.",
            kpi: "A single source of truth with a semantic layer"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your dashboards so slow that no one uses them?",
            problem: "Poorly designed data models and inefficient queries can make dashboards take minutes to load.",
            solution: "Our engineers are skilled in BI performance optimization, using techniques like aggregate awareness (in Looker) and materialized views to ensure dashboards are fast and responsive.",
            kpi: "High-performance, responsive dashboards"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Can your business users answer their own questions, or are they stuck in the data team's backlog?",
            problem: "If your BI tool is just a dashboarding tool, you're not getting its full value. It should be a self-service exploration platform.",
            solution: "We look for engineers who can build an intuitive, well-documented data model that empowers business users to safely explore data and answer their own questions without needing to write SQL.",
            kpi: "Empowering self-service analytics"
        }
    ],
    evaluation: ['Data modeling (LookML in Looker)', 'Advanced visualization and dashboard design', 'Performance optimization for dashboards', 'Row-level security and access control', 'Embedding analytics into other applications']
  },
  'datahub': {
    name: 'DataHub/Amundsen',
    category: 'Data Engineering / Analytics',
    categorySlug: 'data-engineering-analytics',
    intro: "Your data landscape is a black box. No one knows where data comes from, who owns it, or if it can be trusted. You need an expert in data discovery and cataloging tools like DataHub or Amundsen to create a single source of truth for your data assets.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your data warehouse a 'data swamp' that no one can navigate?",
            problem: "Without a catalog, data assets are impossible to find, leading to duplicated effort and a lack of trust.",
            solution: "We find engineers who can implement a data catalog to provide a single, searchable interface for all your data assets, from database tables to dashboards.",
            kpi: "A single place to discover all data assets"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "When a dashboard is broken, can you trace the problem back to the source?",
            problem: "Without end-to-end data lineage, debugging data quality issues is a nightmare of manual detective work.",
            solution: "Our engineers are experts in set-ting up automated data lineage, allowing you to see exactly where your data comes from and how it's transformed, from the source system to the final dashboard.",
            kpi: "Automated, end-to-end data lineage"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Who owns this data? Can I use it?",
            problem: "A lack of clear ownership and governance leads to a free-for-all, where sensitive data can be misused and no one is accountable.",
            solution: "We look for engineers who can use a data catalog to implement data governance workflows, assigning owners to data assets, classifying sensitive data (PII), and providing context on how data should be used.",
            kpi: "Data governance with clear ownership & classification"
        }
    ],
    evaluation: ['Metadata ingestion from various sources', 'Data lineage visualization and troubleshooting', 'Data ownership and governance workflows', 'Customizing the metadata model', 'Deployment and scaling of the data catalog']
  },
  'great-expectations': {
    name: 'Great Expectations',
    category: 'Data Engineering / Analytics',
    categorySlug: 'data-engineering-analytics',
    intro: "You're tired of discovering data quality issues in your production dashboards. You need a data quality expert who can use Great Expectations to define, validate, and monitor the quality of your data pipelines, catching issues before they impact your business.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you finding out about data quality issues from angry executives?",
            problem: "Discovering data quality issues in a dashboard means the bad data has already corrupted your analytics and eroded trust.",
            solution: "We find engineers who can integrate Great Expectations directly into your data pipelines, stopping bad data at the source and preventing it from ever reaching your warehouse.",
            kpi: "Catching bad data at the source"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your data quality rules just a collection of ad-hoc SQL queries?",
            problem: "Manual data quality checks are not scalable, version-controlled, or easily shareable.",
            solution: "Our engineers are experts in creating 'Expectation Suites'—declarative, version-controlled, and reusable sets of data quality rules that act as contracts for your data.",
            kpi: "Declarative, version-controlled data contracts"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your data quality documentation always out of date?",
            problem: "Manual documentation for data quality rules is never maintained.",
            solution: "We look for engineers who can leverage 'Data Docs' to automatically generate a living document of your data quality rules and validation results, providing a single source of truth for data quality.",
            kpi: "Living documentation for data quality"
        }
    ],
    evaluation: ['Creating and managing expectation suites', 'Integrating data validation into data pipelines (e.g., with Airflow)', 'Data profiling and automated expectation generation', 'Data Docs for documentation and reporting', 'Custom expectation development']
  },
  'prisma': { 
    name: 'Prisma', 
    category: 'Data Modeling & Databases', 
    categorySlug: 'backend-services', 
    intro: "You want the safety of TypeScript across your entire stack, including your database layer. You're here because you need an engineer who can leverage Prisma to build type-safe, maintainable, and performant database applications. You need an expert who understands schema design, migrations, and how to use the Prisma Client effectively without running into performance pitfalls.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you catching SQL syntax errors at runtime instead of compile time?",
            problem: "Writing raw SQL queries in a TypeScript application throws away the benefits of type safety, leading to runtime errors and difficult refactoring.",
            solution: "We find engineers who are masters of Prisma, providing a fully type-safe database client that catches errors at compile time and makes your data access layer robust and easy to refactor.",
            kpi: "End-to-end type safety from your API to your DB"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your database migrations a manual, risky process?",
            problem: "Manual writing and applying SQL migration scripts is error-prone and can lead to inconsistencies between environments.",
            solution: "Our engineers are experts in using Prisma Migrate, which automatically generates SQL migrations from your declarative schema, ensuring your database schema is always in sync with your application code.",
            kpi: "Safe, declarative database migrations"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is it difficult to see and manage your data during development?",
            problem: "Jumping between your code and a separate SQL client slows down development and makes it hard to debug data issues.",
            solution: "We look for engineers who can leverage the full Prisma toolkit, including the Prisma Studio GUI, which provides an instant, Excel-like interface to browse and edit data in your development database.",
            kpi: "Improved developer experience with Prisma Studio"
        }
    ], 
    evaluation: ['Schema design and migration workflows', 'Query engine performance and optimization', 'Type-safe data access patterns', 'Transaction management and interactive transactions', 'Extending Prisma Client with custom methods'] 
  },
  'sqlalchemy': { 
    name: 'SQLAlchemy', 
    category: 'Data Modeling & Databases', 
    categorySlug: 'backend-services', 
    intro: "Your Python application's database access is a mix of raw SQL strings and fragile, custom-built logic. You need an engineer who can build a robust and maintainable data access layer using SQLAlchemy, the gold standard in the Python world. You need an expert who knows the trade-offs between the Core and the ORM and can solve performance issues like the N+1 problem.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to choose between the power of SQL and the convenience of an ORM?",
            problem: "Many ORMs hide the underlying SQL, making it hard to optimize. But writing raw SQL everywhere is not maintainable.",
            solution: "We find engineers who understand SQLAlchemy's unique two-layered approach, using the high-level ORM for convenience and dropping down to the SQL Expression Language (Core) for powerful, optimized queries when needed.",
            kpi: "Expertise in both the ORM and Core layers"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your ORM causing N+1 query performance problems?",
            problem: "Lazy loading of relationships is a classic ORM pitfall that leads to thousands of unnecessary database queries.",
            solution: "Our engineers are masters of SQLAlchemy's relationship loading strategies, able to use `selectinload` or `joinedload` to eliminate N+1 problems and write highly efficient queries.",
            kpi: "Mastery of relationship loading strategies"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your database schema changes managed with risky, manual SQL scripts?",
            problem: "Manual schema changes are not version-controlled and are a common source of deployment failures.",
            solution: "We look for engineers who are proficient in Alembic, the migration tool built by the creator of SQLAlchemy, to provide safe, repeatable, and version-controlled database migrations.",
            kpi: "Reliable database migrations with Alembic"
        }
    ], 
    evaluation: ['Core vs. ORM trade-offs', 'Session management and transaction patterns', 'Lazy vs. eager loading strategies (to avoid N+1)', 'Alembic for database migrations', 'Advanced query construction and optimization'] 
  },
  'hibernate': { 
    name: 'Hibernate', 
    category: 'Data Modeling & Databases', 
    categorySlug: 'backend-services', 
    intro: "Your Java application is plagued by slow database performance and complex data access logic. You're here because you need a Hibernate expert who can navigate the complexities of an enterprise-grade ORM. You need someone who understands the entity lifecycle, caching, and how to write efficient JPQL/HQL to build high-performance, data-driven applications.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is Hibernate's 'magic' causing unexpected and slow behavior?",
            problem: "Hibernate is powerful, but its complexity can lead to surprising behavior, especially around session management and entity state transitions.",
            solution: "We find engineers with a deep understanding of the Hibernate entity lifecycle (transient, persistent, detached), allowing them to use the ORM predictably and avoid common pitfalls.",
            kpi: "Deep understanding of the entity lifecycle"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you fetching the same data from the database over and over?",
            problem: "Without a proper caching strategy, your application will make redundant database calls, killing performance.",
            solution: "Our engineers are experienced with Hibernate's caching strategies, knowing when and how to use the first-level (session) cache and configure a second-level cache for application-wide performance gains.",
            kpi: "Expertise in L1 and L2 caching"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your application full of N+1 query problems?",
            problem: "This is a classic and severe performance issue in any application that uses an ORM.",
            solution: "We vet for engineers who are experts in diagnosing and fixing N+1 problems in Hibernate, using techniques like fetch profiles, join fetching in HQL/JPQL, and batch fetching.",
            kpi: "Mastery of solving N+1 query problems"
        }
    ], 
    evaluation: ['Entity lifecycle and state management', 'Caching strategies (L1/L2) and their pitfalls', 'Solving the N+1 problem with fetch strategies', 'JPQL/HQL proficiency and optimization', 'Transaction management and isolation levels'] 
  },
  'flink': { 
    name: 'Flink/Beam', 
    category: 'Pipelines & Orchestration', 
    categorySlug: 'data-engineering-analytics', 
    intro: "You need to process data in real-time, not just in hourly batches. You're here because you need to build sophisticated, stateful stream processing applications. You need an engineer who is an expert in Flink or Beam who understands the complexities of windowing, watermarks, and state management to derive insights from your data as it happens.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Can you correctly handle late-arriving data in your real-time analytics?",
            problem: "In a real-world stream, data often arrives out of order or late. A naive implementation will produce incorrect results.",
            solution: "We find engineers who are experts in stateful stream processing, able to use watermarks and allowed lateness to correctly handle out-of-order data and ensure analytical accuracy.",
            kpi: "Correct handling of out-of-order data"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Does your stream processing job lose its state when it fails?",
            problem: "Without fault tolerance, any failure means losing the state of your calculations (e.g., a running count), forcing you to start over.",
            solution: "Our engineers are experienced in configuring Flink's checkpointing mechanism, which provides exactly-once processing guarantees and ensures your application can recover from failures without losing state.",
            kpi: "Fault-tolerant, exactly-once stream processing"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you writing separate pipelines for your batch and stream processing needs?",
            problem: "Maintaining two separate codebases for batch and stream analytics is complex and inefficient.",
            solution: "We look for engineers with experience in unified batch and stream processing frameworks like Apache Beam, which allow you to write a single pipeline that can run in either batch or streaming mode.",
            kpi: "Unified batch and stream processing with Beam"
        }
    ], 
    evaluation: ['Stateful streaming concepts and backends', 'Windowing (tumbling, sliding, session) and watermarks', 'Connectors, sources, and sinks', 'Fault tolerance and checkpointing', 'Beam portability and runner specifics'] 
  },
  'pytorch': { 
    name: 'PyTorch', 
    category: 'ML/AI & LLM Ops', 
    categorySlug: 'ml-ai-llm-ops', 
    intro: "You're moving beyond basic models and need to build custom neural networks. You're here because you need an engineer with deep PyTorch expertise who can design complex architectures, create efficient data loading pipelines, and write optimized training loops. You need an expert who can take a research paper and turn it into a working, high-performance model.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your model training times excessively long?",
            problem: "Inefficient data loading, not using the GPU correctly, or using unoptimized training loops can make training take days instead of hours.",
            solution: "We find engineers who are experts in PyTorch performance, able to use the DataLoader with multiple workers, leverage mixed-precision training, and write optimized code to maximize GPU utilization.",
            kpi: "Expertise in high-performance PyTorch training"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your code a messy collection of scripts that is hard to reproduce?",
            problem: "Research code is often not production-ready. You need a way to structure your PyTorch projects for reproducibility and maintainability.",
            solution: "Our engineers are proficient in libraries like PyTorch Lightning, which provide a high-level structure for PyTorch code, eliminating boilerplate and making projects clean, readable, and reproducible.",
            kpi: "Structured, reproducible projects with PyTorch Lightning"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "How do you serve your PyTorch models in production?",
            problem: "Moving a model from a training script to a scalable, production-ready inference service is a major challenge.",
            solution: "We look for engineers with experience in serving PyTorch models, using tools like TorchServe or building custom inference services with a web framework like FastAPI.",
            kpi: "Experience in productionizing PyTorch models"
        }
    ], 
    evaluation: ['Custom neural network architecture design', 'DataLoader, datasets, and data preprocessing', 'Optimized training loops and GPU utilization', 'TorchServe or other deployment strategies', 'Debugging and performance profiling in PyTorch'] 
  },
  'scikit-learn': {
    name: 'scikit-learn',
    category: 'ML/AI & LLM Ops',
    categorySlug: 'ml-ai-llm-ops',
    intro: "You need to build classical machine learning models, but you need someone who can go beyond a simple `model.fit()`. You need an expert in scikit-learn who understands preprocessing pipelines, cross-validation, and model evaluation to build robust and reliable ML systems.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you leaking data from your test set into your training process?",
            problem: "A common and severe mistake is to fit a preprocessor (like a scaler) on the entire dataset before splitting. This data leakage leads to overly optimistic performance metrics and models that fail in production.",
            solution: "We find engineers who are experts in scikit-learn's `Pipeline` object, which ensures that preprocessing steps are correctly applied within each fold of a cross-validation, preventing data leakage.",
            kpi: "Preventing data leakage with `Pipeline`"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you manually tuning your model's hyperparameters?",
            problem: "Manual hyperparameter tuning is slow, inefficient, and unlikely to find the optimal combination.",
            solution: "Our engineers are proficient in using `GridSearchCV` or `RandomizedSearchCV` to automatically and systematically search for the best hyperparameters for a model.",
            kpi: "Automated hyperparameter tuning"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you evaluating your model with the wrong metric?",
            problem: "Using accuracy on an imbalanced dataset, for example, is highly misleading. You need to choose the right evaluation metric for your business problem.",
            solution: "We vet for a deep understanding of model evaluation, ensuring the engineer can choose and interpret the correct metric (e.g., precision, recall, F1-score, AUC) for the specific business context.",
            kpi: "Choosing the right evaluation metric for the business problem"
        }
    ],
    evaluation: ['Pipelines for preprocessing and modeling', 'Cross-validation and hyperparameter tuning', 'Model evaluation metrics and interpretation', 'Feature engineering and selection', 'Deploying scikit-learn models as services']
  },
  'transformers': { 
    name: 'Transformers', 
    category: 'ML/AI & LLM Ops', 
    categorySlug: 'ml-ai-llm-ops', 
    intro: "You're building applications with Large Language Models, and you need an engineer who is an expert in the Hugging Face ecosystem. You're here because you need someone who knows how to fine-tune models for specific tasks, implement efficient tokenization strategies, and optimize models for production inference using techniques like quantization.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are pre-trained models not performing well enough on your specific domain?",
            problem: "General-purpose models often lack the specialized knowledge required for your industry or use case.",
            solution: "We find engineers who are experienced in fine-tuning models using the Hugging Face `Trainer` API and libraries like PEFT (Parameter-Efficient Fine-Tuning) to adapt models to your specific data.",
            kpi: "Expertise in fine-tuning with PEFT/LoRA"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your LLM inference costs too high and performance too slow?",
            problem: "Running large, unoptimized models in production is expensive and slow.",
            solution: "Our engineers are skilled in model optimization techniques like quantization (e.g., with `bitsandbytes`) to reduce the memory footprint and increase the inference speed of your models.",
            kpi: "Model optimization with quantization"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to manage and version your models, datasets, and tokenizers?",
            problem: "The assets required for an NLP project are numerous and can quickly become a disorganized mess.",
            solution: "We look for engineers who are experts in the Hugging Face Hub, able to use it as a central repository to version, share, and collaborate on all their NLP assets.",
            kpi: "Asset management with the Hugging Face Hub"
        }
    ], 
    evaluation: ['Hugging Face ecosystem (Datasets, Tokenizers, Accelerate)', 'Fine-tuning pre-trained models (e.g., with PEFT/LoRA)', 'Tokenization strategies and their impact', 'Quantization and optimization for inference', 'Deploying and serving Transformer models'] 
  },
  'openai': {
    name: 'OpenAI/Anthropic SDKs',
    category: 'ML/AI & LLM Ops',
    categorySlug: 'ml-ai-llm-ops',
    intro: "You're integrating powerful foundation models into your product, but you need an engineer who can do more than just make a simple API call. You need an expert who understands how to handle streaming, manage retries, and structure calls for reliable and cost-effective results.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your chat interface slow because you're waiting for the full response?",
            problem: "Waiting for the entire LLM response to generate before displaying it creates a slow, unresponsive user experience.",
            solution: "We find engineers who can correctly implement streaming responses from the API, displaying tokens to the user as they are generated for a real-time, ChatGPT-like experience.",
            kpi: "Implementing streaming for a real-time UX"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Does your application fail when the LLM API is overloaded or has a transient error?",
            problem: "LLM APIs can be unreliable. Not having a robust retry strategy will lead to failed user requests.",
            solution: "Our engineers are experienced in implementing robust error handling and retry logic (e.g., with exponential backoff) to make your application resilient to transient API failures.",
            kpi: "Building resilient apps with robust retry logic"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you just using the LLM as a text generator, not a reasoning engine?",
            problem: "The real power of modern LLMs is their ability to use tools. If you're not using function calling, you're missing out on the biggest value.",
            solution: "We look for engineers who are experts in using the function calling/tool use capabilities of modern APIs, allowing the LLM to call your internal APIs, query databases, and take real actions.",
            kpi: "Expertise in function calling / tool use"
        }
    ],
    evaluation: ['API authentication and security best practices', 'Streaming responses for better UX', 'Error handling and retry logic', 'Function calling and tool use implementation', 'Cost management and token optimization']
  },
  'vllm': { 
    name: 'vLLM', 
    category: 'ML/AI & LLM Ops', 
    categorySlug: 'ml-ai-llm-ops', 
    intro: "Your LLM inference is slow and expensive, and you can't serve enough concurrent users. You're here because you need to dramatically improve the throughput and efficiency of your model serving. You need an expert in vLLM who understands concepts like PagedAttention and continuous batching to build a high-performance, cost-effective inference service.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your GPU memory wasted, limiting your batch size?",
            problem: "Traditional LLM serving wastes over 50% of GPU memory on reserved but unused space for the KV cache, severely limiting throughput.",
            solution: "We find engineers who understand how vLLM's PagedAttention algorithm efficiently manages the KV cache, nearly eliminating memory waste and dramatically increasing the effective batch size.",
            kpi: "Massively increased throughput with PagedAttention"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your GPU idle while waiting for a full batch to finish generating?",
            problem: "In traditional batching, the entire batch must wait for the slowest generation to complete, leaving the GPU underutilized.",
            solution: "Our engineers are experts in vLLM's continuous batching, which allows new requests to be added to the batch as soon as others finish, leading to much higher GPU utilization and lower latency.",
            kpi: "Higher GPU utilization with continuous batching"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to serve multiple models or LoRA adapters?",
            problem: "Serving many different fine-tuned models or adapters on the same GPU is a complex operational challenge.",
            solution: "We look for engineers with experience in vLLM's support for multi-LoRA serving, allowing you to serve hundreds of fine-tuned models on a single GPU with minimal overhead.",
            kpi: "High-density multi-model serving"
        }
    ], 
    evaluation: ['Understanding of PagedAttention and its benefits', 'Continuous batching for high throughput', 'Deployment as a scalable API service', 'Performance tuning and GPU utilization', 'Compatibility with different model architectures'] 
  },
  'ray': { 
    name: 'Ray Serve', 
    category: 'ML/AI & LLM Ops', 
    categorySlug: 'ml-ai-llm-ops', 
    intro: "You need to deploy multiple ML models at scale, but building a custom serving infrastructure is complex and time-consuming. You're here because you need an engineer who can use Ray Serve to build a scalable, fault-tolerant, and flexible model deployment platform. You need an expert who can manage autoscaling, compose multiple models, and ensure high availability.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you manually scaling your model deployments based on guesswork?",
            problem: "Manual scaling is inefficient, leading to either overprovisioning (wasted cost) or underprovisioning (high latency and dropped requests).",
            solution: "We find engineers who are experts in Ray Serve's built-in autoscaling, able to configure policies that automatically scale your model deployments up and down based on real-time traffic.",
            kpi: "Autoscaling for cost and performance efficiency"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your inference pipeline a complex chain of separate services?",
            problem: "Chaining multiple models (e.g., a text classifier followed by a summarizer) with separate network calls is slow and inefficient.",
            solution: "Our engineers can use Ray Serve's model composition capabilities to build a single, unified inference graph that chains multiple models together in the same process, eliminating network overhead.",
            kpi: "Low-latency model composition"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your ML stack separate from your data processing stack?",
            problem: "A disconnected ML and data stack makes it hard to build end-to-end applications.",
            solution: "We look for engineers who can leverage the entire Ray ecosystem, using Ray Data for preprocessing, Ray Train for distributed training, and Ray Serve for deployment, all in a single, unified Python framework.",
            kpi: "A unified platform for end-to-end ML"
        }
    ], 
    evaluation: ['Scaling model deployments horizontally and vertically', 'Autoscaling policies based on traffic', 'Composition of multiple models into a single graph', 'Fault tolerance and high availability', 'Integration with the broader Ray ecosystem (Ray Core, Ray Data)'] 
  },
  'langchain': { 
    name: 'LangChain/LlamaIndex', 
    category: 'ML/AI & LLM Ops', 
    categorySlug: 'ml-ai-llm-ops', 
    intro: "You're building a RAG application, but it's becoming a complex web of prompts and data sources. You need an engineer who is an expert in frameworks like LangChain or LlamaIndex to structure your application, build robust data ingestion pipelines, and create evaluatable chains and agents. You're here to move from a simple script to a production-ready LLM application.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your RAG application a single, monolithic prompt that's hard to debug?",
            problem: "A single, massive prompt is brittle and impossible to debug when it produces a bad result.",
            solution: "We find engineers who are experts in using LangChain Expression Language (LCEL) to compose complex chains from smaller, reusable components, making the application modular, testable, and debuggable.",
            kpi: "Building modular, debuggable RAG applications"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to see what's happening inside your LLM chains?",
            problem: "Without proper tracing, your LLM application is a black box.",
            solution: "Our engineers are proficient in using LangSmith to get full visibility into every step of their chains, allowing them to debug, evaluate, and monitor their applications in production.",
            kpi: "Full visibility and traceability with LangSmith"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your retrieval step just a simple vector search?",
            problem: "Basic vector search is often not enough for production-quality RAG. You need more advanced retrieval strategies.",
            solution: "We look for engineers with experience in advanced retrieval techniques, using LlamaIndex or LangChain to implement strategies like hybrid search, re-ranking, and query transformations.",
            kpi: "Expertise in advanced retrieval strategies"
        }
    ], 
    evaluation: ['RAG pipeline construction (Load, Split, Embed, Store, Retrieve, Generate)', 'Agent design and tool use', 'Custom chains, indexes, and retrievers', 'Evaluation and tracing with LangSmith or equivalent', 'Understanding the trade-offs and abstractions'] 
  },
  'pgvector': { 
    name: 'pgvector/Pinecone', 
    category: 'ML/AI & LLM Ops', 
    categorySlug: 'ml-ai-llm-ops', 
    intro: "Your RAG system's performance depends entirely on the quality of your retrieval, and that requires a robust vector database. You need an engineer who understands vector indexing strategies, metadata filtering, and the trade-offs of hybrid search. You're here to find an expert in pgvector, Pinecone, or Weaviate who can build and scale the retrieval backbone of your AI application.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your vector search slow and inaccurate?",
            problem: "A brute-force vector search is too slow for production. You need an index, but choosing the right one is critical for the trade-off between speed and accuracy.",
            solution: "We find engineers who understand the trade-offs between different Approximate Nearest Neighbor (ANN) index types, such as IVF and HNSW, and can choose and tune the right index for your specific use case.",
            kpi: "Expertise in vector index tuning"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you unable to filter your vector search by user ID or other metadata?",
            problem: "Pure vector search is not enough. You need to be able to apply filters to your search to respect permissions or other business logic.",
            solution: "Our engineers are experienced in using metadata filtering alongside vector search to perform complex, filtered queries that are both fast and accurate.",
            kpi: "Proficiency in metadata filtering"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your vector search missing relevant documents because of keyword mismatches?",
            problem: "Semantic search is powerful but can sometimes miss documents that have important keyword matches. You need a combination of both.",
            solution: "We look for engineers with experience in hybrid search, which combines traditional keyword-based search (like BM25) with semantic vector search to get the best of both worlds.",
            kpi: "Experience with hybrid search"
        }
    ], 
    evaluation: ['Vector indexing strategies (IVF, HNSW) and their trade-offs', 'The importance of metadata filtering for accuracy', 'Hybrid search concepts (keyword + vector)', 'Scaling vector search for large datasets', 'Data ingestion and embedding pipelines'] 
  },
  'mlflow': { 
    name: 'MLflow/W&B', 
    category: 'ML/AI & LLM Ops', 
    categorySlug: 'ml-ai-llm-ops', 
    intro: "Your ML experiments are chaotic and irreproducible. You're here because you need to bring discipline and MLOps best practices to your team. You need an engineer who can implement MLflow or Weights & Biases to track experiments, manage models in a central registry, and automate the path from training to production.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your ML experiments a mess of spreadsheets and unversioned notebooks?",
            problem: "Without systematic tracking, you can't compare experiments, reproduce results, or collaborate effectively.",
            solution: "We find engineers who are experts in using experiment tracking tools to log every parameter, metric, and artifact, creating a fully reproducible and auditable history of your work.",
            kpi: "Reproducible, auditable experiment tracking"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "How do you know which model version is running in production?",
            problem: "Without a model registry, you have no single source of truth for your models, making it hard to manage the lifecycle from staging to production and to roll back if needed.",
            solution: "Our engineers are proficient in using a model registry to version, stage, and manage the lifecycle of your models, providing a clear path from development to production.",
            kpi: "A single source of truth for model lifecycle management"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your model deployment process a manual, risky handoff?",
            problem: "Manual handoffs between data scientists and engineers are slow and error-prone.",
            solution: "We look for engineers who can integrate the model registry with your CI/CD system to create an automated, end-to-end MLOps workflow, from training and registration to deployment.",
            kpi: "Automated, end-to-end MLOps workflows"
        }
    ], 
    evaluation: ['Comprehensive experiment tracking (params, metrics, artifacts)', 'Model registry for versioning and staging (dev, staging, prod)', 'Artifact logging for data and code versions', 'CI/CD integration for automated model deployment', 'Collaboration and reporting features'] 
  },
  'kubeflow': {
    name: 'Kubeflow',
    category: 'ML/AI & LLM Ops',
    categorySlug: 'ml-ai-llm-ops',
    intro: "You need a complete MLOps platform on Kubernetes, but you're struggling with the complexity. You need a Kubeflow expert who can set up and manage pipelines, serve models, and provide a multi-tenant environment for your data science team.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your ML workflows just a series of disconnected scripts?",
            problem: "Manual, script-based workflows are not reproducible, scalable, or suitable for production.",
            solution: "We find engineers who are experts in Kubeflow Pipelines (KFP), able to build portable, scalable, and version-controlled ML workflows that run on Kubernetes.",
            kpi: "Building reproducible ML workflows with KFP"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "How do you serve your models in a scalable, Kubernetes-native way?",
            problem: "Building a custom model serving infrastructure on Kubernetes is a massive undertaking.",
            solution: "Our engineers are proficient in using KFServing (now KServe) to deploy models with serverless inference, autoscaling, and canary rollouts, all on Kubernetes.",
            kpi: "Scalable model serving with KFServing/KServe"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your data scientists stepping on each other's toes in a shared cluster?",
            problem: "Without multi-user isolation, it's impossible to securely manage resources and experiments for a team of data scientists.",
            solution: "We look for engineers with experience in set-ting up multi-user isolation in Kubeflow, providing each user with their own secure namespace for notebooks, pipelines, and models.",
            kpi: "Secure, multi-tenant environments for data science"
        }
    ],
    evaluation: ['Kubeflow Pipelines (KFP) for orchestration', 'KFServing for model deployment', 'Notebook server management', 'Multi-user isolation and security', 'Integration with other Kubernetes ecosystem tools']
  },
  'ragas': { 
    name: 'Ragas', 
    category: 'ML/AI & LLM Ops', 
    categorySlug: 'ml-ai-llm-ops', 
    intro: "Your RAG application 'looks' okay, but you have no objective way to measure its quality. You're here because you need to move beyond anecdotal evidence and implement a rigorous evaluation framework. You need an expert in Ragas or other evaluation tools who can measure metrics like faithfulness, answer relevancy, and context precision to systematically improve your application's performance.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your RAG system hallucinating or making up facts?",
            problem: "If your LLM's answer is not grounded in the retrieved context, it's a hallucination. You need a way to measure this automatically.",
            solution: "We find engineers who can use Ragas to measure 'faithfulness,' a metric that automatically checks if the generated answer is supported by the retrieved context.",
            kpi: "Automatically measuring and preventing hallucinations"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your retrieval step pulling in irrelevant documents?",
            problem: "If your retriever is pulling in junk, your LLM will produce a junky answer. This is the 'garbage in, garbage out' problem for RAG.",
            solution: "Our engineers are experienced in using metrics like 'context precision' and 'context recall' to evaluate the performance of the retrieval step in isolation.",
            kpi: "Evaluating and improving retrieval performance"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "How do you A/B test different prompts or retrieval strategies?",
            problem: "Without objective, automated metrics, you can't systematically improve your RAG application.",
            solution: "We look for engineers who can integrate Ragas into a CI/CD pipeline to create an 'evaluation-driven development' workflow, allowing you to test changes and only merge them if they improve your key quality metrics.",
            kpi: "Evaluation-driven development for RAG"
        }
    ], 
    evaluation: ['Understanding core RAG evaluation metrics', 'The difference between faithfulness, relevance, and precision', 'Synthetic test data generation for evaluation', 'Integrating evaluation into a CI/CD pipeline (eval-driven development)', 'Analyzing results to diagnose and fix issues'] 
  },
  'dvc': {
    name: 'DVC',
    category: 'ML/AI & LLM Ops',
    categorySlug: 'ml-ai-llm-ops',
    intro: "You're trying to version your data and models alongside your code, but Git LFS isn't cutting it. You need an expert in DVC who can set up a robust data versioning pipeline, ensuring reproducibility and collaboration for your ML projects.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Can you reproduce the exact dataset that was used to train a model six months ago?",
            problem: "Without data versioning, you can't guarantee reproducibility, which is a critical requirement for any serious ML project.",
            solution: "We find engineers who can use DVC to version your data and models, storing them in cloud storage while keeping small metafiles in Git, allowing you to `git checkout` any version of your entire project.",
            kpi: "Git-based data & model versioning"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your ML workflow a series of manual, disconnected scripts?",
            problem: "A manual workflow is not reproducible and makes it impossible to track the lineage of your models.",
            solution: "Our engineers are experts in creating DVC pipelines, which codify the entire ML workflow (preprocessing, training, evaluation) and create a full dependency graph.",
            kpi: "Building reproducible ML pipelines"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "How do you share large datasets and models with your team?",
            problem: "Emailing files or using shared drives is inefficient and leads to versioning chaos.",
            solution: "We look for engineers who can use DVC with shared remote storage (like S3 or GCS) to create a single source of truth for all your ML artifacts, making collaboration seamless.",
            kpi: "Seamless collaboration with remote storage"
        }
    ],
    evaluation: ['Data and model versioning with remote storage', 'DVC pipelines for reproducible workflows', 'Integration with Git', 'Experiment tracking', 'Collaboration workflows for data scientists']
  },
  'feast': {
    name: 'Feast/Tecton',
    category: 'ML/AI & LLM Ops',
    categorySlug: 'ml-ai-llm-ops',
    intro: "You're spending too much engineering time building and maintaining brittle data ingestion pipelines. You need an expert in automated ELT tools like Fivetran or Airbyte who can quickly and reliably sync data from all your sources into your data warehouse.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your engineers wasting weeks building and maintaining custom API connectors?",
            problem: "Every SaaS tool your company uses has a different API. Building and maintaining pipelines for each one is a massive, low-leverage time sink.",
            solution: "We find engineers who can use pre-built connectors from Fivetran or Airbyte to sync data from hundreds of sources in minutes, freeing up your team to work on high-value data modeling.",
            kpi: "Eliminate time spent on building custom connectors"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do your data pipelines break every time a source API changes its schema?",
            problem: "Upstream schema changes are a constant source of pipeline failures.",
            solution: "Our engineers are experienced with tools that automatically detect and adapt to schema changes, ensuring your pipelines are resilient and your data is never lost.",
            kpi: "Automated schema change handling"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to get data from a source that isn't supported?",
            problem: "What do you do when a pre-built connector doesn't exist for one of your niche internal tools?",
            solution: "We look for engineers with experience in Airbyte's Connector Development Kit (CDK), allowing them to rapidly build new, custom connectors when needed.",
            kpi: "Ability to build custom connectors with the CDK"
        }
    ],
    evaluation: ['Connector configuration and troubleshooting', 'Data replication strategies (incremental, full)', 'Handling schema changes and drift', 'Custom connector development (Airbyte)', 'Monitoring and alerting for sync failures']
  },
  'jira': {
    name: 'Jira/Linear',
    category: 'Product, Design & Growth',
    categorySlug: 'product-design-growth',
    intro: "Your product development process is chaotic and untrackable. You need an expert in Jira or Linear who can configure workflows, set up reporting, and turn your project management tool into the central nervous system of your product org.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your Jira instance an unstructured mess?",
            problem: "Without clear workflows and configurations, Jira becomes a black hole for information, making it impossible to track progress or report on velocity.",
            solution: "We find experts who can implement best-practice workflows, custom fields, and screens to create a structured system that reflects how your team actually works.",
            kpi: "Structured, repeatable workflows"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you unable to get meaningful reports out of your project management tool?",
            problem: "If you can't build reports on cycle time, velocity, or bug rates, you're flying blind. Default reports are often not enough.",
            solution: "Our engineers are proficient in advanced query languages (JQL) and can build custom dashboards and reports to give you real-time visibility into your team's performance.",
            kpi: "Actionable, data-driven reporting"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your project tool disconnected from the rest of your development ecosystem?",
            problem: "Manual updates between Jira, GitHub, and Slack are a waste of time and a source of errors.",
            solution: "We look for experts who can set up deep integrations and automation between your tools, automatically transitioning tickets, posting updates, and linking pull requests.",
            kpi: "A fully integrated, automated toolchain"
        }
    ],
    evaluation: ['Custom workflow and screen configuration', 'Advanced JQL for reporting', 'Roadmapping and dependency tracking', 'Integration with other tools (GitHub, Slack)', 'Agile board setup (Scrum/Kanban)']
  },
  'notion': {
    name: 'Notion/Confluence',
    category: 'Product, Design & Growth',
    categorySlug: 'product-design-growth',
    intro: "Your product documentation is scattered and out of date. You need an expert in Notion or Confluence who can create a structured, maintainable, and collaborative documentation system that becomes your team's single source of truth.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your documentation impossible to find or trust?",
            problem: "When documentation is scattered across Google Docs and wikis, it quickly becomes out of date and useless.",
            solution: "We find experts who can design a clean information architecture with structured templates for PRDs, meeting notes, and technical specs, creating a single, trusted source of truth.",
            kpi: "A centralized, trustworthy knowledge base"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your PRDs just static, text-based documents?",
            problem: "Static documents don't capture the dynamic nature of product development and are poorly integrated with your other tools.",
            solution: "Our engineers can leverage modern documentation tools to create dynamic documents that embed live data, Figma prototypes, and Jira tickets, creating a rich, interactive context.",
            kpi: "Dynamic, integrated documentation"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is there no process for creating or updating documentation?",
            problem: "Without a clear process, documentation is an afterthought that never gets done.",
            solution: "We look for experts who can establish and drive adoption of a documentation-as-code culture, where documentation is treated like a product, with owners, review processes, and clear standards.",
            kpi: "A culture of 'documentation as a product'"
        }
    ],
    evaluation: ['Information architecture and space/database design', 'Template creation for PRDs, specs, and meeting notes', 'Integration with other tools (Jira, Figma)', 'User permissions and access control', 'Driving adoption and best practices']
  },
  'figma': {
    name: 'Figma/Sketch',
    category: 'Product, Design & Growth',
    categorySlug: 'product-design-growth',
    intro: "Your design process is disconnected from development, leading to inconsistency and rework. You need a design expert who has mastered Figma or Sketch to build component libraries, create interactive prototypes, and facilitate a smooth handoff to engineering.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your UI an inconsistent patchwork of one-off designs?",
            problem: "Without a centralized design system, every new feature introduces new inconsistencies, creating a disjointed user experience and a mountain of design debt.",
            solution: "We find designers who are experts in building and maintaining robust component libraries and design systems in Figma, ensuring consistency and accelerating both design and development.",
            kpi: "A single source of truth for your design system"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you getting user feedback too late in the process?",
            problem: "Getting feedback only after a feature is fully built is slow and expensive.",
            solution: "Our designers are proficient in creating high-fidelity, interactive prototypes, allowing you to test user flows and get feedback from real users before a single line of code is written.",
            kpi: "Faster, cheaper user feedback with interactive prototypes"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is the handoff between design and development a source of constant friction?",
            problem: "When developers have to guess at specs, spacing, and styles, it leads to errors and wasted time.",
            solution: "We look for designers who can leverage modern features like auto layout and design tokens to create pixel-perfect, developer-ready designs that translate directly to code.",
            kpi: "A seamless, low-friction developer handoff"
        }
    ],
    evaluation: ['Component library and design system creation', 'Auto layout and responsive design', 'Interactive prototyping and user testing', 'Developer handoff and design tokens', 'Plugin and integration ecosystem']
  },
  'amplitude': {
    name: 'Amplitude/Mixpanel',
    category: 'Product, Design & Growth',
    categorySlug: 'product-design-growth',
    intro: "You're flying blind, making product decisions based on gut feel instead of data. You need a product analytics expert who can use Amplitude or Mixpanel to define events, analyze funnels, and uncover the user behaviors that drive your business.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your product data a mess of inconsistent, untrusted events?",
            problem: "Without a clear event taxonomy, your product analytics data is 'garbage in, garbage out,' making it impossible to get reliable insights.",
            solution: "We find experts who can work with your engineering team to create and implement a clean, consistent event tracking plan, ensuring your data is trustworthy from the start.",
            kpi: "A clean, reliable event taxonomy"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do you know where users are dropping off in your key funnels?",
            problem: "Without funnel analysis, you're just guessing at where to focus your efforts to improve conversion and retention.",
            solution: "Our analysts are experts in building and analyzing funnels, pinpointing the exact steps where users are dropping off so you can make data-driven improvements.",
            kpi: "Actionable insights from funnel analysis"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do you know what your 'power users' do differently?",
            problem: "You need to understand the behaviors that correlate with retention and monetization, but you don't know how to find them.",
            solution: "We look for experts who can use behavioral cohort analysis to identify the 'aha moment' and the key actions that separate your best users from the rest.",
            kpi: "Identifying the behaviors that drive retention"
        }
    ],
    evaluation: ['Event taxonomy and instrumentation planning', 'Funnel, retention, and segmentation analysis', 'Creating and interpreting dashboards', 'A/B testing analysis', 'Identifying user personas and behavioral cohorts']
  },
  'jest': { 
    name: 'Jest/Vitest', 
    category: 'Testing & Quality Engineering', 
    categorySlug: 'qa-quality-engineering', 
    intro: "You have no unit or integration tests, and every code change is a gamble. You're here because you need to build a safety net for your codebase. You need an engineer who is an expert in Jest or Vitest, someone who can write effective unit and integration tests, set up mocking, and analyze code coverage to increase your confidence in every deployment.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is refactoring your code a high-risk activity?",
            problem: "Without a solid test suite, developers are afraid to make necessary changes, leading to technical debt and stagnation.",
            solution: "We find engineers who can build a comprehensive unit and integration test suite that acts as a safety net, allowing your team to refactor with confidence.",
            kpi: "Increased confidence and velocity from a solid test suite"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your tests slow and running in a separate, non-standard environment?",
            problem: "Slow, complex testing setups create friction and are often skipped by developers.",
            solution: "Our engineers are experts in modern, fast test runners like Vitest, which are simple to configure and provide a lightning-fast feedback loop.",
            kpi: "A fast, frictionless testing experience"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is it difficult to test components or functions that have external dependencies?",
            problem: "Tests that make real network calls or hit a real database are slow, flaky, and are integration tests, not unit tests.",
            solution: "We look for engineers who are masters of mocking, able to isolate the unit under test from its dependencies to create fast, reliable, and focused unit tests.",
            kpi: "Expertise in mocking for true unit testing"
        }
    ], 
    evaluation: ['Effective unit and integration testing strategies', 'Advanced mocking of modules, functions, and timers', 'Snapshot testing for UI components', 'Code coverage analysis as a tool for improvement', 'Configuration for different environments (JS, TS, React)'] 
  },
  'pytest': { 
    name: 'PyTest/JUnit', 
    category: 'Testing & Quality Engineering', 
    categorySlug: 'qa-quality-engineering', 
    intro: "Your backend code is untested, and refactoring is a high-risk activity. You're here because you need to build a robust testing culture for your Java or Python services. You need an engineer who is an expert in PyTest or JUnit, someone who can design powerful fixtures, write parameterized tests, and build a comprehensive suite that prevents regressions.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your test setup code duplicated and hard to maintain?",
            problem: "Copy-pasting setup and teardown logic for every test leads to a bloated and unmaintainable test suite.",
            solution: "We find engineers who are experts in designing clean, reusable fixtures (in PyTest) or using lifecycle annotations (in JUnit) to manage test setup and teardown efficiently.",
            kpi: "Clean, maintainable tests with fixtures"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you writing a separate test for every minor variation of an input?",
            problem: "Testing edge cases often leads to a lot of repetitive, nearly identical test functions.",
            solution: "Our engineers are proficient in parameterized testing, allowing them to write a single test function that can be run with dozens of different inputs, making it easy to cover edge cases.",
            kpi: "Efficient edge case testing with parameterization"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is it difficult to test a single piece of your application in isolation?",
            problem: "Tests that require a full running application are slow and brittle.",
            solution: "We look for engineers who can use mocking and dependency injection to isolate the code under test, leading to fast and reliable unit tests.",
            kpi: "True unit testing with mocking and isolation"
        }
    ], 
    evaluation: ['Fixture design and usage for setup/teardown', 'Parameterized testing for data-driven tests', 'Leveraging the plugin ecosystem', 'Test discovery and organization for large codebases', 'Mocking and patching for isolating units of work'] 
  },
  'k6': { 
    name: 'k6/Locust', 
    category: 'Testing & Quality Engineering', 
    categorySlug: 'qa-quality-engineering', 
    intro: "You don't know if your application can handle production traffic until it's already falling over. You're here because you need to proactively find your system's breaking points. You need a performance engineer who can use k6 or Locust to design and execute load tests, analyze the results, and identify performance bottlenecks before your users do.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you discovering performance bottlenecks in production?",
            problem: "Finding performance issues under real production load is stressful and impacts your customers. You need to find these issues before you deploy.",
            solution: "We find performance engineers who can script realistic user scenarios and run load tests in a pre-production environment to find and fix bottlenecks before they go live.",
            kpi: "Proactive performance bottleneck detection"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do you know what the breaking point of your system is?",
            problem: "Without knowing your system's limits, you can't plan for growth or have confidence in your ability to handle traffic spikes.",
            solution: "Our engineers are experts in designing different types of load tests—stress tests, soak tests, spike tests—to understand the real-world limits of your system.",
            kpi: "Understanding system limits with various test types"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your load tests just a simple 'hit one endpoint' script?",
            problem: "Simple load tests don't reflect real user behavior and often miss key bottlenecks.",
            solution: "We look for engineers who can write sophisticated test scripts that simulate complex user flows, providing a much more realistic and valuable performance test.",
            kpi: "Realistic user scenario scripting"
        }
    ], 
    evaluation: ['Load testing script design (user scenarios)', 'Setting appropriate thresholds and checks for SLOs', 'Analyzing results to identify bottlenecks', 'Distributed load testing for high-volume tests', 'Scripting in JavaScript (k6) or Python (Locust)'] 
  },
  'pact': { 
    name: 'Pact', 
    category: 'Testing & Quality Engineering', 
    categorySlug: 'qa-quality-engineering', 
    intro: "Your microservices are constantly breaking each other because there are no enforced API contracts. You're here because you need to stop integration failures after deployment. You need an engineer who understands consumer-driven contract testing and can implement Pact to ensure your services can communicate reliably, allowing them to evolve independently but safely.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you only finding out that two services are incompatible after they've been deployed?",
            problem: "Running full end-to-end tests for every combination of microservices is slow and brittle. You need a way to test integrations without deploying everything.",
            solution: "We find engineers who are experts in consumer-driven contract testing. Pact allows a consumer to define a 'contract' that is then verified against the provider in the provider's CI pipeline, catching integration issues before deployment.",
            kpi: "Catching integration issues in CI, not production"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is it difficult for a service provider to know who is using their API and how?",
            problem: "Without visibility into its consumers, a provider team is afraid to make changes for fear of breaking someone.",
            solution: "Our engineers can use the Pact Broker to provide full visibility into which consumers depend on which parts of an API, allowing provider teams to evolve their services with confidence.",
            kpi: "Safe and confident API evolution"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your integration tests constantly failing due to data mismatches?",
            problem: "Traditional integration tests are often brittle because they rely on specific data being present in a test environment.",
            solution: "We look for engineers who can use Pact's 'provider states' to declaratively set up the exact data a provider needs to fulfill a contract, eliminating test data brittleness.",
            kpi: "Reliable, stateful contract testing"
        }
    ], 
    evaluation: ['Deep understanding of consumer-driven contract testing', 'Pact Broker for contract management and discovery', 'CI/CD integration for consumer and provider verification', 'Provider state management for complex scenarios', 'Avoiding the pitfalls of over-specification'] 
  },
  'owasp-zap': {
    name: 'OWASP ZAP',
    category: 'Testing & Quality Engineering',
    categorySlug: 'qa-quality-engineering',
    intro: "You're worried about common web application vulnerabilities but don't have a dedicated security tester. You need a QA engineer who can use a DAST tool like OWASP ZAP to automate security scanning and find issues like XSS and SQL injection in your CI/CD pipeline.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you only checking for security vulnerabilities with manual, periodic tests?",
            problem: "Manual security testing doesn't scale and leaves you exposed between tests. You need to automate security testing in your development process.",
            solution: "We find engineers who can integrate Dynamic Application Security Testing (DAST) tools like ZAP directly into your CI/CD pipeline, running automated security scans on every build.",
            kpi: "Automated security scanning in CI/CD"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you protected against the most common web application attacks?",
            problem: "Vulnerabilities like Cross-Site Scripting (XSS), SQL Injection, and Cross-Site Request Forgery (CSRF) are common and can be devastating.",
            solution: "Our engineers are experts in using ZAP to automatically scan for the OWASP Top 10 vulnerabilities, providing a critical layer of automated defense.",
            kpi: "Automated scanning for OWASP Top 10"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is it difficult to test the security of your authenticated application pages?",
            problem: "Many security scanners can only test public-facing pages, missing potential vulnerabilities that exist behind a login.",
            solution: "We look for engineers who can configure ZAP to handle complex authentication flows, allowing it to perform deep scans of your entire application, not just the landing page.",
            kpi: "Authenticated scanning for deep application coverage"
        }
    ],
    evaluation: ['Automated and manual scanning techniques', 'CI/CD integration for security testing', 'Alert triage and false positive reduction', 'Session management and authenticated scanning', 'Reporting and issue tracking integration']
  },
  'browserstack': {
    name: 'BrowserStack/Sauce Labs',
    category: 'Testing & Quality Engineering',
    categorySlug: 'qa-quality-engineering',
    intro: "You can't possibly test your web app on every browser and device. You need a QA engineer who is an expert in cloud testing platforms like BrowserStack or Sauce Labs to run your automated tests across a massive grid of real and virtual devices, ensuring broad compatibility.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you only testing your application on Chrome on your developer's machine?",
            problem: "Your users are on a huge variety of browsers, operating systems, and devices. A lack of cross-browser testing leads to a buggy and inconsistent user experience.",
            solution: "We find engineers who can integrate your automated test suite with a cloud testing grid, allowing you to run your tests on hundreds of browser/OS combinations with every commit.",
            kpi: "Massive cross-browser test coverage"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is running your full test suite taking hours?",
            problem: "Running tests serially is slow. You need to parallelize your test execution to get fast feedback.",
            solution: "Our engineers are experts in leveraging the massive parallelization capabilities of cloud testing platforms to run your entire test suite in minutes, not hours.",
            kpi: "Dramatically reduced test execution time with parallelization"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is debugging a test failure on a specific browser impossible?",
            problem: "When a test fails only on Safari on a specific OS version, it's nearly impossible to debug without access to that environment.",
            solution: "We look for engineers who can use the advanced debugging features of these platforms, such as video recordings, screenshots, and logs for every test run, to quickly diagnose and fix cross-browser bugs.",
            kpi: "Powerful debugging for cross-browser issues"
        }
    ],
    evaluation: ['Integration with test automation frameworks (Playwright, Selenium)', 'Parallel test execution for speed', 'Debugging tests on remote devices', 'Visual regression testing', 'Managing platform credentials and security']
  },
  'gremlin': { 
    name: 'Gremlin/Litmus', 
    category: 'Testing & Quality Engineering', 
    categorySlug: 'qa-quality-engineering', 
    intro: "You believe your system is resilient, but you've never actually tested it against real-world failures. You're here because you need to move from 'chaos theory' to 'chaos engineering.' You need an engineer who can use a tool like Gremlin or Litmus to safely inject failures into your system, run GameDays, and uncover hidden weaknesses before they cause a real outage.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do your resiliency patterns (like retries and circuit breakers) actually work?",
            problem: "You've written the code for resiliency, but you have no idea if it will actually work during a real-world failure.",
            solution: "We find engineers who can use chaos engineering to safely inject failures (e.g., CPU spikes, network latency, pod failures) and verify that your system behaves as expected.",
            kpi: "Validating resiliency by proving it with controlled failure"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you discovering unknown dependencies during a production outage?",
            problem: "Hidden dependencies between services are a common cause of cascading failures.",
            solution: "Our engineers use chaos engineering to run 'GameDays,' where they systematically break components of the system to uncover these hidden dependencies in a controlled environment.",
            kpi: "Discovering and fixing hidden dependencies before they cause outages"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your team afraid to practice incident response?",
            problem: "Without practice, your team will be slow and ineffective when a real incident occurs.",
            solution: "We look for engineers who can use chaos engineering to train and drill the team on incident response, improving their muscle memory and reducing Mean Time to Resolution (MTTR).",
            kpi: "Improving incident response through realistic drills"
        }
    ], 
    evaluation: ['Chaos engineering principles and safety best practices', 'GameDay planning and execution', 'Identifying system weaknesses (e.g., timeouts, retries)', 'Measuring impact and time to recovery', 'Automating chaos experiments in CI/CD'] 
  },
  'google-workspace': {
    name: 'Google Workspace/M365',
    category: 'IT / Enterprise Ops',
    categorySlug: 'it-enterprise-ops',
    intro: "Your company's core productivity suite is a tangle of inconsistent settings and security gaps. You need an IT expert who can administer Google Workspace or Microsoft 365 to enforce security policies, manage users and groups, and ensure smooth collaboration.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is user onboarding and offboarding a manual, error-prone process?",
            problem: "Manual account creation and deletion is slow and often leads to 'ghost' accounts that are a major security risk.",
            solution: "We find experts who can automate user lifecycle management by integrating your HR system with your productivity suite, ensuring access is granted and revoked instantly and correctly.",
            kpi: "Automated, secure user lifecycle management"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you confident that your sensitive data isn't being leaked through email or file sharing?",
            problem: "Without proper Data Loss Prevention (DLP) policies, it's easy for employees to accidentally share sensitive information with the outside world.",
            solution: "Our engineers can configure and enforce DLP policies to automatically detect and block the sharing of sensitive data like PII and financial information.",
            kpi: "Automated Data Loss Prevention (DLP)"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are phishing attacks constantly getting through your email filters?",
            problem: "Basic spam filtering is not enough to stop sophisticated phishing and Business Email Compromise (BEC) attacks.",
            solution: "We look for engineers who can implement advanced threat protection features, such as sandboxing for attachments and links, to protect your organization from the most advanced email threats.",
            kpi: "Advanced Threat Protection for email"
        }
    ],
    evaluation: ['User and group management at scale', 'Security policy enforcement (e.g., 2FA, data loss prevention)', 'Email security and anti-phishing rules', 'Device management integration', 'Application and third-party integration control']
  },
  'jamf': {
    name: 'Intune/Jamf/Kandji',
    category: 'IT / Enterprise Ops',
    categorySlug: 'it-enterprise-ops',
    intro: "Your employees' laptops are unmanaged, unsecure, and a compliance nightmare. You need an MDM expert who can use Intune, Jamf, or Kandji to automate device enrollment, enforce security policies, and manage your entire fleet of endpoints.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is setting up a new employee's laptop a manual, multi-day process?",
            problem: "Manual device setup is slow, inconsistent, and doesn't scale.",
            solution: "We find MDM experts who can implement zero-touch deployment, allowing new devices to be shipped directly to employees and automatically enrolled and configured with all the right policies and software.",
            kpi: "Zero-touch, automated device deployment"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Can you prove to an auditor that all your laptops are encrypted and patched?",
            problem: "Without centralized management, you have no visibility into the security posture of your endpoints, making it impossible to pass a security audit.",
            solution: "Our engineers can use MDM to enforce security policies like disk encryption and automatic patching, and generate compliance reports to prove your security posture to auditors.",
            kpi: "Audit-ready endpoint compliance"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "What happens when a laptop is lost or stolen?",
            problem: "A lost or stolen unmanaged laptop is a massive data breach waiting to happen.",
            solution: "We look for engineers who can use MDM to remotely lock and wipe a lost or stolen device, ensuring your company's data remains secure.",
            kpi: "Remote lock and wipe capabilities"
        }
    ],
    evaluation: ['Zero-touch deployment and enrollment', 'Policy and configuration profile management', 'Software deployment and patching', 'Compliance reporting and enforcement', 'Scripting and automation']
  },
  'jira-service-management': {
    name: 'Jira Service Mgmt',
    category: 'IT / Enterprise Ops',
    categorySlug: 'it-enterprise-ops',
    intro: "Your IT support is a chaotic mess of emails and Slack messages. You need an ITSM expert who can implement Jira Service Management to create a structured service desk, automate workflows, and provide a great support experience for your employees.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are IT requests getting lost in email inboxes and Slack channels?",
            problem: "An unstructured support process leads to slow response times, frustrated employees, and no visibility into your IT team's workload.",
            solution: "We find experts who can build a clean, user-friendly service portal where employees can easily submit requests and track their status, providing full visibility for everyone.",
            kpi: "A single, visible portal for all IT requests"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you able to measure your IT team's performance?",
            problem: "Without SLAs, you can't measure or improve your IT team's response and resolution times.",
            solution: "Our engineers can configure SLAs for different request types, providing clear targets for the IT team and real-time visibility into performance.",
            kpi: "Data-driven performance with SLA tracking"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your IT engineers spending all their time on repetitive manual tasks?",
            problem: "Manual ticket routing and responses are a major drain on your IT team's productivity.",
            solution: "We look for experts who can build powerful automation rules to handle common tasks like ticket routing, approvals, and status updates, freeing up your team for more valuable work.",
            kpi: "Increased efficiency with workflow automation"
        }
    ],
    evaluation: ['Service catalog and request fulfillment design', 'Incident, problem, and change management workflows', 'CMDB population and management', 'Reporting and SLA tracking', 'Automation and integration with other systems']
  },
  'edr': {
    name: 'EDR/XDR',
    category: 'IT / Enterprise Ops',
    categorySlug: 'it-enterprise-ops',
    intro: "You need to detect and respond to sophisticated threats on your endpoints. You need a security analyst who is an expert in EDR/XDR platforms to hunt for threats, investigate alerts, and contain attacks before they can spread.",
        pains: [
            {
                icon: <AlertTriangle className="h-8 w-8 text-primary" />,
                pain: "Are you blind to attacker activity on your endpoints?",
                problem: "Legacy antivirus can't see modern attacker techniques. You need deep visibility into process execution, network connections, and registry changes.",
                solution: "We find analysts who can use the deep telemetry from EDR/XDR platforms to hunt for indicators of compromise and proactively find threats that automated detection might miss.",
                kpi: "Proactive threat hunting capabilities"
            },
            {
                icon: <AlertTriangle className="h-8 w-8 text-primary" />,
                pain: "Are you drowning in low-quality security alerts?",
                problem: "A flood of false positives makes it impossible to find the real threats.",
                solution: "Our analysts are experts in tuning detection rules and triaging alerts to separate the signal from the noise, ensuring that your team is only focused on real incidents.",
                kpi: "High-signal, low-noise alert triage"
            },
            {
                icon: <AlertTriangle className="h-8 w-8 text-primary" />,
                pain: "How long does it take you to respond to a real threat?",
                problem: "A slow response time gives an attacker the opportunity to move laterally and achieve their objectives.",
                solution: "We look for analysts who can use the built-in response actions of EDR platforms to immediately contain threats, such as isolating a host from the network or killing a malicious process, dramatically reducing MTTR.",
                kpi: "Rapid incident response and containment"
            }
        ],
        evaluation: ['Threat hunting using platform-specific query languages', 'Alert triage and incident investigation', 'Host containment and remediation actions', 'Custom detection rule creation', 'Understanding of attacker techniques (MITRE ATT&CK)']
  },
  'proofpoint': {
    name: 'Proofpoint',
    category: 'IT / Enterprise Ops',
    categorySlug: 'it-enterprise-ops',
    intro: "Phishing is your number one threat vector. You need an email security expert who can manage Proofpoint to block malicious emails, prevent data loss, and protect your organization from Business Email Compromise (BEC) and other advanced threats.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are sophisticated phishing emails reaching your employees' inboxes?",
            problem: "Basic spam filters can't stop well-crafted spear-phishing or Business Email Compromise (BEC) attacks.",
            solution: "We find experts who can configure Proofpoint's advanced threat detection capabilities, including impersonation detection and URL sandboxing, to block the threats that other systems miss.",
            kpi: "Advanced protection against phishing and BEC"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do you have visibility into who is being targeted in your organization?",
            problem: "Without threat intelligence, you don't know which of your employees are being targeted by attackers.",
            solution: "Our analysts can use Proofpoint's threat intelligence dashboards to identify your 'Very Attacked People' (VAPs) and apply additional, targeted security controls to protect them.",
            kpi: "Identifying and protecting your 'Very Attacked People'"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you able to automatically quarantine and remediate malicious emails?",
            problem: "Manually dealing with malicious emails that have already been delivered is slow and inefficient.",
            solution: "We look for experts who can use Proofpoint's automated response features to automatically pull malicious emails from users' inboxes after they have been delivered, closing the window of opportunity for an attacker.",
            kpi: "Automated post-delivery remediation"
        }
    ],
    evaluation: ['Email gateway policy and rule configuration', 'Threat analysis and forensics (TAP)', 'Data Loss Prevention (DLP) rule creation', 'Targeted attack protection and impersonation detection', 'End-user training and awareness integration']
  },
  'cloudzero': { 
    name: 'CloudZero/Infracost', 
    category: 'Cloud FinOps & BizTech', 
    categorySlug: 'finops-biztech', 
    intro: "Your cloud bill is a mystery, and you have no idea what features or customers are driving your costs. You're here because you need to achieve cloud cost intelligence. You need a FinOps engineer who can use a platform like CloudZero to map costs to business metrics and a tool like Infracost to see the cost impact of code changes before they're merged.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Can you tell your CFO how much a specific customer or feature costs to run?",
            problem: "A total cloud bill is not actionable. Without unit cost economics, you can't make informed decisions about pricing, investment, or architecture.",
            solution: "We find FinOps engineers who can use a platform like CloudZero to allocate 100% of your cloud spend to business dimensions like cost per feature or cost per customer.",
            kpi: "Achieving granular unit cost visibility"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you surprised by your cloud bill at the end of the month?",
            problem: "Without real-time anomaly detection, a small code change can lead to a massive, unexpected cost overrun.",
            solution: "Our engineers can set up real-time cost anomaly detection and alerting, so you know about cost spikes in hours, not weeks.",
            kpi: "Real-time cost anomaly detection"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your developers making architectural decisions without any visibility into their cost impact?",
            problem: "When developers don't see the cost of their code, they can't be expected to write cost-efficient code.",
            solution: "We look for engineers who can 'shift left' on cost by integrating tools like Infracost into the CI/CD pipeline, showing developers the cost impact of their changes directly in the pull request.",
            kpi: "Shifting cost visibility left to developers"
        }
    ], 
    evaluation: ['Cost anomaly detection and root cause analysis', 'Cost allocation and showback/chargeback', 'Calculating unit cost economics (e.g., cost per feature)', 'Budgeting, forecasting, and trend analysis', 'Integrating cost into the developer workflow'] 
  },
  'aws-cost-explorer': { 
    name: 'AWS Cost Explorer', 
    category: 'Cloud FinOps & BizTech', 
    categorySlug: 'finops-biztech', 
    intro: "Your AWS bill is growing, but you're flying blind without the data to make optimization decisions. You need an engineer who can master AWS Cost Explorer to analyze your cost and usage data, make recommendations for Reserved Instances or Savings Plans, and build a robust tagging strategy to provide visibility to the entire organization.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your AWS bill a single, opaque number?",
            problem: "Without a proper tagging strategy, it's impossible to know which teams, products, or features are responsible for your AWS spend.",
            solution: "We find engineers who can design and enforce a comprehensive cost allocation tagging strategy, giving you full visibility into your spend.",
            kpi: "A comprehensive cost allocation tagging strategy"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you paying on-demand prices for your steady-state workloads?",
            problem: "Paying on-demand prices for predictable workloads is like leaving money on the table.",
            solution: "Our engineers are experts in analyzing your usage patterns with Cost Explorer and making data-driven recommendations for purchasing Savings Plans or Reserved Instances, often saving 30-60%.",
            kpi: "Data-driven recommendations for Savings Plans & RIs"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do you only find out you're over budget at the end of the month?",
            problem: "A lack of proactive budget monitoring means you can't take corrective action until it's too late.",
            solution: "We look for engineers who can set up AWS Budgets and alerts to notify you when you are forecasted to exceed your budget, allowing you to take action mid-month.",
            kpi: "Proactive budget monitoring and alerting"
        }
    ], 
    evaluation: ['Deep analysis of Cost and Usage Reports (CUR)', 'RI/Savings Plan analysis and recommendations', 'Designing and enforcing a cost allocation tagging strategy', 'Creating custom reports and dashboards', 'Setting up budgets and alerts'] 
  },
  'salesforce': { 
    name: 'Salesforce', 
    category: 'Cloud FinOps & BizTech', 
    categorySlug: 'finops-biztech', 
    intro: "Your go-to-market teams are stuck with manual processes and disconnected data inside Salesforce. You need a Salesforce Developer or RevOps engineer who can build custom automation, optimize your data model, and integrate Salesforce with the rest of your stack. You're here to turn your CRM from a simple database into a revenue-driving engine.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your sales reps wasting time on manual data entry?",
            problem: "Manual processes in Salesforce are slow, error-prone, and take your sales team away from what they do best: selling.",
            solution: "We find experts in declarative automation (Flow) and custom code (Apex) who can automate complex business processes, from lead routing to quote generation.",
            kpi: "Increased sales productivity through automation"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you hitting governor limits and seeing slow performance?",
            problem: "A poorly designed data model or inefficient code can quickly hit Salesforce's governor limits, bringing your operations to a halt.",
            solution: "Our developers are experts in writing bulkified, scalable Apex code and designing efficient data models to stay well within governor limits and ensure high performance.",
            kpi: "Scalable code that respects governor limits"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your Salesforce data siloed from the rest of your business?",
            problem: "When your CRM isn't integrated with your product and billing systems, you have an incomplete view of your customer.",
            solution: "We look for engineers with deep experience in Salesforce integration patterns, able to use APIs and platform events to create a seamless flow of data across your entire business.",
            kpi: "A 360-degree customer view through integration"
        }
    ], 
    evaluation: ['Apex and Lightning Web Components (LWC) development', 'SOQL query optimization for large data volumes', 'Declarative automation with Flow and Process Builder', 'Integration patterns (REST/SOAP APIs, Platform Events)', 'Governor limits and scalable architecture'] 
  },
  'hubspot': { 
    name: 'HubSpot', 
    category: 'Cloud FinOps & BizTech', 
    categorySlug: 'finops-biztech', 
    intro: "Your marketing and sales teams are struggling to work efficiently in HubSpot. You need a BizTech or RevOps engineer who can design custom objects, build powerful workflow automations, and integrate HubSpot with your product and billing systems. You're here to unlock the full potential of your HubSpot investment.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your HubSpot data model just a flat list of contacts?",
            problem: "Without a proper data model that reflects your business (e.g., with custom objects for 'Workspaces' or 'Subscriptions'), you can't automate or report effectively.",
            solution: "We find experts who can design and implement a custom data model in HubSpot that perfectly mirrors your business, unlocking powerful new automation and reporting capabilities.",
            kpi: "A custom data model that fits your business"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your marketing and sales processes manual and inconsistent?",
            problem: "Manual handoffs between marketing and sales are slow and lead to a poor customer experience.",
            solution: "Our engineers are masters of HubSpot's workflow engine, able to automate complex lead scoring, routing, and nurturing campaigns.",
            kpi: "Automated lead management and nurturing"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do your go-to-market teams lack visibility into product usage data?",
            problem: "When your marketing and sales teams can't see how customers are using the product, they can't identify upsell opportunities or churn risks.",
            solution: "We look for engineers who can integrate your product analytics and billing data into HubSpot, giving your GTM teams the insights they need to act.",
            kpi: "Product-led growth with integrated usage data"
        }
    ], 
    evaluation: ['Custom object and property design', 'Advanced workflow automation and branching logic', 'HubSpot API integration and custom apps', 'Reporting and dashboard creation for marketing/sales KPIs', 'Data hygiene and management best practices'] 
  },
  'zuora': {
    name: 'Zuora/Chargebee',
    category: 'Cloud FinOps & BizTech',
    categorySlug: 'finops-biztech',
    intro: "You're launching a usage-based or subscription product, and your billing logic is getting complicated. You need an expert in a modern billing platform like Zuora or Chargebee to model your product catalog, manage subscriptions, and integrate with your payment gateway.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to model complex, usage-based pricing?",
            problem: "Building a reliable and accurate usage-based billing system from scratch is incredibly complex and risky.",
            solution: "We find engineers who are experts in modern billing platforms, able to model complex pricing schemes, including tiered, volumetric, and multi-attribute pricing.",
            kpi: "Flexible, usage-based billing models"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is managing subscriptions, upgrades, and downgrades a manual process?",
            problem: "Manual subscription management doesn't scale and leads to billing errors.",
            solution: "Our engineers can integrate a billing platform's API to automate the entire subscription lifecycle, from creation and upgrades to cancellations and renewals.",
            kpi: "Automated subscription lifecycle management"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you failing to collect revenue due to payment failures?",
            problem: "Without an automated dunning process, you will lose significant revenue to involuntary churn from failed payments.",
            solution: "We look for experts who can configure and manage an automated dunning process to intelligently retry failed payments and notify customers, maximizing your revenue recovery.",
            kpi: "Reduced churn with automated dunning management"
        }
    ],
    evaluation: ['Product catalog and rate plan configuration', 'Subscription lifecycle management (upgrades, downgrades, cancellations)', 'Usage-based billing and metering', 'Invoice generation and dunning management', 'Integration with CRMs and ERPs']
  },
  'hightouch': {
    name: 'Hightouch/Census',
    category: 'Cloud FinOps & BizTech',
    categorySlug: 'finops-biztech',
    intro: "Your customer data is trapped in your data warehouse, and your go-to-market teams are working with stale, incomplete information. You need a RevOps or Data engineer who understands Reverse ETL. You're here to find an expert in Hightouch or Census who can sync data from your warehouse back into business tools like Salesforce and HubSpot, empowering your teams with the data they need to act.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your sales and marketing teams working with out-of-date customer data?",
            problem: "When your business tools aren't synced with your data warehouse (the source of truth), your GTM teams are making decisions based on stale data.",
            solution: "We find engineers who can use Reverse ETL to automatically sync data from your warehouse to your business tools, ensuring your teams always have the freshest, most accurate data.",
            kpi: "A single source of truth for your GTM teams"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Can your marketing team build a targeted list without asking a data analyst for a CSV?",
            problem: "A manual, request-based process for building audiences is slow and prevents your marketing team from being agile.",
            solution: "Our engineers can empower your marketing team to build their own audiences directly from the data warehouse using a simple UI, no SQL required.",
            kpi: "Self-serve audience building for marketing"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Can your sales team see product usage data directly inside Salesforce?",
            problem: "When sales reps have to log into another tool to see product usage, they are less likely to do it. You need to bring the data to them.",
            solution: "We look for engineers who can use Reverse ETL to sync product usage data directly onto the Account and Contact records in Salesforce, giving reps the insights they need to have smarter conversations.",
            kpi: "Product usage data right where your sales team works"
        }
    ],
    evaluation: ['Understanding of Reverse ETL concepts and use cases', 'Data modeling for activation in business tools', 'Sync configuration, scheduling, and debugging', 'Identity resolution and mapping', 'Measuring the impact of data activation on GTM efforts']
  },
  'stripe': {
    name: 'Stripe Billing',
    category: 'Cloud FinOps & BizTech',
    categorySlug: 'finops-biztech',
    intro: "You're building a subscription business and need a powerful, developer-friendly billing system. You need an expert in Stripe Billing who can integrate the API, manage subscription lifecycles, and handle complex scenarios like metered billing and coupons.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is building your own subscription logic taking months of engineering time?",
            problem: "Billing logic is complex, sensitive, and a distraction from your core product. Building it yourself is slow and risky.",
            solution: "We find engineers who are experts in the Stripe Billing API, able to leverage its pre-built components to launch your subscription business in a fraction of the time.",
            kpi: "Faster time-to-market for your subscription product"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to offer flexible pricing and promotions?",
            problem: "A rigid billing system prevents you from experimenting with different pricing models, coupons, and trials.",
            solution: "Our engineers can use Stripe's flexible product catalog and coupon system to allow you to easily experiment with different go-to-market strategies.",
            kpi: "Agile pricing and promotion experimentation"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your checkout experience hosted on a clunky, third-party page?",
            problem: "A poor checkout experience kills conversion rates. You need a seamless, integrated checkout flow.",
            solution: "We look for engineers who can use Stripe's modern, embeddable components (like the Payment Element) to create a beautiful and high-converting checkout experience directly within your application.",
            kpi: "A seamless, high-converting checkout experience"
        }
    ],
    evaluation: ['Subscription and customer API integration', 'Webhook handling for lifecycle events', 'Metered billing and usage reporting', 'Invoice and tax management', 'Checkout and Payment Element customization']
  },
  'grafana': {
    name: 'Grafana',
    category: 'Observability & SRE',
    categorySlug: 'platform-infra-sre',
    intro: "Your dashboards are a mess, and you can't visualize your system's health effectively. You need a Grafana expert who can build insightful, actionable dashboards that correlate metrics, logs, and traces to give you a complete picture of your system's performance.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your dashboards a jumble of disconnected charts?",
            problem: "Disjointed dashboards make it impossible to see the full picture and diagnose problems quickly.",
            solution: "We find engineers who can build unified dashboards that correlate metrics, logs, and traces from multiple data sources, giving you a single pane of glass for observability.",
            kpi: "Unified observability dashboards"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is every dashboard a one-off, custom creation?",
            problem: "Building dashboards from scratch for every new service or environment doesn't scale.",
            solution: "Our engineers are experts in creating dynamic, templated dashboards that can be reused across different services, environments, or customers.",
            kpi: "Scalable, reusable dashboards with templating"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your alerts firing without any context?",
            problem: "An alert that just says 'CPU is high' is not actionable. You need to know what's causing the problem.",
            solution: "We look for engineers who can integrate alerting directly with dashboards, so that every alert notification includes a link to a pre-filtered dashboard showing the relevant context.",
            kpi: "Actionable alerts with deep context"
        }
    ],
    evaluation: ['Advanced dashboard design and visualization techniques', 'Data source integration (Prometheus, Loki, etc.)', 'Templating and variables for dynamic dashboards', 'Alerting configuration and integration', 'Plugin development and usage']
  },
  'trivy': {
    name: 'Trivy',
    category: 'Security & GRC',
    categorySlug: 'security-grc',
    intro: "You need a simple, fast, and comprehensive vulnerability scanner for your container images and other artifacts. You need an expert in Trivy who can integrate it into your CI/CD pipeline to find vulnerabilities before they reach production.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is vulnerability scanning a slow, manual process that happens outside of your CI/CD pipeline?",
            problem: "Manual scanning is a bottleneck that slows down development and doesn't provide fast feedback.",
            solution: "We find engineers who can integrate Trivy's fast and simple scanner directly into your CI/CD pipeline, providing immediate feedback on vulnerabilities in every pull request.",
            kpi: "Fast, automated vulnerability scanning in CI/CD"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you only scanning your final container images?",
            problem: "Scanning only the final image can miss vulnerabilities in your base images, application dependencies, or even your infrastructure as code.",
            solution: "Our engineers are experts in using Trivy to scan a wide range of artifacts, from container images and filesystems to Git repositories and IaC files, for a comprehensive security view.",
            kpi: "Comprehensive scanning across all artifacts"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your security scans producing noisy reports that are hard to act on?",
            problem: "A giant list of vulnerabilities without any prioritization is not actionable.",
            solution: "We look for engineers who can configure Trivy to filter by severity and integrate with other tools to create prioritized, actionable security reports.",
            kpi: "Prioritized, actionable vulnerability reports"
        }
    ],
    evaluation: ['CI/CD integration for automated scanning', 'Vulnerability database management and updates', 'Image, filesystem, and Git repository scanning', 'Filtering and ignoring vulnerabilities', 'Output formatting for reporting and alerting']
  },
  'opa': {
    name: 'OPA',
    category: 'Security & GRC',
    categorySlug: 'security-grc',
    intro: "You need a unified way to enforce policies across your entire stack, from microservices to Kubernetes. You need an expert in Open Policy Agent (OPA) who can write declarative policies in Rego to decouple policy from your application logic.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your authorization logic hard-coded in every microservice?",
            problem: "Hard-coded authorization logic is inconsistent, hard to update, and creates a massive maintenance burden.",
            solution: "We find engineers who can use OPA to decouple policy from code, creating a centralized policy engine that all services can query for authorization decisions.",
            kpi: "Decoupled, centralized policy enforcement"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Can developers deploy insecure configurations to your Kubernetes cluster?",
            problem: "Without policy enforcement, it's easy for a developer to accidentally deploy a container that runs as root or mounts a sensitive host path.",
            solution: "Our engineers are experts in using OPA with Gatekeeper to create a Kubernetes admission controller that automatically rejects insecure deployments.",
            kpi: "Automated enforcement of Kubernetes security policies"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your policy language imperative and hard to test?",
            problem: "Writing policies in a general-purpose programming language can be complex and error-prone.",
            solution: "We look for engineers who are proficient in Rego, OPA's declarative policy language, which is purpose-built for expressing policies over complex data structures and is easy to test.",
            kpi: "Declarative, testable policies with Rego"
        }
    ],
    evaluation: ['Rego policy language proficiency', 'Integration with Kubernetes via Gatekeeper', 'API authorization use cases', 'Testing and debugging policies', 'Performance considerations for the OPA agent']
  },
  'iso': {
    name: 'ISO 27001',
    category: 'Security & GRC',
    categorySlug: 'security-grc',
    intro: "You need to demonstrate a commitment to information security management to your enterprise customers and partners. You need an expert who understands the ISO 27001 framework and can help you build an Information Security Management System (ISMS) that meets international standards.",
    pains: [
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you losing deals to competitors who are ISO 27001 certified?",
            problem: "For many enterprise and international customers, ISO 27001 certification is a non-negotiable requirement.",
            solution: "We find GRC experts who can guide you through the process of building an ISMS and achieving ISO 27001 certification, unblocking key sales opportunities.",
            kpi: "Achieve ISO 27001 certification to win enterprise deals"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Is your approach to security ad-hoc and reactive?",
            problem: "A reactive security posture means you're always one step behind the attackers.",
            solution: "Our engineers can help you implement a risk-based ISMS, which provides a systematic, proactive approach to managing your organization's information security risks.",
            kpi: "A systematic, risk-based approach to security"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you at risk of massive fines for a HIPAA violation?",
            problem: "Handling PHI without proper safeguards is a massive legal and financial risk.",
            solution: "We find compliance experts who can help you implement the necessary technical, physical, and administrative safeguards to ensure you are fully compliant with HIPAA.",
            kpi: "Achieve and maintain HIPAA compliance"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Do you have business associate agreements (BAAs) in place with all your vendors?",
            problem: "If you share PHI with a vendor (like your cloud provider) without a BAA, you are in violation of HIPAA.",
            solution: "Our experts can help you manage your vendor risk and ensure that you have a signed BAA in place with every vendor that handles PHI.",
            kpi: "Comprehensive vendor risk management and BAAs"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your REST/JSON-based service-to-service calls slow and inefficient?",
            problem: "Text-based JSON payloads are verbose and slow to serialize/deserialize, creating a performance bottleneck for internal communication.",
            solution: "We find engineers who can use gRPC with Protobuf, a binary serialization format, to create highly efficient, low-latency communication channels between your microservices.",
            kpi: "High-performance, low-latency inter-service communication"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are your APIs lacking a strong, type-safe contract?",
            problem: "REST APIs have no enforceable contract, leading to integration issues and runtime errors.",
            solution: "Our engineers are experts in designing strongly-typed API contracts with Protobuf, which automatically generates type-safe client and server code, catching errors at compile time.",
            kpi: "Strongly-typed, contract-first API design"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
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
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Are you struggling to build real-time features with traditional HTTP polling?",
            problem: "HTTP polling is inefficient, slow, and doesn't provide a true real-time experience.",
            solution: "We find engineers who are experts in using Socket.IO (which uses WebSockets with fallbacks) to create persistent, real-time communication channels between the client and server.",
            kpi: "True real-time, bi-directional communication"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "How do you broadcast messages to specific groups of users?",
            problem: "You need a way to send messages only to users who are interested in them, such as users in a specific chat room.",
            solution: "Our engineers are proficient in using Socket.IO's 'rooms' feature to efficiently manage and broadcast messages to specific groups of clients.",
            kpi: "Efficient message broadcasting with rooms"
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-primary" />,
            pain: "Can your real-time server handle thousands of concurrent connections?",
            problem: "A single Socket.IO server doesn't scale. You need a way to distribute connections across multiple servers.",
            solution: "We look for engineers with experience in scaling Socket.IO horizontally using a Redis adapter, allowing you to handle a massive number of concurrent connections.",
            kpi: "Horizontal scaling for massive concurrency"
        }
    ],
    evaluation: ['Event handling and emission', 'Room and namespace management', 'Scaling with Redis adapter', 'Authentication and middleware', 'Reconnection logic and reliability']
  }
};
type TechKeys = keyof typeof allTech;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const techName = allTech[params.slug as TechKeys]?.name || 'Technology';
  return {
    title: `Hire Nearshore ${techName} Developers`,
    description: `Hire elite, pre-vetted LATAM engineers with expertise in ${techName}. Our scientific evaluation de-risks hiring for critical roles.`,
    keywords: `hire nearshore ${techName} developers, latam ${techName} engineers, ${techName} staff augmentation`,
  };
}

export default function TechPage({ params }: { params: { slug: string } }) {
  const tech = allTech[params.slug as TechKeys];

  if (!tech) {
   return notFound();
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
          For roles requiring deep {tech.name} expertise, our <WithTooltip content="Our proprietary Cognitive AI engine for talent evaluation."><Link href="/technical-interview-evaluation" className='text-primary hover:underline'>Axiom Cortex™ evaluation</Link></WithTooltip> focuses on practical application and deep system understanding, not just trivia. We assess candidates on:
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
      
      {params.slug === 'typescript' && <TypeScriptPSPSection />}

    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(allTech).map(slug => ({
    slug,
  }));
}
    
