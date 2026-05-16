import { useLanguage } from '../contexts/LanguageContext.jsx'
import { links } from '../data/links.js'
import { Icon } from './Icon.jsx'

export default function Footer() {
  const { t, lang } = useLanguage()
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-ink text-cream-light border-t border-gold/20">
      {/* Subtle gold rule at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-wide pt-20 pb-10">
        {/* Top grid: monogram + identity / nav / contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-cream-light/10">
          {/* Identity */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border border-gold/50 flex items-center justify-center">
                <span className="font-display text-gold text-xl tracking-wider">HL</span>
              </div>
              <div>
                <div className="font-display text-2xl tracking-tight">Helder Lucheses</div>
                <div className="text-xs uppercase tracking-widest text-cream-light/50 mt-1">
                  {lang === 'pt' ? 'Luanda · Angola' : 'Luanda · Angola'}
                </div>
              </div>
            </div>
            <p className="text-sm text-cream-light/65 leading-relaxed max-w-md">
              Helder Lucheses Gonçalves da Costa
            </p>
            <p className="text-sm text-gold/80 leading-relaxed max-w-md mt-2 font-display italic">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-widest text-gold/70 mb-5">
              {lang === 'pt' ? 'Navegação' : 'Navigation'}
            </div>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="text-cream-light/75 hover:text-gold transition-colors">{t('nav.about')}</a></li>
              <li><a href="#featured" className="text-cream-light/75 hover:text-gold transition-colors">{t('nav.featured')}</a></li>
              <li><a href="#projects" className="text-cream-light/75 hover:text-gold transition-colors">{t('nav.projects')}</a></li>
              <li><a href="#timeline" className="text-cream-light/75 hover:text-gold transition-colors">{t('nav.timeline')}</a></li>
              <li><a href="#vision" className="text-cream-light/75 hover:text-gold transition-colors">{t('nav.vision')}</a></li>
              <li><a href="#contact" className="text-cream-light/75 hover:text-gold transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Contact + social condensed */}
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-widest text-gold/70 mb-5">
              {lang === 'pt' ? 'Contacto directo' : 'Direct contact'}
            </div>
            <a
              href={`mailto:${links.personal.email}`}
              className="group inline-flex items-center gap-2 font-display text-lg text-cream-light hover:text-gold transition-colors"
            >
              <Icon.Mail width="18" height="18" />
              <span className="link-underline">{links.personal.email}</span>
            </a>

            <div className="mt-7 flex items-center gap-4">
              <a
                href={links.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 border border-cream-light/15 hover:border-gold/60 hover:text-gold flex items-center justify-center transition-colors"
              >
                <Icon.LinkedIn width="16" height="16" />
              </a>
              <a
                href={links.personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-cream-light/15 hover:border-gold/60 hover:text-gold flex items-center justify-center transition-colors"
              >
                <Icon.Instagram width="16" height="16" />
              </a>
              <a
                href={links.planetaConsciente.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Planeta Consciente"
                className="w-10 h-10 border border-cream-light/15 hover:border-gold/60 hover:text-gold flex items-center justify-center transition-colors"
              >
                <Icon.Globe width="16" height="16" />
              </a>
              <a
                href={links.nervi.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nervi"
                className="w-10 h-10 border border-cream-light/15 hover:border-gold/60 hover:text-gold flex items-center justify-center transition-colors"
              >
                <Icon.External width="16" height="16" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-xs text-cream-light/45 tracking-wide leading-relaxed">
            © {year} Helder Lucheses Gonçalves da Costa. {t('footer.rights')}
            <span className="hidden md:inline"> · </span>
            <br className="md:hidden" />
            {t('footer.based')}
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cream-light/60 hover:text-gold transition-colors"
          >
            {t('ui.backToTop')}
            <span className="w-8 h-8 border border-cream-light/20 group-hover:border-gold/60 flex items-center justify-center transition-colors">
              <Icon.ArrowUp width="14" height="14" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
