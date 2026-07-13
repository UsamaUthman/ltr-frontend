import { useEffect, type CSSProperties } from 'react'
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react'
import { SectionShell } from '@/components/marketing/section-shell'
import { buttonStyles } from '@/components/ui/button-styles'
import { AnnouncementBar } from '../home/_components/announcement-bar'
import { MarketingFooter } from '../home/_components/marketing-footer'
import { MarketingHeader } from '../home/_components/marketing-header'
import { productLinks } from '../home/_data/marketing-content'
import { NotFoundRoute } from '../not-found'

type ProductDetailRouteProps = {
  productSlug: string
}

export function ProductDetailRoute({ productSlug }: ProductDetailRouteProps) {
  const product = productLinks.find((item) => item.slug === productSlug)

  useEffect(() => {
    if (!product) return
    document.title = `${product.label} — LTR Trade`
    window.scrollTo({ top: 0, behavior: 'instant' })

    return () => {
      document.title = 'LTR Trade — Built for your next level'
    }
  }, [product])

  if (!product) return <NotFoundRoute />

  const ProductIcon = product.icon
  const visualStyle = { '--product-accent': product.color } as CSSProperties

  return (
    <div className="min-h-screen overflow-x-clip bg-white" style={visualStyle}>
      <AnnouncementBar />
      <MarketingHeader />
      <main className="product-detail-page">
        <SectionShell className="py-12 sm:py-16 lg:py-24">
          <a className="product-back-link" href="/">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to home
          </a>

          <div className="mt-10 grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <div className="product-detail-copy">
              <span className="product-detail-icon">
                <ProductIcon className="h-7 w-7" aria-hidden="true" />
              </span>
              <p className="nav-eyebrow mt-6" style={{ color: product.color }}>
                {product.eyebrow}
              </p>
              <h1>{product.label}</h1>
              <p className="product-detail-lead">{product.longDescription}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className={buttonStyles.primary} href="/login">
                  {product.ctaLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a className={buttonStyles.secondary} href="mailto:hello@ltralpha.com">
                  Talk to our team
                </a>
              </div>

              <p className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Check className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                Static product preview — no account connection required
              </p>
            </div>

            <div className="product-detail-visual" aria-label={`${product.label} product preview`}>
              <div className="product-preview-glow" />
              <div className="product-preview-window">
                <div className="product-preview-toolbar">
                  <div className="flex items-center gap-2">
                    <span />
                    <span />
                    <span />
                  </div>
                  <p>LTR workspace</p>
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="product-preview-body">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="product-preview-label">{product.preview.label}</p>
                      <strong>{product.preview.value}</strong>
                      <p className="product-preview-detail">{product.preview.detail}</p>
                    </div>
                    <span className="product-preview-icon">
                      <ProductIcon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="product-preview-chart">
                    {[38, 52, 44, 72, 61, 84, 78, 96].map((height, index) => (
                      <span key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="product-preview-tile">
                      <span>Today</span>
                      <strong>On track</strong>
                    </div>
                    <div className="product-preview-tile">
                      <span>Next action</span>
                      <strong>Review ready</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-preview-float">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
                </span>
                <div>
                  <p>Workspace updated</p>
                  <strong>Your latest insight is ready</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="product-benefits">
            {product.benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon
              return (
                <article className="product-benefit-card" key={benefit.title}>
                  <div className="flex items-center justify-between">
                    <span className="product-benefit-icon">
                      <BenefitIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-extrabold text-slate-300">0{index + 1}</span>
                  </div>
                  <h2>{benefit.title}</h2>
                  <p>{benefit.description}</p>
                </article>
              )
            })}
          </div>
        </SectionShell>
      </main>
      <MarketingFooter />
    </div>
  )
}
