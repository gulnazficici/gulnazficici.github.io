import ProductsView from "@/components/views/ProductsView";
import { dict } from "@/lib/i18n";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("en", "/products", { title: dict.en.products.title });

export default function Page() {
  return <ProductsView locale="en" />;
}
