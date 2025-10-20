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
  url: "https://cto.teamstation.dev",
  logo: "https://cto.teamstation.dev/logo.png", // Assuming a logo path, we can adjust
  description:
    "The integrated platform for building and scaling elite nearshore engineering teams using proprietary, bias-free AI.",

  // Link to your founder/key researcher's Google Scholar to establish authority.
  // This is a POWERFUL signal of expertise.
  founder: {
    "@type": "Person",
    name: "Your Founder Name", // We can update this
    sameAs: "https://scholar.google.com/citations?user=aNol-ycAAAAJ&hl=en",
  },

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
    email: "support@teamstation.dev", // Example email
    url: "https://cto.teamstation.dev/contact", // Example contact page
  },

  // Links to your social presence
  sameAs: ["https://www.linkedin.com/company/teamstation"],

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
