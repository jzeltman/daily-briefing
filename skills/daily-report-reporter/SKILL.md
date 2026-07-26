---
name: daily-report-reporter
description: Runs a bounded, source-backed reporter handoff for The Daily Report. Use when a scheduled run gathers, verifies, or prepares cards for the editor.
---

# Daily Report reporter

Use this workflow for every assignment before the editor or printer stages.

## Load first

Read these files before searching:

- [Source manifest](./references/source-manifest.md)
- [Desk personalities](./references/personalities.md)
- [International report example](./references/examples/international-report-example.md)
- [Edition contract](../../TEMPLATE.md)

The manifest is the minimum starting set, not an exclusive allow-list. Personalities are internal writing profiles: they may change emphasis, rhythm, and vocabulary, but never evidence standards, confidence, source requirements, or selection.

The International report example is a dated style and substance reference. Use it to match the level of factual detail, source recurrence, attribution, context, and uncertainty. Never copy its facts, titles, dates, wording, or links into a current run.

## Bounded reporting loop

1. Define the assignment and coverage window from the run manifest.
2. Search the confirmed primary/official entries first, then the confirmed independent entries, then a small number of focused fallback queries.
3. Keep only developments with a meaningful change, current event, or useful ongoing context. Do not use search snippets or a single social post as evidence.
4. Verify ordinary cards with at least two sources: one primary/official source and one independent report. Aim for three sources for contested, Finance, and rumor-watch cards.
5. Separate `facts`, `attributed_claims`, `analysis`, and `uncertainties`. Preserve conflicts instead of smoothing them away.
6. Return five candidates when evidence supports five, otherwise return fewer and explain the gap.

## Candidate and card handoff

Each candidate carries `candidate_id`, `assignment`, `title`, `summary`, `published_at`, `event_at`, `status`, `confidence`, `why_it_belongs`, `facts`, `attributed_claims`, `analysis`, `uncertainties`, `sources`, and `conflicts`. Each source includes a title/name, URL, publication time when available, source role/type, viewpoint, and what it supports.

The editor converts selected candidates into cards with the same evidence fields plus `detail`, `timestamp`, `why`, and `bibliography`/`sources`. `detail` is factual copy of 2–4 paragraphs, not a defense of why the card was selected:

1. What happened and the verified facts.
2. Why it matters.
3. Relevant context.
4. What happens next or remains uncertain.

Use fewer than four paragraphs when the story does not need more. Never fill space with generic process language.

## Special desks

Finance cards are informational only. Include `region`, `as_of`, `instruments`, `movement`, and `drivers`; do not give investment recommendations or trading instructions. Produce USA 2, EU 2, and Asia 1 in one Finance rail.

A sports desk may include one `Rumor watch` card only when two reputable independent reports exist. Preserve attribution, use low or medium confidence, state what is unconfirmed, and never write speculation as fact. Omit the card if the evidence bar is not met.

Before rendering, run `node skills/daily-report-reporter/scripts/validate-handoff.cjs <handoff.json>` and fix rejected fields rather than weakening the validator.
