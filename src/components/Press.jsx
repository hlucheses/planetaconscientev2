import { useLanguage } from '../contexts/LanguageContext.jsx'
import { Icon } from './Icon.jsx'
import { links } from '../data/links.js'

export default function Press() {
  const { t } = useLanguage()
  const topics = t('press.topics')

  const scrollContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="press" className="relative bg-cream py-24 md:py-32">
      <div className="container-wide">
        {/* Header */}
        <div className="reveal-on-scroll grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="section-number">{t('press.number')}</span>
              <span className="gold-rule w-10" />
              <span className="section-label text-ink/60">
                {t('press.label')}
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="section-title text-ink text-balance mb-6">
              {t('press.title')}
            </h2>
            <p className="text-ink/70 text-lg leading-relaxed max-w-2xl">
              {t('press.intro')}
            </p>
          </div>
        </div>

        {/* Two-column: topics + placeholder */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Topics */}
          <div className="lg:col-span-7 reveal-on-scroll">
            <div className="bg-cream-light border border-ink/10 p-8 md:p-10">
              <h3 className="font-display text-xl text-ink mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-oxblood rounded-full" />
                <Topical />
              </h3>

              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {Array.isArray(topics) &&
                  topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-3 text-ink/80 text-sm"
                    >
                      <span className="text-gold mt-1.5 flex-shrink-0">·</span>
                      <span>{topic}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Placeholder for press list */}
          <div className="lg:col-span-5 reveal-on-scroll" style={{ transitionDelay: '120ms' }}>
            <div className="bg-ink text-cream-light p-8 md:p-10 h-full flex flex-col justify-between border border-ink">
              <div>
                <PressTitle />
                <div className="gold-rule mt-4 mb-6" />
                <p className="text-cream-light/70 text-sm leading-relaxed italic">
                  {t('press.placeholder')}
                </p>
              </div>

              <div className="mt-10">
                <button
                  onClick={scrollContact}
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-oxblood hover:bg-oxblood-light text-cream-light text-xs uppercase tracking-widest font-medium transition-colors border border-oxblood hover:border-gold/40 w-full"
                >
                  {t('press.cta')}
                  <Icon.ArrowRight width="14" height="14" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Topical() {
  const { lang } = useLanguage()
  return (
    <span className="font-display text-xl text-ink">
      {lang === 'pt' ? 'Temas disponíveis' : 'Available topics'}
    </span>
  )
}

function PressTitle() {
  const { lang } = useLanguage()
  return (
    <h3 className="font-display text-2xl md:text-3xl text-cream-light font-light leading-tight">
      {lang === 'pt'
        ? 'Aparições, artigos e entrevistas'
        : 'Appearances, articles & interviews'}
    </h3>
  )
}
