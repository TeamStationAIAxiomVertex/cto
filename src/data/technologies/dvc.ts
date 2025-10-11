
import { TechEntry } from "@/lib/tech";

const dvc: TechEntry = {
  name: "DVC",
  category: "AI / ML Engineering",
  categorySlug: "ai-ml-engineering",
  seo_title: "Hire DVC Experts | TeamStation AI",
  meta_description:
    "Hire expert DVC developers to bring version control to your machine learning projects. Get pre-vetted LATAM talent to make your ML experiments reproducible and auditable.",
  intro:
    "DVC (Data Version Control) is an open-source tool for data versioning, ML model versioning, and experiment management. Our AI/ML engineers use DVC to bring the power of Git to your entire machine learning project, making your work reproducible, collaborative, and auditable.",
  pains: [
    {
      icon: "AlertTriangle",
      pain: "Are you struggling to version your large datasets and models with Git?",
      problem:
        "Git is not designed to handle large files, making it impossible to version the multi-gigabyte datasets and models that are common in machine learning. This leads to messy, unreliable workarounds and a lack of reproducibility.",
      solution:
        "We use **DVC to decouple data and model storage from your Git repository**. Your code lives in Git, while DVC transparently manages your large files in remote storage (like S3, GCS, or Azure Blob), allowing you to version your entire project with a simple `git push`.",
      kpi: "Version datasets and models of any size, effortlessly.",
    },
    {
      icon: "AlertTriangle",
      pain: "Is it impossible to reproduce your past ML experiments?",
      problem:
        "You have a great model result from last month, but you can't recreate it. You don't know the exact code, data, and hyperparameters used, making it impossible to build upon past work or debug issues.",
      solution:
        "Our engineers use **DVC pipelines to codify your entire ML workflow**. We connect your code, data, and model outputs, creating a complete, versioned graph of your experiment. A single `dvc repro` command is all it takes to reproduce any result.",
      kpi: "Achieve 100% reproducibility for all your ML experiments.",
    },
    {
      icon: "AlertTriangle",
      pain: "Is collaboration within your data science team chaotic and inefficient?",
      problem:
        "Team members can't easily share data, track each other's experiments, or build upon previous work. This leads to duplicated effort, conflicting versions, and a slow, frustrating development cycle.",
      solution:
        "We establish **Git and DVC as the single source of truth** for your ML projects. By using Git branches for experimentation and DVC for data/model sharing, we create a collaborative workflow that mirrors best practices from software engineering, making your team more agile and efficient.",
      kpi: "Increase team productivity by 50%.",
    },
  ],
  evaluation: [
    "Deep expertise in DVC for data and model versioning.",
    "Proven ability to create reproducible ML pipelines using DVC.",
    "Experience in integrating DVC with Git-based workflows and various cloud storage backends.",
    "Proficiency in establishing collaborative MLOps practices using DVC and Git.",
  ],
  technical_analysis:
    "DVC brings the rigor and best practices of software engineering to machine learning. Our engineers use it to create a robust foundation for MLOps. We use DVC pipelines to define the full Directed Acyclic Graph (DAG) of your machine learning process, from data preprocessing to model training and evaluation. This codification of your workflow, combined with Git versioning, ensures that every single experiment is reproducible. DVC's `dvc.yaml` file acts as a single source of truth, defining all the stages, dependencies, and outputs. We leverage DVC's data management capabilities to track large files without bloating your Git repository, using pointers and a content-addressable storage system in the background. This allows for efficient data and model sharing among team members. By integrating DVC into your CI/CD system, we can automate model retraining and evaluation, creating a true GitOps-for-ML experience.",
  interlink_slugs: ["git", "mlflow", "feast", "scikit-learn"],
};

export default dvc;
