import type { Metadata } from "next";
import { dict, localePath, type Locale } from "./i18n";
import { getPosts } from "./posts";
import { site } from "./site";

export function layoutMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(site.url),
    title: { default: site.name, template: `%s — ${site.name}` },
    description: dict[locale].home.intro,
    openGraph: {
      siteName: site.name,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },
  };
}

// `path` is locale-neutral ("/writing"); `translated` is false for posts that
// only exist in one language, so we don't advertise a missing hreflang.
export function pageMetadata(
  locale: Locale,
  path: string,
  extra: Metadata = {},
  translated = true,
): Metadata {
  const languages: Record<string, string> = { [locale]: localePath(locale, path) };
  if (translated) {
    languages.tr = localePath("tr", path);
    languages.en = localePath("en", path);
    languages["x-default"] = localePath("tr", path);
  }
  return {
    ...extra,
    alternates: {
      canonical: localePath(locale, path),
      languages,
      types: { "application/rss+xml": localePath(locale, "/rss.xml") },
    },
  };
}

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function rssFeed(locale: Locale): Response {
  const home = site.url + localePath(locale);
  const items = getPosts(locale)
    .map((p) => {
      const url = site.url + localePath(locale, `/writing/${p.slug}`);
      return `<item><title>${escape(p.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${new Date(p.date).toUTCString()}</pubDate><description>${escape(p.description)}</description></item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${escape(site.name)}</title><link>${home}</link><description>${escape(dict[locale].writing.intro)}</description><language>${locale}</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
