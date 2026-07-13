import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type BadgeTone = 'neutral' | 'info' | 'success' | 'warning'

const badgeTones: Record<BadgeTone, string> = {
  neutral: 'border-slate-200 bg-slate-100 text-slate-600',
  info: 'border-blue-200 bg-blue-50 text-blue-700',
  success: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  warning: 'border-amber-200 bg-amber-50 text-amber-700',
}

type BadgeProps = ComponentProps<'span'> & {
  tone?: BadgeTone
}

export function Badge({ className, tone = 'neutral', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2 py-0.5 text-[0.625rem] font-bold whitespace-nowrap',
        badgeTones[tone],
        className,
      )}
      {...props}
    />
  )
}
