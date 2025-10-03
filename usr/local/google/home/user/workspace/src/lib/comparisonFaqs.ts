
export type Faq = { q: string; a: string };

/** Default FAQs for a competitor page; safe fallback if none provided */
export function defaultComparisonFaqs(vendor: string): Faq[] {
  return [
    {
      q: `Why choose TeamStation AI vs. ${vendor}?`,
      a: "TeamStation AI bundles scientific vetting, secure MDM devices, EOR/compliance, and insurance under one SLA to reduce risk and lower TCO."
    },
    {
      q: "How do you vet engineers?",
      a: "We use our Axiom Cortex™ cognitive AI to measure problem-solving ability and learning orientation, providing evidence-based signals—beyond resumes."
    },
    {
      q: "What about compliance and security?",
      a: "We’re aligned to SOC 2/ISO practices, devices are MDM-managed with encryption and remote wipe, and all work is covered by Cyber & E&O insurance."
    }
  ];
}
export default { defaultComparisonFaqs };
