import { AlertTriangle } from "lucide-react";
import { Bot, Image, Film, Code } from "lucide-react";
import type { TechEntry } from "@/lib/tech";

const generativeAi: TechEntry = {
  name: "Generative AI",
  category: "Data & AI Engineering",
  categorySlug: "data-ai",
  seo_title:
    "Hire Senior Generative AI Experts | Text-to-Image and Text-to-Video Specialists",
  meta_description:
    "Hire elite Generative AI experts specializing in building, managing, and scaling applications powered by text-to-image and text-to-video models.",
  intro:
    "Generative AI is transforming the way we create and consume content. Our Generative AI experts are vetted for their deep understanding of the latest models, from GANs and VAEs to text-to-image and text-to-video. They are the specialists who can help you build the next generation of AI-powered applications.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "We're struggling to get our Generative AI model to produce the results we want.",
      problem:
        "Off-the-shelf Generative AI models are not always a good fit for your specific use case. They require careful tuning and prompt engineering to produce the desired results.",
      solution:
        "We vet for mastery in **prompt engineering and model tuning**. Our engineers can help you get the most out of your Generative AI model, whether you're using it for text-to-image, text-to-video, or any other generative task.",
      kpi: "50% Improvement in Model Accuracy",
    },
    {
      icon: AlertTriangle,
      pain: "We're not sure how to build a production-ready application with a Generative AI model.",
      problem:
        "Building a production-ready application with a Generative AI model is not as simple as just calling an API. It requires careful consideration of scalability, reliability, and cost.",
      solution:
        "Our experts are tested on **building scalable, production-ready applications**. They can help you design and build a system that is reliable, scalable, and cost-effective.",
      kpi: "99.9% Application Uptime",
    },
    {
      icon: AlertTriangle,
      pain: "We're worried about the cost of using a Generative AI model.",
      problem:
        "The cost of using a Generative AI model can quickly spiral out of control if you're not careful. It's important to choose the right model for your use case and to optimize your application for cost.",
      solution:
        "We vet for expertise in **cost optimization**. Our engineers can help you choose the right model for your use case and to design and build a system that is cost-effective.",
      kpi: "30% Reduction in Generative AI Costs",
    },
  ],
  evaluation: [
    "Deep understanding of Generative AI architectures (GANs, VAEs, etc.).",
    "Mastery of prompt engineering and model tuning.",
    "Proficiency in building scalable, production-ready applications with Generative AI models.",
    "Experience with a variety of Generative AI models (e.g., DALL-E 2, Imagen, Midjourney).",
    "Expertise in cost optimization.",
  ],
  technical_analysis:
    "The Generative AI vetting process is rigorous and hands-on. Candidates are required to fine-tune a Generative AI model for a specific use case and to build a production-ready application with it. We test their ability to write clean, modular, and maintainable code, as well as their understanding of Generative AI best practices. We also assess their experience with a variety of Generative AI models and their ability to optimize for cost.",
  interlink_slugs: ["python", "pytorch", "tensorflow", "llm", "langchain"],
  is_ready: true,
};

export default generativeAi;
