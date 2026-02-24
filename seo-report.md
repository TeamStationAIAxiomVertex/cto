# SEO Audit Report

Generated: 2026-02-24T14:27:02.174Z

## Summary

- Total routes: 166
- Indexable routes: 166
- Dynamic templates: 7
- Failures: 280
- Warnings: 579
- Thin pages (fail): 37
- Missing schema (fail): 81
- Missing canonical (warn): 44
- Missing metadata (fail): 2
- Missing SEO contract (warn): 166

## Thresholds

- core: 700
- hire: 900
- comparisons: 1200
- research: 1000
- playbook: 1000
- minInternalLinks: 6
- minHubLinks: 2
- minLateralLinks: 2
- minProgrammaticLinks: 2
- minUniqueTermRatio: 0.28
- keywordDensityWarnMin: 0.3
- keywordDensityFailMax: 2.5

## Failing Routes

### /hire/by-country/costa-rica/guatemala

- File: `src/app/hire/by-country/costa-rica/guatemala/page.tsx`
- Words: 0
- Internal links: 0 (hub 0, lateral 0, programmatic 0)
- Schema: no
- Metadata: no
- Canonical: no
- Contract: no
- Fails:
  - [metadata-missing] Missing metadata or generateMetadata export.
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [thin-content] Word count 0 is below minimum 900 for hire pages.
  - [internal-links-low] Only 0 internal links detected. Minimum is 6.
  - [programmatic-thin-noindex-missing] Thin programmatic country+technology page should declare noindex/canonical strategy or be expanded.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [low-unique-ratio] Unique term ratio 0.00 is low; page may be repetitive or template-heavy.
  - [hub-links-low] Only 0 hub links detected. Target is 2+.
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.

### /privacy-policy

- File: `src/app/privacy-policy/page.tsx`
- Words: 574
- Internal links: 2 (hub 2, lateral 0, programmatic 0)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected WebPage|Article|Organization.
  - [thin-content] Word count 574 is below minimum 700 for legal pages.
  - [internal-links-low] Only 2 internal links detected. Minimum is 6.
  - [keyword-density-high] Primary keyword density 3.83% exceeds 2.5% stuffing threshold.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /research/framework-for-measuring-capacity

- File: `src/app/research/framework-for-measuring-capacity/page.tsx`
- Words: 50
- Internal links: 3 (hub 3, lateral 0, programmatic 0)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected ScholarlyArticle|Article.
  - [thin-content] Word count 50 is below minimum 1000 for research pages.
  - [internal-links-low] Only 3 internal links detected. Minimum is 6.
  - [keyword-density-high] Primary keyword density 10.00% exceeds 2.5% stuffing threshold.
- Warnings:
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.

### /terms-of-service

- File: `src/app/terms-of-service/page.tsx`
- Words: 613
- Internal links: 4 (hub 3, lateral 0, programmatic 1)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected WebPage|Article|Organization.
  - [thin-content] Word count 613 is below minimum 700 for legal pages.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
  - [keyword-density-high] Primary keyword density 3.43% exceeds 2.5% stuffing threshold.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /authors/[slug]

- File: `src/app/authors/[slug]/page.tsx`
- Words: 0
- Internal links: 0 (hub 0, lateral 0, programmatic 0)
- Schema: no
- Metadata: no
- Canonical: no
- Contract: no
- Fails:
  - [metadata-missing] Missing metadata or generateMetadata export.
  - [schema-missing] Missing JSON-LD schema injection. Expected WebPage|Article|Organization.
  - [internal-links-low] Only 0 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [hub-links-low] Only 0 hub links detected. Target is 2+.
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.
  - [h1-missing] No <h1> detected in page component.

### /comparisons/deel

- File: `src/app/comparisons/deel/page.tsx`
- Words: 770
- Internal links: 2 (hub 2, lateral 0, programmatic 0)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service|Product.
  - [thin-content] Word count 770 is below minimum 1200 for comparisons pages.
  - [internal-links-low] Only 2 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.

### /comparisons/kms

- File: `src/app/comparisons/kms/page.tsx`
- Words: 817
- Internal links: 3 (hub 2, lateral 0, programmatic 1)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service|Product.
  - [thin-content] Word count 817 is below minimum 1200 for comparisons pages.
  - [internal-links-low] Only 3 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.

### /comparisons/nearsure

