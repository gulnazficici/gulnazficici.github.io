import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: "Blog — Gülnaz Fıçıcı",
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-2xl items-center justify-between px-6 py-8">
        <Link href="/" className="font-semibold tracking-tight hover:text-muted transition-colors">
          Gülnaz Fıçıcı
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm text-muted">
            <Link href="/#experience" className="hover:text-foreground transition-colors">
              Work Experience
            </Link>
            <Link href="/blog" className="text-foreground">
              Blog
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Blog ✍️</h1>
        <p className="text-muted text-lg" style={{ lineHeight: "1.6" }}>
          Coming soon. I&apos;ll be writing about iOS, AI, and the things I&apos;m building.
        </p>
      </main>
    </div>
  );
}
