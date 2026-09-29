import { rssFeed } from "@/lib/meta";

export const dynamic = "force-static";

export function GET() {
  return rssFeed("en");
}
