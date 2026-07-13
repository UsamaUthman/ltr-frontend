import { ArrowRight, Check } from 'lucide-react'
import { productHighlights, productLinks } from '../_data/marketing-content'
import { cn } from '@/lib/utils'

type MarketingMegaMenuProps = {
  open: boolean
  onNavigate: () => void
}

export function MarketingMegaMenu({ open, onNavigate }: MarketingMegaMenuProps) {
  return (
    <div
      className={cn(
        'marketing-mega-menu absolute inset-x-0 top-full origin-top border-t border-slate-100 bg-white/98 shadow-[0_24px_60px_rgba(0,22,61,.14)] backdrop-blur-xl transition-[opacity,transform] duration-300 ease-out will-change-transform',
        open
          ? 'translate-y-0 scale-y-100 opacity-100'
          : 'pointer-events-none -translate-y-2 scale-y-[.985] opacity-0',
      )}
      aria-hidden={!open}
      inert={open ? undefined : true}
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-[1fr_280px] gap-8 px-10 py-7">
        <div>
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="nav-eyebrow">Explore the collection</p>
              <h2 className="mt-1 text-lg font-bold tracking-normal text-[var(--marketing-navy)]">
                Products built around better trading decisions
              </h2>
            </div>
            <a
              href="/products/ltr-alpha"
              onClick={onNavigate}
              className="inline-flex items-center gap-1 text-sm font-bold text-[var(--marketing-blue)] hover:gap-2"
            >
              Meet LTR Trade <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {productLinks.map((product) => {
              const Icon = product.icon
              return (
                <a
                  className="mega-product-card group"
                  href={product.href}
                  key={product.label}
                  onClick={onNavigate}
                  data-product-menu-item
                >
                  <span className={cn('mega-product-icon', `mega-product-icon--${product.accent}`)}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="mt-5 block font-bold text-[var(--marketing-navy)]">
                    {product.label}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-slate-500">
                    {product.description}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold text-[var(--marketing-blue)] transition-all group-hover:gap-2">
                    View product <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </a>
              )
            })}
          </div>
        </div>
        <div className="rounded-3xl bg-[var(--marketing-ice)] p-6">
          <p className="nav-eyebrow">Included by design</p>
          <div className="mt-4 space-y-4">
            {productHighlights.map((highlight) => {
              const Icon = highlight.icon
              return (
                <div className="flex items-center gap-3" key={highlight.label}>
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-[var(--marketing-blue)] shadow-sm">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-slate-700">{highlight.label}</span>
                  <Check className="ml-auto h-4 w-4 text-emerald-500" aria-hidden="true" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
