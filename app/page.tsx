import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const experience = [
  {
    name: "🎨 Zeplin",
    title: "Senior Product Engineer",
    subtitle: "macOS · Frontend · Plugins",
    period: "2020–2025",
    description:
      "Owned cross-platform product development across Web, macOS, and plugin ecosystem, contributing to core product features and AI-powered projects.",
  },
  {
    name: "🏦 Akbank iOS App",
    title: "Senior iOS Developer",
    subtitle: "iOS",
    period: "2018–2020",
    description:
      "Worked on one of Turkey's largest banking apps, contributing to core mobile features and platform modernization.",
  },
  {
    name: "📱 iMobileCode",
    title: "Mobile Developer",
    subtitle: "iOS · Android",
    period: "2014–2018",
    description:
      "Developed and maintained multiple mobile applications for both iOS and Android platforms from scratch. Owned the full software development lifecycle, from planning to delivery.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-2xl items-center justify-between px-6 py-8">
        <span className="font-semibold tracking-tight">Gülnaz Fıçıcı</span>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm text-muted">
            <a href="#experience" className="hover:text-foreground transition-colors">
              Work Experience
            </a>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-20 space-y-24">
        {/* Bio */}
        <section>
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            Hi, I&apos;m Gülnaz 👋
          </h1>
          <p className="text-lg text-muted mb-10" style={{ lineHeight: "1.6", maxWidth: "580px" }}>
            I&apos;m a software engineer with over 10 years of experience
            crafting high-quality mobile and web applications, with a deep focus
            on iOS and macOS. I&apos;m passionate about staying at the forefront
            of modern technology and right now, that means actively exploring
            how AI can enhance the way I build. From integrating AI into my
            development workflow to rethinking what&apos;s possible in the apps
            I create, I&apos;m excited about what&apos;s coming next.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/gulnazficici"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gulnaz-ficici/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="mailto:gulnazficici@gmail.com"
              className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              <MailIcon />
              Contact me
            </a>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience">
          <h2 className="text-2xl font-bold tracking-tight mb-8">💼 Work Experience</h2>
          <div className="flex flex-col gap-4">
            {experience.map((project) => (
              <div
                key={project.name}
                className="relative rounded-2xl border border-border bg-card p-6 pl-8 transition-all duration-300 hover:border-accent hover:bg-card-hover hover:shadow-lg hover:-translate-y-1 overflow-hidden"
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-accent" />

                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="font-semibold text-base leading-snug">{project.name}</h3>
                  <span className="text-xs text-muted shrink-0 mt-0.5">
                    {project.period}
                  </span>
                </div>
                {(project.title || project.subtitle) && (
                  <div className="mb-4">
                    {project.title && (
                      <p className="text-xs font-semibold text-accent">{project.title}</p>
                    )}
                    {project.subtitle && (
                      <p className="text-xs text-muted">{project.subtitle}</p>
                    )}
                  </div>
                )}
                {project.description && (
                  <p className="text-sm text-muted">
                    {project.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-8">🛠 Skills</h2>
          <div className="space-y-6">
            {[
              {
                category: "🍎 Apple Platforms",
                items: ["iOS", "macOS", "SwiftUI", "UIKit", "AppKit"],
              },
              {
                category: "🌐 Frontend",
                items: ["React", "TypeScript", "JavaScript"],
              },
              {
                category: "⚙️ Platform & Tooling",
                items: ["Electron", "CI/CD", "Figma Plugin", "Sketch Plugin", "Adobe XD Plugin"],
              },
              {
                category: "🤖 AI & Product",
                items: ["AI-powered features", "LLM integration", "OpenAI", "Claude", "Prompt engineering", "AI workflows"],
              },
            ].map(({ category, items }) => (
              <div key={category}>
                <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="border border-border bg-card text-sm text-muted"
                      style={{ borderRadius: "999px", padding: "8px 14px" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