- File: `src/app/comparisons/nearsure/page.tsx`
- Words: 906
- Internal links: 4 (hub 3, lateral 0, programmatic 1)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service|Product.
  - [thin-content] Word count 906 is below minimum 1200 for comparisons pages.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.
  - [keyword-density-low] Primary keyword density 0.22% is below 0.3%.

### /research/heuristically-trained-ai

- File: `src/app/research/heuristically-trained-ai/page.tsx`
- Words: 520
- Internal links: 3 (hub 2, lateral 0, programmatic 1)
- Schema: yes
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [thin-content] Word count 520 is below minimum 1000 for research pages.
  - [internal-links-low] Only 3 internal links detected. Minimum is 6.
  - [keyword-density-high] Primary keyword density 4.04% exceeds 2.5% stuffing threshold.
- Warnings:
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.

### /research/hub/axiom-cortex-scientific-report

- File: `src/app/research/hub/axiom-cortex-scientific-report/page.tsx`
- Words: 391
- Internal links: 3 (hub 2, lateral 1, programmatic 0)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected ScholarlyArticle|Article.
  - [thin-content] Word count 391 is below minimum 1000 for research pages.
  - [internal-links-low] Only 3 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 1 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /research/performance-evaluation-framework

- File: `src/app/research/performance-evaluation-framework/page.tsx`
- Words: 972
- Internal links: 4 (hub 2, lateral 1, programmatic 1)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected ScholarlyArticle|Article.
  - [thin-content] Word count 972 is below minimum 1000 for research pages.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 1 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /research/performance-metrics-in-ai-age

- File: `src/app/research/performance-metrics-in-ai-age/page.tsx`
- Words: 609
- Internal links: 3 (hub 2, lateral 0, programmatic 1)
- Schema: yes
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [thin-content] Word count 609 is below minimum 1000 for research pages.
  - [internal-links-low] Only 3 internal links detected. Minimum is 6.
  - [keyword-density-high] Primary keyword density 4.93% exceeds 2.5% stuffing threshold.
- Warnings:
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.

### /research/technical-talent-evaluation-system

- File: `src/app/research/technical-talent-evaluation-system/page.tsx`
- Words: 60
- Internal links: 1 (hub 0, lateral 1, programmatic 0)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected ScholarlyArticle|Article.
  - [thin-content] Word count 60 is below minimum 1000 for research pages.
  - [internal-links-low] Only 1 internal links detected. Minimum is 6.
- Warnings:
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [hub-links-low] Only 0 hub links detected. Target is 2+.
  - [lateral-links-low] Only 1 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.
  - [h1-missing] No <h1> detected in page component.

### /sitemap

- File: `src/app/sitemap/page.tsx`
- Words: 123
- Internal links: 0 (hub 0, lateral 0, programmatic 0)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected WebPage|Article|Organization.
  - [thin-content] Word count 123 is below minimum 700 for other pages.
  - [keyword-density-high] Primary keyword density 4.88% exceeds 2.5% stuffing threshold.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).

### /technical-interview-evaluation

- File: `src/app/technical-interview-evaluation/page.tsx`
- Words: 40
- Internal links: 0 (hub 0, lateral 0, programmatic 0)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected WebPage|Article|Organization.
  - [thin-content] Word count 40 is below minimum 700 for other pages.
  - [internal-links-low] Only 0 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [hub-links-low] Only 0 hub links detected. Target is 2+.
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.
  - [h1-missing] No <h1> detected in page component.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /about

- File: `src/app/about/page.tsx`
- Words: 850
- Internal links: 3 (hub 2, lateral 0, programmatic 1)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected WebPage|Article|Organization.
  - [internal-links-low] Only 3 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.

### /comparisons/[vendor]

- File: `src/app/comparisons/[vendor]/page.tsx`
- Words: 280
- Internal links: 3 (hub 2, lateral 0, programmatic 1)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service|Product.
  - [internal-links-low] Only 3 internal links detected. Minimum is 6.
- Warnings:
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.

### /comparisons/andela

- File: `src/app/comparisons/andela/page.tsx`
- Words: 890
- Internal links: 3 (hub 2, lateral 0, programmatic 1)
- Schema: yes
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [thin-content] Word count 890 is below minimum 1200 for comparisons pages.
  - [internal-links-low] Only 3 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.
  - [keyword-density-low] Primary keyword density 0.22% is below 0.3%.

### /comparisons/bairesdev

- File: `src/app/comparisons/bairesdev/page.tsx`
- Words: 1125
- Internal links: 4 (hub 3, lateral 0, programmatic 1)
- Schema: yes
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [thin-content] Word count 1125 is below minimum 1200 for comparisons pages.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.

