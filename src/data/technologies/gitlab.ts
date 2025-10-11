import { TechEntry } from "@/lib/tech";
import { AlertTriangle } from "lucide-react";

const gitlab: TechEntry = {
  name: "GitLab CI",
  category: "DevOps & Cloud",
  categorySlug: "platform-infra-sre",
  seo_title: "Hire GitLab CI Experts | CI/CD & DevOps Automation Specialists",
  meta_description: "Build a powerful, all-in-one software delivery platform. Hire elite remote GitLab CI experts vetted for their deep understanding of pipeline configuration, runners, and security. Book a call.",
  intro: "GitLab CI/CD is a powerful, integrated tool for building, testing, and deploying software. You need an engineer who can leverage its full potential to create a seamless, end-to-end software delivery pipeline. Our vetting process identifies developers who are experts in the GitLab CI ecosystem, from the `.gitlab-ci.yml` file and runners to the package registry and security scanning. By hiring a GitLab CI expert, you get a developer who can build a modern, automated, and observable system that is a joy to use, and a joy to maintain.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "Is your CI/CD pipeline a mess of disconnected tools and scripts?",
      problem: "In many organizations, the CI/CD pipeline is a mess of disconnected tools and scripts. This can lead to a user experience that is filled with bugs and a codebase that is a mess of environment-specific hacks and workarounds.",
      solution: "We vet for experts in **GitLab CI and the modern DevOps stack**. Our engineers are proficient in using GitLab CI to build a fully integrated, all-in-one software delivery platform. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
      kpi: "A Fully Integrated, All-in-One Software Delivery Platform"
    },
    {
      icon: AlertTriangle,
      pain: "Is your application not taking full advantage of the cloud?",
      problem: "Many applications are not built to be cloud-native. This can lead to a user experience that is slow, a codebase that is a mess of monolithic, hard-to-maintain code, and a cloud bill that is out of control.",
      solution: "Our engineers are masters of **modern, cloud-native architectures**. They are vetted on their ability to use services like Kubernetes, Docker, and other containerization technologies to build a modern, serverless, and container-based architecture. This results in a codebase that is easy to understand and a user experience that is a joy to use.",
      kpi: "A Modern, Serverless, and Container-Based Architecture"
    },
    {
      icon: AlertTriangle,
      pain: "Is your team not leveraging the full power of the CI/CD ecosystem?",
      problem: "The CI/CD ecosystem is vast and powerful, but many teams are not leveraging its full potential. This can lead to a codebase that is a mess of reinvented wheels and a user experience that is not as rich as it could be.",
      solution: "We look for engineers proficient with **the CI/CD ecosystem and the GitLab CI template library**. They are vetted on their ability to build applications that are powered by the best of the CI/CD ecosystem. This results in a user experience that is a joy to use for everyone, and a codebase that is easy to maintain and test.",
      kpi: "An Application That is Powered by the Best of the CI/CD Ecosystem"
    }
  ],
  evaluation: [
    "The GitLab CI YAML and the pipeline",
    "CI/CD and the GitLab ecosystem",
    "The runner and the executor",
    "GitLab CI security and best practices",
    "GitLab CI on Kubernetes",
  ],
  technical_analysis: "The GitLab CI evaluation focuses on a candidate's ability to build a powerful, all-in-one software delivery platform. We assess their understanding of the entire GitLab CI ecosystem, requiring them to design a complex application with a clean, automated, and observable architecture. A critical part of the evaluation is their mastery of **the GitLab CI YAML and the pipeline**; candidates must demonstrate how to use the GitLab CI YAML to manage the entire lifecycle of a software delivery pipeline, and how to use the pipeline to define and configure a software delivery pipeline. We also test their ability to build **portable and environment-agnostic** applications that can run on any environment. Finally, we assess their knowledge of the GitLab CI template library, and their ability to leverage it to build a modern, high-performance backend.",
  interlink_slugs: ["kubernetes", "docker", "ci-cd", "devops-engineering"],
};

export default gitlab;
