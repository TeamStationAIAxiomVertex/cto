---
slug: 'rmj-technologies'
title: 'Scaling to 15,000 Users: A Monolith Rescue Case Study | RMJ Technologies'
description: "See how TeamStation AI's nearshore squad stabilized a fragile monolith for RMJ Technologies, enabling scale to 15,000 users and multi-million dollar growth."
clientName: 'RMJ Technologies'
industry: 'Automotive Fleet Optimization'
summary: 'Stabilized a monolithic platform and launched a microservices program, scaling to 15,000 users and enabling multi-million-dollar revenue expansion.'
canonical: 'https://cto.teamstation.dev/case-studies/rmj-technologies'
ogImage:
  src:
    url: "https://images.unsplash.com/photo-1617137896784-2202ba45cd74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxkcml2ZXIlMjB0ZWNobm9sb2dpZXMlMjB8ZW58MHx8fHwxNzU5Mjg1MjAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  aiHint: "fleet trucks"
techStack:
  - name: 'C#/.NET'
    link: '/hire/by-technology'
  - name: 'Vue.js'
    link: '/hire/by-technology'
  - name: 'Microservices'
    link: '/hire/by-role/backend-services'
  - name: 'SQL Server'
    link: '/hire/by-role/data-engineering-analytics'
---

## Executive Summary

RMJ Technologies, a North American fleet‑optimization provider, needed to stabilize a semi‑functional monolithic platform built offshore, restore on‑time behavior‑based driver training, and scale onboarding for rapid growth. TeamStation AI assembled a dedicated nearshore squad (Senior Frontend, Backend, QA, UX/UI) with Delivery and Product Management included, refactored critical modules, and launched a progressive microservices program that unblocked onboarding and reporting at scale. The platform is now scaling toward 15,000 users, positioning RMJ for multi‑million‑dollar revenue expansion.

---

## Client Snapshot

-   Industry: Automotive — Fleet Optimization & Predictive Coaching (Behavior‑Based Automated Driver Training)
-   Headquarters: San Diego, CA
-   Platforms: Web SaaS for enterprise fleets; integrations with telematics (GeoTab)

---

## The Challenge

-   Budget & reliability: Operate within a lean budget while stabilizing a semi‑functional platform built in India.
-   Documentation deficit: Minimal architectural documentation; unclear service boundaries.
-   Monolith bottlenecks: Onboarding failures and delayed scheduled driver training due to tightly coupled modules and shared database constraints.
-   Reporting pressure: Stakeholder demand for faster, more granular reporting across large tenant deployments.

---

## Why TeamStation AI (Nearshore IT Copilot)

-   Precision team assembly: AI‑assisted selection of senior engineers with telematics, .NET, and Vue experience; proven large‑tenant SaaS history.
-   Delivery discipline: Embedded Delivery Manager and Product Manager (included) for scope control, roadmap clarity, and outcome accountability.
-   Time‑zone velocity: Same‑day iteration with U.S. leadership; faster decision loops, fewer handoff losses.
-   Built-in governance: MDM‑managed devices, MFA/SSO, least‑privilege access, pen‑testing cadence, and SOC 2/ISO‑aligned practices.
-   Continuity & scale: An elastic bench to surge for peak releases while maintaining core team cohesion.

---

## Objectives

1.  Modernize architecture: Evolve from a fragile monolith to a microservices‑oriented design supporting large‑scale onboarding.
2.  Restore training reliability: Ensure on‑time, policy‑compliant automated driver training schedules.
3.  Unlock reporting: Deliver fast, accurate, role‑aware reporting for enterprise stakeholders.
4.  Reduce operational risk: Improve observability, fault isolation, and change safety (CI/CD, rollbacks).

---

## Solution & Delivery

Team Composition

-   Senior Backend Engineers (C#/.NET, SQL Server, LINQ)
-   Senior Frontend Engineers (Vue.js, modern JS)
-   QA Engineering (functional, regression, performance)
-   UX/UI for workflow clarity and safety‑critical interaction design
-   Delivery Manager & Product Manager (included)

Key Architecture Decisions

-   Domain boundaries:
    -   *Tenant & User Management* — isolation and provisioning flows for large fleets.
    -   *Training Orchestrator* — independent scheduler with retry/backoff and idempotent jobs to guarantee on‑time driver training.
    -   *Telemetry Ingestion* (GeoTab) — buffered ingestion and normalization to decouple real‑time events from reporting loads.
    -   *Reporting/Analytics* — read‑optimized patterns to avoid monolith write contention.
-   Technology baseline:
    -   Server: C# and .NET (.NET Framework base with progressive adoption of .NET‑based microservices).
    -   Data: SQL Server with query tuning, indexing strategy, and partitioning plan for scale.
    -   Frontend: Vue.js SPA, gradually retiring legacy jQuery while preserving critical flows.
    -   Integration: Stable adapters for GeoTab; message/queueing for asynchronous jobs.
    -   Ops: CI/CD pipelines, environment parity, feature flags, and safe rollback playbooks.

---

## Outcomes

-   Platform stabilized; training punctuality restored — scheduled driver training is issued on time, protecting compliance.
-   Refactor complete for priority modules; microservices program in flight — reliability and isolation improved without downtime.
-   Scalability unlocked — onboarding progressing toward 15,000 users, enabling multi‑million‑USD revenue.
-   Stakeholder reporting accelerated — faster dashboards and exports for enterprise clients.
-   Operational risk reduced — improved observability, lower incident frequency, and safer deploys.
---

:::NCLA-Humanizer
**From Problem to Proof:** These case studies show how vetted LATAM engineers cut costs, improved velocity, and built CFO trust.  
:::

**Explore More:**  
- [Case Studies Hub](/case-studies)  
- [Comparisons Hub](/comparisons)  
- [Hire by Country](/hire/by-country)

---

### Further Reading
- [CTO Playbook Hub](/playbook/hub)
- [Research Hub](/research/hub)
- [Hire Developers in Mexico](/hire/by-country/mexico)
