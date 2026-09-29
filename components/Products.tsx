import Link from "next/link";
import type { Product } from "@/content/products";
import { dict, localePath, type Locale } from "@/lib/i18n";

export function ProductGrid({ locale, products }: { locale: Locale; products: Product[] }) {
  // Bento: with three or more products the first one takes a tall cell.
  const bento = products.length >= 3;
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {products.map((p, i) => (
        <ProductCard key={p.slug} locale={locale} product={p} tall={bento && i === 0} />
      ))}
    </div>
  );
}

function ProductCard({ locale, product, tall }: { locale: Locale; product: Product; tall: boolean }) {
  const t = dict[locale].products;
  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span
          className="flex size-11 items-center justify-center rounded-xl font-display text-xl text-white"
          style={{ background: "var(--tone-mark)" }}
          aria-hidden="true"
        >
          {product.name[0]}
        </span>
        <span className="rounded-full border border-current/20 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider">
          {t.status[product.status]}
        </span>
      </div>
      <div className={tall ? "mt-auto pt-16" : "mt-8"}>
        <h3 className="font-display text-2xl tracking-tight">{product.name}</h3>
        <p className="mt-1 leading-relaxed opacity-80">{product.tagline[locale]}</p>
        {product.platforms && (
          <p className="mt-3 font-mono text-xs opacity-70">{product.platforms}</p>
        )}
      </div>
    </>
  );
  const className = `tone flex flex-col rounded-2xl p-6 transition-transform duration-300 ${
    tall ? "sm:row-span-2" : ""
  } ${product.url ? "hover:-translate-y-1" : ""}`;

  return product.url ? (
    <a href={product.url} target="_blank" rel="noopener noreferrer" data-tone={product.tone} className={className}>
      {body}
    </a>
  ) : (
    <div data-tone={product.tone} className={className}>
      {body}
    </div>
  );
}

export function ProductsEmpty({ locale }: { locale: Locale }) {
  const t = dict[locale].products;
  return (
    <div data-tone="peach" className="tone relative overflow-hidden rounded-2xl p-8 sm:p-10">
      <div className="absolute -right-10 -top-10 size-40 rounded-full" style={{ background: "var(--tone-mark)", opacity: 0.18 }} aria-hidden="true" />
      <div className="absolute -bottom-16 right-16 size-32 rounded-3xl rotate-12" style={{ background: "var(--tone-mark)", opacity: 0.12 }} aria-hidden="true" />
      <p className="relative font-mono text-xs uppercase tracking-[0.14em]">{t.emptyKicker}</p>
      <h3 className="relative mt-4 font-display text-3xl tracking-tight sm:text-4xl">{t.emptyTitle}</h3>
      <p className="relative mt-3 max-w-md leading-relaxed opacity-80">{t.emptyBody}</p>
      <Link
        href={localePath(locale, "/writing")}
        className="relative mt-6 inline-block font-mono text-sm underline decoration-1 underline-offset-4 hover:opacity-70"
      >
        {t.emptyCta} →
      </Link>
    </div>
  );
}
