import { WithContext, Corporation } from "schema-dts";

// This is the central hub for your site's Schema.org graph.
// We define the core Organization entity here, which will be referenced by other schemas.

// --- CORE ENTITY: TeamStation AI ---
// We are defining your company as a Corporation and a leader in AI-powered tech staffing.
// This is the sun of our schema solar system.
export const teamStationAI = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: "TeamStation AI",
  legalName: "TeamStation, Inc.",
  url: "https://teamstation.dev",
  logo: "https://teamstation.dev/logo.png",
  description:
    "Distributed Engineering OS for building and scaling elite nearshore engineering teams with auditable, AI-assisted evaluation and governance.",

  // Your official address from the footer
  address: {
    "@type": "PostalAddress",
    streetAddress: "One Seaport Square, 77 Sleeper St",
    addressLocality: "Boston",
    addressRegion: "MA",
    postalCode: "02210",
    addressCountry: "US",
  },

  // Demonstrates you are a real, contactable entity
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@teamstation.dev",
    url: "https://teamstation.dev",
  },

  // Links to your social presence
  sameAs: [
    "https://www.linkedin.com/company/teamstation",
    "https://www.teamstation.dev",
    "https://app.teamstation.dev",
    "https://hire.teamstation.dev",
    "https://cto.teamstation.dev",
    "https://cio.teamstation.dev",
    "https://docs.teamstation.dev",
    "https://engineering.teamstation.dev",
    "https://research.teamstation.dev",
    "https://articles.teamstation.dev",
    "https://insights.teamstation.dev",
    "https://partner.teamstation.dev",
    "https://jobs.teamstation.dev",
  ],

  // We are claiming our niche and expertise
  keywords: [
    "nearshore software development",
    "AI hiring",
    "cognitive hiring engine",
    "bias mitigation software hiring",
    "neuro-psychometric AI signals",
    "LATAM software talent",
  ],
} satisfies WithContext<Corporation>;

/**
 * Function to generate a JSON-LD script tag from a schema object.
 * This will be used in the <head> of your pages.
 * @param schema The schema object to serialize.
 * @returns A string representing the <script> tag.
 */
export function generateSchemaScript(schema: object): string {
  return `<script type="application/ld+json">${JSON.stringify(
    schema,
    null,
    2
  )}</script>`;
}
