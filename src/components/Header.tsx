import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'
import { useT } from '@/i18n/context'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'

const NAV_ITEMS = [
  { labelKey: 'nav.home', href: '#hero' },
  { labelKey: 'nav.about', href: '#about' },
  { labelKey: 'nav.cases', href: '#cases' },
  { labelKey: 'nav.contact', href: '#contact' },
] as const

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()
  const { t } = useT()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobile) setMobileMenuOpen(false)
  }, [isMobile])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/40'
          : 'bg-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group"
          >
            <Logo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-md"
              >
                {t(item.labelKey)}
              </a>
            ))}
          </nav>

          {/* Right side: CTA + Language */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <Button size="sm" className="font-medium">
                {t('nav.business')}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={t('nav.menu')}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/40">
          <nav className="flex flex-col px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-3 text-base font-medium rounded-md text-foreground hover:bg-muted transition-colors"
              >
                {t(item.labelKey)}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                <Button className="w-full" size="sm">
                  {t('nav.business')}
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
