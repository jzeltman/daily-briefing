# The Daily Report

The root [index.html](./index.html) is the most current edition of The Daily Report and is the page served by GitHub Pages. It is currently a self-contained static edition with mock data.

The canonical visual and data contract is [TEMPLATE.md](./TEMPLATE.md). Future generated pages should preserve that structure and behavior while replacing the edition data.

Archives belong under `editions/YYYY-MM-DD.html`. Before the automation overwrites the root page, it must copy the current `index.html` to the archive path matching the date inside that page. Then it writes the newly generated edition to the root `index.html` and updates the previous/next date links.

Preview locally:

```text
http://127.0.0.1:8765/index.html?variant=a
```
