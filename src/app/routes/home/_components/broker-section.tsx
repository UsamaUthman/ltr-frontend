import { ArrowRight, Bell, Check, Menu, TrendingUp } from 'lucide-react'
import { SectionHeading } from '@/components/marketing/section-heading'
import { SectionShell } from '@/components/marketing/section-shell'
import { buttonStyles } from '@/components/ui/button-styles'
import { platformFeatures, platformMetrics } from '../_data/landing-content'

export function BrokerSection() {
  return (
    <section className="marketing-section platform-section" id="platform">
      <SectionShell>
        <div className="platform-shell">
          <div className="platform-copy">
            <SectionHeading
              align="left"
              eyebrow="Your workspace, wherever you review"
              title="Performance context that travels with you."
              description="The platform concept keeps the most useful signals easy to scan across desktop and mobile without pretending to be a live broker in this phase."
            />
            <div className="platform-feature-grid">
              {platformFeatures.map((feature) => {
                const Icon = feature.icon
                return (
                  <span key={feature.label}>
                    <Icon className="h-4 w-4" aria-hidden="true" /> {feature.label}
                  </span>
                )
              })}
            </div>
            <a className={`${buttonStyles.primary} mt-8`} href="/products/ltr-alpha">
              Explore the platform <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="platform-visual" aria-label="LTR Trade mobile and desktop platform mockup">
            <div className="platform-browser">
              <div className="platform-browser-top">
                <div><span /><span /><span /></div>
                <p>app.ltralpha.com</p>
                <Bell className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="platform-browser-content">
                <div className="platform-browser-heading">
                  <div>
                    <span>Good morning</span>
                    <strong>Your process is on track.</strong>
                  </div>
                  <span className="platform-health"><Check className="h-4 w-4" /> Healthy</span>
                </div>
                <div className="platform-metrics">
                  {platformMetrics.map((metric) => {
                    const Icon = metric.icon
                    return (
                      <div key={metric.label}>
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        <span>{metric.label}</span>
                        <strong>{metric.value}</strong>
                      </div>
                    )
                  })}
                </div>
                <div className="platform-chart" aria-hidden="true">
                  {[31, 44, 38, 59, 52, 71, 66, 82, 76, 91].map((height, index) => (
                    <span key={index} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            </div>

            <div className="platform-phone">
              <div className="phone-notch" />
              <div className="phone-header">
                <Menu className="h-4 w-4" aria-hidden="true" />
                <strong>LTR Trade</strong>
                <Bell className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="phone-score">
                <span>Alpha score</span>
                <strong>84</strong>
                <p><TrendingUp className="h-3 w-3" /> Improving</p>
              </div>
              <div className="phone-cards">
                <div><span>Daily review</span><strong>Saved</strong></div>
                <div><span>Next session</span><strong>18:00</strong></div>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>
    </section>
  )
}

