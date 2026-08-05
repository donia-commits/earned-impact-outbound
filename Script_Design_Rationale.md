# Script Design Rationale — Earned Impact Outbound Playbooks

**Prepared for:** Damon Stewart, Managing Partner &nbsp;|&nbsp; **Prepared by:** Outbound Operations
**Companion to:** `Higher_Education_Playbook.md`, `Mental_Health_Playbook.md`, `Membership_Association_Playbook.md`

This document explains why the three playbooks differ the way they do, which of Damon's and Kaelene's comments from the original `SDR_Script_Package_v1.docx` were implemented (and how), and what's still open for review before these scripts go live.

---

## 1. Why each ICP differs

All three playbooks share one structural spine — permission-based opener, delayed pitch, summarize→ask→summarize→invite rhythm, the same voicemail→LinkedIn→email sequence, the same qualification dimensions (authority, budget, need, timing, capacity). What changes per segment is **what problem gets named first and in what language**, because that's what determines whether the prospect stays on the phone.

| | Higher Education | Mental Health | Membership/Trade |
|---|---|---|---|
| **Opening frame** | Enrollment & marketing capacity | Sustainability of the mission | Membership growth & engagement |
| **When "unrestricted revenue" appears** | Late — only as the underlying mechanism, never the hook | Earlier — this buyer already thinks close to these terms | Middle — after the membership pain point is confirmed |
| **Why** | Per Kaelene: Higher-Ed buyers think in enrollment, not unrestricted funds, even though the two are mechanically the same. Leading with "unrestricted revenue" here reads as off-topic finance language to a buyer focused on this term's enrollment numbers. | Mental-health leaders are already fielding board and funder conversations about grant dependency and sustainability — the vocabulary is closer to their daily reality, so it can surface sooner without feeling like a pivot. | Association leaders think in membership metrics first (growth, renewal, engagement); non-dues/unrestricted revenue is the financial outcome, not the entry point, but it's a more natural bridge for this buyer than it is for Higher Ed. |
| **Gatekeeper reality** | Not a receptionist — often the "wrong" marketing generalist at a small institution, who may actually be relevant given how thin these teams are. | Traditional front-desk/intake gatekeeper. | Traditional front-desk/assistant gatekeeper. |
| **Primary proof point** | Small-university enrollment result (generic; named version pending) | Chicago Psychoanalytic Institute (pending client approval to name externally) | AMWA (segment benchmark itself still unconfirmed) |

The shared spine is intentional — per the original Master Outbound Script Package's own design note, "only the ICP, terminology, examples, proof points, and pain language change per vertical; structure, sequencing, and psychology stay fixed." These three playbooks follow that framework rather than inventing three different call structures.

---

## 2. Damon's comments — what was implemented

Sourced from the 16 inline comments in `SDR_Script_Package_v1.docx` (Aug 3, 2026) plus this task's brief.

