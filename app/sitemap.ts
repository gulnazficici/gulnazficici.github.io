import type { MetadataRoute } from "next";
import { locales, localePath } from "@/lib/i18n";
import { getPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/writing", "/products", "/about"];
  return locales.flatMap((locale) => [
    ...pages.map((path) => ({ url: site.url + localePath(locale, path) })),
    ...getPosts(locale).map((post) => ({
      url: site.url + localePath(locale, `/writing/${post.slug}`),
      lastModified: post.date,
    })),
  ]);
}
