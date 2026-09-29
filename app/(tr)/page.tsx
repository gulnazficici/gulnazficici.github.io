import HomeView from "@/components/views/HomeView";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("tr", "/");

export default function Page() {
  return <HomeView locale="tr" />;
}
