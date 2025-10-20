import { TechEntry } from "@/lib/tech";

import { AlertTriangle } from "lucide-react";

const oidc: TechEntry = {
  name: "OIDC",
  category: "Security",
  categorySlug: "security-grc",
  seo_title: "Hire OIDC Experts | TeamStation AI",
  meta_description:
    "Hire expert OIDC developers to implement secure, modern authentication for your applications. Get pre-vetted LATAM talent to build and manage your identity infrastructure.",
  intro:
    "OpenID Connect (OIDC) is an identity layer built on top of the OAuth 2.0 protocol. Our security engineers use OIDC to provide secure, standardized, and interoperable authentication for your applications, allowing users to sign in with their existing accounts from providers like Google, Microsoft, or Okta.",
  pains: [
    {
      iconName: "AlertTriangle",
      pain: "Are you building and maintaining your own user authentication system?",
      problem:
        "Building a custom authentication system is complex, time-consuming, and fraught with security risks. You have to handle password storage, session management, and protect against common vulnerabilities like credential stuffing and phishing.",
      solution:
        "We use **OIDC to delegate authentication to trusted identity providers**. This offloads the security burden from your application, reduces development time, and provides a better user experience by allowing users to sign in with their existing accounts.",
      kpi: "Eliminate the need to store user passwords and reduce authentication development time by 95%.",
    },
    {
      iconName: "AlertTriangle",
      pain: "Is it difficult to integrate your application with different identity providers?",
      problem:
        "Your enterprise customers want to use their own identity providers (like Okta or Azure AD) for single sign-on (SSO). Supporting multiple, non-standard identity providers is a significant engineering challenge.",
      solution:
        "We architect your application to use **OIDC, the industry standard for identity federation**. This allows you to easily integrate with any OIDC-compliant identity provider, making it simple to onboard new enterprise customers and provide a seamless SSO experience.",
      kpi: "Onboard new enterprise customers with their own identity providers in hours, not weeks.",
    },
    {
      iconName: "AlertTriangle",
      pain: "Are you struggling to securely access user information from different identity providers?",
      problem:
        "Your application needs access to user profile information (like name and email address) from the identity provider. Accessing this information in a secure and standardized way can be challenging.",
      solution:
        "We use the **OIDC UserInfo endpoint and ID Token** to securely and reliably obtain user information. This ensures that your application only has access to the information it needs and that the data is obtained in a standardized and secure manner.",
      kpi: "Securely access user profile information from any identity provider with a single, standardized approach.",
    },
  ],
  evaluation: [
    "Deep expertise in the OIDC and OAuth 2.0 protocols.",
    "Proven ability to design and implement secure and scalable authentication and authorization systems.",
    "Experience integrating applications with various OIDC identity providers, such as Okta, Azure AD, and Google.",
    "Proficiency in handling tokens, scopes, and claims to securely manage user identity and access.",
  ],
  technical_analysis:
    "OIDC has become the de facto standard for modern authentication. Our engineers have a deep understanding of the entire OIDC flow, including the different grant types (Authorization Code, Implicit, Hybrid) and when to use each. We are experts at configuring and integrating with OIDC providers, including setting up clients, defining scopes, and handling callbacks. We use libraries like `oidc-client-js` on the frontend and `passport-openidconnect` on the backend to simplify the integration process and ensure that we are following best practices. We also have extensive experience with advanced OIDC topics, such as token validation, refresh tokens, and single logout. By leveraging our deep knowledge of OIDC, we can help you build a secure, scalable, and interoperable authentication system that will meet the needs of your users and your business.",
  interlink_slugs: ["okta", "vault", "api-security", "security-engineering"],
};

export default oidc;
