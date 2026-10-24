# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Tech Stack

- **Next.js 16** with App Router
- **React 19** with TypeScript
- **Tailwind CSS v4** (via @tailwindcss/postcss, no `tailwind.config`)
- **Markdown** using gray-matter + remark-html
- **`@tailwindcss/typography`** for `prose` styles on post and case-study bodies

## Architecture

### Routing Structure

- `/` - Home page (Hero)
- `/source` - Bio
- `/infrastructure` - Blog listing with tag filtering
- `/infrastructure/[slug]` - Individual blog post
- `/infrastructure/tag/[tag]` - Posts filtered by tag
- `/outcomes` - Case-study listing with tag filtering
- `/outcomes/[slug]` - Individual case study
- `/outcomes/tag/[tag]` - Case studies filtered by tag

There is no `/about` route. Header and Footer are imported by each page; they are not in the root layout.

### Content

Blog posts are markdown files in `/content/posts/`. Case studies are markdown files in `/content/cases/`. The filename (without `.md`) is the slug.

```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"
excerpt: "Brief description"
tags: ["tag1", "tag2"]
---
```

`/src/lib/posts.ts` and `/src/lib/cases.ts` provide the same shape of data access:

- `getAllPosts()` / `getAllCases()` - Sorted newest first
- `getPostBySlug(slug)` / `getCaseBySlug(slug)` - Single item with HTML content
- `getPostsByTag(tag)` / `getCasesByTag(tag)` - Filtered by tag (case-insensitive)
- `getAllTags()` / `getAllCaseTags()` - Unique tags
- `getAllPostSlugs()` / `getAllCaseSlugs()` - Used by `generateStaticParams()`

Only `.md` files are read. If either directory is missing, the loaders return an empty list and the listing pages render their empty state. Do not add placeholder posts.

Listing, tag, and detail routes are statically generated. `sitemap.ts` includes static pages plus every post and case study.

### Component Organization

- `/src/components/` - Reusable UI components
- `/src/app/` - Next.js App Router pages and layouts
- `/src/lib/` - Blog and case-study data access, plus JSON-LD helpers

### Styling

Tailwind CSS v4. Theme variables live in `/src/app/globals.css` (`:root` and `.dark`). Dark mode is the default (`className="dark"` on `<html>`), toggled by `ThemeToggle`. The `dark` variant follows that class.

Body type is Nunito Sans, loaded in `layout.tsx` and exposed as `--font-nunito` (mapped to `--font-sans`). Geist Mono is `--font-mono`.

Post and case-study HTML uses `prose` (and `dark:prose-invert`) from `@tailwindcss/typography`.

### Path Aliases

TypeScript configured with `@/*` mapping to `./src/*`.
