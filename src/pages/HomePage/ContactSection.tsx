import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, ExternalLink, CheckCircle } from 'lucide-react'
import { MOCK_CONTACT } from '@/data/contact'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useT } from '@/i18n/context'

const SocialIcon = ({ platform }: { platform: string }) => {
  const icons: Record<string, React.ReactElement> = {
    weibo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.991-.406-1.593.379-.595 1.176-.861 1.793-.601.622.263.82.972.442 1.592zm1.27-1.627c-.141.237-.449.353-.689.253-.236-.09-.313-.361-.177-.586.138-.227.436-.346.672-.24.239.09.315.36.194.573zm.176-2.719c-1.893-.493-4.033.45-4.857 2.118-.836 1.704-.026 3.591 1.886 4.21 1.983.64 4.318-.341 5.132-2.179.8-1.793-.201-3.642-2.161-4.149zm7.563-1.224c-.346-.105-.57-.18-.405-.619.359-.958.388-1.782.003-2.37-.727-1.109-2.737-1.053-5.023-.033 0 0-.716.313-.533-.254.35-1.13.304-2.089-.269-2.653-1.328-1.303-4.893.048-7.964 3.014C1.458 10.58 0 12.721 0 14.572c0 3.58 4.538 5.777 8.97 5.777 5.772 0 9.549-3.347 9.549-6.014 0-1.606-1.354-2.516-2.46-2.686zm1.698-6.705c-.873-1.015-2.142-1.49-3.442-1.362-.293.027-.489.308-.44.598.048.29.324.498.616.468.908-.088 1.778.232 2.369.92.59.684.799 1.588.586 2.445-.075.308.11.618.42.69.313.07.618-.112.69-.425.299-1.207-.002-2.48-.799-3.334zm-2.034 2.418c-.299-.351-.739-.517-1.188-.47-.189.02-.357.15-.41.343-.052.193.02.397.176.518.155.12.364.16.552.106.158-.045.297.002.405.126.104.12.145.286.112.442-.055.26.106.507.37.564.268.058.54-.09.628-.35.124-.365.038-.77-.22-1.064-.258-.293-.627-.447-1.005-.441-.055.002-.108.004-.16.008.087-.104.164-.216.232-.335.148-.257.21-.561.171-.862-.04-.314-.193-.59-.434-.785z" />
      </svg>
    ),
    xiaohongshu: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 13.5h-1.2v-3.1l-1.1 1.3-1.1-1.3v3.1h-1.2V8.5h1.2l1.1 2.1 1.1-2.1h1.2v7zm-2.3-5.6l-.9 1-.9-1V9.8h1.8v.1z" />
      </svg>
    ),
    douyin: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  }
  return icons[platform] || null
}

export default function ContactSection() {
  const { t } = useT()
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const name = formData.get('name')
    const phone = formData.get('phone')
    const company = formData.get('company')
    const type = formData.get('type')
    const message = formData.get('message')

    if (!name || !phone) {
      toast.error(t('contact.toastError'))
      return
    }

    setSubmitting(true)

    // 保存到 localStorage（前端演示用）
    const submission = {
      id: Date.now().toString(),
      name: String(name),
      phone: String(phone),
      company: company ? String(company) : '',
      type: type ? String(type) : '',
      message: message ? String(message) : '',
      createdAt: new Date().toISOString(),
    }
    try {
      const existing = localStorage.getItem('contact_submissions')
      const submissions = existing ? JSON.parse(existing) : []
      submissions.push(submission)
      localStorage.setItem('contact_submissions', JSON.stringify(submissions))
    } catch {
      // 存储失败不影响体验
    }

    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      toast.success(t('contact.toastSuccess'))
      ;(e.currentTarget as HTMLFormElement).reset()
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-card/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wider mb-6">
              {t('contact.badge')}
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight mb-6">
              {t('contact.title1')}
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {t('contact.title2')}
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              {t('contact.desc')}
            </p>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-background/50 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="size-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t('contact.addressLabel')}</div>
                  <div className="text-foreground font-medium">{MOCK_CONTACT.address}</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-background/50 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="size-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t('contact.emailLabel')}</div>
                  <a
                    href={`mailto:${MOCK_CONTACT.email}`}
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    {MOCK_CONTACT.email}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Social + Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Social Media Cards */}
            <div>
              <div className="text-sm text-muted-foreground mb-3">{t('contact.followUs')}</div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {MOCK_CONTACT.socialLinks.map((social) => {
                  const isClickable = social.url && social.url !== '#'
                  const cardContent = (
                    <>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <SocialIcon platform={social.icon} />
                      </div>
                      <div className="text-center">
                        <div className="text-xs sm:text-sm font-semibold text-foreground">
                          {social.name}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-muted-foreground truncate max-w-full">
                          {social.handle}
                        </div>
                      </div>
                      {isClickable && (
                        <ExternalLink className="size-3 text-muted-foreground/50 group-hover:text-primary/70 transition-colors" />
                      )}
                    </>
                  )

                  return isClickable ? (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-xl border border-border/50 bg-background/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <div
                      key={social.name}
                      className="flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-xl border border-border/50 bg-background/50 cursor-default opacity-80"
                      title={t('contact.socialDisabled')}
                    >
                      {cardContent}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-2xl border border-border/50 bg-background/80 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-foreground mb-2">{t('contact.formTitle')}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {t('contact.formSubtitle')}
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-1.5">
                      {t('contact.formName')}
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder={t('contact.formNamePlaceholder')}
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-card/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-1.5">
                      {t('contact.formPhone')}
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder={t('contact.formPhonePlaceholder')}
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-card/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                    <label className="block text-sm text-muted-foreground mb-1.5">
                      {t('contact.formCompany')}
                    </label>
                    <input
                      name="company"
                      type="text"
                      placeholder={t('contact.formCompanyPlaceholder')}
                    className="w-full px-4 py-2.5 rounded-lg bg-card/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>

                <div>
                    <label className="block text-sm text-muted-foreground mb-1.5">
                      {t('contact.formType')}
                    </label>
                    <select
                      name="type"
                      className="w-full px-4 py-2.5 rounded-lg bg-card/50 border border-border/50 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                      defaultValue=""
                    >
                      <option value="" disabled>{t('contact.formTypePlaceholder')}</option>
                      <option value="artist">{t('contact.formTypeOpt1')}</option>
                      <option value="event">{t('contact.formTypeOpt2')}</option>
                      <option value="business">{t('contact.formTypeOpt3')}</option>
                      <option value="other">{t('contact.formTypeOpt4')}</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm text-muted-foreground mb-1.5">
                      {t('contact.formDesc')}
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder={t('contact.formDescPlaceholder')}
                    className="w-full px-4 py-2.5 rounded-lg bg-card/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  />
                </div>

                {submitted ? (
                  <div className="flex items-center justify-center gap-2 w-full py-6 bg-success/20 text-success-foreground font-semibold rounded-lg border border-success/30">
                    <CheckCircle className="size-5" />
                    {t('contact.submitSuccess')}
                  </div>
                ) : (
                  <Button type="submit" className="w-full py-6 font-semibold" disabled={submitting}>
                    {submitting ? t('contact.submitting') : t('contact.submit')}
                  </Button>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
