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
- **Tailwind CSS v4** (via @tailwindcss/postcss)
- **Markdown blog** using gray-matter + remark-html

## Architecture

### Routing Structure

- `/` - Home page (Hero + Projects components)
- `/about` - About page with skills grid
- `/infrastructure` - Blog listing with tag filtering
- `/infrastructure/[slug]` - Individual blog post (dynamic route)
- `/infrastructure/tag/[tag]` - Posts filtered by tag

### Blog System

Blog posts are markdown files in `/content/posts/` with frontmatter:

```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"
excerpt: "Brief description"
tags: ["tag1", "tag2"]
---
```

The `/src/lib/posts.ts` module provides data access functions:
- `getAllPosts()` - Returns all posts sorted by date
- `getPostBySlug(slug)` - Single post with HTML content
- `getPostsByTag(tag)` - Posts filtered by tag
- `getAllTags()` - Unique tags across all posts

Blog routes use `generateStaticParams()` for static generation of all post and tag pages.

### Component Organization

- `/src/components/` - Reusable UI components
- `/src/app/` - Next.js App Router pages and layouts
- `/src/lib/` - Utility functions (currently blog data access)

### Styling

Uses Tailwind CSS v4 with CSS custom properties for theming. Theme variables are defined in `/src/app/globals.css` with `:root` and `.dark` selectors. Dark mode is default, toggled via class on `<html>` element.

### Path Aliases

TypeScript configured with `@/*` mapping to `./src/*`.
