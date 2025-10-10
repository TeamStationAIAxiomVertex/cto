yes please we have over 90 pages to 
import { AlertTriangle } from "lucide-react";
import { TechEntry } from "@/lib/tech";

const rxjs: TechEntry = {
  name: "RxJS",
  category: "Frontend & UI/UX",
  categorySlug: "frontend-web",
  seo_title: "Hire RxJS Developers | Reactive Programming Experts",
  meta_description:
    "Build responsive, resilient, and declarative applications. Hire elite remote RxJS experts vetted for their deep understanding of observables, operators, and reactive programming. Book a call.",
  intro:
    "RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code. You need an engineer who understands that modern applications are not just about data, but about streams of data. Our vetting process identifies developers who are experts in RxJS's core concepts—Observables, Operators, and Schedulers—and can architect applications that are as resilient as they are responsive. By hiring an RxJS expert, you get a developer who can build a modern web application that is a joy to use, and a joy to debug.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "Is your application a mess of nested callbacks and promises?",
      problem:
        "In many applications, managing asynchronous operations is a complex and error-prone task. This leads to a user experience that is filled with race conditions and a codebase that is a mess of nested callbacks and promises.",
      solution:
        "We vet for experts in **RxJS's observable pattern**. Our engineers are proficient in using observables to manage asynchronous operations in a declarative and composable way. This results in a codebase that is easy to reason about and a user experience that is free of race conditions and other bugs.",
      kpi: "A Declarative, Composable, and Bug-Free Asynchronous Codebase",
    },
    {
      icon: AlertTriangle,
      pain: "Is your state management complex and hard to reason about?",
      problem:
        "In many applications, managing state is a complex task that requires a dedicated library and a lot of boilerplate code. This can lead to a codebase that is hard to reason about and a user experience that is prone to bugs.",
      solution:
        "Our engineers are masters of **RxJS's stream-based state management**. They are vetted on their ability to use RxJS to manage state in a simple, intuitive, and bug-free way. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
      kpi: "Simple, Intuitive, and Bug-Free State Management",
    },
    {
      icon: AlertTriangle,
      pain: "Is your application not resilient to network failures and user interruptions?",
      problem:
        "Client-rendered applications are often not resilient to network failures or user interruptions. If a data fetch fails, the user is often left with a broken UI. If the user navigates away before a mutation is complete, the data can be left in an inconsistent state.",
      solution:
        "We look for engineers proficient with **RxJS's error handling and retry strategies**. They are vetted on their ability to build applications that are resilient to network failures and user interruptions. This results in a user experience that is a joy to use for everyone, and a codebase that is easy to maintain and test.",
      kpi: "A Resilient User Experience and a Maintainable Codebase",
    },
  ],
  evaluation: [
    "Observables, Operators, and Schedulers",
    "Stream-based state management",
    "Error handling and retry strategies",
    "Integration with frameworks like Angular and React",
    "Performance optimization and memory management",
  ],
  technical_analysis:
    "The RxJS evaluation focuses on a candidate's ability to build responsive, resilient, and declarative applications. We assess their understanding of RxJS's core concepts, requiring them to design a complex application with a clean, stream-based architecture. A critical part of the evaluation is their mastery of **operators and higher-order observables**; candidates must demonstrate how to use operators to compose complex asynchronous operations and how to use higher-order observables to manage complex control flows. We also test their ability to build **resilient** applications that are resilient to network failures and user interruptions. Finally, we assess their knowledge of performance optimization and memory management, and their ability to leverage RxJS to build a modern, high-performance web application.",
  interlink_slugs: ["angular", "typescript", "react"],
};

export default rxjs;
