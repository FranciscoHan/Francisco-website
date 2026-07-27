import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Tag, MapPin, Flame, ExternalLink } from 'lucide-react'
import { MOCK_CASES } from '@/data/cases'
import { Badge } from '@/components/ui/badge'
import { Image } from '@/components/ui/image'
import { useT } from '@/i18n/context'

const TICKET_URL = 'https://you.ctrip.com/sight/chongqing158/156424489.html'

export default function CasesSection() {
  const { t } = useT()
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const featuredCase = MOCK_CASES.find((c) => c.featured)
  const otherCases = MOCK_CASES.filter((c) => !c.featured)

  const handleScrollTo = (e: React.MouseEvent, target: string) => {
    e.preventDefault()
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="cases" className="w-full py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wider mb-6">
            {t('cases.badge')}
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight mb-4">
            {t('cases.title')}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            {t('cases.subtitle')}
          </p>
        </motion.div>

        {/* Featured Case */}
        {featuredCase && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <div className="group relative rounded-3xl overflow-hidden border border-primary/30 bg-card/30 shadow-2xl shadow-primary/5">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Left: Dual Images */}
                <div className="lg:col-span-3 relative">
                  <div className="grid grid-cols-5 gap-0 h-full">
                    <div className="col-span-3 relative aspect-[3/4] lg:aspect-auto overflow-hidden">
                      <Image
                        src={featuredCase.coverUrl}
                        alt={featuredCase.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 pointer-events-none hidden lg:block" />
                    </div>
                    {featuredCase.extraImageUrl && (
                      <div className="col-span-2 relative aspect-[3/4] lg:aspect-auto overflow-hidden border-l border-border/30">
                        <Image
                          src={featuredCase.extraImageUrl}
                          alt={t('cases.benefitAlt')}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <Badge variant="secondary" className="bg-background/70 backdrop-blur-sm text-xs">
                            {t('cases.benefitBadge')}
                          </Badge>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="absolute top-4 left-4 z-20">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wider shadow-lg shadow-primary/30">
                      <Flame className="size-3.5" />
                      {t('cases.featuredStatus')}
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="lg:col-span-2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                      <Tag className="size-3 mr-1.5" />
                      {t('cases.featuredType')}
                    </Badge>
                    <Badge variant="outline" className="text-muted-foreground text-xs">
                      <Calendar className="size-3 mr-1.5" />
                      {featuredCase.date}
                    </Badge>
                    {featuredCase.location && (
                      <Badge variant="outline" className="text-muted-foreground text-xs">
                        <MapPin className="size-3 mr-1.5" />
                        {featuredCase.location}
                      </Badge>
                    )}
                  </div>

                  {featuredCase.highlight && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-primary/30 bg-primary/10 text-foreground text-xs sm:text-sm font-semibold mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
                      {t('cases.featuredHighlight')}
                    </div>
                  )}

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground leading-tight mb-4">
                    {t('case.1.name')}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 sm:mb-8">
                    {t('case.1.desc')}
                  </p>

                  <div className="flex flex-col xs:flex-row gap-3">
                    <a
                      href={TICKET_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 text-sm sm:text-base"
                    >
                      {t('cases.buyTicket')}
                      <ExternalLink className="size-4" />
                    </a>
                    <a
                      href="#contact"
                      onClick={(e) => handleScrollTo(e, '#contact')}
                    >
                      <button className="w-full inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 border border-border/60 text-foreground font-medium rounded-lg hover:bg-muted/50 hover:border-border transition-all duration-300 text-sm sm:text-base">
                        {t('cases.consult')}
                        <ArrowUpRight className="size-4" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            </div>
          </motion.div>
        )}

        {/* Other Cases Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherCases.map((caseItem) => (
            <motion.div
              key={caseItem.id}
              variants={item}
              transition={{ duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card/30 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {caseItem.textCover ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0506] via-[#14080a] to-[#0a0506] flex flex-col justify-between p-5 sm:p-6 md:p-7">
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
                    <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
                    <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/25 to-transparent" />
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                    <div className="absolute top-1/4 left-1/6 w-1.5 h-1.5 rounded-full bg-primary/60 shadow-[0_0_8px_rgba(220_38_38_0.8)]" />
                    <div className="absolute top-1/3 right-1/5 w-1 h-1 rounded-full bg-[#ffb3ba]/70" />
                    <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-primary/40" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[10px] text-primary/80 font-bold tracking-[0.2em] uppercase">
                        Live Concert
                      </span>
                      <span className="text-[10px] text-muted-foreground font-medium">
                        {caseItem.date}
                      </span>
                    </div>

                    <div className="relative z-10 flex-1 flex flex-col justify-center">
                      <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground tracking-tight leading-none mb-1">
                        {caseItem.textCoverLine1}
                      </h4>
                      <h4 className="text-lg sm:text-xl md:text-2xl font-black italic bg-gradient-to-r from-primary via-[#ff6b7a] to-[#ffb3ba] bg-clip-text text-transparent tracking-wide">
                        {caseItem.textCoverLine2}
                      </h4>
                    </div>

                    <div className="relative z-10 space-y-2">
                      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                        <MapPin className="size-3 text-primary/70" />
                        <span>{caseItem.location}</span>
                      </div>
                      {caseItem.textCoverArtists && (
                        <div className="flex flex-wrap gap-1.5">
                          {caseItem.textCoverArtists.map((artist, i) => (
                            <span
                              key={i}
                              className="text-[10px] px-2 py-0.5 rounded-full border border-border/60 bg-background/50 text-muted-foreground"
                            >
                              {artist}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  </div>
                ) : (
                  <Image
                    src={caseItem.coverUrl}
                    alt={caseItem.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm border border-border/40">
                    <Tag className="size-3 mr-1.5" />
                    {caseItem.type}
                  </Badge>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="size-4" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="size-3.5" />
                  {caseItem.date}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {t(`case.${caseItem.id}.name`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {t(`case.${caseItem.id}.desc`)}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')}>
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-border/60 rounded-lg text-foreground font-medium hover:bg-muted/50 hover:border-border transition-all duration-300">
              {t('cases.bottomCta')}
              <ArrowUpRight className="size-4" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
