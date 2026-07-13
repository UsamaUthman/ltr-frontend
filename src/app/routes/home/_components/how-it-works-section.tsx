import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/marketing/section-heading'
import { SectionShell } from '@/components/marketing/section-shell'
import { howItWorksSteps } from '../_data/landing-content'

export function HowItWorksSection() {
  return (
    <section className="marketing-section how-section" id="how-it-works">
      <SectionShell>
        <SectionHeading
          eyebrow="A practical improvement loop"
          title="Clear enough to use every trading day."
          description="No complicated setup and no generic checklist. Start with your routine, preserve the right context, and refine what matters."
        />

        <div className="how-grid">
          {howItWorksSteps.map((step) => {
            const Icon = step.icon
            return (
              <article className={`how-card how-card--${step.tone}`} key={step.number}>
                <div className="how-card-topline">
                  <span className="how-number">{step.number}</span>
                  <span className="how-icon">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <p className="how-label">{step.label}</p>
                <h3>{step.title}</h3>
                <p className="how-description">{step.description}</p>
                <a href="/#pricing" className="how-link">
                  See the products <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>
      </SectionShell>
    </section>
  )
}

