import { useLanguage } from '../contexts/LanguageContext.jsx'
import { links } from '../data/links.js'
import { Icon } from './Icon.jsx'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="relative bg-cream py-24 md:py-32">
      <div className="container-wide">
        {/* Header */}
        <div className="reveal-on-scroll grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="section-number">{t('projects.number')}</span>
              <span className="gold-rule w-10" />
              <span className="section-label text-ink/60">
                {t('projects.label')}
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="section-title text-ink text-balance mb-6">
              {t('projects.title')}
            </h2>
            <p className="text-ink/70 text-lg leading-relaxed max-w-2xl">
              {t('projects.intro')}
            </p>
          </div>
        </div>

        {/* 1. Planeta Consciente — full-width */}
        <ProjectCardWide
          number="01"
          tagKey="projects.pc.tag"
          title="Planeta Consciente"
          roleKey="projects.pc.role"
          descKey="projects.pc.desc"
          primary={{ href: links.planetaConsciente.website, label: t('projects.visit') }}
          email={links.planetaConsciente.email}
          socials={[
            { type: 'instagram', href: links.planetaConsciente.instagram },
            { type: 'linkedin', href: links.planetaConsciente.linkedin },
            { type: 'youtube', href: links.planetaConsciente.youtube },
            { type: 'tiktok', href: links.planetaConsciente.tiktok },
            { type: 'facebook', href: links.planetaConsciente.facebook },
          ]}
        />

        {/* 2. MPLA / CAP 412 — full-width with darker treatment */}
        <ProjectCardWide
          number="02"
          tagKey="projects.mpla.tag"
          title="MPLA · CAP 412 Jardim de Rosas"
          roleKey="projects.mpla.role"
          descKey="projects.mpla.desc"
          variant="dark"
          primary={{ href: links.cap412.facebook, label: t('projects.follow') }}
          socials={[
            { type: 'instagram', href: links.cap412.instagram },
            { type: 'facebook', href: links.cap412.facebook },
          ]}
        />

        {/* Grid: 3-6 */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8">
          <ProjectCard
            number="03"
            tagKey="projects.nervi.tag"
            title="Nervi"
            roleKey="projects.nervi.role"
            descKey="projects.nervi.desc"
            primary={{ href: links.nervi.website, label: t('projects.visit') }}
            email={links.nervi.email}
            socials={[
              { type: 'instagram', href: links.nervi.instagram },
              { type: 'tiktok', href: links.nervi.tiktok },
              { type: 'youtube', href: links.nervi.youtube },
            ]}
          />
          <ProjectCard
            number="04"
            tagKey="projects.rotary.tag"
            title="Rotary Club of Luanda"
            roleKey="projects.rotary.role"
            descKey="projects.rotary.desc"
            primary={{ href: links.rotary.profile, label: t('projects.visit') }}
            socials={[{ type: 'twitter', href: links.rotary.twitter }]}
          />
          <ProjectCard
            number="05"
            tagKey="projects.mwf.tag"
            title="Mandela Washington Fellowship"
            roleKey="projects.mwf.role"
            descKey="projects.mwf.desc"
            credibility
          />
          <ProjectCard
            number="06"
            tagKey="projects.shapers.tag"
            title="Global Shapers Luanda Hub"
            roleKey="projects.shapers.role"
            descKey="projects.shapers.desc"
            primary={{ href: links.shapers.weforum, label: t('projects.visit') }}
            socials={[{ type: 'instagram', href: links.shapers.instagram }]}
          />
        </div>
      </div>
    </section>
  )
}

