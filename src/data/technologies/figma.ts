
import { PenTool, Zap, Shield, Code } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const figma: TechEntry = {
    name: "Figma",
    category: "Product, Design & Growth",
    categorySlug: "product-design-growth",
    seo_title: "Hire Senior Figma Experts | Design and Prototyping Specialists",
    meta_description: "Hire elite Figma experts specializing in building, managing, and scaling secure, and reliable design systems.",
    intro: "Figma is a powerful and versatile design and prototyping tool. Our Figma experts are vetted for their deep understanding of Figma's core principles, from its powerful design and prototyping features to its robust security and performance tuning capabilities. They are the specialists who can help you build and manage a secure, and reliable design system.",
    pains: [
        {
            iconName: "\1",
            pain: "Our design system is a mess of spaghetti.",
            problem: "Poorly designed design systems are difficult to understand, maintain, and reuse, leading to a lack of confidence in your product.",
            solution: "We vet for mastery in **Figma's powerful design and prototyping features**. Our engineers can help you build a clean, modular, and well-documented design system.",
            kpi: "90% Component Reusability"
        },
        {
            iconName: "\1",
            pain: "We're struggling to keep up with the latest design and prototyping technologies.",
            problem: "The design and prototyping landscape is constantly evolving. It's difficult to keep up with the latest technologies, such as Framer and Sketch.",
            solution: "Our experts are tested on **the latest design and prototyping technologies**. They can help you take advantage of the latest features, so you can build the next generation of design systems.",
            kpi: "90% Reduction in Time to Market"
        },
        {
            iconName: "\1",
            pain: "We're worried about the security of our data.",
            problem: "Data security is a top priority for every business. It's difficult to secure your data, especially when you're dealing with sensitive information.",
            solution: "We vet for expertise in **Figma's security features**. Our engineers use the latest security best practices to protect your data from attack.",
            kpi: "100% Data Security"
        }
    ],
    evaluation: [
        "Deep understanding of Figma's core principles.",
        "Mastery of Figma's powerful design and prototyping features.",
        "Proficiency in building scalable, production-ready design systems.",
        "Experience with a variety of design and prototyping technologies.",
        "Expertise in Figma's security features.",
    ],
    technical_analysis: "The Figma vetting process is rigorous and hands-on. Candidates are required to build a production-ready design system from scratch. We test their ability to write clean, modular, and maintainable code, as well as their understanding of Figma best practices. We also assess their experience with a variety of design and prototyping technologies and their ability to optimize for performance and security.",
    interlink_slugs: ["sketch", "framer", "adobe-xd", "invision", "zeplin"],
    is_ready: true,
};

export default figma;
