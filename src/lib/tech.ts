
import type { ElementType } from 'react';
import type { Icon } from "lucide-react";
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

export interface PainPoint {
  icon: Icon;
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
  | 'react'
  | 'typescript'
  | 'nextjs'
  | 'angular'
  | 'vue'
  | 'pinia'
  | 'remix'
  | 'svelte'
  | 'web-accessibility'
  | 'rx-js' 

  // Backend/Core Languages (12)
  | 'node'
  | 'java'
  | 'python'
  | 'golang'
  | 'c-sharp'
  | 'rust'
  | 'php'
  | 'kotlin'
  | 'scala'
  | 'erlang'
  | 'haskell'
  | 'elixir'

  // DevOps & Cloud (18)
  | 'devops-engineering'
  | 'aws'
  | 'azure'
  | 'google-cloud'
  | 'kubernetes'
  | 'docker'
  | 'terraform'
  | 'ansible'
  | 'jenkins'
  | 'ci-cd'
  | 'prometheus'
  | 'grafana'
  | 'istio'
  | 'helm'
  | 'vault'
  | 'cloudformation'
  | 'gitops'
  | 'serverless'

  // Data & AI (23)
  | 'data-engineering'
  | 'sql'
  | 'etl-elt'
  | 'apache-spark'
  | 'dbt'
  | 'snowflake'
  | 'airbyte'
  | 'data-governance'
  | 'machine-learning'
  | 'data-warehousing'
  | 'power-bi'
  | 'tableau'
  | 'fivetran'
  | 'looker'
  | 'presto'
  | 'kafka'
  | 'data-science'
  | 'llms'
  | 'pandas'
  | 'numpy' 
  | 'langchain'
  | 'pytorch'
  | 'transformers'

  // Databases (7)
  | 'postgresql'
  | 'mongodb'
  | 'redis'
  | 'cassandra'
  | 'mysql'
  | 'dynamodb'
  | 'elasticsearch'

  // QA & Security (7)
  | 'playwright'
  | 'cypress'
  | 'qa-automation'
  | 'security-engineering'
  | 'penetration-testing'
  | 'jest'
  | 'vitest'

  // Architecture & Integrations (9)
  | 'microservices'
  | 'grpc'
  | 'rest-api-design'
  | 'event-sourcing'
  | 'domain-driven-design'
  | 'message-queues'
  | 'api-gateway'
  | 'system-design'
  | 'api-security'

  // Mobile (2)
  | 'react-native'
  | 'flutter'