/* ───────────── Wide card (1 & 2) ───────────── */
function ProjectCardWide({
  number,
  tagKey,
  title,
  roleKey,
  descKey,
  variant = 'light',
  primary,
  email,
  socials = [],
}) {
  const { t } = useLanguage()
  const dark = variant === 'dark'

  return (
    <article className="reveal-on-scroll mb-8">
      <div
        className={`relative border transition-all duration-500 overflow-hidden ${
          dark
            ? 'bg-ink text-cream-light border-ink/40 hover:border-gold/60'
            : 'bg-cream-light border-ink/10 hover:border-oxblood/60'
        }`}
      >
        <div className="grid lg:grid-cols-12">
          {/* Left: number + tag */}
          <div
            className={`lg:col-span-3 p-8 md:p-10 border-b lg:border-b-0 lg:border-r ${
              dark
                ? 'border-cream-light/10 bg-oxblood-deep/40'
                : 'border-ink/10 bg-cream'
            } flex flex-col justify-between min-h-[180px] lg:min-h-0`}
          >
            <span
              className={`font-display italic text-5xl md:text-6xl font-light ${
                dark ? 'text-gold' : 'text-oxblood'
              }`}
            >
              {number}
            </span>
            <p
              className={`text-[10px] uppercase tracking-ultra mt-6 ${
                dark ? 'text-cream-light/60' : 'text-ink/55'
              }`}
            >
              {t(tagKey)}
            </p>
          </div>

          {/* Right: content */}
          <div className="lg:col-span-9 p-8 md:p-10 lg:p-12">
            <h3
              className={`font-display font-light text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 text-balance ${
                dark ? 'text-cream-light' : 'text-ink'
              }`}
            >
              {title}
            </h3>
            <p
              className={`font-display italic text-base md:text-lg mb-6 ${
                dark ? 'text-gold' : 'text-oxblood'
              }`}
            >
              {t(roleKey)}
            </p>
            <p
              className={`text-base leading-relaxed mb-8 max-w-3xl ${
                dark ? 'text-cream-light/80' : 'text-ink/75'
              }`}
            >
              {t(descKey)}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {primary && (
                <a
                  href={primary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-medium transition-colors ${
                    dark
                      ? 'bg-oxblood text-cream-light hover:bg-oxblood-light border border-oxblood hover:border-gold/40'
                      : 'bg-ink text-cream-light hover:bg-oxblood border border-ink hover:border-oxblood'
                  }`}
                >
                  {primary.label}
                  <Icon.External width="13" height="13" />
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-medium transition-colors border ${
                    dark
                      ? 'text-cream-light/85 border-cream-light/30 hover:border-gold hover:text-gold'
                      : 'text-ink/85 border-ink/30 hover:border-oxblood hover:text-oxblood'
                  }`}
                >
                  <Icon.Mail width="13" height="13" />
                  Email
                </a>
              )}
              <SocialIcons items={socials} dark={dark} />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

/* ───────────── Compact card (3-6) ───────────── */
function ProjectCard({
  number,
  tagKey,
  title,
  roleKey,
  descKey,
  primary,
  email,
  socials = [],
  credibility = false,
}) {
  const { t } = useLanguage()

  return (
    <article className="reveal-on-scroll group relative bg-cream-light border border-ink/10 hover:border-oxblood/50 transition-all duration-500 p-8 md:p-10 h-full flex flex-col">
      <div className="flex items-baseline justify-between mb-6">
        <span className="font-display italic text-3xl text-oxblood font-light">
          {number}
        </span>
        {credibility && (
          <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-dark">
            <Icon.Award width="14" height="14" />
            Alumnus
          </span>
        )}
      </div>

      <p className="text-[10px] uppercase tracking-ultra text-ink/55 mb-4">
        {t(tagKey)}
      </p>

      <h3 className="font-display font-light text-2xl md:text-3xl leading-tight text-ink mb-3 text-balance">
        {title}
      </h3>

      <p className="font-display italic text-sm text-oxblood mb-5">
        {t(roleKey)}
      </p>

      <p className="text-ink/70 text-sm leading-relaxed mb-6 flex-grow">
        {t(descKey)}
      </p>

      <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-ink/10">
        {primary && (
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-widest font-medium border border-ink/30 text-ink hover:border-oxblood hover:text-oxblood transition-colors"
          >
            {primary.label}
            <Icon.ArrowRight width="11" height="11" />
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="p-2 text-ink/55 hover:text-oxblood transition-colors"
            aria-label="Email"
          >
            <Icon.Mail width="16" height="16" />
          </a>
        )}
        <SocialIcons items={socials} />
      </div>
    </article>
  )
}

function SocialIcons({ items, dark = false }) {
  const map = {
    instagram: Icon.Instagram,
    linkedin: Icon.LinkedIn,
    youtube: Icon.YouTube,
    tiktok: Icon.TikTok,
    facebook: Icon.Facebook,
    twitter: Icon.Twitter,
  }

  return (
    <div className="flex items-center gap-0.5">
      {items.map((it) => {
        const Cmp = map[it.type]
        if (!Cmp) return null
        return (
          <a
            key={it.type}
            href={it.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 transition-colors ${
              dark
                ? 'text-cream-light/55 hover:text-gold'
                : 'text-ink/55 hover:text-oxblood'
            }`}
            aria-label={it.type}
          >
            <Cmp width="16" height="16" />
          </a>
        )
      })}
    </div>
  )
}
