# AGENTS.md

## Project

Static countdown site: how many nights ("dodos") before Hellfest.
Deployed on Cloudflare Pages from the `website/` directory, no build step.

## Layout

- `website/index.html` — markup (French UI text)
- `website/style.css` — styles
- `website/script.js` — countdown logic; the target date is the `HELLFEST` constant

## Rules

- Plain HTML/CSS/JS only. No frameworks, no npm, no build tools, no external dependencies (CDNs, fonts, analytics).
- Code, comments and docs in English; user-facing text in French.
- Keep it small and simple. Do not add files unless needed.
- Dates are computed in the visitor's local time.
