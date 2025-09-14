---
slug: 'tco-model'
title: 'The Complete CFO-Ready TCO Model for Nearshore Engineering'
description: 'A detailed, CFO-grade Total Cost of Ownership (TCO) model to compare a multi-vendor offshore setup vs. TeamStation AI’s single-SLA nearshore platform.'
---

## 1. Side-by-Side Annual TCO Model

This model provides a comprehensive comparison between a typical multi-vendor/offshore setup and TeamStation AI's single-SLA, all-inclusive platform. It accounts for direct fees as well as the critical "hidden taxes" (management overhead, quality risk, delays) that are often missed in simpler analyses.

### Annual TCO (Current Vendor)
`Annual_TCO(current) = Direct_Fees + Mgmt_Overhead + Quality_Risk + Delay_Tax + Compliance_Cost + Travel_Tooling - Attrition_Savings`

### Annual TCO (TeamStation AI Single SLA)
`Annual_TCO(teamstation) = SLA_Fee + Residual_Mgmt + Residual_Risk + Transition_Amort - (Savings_fc + Savings_onboard + Savings_cloud + Savings_audit + Benefit_cash + Benefit_denial)`

### Key Financial Metrics
- **Annual Savings** = `Annual_TCO(current) - Annual_TCO(teamstation)`
- **Return on Investment (ROI)** = `Annual_Savings / (SLA_Fee + Transition_Amort)`
- **Payback Period (Months)** = `TransitionCost / (Annual_Savings / 12)`
- **Net Present Value (36 months)** = `Σ (Monthly_Savings / (1+r)^m) - TransitionCost`

---

## 2. Line-by-Line Formula Breakdown

Here is how each component of the TCO model is calculated.

| Category                      | Formula                                                                                                |
| :---------------------------- | :----------------------------------------------------------------------------------------------------- |
| **Direct & Visible Fees**     | `Direct_Fees = (hourly_rate × hours/mo × 12)` or `(seat_rate × seats × 12)`                             |
|                               | `SLA_Fee = base_fee + (per_seat_fee × seats)` (TeamStation's single price)                             |
| **Internal Mgmt Overhead**    | `Mgmt_Overhead = 12 × [(EM_hours/mo × C_EM) + ...]`                                                    |
|                               | `Residual_Mgmt = Mgmt_Overhead × β_mgmt` (where `β_mgmt` is the fraction remaining, ≈0.25–0.4)          |
| **Quality & Incident Risk**   | `Quality_Risk = D × CFR_current × C_incident`                                                          |
|                               | `Residual_Risk = D × CFR_TS × C_incident` (CFR_TS is TeamStation's lower Change Failure Rate)          |
| **Time-to-Productivity Tax**  | `Delay_Tax = PRs/mo × Δreview_hours × C_dev_hour × 12`                                                 |
| **Churn/Attrition Cost**      | `Attrition_Cost = team_size × (attrition_rate_current - attrition_rate_TS) × C_replace`                 |
| **Compliance & Audit Cost**   | `Compliance_Cost = (H_audit_current - H_audit_TS) × C_hour`                                            |
| **Travel & Tooling**          | `Travel_Tooling = annual_travel + duplicate_tool_licenses - consolidated_tool_credits`                 |
| **Transition Costs**          | `Transition_Amort = TransitionCost / amort_months` (Amortized over 6-12 months)                         |
| **Consolidated Savings**      | A sum of savings from reduced change failure (`Savings_fc`), faster onboarding (`Savings_onboard`), etc. |

---

## 3. Minimal Variable Checklist for Finance

To make this actionable, here is the minimum set of variables your finance team needs to plug in.

| Category               | Variables                                                                   |
| :--------------------- | :-------------------------------------------------------------------------- |
| **Seats & Rates**      | `seats`, `seat_rate` (or `hourly_rate`, `hours/mo`)                         |
| **Management Time**    | `EM_hours/mo`, `PM_hours/mo`, `SecEng_hours/mo`, `C_EM`, `C_PM`, `C_Sec`      |
| **DORA/Risk Metrics**  | `D` (deploys/mo), `CFR_current`, `C_incident`                               |
| **Onboarding**         | `H` (new hires), `C_day`, `ΔTP` (days saved)                                |
| **Code-Review Latency**| `PRs/mo`, `review_hours_current`, `review_hours_TS`, `C_dev_hour`           |
| **Attrition**          | `team_size`, `attrition_rate_current`, `attrition_rate_TS`, `C_replace`     |
| **Compliance & Cloud** | `H_audit_current`, `H_audit_TS`, `C_hour`, `p_cloud`, `S_cloud`              |
| **Revenue & Cash**     | `R_m`, `r_capital`, `Δcash_days`, `Δdenial`                                 |
| **Ops Extras**         | `annual_travel`, `duplicate_tool_licenses`                                  |
| **Transition**         | `TransitionCost`, `amort_months`                                            |
| **TeamStation Inputs** | `base_fee`, `per_seat_fee`, `β_mgmt`, `CFR_TS`                                |

---

## 4. Worked Example (Illustrative)

This example demonstrates the model's flow. Swap in your own numbers to see the specific financial impact for your organization.

### Assumptions
- **Team:** 12 seats
- **Current Vendor Rate:** $7,500/seat/mo
- **TeamStation Rate:** $6,000/seat/mo + $60k base fee
- **Management Overhead:** 40 EM hrs + 30 PM hrs/mo
- **Risk Profile:** 60 deploys/mo, 8% CFR (current) vs. 3% (TS)
- **Code Review:** 4-hour improvement per PR
- **Transition:** $120k cost, amortized over 12 months

### TCO Calculation

| Metric                       | Current Vendor TCO                                                                  | TeamStation TCO                                                                     |
| :--------------------------- | :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| **Direct Fees**              | $1,080,000/yr                                                                       | $924,000/yr (`SLA_Fee`)                                                             |
| **Mgmt Overhead**            | +$101,000/yr                                                                        | +$35,000/yr (`Residual_Mgmt`)                                                       |
| **Quality Risk**             | +$69,000/yr                                                                         | +$26,000/yr (`Residual_Risk`)                                                       |
| **Delay Tax**                | +$844,000/yr                                                                        | $0 (Included in Savings)                                                            |
| **Compliance Cost**          | +$20,000/yr                                                                         | $0 (Included in Savings)                                                            |
| **Travel & Tooling**         | +$35,000/yr                                                                         | $0 (Consolidated)                                                                   |
| **Attrition Savings**        | -$30,000/yr                                                                         | $0 (Accounted for in lower rate)                                                    |
| **Transition Amortization**  | $0                                                                                  | +$120,000/yr                                                                        |
| **Other Savings**            | $0                                                                                  | -$320,000/yr                                                                        |
| **Total Annual TCO**         | <span style="color: #f87171; font-weight: bold;">$2,119,000</span>                   | <span style="color: #4ade80; font-weight: bold;">$785,000</span>                     |

### Financial Outcomes

- **Annual Savings:** **$1,334,000**
- **Payback Period:** **1.1 Months**

This demonstrates that while the sticker price is a factor, the "hidden taxes" of management overhead, delay, and risk are what truly drive the total cost. An integrated platform model offers substantial savings by systemically reducing these hidden costs.
