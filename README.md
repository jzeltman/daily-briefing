# The Daily Report

The root [index.html](./index.html) is the most current edition of The Daily Report and is the page served by GitHub Pages. It is currently a self-contained static edition with mock data.

The canonical visual reference is [template.html](./template.html). The generation rules are documented in [TEMPLATE.md](./TEMPLATE.md). Future generated pages should start from `template.html` and replace its edition data.

The content-gathering and editing prompt is [AUTOMATION_PROMPT.md](./AUTOMATION_PROMPT.md). It defines the reporter assignments, source-discovery rules, candidate schema, editor pass, rollups, archiving, and run manifest.

Archives belong under `editions/YYYY-MM-DD.html`. The noon edition is the canonical “yesterday” report for its calendar date; the following midnight edition links back to that noon edition as its Previous edition. Before the automation overwrites the root page, it must copy the current `index.html` to the archive path matching the date inside that page. Then it renders the next edition from `template.html`, writes it to the root `index.html`, and updates the previous/next links from the explicit edition reference.

Preview locally:

```text
http://127.0.0.1:8765/index.html
```

## Scheduled automation

- The Codex Scheduled automation **The Daily Report** runs at midnight and noon in `Europe/Madrid`.
- It reads `AUTOMATION_PROMPT.md`, gathers and edits the edition, archives the previous root page, renders from `template.html`, and validates the output.
- It commits and pushes only when repository authentication succeeds, and reports the archive, validation, and publication results.
