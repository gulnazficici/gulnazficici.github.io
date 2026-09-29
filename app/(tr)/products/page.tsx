import ProductsView from "@/components/views/ProductsView";
import { dict } from "@/lib/i18n";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("tr", "/products", { title: dict.tr.products.title });

export default function Page() {
  return <ProductsView locale="tr" />;
}
