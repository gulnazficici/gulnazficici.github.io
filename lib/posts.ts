import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import type { Locale } from "./i18n";

// Posts live in content/writing/<locale>/<slug>.md.
// The same slug in both locale folders marks the two files as translations.
const root = path.join(process.cwd(), "content", "writing");

export type PostMeta = {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  date: string;
  tags: string[];
  draft: boolean;
  readingMinutes: number;
};

// Drafts show up in `npm run dev` and are left out of the production build.
const showDrafts = process.env.NODE_ENV !== "production";

function readPost(locale: Locale, slug: string) {
  const file = path.join(root, locale, `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const meta: PostMeta = {
    slug,
    locale,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: new Date(data.date ?? Date.now()).toISOString().slice(0, 10),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: Boolean(data.draft),
    readingMinutes: Math.max(1, Math.round(content.split(/\s+/).filter(Boolean).length / 200)),
  };
  if (meta.draft && !showDrafts) return null;
  return { meta, content };
}

export function getPosts(locale: Locale): PostMeta[] {
  const dir = path.join(root, locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => readPost(locale, f.replace(/\.md$/, ""))?.meta)
    .filter((m): m is PostMeta => Boolean(m))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(locale: Locale, slug: string) {
  const post = readPost(locale, slug);
  if (!post) return null;

  const html = String(
    await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeStringify)
      .process(post.content),
  );
  return { meta: post.meta, html };
}

export function hasTranslation(locale: Locale, slug: string): boolean {
  return readPost(locale, slug) !== null;
}

// `output: export` rejects an empty generateStaticParams, which happens while a
// locale has no posts yet. A placeholder slug keeps the build going; it renders
// the 404 page and is never linked or listed in the sitemap.
export const PLACEHOLDER_SLUG = "_";

export function staticSlugs(locale: Locale) {
  const slugs = getPosts(locale).map(({ slug }) => ({ slug }));
  return slugs.length > 0 ? slugs : [{ slug: PLACEHOLDER_SLUG }];
}
