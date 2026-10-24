# nunz.io

Personal site for Nunzio Esposito. Next.js App Router on Vercel; pushes to `main` deploy.

## Develop

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm run lint
```

## Routes

- `/` — Home
- `/infrastructure` — Writing, with `/infrastructure/[slug]` and `/infrastructure/tag/[tag]`
- `/outcomes` — Case studies, with `/outcomes/[slug]` and `/outcomes/tag/[tag]`
- `/source` — Bio

## Add a post

Create `content/posts/<slug>.md`. The filename is the URL slug.

```markdown
---
title: "Post title"
date: "YYYY-MM-DD"
excerpt: "One or two sentences."
tags: ["systems"]
---

Markdown body.
```

Posts are read at build time, sorted newest first, and included in the listing, tag pages, and sitemap.

## Add a case study

Same frontmatter, at `content/cases/<slug>.md`. It shows up under `/outcomes`.

Only `.md` files are content. An empty `content/posts` or `content/cases` folder (or a missing one) renders the empty state and does not fail the build.
