import { TechEntry } from "@/lib/tech";
import { AlertTriangle } from "lucide-react";

const launchdarkly: TechEntry = {
  name: "LaunchDarkly",
  category: "DevOps & Cloud",
  categorySlug: "platform-infra-sre",
  seo_title: "Hire LaunchDarkly Experts | Feature Flagging & Release Management",
  meta_description: "Decouple deploy from release. Hire elite remote LaunchDarkly experts vetted for their deep understanding of feature flagging, progressive delivery, and experimentation. Book a call.",
  intro: "LaunchDarkly is a feature management platform that allows you to control the entire lifecycle of your features, from rollout to retirement. You need an engineer who can leverage LaunchDarkly to de-risk your releases, enable progressive delivery, and run experiments in production. Our vetting process identifies developers who are experts in feature flagging best practices and can architect a release process that is as safe and controlled as it is fast. By hiring a LaunchDarkly expert, you get a developer who can transform your team's ability to ship with confidence.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "Are your production releases high-stakes, all-or-nothing events?",
      problem: "Traditional deployments are a high-risk affair. A single bug can impact all your users, leading to frantic rollbacks and a culture of fear around releasing new code. This slows down your entire development process.",
      solution: "We vet for experts in <strong>progressive delivery</strong>. Our engineers are proficient in using LaunchDarkly to perform canary releases and percentage-based rollouts, allowing you to safely release new features to a small subset of users before making them available to everyone.",
      kpi: "Safe, Controlled, and Progressive Delivery"
    },
    {
      icon: AlertTriangle,
      pain: "Are you unable to turn off a bad feature without a full rollback?",
      problem: "When a new feature causes problems in production, the only option is often a full, time-consuming rollback of the entire application. This leads to extended downtime and a loss of all the other good features that were part of the same release.",
      solution: "Our engineers are masters of <strong>feature flagging as a kill switch</strong>. They are vetted on their ability to wrap all new features in LaunchDarkly flags, allowing you to instantly turn off any problematic feature in production with the flip of a switch, without needing a new deployment.",
      kpi: "Instantaneous Kill Switches for Features"
    },
    {
      icon: AlertTriangle,
      pain: "Are you guessing which features your users actually want?",
      problem: "Building features without a clear way to measure their impact is a shot in the dark. This leads to a lot of wasted engineering effort on features that don't move the needle for your business.",
      solution: "We look for engineers proficient in <strong>A/B testing and experimentation</strong>. They are vetted on their ability to use LaunchDarkly to run controlled experiments in production, providing you with the data you need to make informed decisions about your product roadmap.",
      kpi: "Data-Driven Product Decisions with A/B Testing"
    }
  ],
  evaluation: [
    "Feature flagging best practices and lifecycle management",
    "Progressive delivery (canary releases, percentage rollouts)",
    "Targeting rules and user segmentation",
    "SDK integration and performance",
    "Experimentation and A/B testing"
  ],
  technical_analysis: "The LaunchDarkly evaluation is focused on a candidate's ability to implement a modern feature management and progressive delivery strategy. We assess their understanding of how to use feature flags to decouple deployment from release. A critical part of the evaluation is their mastery of **targeting rules**; candidates must demonstrate how to create complex rules to target specific user segments for a canary release. We also test their ability to integrate the LaunchDarkly SDK into an application and manage its performance impact. Finally, we assess their knowledge of running and analyzing A/B tests to make data-driven product decisions.",
  interlink_slugs: ["devops-engineering", "ci-cd", "react", "node"],
};

export default launchdarkly;
