# CTO Playbook SEO War Plan for cto.teamstation.dev (Finalized V7: Computational Integrity & EEAT Dominance)

## 0) Mission & Constraints

**Objective:** Build **cto.teamstation.dev** into the singular, trusted scientific authority for "nearshore software development," ensuring sustained **Top 10 SERP dominance** across all high-intent, high-value queries.

**Brand topology:**
* **teamstation.dev** (Weblium) = corporate brochure and top-level brand.
* **cto.teamstation.dev** (Google App Builder / Next.js on Cloud Run allowed) = **content + SEO engine** (Playbook, Research, Comparisons, Programmatic SEO, Case Studies, Insights).
* **docs.teamstation.dev** = technical docs.
**Non-negotiables:** Fast pages (Core Web Vitals), rigorous schema, programmatic scaling, and Humanizer pass (NCLA v7).
**Conversion:** Primary CTA = **Book a Demo**. Secondary = Download paper / Request Playbook PDF.

---

## 1) Information Architecture (IA) — URL Map [CANONICAL, VERIFIED SLUGS ONLY]

**Home**
* `/` — Landing: “Nearshore AI Co-Pilot for CTOs”.

**Playbook (pillar content)**
* `/playbook/` — hub.
* `/playbook/nearshore-vs-offshore`.
* `/playbook/bias-free-technical-hiring-axiom-cortex`.
* `/playbook/latam-economics`.
* `/playbook/security-compliance`.
* `/playbook/build-vs-buy`.

**Research (scholarly)**
* `/research/` — hub.
* `/research/axiom-cortex-scientific-foundations`.
* `/research/bias-removal-in-teams`.
* `/research/heuristics-for-ai-driven-interviews`.
* `/research/platforming-nearshore-it-staff-augmentation-industry-book`.

**Comparisons (competitor intercept) [FINAL, EXPLICIT LIST]**
* `/comparisons/` — hub.
* `/comparisons/teamstation-vs-bairesdev`.
* `/comparisons/teamstation-vs-revelo`.
* `/comparisons/teamstation-vs-tecla`.
* `/comparisons/teamstation-vs-unosquare`.
* `/comparisons/teamstation-vs-globant`.
* `/comparisons/teamstation-vs-toptal`.
* `/comparisons/teamstation-vs-andela`.
* `/comparisons/teamstation-vs-terminal`.
* `/comparisons/teamstation-vs-nearsure`.
* `/comparisons/teamstation-vs-parallelstaff`.
* `/comparisons/teamstation-vs-coderslink`.
* `/comparisons/teamstation-vs-kms`.
* `/comparisons/teamstation-vs-devlane`.

**Programmatic SEO (scalable) [VERIFIED CODEBASE STRUCTURE - FINAL SOURCE OF TRUTH]**
* **`/hire/by-role/[slug]`** (Slugs derived from `src/lib/roles.ts` - **21 canonical roles**.)
* **`/hire/by-technology/[slug]`** (Slugs derived from `src/data/sitemap-urls.txt` - **137 canonical technologies**.)
* `/hire/[tech]-engineers-in-[city]` → e.g., `hire/react-engineers-in-guadalajara`.
* `/latam/[country]/[service]` → e.g., `latam/mexico/eor`.

**Proof & Conversion**
* `/case-studies/` (include Currance squad).
* `/insights/`, `/about/`, `/trust/` (security, compliance, SLA), `/contact/` (demo booking).

---

## 2) App Builder Implementation — Data Models (Collections)

Key collections include: `ResearchPaper`, `PlaybookChapter`, `Service`, `Comparison`, `ProgrammaticPage`, and `CaseStudy / InsightPost`.

**PlaybookChapter** fields include: `slug`, `title`, `summary`, `htmlBody`, `readingTimeMinutes`, `faq[{question,answer}]`, `relatedServices[ref]`, `relatedResearch[ref]`.

---

## 3) Routing & Canonical Rules

* URL Routing: `/research/[slug]` → `ResearchPaper` template; `/playbook/[slug]` → `PlaybookChapter` template; `/comparisons/[slug]` → `Comparison` template, etc..
* **Canonicals:** Prefer hub canonicals for overlapping variants (e.g., programmatic → service hub).
* Set **`noindex: true`** on thin/near-duplicate programmatic pages.

---

## 4) Technical SEO Baseline

