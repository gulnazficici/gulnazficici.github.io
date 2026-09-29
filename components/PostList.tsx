import Link from "next/link";
import { formatDate, localePath, type Locale } from "@/lib/i18n";
import type { PostMeta } from "@/lib/posts";

export default function PostList({ locale, posts }: { locale: Locale; posts: PostMeta[] }) {
  return (
    <ul className="border-t border-rule">
      {posts.map((post) => (
        <li key={post.slug} className="border-b border-rule">
          <Link
            href={localePath(locale, `/writing/${post.slug}`)}
            className="group grid gap-1 py-6 sm:grid-cols-[1fr_auto] sm:gap-10"
          >
            <div>
              <h3 className="font-display text-2xl leading-snug tracking-tight group-hover:text-accent transition-colors">
                {post.draft && (
                  <span className="mr-2 align-middle font-mono text-[11px] uppercase tracking-wider text-accent">
                    draft
                  </span>
                )}
                {post.title}
              </h3>
              {post.description && (
                <p className="mt-2 leading-relaxed text-muted">{post.description}</p>
              )}
            </div>
            <time dateTime={post.date} className="order-first font-mono text-xs text-muted sm:order-none sm:pt-2.5">
              {formatDate(locale, post.date)}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  );
}
