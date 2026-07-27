import { Image } from '@/components/ui/image'

const LOGO_LIGHT = 'https://aka.doubaocdn.com/s/6dYV1wqi2R'

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/15 blur-lg rounded-full scale-150 opacity-50" />
              <Image
                src={LOGO_LIGHT}
                alt="饭壳文化 Francisco Entertainment"
                className="relative h-12 md:h-16 w-auto object-contain drop-shadow-[0_2px_6px_rgba(255_255_255_0.12)] [mix-blend-mode:screen]"
              />
            </div>
          </div>
          <div className="text-xs text-muted-foreground/70 text-center md:text-right space-y-1">
            <p>© 2026 饭壳文化 Francisco Entertainment. All rights reserved.</p>
            <p>浙ICP备XXXXXXXX号-1</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