### /comparisons/coderslink

- File: `src/app/comparisons/coderslink/page.tsx`
- Words: 207
- Internal links: 2 (hub 2, lateral 0, programmatic 0)
- Schema: yes
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [thin-content] Word count 207 is below minimum 1200 for comparisons pages.
  - [internal-links-low] Only 2 internal links detected. Minimum is 6.
- Warnings:
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.

### /comparisons/devlane

- File: `src/app/comparisons/devlane/page.tsx`
- Words: 216
- Internal links: 2 (hub 2, lateral 0, programmatic 0)
- Schema: yes
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [thin-content] Word count 216 is below minimum 1200 for comparisons pages.
  - [internal-links-low] Only 2 internal links detected. Minimum is 6.
- Warnings:
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.

### /comparisons/faq

- File: `src/app/comparisons/faq/page.tsx`
- Words: 529
- Internal links: 2 (hub 1, lateral 0, programmatic 1)
- Schema: yes
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [thin-content] Word count 529 is below minimum 1200 for comparisons pages.
  - [internal-links-low] Only 2 internal links detected. Minimum is 6.
- Warnings:
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [hub-links-low] Only 1 hub links detected. Target is 2+.
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.

### /comparisons/globalsquad

- File: `src/app/comparisons/globalsquad/page.tsx`
- Words: 878
- Internal links: 2 (hub 2, lateral 0, programmatic 0)
- Schema: yes
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [thin-content] Word count 878 is below minimum 1200 for comparisons pages.
  - [internal-links-low] Only 2 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.
  - [keyword-density-low] Primary keyword density 0.23% is below 0.3%.

### /comparisons/globant

- File: `src/app/comparisons/globant/page.tsx`
- Words: 897
- Internal links: 3 (hub 2, lateral 0, programmatic 1)
- Schema: yes
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [thin-content] Word count 897 is below minimum 1200 for comparisons pages.
  - [internal-links-low] Only 3 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /comparisons/howdy

- File: `src/app/comparisons/howdy/page.tsx`
- Words: 2159
- Internal links: 4 (hub 4, lateral 0, programmatic 0)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service|Product.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [low-unique-ratio] Unique term ratio 0.25 is low; page may be repetitive or template-heavy.
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.

### /comparisons/new-gen-nearshore

- File: `src/app/comparisons/new-gen-nearshore/page.tsx`
- Words: 601
- Internal links: 5 (hub 5, lateral 0, programmatic 0)
- Schema: yes
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [thin-content] Word count 601 is below minimum 1200 for comparisons pages.
  - [internal-links-low] Only 5 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /comparisons/parallelstaff

- File: `src/app/comparisons/parallelstaff/page.tsx`
- Words: 880
- Internal links: 3 (hub 2, lateral 0, programmatic 1)
- Schema: yes
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [thin-content] Word count 880 is below minimum 1200 for comparisons pages.
  - [internal-links-low] Only 3 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.
  - [keyword-density-low] Primary keyword density 0.23% is below 0.3%.

### /comparisons/revelo

- File: `src/app/comparisons/revelo/page.tsx`
- Words: 921
- Internal links: 2 (hub 2, lateral 0, programmatic 0)
- Schema: yes
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [thin-content] Word count 921 is below minimum 1200 for comparisons pages.
  - [internal-links-low] Only 2 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.
  - [keyword-density-low] Primary keyword density 0.22% is below 0.3%.

### /comparisons/tecla

- File: `src/app/comparisons/tecla/page.tsx`
- Words: 877
- Internal links: 3 (hub 2, lateral 0, programmatic 1)
- Schema: yes
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [thin-content] Word count 877 is below minimum 1200 for comparisons pages.
  - [internal-links-low] Only 3 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.

### /comparisons/terminal

- File: `src/app/comparisons/terminal/page.tsx`
- Words: 882
- Internal links: 3 (hub 2, lateral 0, programmatic 1)
- Schema: yes
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [thin-content] Word count 882 is below minimum 1200 for comparisons pages.
  - [internal-links-low] Only 3 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /comparisons/toptal

- File: `src/app/comparisons/toptal/page.tsx`
- Words: 799
- Internal links: 2 (hub 2, lateral 0, programmatic 0)
- Schema: yes
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [thin-content] Word count 799 is below minimum 1200 for comparisons pages.
  - [internal-links-low] Only 2 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.
  - [keyword-density-low] Primary keyword density 0.25% is below 0.3%.

