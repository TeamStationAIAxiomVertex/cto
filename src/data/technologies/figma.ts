import { TechEntry } from "@/lib/tech";

import { Unlink, Library, MessageSquare } from "lucide-react";

const figma: TechEntry = {
  name: "Figma",
  category: "Frontend",
  categorySlug: "frontend",
  seo_title: "Hire Figma Experts | TeamStation AI",
  meta_description:
    "Hire top Figma designers and developers to create stunning, high-fidelity mockups, design systems, and interactive prototypes. Get pre-vetted LATAM talent.",
  intro:
    "Figma is the collaborative interface design tool that’s taking the world by storm. Our expert designers use Figma to create everything from user flow diagrams and wireframes to high-fidelity mockups and interactive prototypes, all in one place.",
  pains: [
    {
      icon: Unlink,
      pain: "Design and development are disconnected, leading to a final product that doesn't match the mockups.",
      problem:
        "Developers are working with static images and outdated specs, leading to implementation errors, design inconsistencies, and endless back-and-forth.",
      solution:
        "We create a single source of truth in Figma, with auto-updating design systems and clear component specifications, bridging the gap between design and code.",
      kpi: "Reduce design-to-development discrepancies by 95%.",
    },
    {
      icon: Library,
      pain: "Your design system is a collection of static UI kits that are difficult to maintain and use.",
      problem:
        "Without a living design system, components become outdated, styles are inconsistent, and developers are constantly rebuilding what's already been designed.",
      solution:
        "We build robust, scalable design systems in Figma using components, variants, and auto layout, ensuring your design language is consistent and easy to scale.",
      kpi: "Speed up component design and development by 3x.",
    },
    {
      icon: MessageSquare,
      pain: "Design feedback is scattered across email, Slack, and InVision, causing confusion and rework.",
      problem:
        "Consolidating and tracking feedback from multiple stakeholders is a nightmare. It's unclear what's been approved, what's been addressed, and what's still pending.",
      solution:
        "We centralize all design feedback directly in Figma, using its built-in commenting and version history features to create a clear, actionable, and transparent review process.",
      kpi: "Cut down on feedback-related rework by 70%.",
    },
  ],
  evaluation: [
    "Deep expertise in Figma's features, including auto layout, components, variants, and prototyping.",
    "Proven ability to create and maintain large-scale, multi-brand design systems.",
    "Experience in running collaborative design sprints and workshops within Figma.",
    "Proficiency in using Figma plugins and integrations to streamline the design workflow.",
  ],
  technical_analysis:
    "Figma has revolutionized the design process by bringing it into the browser and making it collaborative. Our experts are masters of Figma's powerful features. We use auto layout to create responsive, production-ready designs. We build component libraries with variants to ensure consistency and scalability. We create interactive prototypes to test and validate user flows before a single line of code is written. We also leverage the Figma API to automate tasks and connect Figma to other tools in your stack. Our approach ensures that your design process is efficient, collaborative, and seamlessly integrated with your development workflow.",
  interlink_slugs: ["react", "vue", "tailwind", "web-accessibility"],
};

export default figma;
