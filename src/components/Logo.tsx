import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md'
}

export default function Logo({ className, size = 'md' }: LogoProps) {
  const height = size === 'sm' ? 36 : 52

  return (
    <img
      src="/logo.png"
      alt="饭壳文化 FRANCISCO ENTERTAINMENT"
      className={cn('w-auto object-contain', className)}
      style={{ height }}
    />
  )
}