### /comparisons/unosquare

- File: `src/app/comparisons/unosquare/page.tsx`
- Words: 848
- Internal links: 2 (hub 2, lateral 0, programmatic 0)
- Schema: yes
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [thin-content] Word count 848 is below minimum 1200 for comparisons pages.
  - [internal-links-low] Only 2 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.

### /hire/by-country

- File: `src/app/hire/by-country/page.tsx`
- Words: 730
- Internal links: 8 (hub 7, lateral 0, programmatic 1)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [thin-content] Word count 730 is below minimum 900 for hire pages.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.

### /hire/by-country/argentina/angular

- File: `src/app/hire/by-country/argentina/angular/page.tsx`
- Words: 1082
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/argentina/go

- File: `src/app/hire/by-country/argentina/go/page.tsx`
- Words: 1096
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/argentina/java

- File: `src/app/hire/by-country/argentina/java/page.tsx`
- Words: 1091
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/argentina/net

- File: `src/app/hire/by-country/argentina/net/page.tsx`
- Words: 1077
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/argentina/vue

- File: `src/app/hire/by-country/argentina/vue/page.tsx`
- Words: 1107
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/chile/angular

- File: `src/app/hire/by-country/chile/angular/page.tsx`
- Words: 1074
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/chile/go

- File: `src/app/hire/by-country/chile/go/page.tsx`
- Words: 1093
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/chile/java

- File: `src/app/hire/by-country/chile/java/page.tsx`
- Words: 1088
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/chile/net

- File: `src/app/hire/by-country/chile/net/page.tsx`
- Words: 1074
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/chile/nextjs

- File: `src/app/hire/by-country/chile/nextjs/page.tsx`
- Words: 1104
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/chile/node

- File: `src/app/hire/by-country/chile/node/page.tsx`
- Words: 1096
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/chile/python

- File: `src/app/hire/by-country/chile/python/page.tsx`
- Words: 1183
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/chile/react

- File: `src/app/hire/by-country/chile/react/page.tsx`
- Words: 1118
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/chile/vue

- File: `src/app/hire/by-country/chile/vue/page.tsx`
- Words: 1109
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/costa-rica/angular

- File: `src/app/hire/by-country/costa-rica/angular/page.tsx`
- Words: 968
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/costa-rica/go

- File: `src/app/hire/by-country/costa-rica/go/page.tsx`
- Words: 991
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/costa-rica/java

- File: `src/app/hire/by-country/costa-rica/java/page.tsx`
- Words: 996
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/costa-rica/net

- File: `src/app/hire/by-country/costa-rica/net/page.tsx`
- Words: 989
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/costa-rica/nextjs

- File: `src/app/hire/by-country/costa-rica/nextjs/page.tsx`
- Words: 1003
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/costa-rica/node

- File: `src/app/hire/by-country/costa-rica/node/page.tsx`
- Words: 999
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/costa-rica/python

- File: `src/app/hire/by-country/costa-rica/python/page.tsx`
- Words: 988
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/costa-rica/react

- File: `src/app/hire/by-country/costa-rica/react/page.tsx`
- Words: 979
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/costa-rica/vue

- File: `src/app/hire/by-country/costa-rica/vue/page.tsx`
- Words: 993
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/ecuador/angular

- File: `src/app/hire/by-country/ecuador/angular/page.tsx`
- Words: 1076
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/ecuador/go

- File: `src/app/hire/by-country/ecuador/go/page.tsx`
- Words: 1095
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/ecuador/java

- File: `src/app/hire/by-country/ecuador/java/page.tsx`
- Words: 1090
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/ecuador/net

- File: `src/app/hire/by-country/ecuador/net/page.tsx`
- Words: 1076
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/ecuador/nextjs

- File: `src/app/hire/by-country/ecuador/nextjs/page.tsx`
- Words: 1106
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/ecuador/node

- File: `src/app/hire/by-country/ecuador/node/page.tsx`
- Words: 1098
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/ecuador/python

- File: `src/app/hire/by-country/ecuador/python/page.tsx`
- Words: 1183
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/ecuador/react

- File: `src/app/hire/by-country/ecuador/react/page.tsx`
- Words: 1123
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/ecuador/vue

- File: `src/app/hire/by-country/ecuador/vue/page.tsx`
- Words: 1111
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/peru/angular

- File: `src/app/hire/by-country/peru/angular/page.tsx`
- Words: 1074
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/peru/go