  // Vetting & Cognitive AI (2)
  | 'axiom-cortex'
  | 'graphql'
;


export interface AllTech {
  [key: string]: TechEntry;
}

// ----------------------------------------------------------------------
// *** START OF DEFINITIVE TECHNOLOGY DATA ARRAY (90 ENTRIES) ***
// ----------------------------------------------------------------------

export const allTech: AllTech = {
  // ----------------------------------------------------------------------
  // 1. FRONTEND/FULL-STACK (10)
  // ----------------------------------------------------------------------
  'react': {
    name: 'React/TypeScript',
    category: 'Frontend & UI/UX',
    categorySlug: 'frontend-web',
    seo_title: 'Hire React/TypeScript Developers | Senior Frontend Talent',
    meta_description: 'Build performant, scalable UIs. Hire elite remote React & TypeScript talent vetted for architectural skill, not just syntax. Schedule a call today.',
    intro: "You're not here because you need another developer who 'knows React.' You're here because your application feels sluggish, your state management is a tangled mess, and your component library is a collection of one-off hacks. You need a true React expert who obsesses over performance, architecture, and user experience as much as you do. Our vetting process, powered by the Axiom Cortex™ engine, is designed to find these individuals. We move beyond simple coding challenges to assess a candidate's deep understanding of the React render cycle, their ability to design and implement scalable state management solutions, and their discipline in creating reusable, accessible component APIs. We identify engineers who don't just use React but understand its core principles, enabling them to build applications that are not only fast and responsive but also a joy to maintain and extend. This isn't about filling a seat; it's about investing in a level of quality and craftsmanship that directly translates to a superior end-user experience and a more resilient codebase. By focusing on these core competencies, we ensure that the engineers we provide become force multipliers for your team, setting new standards for quality and driving your product forward with a velocity that a less experienced developer simply cannot match.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your app slow because of endless re-renders?",
            problem: "Many so-called 'senior' React developers have a superficial understanding of the render cycle. They build components that re-render unnecessarily on every state change, leading to a slow, janky user interface that feels unresponsive, especially on lower-powered devices. This directly impacts user satisfaction, increases bounce rates, and can harm your Core Web Vitals scores, affecting your SEO. The root cause is a failure to properly memoize components, overuse of context, and an inability to profile and diagnose performance bottlenecks using the React Profiler. This isn't just a technical issue; it's a product quality issue that costs you users and revenue.",
            solution: "Our engineers are rigorously vetted for their deep understanding of React performance. They are required to demonstrate mastery of performance optimization techniques, including the correct use of `React.memo`, `useMemo`, and `useCallback`. They can use the React Profiler to identify and eliminate performance bottlenecks, and they understand advanced patterns like virtualization and windowing for rendering large lists efficiently. We don't just ask them trivia; we give them a broken, slow application and measure their ability to diagnose and fix it, providing you with evidence of their practical performance engineering skills.",
            kpi: "Expertise in React Profiler & why-did-you-render"
        },
        {
            icon: AlertTriangle,
            pain: "Is your state management a spaghetti of props and contexts?",
            problem: "A common anti-pattern in large React applications is a chaotic mix of prop-drilling, oversized context providers, and legacy Redux patterns that are ill-suited for modern server-side data. This creates a 'spaghetti state' that is bug-prone, difficult to debug, and makes adding new features a slow and dangerous process. It’s a direct result of hiring developers who lack a strategic understanding of state management architecture.",
            solution: "We specifically select for engineers who can architect clean, scalable state management solutions. They understand the critical difference between client state (e.g., UI toggles, form inputs) and server cache (e.g., data fetched from an API). Our vetting process ensures they are experts in modern libraries like Zustand for minimal client state and TanStack Query (React Query) for managing server cache, asynchronous state, and data fetching with grace and efficiency. This leads to a more resilient, maintainable, and performant application.",
            kpi: "Proven ability to architect scalable state"
        },
        {
            icon: AlertTriangle,
            pain: "Is your component library just a folder of inconsistent parts?",
            problem: "Without a disciplined approach, a component library quickly devolves into a collection of inconsistent, one-off components. It lacks a coherent API, has poor accessibility, and is difficult to use, forcing developers to reinvent the wheel for every new feature. This negates the very purpose of a design system, slowing down development and leading to an inconsistent user experience.",
            solution: "We hire for engineers who treat component development as API design. They are vetted on their ability to create reusable, composable, and accessible components. We assess their experience with tools like Storybook for documenting and testing components in isolation, and their knowledge of headless UI libraries (like Radix UI) and CSS-in-JS or utility-first CSS (like Tailwind) to build a flexible and robust design system. You get an engineer who builds a force multiplier for your team, not just a UI that 'looks right.'",
            kpi: "Focus on reusable & accessible components"
        }
    ],
    evaluation: ['Advanced hooks and render optimization', 'Modern state management (Zustand, React Query)', 'Component API design and accessibility (ARIA)', 'Performance profiling and debugging', 'TypeScript for robust component props and state'],
    technical_analysis: "Our technical analysis for React/TypeScript mastery at TeamStation AI is designed to filter for deep, architectural understanding over superficial knowledge. Candidates are assessed on their ability to structure a large-scale React application for maintainability and performance. A key area of focus is their approach to state management; we present scenarios that require them to differentiate between local, global client, and server cache state, expecting them to articulate the trade-offs between tools like Zustand, Jotai, and TanStack Query. We don't just want to see if they can use a library; we want to see if they understand the 'why' behind their choices. Performance is another critical pillar. Candidates are given a deliberately inefficient application and are expected to use the React Profiler to identify and explain the causes of performance bottlenecks, such as unnecessary re-renders. Their solution must not only fix the issue but also demonstrate a grasp of core optimization principles like memoization and virtualization. On the TypeScript front, we move beyond basic type annotations. Our scenarios require candidates to create complex generic types, use conditional and mapped types to build flexible and reusable type utilities, and correctly type higher-order components or complex hooks. This ensures they can use TypeScript as a tool for building truly robust and self-documenting systems, rather than just adding `:string` to variables. Finally, we evaluate their understanding of the broader ecosystem, including testing strategies with React Testing Library and Playwright, and their ability to configure modern build tools like Vite or Next.js for optimal performance and developer experience.",
    interlink_slugs: ['typescript', 'nextjs', 'node']
  },
  'typescript': {
    name: 'TypeScript',
    category: 'Frontend & UI/UX',
    categorySlug: 'frontend-web',
    seo_title: 'Hire TypeScript Developers | Senior Frontend Talent',
    meta_description: 'Eliminate runtime errors. Hire senior remote TypeScript talent vetted for creating robust, maintainable, and type-safe codebases. Book a call.',
    intro: "You're tired of `any` types and runtime errors that should have been caught at compile time. You need more than just a JavaScript developer; you need a TypeScript expert who can leverage the full power of the type system to build safer, more maintainable, and self-documenting code. This is not about adding `:string` to a variable; it's about architecting a type-safe system from the ground up. Our vetting process is designed to find these engineers. We present them with complex scenarios that require the use of advanced TypeScript features to solve real-world problems. We're looking for the ability to create robust data models, secure API contracts, and build a codebase where the type system itself prevents entire classes of bugs. By hiring a true TypeScript expert, you are making an investment in the long-term health and stability of your application. You are reducing the time your team spends on debugging runtime errors and increasing the time they spend on building features. This is a direct lever on engineering velocity and product quality, and it's a non-negotiable skill for any modern, high-performing team.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your codebase littered with `any` types?",
            problem: "The `any` type is a viral infection in a TypeScript codebase. It silences the compiler and negates the primary benefit of using TypeScript in the first place. It creates a false sense of security, allowing type-related errors to slip through to runtime, where they are 100x more expensive to fix. It makes refactoring a dangerous guessing game and erodes the maintainability of the application.",
            solution: "We vet for engineers who have a disciplined and deep understanding of the TypeScript type system. They are required to demonstrate their ability to write precise and effective types using advanced features like generics, conditional types, mapped types, and template literal types. They know how to model complex data structures and create type-safe APIs, ensuring that your codebase is robust and that the compiler can be a powerful ally in preventing bugs.",
            kpi: "Mastery of advanced TypeScript patterns"
        },
        {
            icon: AlertTriangle,
            pain: "Are you struggling to type complex third-party libraries?",
            problem: "Your application's type safety is only as strong as its weakest link. Integrating with untyped or poorly typed third-party JavaScript libraries introduces holes in your type system, leading to unexpected runtime errors and making it difficult to use these libraries with confidence.",
            solution: "Our engineers are skilled at bridging the gap between the typed and untyped worlds. We assess their ability to write custom declaration files (`.d.ts`) from scratch and use advanced techniques like declaration merging and module augmentation to provide strong, accurate types for even the most complex JavaScript libraries. This ensures that you can leverage the power of the open-source ecosystem without sacrificing type safety.",
            kpi: "Expertise in custom type declarations"
        },
        {
            icon: AlertTriangle,
            pain: "Is your build process slow due to TypeScript compilation?",
            problem: "A poorly configured `tsconfig.json` or an inefficient build setup can make TypeScript feel like a bottleneck rather than a productivity tool. Slow feedback loops during development frustrate engineers and reduce velocity. Long CI build times delay deployments and slow down the entire team.",
            solution: "We look for engineers who understand how to optimize the TypeScript compiler and the surrounding build process. They have experience with `tsconfig.json` settings like `noEmit` and `isolatedModules`, and they know how to structure a large project using TypeScript's project references for faster incremental builds. They are also proficient with modern, high-performance build tools like Vite, esbuild, or SWC that can dramatically speed up the development feedback loop.",
            kpi: "Proficiency in optimizing the TS build process"
        }
    ],
    evaluation: ['Advanced types (generics, conditional types)', 'Compiler configuration (tsconfig.json)', 'Declaration files and module augmentation', 'Type inference and narrowing', 'Integration with modern build tools'],
    technical_analysis: "Our technical analysis for TypeScript proficiency goes far beyond basic syntax. We focus on a candidate's ability to use the type system as an architectural tool. Scenarios presented during the evaluation require candidates to model complex, real-world data structures and API contracts, often involving polymorphism and nested generics. We explicitly test for the ability to create reusable, higher-order type utilities that can transform and manipulate other types—a key indicator of a senior-level understanding. Another critical area is the interaction with the JavaScript ecosystem. We present candidates with a complex, untyped JavaScript library and evaluate their process for creating a robust `.d.ts` declaration file, assessing their understanding of module systems, declaration merging, and how to accurately represent dynamic JavaScript behavior in a static type system. We also test their understanding of the TypeScript compiler's behavior, particularly around type inference, control flow analysis, and type narrowing. A candidate is expected to explain not just *what* the compiler infers, but *why*, and how to write code that maximizes the compiler's ability to catch errors. Finally, we assess their practical knowledge of integrating TypeScript into a modern development workflow. This includes configuring `tsconfig.json` for different environments (e.g., Node.js backend vs. browser frontend), setting up strict ESLint rules for type-aware linting, and understanding how to leverage TypeScript with modern build tools for a fast and efficient developer experience.",
    interlink_slugs: ['react', 'node', 'nextjs']
  },
  'nextjs': {
    name: 'Next.js',
    category: 'Frontend & UI/UX',
    categorySlug: 'frontend-web',
    seo_title: 'Hire Next.js Developers | Senior React Talent',
    meta_description: 'Build high-performance web apps. Hire elite remote Next.js developers vetted for App Router, Server Components, and caching mastery. Book a call.',
    intro: "You're building more than a website; you're building a web application. You need engineers who are not just React developers but true Next.js experts who can master the full-stack capabilities, from the App Router and server components to advanced caching and API routes. The modern web demands performance, and Next.js is the premier tool for achieving it. However, its power comes with complexity. Hiring a developer who doesn't understand its core principles can lead to a slow, bloated, and difficult-to-maintain application. Our vetting process is designed specifically to identify engineers who have a deep, architectural understanding of Next.js. We test their knowledge of the rendering lifecycle, their ability to strategically choose between server and client components, and their mastery of the framework's powerful caching and data revalidation strategies. By hiring from us, you get a developer who can build applications that are not just feature-rich, but also incredibly fast, SEO-friendly, and cost-effective to host. This is about leveraging the full power of the framework to build a competitive advantage.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your app slow and your client-side bundle massive?",
            problem: "A common mistake in the new App Router paradigm is the incorrect or overuse of the 'use client' directive. This effectively turns a server-rendered application back into a classic Single-Page App (SPA), sending a massive JavaScript bundle to the client, resulting in slow page loads, poor Core Web Vitals, and a frustrating user experience. It's a sign that the developer hasn't grasped the fundamental 'server-first' mental model of modern Next.js.",
            solution: "We vet for a deep, practical understanding of the App Router and the Server/Client Component architecture. Our engineers are required to demonstrate their ability to build complex UIs that are server-first by default, using Client Components only when absolutely necessary for interactivity. They understand how to structure an application to minimize the client-side JavaScript bundle, leading to a faster, more performant experience for your users.",
            kpi: "Mastery of Server Components & performance"
        },
        {
            icon: AlertTriangle,
            pain: "Are you struggling with Next.js caching and data revalidation?",
            problem: "The advanced caching model in Next.js is one of its most powerful features, but it's also one of the most complex. Incorrect implementation leads to either stale data being shown to users, or constant cache misses that hammer your backend APIs and databases, negating any performance gains. Developers without deep framework knowledge often struggle to debug caching issues, leading to unpredictable application behavior.",
            solution: "Our evaluation includes complex scenarios focused on data fetching and caching. We test a candidate's knowledge of the different caching layers (Full Route Cache, Data Cache), their ability to use time-based and on-demand revalidation (`revalidatePath`, `revalidateTag`), and how to effectively opt-out of caching when necessary. This ensures you get an engineer who can build an application that is both blazing fast and always up-to-date.",
            kpi: "Expertise in advanced caching & revalidation"
        },
        {
            icon: AlertTriangle,
            pain: "Are you unsure when to use Route Handlers vs. Server Actions?",
            problem: "With the introduction of Server Actions, developers now have two ways to handle data mutations in Next.js. Choosing the wrong tool for the job can lead to complex, insecure, and non-performant code. Using Route Handlers for simple form submissions can be overkill, while using Server Actions for building a public REST API is not their intended purpose.",
            solution: "We look for engineers who have a clear mental model of the trade-offs. They understand that Server Actions are ideal for RPC-style mutations directly from components, simplifying the code and improving user experience with features like `useOptimistic`. They also know that Route Handlers are the right choice for building standard, versioned RESTful APIs that can be consumed by third parties. This ensures they use the right tool for the job every time.",
            kpi: "Proficiency in Server Actions & API Routes"
        }
    ],
    evaluation: ['App Router and advanced routing patterns', 'Server Components and data fetching strategies', 'Advanced caching (full route cache, data cache, on-demand revalidation)', 'Server Actions vs. Route Handlers', 'Performance optimization for Core Web Vitals'],
    technical_analysis: "Our technical analysis for Next.js focuses on assessing a candidate's mastery of the modern, App Router-centric paradigm. We move beyond basic React knowledge to probe for a deep, architectural understanding of the framework. A key part of our evaluation involves presenting a complex application design and asking the candidate to architect the component tree, justifying their use of Server Components, Client Components, and the placement of `'use client'` boundaries. This reveals their understanding of the server-first mental model and their ability to minimize the client-side JavaScript bundle. We then dive into data fetching and caching. Candidates are given scenarios involving frequently updated data, user-specific data, and static content, and are expected to implement the correct caching strategies (e.g., `fetch` cache options, `revalidateTag`, `revalidatePath`). We test their ability to debug caching issues by intentionally providing scenarios with unexpected stale data. For data mutations, we assess their understanding of the trade-offs between Server Actions and API Route Handlers, requiring them to build a simple form with progressive enhancement using Server Actions and `useOptimistic`, and then to design a versioned REST endpoint using a Route Handler. Finally, performance is a non-negotiable. We ask candidates to analyze a Next.js application with poor Core Web Vitals scores and use tools like the Next.js build output and Chrome DevTools to identify the root causes (e.g., large component payloads, layout shifts, blocking scripts) and propose concrete solutions.",
    interlink_slugs: ['react', 'typescript', 'playwright']
  },
  'angular': {
    name: 'Angular',
    category: 'Frontend & UI/UX',
    categorySlug: 'frontend-web',
    seo_title: 'Hire Angular Developers | Enterprise Frontend Talent',
    meta_description: 'Build scalable enterprise apps. Hire senior remote Angular talent vetted for RxJS, NgRx, and modular architecture expertise. Schedule a discovery call.',
    intro: "You're building a large-scale enterprise application, and you need the structure, opinionation, and long-term stability of a mature framework. You're here because you need a true Angular expert who can leverage its powerful dependency injection, build modular applications with NgModules, and tame the complexity of RxJS. This isn't about building a small marketing site; it's about creating a complex, maintainable, and performant application that will be the backbone of your business for years to come. Our vetting process is tailored to identify engineers who thrive in this environment. We focus on a candidate's ability to architect for scale, manage complexity, and write code that is both robust and easy to test. We look for a deep understanding of the framework's core principles, not just a superficial knowledge of the syntax. By hiring an Angular expert from us, you are investing in the long-term health and stability of your enterprise application, ensuring that it can evolve with your business without being crushed by technical debt.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your component communication a complex web of `@Input` and `@Output`?",
            problem: "In a large Angular application, relying solely on `@Input` and `@Output` for communication between distant components leads to a brittle and hard-to-maintain architecture. It creates tight coupling and makes refactoring a nightmare. This 'prop-drilling' problem is a classic sign of an inexperienced Angular developer.",
            solution: "We find engineers who are experts in building decoupled and scalable communication patterns. They are masters of using RxJS with injectable services to create observable data streams that components can subscribe to, regardless of their position in the component tree. They understand how to create a clean, unidirectional data flow that is easy to reason about and test.",
            kpi: "Mastery of RxJS for state management"
        },
        {
            icon: AlertTriangle,
            pain: "Is your change detection slow and causing performance issues?",
            problem: "Angular's default change detection strategy is powerful but can become a performance bottleneck in large applications with many components. Many developers are unaware of how to optimize it, leading to a slow and unresponsive user interface as the application checks for changes excessively.",
            solution: "Our engineers are skilled in optimizing Angular's change detection mechanism. We vet for a deep understanding of when and how to use the `OnPush` strategy to limit change detection cycles. They know how to work with immutable data structures and observables to create highly performant applications that feel snappy and responsive to the user.",
            kpi: "Expertise in change detection optimization"
        },
        {
            icon: AlertTriangle,
            pain: "Are your modules disorganized and your lazy loading ineffective?",
            problem: "A common mistake in large Angular projects is to put everything into a single, massive `AppModule`. This leads to a slow initial load time as the entire application must be downloaded at once, and it makes the codebase hard to navigate and maintain. It's a sign of a developer who hasn't grappled with building a truly large-scale application.",
            solution: "We vet for a deep understanding of Angular's modular architecture. Our engineers are experts at designing applications with a clear separation of concerns, using feature modules to organize code logically. They know how to effectively implement lazy loading to split the application into smaller chunks that are loaded on demand, dramatically improving initial load times and the overall user experience.",
            kpi: "Proficiency in modular architecture & lazy loading"
        }
    ],
    evaluation: ['Deep understanding of RxJS and reactive patterns', 'Change detection strategies (OnPush)', 'Modular architecture with NgModules', 'Advanced dependency injection patterns', 'Angular CLI and build optimization'],
    technical_analysis: "Evaluating a senior Angular engineer at TeamStation AI focuses heavily on assessing mastery of the framework's reactive core and enterprise-scale architecture. Candidates are tested on their ability to manage complex state using RxJS operators, including advanced concepts like multicasting, error handling within pipelines, and distinguishing between cold and hot observables. We present scenarios requiring the use of Angular's powerful dependency injection system, evaluating their ability to use providers, hierarchical injection, and token-based injection for creating modular and testable services. A critical focus is performance optimization: candidates must demonstrate practical experience with the `OnPush` change detection strategy, understanding when to use immutable data structures and the `async` pipe to prevent unnecessary rendering. For large applications, we assess their architectural design skills, including the correct use of standalone components and modularization strategies (feature modules, core module, shared module) to enforce a clean, maintainable structure. Finally, a complete understanding of the Angular CLI, including build optimization and differential loading, is required to ensure they can deliver highly performant, production-ready code.",
    interlink_slugs: ['typescript', 'rx-js', 'node']
  },
  'vue': {
    name: 'Vue.js',
    category: 'Frontend & UI/UX',
    categorySlug: 'frontend-web',
    seo_title: 'Hire Vue.js Developers | Senior Frontend Talent',
    meta_description: 'Build fast, maintainable UIs. Hire senior remote Vue.js experts vetted for Composition API, Pinia state management, and ecosystem mastery. Book a call.',
    intro: "Vue.js is the progressive framework built for approachability and performance. You need an engineer who can leverage Vue's best features—the intuitive Composition API, the power of Vite for rapid development, and the simplicity of Pinia for state management—to build applications that are not just easy to use, but easy to evolve. The Vue ecosystem is vast, and a developer who truly masters it can deliver incredible velocity. Our vetting process is focused on identifying engineers who understand the framework's core reactivity system, ensuring they write efficient and predictable code. We test their ability to design reusable components, manage complex application state with Pinia, and strategically use Vue's ecosystem tools, like Vue Router and Nuxt. By hiring a Vue expert from us, you gain a developer who can accelerate your product roadmap with clean, maintainable code that avoids the architectural pitfalls common in rapidly developed applications.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your app slow due to incorrect reactivity usage?",
            problem: "Vue's reactivity system is powerful, but developers new to the Composition API often use `ref()` and `reactive()` incorrectly, leading to inefficient updates, unnecessary component re-renders, and performance bottlenecks that are hard to debug. This breaks the promise of Vue's intuitive performance.",
            solution: "Our engineers are rigorously vetted on their deep understanding of Vue's reactivity system. They must demonstrate mastery of the Composition API, knowing when to use `ref`, `reactive`, and `computed` properties for optimal efficiency and performance. They are experts in using the Vue DevTools to trace and fix reactivity issues, guaranteeing a smooth and fast user experience.",
            kpi: "Mastery of Composition API & reactivity"
        },
        {
            icon: AlertTriangle,
            pain: "Is your state management overly complex with old patterns?",
            problem: "Legacy or custom state management solutions in Vue often create a boilerplate nightmare, making even simple state changes difficult to track, test, and maintain. This slows down development, frustrates engineers, and leads to an unmanageable codebase as the application scales.",
            solution: "We specifically look for experts in **Pinia**, the modern, type-safe, and incredibly lightweight state management library for Vue. Our candidates demonstrate the ability to design clear, modular Pinia stores that are easy to test and integrate seamlessly with the Composition API, eliminating complexity and accelerating feature delivery.",
            kpi: "Expertise in Pinia state management"
        },
        {
            icon: AlertTriangle,
            pain: "Are you struggling with SEO and server-side rendering (SSR)?",
            problem: "Building a complex Vue application without considering SSR can lead to poor SEO performance and slow initial page loads, impacting business goals that rely on search engine visibility and fast user acquisition. Relying on a simple CSR setup is no longer competitive for public-facing applications.",
            solution: "Our Vue experts are proficient in **Nuxt**, the full-stack framework for Vue. We vet their ability to design and deploy highly performant Nuxt applications, leveraging its features for SSR, static site generation (SSG), and auto-routing. This ensures your application is fast, scalable, and fully optimized for SEO and high traffic.",
            kpi: "Proficiency in Nuxt SSR and SSG"
        }
    ],
    evaluation: ['Mastery of Composition API & reactivity', 'Pinia state management', 'Component-based architecture', 'Nuxt.js expertise', 'Vite & build optimization'],
    technical_analysis: "Vue.js evaluation centers on the transition to the Composition API and a deep understanding of its reactivity system. Candidates must demonstrate proficiency in modeling application state using `ref`, `reactive`, and `computed` properties, knowing the crucial difference between the three to avoid performance-sapping reactive pitfalls. We test their ability to build complex, scalable state stores using Pinia, verifying they can structure code logically and efficiently without boilerplate. For large applications, experience with Nuxt.js (or similar full-stack frameworks) is assessed, including server-side rendering, data fetching, and module extension. The focus is on clean component design, efficient lifecycle usage, and performance optimization techniques, specifically around minimizing re-renders and leveraging the built-in compiler optimizations. A senior candidate must also show competence with the Vue ecosystem's modern tooling, including the fast feedback loop provided by Vite and the debugging capabilities of Vue DevTools.",
    interlink_slugs: ['pinia', 'typescript', 'react-native']
  },
  'langchain': {
    name: 'LangChain',
    category: 'Data & AI',
    categorySlug: 'ml-ai-llm-ops',
    seo_title: 'Hire Senior LangChain Developers | AI Application & RAG Experts',
    meta_description: 'Build powerful, data-aware AI applications. Hire elite remote LangChain experts vetted for complex chains, RAG architecture, and agent development. Book a call.',
    intro: "LangChain is the definitive framework for composing LLM-powered applications, providing a rich toolkit for building complex chains, data-aware agents, and robust Retrieval-Augmented Generation (RAG) systems. You need an engineer who can move beyond basic LLM calls to architect sophisticated applications that can reason, act, and interact with your proprietary data. Our vetting process is designed to find these experts. We assess their deep understanding of LangChain's core components—Chains, Agents, and Tools—and their ability to design and optimize RAG pipelines. By hiring a LangChain expert from us, you get a developer who can transform your LLM concepts into production-ready, high-value AI applications.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are your RAG results inaccurate or irrelevant?",
            problem: "A naive RAG implementation often retrieves irrelevant documents, causing the LLM to hallucinate or provide incorrect answers. This stems from a poor understanding of text chunking, embedding models, and retrieval strategies.",
            solution: "We vet for mastery of the **RAG pipeline**. Our experts must demonstrate proficiency in advanced chunking strategies, choosing the right embedding models, and implementing sophisticated retrieval techniques (e.g., HyDE, multi-query retriever) to ensure high-quality, relevant results.",
            kpi: "RAG Pipeline Optimization and Accuracy"
        },
        {
            icon: AlertTriangle,
            pain: "Is your LLM application a single, monolithic prompt?",
            problem: "Attempting to solve a complex problem with a single, massive prompt is brittle and hard to debug. This approach fails to break down the problem into logical, manageable steps, leading to unpredictable and inconsistent LLM behavior.",
            solution: "Our engineers are experts in **LangChain Expression Language (LCEL)**. They are vetted on their ability to build complex, modular chains by composing smaller, reusable components, ensuring the logic is clear, testable, and easy to maintain.",
            kpi: "Mastery of LCEL and Composable Chains"
        },
        {
            icon: AlertTriangle,
            pain: "Is your application unable to interact with external tools and APIs?",
            problem: "LLMs are powerful but are limited by their training data. Without the ability to interact with external systems, your AI application cannot access real-time information, perform actions, or integrate with your existing business logic.",
            solution: "We look for engineers proficient in building **LangChain Agents and Tools**. They are vetted on their ability to define custom tools that allow the LLM to securely interact with any API or data source, transforming it from a simple text generator into a powerful, autonomous agent.",
            kpi: "Custom Agent and Tool Development"
        }
    ],
    evaluation: ['LangChain Expression Language (LCEL) and chain composition', 'Retrieval-Augmented Generation (RAG) architecture', 'Agent and Tool creation for external API interaction', 'Vector database integration (pgvector, Pinecone, Weaviate)', 'Model evaluation and debugging (LangSmith)'],
    technical_analysis: "The LangChain evaluation focuses on a candidate's ability to build complex, data-aware LLM applications. The critical assessment is their mastery of **RAG architecture**: candidates must design a complete RAG pipeline, including choosing appropriate chunking strategies, embedding models, and vector stores, and then implement advanced retrieval methods to improve accuracy. We rigorously test their understanding of **LangChain Expression Language (LCEL)** by requiring them to build a complex, branching chain of runnable components, demonstrating their ability to compose and debug asynchronous data flows. For agentic behavior, we assess their proficiency in creating custom **Tools** that securely interact with external APIs, and in using those tools within a ReAct-style Agent. Finally, we test their knowledge of the LangChain ecosystem, including their ability to use LangSmith for tracing, debugging, and evaluating the performance of their LLM chains.",
    interlink_slugs: ['python', 'llms', 'data-engineering', 'pgvector']
  },
  'pytorch': {
    name: 'PyTorch',
    category: 'Data & AI',
    categorySlug: 'ml-ai-llm-ops',
    seo_title: 'Hire Senior PyTorch Developers | Deep Learning & AI Model Experts',
    meta_description: 'Build and train state-of-the-art neural networks. Hire elite remote PyTorch experts vetted for deep learning, performance optimization, and production deployment. Book a call.',
    intro: "PyTorch is the leading deep learning framework, favored by researchers and production teams for its flexibility, Python-native feel, and powerful GPU acceleration. You need an engineer who can move beyond tutorial-level models to architect, train, and deploy complex neural networks for real-world applications. Our vetting process is designed to find these experts. We assess their deep understanding of PyTorch's core components—Tensors, Autograd, and `nn.Module`—and their ability to optimize training loops and deploy models for high-performance inference. By hiring a PyTorch expert from us, you get a developer who can transform your data into a competitive advantage with state-of-the-art AI models.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are your model training times slow and expensive?",
            problem: "Inefficient data loading, incorrect use of the GPU, and unoptimized training loops lead to long training times and sky-high cloud computing bills. This slows down your iteration cycle and makes it impossible to experiment with new models or larger datasets.",
            solution: "We vet for mastery of **PyTorch performance optimization**. Our experts must demonstrate proficiency in using `DataLoaders` with multiple workers, correctly moving data and models to the GPU, and leveraging mixed-precision training (`torch.cuda.amp`) to dramatically accelerate training speed and reduce costs.",
            kpi: "Training Time and GPU Utilization"
        },
        {
            icon: AlertTriangle,
            pain: "Is your model architecture a disorganized script?",
            problem: "Defining a model as a long, unstructured script of sequential layers makes it hard to debug, modify, and reuse. This 'scripting' approach lacks the modularity required for complex, modern neural network architectures.",
            solution: "Our engineers are experts in PyTorch's object-oriented API. They are vetted on their ability to design clean, modular, and reusable models by subclassing `torch.nn.Module`, ensuring the architecture is clear, easy to understand, and maintainable.",
            kpi: "Modular `nn.Module` Architecture"
        },
        {
            icon: AlertTriangle,
            pain: "Are your deployed models slow and unsuitable for production?",
            problem: "A model trained in a research environment is often not ready for low-latency production inference. Without optimization techniques like quantization or compilation, your model will be too slow to serve real-time traffic.",
            solution: "We look for engineers proficient in **production model deployment**. They are vetted on their ability to use tools like **TorchScript** for JIT compilation, **quantization** for model size reduction, and high-performance serving frameworks to deploy models that meet strict latency and throughput requirements.",
            kpi: "Inference Latency and Throughput"
        }
    ],
    evaluation: ['Core PyTorch APIs (Tensor, Autograd, nn.Module)', 'Performance Optimization (DataLoaders, CUDA, AMP)', 'Model Architecture and Design Patterns', 'Deployment and Inference Optimization (TorchScript, Quantization)', 'Integration with the PyTorch Ecosystem (TorchVision, TorchText)'],
    technical_analysis: "The PyTorch evaluation is deeply practical, focusing on the end-to-end lifecycle of a deep learning model. Candidates are first assessed on their fundamental understanding of tensors and the autograd system. The core of the evaluation involves architecting and implementing a custom `nn.Module` for a specific task, demonstrating mastery of layers, activation functions, and loss functions. We rigorously test their ability to write an efficient and correct training loop, including proper data loading with `DataLoader`, optimization with `torch.optim`, and performance tuning with mixed-precision training. For production readiness, we assess their knowledge of model serialization, TorchScript for creating deployable graph representations, and quantization techniques for reducing model size and improving inference speed. Finally, we test their ability to debug common training problems, such as exploding/vanishing gradients and overfitting, proving they can not only build models but also make them work effectively.",
    interlink_slugs: ['python', 'machine-learning', 'data-science', 'aws']
  },
  'transformers': {
    name: 'Hugging Face Transformers',
    category: 'Data & AI',
    categorySlug: 'ml-ai-llm-ops',
    seo_title: 'Hire Senior Transformers Experts | NLP, Fine-Tuning, and LLM Integration',
    meta_description: 'Leverage the power of state-of-the-art NLP models. Hire elite remote Transformers experts vetted for fine-tuning, tokenization, and production deployment. Book a call.',
    intro: "The Hugging Face `transformers` library is the central nervous system of the modern AI revolution, providing standardized access to thousands of state-of-the-art language models. You need an engineer who can move beyond basic `pipeline` usage to fine-tune, optimize, and deploy these massive models for your specific business needs. Our vetting process is designed to find these experts. We assess their deep understanding of the library's core components—Tokenizers, Models, and the Trainer API—and their ability to handle the practical challenges of working with large models. By hiring a Transformers expert from us, you get a developer who can build powerful, custom NLP solutions that deliver real business value.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are you unable to adapt pre-trained models to your specific domain?",
            problem: "Off-the-shelf, pre-trained models often perform poorly on domain-specific tasks (e.g., legal or medical text). Without the ability to fine-tune a model on your own data, you are left with a generic solution that fails to meet your accuracy requirements.",
            solution: "We vet for mastery of **model fine-tuning**. Our experts must demonstrate the ability to prepare a custom dataset, correctly use the `Trainer` API, and apply techniques like LoRA for efficient, low-cost fine-tuning, resulting in a model that is highly accurate for your use case.",
            kpi: "Fine-Tuning Accuracy and F1 Score"
        },
        {
            icon: AlertTriangle,
            pain: "Is your model slow and consuming too much memory?",
            problem: "Large transformer models are resource-intensive. Simply loading a model without optimization can lead to out-of-memory errors and slow performance, making it unusable in a production environment.",
            solution: "Our engineers are experts in **model optimization**. They are vetted on their ability to use techniques like **quantization** (e.g., bitsandbytes) and **Flash Attention** to significantly reduce the memory footprint and increase the inference speed of large models, making them viable for production deployment.",
            kpi: "Inference Latency and Memory Footprint"
        },
        {
            icon: AlertTriangle,
            pain: "Are you struggling to process text correctly for your model?",
            problem: "Every transformer model has its own unique tokenizer and expects input in a specific format. Incorrect tokenization is a common, silent failure mode that leads to poor model performance, even if the model itself is correct.",
            solution: "We look for engineers proficient in the `tokenizers` library. They are vetted on their ability to correctly load and use the appropriate tokenizer, handle padding and truncation, and prepare batches of data for efficient model processing, ensuring the model receives data in the exact format it expects.",
            kpi: "Tokenizer and Data Preprocessing Accuracy"
        }
    ],
    evaluation: ['Core library APIs (pipeline, AutoModel, AutoTokenizer)', 'Fine-tuning with the Trainer API', 'Model optimization (Quantization, Flash Attention)', 'Tokenization and data preprocessing', 'Deployment of models as a service'],
    technical_analysis: "The Transformers evaluation focuses on the practical, end-to-end lifecycle of using a large language model. Candidates are assessed on their ability to select the right pre-trained model for a given task from the Hugging Face Hub. The critical test is a **fine-tuning exercise**: given a custom dataset, the candidate must preprocess the data, configure the `Trainer`, and successfully fine-tune a model, demonstrating an understanding of key hyperparameters and evaluation metrics. We rigorously test their knowledge of **model optimization**, requiring them to explain and implement quantization to reduce a model's memory footprint for deployment. Finally, we assess their ability to serve the fine-tuned model as a REST API, proving they can bridge the gap between AI modeling and production software engineering.",
    interlink_slugs: ['pytorch', 'python', 'llms', 'langchain']
  },
  'snowflake': {
    name: 'Snowflake',
    category: 'Data & AI',
    categorySlug: 'data-engineering-analytics',
    seo_title: 'Hire Senior Snowflake Developers | Cloud Data Platform & Analytics Engineering',
    meta_description: 'Build a scalable, zero-maintenance data warehouse. Hire elite remote Snowflake experts vetted for data modeling, performance tuning, and cost optimization. Book a call.',
    intro: "Snowflake has redefined the cloud data platform, offering near-infinite, decoupled scaling of storage and compute. You need an engineer who can leverage Snowflake's unique architecture to build a fast, reliable, and cost-effective data warehouse. Our vetting process is designed to find experts in Snowflake's core features—virtual warehouses, zero-copy cloning, and time travel—and their ability to apply data modeling best practices within this powerful environment. By hiring a Snowflake expert from us, you get a developer who can transform your analytics capabilities, providing your business with a single source of truth that is always fast and always available.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are your queries slow and your warehouse costs unpredictable?",
            problem: "Without a deep understanding of Snowflake's virtual warehouse and caching system, developers run inefficient queries that consume excessive credits and time. They fail to right-size warehouses or leverage caching layers, leading to slow dashboards and a massive, unexpected bill.",
            solution: "We vet for mastery of **Snowflake performance and cost optimization**. Our experts must demonstrate the ability to analyze query profiles, choose the correct virtual warehouse size, and leverage Snowflake's multi-layered caching to dramatically improve query speed and reduce credit consumption.",
            kpi: "Query Performance and Credit Consumption Optimization"
        },
        {
            icon: AlertTriangle,
            pain: "Is your data sharing insecure and inefficient?",
            problem: "Manually exporting and sharing data via CSVs or other files is slow, insecure, and creates stale data silos. This prevents effective data collaboration with partners and internal teams.",
            solution: "Our engineers are experts in **Snowflake Secure Data Sharing**. They are vetted on their ability to use Shares and Data Exchanges to provide live, secure, and governed access to data without creating any copies, enabling real-time collaboration with zero ETL.",
            kpi: "Secure Data Sharing and Collaboration"
        },
        {
            icon: AlertTriangle,
            pain: "Are you struggling to manage data transformations and quality?",
            problem: "Loading raw data directly into Snowflake without a structured transformation and testing process leads to an untrustworthy data warehouse. Your business cannot rely on data that is not modeled, tested, and documented.",
            solution: "We look for engineers proficient in building data transformation pipelines on top of Snowflake using **dbt**. They are vetted on their ability to create modular, tested, and well-documented dbt models that transform raw data into analytics-ready datasets, ensuring a single source of truth.",
            kpi: "dbt for Data Modeling and Transformation"
        }
    ],
    evaluation: ['Virtual Warehouse management and cost optimization', 'Data modeling (Star Schema) and performance tuning', 'Secure Data Sharing and governance (RBAC)', 'Zero-Copy Cloning and Time Travel for DataOps', 'Integration with dbt and the broader data ecosystem'],
    technical_analysis: "The Snowflake evaluation is focused on cloud data warehousing and analytics engineering best practices. Candidates are tested on their ability to design a scalable data warehouse architecture using a **star schema** model. A critical assessment is their mastery of **performance and cost optimization**: we present scenarios involving slow queries and require candidates to use the query profile to diagnose the bottleneck and apply fixes, such as warehouse resizing or query refactoring. We rigorously test their ability to use **Secure Data Sharing** to create a provider/consumer relationship and their knowledge of **Time Travel** and **Zero-Copy Cloning** for DataOps workflows. Finally, we assess their expertise in integrating Snowflake with **dbt** to build a modern, tested, and documented data transformation pipeline.",
    interlink_slugs: ['dbt', 'sql', 'data-engineering', 'python']
  },
  'dbt': {
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
  }
};

export function getAllTechSlugs(): string[] {
    return Object.keys(allTech);
}
