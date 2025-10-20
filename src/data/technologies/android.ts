import { AlertTriangle } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const android: TechEntry = {
  name: "Android",
  category: "Mobile & Cross-Platform",
  categorySlug: "mobile-cross-platform",
  seo_title: "Hire Senior Android Developers | Kotlin and Java Experts",
  meta_description:
    "Hire elite Android developers specializing in building high-performance, scalable, and secure Android applications.",
  intro:
    "Android is the world's most popular mobile operating system. Our Android experts are vetted for their deep understanding of Android's core principles, from its activity lifecycle to its security features. They are the specialists who can help you build the next generation of Android applications.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "Our Android app is slow and buggy.",
      problem:
        "Poorly written code, a lack of testing, and a failure to follow best practices can lead to a slow and buggy app.",
      solution:
        "We vet for mastery in **Android best practices**. Our engineers write clean, modular, and well-tested code that is easy to understand, maintain, and reuse.",
      kpi: "90% Reduction in Crash Rate",
    },
    {
      icon: AlertTriangle,
      pain: "We're struggling to keep up with the latest Android technologies.",
      problem:
        "The Android platform is constantly evolving. It's difficult to keep up with the latest technologies, such as Jetpack Compose and Kotlin Coroutines.",
      solution:
        "Our experts are tested on **the latest Android technologies**. They can help you take advantage of the latest features, so you can build the next generation of Android applications.",
      kpi: "90% Reduction in Time to Market",
    },
    {
      icon: AlertTriangle,
      pain: "We're worried about the security of our Android app.",
      problem:
        "Android security is a top priority for every business. It's difficult to secure an Android app, especially when you're dealing with user data and network requests.",
      solution:
        "We vet for expertise in **Android's security features**. Our engineers use the latest security best practices to protect your app from attack.",
      kpi: "100% App Security",
    },
  ],
  evaluation: [
    "Deep understanding of Android's core principles.",
    "Mastery of Android best practices.",
    "Proficiency in building scalable, production-ready Android applications.",
    "Experience with a variety of Android libraries and frameworks.",
    "Expertise in Android's security features.",
  ],
  technical_analysis:
    "The Android vetting process is rigorous and hands-on. Candidates are required to build a production-ready Android application from scratch. We test their ability to write clean, modular, and maintainable code, as well as their understanding of Android best practices. We also assess their experience with a variety of Android libraries and frameworks and their ability to optimize for performance and security.",
  interlink_slugs: ["kotlin", "java", "react-native", "flutter", "swift"],
  is_ready: true,
};

export default android;
