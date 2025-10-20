import { AlertTriangle } from "lucide-react";
import { TechEntry } from "./tech";
import { TechCategory } from "./tech-categories";

export const allTech: Record<string, TechEntry> = {
  // ----------------------------------------------------------------------
  // 1. FRONTEND/FULL-STACK (10)
  // ----------------------------------------------------------------------
  react: {
    name: "React/TypeScript",
    category: "Frontend & UI/UX",
    categorySlug: "frontend-web",
    seo_title: "Hire React/TypeScript Developers | Senior Frontend Talent",
    meta_description:
      "Build performant, scalable UIs. Hire elite remote React & TypeScript talent vetted for architectural skill, not just syntax. Schedule a call today.",
    intro:
      "You're not here because you need another developer who 'knows React.' You're here because your application feels sluggish, your state management is a tangled mess, and your component library is a collection of one-off hacks. You need a true React expert who obsesses over performance, architecture, and user experience as much as you do. Our vetting process, powered by the Axiom Cortex™ engine, is designed to find these individuals. We move beyond simple coding challenges to assess a candidate's deep understanding of the React render cycle, their ability to design and implement scalable state management solutions, and their discipline in creating reusable, accessible component APIs. We identify engineers who don't just use React but understand its core principles, enabling them to build applications that are not only fast and responsive but also a joy to maintain and extend. This isn't about filling a seat; it's about investing in a level of quality and craftsmanship that directly translates to a superior end-user experience and a more resilient codebase. By focusing on these core competencies, we ensure that the engineers we provide become force multipliers for your team, setting new standards for quality and driving your product forward with a velocity that a less experienced developer simply cannot match.",
    pains: [
      {
        icon: AlertTriangle,
        pain: "Is your app slow because of endless re-renders?",
        problem:
          "Many so-called 'senior' React developers have a superficial understanding of the render cycle. They build components that re-render unnecessarily on every state change, leading to a slow, janky user interface that feels unresponsive, especially on lower-powered devices. This directly impacts user satisfaction, increases bounce rates, and can harm your Core Web Vitals scores, affecting your SEO. The root cause is a failure to properly memoize components, overuse of context, and an inability to profile and diagnose performance bottlenecks using the React Profiler. This isn't just a technical issue; it's a product quality issue that costs you users and revenue.",
        solution:
          "Our engineers are rigorously vetted for their deep understanding of React performance. They are required to demonstrate mastery of performance optimization techniques, including the correct use of `React.memo`, `useMemo`, and `useCallback`. They can use the React Profiler to identify and eliminate performance bottlenecks, and they understand advanced patterns like virtualization and windowing for rendering large lists efficiently. We don't just ask them trivia; we give them a broken, slow application and measure their ability to diagnose and fix it, providing you with evidence of their practical performance engineering skills.",
        kpi: "Expertise in React Profiler & why-did-you-render",
      },
      {
        icon: AlertTriangle,
        pain: "Is your state management a spaghetti of props and contexts?",
        problem:
          "A common anti-pattern in large React applications is a chaotic mix of prop-drilling, oversized context providers, and legacy Redux patterns that are ill-suited for modern server-side data. This creates a 'spaghetti state' that is bug-prone, difficult to debug, and makes adding new features a slow and dangerous process. It’s a direct result of hiring developers who lack a strategic understanding of state management architecture.",
        solution:
          "We specifically select for engineers who can architect clean, scalable state management solutions. They understand the critical difference between client state (e.g., UI toggles, form inputs) and server cache (e.g., data fetched from an API). Our vetting process ensures they are experts in modern libraries like Zustand for minimal client state and TanStack Query (React Query) for managing server cache, asynchronous state, and data fetching with grace and efficiency. This leads to a more resilient, maintainable, and performant application.",
        kpi: "Proven ability to architect scalable state",
      },
      {
        icon: AlertTriangle,
        pain: "Is your component library just a folder of inconsistent parts?",
        problem:
          "Without a disciplined approach, a component library quickly devolves into a collection of inconsistent, one-off components. It lacks a coherent API, has poor accessibility, and is difficult to use, forcing developers to reinvent the wheel for every new feature. This negates the very purpose of a design system, slowing down development and leading to an inconsistent user experience.",
        solution:
          "We hire for engineers who treat component development as API design. They are vetted on their ability to create reusable, composable, and accessible components. We assess their experience with tools like Storybook for documenting and testing components in isolation, and their knowledge of headless UI libraries (like Radix UI) and CSS-in-JS or utility-first CSS (like Tailwind) to build a flexible and robust design system. You get an engineer who builds a force multiplier for your team, not just a UI that 'looks right.'",
        kpi: "Focus on reusable & accessible components",
      },
    ],
    evaluation: [
      "Advanced hooks and render optimization",
      "Modern state management (Zustand, React Query)",
      "Component API design and accessibility (ARIA)",
      "Performance profiling and debugging",
      "TypeScript for robust component props and state",
    ],
    technical_analysis:
      "Our technical analysis for React/TypeScript mastery at TeamStation AI is designed to filter for deep, architectural understanding over superficial knowledge. Candidates are assessed on their ability to structure a large-scale React application for maintainability and performance. A key area of focus is their approach to state management; we present scenarios that require them to differentiate between local, global client, and server cache state, expecting them to articulate the trade-offs between tools like Zustand, Jotai, and TanStack Query. We don't just want to see if they can use a library; we want to see if they understand the 'why' behind their choices. Performance is another critical pillar. Candidates are given a deliberately inefficient application and are expected to use the React Profiler to identify and explain the causes of performance bottlenecks, such as unnecessary re-renders. Their solution must not only fix the issue but also demonstrate a grasp of core optimization principles like memoization and virtualization. On the TypeScript front, we move beyond basic type annotations. Our scenarios require candidates to create complex generic types, use conditional and mapped types to build flexible and reusable type utilities, and correctly type higher-order components or complex hooks. This ensures they can use TypeScript as a tool for building truly robust and self-documenting systems, rather than just adding `:string` to variables. Finally, we evaluate their understanding of the broader ecosystem, including testing strategies with React Testing Library and Playwright, and their ability to configure modern build tools like Vite or Next.js for optimal performance and developer experience.",
    interlink_slugs: ["typescript", "nextjs", "node"],
    is_ready: true,
  },
  typescript: {
    name: "TypeScript",
    category: "Frontend & UI/UX",
    categorySlug: "frontend-web",
    seo_title: "Hire TypeScript Developers | Senior Frontend Talent",
    meta_description:
      "Eliminate runtime errors. Hire senior remote TypeScript talent vetted for creating robust, maintainable, and type-safe codebases. Book a call.",
    intro:
      "You're tired of `any` types and runtime errors that should have been caught at compile time. You need more than just a JavaScript developer; you need a TypeScript expert who can leverage the full power of the type system to build safer, more maintainable, and self-documenting code. This is not about adding `:string` to a variable; it's about architecting a type-safe system from the ground up. Our vetting process is designed to find these engineers. We present them with complex scenarios that require the use of advanced TypeScript features to solve real-world problems. We're looking for the ability to create robust data models, secure API contracts, and build a codebase where the type system itself prevents entire classes of bugs. By hiring a true TypeScript expert, you are making an investment in the long-term health and stability of your application. You are reducing the time your team spends on debugging runtime errors and increasing the time they spend on building features. This is a direct lever on engineering velocity and product quality, and it's a non-negotiable skill for any modern, high-performing team.",
    pains: [
      {
        icon: AlertTriangle,
        pain: "Is your codebase littered with `any` types?",
        problem:
          "The `any` type is a viral infection in a TypeScript codebase. It silences the compiler and negates the primary benefit of using TypeScript in the first place. It creates a false sense of security, allowing type-related errors to slip through to runtime, where they are 100x more expensive to fix. It makes refactoring a dangerous guessing game and erodes the maintainability of the application.",
        solution:
          "We vet for engineers who have a disciplined and deep understanding of the TypeScript type system. They are required to demonstrate their ability to write precise and effective types using advanced features like generics, conditional types, mapped types, and template literal types. They know how to model complex data structures and create type-safe APIs, ensuring that your codebase is robust and that the compiler can be a powerful ally in preventing bugs.",
        kpi: "Mastery of advanced TypeScript patterns",
      },
      {
        icon: AlertTriangle,
        pain: "Are you struggling to type complex third-party libraries?",
        problem:
          "Your application's type safety is only as strong as its weakest link. Integrating with untyped or poorly typed third-party JavaScript libraries introduces holes in your type system, leading to unexpected runtime errors and making it difficult to use these libraries with confidence.",
        solution:
          "Our engineers are skilled at bridging the gap between the typed and untyped worlds. We assess their ability to write custom declaration files (`.d.ts`) from scratch and use advanced techniques like declaration merging and module augmentation to provide strong, accurate types for even the most complex JavaScript libraries. This ensures that you can leverage the power of the open-source ecosystem without sacrificing type safety.",
        kpi: "Expertise in custom type declarations",
      },
      {
        icon: AlertTriangle,
        pain: "Is your build process slow due to TypeScript compilation?",
        problem:
          "A poorly configured `tsconfig.json` or an inefficient build setup can make TypeScript feel like a bottleneck rather than a productivity tool. Slow feedback loops during development frustrate engineers and reduce velocity. Long CI build times delay deployments and slow down the entire team.",
        solution:
          "We look for engineers who understand how to optimize the TypeScript compiler and the surrounding build process. They have experience with `tsconfig.json` settings like `noEmit` and `isolatedModules`, and they know how to structure a large project using TypeScript's project references for faster incremental builds. They are also proficient with modern, high-performance build tools like Vite, esbuild, or SWC that can dramatically speed up the development feedback loop.",
        kpi: "Proficiency in optimizing the TS build process",
      },
    ],
    evaluation: [
      "Advanced types (generics, conditional types)",
      "Compiler configuration (tsconfig.json)",
      "Declaration files and module augmentation",
      "Type inference and narrowing",
      "Integration with modern build tools",
    ],
    technical_analysis:
      "Our technical analysis for TypeScript proficiency goes far beyond basic syntax. We focus on a candidate's ability to use the type system as an architectural tool. Scenarios presented during the evaluation require candidates to model complex, real-world data structures and API contracts, often involving polymorphism and nested generics. We explicitly test for the ability to create reusable, higher-order type utilities that can transform and manipulate other types—a key indicator of a senior-level understanding. Another critical area is the interaction with the JavaScript ecosystem. We present candidates with a complex, untyped JavaScript library and evaluate their process for creating a robust `.d.ts` declaration file, assessing their understanding of module systems, declaration merging, and how to accurately represent dynamic JavaScript behavior in a static type system. We also test their understanding of the TypeScript compiler's behavior, particularly around type inference, control flow analysis, and type narrowing. A candidate is expected to explain not just *what* the compiler infers, but *why*, and how to write code that maximizes the compiler's ability to catch errors. Finally, we assess their practical knowledge of integrating TypeScript into a modern development workflow. This includes configuring `tsconfig.json` for different environments (e.g., Node.js backend vs. browser frontend), setting up strict ESLint rules for type-aware linting, and understanding how to leverage TypeScript with modern build tools for a fast and efficient developer experience.",
    interlink_slugs: ["react", "node", "nextjs"],
    is_ready: true,
  },
  // ... continue for all other technologies in the file
};

export function getAllTechSlugs(): string[] {
  return Object.keys(allTech);
}
export const techCategories: TechCategory[] = [
  // ... categories remain unchanged
];
