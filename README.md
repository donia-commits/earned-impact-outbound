# Earned Impact — Outbound Operating System Dashboard

Static, self-contained HTML site. No build step — deploy as-is.

```
index.html          Dashboard — one card per document
css/styles.css       All styling
js/main.js           External-link hardening (adds rel=noopener/noreferrer)
assets/favicon.svg   Site favicon
pages/                Internal HTML documents, each with a "Back to Dashboard" link
```

## Cards

| Card | Type | Target |
|---|---|---|
| Discovery Questionnaire | External | Google Form + Google Sheet (responses) |
| Discovery Summary | External | Google Doc |
| ICP | External | Google Doc |
| Messaging Framework | External | Google Doc |
| Cold Calling Scripts | Internal | `pages/cold-calling-scripts.html` |
| BigQuery Spec | External | Google Doc |
| GHL Workflow | Internal | `pages/ghl-workflow.html` (placeholder) |
| ReadyMode | Internal | `pages/readymode-workflow.html` (placeholder) |

`Cold Calling Scripts` is built from `SDR_Script_Package_v1` (in the "Earned Impact datebase" zip at the repo root).

`GHL Workflow` and `ReadyMode` were originally `file:///C:/Users/...` links on a local machine — those HTML files were never uploaded to this repository, so their pages are honest placeholders (confirmed facts from the Current Stack Audit only, no invented workflow steps). Send over `ghl-crm-workflow.html` and `earned-impact-cold-calling-workflow.html` to replace them.

## Deploy

**GitHub Pages:** enable Pages on this repo, serve from the root of the default branch.

**Vercel:** import the repo, framework preset "Other" — no build command, output directory is the repo root.
