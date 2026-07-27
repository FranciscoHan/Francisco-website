import { motion } from 'framer-motion'
import { Heart, Compass, Sparkles } from 'lucide-react'
import { MOCK_ABOUT } from '@/data/about'
import { MOCK_COMPANY } from '@/data/company'

export default function AboutSection() {
  const about = MOCK_ABOUT[0]

  const narrativeBlocks = [
    {
      icon: Compass,
      title: '品牌定位',
      text: '我们是一家以艺人经纪与文化交流为核心的娱乐公司，起步于中韩艺人合作，未来将携手更多国内外优秀艺术家，跨越国界与语言，让好的内容被更多人看见。',
    },
    {
      icon: Heart,
      title: '使命愿景',
      text: '我们相信每一次相遇都有意义，每一场见面都值得被认真对待。\n不急于规模，不困于当下——\n我们选择一步一个脚印，把每一个项目做扎实，让每一位合作的艺人都被善待，每一位到场的观众都不留遗憾。',
    },
    {
      icon: Sparkles,
      title: '我们的态度',
      text: '「成长比成功更重要」\n起步虽晚，但步履不停。\n我们带着诚意与决心前行，在每一次合作中积累经验，在每一场活动中打磨自己。\n来日方长，我们终将成为值得信赖的名字。',
    },
  ]

  return (
    <section id="about" className="w-full py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Brand Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wider mb-6">
              ABOUT US
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight mb-4">
              关于
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                {' '}Francisco Entertainment
              </span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              {about.subtitle}
            </p>

            <div className="space-y-8">
              {narrativeBlocks.map((block, i) => {
                const Icon = block.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * i }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-1 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center backdrop-blur-sm">
                      <Icon className="size-3 text-primary" />
                    </div>

                    <div className="pt-0.5">
                      <h3 className="text-lg font-bold text-foreground mb-3">
                        {block.title}
                      </h3>
                      <p className="text-muted-foreground text-base leading-[1.9] whitespace-pre-line">
                        {block.text}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 pt-8 border-t border-border/40"
            >
              <p className="text-foreground font-semibold text-lg italic">
                Francisco Entertainment ——{' '}
                <span className="text-primary">用心连接每一份热爱。</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a0a0d] via-[#0f0507] to-[#1a0a0d] border border-primary/20 group">
                {/* Dots Pattern */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, hsl(353 99% 50% / 0.3) 1.5px, transparent 1.5px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Blobs */}
                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-8 -right-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/80 via-primary/60 to-primary/30 blur-[2px]"
                />
                <motion.div
                  animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute top-24 left-6 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#ffb3ba]/60 to-[#ff8fa3]/30 blur-[1px]"
                />
                <motion.div
                  animate={{ y: [0, -8, 0], x: [0, 8, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className="absolute bottom-16 right-12 w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#faf0e6]/50 to-[#f5e6d3]/20"
                />

                {/* Memphis Shapes */}
                <svg className="absolute top-16 left-4 w-20 h-10 text-[#ffb3ba]/70" viewBox="0 0 80 40" fill="none">
                  <path d="M0 20 L10 5 L20 35 L30 5 L40 35 L50 5 L60 35 L70 5 L80 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <svg className="absolute bottom-28 left-8 w-32 h-12 text-primary/60" viewBox="0 0 128 48" fill="none">
                  <path d="M0 24 Q16 0 32 24 T64 24 T96 24 T128 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>

                {/* Scattered Dots */}
                <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-[#faf0e6] shadow-lg shadow-[#faf0e6]/50" />
                <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-[#ffb3ba]" />
                <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full bg-primary/80" />
                <div className="absolute top-1/4 right-1/3 w-2.5 h-2.5 rounded-full bg-[#faf0e6]/80" />
                <div className="absolute bottom-1/4 right-1/5 w-3 h-3 rounded-full bg-[#ffb3ba]/70" />

                {/* Rings */}
                <div className="absolute top-10 right-16 w-14 h-14 rounded-full border-4 border-[#ffb3ba]/50" />
                <div className="absolute bottom-20 right-8 w-10 h-10 rounded-full border-3 border-primary/50" style={{ borderWidth: '3px' }} />

                {/* Star */}
                <svg className="absolute bottom-40 left-10 w-8 h-8 text-[#faf0e6]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" />
                </svg>
                <svg className="absolute top-1/2 right-12 w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" />
                </svg>

                {/* Triangle */}
                <svg className="absolute top-1/3 right-6 w-6 h-6 text-[#ffb3ba]/80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L22 21H2L12 3z" />
                </svg>

                {/* Brand Card */}
                <motion.div
                  animate={{ rotate: [-2, 0, -2] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-8 left-6 right-6"
                >
                  <div className="relative bg-background/70 backdrop-blur-md rounded-2xl p-6 md:p-7 border border-primary/30 shadow-xl shadow-primary/10">
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                      ♥
                    </div>
                    <p className="text-[10px] text-[#ffb3ba] font-bold tracking-[0.2em] uppercase mb-3">
                      ✦ since 2023 ✦
                    </p>
                    <h3 className="text-xl md:text-2xl font-black text-foreground leading-tight mb-1">
                      Francisco
                    </h3>
                    <h3 className="text-xl md:text-2xl font-black italic">
                      <span className="bg-gradient-to-r from-primary via-[#ff6b7a] to-[#ffb3ba] bg-clip-text text-transparent">
                        Entertainment
                      </span>
                    </h3>
                    <p className="mt-4 pt-4 border-t border-border/40 text-xs md:text-sm text-muted-foreground font-light italic tracking-wide">
                      "Where Talent Meets Opportunity"
                    </p>
                  </div>
                </motion.div>

                {/* Floating Tag */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-6 left-6"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ffb3ba]/20 backdrop-blur-sm rounded-full border border-[#ffb3ba]/40 text-[#ffb3ba] text-[10px] font-bold tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffb3ba] animate-pulse" />
                    Francisco Entertainment
                  </div>
                </motion.div>
              </div>

              {/* Outer Decorations */}
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-primary/20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-[#ffb3ba]/15 blur-xl" />

              {/* Founder Badge */}
              <div className="absolute top-6 right-6 px-4 py-3 bg-background/80 backdrop-blur-md rounded-xl border border-border/40 z-10">
                <div className="text-xs text-muted-foreground tracking-wide">创始人</div>
                <div className="text-sm font-bold text-foreground">{MOCK_COMPANY.founder}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
