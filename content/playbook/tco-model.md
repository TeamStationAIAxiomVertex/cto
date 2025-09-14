---
slug: 'tco-model'
title: 'The Computational Cost & TCO Playbook'
description: 'A CFO-grade analysis of the true Total Cost of Ownership (TCO) of engineering teams, presented in Sandler-style "Computational Cost" cards.'
---

## 1) Seat Cost Delta — Sticker vs Fully-Loaded

**Problem:** U.S. senior salaries look manageable… until benefits, taxes, tools, and overhead land on the P&L.

**Solution:** Replace/augment seats with nearshore seniors at $6,800/mo all-in under one SLA.

**Proof (per seat):**
```
US_FLC = Salary × (1 + burden)
Savings/yr = (US_FLC ÷ 12 − 6,800) × 12
```
*Example:* Salary $120,000, burden 30% → US_FLC $156,000 (=$13,000/mo).
Savings = (13,000 − 6,800) × 12 = **$74,400/yr per seat.**

**Question:** How many seats until this delta funds an entire roadmap line item?

---

## 2) Team Delta — Six Seniors, One Decision

**Problem:** You need a full squad; headcount is frozen.

**Solution:** 6 nearshore seniors under one contract, one invoice, one SLA.

**Proof (team of 6):**
```
Annual savings = 6 × 74,400 = $446,400/yr (using Card #1 math).
```

**Question:** What could you ship with an extra $37,200/mo in engineering oxygen?

---

## 3) Cost of Vacancy — The Invisible Tax

**Problem:** Roles stay open; velocity stalls; opportunity cost compounds.

**Solution:** Bench-ready nearshore talent; start in weeks, not quarters.

**Proof:**
```
Vacancy_Cost = Daily_Value × (TTH_current − TTH_TS)
```
*Example:* $3,000/day product value × (60d − 14d) = **$138,000 not lost.**

**Question:** What did last quarter’s “open req” actually cost your roadmap?

---

## 4) PR “LGTM” Latency — Days Lost to Time Zones

**Problem:** One PR → one day lost; reviews trickle in overnight.

**Solution:** Same-day PR SLAs in your timezone.

**Proof (monthly):**
```
Savings_PR = PRs/mo × Δreview_hours × C_dev_hour
```
*Example:* 120 PRs/mo × (4h − 1h) × $85 = **$30,600/mo recaptured.**

**Question:** How many quarters died waiting for “Looks Good To Me”?

---

## 5) Faster Onboarding — Time-to-Productivity

**Problem:** New engineers take weeks to add useful code.

**Solution:** Playbooked onboarding with nearshore leads embedded in your rituals.

**Proof:**
```
Savings_onboard = H × C_day × ΔTP
```
*Example:* H=6, C_day (US FLC) ≈ $156,000/260 ≈ $600/day, ΔTP=10 days → **$36,000 saved.**

**Question:** What is your measured ΔTP seat-by-seat?

---

## 6) Change-Failure Rate — Fewer Hotfix Fridays

**Problem:** Failed changes burn cash and trust.

**Solution:** Shift-left QA + contract tests + canaries managed by our platform crew.

**Proof (monthly):**
```
Savings_fc = D × (CFR₀ − CFR₁) × C_incident
```
*Example:* D=60 deploys, CFR 8%→4%, C_incident=$12k → **$28,800/mo saved.**

**Question:** Which metric—CFR, MTTR, or both—hurts your renewals more?

---

## 7) Attrition & Replacement — Context Reset Penalty

**Problem:** Offshore night shifts drive churn; you keep paying the knowledge tax.

**Solution:** Same-day schedules + retention ladders + documented runbooks.

**Proof (annual):**
```
Savings_attrition = Team × (rate₀ − rate₁) × C_replace
```
*Example:* Team=12, 20%→12%, C_replace=$25k → **$24,000/yr saved.**

**Question:** How many “new intros” did your squad do this month?

---

## 8) Management Overhead — Meetings You Don’t Need

**Problem:** EMs/PMs spend hours herding vendors across time zones.

**Solution:** Single vendor, single SLA, single cadence.

**Proof (annual):**
```
Savings_mgmt = 12 × (EM_hrs×C_EM + PM_hrs×C_PM) × reduction
```
*Example:* (30h×$120 + 20h×$95) × 12 × 0.5 ≈ **$40,200/yr freed.**

**Question:** What would your EM do with 10 hours/week back?

---

## 9) Compliance & Security — Questionnaire Drag

**Problem:** SOC2/ISO gaps stall enterprise deals.

**Solution:** Built-in SSO/SAML/SCIM, SBOMs, audit trails—operated in-timezone.

**Proof (annual):**
```
Savings_audit = H_audit_saved × C_hour
```
*Example:* 250 hours saved × $110/hr = **$27,500/yr.**

**Question:** Which control is blocking the biggest open opportunity right now?

---

## 10) All-in vs. “All-these-Invoices”

**Problem:** Fragmented vendors → duplicated tools, travel, and shadow staffing.

**Solution:** Consolidate under one SLA at $6,800/mo per senior.

**Proof (annual):**
```
Consolidation_Savings = (Travel + Duplicate_Tools − Credits)
```
*Example:* ($20k + $25k − $8k) = **$37,000/yr.**

**Question:** How many vendors do you really need to ship one roadmap?

---

### Tiny Legend (Variables for Estimation)
`Salary (US)`, `burden` (e.g., 0.30), `US_FLC` (fully loaded), `PRs/mo`, `Δreview_hours`, `C_dev_hour`, `D` (deploys/mo), `CFR₀/CFR₁`, `C_incident`, `H` (hires in wave), `C_day`, `ΔTP`, `Team`, `attrition rates`, `C_replace`, `EM_hrs/PM_hrs`, `C_EM/C_PM`, `reduction`, `H_audit_saved`, `C_hour`, `Travel`, `Duplicate_Tools`, `Credits`.