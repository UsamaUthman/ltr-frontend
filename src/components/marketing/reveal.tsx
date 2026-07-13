import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [revealState, setRevealState] = useState<'idle' | 'pending' | 'visible'>('idle')

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const alreadyNearViewport = element.getBoundingClientRect().top <= window.innerHeight * 0.92

    if (reducedMotion || alreadyNearViewport || !('IntersectionObserver' in window)) return

    setRevealState('pending')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setRevealState('visible')
        observer.disconnect()
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={cn(
        'reveal',
        revealState === 'pending' && 'reveal--pending',
        revealState === 'visible' && 'reveal--visible',
        className,
      )}
      ref={elementRef}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
