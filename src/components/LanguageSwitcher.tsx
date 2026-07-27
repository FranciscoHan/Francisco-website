import { useState, useRef, useEffect } from 'react'
import { Globe } from 'lucide-react'
import { useT, Lang } from '@/i18n/context'

const LANG_OPTIONS: { value: Lang; labelKey: 'lang.zh' | 'lang.en' | 'lang.ko' }[] = [
  { value: 'zh', labelKey: 'lang.zh' },
  { value: 'en', labelKey: 'lang.en' },
  { value: 'ko', labelKey: 'lang.ko' },
]

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useT()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-md border border-border/40 hover:border-border/60"
        aria-label="Switch language"
      >
        <Globe className="size-4" />
        <span className="hidden sm:inline">{t(LANG_OPTIONS.find((o) => o.value === lang)!.labelKey)}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 py-1.5 min-w-[130px] bg-background/95 backdrop-blur-xl border border-border/40 rounded-lg shadow-xl z-50">
          {LANG_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setLang(option.value)
                setOpen(false)
              }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                lang === option.value
                  ? 'text-primary font-semibold bg-primary/5'
                  : 'text-foreground/80 hover:bg-muted/50'
              }`}
            >
              {t(option.labelKey)}
              {lang === option.value && (
                <span className="ml-2 text-primary">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
