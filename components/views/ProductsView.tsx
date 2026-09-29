import Page, { PageTitle } from "@/components/Page";
import { ProductGrid, ProductsEmpty } from "@/components/Products";
import { products } from "@/content/products";
import { dict, localePath, otherLocale, type Locale } from "@/lib/i18n";

export default function ProductsView({ locale }: { locale: Locale }) {
  const t = dict[locale].products;

  return (
    <Page locale={locale} active="products" alternateHref={localePath(otherLocale(locale), "/products")}>
      <PageTitle title={t.title} intro={t.intro} />
      {products.length > 0 ? (
        <ProductGrid locale={locale} products={products} />
      ) : (
        <ProductsEmpty locale={locale} />
      )}
    </Page>
  );
}
