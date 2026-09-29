import Page, { PageTitle, SectionLabel } from "@/components/Page";
import { dict, localePath, otherLocale, type Locale } from "@/lib/i18n";
import { experience, site, skills } from "@/lib/site";

export default function AboutView({ locale }: { locale: Locale }) {
  const t = dict[locale].about;

  return (
    <Page locale={locale} active="about" alternateHref={localePath(otherLocale(locale), "/about")}>
      <PageTitle title={t.title} />

      <section className="mb-20 max-w-2xl space-y-5 text-lg leading-relaxed">
        {t.bio.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </section>

      <section className="mb-20">
        <SectionLabel>{t.experience}</SectionLabel>
        <ul className="border-t border-rule">
          {experience.map((job) => (
            <li key={job.company} className="grid gap-2 border-b border-rule py-6 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <span className="font-mono text-xs text-muted sm:pt-2">{job.period}</span>
              <div>
                <h3 className="font-display text-2xl tracking-tight">{job.company}</h3>
                <p className="mt-1 text-sm">
                  {job.role[locale]} <span className="text-muted">· {job.platforms}</span>
                </p>
                <p className="mt-3 leading-relaxed text-muted">{job.description[locale]}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-20">
        <SectionLabel>{t.skills}</SectionLabel>
        <dl className="grid gap-6 sm:grid-cols-2">
          {skills.map(({ group, items }) => (
            <div key={group.en}>
              <dt className="font-display text-lg">{group[locale]}</dt>
              <dd className="mt-1 leading-relaxed text-muted">{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <SectionLabel>{t.contact}</SectionLabel>
        <div className="flex flex-wrap gap-6 font-mono text-sm">
          <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors">{site.email}</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub ↗</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn ↗</a>
        </div>
      </section>
    </Page>
  );
}
