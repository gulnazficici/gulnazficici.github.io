export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];

export const otherLocale = (locale: Locale): Locale => (locale === "tr" ? "en" : "tr");

// Turkish lives at the root, English under /en. URL segments are English in both.
export function localePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path;
  if (locale === "tr") return clean || "/";
  return `/en${clean}`;
}

export function formatDate(locale: Locale, iso: string): string {
  return new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

export const dict = {
  tr: {
    nav: { writing: "Yazılar", products: "Ürünler", about: "Hakkımda" },
    home: {
      headline: "Ürünler geliştiriyorum ve yolda öğrendiklerimi yazıyorum.",
      intro:
        "10 yılı aşkın iOS, macOS ve web deneyiminin ardından, şimdi yapay zekâyla küçük ve kullanışlı ürünler yapıyorum. Bu site o sürecin defteri.",
      now: "Şu an",
      latest: "Son yazılar",
      allWriting: "Tüm yazılar",
      workshop: "Atölye",
    },
    writing: {
      title: "Yazılar",
      intro: "Ürün geliştirme, iOS ve yapay zekâ üzerine notlar.",
      empty: "İlk yazı yakında burada.",
      minRead: (n: number) => `${n} dk okuma`,
      readIn: "Bu yazıyı İngilizce oku",
      back: "Tüm yazılar",
      moreInOther: "",
    },
    products: {
      title: "Ürünler",
      intro: "Yaptığım ürünler, fikir aşamasından yayına kadar.",
      emptyKicker: "Yapım aşamasında",
      emptyTitle: "İlk ürün yolda.",
      emptyBody:
        "Ürünlerimi burada, fikir aşamasından yayına kadar paylaşacağım. Süreci yazılarda takip edebilirsin.",
      emptyCta: "Yazılara git",
      status: { idea: "Fikir", building: "Geliştiriliyor", beta: "Beta", live: "Yayında" },
      visit: "Ürüne git",
    },
    about: {
      title: "Hakkımda",
      bio: [
        "10 yılı aşkın süredir, ağırlıklı olarak iOS ve macOS odaklı, yüksek kaliteli mobil ve web uygulamaları geliştiren bir yazılım mühendisiyim.",
        "Modern teknolojinin önünde kalmayı seviyorum; bugün bu, yapay zekânın üretme biçimimi nasıl değiştirebileceğini keşfetmek demek. Yapay zekâyı geliştirme sürecime katmaktan, yaptığım uygulamalarda nelerin mümkün olduğunu yeniden düşünmeye kadar, sırada ne olduğu için heyecanlıyım.",
      ],
      experience: "Deneyim",
      skills: "Yetenekler",
      contact: "İletişim",
    },
    footer: { rss: "RSS" },
    theme: "Temayı değiştir",
  },
  en: {
    nav: { writing: "Writing", products: "Products", about: "About" },
    home: {
      headline: "I build products and write about what I learn along the way.",
      intro:
        "After 10+ years of iOS, macOS, and web work, I'm now making small, useful products with AI. This site is my notebook for that process.",
      now: "Now",
      latest: "Latest writing",
      allWriting: "All writing",
      workshop: "Workshop",
    },
    writing: {
      title: "Writing",
      intro: "Notes on building products, iOS, and AI.",
      empty: "The first post is coming soon.",
      minRead: (n: number) => `${n} min read`,
      readIn: "Read this post in Turkish",
      back: "All writing",
      moreInOther: "Most of my writing is in Turkish for now. Browse it",
    },
    products: {
      title: "Products",
      intro: "Things I'm building, from first idea to launch.",
      emptyKicker: "In progress",
      emptyTitle: "The first product is on its way.",
      emptyBody:
        "I'll share my products here, from idea to launch. You can follow the process in my writing.",
      emptyCta: "Go to writing",
      status: { idea: "Idea", building: "Building", beta: "Beta", live: "Live" },
      visit: "Visit",
    },
    about: {
      title: "About",
      bio: [
        "I'm a software engineer with over 10 years of experience crafting high-quality mobile and web applications, with a deep focus on iOS and macOS.",
        "I like staying at the forefront of modern technology, and right now that means exploring how AI can change the way I build. From integrating AI into my development workflow to rethinking what's possible in the apps I create, I'm excited about what's coming next.",
      ],
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
    },
    footer: { rss: "RSS" },
    theme: "Toggle theme",
  },
} as const;
