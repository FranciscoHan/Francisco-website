import { useT } from '@/i18n/context'
import Logo from './Logo'

export default function Footer() {
  const { t } = useT()
  return (
    <footer className="w-full border-t border-border/40 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo />
          </div>
          <div className="text-xs text-muted-foreground/70 text-center md:text-right space-y-1">
            <p>{t('footer.copyright')}</p>
            <p>{t('footer.icp')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
