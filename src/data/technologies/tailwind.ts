import { TechEntry } from "@/lib/tech";

import { Palette, FastForward, Layout } from "lucide-react";

const tailwind: TechEntry = {
  name: "Tailwind CSS",
  category: "Frontend",
  categorySlug: "frontend",
  seo_title: "Hire Tailwind CSS Experts | TeamStation AI",
  meta_description:
    "Hire top Tailwind CSS developers to build beautiful, responsive, and maintainable user interfaces with speed. Get pre-vetted LATAM talent to accelerate your frontend development.",
  intro:
    "Tailwind CSS is a utility-first CSS framework that enables rapid UI development without ever leaving your HTML. Our frontend experts use Tailwind to build bespoke, production-ready designs with unmatched speed and consistency.",
  pains: [
    {
      icon: Palette,
      pain: "Your CSS is a tangled mess of custom classes, overrides, and '!important' hacks.",
      problem:
        "Traditional CSS methodologies often lead to bloated stylesheets, naming conflicts, and a constant battle with specificity. Making a simple style change can have unintended consequences.",
      solution:
        "We use Tailwind's utility classes to apply styles directly in the markup, eliminating context switching and creating a predictable, maintainable, and highly composable styling system.",
      kpi: "Reduce CSS bundle size by up to 40%.",
    },
    {
      icon: FastForward,
      pain: "Building new UI components takes forever, and iterating on designs is slow.",
      problem:
        "Creating custom CSS for every new component is time-consuming. Your team is reinventing the wheel instead of focusing on what matters: the user experience.",
      solution:
        "We leverage Tailwind's comprehensive design system and utility-first approach to rapidly prototype and build new components, dramatically accelerating the development lifecycle.",
      kpi: "Increase UI development speed by 2x.",
    },
    {
      icon: Layout,
      pain: "Maintaining design consistency across your application is a constant struggle.",
      problem:
        "Without a systematic approach, your UI devolves into a collection of one-off styles, leading to an inconsistent user experience and a brand that feels disjointed.",
      solution:
        "We configure and customize Tailwind's `tailwind.config.js` file to create a bespoke design system that enforces brand consistency in spacing, typography, colors, and more.",
      kpi: "Ensure 100% design consistency across all pages and components.",
    },
  ],
  evaluation: [
    "Deep expertise in Tailwind CSS and the utility-first methodology.",
    "Proven ability to create custom, responsive designs by composing utility classes.",
    "Experience in customizing the `tailwind.config.js` file to match specific design requirements.",
    "Proficiency in using Tailwind with modern frontend frameworks like React, Next.js, Vue, and Svelte.",
  ],
  technical_analysis:
    "Tailwind CSS represents a fundamental shift in how we approach styling for the web. Instead of writing CSS, you build designs by applying pre-existing classes directly in your HTML. Our engineers are experts at this, but they also understand how to keep Tailwind projects maintainable at scale. We leverage the `@apply` directive to extract common utility patterns into reusable component classes, and we use the `theme` function to create a fully customized and constraint-based design system. We also use plugins to extend Tailwind's core functionality, and we integrate it seamlessly into any frontend framework. This allows us to build anything from a simple landing page to a complex web application with a consistent, beautiful, and highly performant UI.",
  interlink_slugs: ["react", "nextjs", "vue", "svelte"],
};

export default tailwind;
