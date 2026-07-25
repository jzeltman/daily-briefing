# The Daily Report — edition template

`TEMPLATE.md` is the canonical generator contract. [template.html](./template.html) is the canonical visual and interaction reference. The root `index.html` is not the template: it is always the most current edition served by GitHub Pages.

## Output contract

- Generate one self-contained HTML file per edition.
- Start from `template.html` and replace its edition data while preserving the cleaned broadsheet structure.
- Keep the current edition at the repository root as `index.html` so GitHub Pages serves it by default.
- Before replacing root `index.html`, copy the existing current edition to `editions/YYYY-MM-DD.html`, using the date already inside that edition.
- The noon edition is the canonical “yesterday” edition for its calendar date. The following midnight edition’s Previous link must target that noon edition, which closes the prior day’s coverage window.
- Store the previous/yesterday edition explicitly in the generated edition data; do not infer the midnight link only by subtracting one calendar day.
- After generating the new root edition, update its previous-edition link to that explicit prior edition and disable or omit its next-edition link because it is the newest page.
- Use relative archive links so the same files work on GitHub Pages and in a local preview.
- Keep the existing newspaper-inspired visual language, responsive behavior, light/dark mode, sticky header, navigation, filter mode, expandable story details, source bibliography, and feedback controls.
- Do not replace the page with a generic dashboard, a plain article feed, or a new visual system.
- Replace mock data only. Preserve the page’s layout and interaction model unless a later design decision explicitly changes this document.
- Do not claim that an edition was published or committed unless the publication step actually ran.

## Page order

1. Sticky header
   - Compact `The Daily Report` logo.
   - Today, Sports, My teams, Events, Week, and Month navigation.
   - Scroll mode: navigate to the relevant page location.
   - Filter mode: show only the selected content group; Sports contains generic leagues, while My teams contains followed clubs.
   - Light/dark mode toggle.

2. Masthead metadata
   - Edition name and scheduled time.
   - Centered edition date with previous and next edition controls.
   - The newest edition has a disabled or omitted next link.
   - Edition timezone.
   - Forecast for today in Valencia plus the next seven days.

3. Editor’s rollup, above the content rails
   - Label: “The midnight desk · Editor’s rollup”.
   - Left column: large editorial title and one-to-three-paragraph overall summary.
   - Right column: two compact summary cards:
     - News summary.
     - Sports summary.
   - Bottom row: smaller edition pulse spanning both columns. It is supporting metadata, not a lead story.
   - Finish the rollup with the newspaper-style double border.

4. Content groups
   - News sections.
   - Sports sections.
   - My teams section for followed clubs.
   - Valencia social events and EU video-game events.
   - Preserve the five-card horizontal rail on desktop and horizontal scrolling on mobile.

5. Footer and archive hooks
   - Keep weekly and monthly navigation placeholders until those features are backed by generated data.
   - Date navigation points to `editions/YYYY-MM-DD.html` archive pages.

## GitHub Pages generation sequence

Each scheduled generation should follow this order:

1. Read the current root `index.html` date.
2. Save that unchanged file as `editions/<current-date>.html`.
3. Gather and edit the next edition’s content.
4. Render the next edition using the structure in this document.
5. Write the new edition to the root `index.html`.
6. Set the new page’s previous link to the explicit prior edition. At midnight, this is the noon edition that becomes “yesterday.” Set its next link to disabled/omitted.
7. Commit/publish the root page and the new archive file together, if publication is configured.

## Story card contract

Every card must provide:

- `title`: concise headline.
- `summary`: short card-level summary.
- `detail`: three to seven paragraphs for the expanded view.
- `timestamp`: when the item was reported or last checked.
- `status`: for example, `Verified`, `Developing`, or `Watching`.
- `confidence`: `High`, `Medium`, or `Low`, with the reason reflected in the detail copy when useful.
- `why`: why the item belongs in this edition and section.
- `sources`: multiple links for important or contested stories.
- Source labels distinguishing primary/official material, reporting, analysis, data, or other relevant viewpoints.
- Clear separation between verified facts, attributed claims, analysis, and uncertainty.

## Edition pulse

Use the pulse as a quiet production readout, not editorial content. It may include:

- Number of desks or sections generated.
- Number of cards generated.
- Source mix or source count.
- Unresolved, low-confidence, or live claims.

Do not let the pulse compete visually with the rollup headline or the News/Sports summary cards.

## Data and editorial rules

- Use five final cards per section when evidence supports five.
- Deduplicate overlapping reports before rendering cards.
- Preserve attribution and source links.
- Label uncertainty instead of filling gaps with invented facts.
- Prefer multiple viewpoints for contested stories when practical.
- Generate the News and Sports rollups only after their cards are finalized.
- Keep the edition fully usable when a source, section, or event category has no reliable result; show an explicit “not enough verified information” state rather than fabricated content.
