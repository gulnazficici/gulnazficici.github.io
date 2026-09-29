import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { dict, localePath, otherLocale, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

type Section = "writing" | "products" | "about";

export default function Page({
  locale,
  active,
  alternateHref,
  children,
}: {
  locale: Locale;
  active?: Section;
  // Where the language switch should lead; defaults to the other locale's home.
  alternateHref?: string;
  children: React.ReactNode;
}) {
  const t = dict[locale];
  const other = otherLocale(locale);
  const nav: Section[] = ["writing", "products", "about"];

  return (
    <div className="min-h-screen bg-background text-ink">
      <header className="mx-auto max-w-3xl px-6 pt-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 border-b border-ink pb-4">
          <Link
            href={localePath(locale)}
            className="font-display text-2xl tracking-tight hover:text-accent transition-colors"
          >
            {site.name}
          </Link>
          <div className="flex items-center gap-5 text-sm">
            <nav className="flex gap-5">
              {nav.map((key) => (
                <Link
                  key={key}
                  href={localePath(locale, `/${key}`)}
                  className={
                    active === key
                      ? "text-ink underline decoration-accent decoration-2 underline-offset-8"
                      : "text-muted hover:text-ink transition-colors"
                  }
                >
                  {t.nav[key]}
                </Link>
              ))}
            </nav>
            <span className="h-4 w-px bg-rule" aria-hidden="true" />
            <div className="flex gap-1.5 font-mono text-xs uppercase">
              <span className="text-ink">{locale}</span>
              <span className="text-rule" aria-hidden="true">/</span>
              <Link
                href={alternateHref ?? localePath(other)}
                hrefLang={other}
                className="text-muted hover:text-accent transition-colors"
              >
                {other}
              </Link>
            </div>
            <ThemeToggle label={t.theme} />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">{children}</main>

      <footer className="mx-auto max-w-3xl px-6 pb-12">
        <div className="flex flex-wrap justify-between gap-4 border-t border-rule pt-6 font-mono text-xs text-muted">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <div className="flex gap-5">
            <a href={localePath(locale, "/rss.xml")} className="hover:text-accent transition-colors">
              {t.footer.rss}
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
      {children}
    </h2>
  );
}

export function PageTitle({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="mb-14">
      <h1 className="font-display text-5xl tracking-tight">{title}</h1>
      {intro && <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}
