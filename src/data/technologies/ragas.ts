import { TechEntry } from "@/lib/tech";

import { AlertTriangle } from "lucide-react";

const ragas: TechEntry = {
  name: "Ragas",
  category: "AI / ML Engineering",
  categorySlug: "ai-ml-engineering",
  seo_title: "Hire Ragas Experts | TeamStation AI",
  meta_description:
    "Hire expert Ragas developers to evaluate and test your Retrieval Augmented Generation (RAG) pipelines. Get pre-vetted LATAM talent to build reliable and high-performing LLM applications.",
  intro:
    "Ragas is a framework that helps you evaluate your Retrieval Augmented Generation (RAG) pipelines. Our AI/ML engineers use Ragas to assess the performance of RAG applications from every angle, ensuring that they are accurate, reliable, and ready for production.",
  pains: [
    {
      iconName: "AlertTriangle",
      pain: "Are you building a RAG application without a clear view of its performance?",
      problem:
        "Evaluating RAG pipelines is a complex and nuanced task. You need to assess the performance of both the retrieval and the generation components, and you need to do so in a way that is both systematic and automated.",
      solution:
        "We use **Ragas to evaluate your RAG pipelines from every angle**. We use its rich set of metrics to measure everything from context relevance and answer faithfulness to answer relevance and context recall. This allows us to identify the strengths and weaknesses of your pipeline and make data-driven decisions about how to improve it.",
      kpi: "Improve RAG accuracy by 50% and reduce hallucinations by 75%.",
    },
    {
      iconName: "AlertTriangle",
      pain: "Is RAG evaluation missing from your CI/CD pipeline?",
      problem:
        "Evaluating RAG pipelines should be an automated and continuous process, not a manual and ad-hoc one. You need a way to ensure that your RAG application is always performing at its best, and that you can catch any regressions before they make it to production.",
      solution:
        "We **integrate Ragas into your CI/CD pipeline**, allowing you to evaluate your RAG application every time you make a change. This allows you to catch regressions early, monitor the performance of your application over time, and ship with confidence.",
      kpi: "Reduce RAG-related production bugs by 90%.",
    },
    {
      iconName: "AlertTriangle",
      pain: "Are you struggling to monitor the performance of your RAG application in production?",
      problem:
        "The performance of your RAG application can be affected by a variety of factors, including changes in the data, the model, and the user's behavior. You need a way to monitor the performance of your application in real-time, so that you can identify and address any issues as they arise.",
      solution:
        "We use **Ragas to monitor the performance of your RAG application in production**. We use it to track key metrics over time, set up alerts to notify us of any regressions, and diagnose the root cause of any issues. This allows us to ensure that your application is always running at its best.",
      kpi: "Achieve 99.9% uptime and reduce time-to-resolve by 80%.",
    },
  ],
  evaluation: [
    "Deep expertise in Ragas and the evaluation of RAG pipelines.",
    "Proven ability to build and deploy reliable and high-performing RAG applications.",
    "Experience in integrating Ragas into CI/CD pipelines and monitoring systems.",
    "Proficiency in Python, LangChain, and other tools for building LLM applications.",
  ],
  technical_analysis:
    "Ragas is an essential tool for anyone building a RAG application. Its comprehensive set of metrics and its easy-to-use API make it the perfect choice for evaluating and testing RAG pipelines. Our engineers are experts at using Ragas to build high-quality RAG applications. We use Ragas to evaluate every component of the RAG pipeline, from the retriever to the generator. We use it to measure the quality of the retrieved context, the faithfulness of the generated answer, and the overall relevance of the response. We also use Ragas to automate the evaluation process, integrating it into our CI/CD pipelines to ensure that our RAG applications are always performing at their best. By combining Ragas with our expertise in LangChain, vector databases, and other RAG-related technologies, we can help you build and deploy RAG applications that are not only powerful and intelligent, but also reliable and trustworthy.",
  interlink_slugs: ["langchain", "python", "llms", "transformers"],
};

export default ragas;
