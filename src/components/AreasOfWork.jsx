import { useLanguage } from '../contexts/LanguageContext.jsx'

const cardIcons = {
  tech: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
      <rect x="6" y="10" width="36" height="24" rx="2" />
      <line x1="6" y1="18" x2="42" y2="18" />
      <circle cx="11" cy="14" r="0.8" fill="currentColor" />
      <circle cx="14" cy="14" r="0.8" fill="currentColor" />
      <path d="M16 38h16M22 34v4M26 34v4" />
    </svg>
  ),
  civic: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
      <path d="M8 38V20l16-10 16 10v18" />
      <path d="M14 38V24h20v14" />
      <line x1="6" y1="38" x2="42" y2="38" />
      <rect x="20" y="28" width="8" height="10" />
    </svg>
  ),
  climate: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
      <path d="M24 6c-6 6-6 14 0 20 6-6 6-14 0-20z" />
      <path d="M24 18c-4 0-8 4-8 10 0 8 8 14 8 14s8-6 8-14c0-6-4-10-8-10z" />
    </svg>
  ),
  entrepreneurship: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
      <path d="M24 6l4 8 9 1.3-6.5 6.3 1.5 9-8-4.2-8 4.2 1.5-9L11 15.3 20 14z" />
      <path d="M16 38h16" />
    </svg>
  ),
  communication: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
      <path d="M6 12h36v22H22l-8 6v-6H6z" />
      <line x1="14" y1="20" x2="34" y2="20" />
      <line x1="14" y1="26" x2="28" y2="26" />
    </svg>
  ),
  international: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
      <circle cx="24" cy="24" r="18" />
      <ellipse cx="24" cy="24" rx="8" ry="18" />
      <line x1="6" y1="24" x2="42" y2="24" />
    </svg>
  ),
}

export default function AreasOfWork() {
  const { t } = useLanguage()

  const cards = [
    { key: 'tech', icon: cardIcons.tech },
    { key: 'civic', icon: cardIcons.civic },
    { key: 'climate', icon: cardIcons.climate },
    { key: 'entrepreneurship', icon: cardIcons.entrepreneurship },
    { key: 'communication', icon: cardIcons.communication },
    { key: 'international', icon: cardIcons.international },
  ]

  return (
    <section id="areas" className="relative bg-cream-light py-24 md:py-32">
      <div className="container-wide">
        {/* Header */}
        <div className="reveal-on-scroll grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="section-number">{t('areas.number')}</span>
              <span className="gold-rule w-10" />
              <span className="section-label text-ink/60">
                {t('areas.label')}
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="section-title text-ink text-balance mb-6">
              {t('areas.title')}
            </h2>
            <p className="text-ink/70 text-lg leading-relaxed max-w-2xl">
              {t('areas.intro')}
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {cards.map((card, idx) => (
            <div
              key={card.key}
              className="reveal-on-scroll group bg-cream-light hover:bg-cream-warm transition-colors duration-500 p-8 md:p-10 relative"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              {/* Number */}
              <span className="absolute top-6 right-6 font-display italic text-gold/60 text-sm">
                0{idx + 1}
              </span>

              {/* Icon */}
              <div className="text-oxblood mb-8 group-hover:text-oxblood-deep transition-colors duration-300">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl md:text-2xl text-ink leading-tight mb-3 text-balance">
                {t(`areas.cards.${card.key}.title`)}
              </h3>

              {/* Underline */}
              <div className="h-px w-8 bg-gold mb-4 group-hover:w-16 transition-[width] duration-500" />

              {/* Description */}
              <p className="text-ink/70 text-sm leading-relaxed">
                {t(`areas.cards.${card.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
