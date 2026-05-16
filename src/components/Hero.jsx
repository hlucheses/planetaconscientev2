import { useLanguage } from '../contexts/LanguageContext.jsx'
import { links } from '../data/links.js'
import { Icon } from './Icon.jsx'

export default function Hero() {
  const { t, lang } = useLanguage()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="top"
      className="relative min-h-screen bg-ink text-cream-light overflow-hidden flex flex-col"
    >
      {/* Background image (replaceable via /public/hero-bg.jpg) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${links.heroBg})` }}
        aria-hidden="true"
      />

      {/* Layered gradients for depth */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-ink via-ink/90 to-ink"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-10 bg-gradient-to-r from-ink via-ink/70 to-transparent"
        aria-hidden="true"
      />

      {/* Subtle red glow accent */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-oxblood/30 blur-[120px] z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-oxblood-deep/40 blur-[100px] z-10"
        aria-hidden="true"
      />

      {/* Top gold rule */}
      <div className="absolute top-20 md:top-24 left-6 md:left-10 lg:left-16 right-6 md:right-10 lg:right-16 z-20">
        <div className="gold-rule-long opacity-40" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-20 flex-1 flex flex-col justify-center pt-32 md:pt-36 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="lg:col-span-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <span className="gold-rule" />
              <span className="section-label text-gold">
                {t('hero.eyebrow')}
              </span>
            </div>

            {/* Name */}
            <h1
              className="display-headline text-cream-light text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-3 opacity-0 animate-fade-up"
              style={{ animationDelay: '250ms' }}
            >
              Helder
              <br />
              <span className="italic font-extralight text-gold">Lucheses</span>
            </h1>

            {/* Full name */}
            <p
              className="font-display italic text-cream-light/60 text-base md:text-lg mb-10 opacity-0 animate-fade-up"
              style={{ animationDelay: '400ms' }}
            >
              {t('hero.fullName')}
            </p>

            {/* Slogan */}
            <p
              className="font-display text-2xl md:text-3xl lg:text-4xl leading-[1.18] text-cream-light/95 max-w-3xl text-balance mb-8 opacity-0 animate-fade-up font-light"
              style={{ animationDelay: '550ms' }}
            >
              {t('hero.slogan')}
            </p>

            {/* Intro */}
            <p
              className="text-cream-light/70 text-base md:text-lg max-w-2xl leading-relaxed mb-10 opacity-0 animate-fade-up text-pretty"
              style={{ animationDelay: '700ms' }}
            >
              {t('hero.intro')}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '850ms' }}
            >
              <button
                onClick={() => scrollTo('featured')}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-oxblood hover:bg-oxblood-light text-cream-light font-sans text-xs uppercase tracking-widest font-medium transition-all duration-300 border border-oxblood hover:border-gold/40"
              >
                {t('hero.ctaWork')}
                <Icon.ArrowRight width="16" height="16" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="btn-ghost-light text-xs"
              >
                {t('hero.ctaContact')}
              </button>

              <a
                href={links.cv}
                download
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-transparent text-gold font-sans text-xs uppercase tracking-widest font-medium transition-all duration-300 border border-gold/40 hover:bg-gold hover:text-ink"
              >
                <Icon.Download width="14" height="14" />
                {t('hero.ctaCV')}
              </a>
            </div>
          </div>

          {/* Right: portrait frame */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end opacity-0 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <div className="relative w-64 sm:w-80 lg:w-full max-w-sm aspect-[4/5]">
              {/* Gold corner brackets */}
              <div className="absolute -top-2 -left-2 w-10 h-10 border-t border-l border-gold" />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b border-r border-gold" />

              {/* Image frame */}
              <div className="absolute inset-0 overflow-hidden border border-cream-light/10 bg-ink-soft">
                <img
                  src={links.profileImg}
                  alt="Helder Lucheses Gonçalves da Costa"
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    // Fallback when /profile.jpg is missing — show monogram
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement.classList.add('show-fallback')
                  }}
                />
                {/* Monogram fallback */}
                <div className="absolute inset-0 hidden [.show-fallback_&]:flex items-center justify-center bg-gradient-to-br from-ink-soft via-oxblood-deep/30 to-ink">
                  <span className="font-display text-9xl text-gold/80 italic">HL</span>
                </div>
              </div>

              {/* Caption */}
              <div className="absolute -bottom-10 left-0 right-0 text-center">
                <p className="font-display italic text-gold text-xs tracking-widest uppercase">
                  Luanda · Angola
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom positioning + scroll hint */}
      <div className="container-wide relative z-20 pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <p className="text-cream-light/55 text-xs md:text-sm tracking-wider max-w-2xl leading-relaxed">
            {t('hero.positioning')}
          </p>

          <button
            onClick={() => scrollTo('about')}
            className="group inline-flex items-center gap-3 text-cream-light/60 hover:text-gold transition-colors self-start md:self-end"
          >
            <span className="text-xs uppercase tracking-widest">
              {t('hero.scrollHint')}
            </span>
            <span className="w-12 h-px bg-current" />
            <Icon.ArrowDown width="14" height="14" className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
