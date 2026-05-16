import { useLanguage } from '../contexts/LanguageContext.jsx'

export default function Vision() {
  const { t } = useLanguage()
  const pillars = t('vision.pillars')

  return (
    <section
      id="vision"
      className="relative bg-ink text-cream-light py-28 md:py-40 overflow-hidden"
    >
      {/* Atmospheric backdrop */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-oxblood/15 blur-[160px] -translate-y-1/2"
        aria-hidden="true"
      />

      {/* Top decorative rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      {/* Bottom decorative rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container-tight relative z-10">
        {/* Eyebrow */}
        <div className="reveal-on-scroll text-center mb-12">
          <div className="inline-flex items-center gap-4">
            <span className="gold-rule w-10" />
            <span className="section-label text-gold">{t('vision.label')}</span>
            <span className="gold-rule w-10" />
          </div>
          <p className="mt-6 font-display italic text-gold text-sm tracking-widest uppercase">
            {t('vision.number')} · {t('vision.eyebrow')}
          </p>
        </div>

        {/* Main statement */}
        <div className="reveal-on-scroll" style={{ transitionDelay: '120ms' }}>
          <blockquote className="font-display font-light text-cream-light text-3xl md:text-5xl lg:text-6xl leading-[1.15] text-center text-balance">
            <span className="text-gold/70 font-display italic">"</span>
            {t('vision.statement')}
            <span className="text-gold/70 font-display italic">"</span>
          </blockquote>
        </div>

        {/* Pillars */}
        <div
          className="reveal-on-scroll mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream-light/10"
          style={{ transitionDelay: '240ms' }}
        >
          {Array.isArray(pillars) &&
            pillars.map((p, idx) => (
              <div
                key={idx}
                className="bg-ink p-6 md:p-8 group hover:bg-ink-soft transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display italic text-gold text-sm">
                    0{idx + 1}
                  </span>
                  <span className="h-px w-6 bg-gold/40 group-hover:w-10 transition-[width] duration-500" />
                </div>
                <p className="text-cream-light/85 text-sm md:text-base leading-snug">
                  {p}
                </p>
              </div>
            ))}
        </div>

        {/* Signature */}
        <div
          className="reveal-on-scroll text-center mt-16"
          style={{ transitionDelay: '320ms' }}
        >
          <p className="font-display italic text-gold text-base tracking-wider">
            — Helder Lucheses
          </p>
        </div>
      </div>
    </section>
  )
}
