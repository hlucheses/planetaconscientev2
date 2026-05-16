import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { translations } from '../data/translations.js'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'hl-lang'
const DEFAULT_LANG = 'pt'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANG)

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored === 'pt' || stored === 'en') {
        setLang(stored)
      }
    } catch {
      /* ignore */
    }
  }, [])

  // Reflect language on <html lang="...">
  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang(prev => (prev === 'pt' ? 'en' : 'pt'))
  }, [])

  const t = useCallback(
    (key) => {
      const node = key.split('.').reduce((acc, k) => (acc ? acc[k] : undefined), translations)
      if (!node) return key
      return node[lang] ?? node.pt ?? key
    },
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}
