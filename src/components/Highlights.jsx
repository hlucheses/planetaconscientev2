import { useLanguage } from '../contexts/LanguageContext.jsx'

export default function Highlights() {
  const { t } = useLanguage()
  const items = t('highlights.items')

  return (
    <section id="highlights" className="relative bg-cream-light py-24 md:py-32">
      <div className="container-wide">
        {/* Header */}
        <div className="reveal-on-scroll grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="section-number">{t('highlights.number')}</span>
              <span className="gold-rule w-10" />
              <span className="section-label text-ink/60">
                {t('highlights.label')}
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="section-title text-ink text-balance">
              {t('highlights.title')}
            </h2>
          </div>
        </div>

        {/* List */}
        <div className="reveal-on-scroll grid md:grid-cols-2 gap-x-12 gap-y-px bg-ink/10 border-y border-ink/10">
          {Array.isArray(items) &&
            items.map((item, idx) => (
              <div
                key={idx}
                className="bg-cream-light flex items-start gap-5 py-5 px-2 group"
              >
                <span className="font-display italic text-gold text-sm pt-1 w-8 flex-shrink-0 text-right">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="block w-px h-5 bg-gold/40 mt-1.5 flex-shrink-0" />
                <p className="text-ink/85 text-base leading-relaxed">{item}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
