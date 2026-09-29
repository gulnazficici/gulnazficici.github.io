import type { Metadata } from "next";
import PostView from "@/components/views/PostView";
import { pageMetadata } from "@/lib/meta";
import { getPosts, hasTranslation, staticSlugs } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return staticSlugs("tr");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPosts("tr").find((p) => p.slug === slug);
  if (!post) return {};
  return pageMetadata(
    "tr",
    `/writing/${slug}`,
    {
      title: post.title,
      description: post.description,
      openGraph: { type: "article", title: post.title, description: post.description, publishedTime: post.date },
    },
    hasTranslation("en", slug),
  );
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <PostView locale="tr" slug={slug} />;
}
