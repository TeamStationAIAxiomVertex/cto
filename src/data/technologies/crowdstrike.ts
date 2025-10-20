import type { TechEntry } from "@/lib/tech";

import { AlertTriangle } from "lucide-react";

const crowdstrike: TechEntry = {
  name: "CrowdStrike",
  category: "Security",
  categorySlug: "security-grc",
  seo_title: "Hire CrowdStrike Experts | TeamStation AI",
  meta_description:
    "Hire expert CrowdStrike developers to protect your endpoints from modern threats. Get pre-vetted LATAM talent to deploy, configure, and manage your CrowdStrike Falcon platform.",
  intro:
    "CrowdStrike is a leader in cloud-native endpoint protection, offering a single platform to stop breaches, ransomware, and cyberattacks. Our security engineers use the CrowdStrike Falcon platform to provide comprehensive, real-time protection for your endpoints, workloads, and cloud environments.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "Are you struggling to protect your endpoints from sophisticated attacks?",
      problem:
        "Traditional antivirus software is no longer effective against modern threats like ransomware, fileless malware, and zero-day exploits. These attacks can bypass traditional defenses and cause significant damage to your business.",
      solution:
        "We use **CrowdStrike Falcon's next-generation antivirus (NGAV) and endpoint detection and response (EDR)** capabilities to protect your endpoints from the full spectrum of modern threats. Falcon uses a combination of machine learning, artificial intelligence, and behavioral analysis to detect and block threats in real time.",
      kpi: "Block 99% of malware and reduce the time to detect and respond to threats by 90%.",
    },
    {
      icon: AlertTriangle,
      pain: "Do you lack visibility into the security posture of your endpoints?",
      problem:
        "Without visibility into the security state of your endpoints, you can't effectively manage risk. You don't know which endpoints are vulnerable, which are being targeted, and whether your security controls are effective.",
      solution:
        "We leverage **CrowdStrike Falcon's single, lightweight agent and cloud-native architecture** to provide complete visibility into the security of your endpoints. We can see every process, every connection, and every file, allowing us to quickly identify and respond to threats.",
      kpi: "Gain 100% visibility into your endpoint security posture.",
    },
    {
      icon: AlertTriangle,
      pain: "Is your security team overwhelmed with alerts?",
      problem:
        "Traditional security tools generate a high volume of alerts, many of which are false positives. This can overwhelm your security team and lead to alert fatigue, causing them to miss real threats.",
      solution:
        "We use **CrowdStrike Falcon's advanced threat intelligence and automated remediation** capabilities to reduce the number of alerts and automate the response process. This allows your security team to focus on the most critical threats and reduces the risk of human error.",
      kpi: "Reduce the number of security alerts by 80% and automate 90% of the response process.",
    },
  ],
  evaluation: [
    "Deep expertise in the CrowdStrike Falcon platform, including Falcon Prevent, Falcon Insight, and Falcon OverWatch.",
    "Proven ability to design, implement, and manage a comprehensive endpoint protection program.",
    "Experience with threat hunting, incident response, and forensic analysis using the Falcon platform.",
    "Proficiency in integrating CrowdStrike with other security tools, such as SIEMs and SOARs.",
  ],
  technical_analysis:
    "CrowdStrike has redefined endpoint security with its cloud-native platform. Our engineers are experts at deploying and managing the Falcon agent across a wide range of operating systems, including Windows, macOS, and Linux. We have extensive experience with the full suite of Falcon modules, including NGAV, EDR, threat intelligence, and vulnerability management. We are also experts at using the Falcon API to automate security workflows and integrate with other security tools. For example, we can use the API to automatically isolate a compromised endpoint, retrieve forensic data, or create a new ticket in your ITSM system. By combining our deep knowledge of the CrowdStrike platform with our expertise in security operations and incident response, we can help you build a world-class endpoint protection program that will keep your business safe from modern threats.",
  interlink_slugs: ["snyk", "trivy", "security-engineering", "soc"],
};

export default crowdstrike;
