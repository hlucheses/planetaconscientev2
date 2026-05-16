import { useLanguage } from '../contexts/LanguageContext.jsx'

export default function ProfessionalProfile() {
  const { t, lang } = useLanguage()
  const skills = t('professional.skills') // returns array for current lang

  return (
    <section
      id="professional"
      className="relative bg-ink text-cream-light py-24 md:py-32"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-oxblood to-transparent" />

      <div className="container-wide">
        {/* Header */}
        <div className="reveal-on-scroll grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="section-number">{t('professional.number')}</span>
              <span className="gold-rule w-10" />
              <span className="section-label text-cream-light/60">
                {t('professional.label')}
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="section-title text-cream-light text-balance">
              {t('professional.title')}
            </h2>
            <p className="mt-6 text-cream-light/70 text-lg leading-relaxed max-w-2xl">
              {t('professional.intro')}
            </p>
          </div>
        </div>

        {/* Unitel card */}
        <div className="reveal-on-scroll" style={{ transitionDelay: '120ms' }}>
          <div className="grid lg:grid-cols-12 gap-0 border border-cream-light/10 hover:border-gold/40 transition-colors duration-500 bg-ink-soft">
            {/* Left: brand block */}
            <div className="lg:col-span-4 bg-oxblood-deep/40 p-10 md:p-12 border-b lg:border-b-0 lg:border-r border-cream-light/10 relative overflow-hidden">
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-oxblood/30 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex items-center gap-3 mb-12">
                  <span className="w-2 h-2 bg-gold animate-gold-shine" />
                  <span className="text-[10px] uppercase tracking-ultra text-gold">
                    {t('professional.period')}
                  </span>
                </div>

                <p className="text-xs uppercase tracking-widest text-cream-light/50 mb-3">
                  {lang === 'pt' ? 'Empresa' : 'Company'}
                </p>
                <h3 className="font-display text-5xl md:text-6xl font-light text-cream-light leading-none">
                  {t('professional.company')}
                </h3>
                <p className="mt-6 font-display italic text-gold text-lg">
                  {t('professional.role')}
                </p>
              </div>
            </div>

            {/* Right: content */}
            <div className="lg:col-span-8 p-10 md:p-12">
              <p className="text-cream-light/85 text-lg leading-relaxed mb-10">
                {t('professional.description')}
              </p>

              <p className="text-xs uppercase tracking-widest text-cream-light/50 mb-5">
                {lang === 'pt' ? 'Competências-chave' : 'Key competencies'}
              </p>

              <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
                {Array.isArray(skills) &&
                  skills.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-3 text-cream-light/80 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
