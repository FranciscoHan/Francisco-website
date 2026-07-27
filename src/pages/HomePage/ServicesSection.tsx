import { motion } from 'framer-motion'
import { User, Calendar, Briefcase, ArrowUpRight } from 'lucide-react'
import { MOCK_SERVICES } from '@/data/services'
import { useT } from '@/i18n/context'
import { cn } from '@/lib/utils'

const iconMap: Record<string, typeof User> = {
  user: User,
  calendar: Calendar,
  briefcase: Briefcase,
}

export default function ServicesSection() {
  const { t } = useT()
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const handleScrollTo = (e: React.MouseEvent, target: string) => {
    e.preventDefault()
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="w-full py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wider mb-6">
            {t('services.badge')}
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight mb-4">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {MOCK_SERVICES.map((service, index) => {
            const Icon = iconMap[service.iconName] || User
            return (
              <a
                key={service.id}
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="block"
              >
                <motion.div
                  variants={item}
                  transition={{ duration: 0.6 }}
                  className={cn(
                    'group relative p-8 rounded-2xl border border-border/50 bg-background/50 h-full',
                    'hover:border-primary/40 hover:bg-background transition-all duration-500',
                    'hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5',
                  )}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="size-7 text-primary" strokeWidth={1.5} />
                  </div>

                  <div className="absolute top-6 right-6 text-5xl font-black text-muted-foreground/10 group-hover:text-primary/20 transition-colors duration-500">
                    0{index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {t(`services.s${service.id}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {t(`services.s${service.id}.desc`)}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((_feat, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-foreground/80">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {t(`services.s${service.id}.f${i + 1}`)}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t('services.cta')}
                    <ArrowUpRight className="size-4" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
                </motion.div>
              </a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
