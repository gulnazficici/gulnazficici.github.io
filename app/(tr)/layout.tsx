import RootDocument from "@/components/RootDocument";
import { layoutMetadata } from "@/lib/meta";

export const metadata = layoutMetadata("tr");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="tr">{children}</RootDocument>;
}
