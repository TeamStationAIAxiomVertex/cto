
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
    evaluation: ['Composition API and composables', 'State management (Pinia/Vuex)', 'Nuxt SSR/ISR and routing', 'Performance profiling and code-splitting', 'Advanced component slots and dependency injection'],
    technical_analysis: "The technical analysis for a senior Vue.js expert focuses heavily on the modern Composition API paradigm and framework architecture. We present complex state flow scenarios and require candidates to use the Composition API to create efficient, reusable **composables** that manage both reactive state (`ref`, `reactive`) and derived state (`computed`). A critical assessment area is **Nuxt.js** mastery, where candidates must demonstrate their ability to strategically choose between universal, server-only, and client-only rendering modes to optimize performance and SEO. We probe their knowledge of Nuxt's data fetching hooks (e.g., `useAsyncData`) and how they ensure data is available before initial render. For state management, we test their ability to design a scalable solution using **Pinia**, focusing on modularity, store composition, and actions for asynchronous logic. Finally, we assess their performance optimization skills, requiring them to analyze and fix issues related to unnecessary re-renders (often caused by incorrect reactivity usage) and their ability to lazy-load components and routes to improve the initial load experience. This ensures the hired engineer can build large-scale applications with Vue's signature blend of power and approachability.",
    interlink_slugs: ['typescript', 'vite', 'node']
  },
  'grpc': {
    name: 'gRPC',
    category: 'Backend & Data',
    categorySlug: 'backend-services',
    seo_title: 'Hire gRPC Experts | Senior Microservices Protocol Talent',
    meta_description: 'Build fast microservices. Hire pre-vetted senior gRPC experts for high-performance communication, Protocol Buffers, and stream architecture.',
    intro: "Your microservices architecture is suffering from the overhead of REST/JSON: slow serialization, bloated payloads, and inflexible API definitions. You need a gRPC expert who can transition your inter-service communication to a high-performance, binary protocol. Our vetting process targets senior backend engineers who are masters of **Protocol Buffers (Protobuf)**, bi-directional streaming, and the gRPC service definition language. We look for the ability to design APIs that are inherently faster, safer (via strong typing), and dramatically reduce network latency compared to traditional REST. Hiring a gRPC expert from us means you can scale your microservices without sacrificing speed, enforce a strict contract-first development approach, and unlock high-throughput use cases like real-time data feeds and high-frequency transactions that are simply infeasible with legacy HTTP/1.1 and JSON.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is REST/JSON overhead slowing down your microservices?",
            problem: "HTTP/1.1 and verbose JSON payloads cause severe latency issues between internal services. Slow text-based serialization and large request/response bodies create bottlenecks, especially in high-traffic or resource-constrained environments, leading to unpredictable system performance.",
            solution: "Our experts implement **gRPC with Protocol Buffers**. This uses efficient binary serialization and the HTTP/2 protocol, dramatically reducing message size and overhead. This results in faster parsing, lower latency, and significantly higher throughput for internal service-to-service communication.",
            kpi: "Reduce inter-service communication latency by 50%+"
        },
        {
            icon: AlertTriangle,
            pain: "Do you struggle with API contract consistency and schema drift?",
            problem: "REST APIs often lack a single source of truth for the contract (relying on informal documentation or Swagger). This leads to client/server incompatibility, schema drift, and difficult debugging when services are independently deployed.",
            solution: "We vet for mastery of **Protocol Buffers (Protobuf)**. Our engineers enforce a **contract-first development** approach where the service definition is the single source of truth. This strict schema definition prevents type errors, ensures version compatibility, and generates code stubs automatically for multiple languages.",
            kpi: "Eliminate 99% of API contract-related integration bugs"
        },
        {
            icon: AlertTriangle,
            pain: "Are you unable to support efficient real-time data streaming?",
            problem: "Building a complex real-time feed (like a live activity stream or a continuous status update) is difficult with traditional REST, often requiring inefficient polling. Existing solutions often involve complex, one-off WebSocket implementations that lack robust error handling.",
            solution: "Our experts utilize **gRPC streaming (Server, Client, and Bidirectional)**. They design robust, high-performance streaming APIs for scenarios like real-time notifications or chat applications, leveraging gRPC's built-in flow control and standard error mechanisms to simplify complex real-time needs.",
            kpi: "Enable scalable, real-time data feeds without inefficient polling"
        }
    ],
    evaluation: ['Protocol Buffers (Protobuf) schema design and optimization', 'gRPC service types (Unary, Streaming)', 'HTTP/2 and connection pooling implementation', 'Cross-language service integration (Go, Node.js, Python)', 'Error handling and status codes in gRPC'],
    technical_analysis: "The gRPC expert evaluation centers on deep protocol knowledge and contract design. Candidates must demonstrate proficiency in **Protobuf schema design**, specifically understanding field numbering, message nesting, and using `oneof` and `map` types effectively. We test their ability to architect all four gRPC service methods (Unary, Server Stream, Client Stream, Bidirectional Stream), requiring them to justify the choice based on use case (e.g., why bidirectional streaming is ideal for load balancing). A key area of focus is **cross-language interoperability**: the candidate must explain how to use the generated code stubs to seamlessly integrate services built in polyglot environments (e.g., a Go backend and a Node.js client). Finally, we assess operational concerns, including implementing **gRPC health checks** and configuring client-side **load balancing/retry logic** to ensure the high availability and resilience of the microservices layer.",
    interlink_slugs: ['node', 'go', 'kubernetes']
  },
  'socketio': {
    name: 'Socket.IO',
    category: 'Mobile & Cross-Platform',
    categorySlug: 'mobile-cross-platform',
    seo_title: 'Hire Socket.IO Experts | Senior Real-Time Web Talent',
    meta_description: 'Build fast, persistent web sockets. Hire senior Socket.IO experts for scalable real-time chat, dashboards, and connection resilience. Schedule a call.',
    intro: "Your users demand real-time interactivity—live chat, dynamic dashboards, and instant notifications—but you can't rely on inefficient polling or complex, error-prone raw WebSocket implementations. You need a **Socket.IO** expert who can build a highly scalable, resilient real-time layer that just works. Our vetting process targets engineers who are masters of connection management, horizontal scaling with Redis adapters, and ensuring robust fallback mechanisms for every user, regardless of their network. We look for expertise that goes beyond simple tutorials: understanding how to use rooms for efficient broadcasting, implementing custom authentication middleware, and maintaining persistence across distributed servers. Hiring a Socket.IO expert from us means you gain the ability to deliver complex, high-volume real-time features that are automatically resilient, secure, and scalable to millions of concurrent users.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your chat/real-time feature constantly disconnecting or failing?",
            problem: "Raw WebSocket connections are brittle and can be blocked by proxies, firewalls, or flakey mobile networks. When the connection drops, users lose context, leading to frustrating, unreliable, and high-churn user experiences.",
            solution: "Our engineers master **Socket.IO's transport mechanism**. They leverage its built-in reliability, ensuring automatic re-connection, heartbeat pings, and intelligent fallback to HTTP polling when WebSockets are unavailable, providing a stable, resilient connection layer for all users.",
            kpi: "Reduce real-time feature connection failure rates by 99%"
        },
        {
            icon: AlertTriangle,
            pain: "Is your application unable to broadcast efficiently to targeted users?",
            problem: "Sending a notification or data update to a specific subset of users (e.g., all users on a certain team or viewing a specific document) without an efficient mechanism results in either broadcasting to everyone (wasting bandwidth) or slow, manual message routing.",
            solution: "We vet for expertise in **Socket.IO Rooms**. Our experts design a clean architecture where connections are automatically placed into logical 'rooms' (e.g., `document-123`, `team-marketing`), allowing for highly efficient, targeted broadcasting to the exact set of users who need the update.",
            kpi: "Increase message efficiency by 90% via targeted room broadcasting"
        },
        {
            icon: AlertTriangle,
            pain: "Are you struggling to scale real-time features across multiple servers?",
            problem: "When scaling your Socket.IO server horizontally behind a load balancer, messages sent from one server will not reach users connected to a different server. This breaks core functionality like chat or group updates in a distributed environment.",
            solution: "Our experts implement and configure **Socket.IO Adapters (e.g., Redis)**. They ensure that all servers share connection state and can broadcast events across the entire cluster, making your real-time layer infinitely scalable and resilient to individual server failure.",
            kpi: "Achieve seamless horizontal scaling of the real-time server cluster"
        }
    ],
    evaluation: ['Horizontal scaling with Redis/Postgres Adapters', 'Connection management and transport fallbacks', 'Designing with Rooms and Namespaces for efficiency', 'Custom middleware for authentication and authorization', 'Implementing reliable, sequenced message delivery'],
    technical_analysis: "The Socket.IO expert evaluation focuses on distributed system resilience and efficiency. A core competency is the implementation of **horizontal scaling via Adapters**; candidates must articulate the role of the Redis Adapter in state sharing and how to prevent split-brain scenarios in a distributed cluster. We rigorously test their understanding of **Namespaces** and **Rooms**—asking them to architect a real-time system that minimizes data transfer by efficiently routing events. A critical security aspect is the use of **custom middleware**: candidates must demonstrate how to integrate the Socket.IO connection handshake with an existing authentication mechanism (e.g., JWT validation) to prevent unauthorized connections and ensure secure context resolution. Finally, we assess their knowledge of connection resilience, requiring them to explain the sequence of transports (WebSocket, Polling) and the role of the `ping` and `pong` heartbeats in maintaining session liveness.",
    interlink_slugs: ['node', 'redis', 'kubernetes']
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

    