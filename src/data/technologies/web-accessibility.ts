import { AlertTriangle } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const webAccessibility: TechEntry = {
  name: "Web Accessibility (a11y)",
  category: "Frontend & UI/UX",
  categorySlug: "frontend-web",
  seo_title: "Hire Web Accessibility Experts | a11y & WCAG Compliance",
  meta_description:
    "Build inclusive, WCAG-compliant web applications. Hire elite remote web accessibility experts vetted for their deep understanding of ARIA, semantic HTML, and assistive technologies. Book a call.",
  intro:
    "Web accessibility (a11y) is the practice of ensuring that your websites and applications are usable by everyone, regardless of their abilities or disabilities. You need an engineer who understands that accessibility is not just a checklist, but a fundamental part of the user experience. Our vetting process identifies developers who are experts in the WAI-ARIA specification, semantic HTML, and assistive technologies. By hiring a web accessibility expert, you get a developer who can build a modern web application that is inclusive, compliant, and a joy to use for everyone.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "Is your application inaccessible to users with disabilities?",
      problem:
        "Many applications are built without considering the needs of users with disabilities. This can lead to a user experience that is frustrating, or even impossible, for a large segment of the population. This not only alienates users, but also exposes your business to legal risk.",
      solution:
        "We vet for experts in **WCAG and ARIA**. Our engineers are proficient in building applications that are compliant with the latest Web Content Accessibility Guidelines (WCAG) and that use the WAI-ARIA specification to provide a rich, interactive experience for users of assistive technologies.",
      kpi: "WCAG 2.1 AA Compliance and a Rich, Interactive Experience for All",
    },
    {
      icon: AlertTriangle,
      pain: "Is your codebase a mess of non-semantic HTML and ARIA hacks?",
      problem:
        "In many applications, accessibility is an afterthought. This can lead to a codebase that is a mess of non-semantic HTML and ARIA hacks. This not only makes the code hard to maintain, but also makes it difficult to build a truly accessible user experience.",
      solution:
        "Our engineers are masters of **semantic HTML and modern CSS**. They are vetted on their ability to build applications that use the right HTML element for the right job, and that use modern CSS to create a beautiful, responsive, and accessible user experience. This results in a codebase that is easy to maintain and a user experience that is a joy to use for everyone.",
      kpi: "A Clean, Maintainable, and Accessible Codebase",
    },
    {
      icon: AlertTriangle,
      pain: "Is your team not equipped to build accessible applications?",
      problem:
        "Many teams are not equipped to build accessible applications. This can lead to a user experience that is frustrating for users with disabilities and a codebase that is hard to maintain and test.",
      solution:
        "We look for engineers proficient with **accessibility testing and automation**. They are vetted on their ability to use tools like Axe and Lighthouse to test for accessibility issues, and to set up automated testing to catch regressions before they make it to production. This results in a team that is equipped to build accessible applications, and a user experience that is a joy to use for everyone.",
      kpi: "A Team That is Equipped to Build Accessible Applications",
    },
  ],
  evaluation: [
    "WCAG 2.1 AA compliance",
    "WAI-ARIA specification",
    "Semantic HTML and modern CSS",
    "Accessibility testing and automation",
    "Assistive technologies and screen readers",
  ],
  technical_analysis:
    "The web accessibility evaluation focuses on a candidate's ability to build inclusive, compliant, and maintainable web applications. We assess their understanding of the WCAG 2.1 AA guidelines, requiring them to design a complex application that is accessible to all users, regardless of their abilities or disabilities. A critical part of the evaluation is their mastery of **semantic HTML and the WAI-ARIA specification**; candidates must demonstrate how to use the right HTML element for the right job, and how to use ARIA to provide a rich, interactive experience for users of assistive technologies. We also test their ability to use **accessibility testing tools** like Axe and Lighthouse to identify and fix accessibility issues. Finally, we assess their knowledge of assistive technologies, including screen readers, and their ability to build a modern web application that is a joy to use for everyone.",
  interlink_slugs: ["react", "typescript", "nextjs"],
};

export default webAccessibility;
