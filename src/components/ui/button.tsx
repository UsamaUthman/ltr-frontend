import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { buttonStyles } from './button-styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof buttonStyles
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return <button className={cn(buttonStyles[variant], className)} {...props} />
}
