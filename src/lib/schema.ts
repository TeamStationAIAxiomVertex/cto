// schema-dts types are used for reference but the object is typed as a plain record
// so we can add valid schema.org fields (audience, knowsAbout, etc.) not yet in schema-dts
type SchemaRecord = Record<string, unknown>;

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
  logo: {
    "@type": "ImageObject",
    url: "https://teamstation.dev/logo.svg",
    width: "200",
    height: "200",
  },
  image: {
    "@type": "ImageObject",
    url: "https://teamstation.dev/logo.svg",
  },
  description:
    "Distributed Engineering OS for US CTOs and CIOs building and scaling elite nearshore engineering teams with auditable, AI-assisted evaluation, governed delivery, and compliance infrastructure.",
  foundingDate: "2020",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },

  // Target audience signal for search and AI engines
  audience: {
    "@type": "Audience",
    audienceType: "Chief Technology Officer, Chief Information Officer, VP of Engineering, Technology Executive",
  },

  // Topical authority signals for AI bots and semantic search
  knowsAbout: [
    "nearshore software engineering",
    "distributed engineering teams",
    "technical talent evaluation",
    "AI-powered hiring",
    "DevOps governance",
    "software team management",
    "CTO strategy",
    "engineering operating systems",
    "LATAM technology talent",
    "cognitive assessment for engineers",
    "nearshore staffing",
    "engineering compliance",
    "team topology",
    "CIO technology leadership",
  ],

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
    areaServed: "US",
    availableLanguage: "English",
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

  keywords: [
    "nearshore software development",
    "AI hiring",
    "cognitive hiring engine",
    "bias mitigation software hiring",
    "neuro-psychometric AI signals",
    "LATAM software talent",
    "CTO nearshore platform",
    "distributed engineering OS",
  ],
} satisfies SchemaRecord;

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
