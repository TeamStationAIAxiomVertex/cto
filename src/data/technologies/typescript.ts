import { AlertTriangle } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const typescript: TechEntry = {
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
};

export default typescript;
