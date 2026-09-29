import Link from "next/link";
import Page, { PageTitle } from "@/components/Page";
import PostList from "@/components/PostList";
import { dict, localePath, type Locale } from "@/lib/i18n";
import { getPosts } from "@/lib/posts";

export default function WritingView({ locale }: { locale: Locale }) {
  const t = dict[locale].writing;
  const posts = getPosts(locale);
  // English readers get pointed at the Turkish archive while it's the bigger one.
  const showOtherNote = locale === "en" && getPosts("tr").length > posts.length;

  return (
    <Page locale={locale} active="writing" alternateHref={localePath(locale === "tr" ? "en" : "tr", "/writing")}>
      <PageTitle title={t.title} intro={t.intro} />
      {showOtherNote && (
        <p className="mb-10 font-mono text-sm text-muted">
          {t.moreInOther}{" "}
          <Link href={localePath("tr", "/writing")} hrefLang="tr" className="text-accent hover:underline">
            →
          </Link>
        </p>
      )}
      {posts.length > 0 ? (
        <PostList locale={locale} posts={posts} />
      ) : (
        <p className="border-y border-rule py-6 text-muted">{t.empty}</p>
      )}
    </Page>
  );
}
