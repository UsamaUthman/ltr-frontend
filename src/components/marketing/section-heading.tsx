import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  inverse?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  inverse = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'section-heading',
        align === 'center' ? 'section-heading--center' : 'section-heading--left',
        inverse && 'section-heading--inverse',
        className,
      )}
    >
      <p className="section-heading-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-heading-description">{description}</p> : null}
    </div>
  )
}

