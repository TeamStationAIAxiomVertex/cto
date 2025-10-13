import { TechEntry } from "@/lib/tech";

import { AlertTriangle } from "lucide-react";

const jamf: TechEntry = {
  name: "Jamf",
  category: "IT & Enterprise",
  categorySlug: "it-enterprise-ops",
  seo_title: "Hire Jamf Experts | TeamStation AI",
  meta_description:
    "Hire expert Jamf administrators to manage your Apple device fleet. Get pre-vetted LATAM talent to automate device deployment, enforce security policies, and streamline software distribution for macOS and iOS devices.",
  intro:
    "Jamf is the standard for Apple device management, providing a comprehensive solution for managing macOS, iOS, iPadOS, and tvOS devices. Our IT experts use Jamf to automate the entire lifecycle of your Apple fleet, from zero-touch deployment to ongoing security and software management.",
  pains: [
    {
      icon: AlertTriangle,
      pain: "Is manually setting up and managing employee Macs and iPhones wasting your IT team's time?",
      problem:
        "Your IT team spends hours manually configuring each new Apple device. This process is slow, inconsistent, and doesn't scale as your company grows. Employees have to wait to get the tools they need, and IT is bogged down in repetitive tasks.",
      solution:
        "We use **Jamf Pro with Apple Business Manager for zero-touch deployment**. New devices are shipped directly to employees and are automatically enrolled and configured with the correct settings, apps, and security policies right out of the the box. No IT intervention required.",
      kpi: "Reduce new device setup time from 4 hours to 15 minutes and enable 100% remote, zero-touch deployment.",
    },
    {
      icon: AlertTriangle,
      pain: "Are you concerned about the security of your company's Apple devices?",
      problem:
        "You have no visibility or control over the security posture of your employee's Macs and iPhones. You can't enforce passcodes, encrypt drives, or remotely wipe a lost or stolen device, leaving your company data vulnerable.",
      solution:
        "We leverage **Jamf's powerful policy engine to enforce security configurations**. We can mandate FileVault encryption, enforce complex passcodes, deploy security software, and remotely lock or wipe a device if it's lost or stolen, ensuring your data is always protected.",
      kpi: "Achieve 100% compliance with security policies like encryption and passcode requirements.",
    },
    {
      icon: AlertTriangle,
      pain: "Is distributing and updating software on your Apple devices a chaotic and manual process?",
      problem:
        "You need to deploy new software and keep existing apps up-to-date across your entire fleet. Doing this manually is a nightmare, leading to inconsistent versions, security vulnerabilities, and a poor user experience.",
      solution:
        "We use **Jamf's Self Service catalog and patch management features**. We can deploy licensed software automatically and provide users with a curated app store experience to install pre-approved software themselves. We also automate patching for common third-party apps to keep you secure.",
      kpi: "Automate 90% of software deployments and patch critical vulnerabilities across the fleet in under 24 hours.",
    },
  ],
  evaluation: [
    "Deep expertise in Jamf Pro, including policy creation, packaging, and scripting.",
    "Jamf Certified Admin or similar certification.",
    "Proven ability to manage large-scale Apple device deployments.",
    "Experience with zero-touch deployment using Apple Business Manager.",
    "Proficiency in scripting (e.g., Bash) to extend Jamf's capabilities.",
  ],
  technical_analysis:
    "Effective Apple management with Jamf requires a deep understanding of both the Jamf Pro platform and Apple's ecosystem. Our experts are masters of Jamf's core concepts, including smart groups, policies, and configuration profiles. We design and build robust, scalable management frameworks that can handle fleets of any size. We are skilled at creating custom packages for software deployment, writing complex scripts to automate administrative tasks, and creating Extension Attributes to gather specific data from devices. A key area of our expertise is zero-touch deployment, where we orchestrate the integration between Apple Business Manager and Jamf Pro to deliver a seamless out-of-the-box experience for users. We also have deep knowledge of Jamf's security features, using policies to enforce compliance and Jamf Protect to gain visibility into and respond to threats. By leveraging the full power of the Jamf platform, we can help you build a secure, efficient, and user-friendly Apple ecosystem.",
  interlink_slugs: [
    "google-workspace",
    "okta",
    "it-enterprise-ops",
    "security-engineering",
  ],
};

export default jamf;
