import { Link } from 'react-router-dom'
import { useT } from '@/i18n/context'

export default function NotFoundPage() {
  const { t } = useT()

  return (
    <div className="flex flex-col items-center justify-center py-24 min-h-[calc(100vh-8rem)]">
      <h1 className="text-6xl font-bold mb-4 text-foreground">{t('404.title')}</h1>
      <p className="text-lg text-muted-foreground mb-8">{t('404.desc')}</p>
      <Link to="/" className="text-primary hover:underline">{t('404.back')}</Link>
    </div>
  )
}
