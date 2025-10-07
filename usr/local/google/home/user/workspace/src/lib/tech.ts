
import type { ElementType } from 'react';

import { Code, Database, BrainCircuit, GanttChartSquare, TestTube2, ShieldCheck, Server, Wallet, Layers, Component, Plane, AlertTriangle } from 'lucide-react';

export interface Tech {
  name: string;
  slug: string;
}

export interface TechCategory {
  name: string;
  slug: string;
  pain: string;
  icon: ElementType;
  tech: Tech[];
}

export interface AllTech {
  [key: string]: {
    name: string;
    category: string;
    categorySlug: string;
    seo_title: string;
    meta_description: string;
    intro: string;
    pains: {
      icon: ElementType;
      pain: string;
      problem: string;
      solution: string;
      kpi: string;
    }[];
    evaluation: string[];
    technical_analysis: string;
    interlink_slugs: string[];
  }
}

export const allTech: AllTech = {
  'react': { 
    name: 'React/TypeScript', 
    category: 'Frontend & UI/UX', 
    categorySlug: 'frontend-web',
    seo_title: 'Hire React/TypeScript Developers | Senior Frontend Talent',
    meta_description: 'Build performant, scalable UIs. Hire elite remote React & TypeScript talent vetted for architectural skill, not just syntax. Schedule a call today.',
    intro: "You're not here because you need another developer who 'knows React.' You're here because your application feels sluggish, your state management is a tangled mess, and your component library is a collection of one-off hacks. You need a true React expert who obsesses over performance, architecture, and user experience as much as you do. Our vetting process, powered by the Axiom Cortex™ engine, is designed to find these individuals. We move beyond simple coding challenges to assess a candidate's deep understanding of the React render cycle, their ability to design and implement scalable state management solutions, and their discipline in creating reusable, accessible component APIs. We identify engineers who don't just use React but understand its core principles, enabling them to build applications that are not only fast and responsive but also a joy to maintain and extend. We provide auditable proof of these capabilities, so you can hire with the confidence that you're getting a genuine expert who will elevate your entire frontend practice. This isn't about filling a seat; it's about investing in a level of quality and craftsmanship that directly translates to a superior end-user experience and a more resilient codebase. By focusing on these core competencies, we ensure that the engineers we provide become force multipliers for your team, setting new standards for quality and driving your product forward with a velocity that a less experienced developer simply cannot match.",
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
    interlink_slugs: ['typescript', 'nextjs', 'vite']
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
    meta_description: 'Build high-performance web apps. Hire elite remote Next.js developers vetted for App Router, Server Components, and caching mastery. Book your call.',
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
    technical_analysis: "Evaluating a senior Angular engineer requires moving beyond the basics of components and templates. Our process focuses on a candidate's ability to architect scalable, maintainable, and performant enterprise applications. We present complex state management scenarios to assess their mastery of RxJS, expecting them to design solutions that avoid common pitfalls like memory leaks from unclosed subscriptions and to use operators effectively to manage complex asynchronous data flows. We also dive deep into dependency injection, probing their understanding of the different provider scopes (`root`, `platform`, `any`) and when to use them, as well as their ability to use injection tokens for creating flexible and decoupled services. Performance is another key area. We provide a sample application with deliberate performance bottlenecks and ask the candidate to use Angular's built-in profiling tools to identify and fix the issues, specifically looking for their ability to correctly apply the `OnPush` change detection strategy and their understanding of how it interacts with immutable data and observables. Finally, we assess their architectural skills by asking them to design the module structure for a large, multi-feature application, evaluating their strategy for lazy loading, creating shared modules, and providing services at the correct level of the application hierarchy. This ensures we hire engineers who can build applications that are not just functional, but are also built to last.",
    interlink_slugs: ['typescript', 'playwright', 'node']
  },
  'vue': {
    name: 'Vue.js',
    category: 'Frontend & UI/UX',
    categorySlug: 'frontend-web',
    seo_title: 'Hire Vue.js Developers | Senior Frontend Talent',
    meta_description: 'Build performant and approachable UIs. Hire senior remote Vue.js developers vetted for Composition API and Nuxt mastery. Let\'s talk.',
    intro: "You need more than someone who's dabbled in Vue. You need an engineer who understands reactivity deeply, composes components cleanly, and can scale SPA/SSR apps with Nuxt while keeping performance tight and DX high. The beauty of Vue lies in its approachability and scalability, but harnessing its full potential requires a level of expertise that goes beyond the official documentation. Our vetting process is designed to identify these experts. We focus on a candidate's ability to write clean, reusable, and performant code using the Composition API. We test their understanding of Vue's reactivity system to ensure they can build complex, interactive UIs without introducing performance bottlenecks. We also assess their experience with the broader Vue ecosystem, including state management with Pinia and building server-rendered applications with Nuxt. By hiring a Vue expert from us, you get an engineer who can not only build beautiful user interfaces but can also architect a frontend that is a joy for your entire team to work on.",
    pains: [
      {
        icon: AlertTriangle,
        pain: 'Is your reactivity buggy or unpredictable?',
        problem: 'A superficial understanding of Vue\'s reactivity system is a common pitfall. Developers who misuse `ref` and `reactive`, or who don\'t understand the nuances of watchers and computed properties, can create applications with stale state, infinite update loops, and subtle bugs that are a nightmare to track down. This undermines the reliability of your UI and erodes user trust.',
        solution: 'We vet for a deep, fundamental understanding of Vue 3\'s reactivity system. Our engineers can explain the difference between `ref`, `reactive`, `shallowRef`, and when to use each. They are experts at crafting efficient computed properties and using watchers correctly for side effects, ensuring your application state is always predictable, performant, and easy to debug.',
        kpi: 'Mastery of Vue 3 reactivity model'
      },
      {
        icon: AlertTriangle,
        pain: 'Is your codebase a tangle of options and mixins?',
        problem: 'In large Vue 2 applications, the Options API and mixins often lead to a "spaghetti code" problem. Logic is scattered, component code becomes bloated and hard to read, and it\'s difficult to understand where different pieces of state and functionality are coming from. This makes the codebase difficult to maintain, refactor, and test.',
        solution: 'We prioritize engineers who are fluent in the Composition API. They are masters of creating clean, reusable, and type-safe logic by encapsulating state and functions within composables. This leads to a more organized, modular, and testable codebase. We also look for experience in migrating legacy Options API codebases to the Composition API, a critical skill for modernizing existing applications.',
        kpi: 'Composition API and composables expertise'
      },
      {
        icon: AlertTriangle,
        pain: 'Are SSR/SEO and performance falling short?',
        problem: 'Building a server-rendered Vue application for performance and SEO is not trivial. A developer without experience in a framework like Nuxt can struggle with properly configuring server-side rendering, managing asynchronous data on the server, and implementing effective caching strategies. This leads to slow Time to First Byte (TTFB), poor Core Web Vitals, and a bad experience for both users and search engine crawlers.',
        solution: 'We look for engineers with hands-on experience building production applications with Nuxt.js. They understand the difference between server, client, and universal rendering, and they know how to use Nuxt\'s data fetching and caching features to build blazingly fast, SEO-friendly applications. Our vetting includes performance profiling and optimization scenarios to ensure they can deliver a top-tier user experience.',
        kpi: 'Nuxt SSR/ISR and performance optimization'
      }
    ],
    evaluation: ['Composition API and composables', 'State management (Pinia/Vuex)', 'Nuxt SSR/ISR and routing', 'Performance profiling and code-splitting'],
    technical_analysis: "Our technical evaluation for Vue.js developers is designed to identify true experts in the modern Vue 3 ecosystem. We move beyond basic component creation to assess a candidate's architectural thinking. A key focus is their mastery of the Composition API; we provide scenarios that require them to create complex, reusable composables that encapsulate business logic and state, and we evaluate the cleanliness and testability of their solutions. State management is another critical area. We test their ability to design a scalable Pinia store, including the use of modules, getters, and actions, and their understanding of how to manage both local and global state effectively. For Nuxt.js expertise, we present a complex application requirement and ask them to architect the Nuxt project, explaining their choices for rendering modes (SSR, ISR, CSR), directory structure, and data fetching strategies (`useFetch`, `useAsyncData`). We also assess their ability to debug performance issues in a Nuxt application, using tools to identify and fix bottlenecks related to server rendering or client-side hydration. Finally, we evaluate their understanding of Vue's reactivity system at a deep level. We ask them to explain the difference between `ref` and `reactive`, the nuances of `watch` vs. `watchEffect`, and how to avoid common performance pitfalls. This ensures we hire engineers who can not only build features but can also build them in a way that is performant, scalable, and a pleasure to maintain.",
    interlink_slugs: ['typescript', 'nextjs', 'node']
  },
  'vault': {
    name: 'HashiCorp Vault',
    category: 'Security & GRC',
    categorySlug: 'security-grc',
    seo_title: 'Hire HashiCorp Vault Experts | Senior Security Talent',
    meta_description: 'Secure your secrets at scale. Hire senior remote Vault talent for robust secrets management, rotation, and PKI. Schedule a call today.',
    intro: "You've realized that storing API keys and database credentials in environment variables or configuration files is a massive security liability and a compliance nightmare. You need a dedicated Vault expert who can eliminate secret sprawl, implement a Zero Trust security model, and establish dynamic, short-lived credentials across your entire infrastructure. Our vetting process is designed to filter for senior engineers who can architect Vault for high availability (HA), manage complex authentication methods (e.g., Kubernetes, OIDC, AWS/Azure), and operationalize its most powerful features like Dynamic Secrets and Transit Encryption. Hiring a Vault expert from us is not just about installing software; it's about fundamentally transforming your security posture from vulnerable static secrets to an automated, auditable, and resilient secrets management platform. This investment directly reduces your risk of a data breach and simplifies compliance with regulations like SOC 2 and HIPAA.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is manual secret rotation exposing you to breaches?",
            problem: "If a database password or API key is static and used for months or years, a single breach or accidental commit can compromise your entire system. Manual rotation is slow, error-prone, and often leads to downtime when a service uses the old credential, creating a security/availability trade-off.",
            solution: "Our engineers are experts in implementing **Vault's Dynamic Secrets Engine**. They integrate Vault with your databases and cloud providers (e.g., RDS, AWS IAM) to generate unique, short-lived credentials on demand. When the service is finished, the secret is automatically revoked, eliminating the risk of long-lived credentials and enforcing a Zero Trust model.",
            kpi: "Achieve 100% dynamic secret usage for core applications"
        },
        {
            icon: AlertTriangle,
            pain: "Are you struggling to securely manage keys for multiple clouds or teams?",
            problem: "As your company scales, secrets sprawl into multiple systems (AWS Secrets Manager, Azure Key Vault, local config files, Git), leading to inconsistency, a fragmented security policy, and an unmanageable audit trail. This complexity makes it impossible for your security team to maintain control.",
            solution: "We hire architects who can deploy Vault as the **centralized secrets broker**. They consolidate access policies using Vault's namespaces and fine-grained access control (ACLs), acting as the single source of truth for all secrets across hybrid and multi-cloud environments, dramatically simplifying governance and auditing.",
            kpi: "Consolidate 90% of all application secrets into Vault within 90 days"
        },
        {
            icon: AlertTriangle,
            pain: "Are you manually managing SSL/TLS certificates for internal services?",
            problem: "Maintaining a Public Key Infrastructure (PKI) for internal microservices with manual certificate issuance and renewal is a time-consuming, repetitive task that frequently results in expired certificates, leading to production outages and service trust issues.",
            solution: "Our experts deploy and automate Vault's **PKI Secrets Engine**. They configure Certificate Authority (CA) roles to automatically issue and renew internal TLS certificates for all your microservices, dramatically reducing operational overhead and eliminating certificate expiration-related downtime.",
            kpi: "Eliminate certificate expiration-related downtime entirely"
        }
    ],
    evaluation: ['Vault HA deployment and storage backends (Raft)', 'Dynamic Secrets implementation (Databases, Cloud)', 'Authentication Methods (Kubernetes, OIDC, LDAP)', 'Transit Secrets Engine for encryption-as-a-service', 'Policy and ACL management'],
    technical_analysis: "The technical evaluation for a senior Vault engineer is centered on architectural resilience and the operational security model. Candidates must demonstrate deep knowledge of **Vault HA deployment**, specifically using the **Raft Storage Backend** over legacy Consul, articulating the complexities of cluster initialization, unsealing, and auto-unsealing mechanisms (e.g., using cloud key management services). A core area of expertise is the **Dynamic Secrets Engine**, requiring candidates to implement and justify lease duration and revocation policies for high-volume database access, demonstrating how to use the `lease_id` and monitor lease expiry. We rigorously test their understanding of **Auth Methods**, specifically the **Kubernetes Auth Method** for seamless injection of secrets into pods via Service Account Tokens, and the OIDC/JWT Auth Method for integrating with external identity providers. Furthermore, we assess mastery of the **Transit Secrets Engine** for data encryption/decryption-as-a-service, ensuring they understand deterministic vs. convergent encryption and proper key rotation without data loss. Finally, a candidate must demonstrate proficiency in HCL for Policy-as-Code using Sentinel or Terraform to manage all Vault configuration in an auditable, GitOps-compliant manner, proving they can deploy and manage Vault itself with the same security discipline it enforces.",
    interlink_slugs: ['kubernetes', 'sops', 'oidc']
  },
  'external-secrets': {
    name: 'External Secrets Operator',
    category: 'Security & GRC',
    categorySlug: 'security-grc',
    seo_title: 'Hire External Secrets Experts | Kubernetes Secret Talent',
    meta_description: 'Sync cloud secrets to Kubernetes securely. Hire senior remote External Secrets experts for automated, one-way secret syncing. Get started now.',
    intro: "Your Kubernetes secrets are checked into Git or manually managed with kubectl, creating security vulnerabilities and operational bottlenecks. You need an expert in modern GitOps secret management. You're here to find an engineer who has mastered the **External Secrets Operator (ESO)** to securely and automatically sync secrets from external stores like AWS Secrets Manager, Google Secrets Manager, or HashiCorp Vault directly into your Kubernetes clusters. Our vetting process identifies platform engineers who understand that separating secrets from application configuration is a fundamental principle of secure, modern infrastructure. They are not just Kubernetes operators; they are security-conscious engineers who can build a seamless and auditable pipeline for secrets management that empowers developers without compromising on security. By hiring an ESO expert, you eliminate manual secret management, reduce the risk of secret leakage, and create a scalable system that works across multiple clusters and environments.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are sensitive secrets stored insecurely in Kubernetes native secrets?",
            problem: "The default Kubernetes Secret is only base64 encoded, not encrypted, and is stored in the cluster's etcd database. If etcd is breached or misconfigured, all your sensitive data (database credentials, API keys) is immediately compromised. Storing the secrets directly in manifests is a security time bomb.",
            solution: "Our experts deploy External Secrets Operator to **proxy** the secrets. The sensitive data is kept exclusively in external, hardened systems like Vault or AWS Secrets Manager, and ESO pulls a synchronized copy, keeping the data source secure and preventing secret exposure via cluster misconfiguration.",
            kpi: "Eliminate all hardcoded or base64 secrets in Kubernetes manifests"
        },
        {
            icon: AlertTriangle,
            pain: "Do developers wait for DevOps to manually update secrets after rotation?",
            problem: "Whenever a master key in a cloud provider (e.g., a database password in AWS Secrets Manager) is rotated, a developer must manually fetch the new value and update the Kubernetes Secret, leading to long delays, potential downtime, and developer friction.",
            solution: "We implement External Secrets with **polling and synchronization**. Once configured, ESO automatically detects changes in the external SecretStore (e.g., Vault) and instantly updates the corresponding Kubernetes Secret, ensuring zero delay in rotation and zero downtime for the application pods.",
            kpi: "Reduce secret update propagation time from hours to seconds"
        },
        {
            icon: AlertTriangle,
            pain: "Is secret access control confusing and hard to audit?",
            problem: "Using native Kubernetes Secrets means all applications within a namespace often share the same secret access privileges, making it difficult to enforce the Principle of Least Privilege. Auditing who accessed which secret at what time is complex or impossible.",
            solution: "Our engineers configure ESO to utilize the fine-grained access control of the external SecretStore. By defining specific `SecretStore` resources, they ensure that the External Secrets Operator only has access to the minimal required data, providing a clear, auditable trail and enforcing strict access boundaries.",
            kpi: "Enforce strict Least Privilege principle on 100% of production secrets"
        }
    ],
    evaluation: ['Deploying and securing the ESO Operator', 'Configuring `SecretStore` and `ClusterSecretStore`', 'Integrating with Vault, AWS Secrets Manager, and Azure Key Vault', 'Syncing secrets with labels and property mapping', 'Handling secret rotation and auto-update policies'],
    technical_analysis: "Mastery of the External Secrets Operator (ESO) requires deep competence in both Kubernetes Operators and external vault integration. The technical evaluation focuses heavily on a candidate's ability to architect the **`SecretStore` resource** to securely connect to the external provider. This involves understanding and configuring cloud-specific authentication methods, such as using an AWS IAM Role tied to the ESO Service Account (via IRSA) or using the Kubernetes Auth Method for HashiCorp Vault. A critical component is the **`ExternalSecret` definition**: we test their knowledge of advanced data extraction using JSONPath or template mapping to pull specific values from complex secret objects in the external store. Candidates must demonstrate how to configure **reconciliation intervals** and **rotation policy**—explaining the trade-off between aggressive polling for faster rotation and API rate limiting on the external provider. Finally, an expert must secure the Operator itself, ensuring the ESO deployment adheres to Pod Security Standards and the Service Account only has `get`/`watch`/`list` access to the necessary Custom Resources, preventing lateral movement within the cluster in case of compromise.",
    interlink_slugs: ['kubernetes', 'vault', 'aws']
  },
  'launchdarkly': {
    name: 'LaunchDarkly/OpenFeature',
    category: 'Platform / Infra / SRE',
    categorySlug: 'platform-infra-sre',
    seo_title: 'Hire LaunchDarkly Experts | Senior Feature Flag Talent',
    meta_description: 'De-risk deployments. Hire senior remote experts in LaunchDarkly & OpenFeature for feature flagging and progressive delivery. Book a discovery call.',
    intro: "Your release process is a high-stakes, all-or-nothing event that brings your team to a standstill. You need an engineer who can transform your deployments from a source of fear into a source of competitive advantage. You're here to find an expert in feature management platforms like LaunchDarkly and the vendor-neutral OpenFeature standard. Our vetting process identifies engineers who understand that feature flagging is not just an 'if' statement; it's a strategic capability that enables progressive delivery, trunk-based development, and real-time operational control. They are not just developers; they are release engineers who can architect a feature flagging strategy that de-risks deployments, empowers product teams to run experiments, and gives you a 'kill switch' for production issues. By hiring an expert in this space, you fundamentally change your team's relationship with production, enabling them to ship faster and with more confidence than ever before.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is every deployment a high-stress 'big bang' release?",
            problem: "Monolithic deployments create a massive blast radius. A single bug can cause a full-site outage and require a lengthy, risky rollback, bringing all other development to a halt. This fear of failure leads to a slow, cautious release cadence that kills velocity.",
            solution: "We find engineers who are masters of using feature flags to **decouple deployment from release**. They can help you implement a workflow where new code is merged and deployed to production safely wrapped in a feature flag, completely inert. The feature is then 'released' to users via the LaunchDarkly dashboard with zero risk and no new deployment.",
            kpi: "90% reduction in deployment-related incidents"
        },
        {
            icon: AlertTriangle,
            pain: "Are you unable to test new features with real users before a full launch?",
            problem: "Without a way to target specific user segments, you're building in a vacuum. You launch features based on assumptions and hope they work, with no ability to gather feedback or measure impact on a small cohort of users before a full-scale release.",
            solution: "Our engineers are experts in LaunchDarkly's powerful targeting capabilities. They can implement **progressive rollouts**, releasing a new feature to internal users first, then to a beta group, then to 10% of customers, and so on. This allows you to test in production safely, get real-world feedback, and make data-driven decisions about your product.",
            kpi: "Launch 100% of major features with a progressive rollout"
        },
        {
            icon: AlertTriangle,
            pain: "When a bug is found in production, is your only option a full rollback?",
            problem: "A full rollback is a slow, blunt instrument. It often rolls back unrelated, perfectly good changes along with the bad one, and it requires a new deployment cycle, extending your mean time to recovery (MTTR).",
            solution: "We look for engineers who can architect feature flags to act as a **'kill switch'** for your application. If a newly released feature causes a spike in errors or negative user feedback, you can instantly turn it off in the LaunchDarkly UI for all users, with no code changes and no new deployment required. This reduces your MTTR from hours to seconds.",
            kpi: "Reduce incident MTTR from hours to seconds"
        }
    ],
    evaluation: ['SDK integration (client-side and server-side)', 'Targeting rules and progressive rollouts', 'Experimentation and A/B testing setup', 'The OpenFeature standard and vendor neutrality', 'Performance and reliability considerations'],
    technical_analysis: "Senior LaunchDarkly expertise lies in operationalizing it as a core platform service. Our technical analysis evaluates a candidate's ability to architect the **SDK integration** across a complex, polyglot microservice environment (e.g., Node.js backend, React frontend, Java batch service), ensuring consistent user context resolution and minimal latency. A key test is their knowledge of the **flag evaluation process**—understanding the performance implications of synchronous vs. asynchronous SDKs and the effective use of **client-side vs. server-side SDKs** to protect sensitive logic. We rigorously test their ability to define and manage complex **targeting rules** using JSON targeting, custom user contexts, and defining large, imported user segments. Furthermore, we assess their expertise in utilizing LaunchDarkly's **Data Export** feature to pipe flag exposure events into external analytics platforms (like Snowflake or Mixpanel), which is vital for post-release A/B test analysis and understanding user-feature interaction. Finally, the expert must demonstrate a robust **flag hygiene** process, establishing conventions for flag naming, ownership, and retirement to ensure the system remains manageable and does not become a source of technical debt, which is a common failure point for scaling teams.",
    interlink_slugs: ['nextjs', 'kubernetes', 'typescript']
  },
    'okta': { 
    name: 'Okta/Auth0', 
    category: 'Security & GRC', 
    categorySlug: 'security-grc', 
    seo_title: 'Hire Okta & Auth0 Experts | Senior Identity Engineers',
    meta_description: 'Build secure, scalable identity. Hire senior remote Okta & Auth0 experts for SSO, MFA, and B2B federation. Book a call to start.',
    intro: "You're building your own authentication system, and it's becoming a complex and risky distraction from your core product. You need an identity expert. You're here to find an engineer who can leverage a platform like Okta or Auth0 to implement secure, scalable, and feature-rich identity management, including SSO, MFA, and user provisioning. Our vetting process identifies engineers who understand that identity is a critical piece of infrastructure, not just a login form. They are experts in modern authentication protocols, federation, and building secure, seamless user experiences. By hiring an identity expert from us, you can offload the burden of building and maintaining a complex authentication system and focus on what you do best: building your product. This accelerates your time-to-market, enhances your security posture, and unblocks enterprise sales by providing the features your customers demand.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are you spending months building and maintaining your own user authentication?",
            problem: "Building a secure, feature-rich authentication system (password reset, MFA, social logins) is a massive undertaking that distracts from your core business and is a common source of security vulnerabilities.",
            solution: "We find engineers who are experts in identity platforms like Okta or Auth0, allowing you to outsource your authentication and focus on your product, not on password hashing algorithms. This can save you months of development time.",
            kpi: "Reduce time-to-market for new products by 2-3 months"
        },
        {
            icon: AlertTriangle,
            pain: "Can your enterprise customers sign in with their own SSO?",
            problem: "A lack of enterprise Single Sign-On (SAML/OIDC) is a major blocker for selling to large companies, who demand it for security and compliance.",
            solution: "Our engineers can rapidly integrate with any enterprise identity provider using Okta or Auth0's federation capabilities, unblocking your enterprise sales pipeline and accelerating revenue.",
            kpi: "Unblock enterprise sales with SSO & federation"
        },
        {
            icon: AlertTriangle,
            pain: "Are you struggling to manage user access across all your applications?",
            problem: "Manual provisioning and de-provisioning of users in multiple systems is slow, error-prone, and a security risk. When an employee leaves, their access might linger for days.",
            solution: "We vet for experience with SCIM (System for Cross-domain Identity Management) to automate user provisioning, ensuring access is granted and revoked instantly and correctly across all your systems.",
            kpi: "Automate user provisioning and de-provisioning (SCIM)"
        }
    ], 
    evaluation: ['OIDC/OAuth2 flow implementation and best practices', 'User provisioning (SCIM) and directory integration', 'MFA policy enforcement and adaptive MFA', 'Custom actions/rules for extending functionality', 'API access management'],
    technical_analysis: "A senior identity engineer is evaluated on their deep understanding of modern authentication and authorization protocols. Our process includes practical exercises where candidates must implement a secure OIDC/OAuth2 flow from scratch for a single-page application, demonstrating their mastery of the Authorization Code flow with PKCE. We assess their ability to configure and manage enterprise federation using SAML, including debugging assertions and managing certificate rotation. A key area of expertise is extending the identity platform; we require candidates to write custom Actions (Auth0) or Hooks (Okta) to implement complex business logic, such as enriching user profiles or enforcing custom authorization rules. We also test their knowledge of API access management, requiring them to secure a sample API using JWTs and configure scopes and claims for fine-grained access control. Finally, a candidate must demonstrate their understanding of the security implications of different configurations, such as token lifetimes, session management, and the trade-offs between different MFA factors. This ensures we hire engineers who can build an identity solution that is not just functional, but also secure and scalable.",
    interlink_slugs: ['oidc', 'saml', 'security-grc'] 
  },
  'oidc': {
    name: 'OIDC/SAML',
    category: 'Security & GRC',
    categorySlug: 'security-grc',
    seo_title: 'Hire OIDC/SAML Experts | Senior Identity Engineers',
    meta_description: 'Enable enterprise SSO. Hire senior remote OIDC & SAML experts for secure identity federation and authentication. Contact us for a consultation.',
    intro: "Your applications have inconsistent, insecure login mechanisms, and you can't sell to enterprise customers because you don't support SSO. You need an expert in modern identity protocols like OpenID Connect (OIDC) and SAML to build a centralized, secure authentication and federation strategy. Our vetting process identifies engineers who have a deep, standards-based understanding of how these complex protocols work. They are not just plugging in a library; they are architecting a secure identity layer for your entire platform. By hiring an identity protocol expert, you can finally unblock your enterprise sales pipeline, improve your security posture, and provide a seamless login experience for all your users.",
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
        pain: "Are you losing enterprise deals due to a lack of SSO?",
        problem: "Forcing enterprise users to create a separate username and password for your app is a major sales and security obstacle. Large companies demand SSO.",
        solution: "Our engineers are masters of identity federation. They can use SAML or OIDC to securely connect your application to your customers' identity providers (like Okta, Azure AD), enabling seamless and secure SSO.",
        kpi: "Unblock enterprise sales with identity federation"
      },
      {
        icon: AlertTriangle,
        pain: "Are your mobile and single-page apps using insecure authentication flows?",
        problem: "Using the wrong OAuth 2.0 flow (e.g., the deprecated implicit flow) can expose your applications to token theft and other attacks.",
        solution: "We vet for a deep understanding of modern security best practices, such as the Authorization Code flow with PKCE, ensuring your applications are using the most secure methods available to protect user data.",
        kpi: "Expertise in secure OAuth 2.0 flows (PKCE)"
      }
    ],
    evaluation: ['Deep understanding of OAuth2 flows (Auth Code, PKCE)', 'OIDC token types (ID Token, Access Token) and claims', 'SAML assertions and IdP/SP-initiated flows', 'Security best practices (state parameter, nonce)', 'Debugging and troubleshooting federation issues'],
    technical_analysis: "Our technical analysis for an OIDC/SAML expert goes beyond the high-level concepts. Candidates are required to demonstrate a deep, practical understanding of the protocols. We present them with a HAR file of a failed SAML login and ask them to debug the base64-encoded assertion to find the error (e.g., an incorrect NameID format or a certificate mismatch). For OIDC, we require them to explain the exact purpose of each parameter in an authorization request (e.g., `state`, `nonce`, `code_challenge`) and the security vulnerability that each one prevents. We also assess their ability to secure an API using access tokens, including how to perform token validation (checking the signature, issuer, and audience) and how to use scopes for authorization. A key part of the evaluation is their ability to architect a multi-tenant federation solution, explaining how they would dynamically handle configuration for hundreds of different customer identity providers. This ensures we hire engineers who can build a robust, secure, and scalable identity platform, not just follow a tutorial.",
    interlink_slugs: ['okta', 'security-grc', 'vault']
  },
  'sops': {
    name: 'SOPS',
    category: 'Security & GRC',
    categorySlug: 'security-grc',
    seo_title: 'Hire SOPS Experts | GitOps Secrets Management',
    meta_description: 'Secure your GitOps workflow. Hire senior remote SOPS experts to manage encrypted secrets in Git with KMS or GPG. Get started today.',
    intro: "You want the benefits of GitOps, but you're struggling with the 'secret problem.' Committing plaintext secrets is a non-starter, but managing encrypted files with PGP keys for your whole team is an operational nightmare. You're here to find an expert in Mozilla SOPS who can solve this problem elegantly. Our vetting process identifies engineers who understand how to use SOPS with cloud KMS providers (AWS KMS, GCP KMS) to create a secure, auditable, and developer-friendly workflow for managing secrets in Git. By hiring a SOPS expert, you can fully embrace GitOps without compromising on security, allowing your team to move faster and with more confidence.",
    pains: [
      {
        icon: AlertTriangle,
        pain: "Are you checking encrypted secrets into Git and dealing with key management?",
        problem: "Managing PGP keys for every developer and CI/CD system to decrypt secrets is a complex and fragile operational burden. Key rotation is a nightmare, and onboarding new developers is slow.",
        solution: "We find engineers who are experts in using SOPS with cloud-based KMS providers like AWS KMS or GCP KMS. This eliminates the need for individual PGP keys and simplifies key management, using cloud IAM to control access.",
        kpi: "Simplified key management with cloud KMS"
      },
      {
        icon: AlertTriangle,
        pain: "How do you give your CI/CD pipeline access to secrets without exposing keys?",
        problem: "Storing decryption keys as environment variables in your CI/CD system is a major security vulnerability.",
        solution: "We vet for engineers who can configure a secure CI/CD workflow where the pipeline is granted a temporary IAM role that allows it to use KMS to decrypt the SOPS file, without ever handling a raw key.",
        kpi: "Secure, keyless CI/CD decryption workflows"
      },
      {
        icon: AlertTriangle,
        pain: "Are you struggling to manage secrets across multiple environments?",
        problem: "Managing different secret files for dev, staging, and prod is error-prone and can easily lead to a secret from a lower environment being accidentally promoted to production.",
        solution: "Our experts can implement advanced SOPS patterns, such as using different KMS keys per environment or leveraging SOPS's YAML features to manage all environments in a single, encrypted file, reducing risk and simplifying management.",
        kpi: "Robust, multi-environment secret management"
      }
    ],
    evaluation: ['Integration with KMS providers (AWS, GCP)', 'Key management and rotation strategies', 'Git integration and pre-commit hooks', 'CI/CD decryption workflows', 'User access control with GPG or age'],
    technical_analysis: "A senior SOPS expert is evaluated on their ability to design and implement a secure, end-to-end GitOps secrets workflow. Our technical analysis requires candidates to create a `.sops.yaml` configuration from scratch that uses a combination of KMS keys and PGP keys for different user groups, demonstrating an understanding of key groups and encryption rules. We test their ability to integrate SOPS into a developer's local workflow, for example by setting up git hooks to automatically encrypt/decrypt files on commit/checkout. A key scenario involves designing a CI/CD pipeline in GitHub Actions that can decrypt a SOPS file without any long-lived credentials, requiring them to demonstrate knowledge of using OIDC to assume a cloud IAM role with KMS permissions. We also assess their scripting skills by asking them to write a small helper script that uses the SOPS binary to inject secrets into an application's environment at runtime. This ensures we hire engineers who can not only use SOPS but can also build the automation around it to make it a seamless part of the development lifecycle.",
    interlink_slugs: ['terraform', 'kubernetes', 'vault']
  },
  'codeql': { 
    name: 'CodeQL/Snyk', 
    category: 'Security & GRC', 
    categorySlug: 'security-grc', 
    seo_title: 'Hire AppSec Experts | CodeQL & Snyk Security Talent',
    meta_description: 'Shift security left. Hire senior remote AppSec engineers to integrate CodeQL, Snyk, and SAST/DAST into your CI/CD pipeline. Contact us.',
    intro: "You're finding critical security vulnerabilities in production, where they are 100x more expensive to fix. You need to 'shift left.' You're here to find an Application Security (AppSec) engineer who is an expert in integrating static and dynamic analysis tools (SAST/DAST) like CodeQL, SonarQube, or Snyk directly into your development lifecycle. Our vetting process identifies engineers who don't just run scanners, but who can tune them to reduce false positives, write custom rules to find business-specific vulnerabilities, and work with developers to fix the root cause. By hiring an AppSec expert, you transform security from a final-stage gatekeeper into a continuous, automated part of your development process, dramatically reducing your risk and enabling your team to ship faster and more securely.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Are you finding security bugs in production?",
            problem: "Finding vulnerabilities late in the cycle is 100x more expensive to fix and puts your business, reputation, and customers at significant risk.",
            solution: "We find AppSec engineers who can integrate Static Application Security Testing (SAST) tools like CodeQL or SonarQube directly into your CI/CD pipeline, catching bugs before they are even merged to the main branch.",
            kpi: "Shift security left into the CI/CD pipeline"
        },
        {
            icon: AlertTriangle,
            pain: "Are you vulnerable to exploits in your open-source dependencies?",
            problem: "Your application is only as secure as its weakest dependency. A single vulnerable open-source package can compromise your entire system.",
            solution: "Our engineers are experts in Software Composition Analysis (SCA) tools like Snyk or Trivy, which automatically scan your dependencies for known vulnerabilities and even suggest automated fixes, securing your supply chain.",
            kpi: "Automated dependency vulnerability scanning"
        },
        {
            icon: AlertTriangle,
            pain: "Are your security scans generating too much noise and false positives?",
            problem: "A noisy scanner that generates hundreds of unactionable false positives will be ignored by developers, rendering the tool useless and creating a culture of alert fatigue.",
            solution: "We vet for engineers who have experience tuning and customizing security tools to reduce false positives and create high-signal, actionable security alerts that developers will actually fix. This includes writing custom CodeQL queries or Snyk rules.",
            kpi: "Experience in false positive triage and tuning"
        }
    ], 
    evaluation: ['SAST/DAST/SCA integration into CI/CD pipelines', 'False positive triage and tuning', 'Custom rule creation for specific vulnerabilities', 'Dependency scanning and license compliance', 'Reporting and metrics for security posture'],
    technical_analysis: "The technical evaluation for an AppSec engineer focuses on their ability to build and operate a practical, effective security program. We assess their deep knowledge of at least one major SAST tool, requiring them to write a custom CodeQL query to find a specific, non-trivial vulnerability class (e.g., a specific type of injection flaw) in a sample application. For SCA, they must demonstrate how to configure a tool like Snyk to not only fail the build on critical vulnerabilities but also how to manage a process for ignoring acceptable risks and planning upgrades for others. We also test their understanding of Dynamic Application Security Testing (DAST) by asking them to configure a tool like OWASP ZAP to run authenticated scans against a live application within a CI pipeline. A key part of the evaluation is their ability to work with developers; we present them with a security finding and ask them to explain how they would report it, including how to provide clear remediation guidance and how to balance security risk with product deadlines. This ensures we hire engineers who are security experts, but also pragmatic partners to the development team.",
    interlink_slugs: ['github-actions', 'security-grc', 'trivy']
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

export function getAllTechSlugs(): string[] {
    return Object.keys(allTech);
}
