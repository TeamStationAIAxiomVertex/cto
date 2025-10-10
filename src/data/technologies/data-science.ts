
import { AlertTriangle } from "lucide-react";
import { TechEntry } from "@/lib/tech";

const dataScience: TechEntry = {
    name: "Data Science",
    category: "Data & AI",
    categorySlug: "ml-ai-llm-ops",
    seo_title: "Hire Data Scientists | Machine Learning & AI Consultants",
    meta_description: "Build a reliable, scalable, and automated data science platform. Hire elite remote data scientists vetted for their deep understanding of data science, from the model to the pipeline. Book a call.",
    intro: "Data science is the foundation of any AI-driven organization. You need an engineer who understands that building a modern data science platform is not just about training models, but about a deep understanding of the entire data science lifecycle, from the data and the model to the pipeline and the deployment. Our vetting process identifies developers who are experts in the modern data science stack—and can architect a data science platform that is as secure, efficient, and automated as it is scalable. By hiring a data scientist, you get a developer who can build a modern, automated, and observable system that is a joy to use, and a joy to maintain.",
    pains: [
        {
            icon: AlertTriangle,
            pain: "Is your data science platform a mess of brittle, ad-hoc scripts?",
            problem: "In many organizations, the data science platform is a mess of brittle, ad-hoc scripts. This can lead to a user experience that is filled with stale models and a codebase that is a mess of environment-specific hacks and workarounds.",
            solution: "We vet for experts in **data science and the modern data science stack**. Our engineers are proficient in using tools like Kubeflow, MLflow, and SageMaker to build a fully automated, reliable, and efficient data science platform. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
            kpi: "A Fully Automated, Reliable, and Efficient Data Science Platform",
        },
        {
            icon: AlertTriangle,
            pain: "Is your application not taking full advantage of the cloud?",
            problem: "Many applications are not built to be cloud-native. This can lead to a user experience that is slow, a codebase that is a mess of monolithic, hard-to-maintain code, and a cloud bill that is out of control.",
            solution: "Our engineers are masters of **modern, cloud-native architectures**. They are vetted on their ability to use services like Lambda, Fargate, and Kubernetes to build a modern, serverless, and container-based architecture. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
            kpi: "A Modern, Serverless, and Container-Based Architecture",
        },
        {
            icon: AlertTriangle,
            pain: "Is your team not leveraging the full power of the data science ecosystem?",
            problem: "The data science ecosystem is vast and powerful, but many teams are not leveraging its full potential. This can lead to a codebase that is a mess of reinvented wheels and a user experience that is not as rich as it could be.",
            solution: "We look for engineers proficient with **the data science ecosystem and the modern data science stack**. They are vetted on their ability to build applications that are powered by the best of the data science ecosystem. This results in a user experience that is a joy to use for everyone, and a codebase that is easy to maintain and test.",
            kpi: "An Application That is Powered by the Best of the Data Science Ecosystem",
        }
    ],
    evaluation: [
        "The modern data science stack (e.g., Kubeflow, MLflow, SageMaker)",
        "Data science pipelines and MLOps",
        "Model training, evaluation, and deployment",
        "Feature engineering and data preprocessing",
        "Deep learning and neural networks",
    ],
    technical_analysis: "The Data Science evaluation focuses on a candidate's ability to build a reliable, scalable, and automated data science platform. We assess their understanding of the entire data science lifecycle, requiring them to design a complex application with a clean, automated, and observable architecture. A critical part of the evaluation is their mastery of **the modern data science stack and the data science pipeline**; candidates must demonstrate how to use tools like Kubeflow, MLflow, and SageMaker to build a fully automated, reliable, and efficient data science platform, and how to use services like Lambda, Fargate, and Kubernetes to build a modern, serverless, and container-based architecture. We also test their ability to build **observable and cost-effective** systems that are easy to monitor and debug. Finally, we assess their knowledge of the data science ecosystem, and their ability to leverage it to build a modern, high-performance backend.",
    interlink_slugs: ["kubeflow", "mlflow", "sagemaker", "tensorflow"],
};

export default dataScience;
