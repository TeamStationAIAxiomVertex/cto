---
slug: 'atticus'
title: 'From Broken POC to App Store MVP in <3 Months | Atticus Case Study'
description: 'TeamStation AI assembled a nearshore squad that took a non-functional POC and delivered a full web/iOS estate settlement MVP in under 3 months for Atticus.'
clientName: 'Atticus'
industry: 'Estate Settlement & Probate Technology'
summary: 'Shipped a production-ready web and iOS estate settlement MVP in under 3 months, saving an estimated $550,000 in development costs.'
ogImage: '/assets/og/case-study-atticus.png'
canonical: 'https://cto.teamstation.dev/case-studies/atticus'
---

## Executive Summary

Atticus set an ambitious goal: deliver a production‑ready probate and estate‑settlement experience on **web and iOS** under a tight budget and a **three‑month MVP deadline**. TeamStation AI assembled a right‑sized LATAM squad (Senior Frontend & Backend Engineers, Product Manager, and supporting specialists) and shipped an MVP in **under 3 months**, followed by a complete system in **under 6 months**. The iOS app was approved by Apple and released to market.

**Business Impact**

-   **$550,000** estimated development cost savings versus typical alternatives
-   **750** lifetime downloads and **~$100K** estimated lifetime revenue
-   Ongoing enhancements and support as Atticus builds its customer base

---

## The Challenge

-   **Time & budget constraints:** Ship a fully functional system on a lean budget with an MVP in ~90 days.
-   **Inheritance of a broken start:** The team inherited a **non‑functional monolithic proof of concept**.
-   **Stack transition:** Migrate a partially built **Python/Django/GraphQL** API to a stack aligned with team skills, budget, and time‑to‑market: **PHP/Laravel, Vue.js, MySQL**, with **Swift** for iOS.
-   **Regulatory tone & data sensitivity:** Estate workflows involve personally identifiable information (PII) and sensitive inventories—security and auditability were table stakes.

---

## Why TeamStation AI

-   **Precision team assembly:** AI‑assisted talent alignment to source senior engineers with prior fintech/legaltech exposure and iOS delivery history.
-   **Speed without chaos:** Structured discovery, rapid work‑plan generation, and validated estimates to make the 3‑ and 6‑month gates achievable.
-   **Nearshore cadence:** Same‑time‑zone collaboration with U.S. stakeholders shortened feedback loops.
-   **Built‑in governance:** MDM‑managed devices, MFA/SSO, least‑privilege access, and pen‑test cycles consistent with SOC 2/ISO‑aligned practices.
-   **Product management backbone:** A Product Manager embedded to translate regulatory constraints into shippable scope and prioritize an iPhone‑first path.

---

## Objectives

Create a **web‑based** and **iPhone‑only** estate‑settlement application that:

-   Guides users through probate administration end‑to‑end.
-   Allows registration and capture of assets, assignment to beneficiaries, and final report generation.
-   Supports paid access with clear value realization and simple pricing.

---

## Solution & Delivery

**Team Composition**

-   **Senior Backend (PHP/Laravel)** — domain modeling, API design, auth, billing.
-   **Senior Frontend (Vue.js)** — responsive UI, state management, accessibility.
-   **iOS (Swift)** — capture flows, offline considerations, camera/photo library.
-   **Product Manager** — scope control, regulatory mapping, release planning.
-   **QA/TestOps (as‑needed)** — CI gating, smoke suites, App Store readiness.

**Architecture Decisions**

-   Shift from the incomplete Python/Django/GraphQL codebase to **Laravel 5.6** with a modular MVC structure for faster iteration and simpler hiring pipelines.
-   **Vue.js** front end for a compact, reactive UI and maintainable component library.
-   **MySQL** for transactional integrity and straightforward reporting.
-   **Swift (iOS)** app dedicated to high‑fidelity asset capture and inventory management.

**Process Highlights**

-   **Discovery & risk framing (Week 0–2):** Map probate workflows, define PII data handling, and lock the MVP scope.
-   **MVP sprint train (Week 2–12):** API foundations, core user journeys, iOS capture, and report generation.
-   **Hardening & scale‑up (Month 4–6):** Payment flows, error handling, test coverage, and App Store submission.
-   **App Store approval & release:** iOS app approved and published to the market.

---

## Technology Stack

-   **Backend:** PHP, Laravel 5.6
-   **Frontend:** Vue.js
-   **Mobile:** Swift (iOS)
-   **Database:** MySQL
-   **Tooling:** Git‑based CI, unit/integration tests, App Store Connect workflows

---

## Security & Compliance Posture

-   **Identity & access:** MFA/SSO and role‑based access controls; least‑privilege data access for sensitive inventories.
-   **Device governance:** MDM‑enforced laptops, patch compliance, and remote‑wipe capability.
-   **Data handling:** Encryption in transit, hashed credentials, environment‑variable secrets management.
-   **Auditability:** Change history, release notes, and incident response playbooks consistent with SOC 2/ISO‑aligned practices.

---

## Outcomes

-   **MVP delivered in <3 months**, complete system in **<6 months**.
-   **Apple App Store approval** and market release.
-   **Cost efficiency:** ~**$550K** in development cost savings versus common alternatives.
-   **Traction:** ~**750** lifetime downloads and **~$100K** projected lifetime revenue (to date).
-   **Continuity:** Ongoing enhancements and production support.

---

## Product Insights (What made it work)

1.  **iPhone‑first was a feature, not a compromise.** Narrowing the initial device surface cut QA complexity and accelerated App Store learning loops.
2.  **Pragmatic stack shift.** Laravel/Vue allowed rapid staffing and velocity; it traded GraphQL’s flexibility for faster delivery and easier onboarding for new engineers.
3.  **Model the paperwork, then the pixels.** Probate has crisp, document‑driven artifacts; encoding those first clarified UX and reporting.
4.  **“Thin slice” billing.** Users realize value when a usable inventory is produced—align pricing and trial triggers to that moment.
5.  **Security from day zero.** Handling PII meant establishing least‑privilege roles and MDM before writing complex features.