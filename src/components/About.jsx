import { useLanguage } from '../contexts/LanguageContext.jsx'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative bg-cream-light py-24 md:py-32 lg:py-40">
      <div className="container-wide">
        {/* Section header */}
        <div className="reveal-on-scroll grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-24">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="section-number">{t('about.number')}</span>
              <span className="gold-rule w-10" />
              <span className="section-label text-ink/60">
                {t('about.label')}
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="section-title text-ink text-balance">
              {t('about.title')}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4 lg:col-start-5">
            <div className="reveal-on-scroll space-y-6">
              <p className="text-ink/85 text-lg leading-relaxed font-light">
                {t('about.paraOne')}
              </p>
              <p className="text-ink/75 text-base leading-relaxed">
                {t('about.paraTwo')}
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="reveal-on-scroll" style={{ transitionDelay: '120ms' }}>
              <p className="text-ink/75 text-base leading-relaxed">
                {t('about.paraThree')}
              </p>
            </div>
          </div>
        </div>

        {/* Pull-quote */}
        <div className="reveal-on-scroll mt-20 md:mt-28 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-2 hidden lg:flex justify-end pt-3">
            <span className="font-display text-7xl text-oxblood/30 leading-none select-none">"</span>
          </div>
          <div className="lg:col-span-8">
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-ink font-light text-balance">
              {t('about.quote')}
            </blockquote>
            <div className="flex items-center gap-4 mt-8">
              <span className="gold-rule w-12" />
              <cite className="not-italic text-sm uppercase tracking-widest text-ink/60 font-medium">
                {t('about.quoteAttribution')}
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