- File: `src/app/hire/by-country/peru/go/page.tsx`
- Words: 1093
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/peru/java

- File: `src/app/hire/by-country/peru/java/page.tsx`
- Words: 1088
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/peru/net

- File: `src/app/hire/by-country/peru/net/page.tsx`
- Words: 1074
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/peru/nextjs

- File: `src/app/hire/by-country/peru/nextjs/page.tsx`
- Words: 1104
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/peru/node

- File: `src/app/hire/by-country/peru/node/page.tsx`
- Words: 1096
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/peru/python

- File: `src/app/hire/by-country/peru/python/page.tsx`
- Words: 1181
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/peru/react

- File: `src/app/hire/by-country/peru/react/page.tsx`
- Words: 1121
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/peru/vue

- File: `src/app/hire/by-country/peru/vue/page.tsx`
- Words: 1109
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/uruguay/angular

- File: `src/app/hire/by-country/uruguay/angular/page.tsx`
- Words: 951
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/uruguay/go

- File: `src/app/hire/by-country/uruguay/go/page.tsx`
- Words: 966
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/uruguay/java

- File: `src/app/hire/by-country/uruguay/java/page.tsx`
- Words: 987
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/uruguay/net

- File: `src/app/hire/by-country/uruguay/net/page.tsx`
- Words: 983
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/uruguay/nextjs

- File: `src/app/hire/by-country/uruguay/nextjs/page.tsx`
- Words: 979
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/uruguay/node

- File: `src/app/hire/by-country/uruguay/node/page.tsx`
- Words: 981
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-country/uruguay/python

- File: `src/app/hire/by-country/uruguay/python/page.tsx`
- Words: 938
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/uruguay/react

- File: `src/app/hire/by-country/uruguay/react/page.tsx`
- Words: 975
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-country/uruguay/vue

