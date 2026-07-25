# The Daily Report

The root [index.html](./index.html) is the most current edition of The Daily Report and is the page served by GitHub Pages. It is currently a self-contained static edition with mock data.

The canonical visual reference is [template.html](./template.html). The generation rules are documented in [TEMPLATE.md](./TEMPLATE.md). Future generated pages should start from `template.html` and replace its edition data.

The content-gathering and editing prompt is [AUTOMATION_PROMPT.md](./AUTOMATION_PROMPT.md). The reusable reporter workflow is [skills/daily-report-reporter/SKILL.md](./skills/daily-report-reporter/SKILL.md), with its [source manifest](./skills/daily-report-reporter/references/source-manifest.md), [desk profiles](./skills/daily-report-reporter/references/personalities.md), and [handoff validator](./skills/daily-report-reporter/scripts/validate-handoff.cjs).

Archives belong under `editions/YYYY-MM-DD.html`. The report is generated once daily at 10:00 in `Europe/Madrid`; each new edition links to the most recent archived day. Before the automation overwrites the root page, it must copy the current `index.html` to the archive path matching the date inside that page. Then it renders the next edition from `template.html`, writes it to the root `index.html`, and updates the previous/next links.

Preview locally:

```text
http://127.0.0.1:8765/index.html
```

## Scheduled automation

- The Codex Scheduled automation **The Daily Report** runs once daily at 10:00 in `Europe/Madrid`.
- It reads `AUTOMATION_PROMPT.md`, gathers and edits the edition, archives the previous root page, renders from `template.html`, and validates the output.
- It loads the reporter skill, source manifest, and internal desk profiles before reporter stages. Finance is a first-class five-card rail (USA 2, EU 2, Asia 1).
- It commits and pushes only when repository authentication succeeds, and reports the archive, validation, and publication results.
