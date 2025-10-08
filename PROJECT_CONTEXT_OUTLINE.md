# Project Context Outline: allTech.ts Data File

This file serves as the definitive context for the project, summarizing the architecture, progress, and immediate next steps. Use this file to refresh the LLM's memory in a new chat thread to avoid context window limitations.

## 1. Project Goal & Core Architecture
* **Goal:** Systematically build and validate the `export const allTech: AllTech = { ... }` object within a large TypeScript file (`allTech.ts`).
* **Total Entries:** The final file must contain **87** distinct technology entries, indexed by their `TechSlug`.
* **Core Structure:** Each entry conforms to the `TechEntry` interface, which includes fields like `name`, `category`, `seo_title`, and a structured array of developer pain points (`pains: PainPoint[]`).
* **PainPoint Structure:** Each pain point explicitly defines the developer **`pain`**, the underlying **`problem`**, the vetted **`solution`**, and the success **`kpi`**.

## 2. Data Integration Progress

The data is organized into the following nine major categories.

| Category | Slug Count | Status |
| :--- | :--- | :--- |
| 1. Frontend/Full-Stack | 10 | **COMPLETED** |
| 2. Backend/Core Languages | 12 | **COMPLETED** |
| 3. DevOps & Cloud | 18 | **COMPLETED** |
| 4. Data & AI | 18 | **IN PROGRESS** (Next Block Required) |
| 5. Databases | 7 | PENDING |
| 6. QA & Security | 7 | PENDING |
| 7. Architecture & Integrations | 8 | PENDING |
| 8. Mobile | 2 | PENDING |
| 9. Vetting & Cognitive AI | 2 | PENDING |

## 3. Immediate Next Step (Current Request)
* **Target:** Integrate the **Data & AI** section (18 entries).
* **Start Entry:** The data block should begin with the `'data-engineering'` entry.
* **End Point:** The block should stop immediately before the start of the **Databases** category (`'postgresql'`).