- File: `src/app/hire/by-country/uruguay/vue/page.tsx`
- Words: 978
- Internal links: 4 (hub 2, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /hire/by-role

- File: `src/app/hire/by-role/page.tsx`
- Words: 772
- Internal links: 8 (hub 6, lateral 1, programmatic 1)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [thin-content] Word count 772 is below minimum 900 for hire pages.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 1 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.

### /hire/by-technology

- File: `src/app/hire/by-technology/page.tsx`
- Words: 798
- Internal links: 8 (hub 6, lateral 0, programmatic 2)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [thin-content] Word count 798 is below minimum 900 for hire pages.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /hire/by-technology/[slug]

- File: `src/app/hire/by-technology/[slug]/page.tsx`
- Words: 121
- Internal links: 0 (hub 0, lateral 0, programmatic 0)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected Service.
  - [internal-links-low] Only 0 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [hub-links-low] Only 0 hub links detected. Target is 2+.
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.
  - [h1-missing] No <h1> detected in page component.

### /platform

- File: `src/app/platform/page.tsx`
- Words: 2235
- Internal links: 3 (hub 1, lateral 2, programmatic 0)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected WebPage|Article|Organization.
  - [internal-links-low] Only 3 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [low-unique-ratio] Unique term ratio 0.24 is low; page may be repetitive or template-heavy.
  - [hub-links-low] Only 1 hub links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.

### /playbook

- File: `src/app/playbook/page.tsx`
- Words: 516
- Internal links: 6 (hub 3, lateral 0, programmatic 3)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected WebPage.
  - [thin-content] Word count 516 is below minimum 1000 for playbook pages.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /playbook/cto-outsourcing-risk-mitigation

- File: `src/app/playbook/cto-outsourcing-risk-mitigation/page.tsx`
- Words: 2415
- Internal links: 6 (hub 5, lateral 0, programmatic 1)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected WebPage|Article|Organization.
  - [keyword-density-high] Primary keyword density 3.15% exceeds 2.5% stuffing threshold.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [low-unique-ratio] Unique term ratio 0.26 is low; page may be repetitive or template-heavy.
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.

### /playbook/latam-economics

- File: `src/app/playbook/latam-economics/page.tsx`
- Words: 1962
- Internal links: 3 (hub 2, lateral 0, programmatic 1)
- Schema: no
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected WebPage|Article|Organization.
  - [internal-links-low] Only 3 internal links detected. Minimum is 6.
- Warnings:
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [low-unique-ratio] Unique term ratio 0.24 is low; page may be repetitive or template-heavy.
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.
  - [keyword-density-low] Primary keyword density 0.20% is below 0.3%.

### /playbook/new-gen-nearshore

- File: `src/app/playbook/new-gen-nearshore/page.tsx`
- Words: 571
- Internal links: 5 (hub 5, lateral 0, programmatic 0)
- Schema: yes
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [thin-content] Word count 571 is below minimum 1000 for playbook pages.
  - [internal-links-low] Only 5 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /pricing

- File: `src/app/pricing/page.tsx`
- Words: 668
- Internal links: 3 (hub 2, lateral 1, programmatic 0)
- Schema: yes
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [thin-content] Word count 668 is below minimum 700 for core pages.
  - [internal-links-low] Only 3 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 1 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.

### /process

- File: `src/app/process/page.tsx`
- Words: 1802
- Internal links: 4 (hub 2, lateral 1, programmatic 1)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected WebPage|Article|Organization.
  - [internal-links-low] Only 4 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [low-unique-ratio] Unique term ratio 0.27 is low; page may be repetitive or template-heavy.
  - [lateral-links-low] Only 1 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.
  - [keyword-density-low] Primary keyword density 0.22% is below 0.3%.

### /research/axiom-cortex-scientific-report

- File: `src/app/research/axiom-cortex-scientific-report/page.tsx`
- Words: 1216
- Internal links: 3 (hub 2, lateral 1, programmatic 0)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected ScholarlyArticle|Article.
  - [internal-links-low] Only 3 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 1 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /research/performance-evaluation-report-example

- File: `src/app/research/performance-evaluation-report-example/page.tsx`
- Words: 751
- Internal links: 3 (hub 2, lateral 0, programmatic 1)
- Schema: yes
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [thin-content] Word count 751 is below minimum 1000 for research pages.
  - [internal-links-low] Only 3 internal links detected. Minimum is 6.
- Warnings:
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 1 programmatic links detected. Target is 2+ where applicable.

### /research/platforming-nearshore-book

- File: `src/app/research/platforming-nearshore-book/page.tsx`
- Words: 923
- Internal links: 2 (hub 2, lateral 0, programmatic 0)
- Schema: yes
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [thin-content] Word count 923 is below minimum 1000 for research pages.
  - [internal-links-low] Only 2 internal links detected. Minimum is 6.
- Warnings:
  - [lastmod-missing] Missing lastModified/dateModified signal for a content page.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.

### /services/talent-onboarding

- File: `src/app/services/talent-onboarding/page.tsx`
- Words: 738
- Internal links: 5 (hub 4, lateral 1, programmatic 0)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected WebPage|Article|Organization.
  - [internal-links-low] Only 5 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 1 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.
  - [keyword-density-low] Primary keyword density 0.00% is below 0.3%.

### /trust

- File: `src/app/trust/page.tsx`
- Words: 836
- Internal links: 5 (hub 4, lateral 1, programmatic 0)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected WebPage|Article|Organization.
  - [internal-links-low] Only 5 internal links detected. Minimum is 6.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 1 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.

### /case-studies

- File: `src/app/case-studies/page.tsx`
- Words: 777
- Internal links: 7 (hub 4, lateral 0, programmatic 3)
- Schema: no
- Metadata: yes
- Canonical: no
- Contract: no
- Fails:
  - [schema-missing] Missing JSON-LD schema injection. Expected WebPage|Article|Organization.
- Warnings:
  - [canonical-missing] Missing canonical signal in page metadata/config.
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.

### /case-studies/[slug]

- File: `src/app/case-studies/[slug]/page.tsx`
- Words: 299
- Internal links: 2 (hub 2, lateral 0, programmatic 0)
- Schema: yes
- Metadata: yes
- Canonical: yes
- Contract: no
- Fails:
  - [internal-links-low] Only 2 internal links detected. Minimum is 6.
- Warnings:
  - [contract-missing] Missing seo content contract declaration (defineSeoContentContract).
  - [lateral-links-low] Only 0 lateral links detected. Target is 2+.
  - [programmatic-links-low] Only 0 programmatic links detected. Target is 2+ where applicable.

... 62 more failing routes omitted. See `seo-report.json`.

## Warning-only Routes (sample)

- `/hire/by-role/[slug]` (contract-missing, lateral-links-low)
- `/hire/by-team-topologies` (canonical-missing, contract-missing, lateral-links-low)
- `/playbook/tco-model` (canonical-missing, lastmod-missing, contract-missing, low-unique-ratio, programmatic-links-low, keyword-density-low)
- `/services/integrated-services` (canonical-missing, contract-missing, lateral-links-low, programmatic-links-low)
