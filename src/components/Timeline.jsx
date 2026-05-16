import { useLanguage } from '../contexts/LanguageContext.jsx'
import { translations } from '../data/translations.js'

export default function Timeline() {
  const { t, lang } = useLanguage()
  const items = translations.timeline.items

  return (
    <section id="timeline" className="relative bg-ink text-cream-light py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-oxblood to-transparent" />

      <div className="container-wide">
        {/* Header */}
        <div className="reveal-on-scroll grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="section-number">{t('timeline.number')}</span>
              <span className="gold-rule w-10" />
              <span className="section-label text-cream-light/60">
                {t('timeline.label')}
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="section-title text-cream-light text-balance">
              {t('timeline.title')}
            </h2>
          </div>
        </div>

        {/* Timeline list */}
        <div className="relative max-w-4xl mx-auto lg:ml-[33.33%] lg:mr-0 lg:max-w-none lg:w-2/3">
          {/* Vertical rule */}
          <div className="absolute top-2 bottom-2 left-[6.5rem] md:left-32 w-px bg-cream-light/15" aria-hidden="true" />

          {items.map((item, idx) => {
            const year = lang === 'en' && item.yearEn ? item.yearEn : item.year
            const title = item.title[lang] ?? item.title.pt
            const desc = item.desc[lang] ?? item.desc.pt

            return (
              <div
                key={idx}
                className="reveal-on-scroll relative flex items-start gap-6 md:gap-10 py-5 group"
                style={{ transitionDelay: `${Math.min(idx * 40, 320)}ms` }}
              >
                {/* Year column */}
                <div className="w-24 md:w-28 flex-shrink-0 pt-1">
                  <span className="font-display italic text-gold text-sm md:text-base whitespace-nowrap">
                    {year}
                  </span>
                </div>

                {/* Dot */}
                <div className="relative w-3 flex-shrink-0 pt-2.5">
                  <span className="block w-2.5 h-2.5 rounded-full bg-oxblood border border-gold group-hover:bg-gold transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <h3 className="font-display text-lg md:text-xl text-cream-light font-light leading-tight mb-1">
                    {title}
                  </h3>
                  <p className="text-cream-light/55 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
