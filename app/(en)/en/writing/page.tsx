import WritingView from "@/components/views/WritingView";
import { dict } from "@/lib/i18n";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("en", "/writing", { title: dict.en.writing.title });

export default function Page() {
  return <WritingView locale="en" />;
}
