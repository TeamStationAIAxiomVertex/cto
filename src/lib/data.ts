export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  results: { text: string }[];
  chartData: { name: string; value: number }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'atticus',
    title: 'Atticus: From Broken POC to App Store MVP in <3 Months',
    subtitle: 'TeamStation AI assembled a nearshore squad that took a non-functional POC and delivered a full web/iOS estate settlement MVP, saving an estimated $550,000.',
    metrics: [
      { label: 'Industry', value: 'LegalTech' },
      { label: 'Time to MVP', value: '<3 Months' },
      { label: 'Cost Savings', value: '$550,000+' }
    ],
    challenge: 'Atticus faced a tight budget and a three-month deadline to deliver a production-ready probate and estate-settlement experience on both web and iOS, starting from a non-functional proof of concept and requiring a complete technology stack migration.',
    solution: 'TeamStation AI assembled a precision-matched LATAM squad, including senior engineers and a product manager, who took ownership of the project. We orchestrated a rapid, structured discovery process, defined a shippable MVP, and executed a pragmatic stack transition to accelerate development.',
    results: [
      { text: 'Shipped a production-ready MVP in under 3 months, and a complete system in under 6.' },
      { text: 'Achieved successful Apple App Store approval and release to the market.' },
      { text: 'Saved an estimated $550,000 in development costs compared to typical alternatives.' },
      { text: 'Generated approximately 750 lifetime downloads and an estimated $100K in lifetime revenue.' }
    ],
    chartData: [
      { name: 'Q1 (Before)', value: 5 },
      { name: 'Q2', value: 25 },
      { name: 'Q3 (MVP)', value: 80 },
      { name: 'Q4 (GA)', value: 120 },
    ],
  },
  {
    slug: 'rmj-technologies',
    title: 'RMJ Technologies: Rescuing a Monolith to Scale to 15,000 Users',
    subtitle: 'See how TeamStation AI stabilized a fragile monolithic platform, enabling multi-million dollar growth and massive user-scaling for an automotive fleet optimization provider.',
    metrics: [
        { label: 'Industry', value: 'Automotive Fleet' },
        { label: 'Users Scaled', value: '15,000+' },
        { label: 'Core Problem', value: 'Monolith Rescue' }
    ],
    challenge: 'RMJ Technologies was struggling with a semi-functional monolithic platform built offshore. The system suffered from critical onboarding failures, delayed driver training schedules, and an inability to generate reports, blocking significant growth opportunities.',
    solution: 'TeamStation AI deployed a dedicated nearshore squad with deep .NET and Vue.js experience. The team included delivery and product management to enforce discipline, refactor critical modules, and launch a progressive microservices program to decouple key functionalities.',
    results: [
      { text: 'Stabilized the platform and restored on-time delivery of driver training, ensuring compliance.' },
      { text: 'Unlocked scalability, enabling the platform to onboard users toward a goal of 15,000.' },
      { text: 'Enabled multi-million-dollar revenue expansion by unblocking enterprise client onboarding.' },
      { text: 'Reduced operational risk through improved observability and safer, more frequent deployments.' }
    ],
    chartData: [
      { name: 'Q1 (Before)', value: 10 },
      { name: 'Q2', value: 15 },
      { name: 'Q3', value: 50 },
      { name: 'Q4 (Scaling)', value: 150 },
    ],
  },
  {
    slug: 'parsable',
    title: 'Parsable: Resolving Enterprise SSO Failures After 18 Vendors Failed',
    subtitle: 'TeamStation AI\'s nearshore squad resolved a critical Okta SSO issue for a marquee enterprise client, restoring access and unlocking new revenue streams.',
    metrics: [
        { label: 'Industry', value: 'Industrial Automation' },
        { label: 'Challenge', value: 'Critical SSO Failure' },
        { label: 'Key Tech', value: 'Okta, SAML' }
    ],
    challenge: 'Parsable faced a persistent, mission-critical Okta SSO failure impacting a major enterprise client, blocking daily user access and halting the onboarding of new billable users. After 18 other vendors failed to solve the issue, the pressure was immense.',
    solution: 'TeamStation AI was selected for its superior talent quality and security governance. We deployed a targeted squad of senior engineers with deep identity and SSO experience. The team executed a non-disruptive diagnostic plan, identified the failure path in the SAML exchange, and shipped a targeted fix.',
    results: [
      { text: 'Restored stable SSO authentication for the affected enterprise client without any platform downtime.' },
      { text: 'Unlocked the onboarding of additional billable users, directly impacting revenue.' },
      { text: 'Established a trusted, long-term partnership, with the team remaining embedded to drive product velocity.' },
      { text: 'Succeeded where 18 previous vendors had failed, demonstrating superior diagnostic and execution capabilities.' }
    ],
    chartData: [
      { name: 'Week 1-4', value: 0 },
      { name: 'Week 5-8', value: 5 },
      { name: 'Week 9 (Fix)', value: 200 },
      { name: 'Week 10+', value: 250 },
    ],
  },
];
