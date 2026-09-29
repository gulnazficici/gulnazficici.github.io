import AboutView from "@/components/views/AboutView";
import { dict } from "@/lib/i18n";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("tr", "/about", { title: dict.tr.about.title });

export default function Page() {
  return <AboutView locale="tr" />;
}
