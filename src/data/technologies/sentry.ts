
import { AlertTriangle } from "lucide-react";
import { TechEntry } from "@/lib/tech";

const sentry: TechEntry = {
    name: "Sentry",
    category: "Observability & SRE",
    categorySlug: "platform-infra-sre",
    seo_title: "Hire Sentry Experts | Error Monitoring & Application Performance",
    meta_description: "Go beyond logs. Hire elite remote Sentry experts vetted for their deep understanding of error tracking, performance monitoring, and release health. Book a call.",
    intro: "Sentry is an essential tool for modern application monitoring, providing deep insights into errors and performance bottlenecks in your code. You need an engineer who can leverage Sentry to its full potential, transforming it from a simple error bucket into a proactive tool for improving code quality and user experience. Our vetting process identifies developers who are experts in configuring Sentry SDKs, setting up effective alerting, and using Sentry's performance monitoring to diagnose and fix real-world issues. By hiring a Sentry expert, you get a developer who can help you ship faster with more confidence.",
    pains: [
        {
            iconName: "AlertTriangle",
            pain: "Are you discovering bugs from user complaints instead of proactive alerts?",
            problem: "Relying on users to report bugs is a poor strategy. By the time a user complains, the issue has already caused a negative experience, damaged your brand's reputation, and potentially resulted in lost revenue. You are flying blind in production.",
            solution: "We vet for experts in <strong>proactive error monitoring</strong>. Our engineers are proficient in instrumenting applications with the Sentry SDK and configuring intelligent alerting rules that notify your team of critical errors in real-time, often before users even notice there's a problem.",
            kpi: "Real-Time Error Alerting and Triage"
        },
        {
            iconName: "AlertTriangle",
            pain: "Is your error inbox a noisy, unactionable mess?",
            problem: "A poorly configured Sentry project can quickly become overwhelmed with low-impact or duplicate errors, creating alert fatigue. When everything is an emergency, nothing is. Developers start ignoring alerts, and critical issues get lost in the noise.",
            solution: "Our engineers are masters of <strong>Sentry project configuration and workflow</strong>. They are vetted on their ability to use ownership rules, issue grouping, and alert filtering to ensure that the right alerts get to the right team at the right time, turning a noisy inbox into an actionable task list.",
            kpi: "Actionable Alerting and Issue Triage"
        },
        {
            iconName: "AlertTriangle",
            pain: "Do you know how your application's performance impacts user experience?",
            problem: "Backend performance metrics are not enough. Without visibility into frontend performance, you can't understand how your application is actually behaving for real users. You might have slow page loads, janky animations, or rage clicks that you are completely unaware of.",
            solution: "We look for engineers proficient in <strong>Sentry's performance monitoring and session replay</strong>. They are vetted on their ability to analyze Core Web Vitals, identify frontend performance bottlenecks, and use session replays to understand the real user experience, providing a complete picture of your application's health.",
            kpi: "Frontend Performance Monitoring and User Experience Insights"
        }
    ],
    evaluation: [
        "Sentry SDK integration and configuration (e.g., enrichments, breadcrumbs)",
        "Alerting rules and issue management workflows",
        "Performance monitoring (traces, transactions, Core Web Vitals)",
        "Release health monitoring and regression detection",
        "Source maps and debugging production errors"
    ],
    technical_analysis: "The Sentry evaluation focuses on a candidate's ability to use the platform to improve application quality and developer workflow. We assess their understanding of how to effectively configure the Sentry SDK to capture rich, contextual error reports. A critical part of the evaluation is their ability to set up an intelligent alerting strategy that minimizes noise and delivers actionable insights. We also test their knowledge of Sentry's performance monitoring capabilities, requiring them to diagnose a frontend performance issue using traces and Core Web Vitals data.",
    interlink_slugs: ["devops-engineering", "react", "node", "python"]
};

export default sentry;
