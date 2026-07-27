import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import translations, { Lang, TranslationKey } from './translations'

export type { Lang, TranslationKey } from './translations'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: TranslationKey | string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

const STORAGE_KEY = 'francisco-lang'

function detectLang(): Lang {
  if (typeof window === 'undefined') return 'zh'
  const stored = localStorage.getItem(STORAGE_KEY) as Lang | null
  if (stored === 'zh' || stored === 'en' || stored === 'ko') return stored
  // Detect from browser
  const navLang = navigator.language.toLowerCase()
  if (navLang.startsWith('ko')) return 'ko'
  if (navLang.startsWith('zh')) return 'zh'
  if (navLang.startsWith('en')) return 'en'
  return 'zh'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem(STORAGE_KEY, newLang)
    document.documentElement.lang = newLang === 'ko' ? 'ko' : newLang === 'en' ? 'en' : 'zh-CN'
  }, [])

  const t = useCallback(
    (key: TranslationKey | string): string => {
      return translations[lang][key as TranslationKey] ?? translations.zh[key as TranslationKey] ?? key
    },
    [lang],
  )

  useEffect(() => {
    document.documentElement.lang = lang === 'ko' ? 'ko' : lang === 'en' ? 'en' : 'zh-CN'
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useT() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useT must be used within LanguageProvider')
  return ctx
}
