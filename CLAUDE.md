# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Gülnaz Fıçıcı at https://gulnaz.net — a writing- and product-focused
site (not a CV). Next.js 16 App Router with `output: "export"`, Tailwind v4, bilingual
Turkish/English with Turkish as the primary language.

## Commands

- `npm run dev` — local dev server (shows draft posts)
- `npm run build` — static export to `out/` (drafts excluded)
- `npm run lint`

## Deployment

`.github/workflows/deploy.yml` builds and publishes `out/` to GitHub Pages on every push
to `main`. Work happens on `develop` and is merged into `main` to go live.

## Structure

- **Routing** — two root layouts so `<html lang>` is right per language:
  `app/(tr)/…` serves Turkish at the root (`/`, `/writing`, `/products`, `/about`) and
  `app/(en)/en/…` serves English under `/en`. URL segments are English in both.
  Route files are thin: each renders a shared view from `components/views/` with a locale.
- **UI strings** — `lib/i18n.ts` (`dict`), plus `localePath()` for building links.
- **Writing** — Markdown in `content/writing/<tr|en>/<slug>.md` with frontmatter
  `title`, `description`, `date`, `tags`, `draft`. The same slug in both folders links the
  two as translations. Parsed in `lib/posts.ts` (gray-matter + remark/rehype).
- **Products** — `content/products.ts`; status is `idea | building | beta | live`, tone is
  one of the Studio card colors. While the list is empty, pages show an "in progress" card.
- **About / experience / skills / "now" line** — `lib/site.ts`.
- **RSS** per locale (`/rss.xml`, `/en/rss.xml`) and `sitemap.xml` via `lib/meta.ts`.

## Design

"Editorial + Studio": warm paper background, ink rules, Fraunces headlines, Inter body,
IBM Plex Mono for labels/dates, one terracotta accent — plus colorful Studio cards
(`.tone[data-tone=…]`) for products. All tokens are in `app/globals.css`; every light token
has a `:root.dark` counterpart that must stay in sync. Dark mode is the `dark` class on
`<html>`, set before paint by the inline script in `components/RootDocument.tsx`.

## Gotcha

`output: "export"` rejects an empty `generateStaticParams`, so `staticSlugs()` emits a
placeholder `_` slug while a locale has no posts. It renders the 404 and isn't linked.
