# AGENTS.md — Linux Command Handbook

A static site that turns markdown files into a searchable Linux command reference. Zero npm dependencies.

## Quick start

```bash
npm run check     # build + validate everything (run before commit)
npm run dev       # build + serve on http://localhost:4173
npm run clean     # remove dist/
```

- `PORT` env var changes dev server port (default 4173).
- `SITE_BASE_PATH` env var sets a path prefix for GitHub Pages deployment (CI sets it automatically).

## Project layout

```
content/commands/    622 markdown files, one per command
public/              static assets (CSS, JS, icons) — copied verbatim to dist/
scripts/             build scripts (pure Node.js, no deps)
dist/                generated site output (gitignored)
```

## Content rules

Each `content/commands/<slug>.md` file must have:

```
---
name: ls
summary: List files and directories.
category: Files
tags: files, directories, list, permissions
popular: false
---
```

Then these body sections (checked by `npm run check`):
`## Additional Notes`, `## Syntax`, `## Parameters`, `## Examples`, `## Practical Notes`

- Frontmatter parser is custom (simple `key: value` — not YAML). Tags are comma-separated.
- **Filename must match the slugified `name` field.** `ls.md` → `name: ls`. If not, check fails.
- Required fields: `name`, `summary`, `category`, `tags`, `popular`.
- Fenced code blocks must be closed (checked by validator).
- No duplicate names or slugs allowed across files.

## Build behavior

- Markdown rendered by a custom inline renderer (no external library). Support: paragraphs, `##`/`###`/`####` headings, unordered lists, fenced code blocks, inline `code` and `**bold**`.
- Generates: per-command HTML pages, search index (`search-index.json`), tools index, wallpapers index.
- Output is fully static — no server-side processing at runtime.

## CI

On push to `main`, GitHub Actions runs `npm run check` then deploys `dist/` to GitHub Pages.

## Misc

- Node.js >=20 required.
- MIT License.
