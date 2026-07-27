import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Ticket, Calendar, MapPin, ExternalLink } from 'lucide-react'
import { MOCK_COMPANY } from '@/data/company'
import { Image } from '@/components/ui/image'

const TEENTOP_POSTER = 'https://aka.doubaocdn.com/s/oCDv1wqgmM'

const TICKET_URL = 'https://you.ctrip.com/sight/chongqing158/156424489.html'

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.2])

  const handleScrollTo = (e: React.MouseEvent, target: string) => {
    e.preventDefault()
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden pt-20 pb-16"
    >
      {/* Background Video with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={TEENTOP_POSTER}
          className="w-full h-full object-cover scale-110"
          aria-label="2026 TEEN TOP 粉丝见面会宣传视频"
        >
          <source src="/videos/teen-top-promo.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/80 via-background/60 to-background pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Event Promotion */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wider mb-6 shadow-lg shadow-primary/30">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
              火热进行中 · HOT
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
              2026 TEEN TOP
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1] mb-4">
              粉丝见面会
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                中国站
              </span>
            </h1>

            <div className="flex flex-wrap gap-4 md:gap-6 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar className="size-4 text-primary" />
                <span>2026.08.29</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="size-4 text-primary" />
                <span>未公开场所</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-primary/10 text-foreground text-sm font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
              二代男团近10年首次登陆国内
            </div>

            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg">
              韩国二代传奇男团 TEEN TOP 首次登陆国内，举办专属粉丝见面会。
              全场近距离互动、粉丝福利环节、签名合影机会，一场专属于粉丝的见面盛会。
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative px-6 sm:px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-center"
              >
                <Ticket className="size-5 shrink-0" />
                <span>立即购票</span>
                <ExternalLink className="size-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#cases"
                onClick={(e) => handleScrollTo(e, '#cases')}
                className="px-6 sm:px-8 py-4 border border-border/60 text-foreground font-medium rounded-lg hover:bg-muted/50 hover:border-border transition-all duration-300 flex items-center justify-center gap-2 text-center"
              >
                查看更多活动
                <ArrowDown className="size-4 shrink-0" />
              </a>
            </div>
          </motion.div>

          {/* Right: Poster + Brand */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-sm mx-auto lg:mx-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-border/30">
                <Image
                  src={TEENTOP_POSTER}
                  alt="2026 TEEN TOP 粉丝见面会 中国站"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>

              <div className="absolute -top-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 border-2 border-primary/40 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Brand Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden md:block mt-16 pt-8 border-t border-border/30"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs text-muted-foreground tracking-widest uppercase mb-1">
                {MOCK_COMPANY.nameEn}
              </div>
              <div className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
                连接中韩娱乐的年轻力量
              </div>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-xs text-muted-foreground tracking-widest uppercase mb-1">
                Since 2023
              </div>
              <div className="text-sm text-foreground/80">
                {MOCK_COMPANY.positioning}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="size-4" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
