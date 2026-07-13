import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { SectionHeading } from '@/components/marketing/section-heading'
import { SectionShell } from '@/components/marketing/section-shell'
import { buttonStyles } from '@/components/ui/button-styles'
import { cn } from '@/lib/utils'
import { pricingTrustItems } from '../_data/landing-content'
import {
  currencyOptions,
  durationLabels,
  durationMonths,
  durationOptions,
  pricingPackages,
  pricingToolNames,
  type BillingDuration,
  type Currency,
  type ToolName,
} from '../_data/pricing-options'

const toolOrder: ToolName[] = [
  pricingToolNames.journal,
  pricingToolNames.ai,
  pricingToolNames.live,
  pricingToolNames.alpha,
]

export function PricingSection() {
  const [duration, setDuration] = useState<BillingDuration>('1_month')
  const [currency, setCurrency] = useState<Currency>('USD')
  const [durationDirection, setDurationDirection] = useState<1 | -1>(1)
  const [currencyDirection, setCurrencyDirection] = useState<1 | -1>(1)
  const [durationRevision, setDurationRevision] = useState(0)
  const [isDurationTransitioning, setIsDurationTransitioning] = useState(false)
  const [isCurrencyTransitioning, setIsCurrencyTransitioning] = useState(false)
  const durationTimer = useRef<number | null>(null)
  const currencyTimer = useRef<number | null>(null)

  const visiblePackages = useMemo(
    () => pricingPackages.filter((pricingPackage) => pricingPackage.duration === duration),
    [duration],
  )
  const selectedCurrency =
    currencyOptions.find((option) => option.code === currency) ?? currencyOptions[0]
  const durationIndex = durationOptions.findIndex((option) => option.value === duration)
  const currencyIndex = currencyOptions.findIndex((option) => option.code === currency)

  useEffect(
    () => () => {
      if (durationTimer.current !== null) window.clearTimeout(durationTimer.current)
      if (currencyTimer.current !== null) window.clearTimeout(currencyTimer.current)
    },
    [],
  )

  const selectDuration = (nextDuration: BillingDuration) => {
    if (nextDuration === duration) return

    const nextIndex = durationOptions.findIndex((option) => option.value === nextDuration)
    setDurationDirection(nextIndex > durationIndex ? 1 : -1)
    setDuration(nextDuration)
    setDurationRevision((revision) => revision + 1)
    setIsDurationTransitioning(true)

    if (durationTimer.current !== null) window.clearTimeout(durationTimer.current)
    durationTimer.current = window.setTimeout(() => setIsDurationTransitioning(false), 480)
  }

  const selectCurrency = (nextCurrency: Currency) => {
    if (nextCurrency === currency) return

    const nextIndex = currencyOptions.findIndex((option) => option.code === nextCurrency)
    setCurrencyDirection(nextIndex > currencyIndex ? 1 : -1)
    setCurrency(nextCurrency)
    setIsCurrencyTransitioning(true)

    if (currencyTimer.current !== null) window.clearTimeout(currencyTimer.current)
    currencyTimer.current = window.setTimeout(() => setIsCurrencyTransitioning(false), 320)
  }

  return (
    <section className="marketing-section pricing-section" id="pricing">
      <SectionShell>
        <SectionHeading
          eyebrow="Subscription packages"
          title="One subscription. The right level of tool access."
          description="Journal Daily Save is included with every paid package. Without a subscription, the Free Plan keeps your daily trading journal available."
        />

        <div
          className="pricing-duration-tabs"
          role="tablist"
          aria-label="Choose subscription duration"
          style={
            {
              '--duration-offset': `calc(${durationIndex * 100}% + ${durationIndex * 4}px)`,
            } as CSSProperties
          }
        >
          <span className="pricing-duration-indicator" aria-hidden="true" />
          {durationOptions.map((option) => {
            const selected = option.value === duration
            return (
              <button
                className={cn('pricing-duration-tab', selected && 'pricing-duration-tab--active')}
                key={option.value}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => selectDuration(option.value)}
              >
                <strong>{option.label}</strong>
                <span>{option.detail}</span>
              </button>
            )
          })}
        </div>

        <div className="pricing-package-toolbar">
          {durationRevision > 0 ? (
            <span className="pricing-journal-sheen" key={durationRevision} aria-hidden="true" />
          ) : null}
          <div className="pricing-journal-note">
            <span>Included</span>
            <div>
              <strong>Journal Daily Save is always included</strong>
              <p>Record trades, wins, losses, notes, and daily trading behavior.</p>
            </div>
          </div>

          <div className="pricing-currency-picker">
            <p className="pricing-control-label">Currency</p>
            <div
              className="currency-control"
              aria-label="Choose currency"
              style={
                {
                  '--currency-offset': `calc(${currencyIndex * 100}% + ${currencyIndex * 5}px)`,
                } as CSSProperties
              }
            >
              <span className="currency-indicator" aria-hidden="true" />
              {currencyOptions.map((option) => (
                <button
                  className={cn(currency === option.code && 'is-active')}
                  key={option.code}
                  type="button"
                  aria-pressed={currency === option.code}
                  onClick={() => selectCurrency(option.code)}
                >
                  {option.code}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          className={cn(
            'pricing-packages-grid',
            duration === 'free' && 'pricing-packages-grid--free',
            isDurationTransitioning && 'is-transitioning',
            durationDirection === 1
              ? 'pricing-packages-grid--forward'
              : 'pricing-packages-grid--backward',
          )}
        >
          {visiblePackages.map((pricingPackage, packageIndex) => {
            const price = pricingPackage.currencyPrices[currency]
            const months = durationMonths[pricingPackage.duration]
            const monthlyEquivalent =
              typeof price === 'number' && months > 1 ? Math.round(price / months) : null

            return (
              <article
                className={cn(
                  'package-card',
                  `package-card--${pricingPackage.tier}`,
                  pricingPackage.badge === 'Recommended' && 'package-card--recommended',
                )}
                key={pricingPackage.id}
                style={{ '--pricing-card-delay': `${packageIndex * 55}ms` } as CSSProperties}
              >
                <div className="package-card-topline">
                  <div>
                    <p>{durationLabels[pricingPackage.duration]}</p>
                    <h3>{pricingPackage.name}</h3>
                  </div>
                  {pricingPackage.badge ? (
                    <span className="package-badge">{pricingPackage.badge}</span>
                  ) : null}
                </div>

                <p className="package-subtitle">{pricingPackage.subtitle}</p>

                <div className="package-price">
                  {price === 'free' ? (
                    <strong className="package-price-free">Free</strong>
                  ) : (
                    <>
                      <span className="package-price-value-window">
                        <span
                          className={cn(
                            'package-price-value',
                            isCurrencyTransitioning && 'is-ticking',
                          )}
                          key={`${pricingPackage.id}-${currency}`}
                          style={
                            {
                              '--price-enter-y': currencyDirection === 1 ? '52%' : '-52%',
                            } as CSSProperties
                          }
                        >
                          <span className="package-price-currency">{selectedCurrency.symbol}</span>
                          <strong>{price}</strong>
                        </span>
                      </span>
                      <small>/ total</small>
                    </>
                  )}
                </div>
                <p className="package-price-note">
                  {price === 'free'
                    ? 'No subscription required'
                    : monthlyEquivalent
                      ? `About ${selectedCurrency.symbol}${monthlyEquivalent} per month`
                      : 'One month of access'}
                </p>

                <div className="package-tool-list">
                  <p className="package-list-label">Tool access</p>
                  {toolOrder.map((tool) => {
                    const included = pricingPackage.includedTools.includes(tool)
                    return (
                      <div className={cn('package-tool', !included && 'package-tool--excluded')} key={tool}>
                        <span>{tool}</span>
                        <small className={cn(!included && 'is-excluded')}>
                          {tool === 'Journal Daily Save' && included
                            ? 'Included by default'
                            : included
                              ? 'Included'
                              : 'Not included'}
                        </small>
                      </div>
                    )
                  })}
                </div>

                <ul className="package-feature-list">
                  {pricingPackage.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <a className={`${buttonStyles.primary} package-cta`} href="/login">
                  {pricingPackage.ctaLabel}
                </a>
              </article>
            )
          })}
        </div>

        <div className="pricing-trust-row">
          {pricingTrustItems.map((item) => (
            <span key={item.label}>{item.label}</span>
          ))}
        </div>
      </SectionShell>
    </section>
  )
}
