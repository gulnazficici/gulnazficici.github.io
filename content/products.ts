import type { Locale } from "@/lib/i18n";

export type ProductStatus = "idea" | "building" | "beta" | "live";
export type ProductTone = "peach" | "sky" | "mint" | "lilac";

export type Product = {
  slug: string;
  name: string;
  tagline: Record<Locale, string>;
  status: ProductStatus;
  tone: ProductTone;
  platforms?: string;
  url?: string;
};

// Add products here, newest first. Example:
// {
//   slug: "kurcep",
//   name: "KurCep",
//   tagline: { tr: "Döviz kurları cebinde", en: "Exchange rates in your pocket" },
//   status: "building",
//   tone: "peach",
//   platforms: "iOS",
//   url: "https://apps.apple.com/...",
// },
export const products: Product[] = [];
