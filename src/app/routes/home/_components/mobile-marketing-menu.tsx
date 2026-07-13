import * as Dialog from '@radix-ui/react-dialog'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import { BrandMark } from '@/components/brand/brand-mark'
import { buttonStyles } from '@/components/ui/button-styles'
import { primaryNavigation, productLinks } from '../_data/marketing-content'

export function MobileMarketingMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="mobile-menu-trigger" aria-label="Open navigation">
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="mobile-menu-overlay" />
        <Dialog.Content className="mobile-menu-content">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <Dialog.Title>
              <BrandMark />
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="mobile-menu-trigger" aria-label="Close navigation">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-5" aria-label="Mobile navigation">
            <p className="nav-eyebrow mb-2">Products</p>
            <div className="space-y-1">
              {productLinks.map((product) => {
                const Icon = product.icon
                return (
                  <Dialog.Close asChild key={product.label}>
                    <a className="mobile-nav-product" href={product.href}>
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-[var(--marketing-blue)]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-[var(--marketing-navy)]">
                          {product.label}
                        </span>
                        <span className="mt-0.5 block text-xs text-slate-500">View product details</span>
                      </span>
                      <ChevronRight className="ml-auto h-4 w-4 text-slate-400" aria-hidden="true" />
                    </a>
                  </Dialog.Close>
                )
              })}
            </div>

            <div className="my-5 h-px bg-slate-100" />
            <div className="space-y-1">
              {primaryNavigation.map((link) => (
                <Dialog.Close asChild key={link.label}>
                  <a className="mobile-nav-link" href={link.href}>
                    {link.label}
                    <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  </a>
                </Dialog.Close>
              ))}
            </div>
          </nav>

          <div className="border-t border-slate-100 bg-slate-50 px-5 py-5">
            <div className="grid grid-cols-2 gap-3">
              <Dialog.Close asChild>
                <a className={buttonStyles.secondary} href="/login">
                  Sign in
                </a>
              </Dialog.Close>
              <Dialog.Close asChild>
                <a className={buttonStyles.primary} href="/login">
                  Start now <ArrowRight className="h-4 w-4" />
                </a>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
