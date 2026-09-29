import Link from "next/link";
import { notFound } from "next/navigation";
import Page from "@/components/Page";
import { dict, formatDate, localePath, otherLocale, type Locale } from "@/lib/i18n";
import { getPost, hasTranslation } from "@/lib/posts";

export default async function PostView({ locale, slug }: { locale: Locale; slug: string }) {
  const post = await getPost(locale, slug);
  if (!post) notFound();

  const t = dict[locale].writing;
  const other = otherLocale(locale);
  const translated = hasTranslation(other, slug);
  const translationHref = localePath(other, `/writing/${slug}`);
  const { meta, html } = post;

  return (
    <Page
      locale={locale}
      active="writing"
      alternateHref={translated ? translationHref : localePath(other, "/writing")}
    >
      <article>
        <header className="mb-12 border-b border-rule pb-10">
          <p className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wider text-muted">
            <time dateTime={meta.date}>{formatDate(locale, meta.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{t.minRead(meta.readingMinutes)}</span>
            {meta.tags.map((tag) => (
              <span key={tag} className="text-accent">#{tag}</span>
            ))}
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.12] tracking-tight sm:text-5xl">
            {meta.title}
          </h1>
          {meta.description && (
            <p className="mt-5 text-xl leading-relaxed text-muted">{meta.description}</p>
          )}
          {translated && (
            <Link
              href={translationHref}
              hrefLang={other}
              className="mt-6 inline-block font-mono text-sm text-accent hover:underline"
            >
              {t.readIn} →
            </Link>
          )}
        </header>

        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <Link
        href={localePath(locale, "/writing")}
        className="mt-16 inline-block font-mono text-sm text-muted hover:text-accent transition-colors"
      >
        ← {t.back}
      </Link>
    </Page>
  );
}
