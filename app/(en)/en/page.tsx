import HomeView from "@/components/views/HomeView";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("en", "/");

export default function Page() {
  return <HomeView locale="en" />;
}
