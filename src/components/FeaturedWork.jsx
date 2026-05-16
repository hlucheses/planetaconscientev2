import { useLanguage } from '../contexts/LanguageContext.jsx'
import { links } from '../data/links.js'
import { Icon } from './Icon.jsx'

export default function FeaturedWork() {
  const { t, lang } = useLanguage()

  return (
    <section
      id="featured"
      className="relative bg-ink text-cream-light py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Atmospheric background */}
      <div
        className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-oxblood-deep/30 blur-[140px] -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-oxblood/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="reveal-on-scroll grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="section-number">{t('featured.number')}</span>
              <span className="gold-rule w-10" />
              <span className="section-label text-cream-light/60">
                {t('featured.label')}
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="section-title text-cream-light text-balance mb-6">
              {t('featured.title')}
            </h2>
            <p className="text-cream-light/70 text-lg leading-relaxed max-w-2xl">
              {t('featured.intro')}
            </p>
          </div>
        </div>

        {/* Card 1: Planeta Consciente — largest, most prominent */}
        <article className="reveal-on-scroll mb-8 group">
          <div className="relative border border-cream-light/15 hover:border-gold/60 transition-all duration-500 overflow-hidden bg-gradient-to-br from-ink-soft via-ink to-oxblood-deep/30">
            {/* Corner brackets */}
            <span className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold pointer-events-none" />
            <span className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-0">
              {/* Left panel */}
              <div className="lg:col-span-7 p-10 md:p-14 lg:p-16">
                <p className="text-[10px] uppercase tracking-ultra text-gold mb-5">
                  {t('featured.pc.eyebrow')}
                </p>
                <h3 className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-cream-light text-balance mb-5">
                  {t('featured.pc.title')}
                </h3>
                <p className="font-display italic text-gold text-lg mb-8">
                  {t('featured.pc.role')}
                </p>
                <p className="text-cream-light/80 text-base md:text-lg leading-relaxed max-w-xl mb-10">
                  {t('featured.pc.desc')}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={links.planetaConsciente.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-oxblood hover:bg-oxblood-light text-cream-light text-xs uppercase tracking-widest font-medium transition-colors border border-oxblood hover:border-gold/40"
                  >
                    {t('featured.pc.ctaPrimary')}
                    <Icon.External width="14" height="14" />
                  </a>
                  <SocialRow
                    items={[
                      { type: 'instagram', href: links.planetaConsciente.instagram },
                      { type: 'linkedin', href: links.planetaConsciente.linkedin },
                      { type: 'youtube', href: links.planetaConsciente.youtube },
                      { type: 'tiktok', href: links.planetaConsciente.tiktok },
                      { type: 'facebook', href: links.planetaConsciente.facebook },
                    ]}
                  />
                </div>
              </div>

              {/* Right ornamental panel */}
              <div className="lg:col-span-5 relative bg-oxblood-deep/40 border-t lg:border-t-0 lg:border-l border-cream-light/10 p-10 md:p-14 flex flex-col justify-between min-h-[280px] lg:min-h-0">
                <div>
                  <span className="font-display italic text-gold text-sm tracking-widest uppercase">
                    01 · {lang === 'pt' ? 'Pilar Principal' : 'Lead Pillar'}
                  </span>
                </div>

                <div className="relative">
                  {/* Ornament: large monogram */}
                  <span className="absolute -bottom-6 -right-4 font-display italic text-cream-light/5 text-[12rem] leading-none select-none pointer-events-none">
                    PC
                  </span>
                  <p className="relative font-display text-cream-light/90 text-2xl md:text-3xl leading-tight font-light italic text-balance">
                    {lang === 'pt'
                      ? 'Acção climática conduzida por jovens angolanos.'
                      : 'Climate action led by young Angolans.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Card 2: MPLA / CAP 412 */}
        <article className="reveal-on-scroll mb-8 group" style={{ transitionDelay: '100ms' }}>
          <div className="relative border border-cream-light/15 hover:border-gold/50 transition-all duration-500 overflow-hidden bg-ink-soft">
            <span className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/70 pointer-events-none" />
            <span className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold/70 pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-0">
              {/* Left ornamental */}
              <div className="lg:col-span-4 relative bg-gradient-to-br from-oxblood-deep/60 to-ink-soft border-b lg:border-b-0 lg:border-r border-cream-light/10 p-10 md:p-12 flex flex-col justify-between min-h-[240px] lg:min-h-0">
                <div>
                  <span className="font-display italic text-gold text-sm tracking-widest uppercase">
                    02 · {lang === 'pt' ? 'Pilar Cívico' : 'Civic Pillar'}
                  </span>
                </div>
                <div className="relative">
                  <span className="absolute -bottom-4 -left-2 font-display italic text-cream-light/5 text-[10rem] leading-none select-none pointer-events-none">
                    412
                  </span>
                  <p className="relative font-display text-cream-light/90 text-xl md:text-2xl leading-tight font-light italic">
                    {lang === 'pt'
                      ? 'Comunicação institucional e mobilização cívica.'
                      : 'Institutional communication and civic mobilisation.'}
                  </p>
                </div>
              </div>

              {/* Right content */}
              <div className="lg:col-span-8 p-10 md:p-12">
                <p className="text-[10px] uppercase tracking-ultra text-gold mb-5">
                  {t('featured.mpla.eyebrow')}
                </p>
                <h3 className="font-display font-light text-4xl md:text-5xl leading-tight text-cream-light mb-4 text-balance">
                  {t('featured.mpla.title')}
                </h3>
                <p className="font-display italic text-gold text-base mb-6">
                  {t('featured.mpla.role')}
                </p>
                <p className="text-cream-light/80 text-base leading-relaxed mb-5">
                  {t('featured.mpla.desc')}
                </p>
                <p className="text-cream-light/50 text-sm leading-relaxed border-l border-gold/30 pl-4 mb-8">
                  {t('featured.mpla.timeline')}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={links.cap412.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-transparent text-cream-light border border-cream-light/30 hover:border-gold hover:text-gold text-xs uppercase tracking-widest font-medium transition-colors"
                  >
                    {t('featured.mpla.ctaPrimary')}
                    <Icon.ArrowRight width="14" height="14" />
                  </a>
                  <SocialRow
                    items={[
                      { type: 'instagram', href: links.cap412.instagram },
                      { type: 'facebook', href: links.cap412.facebook },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Card 3: Nervi */}
        <article className="reveal-on-scroll group" style={{ transitionDelay: '180ms' }}>
          <div className="relative border border-cream-light/15 hover:border-gold/50 transition-all duration-500 overflow-hidden bg-ink-soft">
            <span className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/70 pointer-events-none" />
            <span className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/70 pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-0">
              {/* Left content */}
              <div className="lg:col-span-8 p-10 md:p-12">
                <p className="text-[10px] uppercase tracking-ultra text-gold mb-5">
                  {t('featured.nervi.eyebrow')}
                </p>
                <h3 className="font-display font-light text-4xl md:text-5xl leading-tight text-cream-light mb-4 text-balance">
                  {t('featured.nervi.title')}
                </h3>
                <p className="font-display italic text-gold text-base mb-6">
                  {t('featured.nervi.role')}
                </p>
                <p className="text-cream-light/80 text-base leading-relaxed mb-8 max-w-xl">
                  {t('featured.nervi.desc')}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={links.nervi.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-transparent text-cream-light border border-cream-light/30 hover:border-gold hover:text-gold text-xs uppercase tracking-widest font-medium transition-colors"
                  >
                    {t('featured.nervi.ctaPrimary')}
                    <Icon.External width="14" height="14" />
                  </a>
                  <SocialRow
                    items={[
                      { type: 'instagram', href: links.nervi.instagram },
                      { type: 'tiktok', href: links.nervi.tiktok },
                      { type: 'youtube', href: links.nervi.youtube },
                    ]}
                  />
                </div>
              </div>

              {/* Right ornamental */}
              <div className="lg:col-span-4 relative bg-gradient-to-bl from-oxblood-deep/40 to-ink-soft border-t lg:border-t-0 lg:border-l border-cream-light/10 p-10 md:p-12 flex flex-col justify-between min-h-[240px] lg:min-h-0">
                <div className="text-right">
                  <span className="font-display italic text-gold text-sm tracking-widest uppercase">
                    03 · {lang === 'pt' ? 'Pilar Tecnológico' : 'Tech Pillar'}
                  </span>
                </div>
                <div className="relative">
                  <span className="absolute -bottom-6 -right-2 font-display italic text-cream-light/5 text-[12rem] leading-none select-none pointer-events-none">
                    N
                  </span>
                  <p className="relative font-display text-cream-light/90 text-xl md:text-2xl leading-tight font-light italic text-right">
                    {lang === 'pt'
                      ? 'Domótica para a Angola moderna.'
                      : 'Smart automation for a modern Angola.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

function SocialRow({ items }) {
  const iconFor = {
    instagram: Icon.Instagram,
    linkedin: Icon.LinkedIn,
    youtube: Icon.YouTube,
    tiktok: Icon.TikTok,
    facebook: Icon.Facebook,
    twitter: Icon.Twitter,
  }
  return (
    <div className="flex items-center gap-1">
      {items.map((it) => {
        const Cmp = iconFor[it.type]
        if (!Cmp) return null
        return (
          <a
            key={it.type}
            href={it.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-cream-light/60 hover:text-gold transition-colors"
            aria-label={it.type}
          >
            <Cmp width="18" height="18" />
          </a>
        )
      })}
    </div>
  )
}