* **Core Web Vitals:** LCP < 2.0s, CLS < 0.1, INP < 200ms (mobile-first).
* **Metadata:** Titles ≤ 60 chars; Meta descriptions ≤ 160 chars; unique per page.
* **Sitemaps:** `/sitemap.xml` + dynamic sitemap for programmatic pages; include `lastmod`.
* **Internal Linking Mesh:** Every pillar links to relevant services, research, comparisons, and **at least 3 programmatic pages**.

---

## 5) Schema (JSON-LD) — Required Types & EEAT Authorship

Mandatory schema types to be applied based on page template:
* `Organization` (Home/About)
* `Service` (Service/Programmatic service pages)
* `ScholarlyArticle` (Research pages)
* **`FAQPage`** (All Programmatic Pages and Playbook chapters)
* `Product` (or `Service`) on comparison pages
* **`JobPosting` (MANDATORY on all `/hire/by-role/*` pages)**
* **Authorship (EEAT Mandate):** All **Playbook** and **Research** pages must include **Author** and **Reviewed By** schema referencing the authors of the "Platforming the Nearshore IT Staff Augmentation Industry BOOK" (Lonnie McRorey, Dan Diachenko, Carolina Acuña, Julio Leyva, Cas Rodriguez, José Antonio Díaz Marentes).

---

## 6) Editorial Workflow (NCLA v7 & Topical Authority Enforced)

**Pipeline per page:**
1.  Outline / draft
2.  **Topical Map Vetting (NEW):** Validate that content covers at least **5 out of 7** sub-topics for the primary keyword (e.g., for "nearshore software development": Time Zone, Cultural Fit, Cost Structure, Compliance/EOR, Quality Vetting, Tooling/Security, Scalability).
3.  **Transform with NCLA v7 (Humanizer; see Annex A)**
4.  Insert schema/frontmatter
5.  Internal link pass
6.  Publish
7.  Promote (SSRN, LinkedIn, Medium abstracts pointing back).

**Quality gates (blocker if failed):**
* NCLA v7 validators pass (burstiness, syntax diversity, density oscillation, no templated smoothness).
* **At least 6 internal links:** 2 to hubs (Playbook/Research), 2 lateral to same section, 2 to programmatic.
* Schema validates in Rich Results Test.
* Clear CTA placement.

---

## 7) Page Skeletons (Core Constraints)

* **Content Length Floor (Mandate):** **All generated prose must contain a minimum of $\mathbf{800}$ words (excluding spaces).**

* **Playbook/Research Pages (Pillar):** Length $2,500–5,000$ words. **Register:** Semi-Formal. **Audience:** Senior Engineers/CTO. **Purpose:** Justify/Analyze. **Titles Pattern:** `{Primary keyword}: A CTO’s Guide | TeamStation AI`.

* **Programmatic Pages (Roles / Tech / Country):**
    * **Length:** $1,200–1,500$ words.
    * **Structure (PSP Card Architecture):** Content must follow a 4-card layout (approx. 200 words prose per card section) covering:
        1.  **Role/Tech Analysis:** (e.g., What defines a Principal DevOps Engineer/React Engineer).
        2.  **Nearshore Advantage:** (LATAM economic/TZ/cultural fit notes).
        3.  **Vetting/Science (EEAT):** **Mandatory mention of Axiom Cortex™ and Nebula Talent Graph.**
        4.  **De-Risking:** (One-SLA, EOR, Compliance notes).
    * **Mandatory Schema:** **FAQPage** and **Service** (plus **JobPosting** for **all `/hire/by-role/*` pages**).
    * **Internal Links:** Must include links to a Playbook chapter + related Research + 2 other city/tech/role pages ($\ge 6$ total).

---

## 16) Final System Command (Enforceable)

When generating any page content for cto.teamstation.dev:
1.  Use the **Page Skeleton** that matches the target URL.
2.  Populate with concrete mechanisms, trade-offs, and tactics; **include at least one analogy per 2–4 paragraphs**.
3.  Run the prose through **NCLA v7** (Annex A) with the default parameters for the page type; pass validators.
4.  **Keyword Density Constraint:** Maintain the **main keyword phrase density at exactly $\mathbf{2\%}$** across the entire content block to ensure SERP alignment and AI search index compliance.
5.  Emit schema JSON-LD per template (including **Authorship** for pillar content); set metadata and canonical; ensure **≥ 6 internal links**.
6.  Deliver the final, clean prose—no internal notes/tags—ready for publishing.