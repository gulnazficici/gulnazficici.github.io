import type { Metadata } from "next";
import PostView from "@/components/views/PostView";
import { pageMetadata } from "@/lib/meta";
import { getPosts, hasTranslation, staticSlugs } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return staticSlugs("en");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPosts("en").find((p) => p.slug === slug);
  if (!post) return {};
  return pageMetadata(
    "en",
    `/writing/${slug}`,
    {
      title: post.title,
      description: post.description,
      openGraph: { type: "article", title: post.title, description: post.description, publishedTime: post.date },
    },
    hasTranslation("tr", slug),
  );
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <PostView locale="en" slug={slug} />;
}
