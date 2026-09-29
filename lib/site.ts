import type { Locale } from "./i18n";

export const site = {
  name: "Gülnaz Fıçıcı",
  url: "https://gulnaz.net",
  email: "gulnazficici@gmail.com",
  github: "https://github.com/gulnazficici",
  linkedin: "https://www.linkedin.com/in/gulnaz-ficici/",
  // One line about what you're working on right now. Leave empty to hide it.
  now: {
    tr: "",
    en: "",
  } satisfies Record<Locale, string>,
};

export const experience = [
  {
    company: "Zeplin",
    period: "2020–2025",
    platforms: "macOS · Frontend · Plugins",
    role: { tr: "Kıdemli Ürün Mühendisi", en: "Senior Product Engineer" },
    description: {
      tr: "Web, macOS ve eklenti ekosistemi genelinde platformlar arası ürün geliştirmeyi üstlendim; temel ürün özelliklerine ve yapay zekâ destekli projelere katkı sağladım.",
      en: "Owned cross-platform product development across Web, macOS, and the plugin ecosystem, contributing to core product features and AI-powered projects.",
    },
  },
  {
    company: "Akbank",
    period: "2018–2020",
    platforms: "iOS",
    role: { tr: "Kıdemli iOS Geliştirici", en: "Senior iOS Developer" },
    description: {
      tr: "Türkiye'nin en büyük bankacılık uygulamalarından birinde temel mobil özellikler ve platform modernizasyonu üzerinde çalıştım.",
      en: "Worked on one of Turkey's largest banking apps, contributing to core mobile features and platform modernization.",
    },
  },
  {
    company: "iMobileCode",
    period: "2014–2018",
    platforms: "iOS · Android",
    role: { tr: "Mobil Geliştirici", en: "Mobile Developer" },
    description: {
      tr: "iOS ve Android için birçok uygulamayı sıfırdan geliştirip sürdürdüm; planlamadan teslimata kadar tüm geliştirme sürecini üstlendim.",
      en: "Developed and maintained multiple iOS and Android apps from scratch, owning the full development lifecycle from planning to delivery.",
    },
  },
];

export const skills = [
  { group: { tr: "Apple platformları", en: "Apple platforms" }, items: ["iOS", "macOS", "SwiftUI", "UIKit", "AppKit"] },
  { group: { tr: "Frontend", en: "Frontend" }, items: ["React", "TypeScript", "JavaScript"] },
  {
    group: { tr: "Platform ve araçlar", en: "Platform and tooling" },
    items: ["Electron", "CI/CD", "Figma Plugin", "Sketch Plugin", "Adobe XD Plugin"],
  },
  {
    group: { tr: "Yapay zekâ ve ürün", en: "AI and product" },
    items: ["LLM integration", "OpenAI", "Claude", "Prompt engineering", "AI workflows"],
  },
];
