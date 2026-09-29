import Link from "next/link";
import Page, { SectionLabel } from "@/components/Page";
import PostList from "@/components/PostList";
import { ProductGrid, ProductsEmpty } from "@/components/Products";
import { products } from "@/content/products";
import { dict, localePath, type Locale } from "@/lib/i18n";
import { getPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export default function HomeView({ locale }: { locale: Locale }) {
  const t = dict[locale];
  const posts = getPosts(locale).slice(0, 5);

  return (
    <Page locale={locale}>
      <section className="mb-20">
        <h1 className="max-w-2xl font-display text-4xl leading-[1.1] tracking-tight sm:text-[3.4rem]">
          {t.home.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.home.intro}</p>
        {site.now[locale] && (
          <p className="mt-8 flex gap-3 text-sm">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent pt-0.5">
              {t.home.now}
            </span>
            <span>{site.now[locale]}</span>
          </p>
        )}
      </section>

      <section className="mb-20">
        <SectionLabel>{t.home.latest}</SectionLabel>
        {posts.length > 0 ? (
          <>
            <PostList locale={locale} posts={posts} />
            <Link
              href={localePath(locale, "/writing")}
              className="mt-6 inline-block font-mono text-sm text-muted hover:text-accent transition-colors"
            >
              {t.home.allWriting} →
            </Link>
          </>
        ) : (
          <p className="border-y border-rule py-6 text-muted">{t.writing.empty}</p>
        )}
      </section>

      <section>
        <SectionLabel>{t.home.workshop}</SectionLabel>
        {products.length > 0 ? (
          <ProductGrid locale={locale} products={products.slice(0, 4)} />
        ) : (
          <ProductsEmpty locale={locale} />
        )}
      </section>
    </Page>
  );
}
