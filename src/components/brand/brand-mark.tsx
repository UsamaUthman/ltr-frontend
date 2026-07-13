import { cn } from '@/lib/utils'

type BrandMarkProps = {
  className?: string
  inverse?: boolean
}

export function BrandMark({ className, inverse = false }: BrandMarkProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)} aria-label="LTR Trade">
      <svg
        aria-hidden="true"
        className="h-9 w-9 shrink-0"
        viewBox="0 0 48 48"
        fill="none"
      >
        <rect width="48" height="48" rx="14" fill={inverse ? '#ffffff' : '#00245f'} />
        <path d="M11 32.2 21.7 11h7.1l-9 17.8H37V35H13.5c-2 0-3.4-1.6-2.5-2.8Z" fill="#2fd9ff" />
        <path d="m28.2 11 8.9 17.8h-8l-4.6-9.2 3.7-8.6Z" fill="#76f0d0" />
      </svg>
      <span
        className={cn(
          'text-[1.05rem] font-bold tracking-normal',
          inverse ? 'text-white' : 'text-[var(--marketing-navy)]',
        )}
      >
        LTR <span className="font-medium opacity-70">TRADE</span>
      </span>
    </span>
  )
}
