import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md'
}

export default function Logo({ className, size = 'md' }: LogoProps) {
  const iconSize = size === 'sm' ? 32 : 40
  const textSize = size === 'sm' ? 'text-base' : 'text-xl'
  const subTextSize = size === 'sm' ? 'text-[9px]' : 'text-[10px]'

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      {/* Bowl Icon */}
      <div
        className="relative flex items-center justify-center rounded-full bg-primary shrink-0"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="text-primary-foreground"
          style={{ width: iconSize * 0.55, height: iconSize * 0.55 }}
        >
          <path
            d="M4 10c0 4.418 3.582 8 8 8s8-3.582 8-8M4 10h16M6 10c0-3 2.5-5 6-5s6 2 6 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span className={cn('font-black text-foreground tracking-tight', textSize)}>
          饭壳文化
        </span>
        <span className={cn('font-bold tracking-wider uppercase mt-0.5', subTextSize)}>
          <span className="text-foreground/90">FRANCISCO</span>
          <span className="text-primary ml-1">ENTERTAINMENT</span>
        </span>
      </div>
    </div>
  )
}
