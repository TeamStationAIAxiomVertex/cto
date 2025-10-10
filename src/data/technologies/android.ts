import { AlertTriangle } from 'lucide-react';
import { TechEntry } from "@/lib/tech";

const android: TechEntry = {
    name: "Android",
    category: "Mobile",
    categorySlug: "mobile-development",
    seo_title: "Hire Android Developers | Elite Kotlin & Java Talent",
    meta_description: "Build world-class Android apps. Hire senior Android developers vetted for Kotlin, Jetpack Compose, and modern architecture expertise. Schedule a discovery call.",
    intro: "You're building a native Android app, and you need a developer who can navigate the complexities of the Android SDK, deliver a modern user experience with Jetpack Compose, and write clean, performant Kotlin code. You need an expert who understands the nuances of the Android lifecycle, can optimize for battery life and performance across a wide range of devices, and can build a robust, scalable architecture that will stand the test of time. Our vetting process is designed to find these experts. We don't just look for developers who can follow a tutorial; we look for engineers who have a deep understanding of the Android platform and a passion for building high-quality mobile experiences. By hiring an Android developer from us, you're not just getting a coder; you're getting a partner who will help you build an app that delights your users and achieves your business goals.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your app's UI inconsistent and hard to maintain?",
            problem: "Traditional Android UI development with XML layouts is verbose, error-prone, and leads to a disconnect between the UI's appearance and the logic that controls it. This makes it difficult to build a consistent and maintainable UI, especially in a large and complex application.",
            solution: "We find engineers who are experts in Jetpack Compose, the modern, declarative UI toolkit for Android. They can build beautiful, responsive, and maintainable UIs with less code and a more intuitive development experience. They understand how to use Compose's powerful features to create a design system that ensures a consistent look and feel across your entire app.",
            kpi: "Expertise in Jetpack Compose for modern UI development"
        },
        {
            icon: AlertTriangle,
            pain: "Is your app's architecture a tangled mess?",
            problem: "Without a clear architectural pattern, Android apps can quickly become a monolithic nightmare of tightly coupled components. This makes the codebase hard to understand, test, and maintain, and it can lead to a host of bugs and performance issues.",
            solution: "Our engineers are experts in modern Android architecture. We vet for a deep understanding of patterns like MVVM (Model-View-ViewModel) and MVI (Model-View-Intent), and they know how to use libraries like ViewModel, LiveData, and Kotlin Flows to build a clean, modular, and testable architecture. They can design an architecture that scales with your app and makes it easy to add new features without breaking existing ones.",
            kpi: "Proficiency in modern Android architecture (MVVM, MVI)"
        },
        {
            icon: AlertTriangle,
            pain: "Is your app slow, janky, and prone to crashing?",
            problem: "Android's resource-constrained environment and fragmented ecosystem make it a challenge to build a performant and reliable app. Many developers lack the skills to diagnose and fix performance bottlenecks, memory leaks, and other common issues that lead to a poor user experience.",
            solution: "We find engineers who have a deep understanding of Android performance optimization. They are skilled in using tools like Profiler and LeakCanary to identify and fix performance issues. They know how to write efficient code that minimizes battery drain and runs smoothly on a wide range of devices. They can build a rock-solid app that your users can rely on.",
            kpi: "Demonstrated ability to optimize Android app performance"
        }
    ],
    evaluation: [
        "Deep understanding of Kotlin and its idioms",
        "Mastery of Jetpack Compose for declarative UI",
        "Proficiency in modern Android architecture (MVVM, MVI)",
        "Experience with asynchronous programming (Kotlin Coroutines, Flows)",
        "Knowledge of Android performance optimization and debugging tools"
    ],
    technical_analysis: "Evaluating a senior Android engineer at TeamStation AI involves a rigorous assessment of their ability to build modern, high-performance applications. Candidates are required to demonstrate a deep understanding of Kotlin, including advanced features like coroutines, flows, and generics. We test their mastery of Jetpack Compose by asking them to build complex, stateful UIs and create a custom design system. A critical part of our evaluation is assessing their architectural expertise. We present them with a real-world problem and ask them to design a scalable and maintainable architecture using either MVVM or MVI. We also test their ability to write efficient data layers using libraries like Room and Retrofit. Performance is a key focus, so we evaluate their skills in diagnosing and fixing memory leaks, performance bottlenecks, and other common Android issues using tools like Profiler and LeakCanary. Finally, we assess their knowledge of the Android ecosystem, including the latest Jetpack libraries, Gradle build scripts, and the Google Play Store submission process.",
    interlink_slugs: ["kotlin", "java", "jetpack-compose"]
};

export default android;