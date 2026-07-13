import { useEffect, useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { BrandMark } from '@/components/brand/brand-mark'
import { SectionShell } from '@/components/marketing/section-shell'
import { buttonStyles } from '@/components/ui/button-styles'
import { cn } from '@/lib/utils'
import { primaryNavigation } from '../_data/marketing-content'
import { MarketingMegaMenu } from './marketing-mega-menu'
import { MobileMarketingMenu } from './mobile-marketing-menu'

export function MarketingHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY >= 32)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  return (
    <header
      className="marketing-header-shell"
      data-scrolled={isScrolled}
      onMouseLeave={() => setProductsOpen(false)}
      onKeyDown={(event) => {
        if (event.key === 'Escape') setProductsOpen(false)
      }}
    >
      <div className="marketing-header-frame">
        <SectionShell className="marketing-header-content flex items-center justify-between">
          <a href="/" className="shrink-0" aria-label="LTR Trade home">
            <BrandMark />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            <button
              className="desktop-nav-link"
              type="button"
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen((current) => !current)}
              onFocus={() => setProductsOpen(true)}
              onMouseEnter={() => setProductsOpen(true)}
              onKeyDown={(event) => {
                if (event.key !== 'ArrowDown') return
                event.preventDefault()
                setProductsOpen(true)
                window.requestAnimationFrame(() => {
                  document.querySelector<HTMLElement>('[data-product-menu-item]')?.focus()
                })
              }}
            >
              Products
              <ChevronDown
                className={cn('h-4 w-4 transition', productsOpen && 'rotate-180')}
                aria-hidden="true"
              />
            </button>
            {primaryNavigation.map((link) => (
              <a className="desktop-nav-link" href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              className="px-3 py-2 text-sm font-bold text-[var(--marketing-navy)] transition hover:text-[var(--marketing-blue)]"
              href="/login"
            >
              Sign in
            </a>
            <a className={buttonStyles.primary} href="/login">
              Start now <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="lg:hidden">
            <MobileMarketingMenu />
          </div>
        </SectionShell>

        <MarketingMegaMenu open={productsOpen} onNavigate={() => setProductsOpen(false)} />
      </div>
    </header>
  )
}
