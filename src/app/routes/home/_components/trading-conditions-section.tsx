import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/marketing/section-heading'
import { SectionShell } from '@/components/marketing/section-shell'
import { buttonStyles } from '@/components/ui/button-styles'
import { tradingConditions } from '../_data/landing-content'

export function TradingConditionsSection() {
  return (
    <section className="marketing-section conditions-section" id="conditions">
      <SectionShell>
        <SectionHeading
          eyebrow="Designed for clear decisions"
          title="A calmer environment for serious practice."
          description="Every product is shaped around useful context, controlled risk, and a review process you can sustain."
        />

        <div className="conditions-grid">
          {tradingConditions.map((condition, index) => {
            const Icon = condition.icon
            return (
              <article className="condition-card" key={condition.title}>
                <div className="condition-card-top">
                  <span>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <small>0{index + 1}</small>
                </div>
                <h3>{condition.title}</h3>
                <p>{condition.description}</p>
              </article>
            )
          })}
        </div>

        <div className="conditions-cta">
          <div>
            <strong>One workflow, four focused products.</strong>
            <p>Start where your process needs the most clarity.</p>
          </div>
          <a className={buttonStyles.secondary} href="/#pricing">
            Compare products <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </SectionShell>
    </section>
  )
}

