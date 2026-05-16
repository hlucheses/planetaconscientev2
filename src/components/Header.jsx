import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext.jsx'

export default function Header() {
  const { lang, toggleLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'areas', label: t('nav.work') },
    { id: 'featured', label: t('nav.featured') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'timeline', label: t('nav.timeline') },
    { id: 'vision', label: t('nav.vision') },
    { id: 'contact', label: t('nav.contact') },
  ]

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink/95 backdrop-blur-md border-b border-gold/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        {/* Monogram / wordmark */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, 'top')}
          className="group flex items-center gap-3"
          aria-label="Helder Lucheses"
        >
          <span
            className={`font-display text-xl md:text-2xl tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-cream-light' : 'text-cream-light'
            }`}
          >
            <span className="text-gold">H</span>elder{' '}
            <span className="font-light italic">Lucheses</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-cream-light/85 hover:text-gold text-xs uppercase tracking-widest font-medium transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Lang toggle + mobile menu */}
        <div className="flex items-center gap-3 md:gap-5">
          <button
            onClick={toggleLang}
            className="group relative flex items-center text-cream-light hover:text-gold transition-colors"
            aria-label="Toggle language"
          >
            <span
              className={`text-xs tracking-widest font-medium transition-colors ${
                lang === 'pt' ? 'text-gold' : 'text-cream-light/50'
              }`}
            >
              PT
            </span>
            <span className="mx-1.5 text-cream-light/30">·</span>
            <span
              className={`text-xs tracking-widest font-medium transition-colors ${
                lang === 'en' ? 'text-gold' : 'text-cream-light/50'
              }`}
            >
              EN
            </span>
          </button>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-cream-light p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-5 relative h-3.5">
              <span
                className={`absolute left-0 right-0 h-px bg-current transition-all duration-300 ${
                  menuOpen ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-1.5 h-px bg-current transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-px bg-current transition-all duration-300 ${
                  menuOpen ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-ink/95 backdrop-blur-md border-t border-gold/20`}
      >
        <nav className="container-wide flex flex-col py-6 gap-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-cream-light/85 hover:text-gold text-sm uppercase tracking-widest font-medium py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