| Comment (paraphrased) | Implementation |
|---|---|
| "Sell the steak not the sizzle" — unrestricted funds via earned income | Implemented as the core positioning across all three playbooks — but sequenced per-segment (see Section 1 above), not stated identically in every opener. |
| "We'll never hit a gatekeeper, but may get the wrong person, especially at bigger universities — ask Kaelene" | Implemented directly in the Higher Ed playbook's Section 6, using Kaelene's specific guidance (comment below) rather than a generic gatekeeper script. |
| "I'm willing to meet with someone who works directly under the decision maker" | Implemented — all three qualification checklists now read "…or someone who reports directly to one of those roles," not decision-maker-only. This loosens the original checklist, which required the DM specifically. |
| Wording: existing Master script said "We've been **talking with** quite a few nonprofits" | Corrected to "We've been **working with** organizations…" throughout all three playbooks' cold call, voicemail, and email copy, per this task's explicit requirement. |
| "Can Kaelene add a benefit here ('we increased x')? Ethical question — can we mention CPI?" | Treated as **still open**, not resolved by silence. Even though later internal docs (Discovery Summary v3, ICP v4) name CPI internally, that's not the same as confirming it's cleared for prospect-facing use. All three playbooks flag named proof points as pending and default to generic, unnamed versions in live scripts. |
| Research grant competition, federal grant cuts, giving declines — "tighten this" | Incorporated into the ICP Psychology sections (Mental Health especially) and reflected in the required "organizations are working harder simply to maintain funding" framing instead of "funding is harder," per this task's explicit grant-positioning guidance. |
| Mission/impact language must be threaded through, not just present in the opener | Implemented — "mission," "organization," "community," "programs," "impact" are used throughout every section of all three playbooks; "company," "customers," "sales," "agency" are explicitly listed as words to avoid on each ICP Cheat Sheet. |
| "Work with Shaheer on the one-page, get formatting you're happy with" | Out of scope for this deliverable — that's a one-pager/collateral task, not a call script. Flagging as a separate open item, not addressed here. |
| BigQuery pull of Form 990s so the dialer has org financials in front of reps | Out of scope for this deliverable — this is a data/infrastructure task for the CRM/dialer build (Phase 2), not something a script document can implement. Flagging as still open. |
| Canada approved | Reflected in each playbook's ICP Summary ("Geography: US now; Canada approved for future expansion") — carried forward as context, not as an active target yet, since Canada's Phase 2 timeline is still undefined per ICP v4. |
| AI implementation/training as a possible lead offer (discussed with Kaelene, comments #14–15) | **Not implemented.** This was an open, unresolved strategic discussion in the source document about pivoting part of the offer toward AI services — it directly conflicts with this task's instruction to sell earned income outcomes, never marketing/services. Implementing it without your sign-off would contradict the brief. See Section 4 (Open Questions). |
| "Ideas for the hook" — complimentary "Earned Revenue Growth Blueprint" as a meeting incentive | **Not implemented** for the same reason — it was explicitly marked "Discussion Points for Damon," never decided. Flagged below as an open question rather than silently adopted or silently dropped. |

---

## 3. Kaelene's comments — what was implemented

| Comment (paraphrased) | Implementation |
|---|---|
| Higher Ed: buyers come to us because they're resource-constrained with declining student flow; we're "a marketing team for the price of one"; they think in enrollment, not unrestricted funds, even though it's the same mechanism | This is the single biggest driver of how the Higher Ed playbook differs from the other two — it shapes the opening frame, the entire ICP Psychology section, the objection response to "we're too busy," and the instruction to never lead with unrestricted revenue for this segment. |
| AI implementation two-fold framing (with Damon) | **Not implemented**, same reasoning as above — unresolved strategic question, out of scope for these earned-income-focused scripts without your and Kaelene's sign-off. |
| (Via ICP v4 action items, owned by Kaelene) Trade segment benchmark not yet confirmed; ICSW segment mapping (Higher-Ed vs. Trade) not yet confirmed | Both are explicitly flagged as provisional in the relevant playbooks (Membership/Trade Section 15; Higher Ed Section 15) rather than treated as settled. The Membership/Trade playbook carries an additional top-of-document warning since its segment definition itself, not just its proof point, is unconfirmed. |

---

## 4. Open questions for review

These are things this task's scope could not resolve on its own — they need a decision from you and/or Kaelene before the affected sections should be treated as final.

1. **CPI naming rights.** Can Chicago Psychoanalytic Institute be named externally, with what specific figure? Until confirmed, the Mental Health playbook (and any collateral built from it) uses a generic, unnamed version of this proof point.
2. **AMWA benchmark and figure.** The Trade/Membership segment's own definition and its proof point are both still marked open in ICP v4's action items. This is the least-finalized of the three playbooks for that reason — recommend prioritizing Kaelene's confirmation here before this vertical goes live.
3. **ICSW segment mapping and quantified detail.** Is ICSW a Higher-Ed or Trade example, and what's the actual quantified result? The Higher Ed playbook currently uses a generic version pending this.
4. **AI implementation/training as a potential lead offer.** Damon and Kaelene were actively discussing this as of Aug 3 in the source document, unresolved. It was intentionally excluded from all three playbooks because it would contradict "sell earned income, never marketing/AI services" — but if you've since decided to pursue it, that's a deliberate positioning change that should be made explicitly, not folded into a script rewrite.
5. **"Earned Revenue Growth Blueprint" as a meeting incentive.** Also flagged "Discussion Points for Damon" in the source document, also unresolved as of this writing. Not incorporated here for the same reason as #4 — worth a separate decision, not a silent inclusion or exclusion.
6. **Named competitors.** Still not documented anywhere in Discovery Summary, ICP v4, or Offer Strategy. All three playbooks' objection handling stays category-level ("most either handle it internally or don't have the resources") rather than naming a specific competitor, consistent with current data — but this should be revisited once competitors are confirmed.
7. **Account-level success metric.** Still undefined per the Discovery Summary's own open items. Doesn't block these scripts, but will matter for QA/reporting once the campaign is live.

---

## 5. What stayed structurally unchanged

Per this task's brief, the existing script's overall framework — not its specific wording — was treated as the foundation:

- Permission-based opener, twenty-second ask
- Delay-the-pitch, question-led discovery rhythm (summarize → ask → summarize → invite)
- Voicemail → LinkedIn (manual only) → Email sequence, always in that order
- Consultative, non-argumentative objection handling that ends in a question
- Qualification built on authority / budget / need / timing / capacity, stated in plain language rather than BANT terminology
- No guarantees, ever; no "agency" framing; nonprofit-native language throughout

None of the three new playbooks edit the original `SDR_Script_Package_v1.docx` or `Master_Outbound_Script_Package.html` — both remain untouched as historical reference, per instruction.
