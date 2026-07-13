import { ArrowRight, Check } from 'lucide-react'
import { SectionHeading } from '@/components/marketing/section-heading'
import { SectionShell } from '@/components/marketing/section-shell'
import { buttonStyles } from '@/components/ui/button-styles'
import { roadmapSteps } from '../_data/landing-content'

export function CapitalRoadmapSection() {
  return (
    <section className="marketing-section roadmap-section" id="roadmap">
      <SectionShell>
        <div className="roadmap-shell">
          <div className="roadmap-intro">
            <SectionHeading
              align="left"
              inverse
              eyebrow="Your performance roadmap"
              title="Scale the process before the pressure."
              description="Progress is more durable when observation, understanding, and practice happen before responsibility increases."
            />
            <div className="roadmap-checks">
              {['No rushed progression', 'Goals stay measurable', 'Risk remains visible'].map((item) => (
                <span key={item}>
                  <Check className="h-4 w-4" aria-hidden="true" /> {item}
                </span>
              ))}
            </div>
            <a className={`${buttonStyles.primary} mt-8`} href="/products/ltr-alpha">
              See LTR Trade <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="roadmap-track">
            {roadmapSteps.map((item, index) => {
              const Icon = item.icon
              return (
                <article className="roadmap-step" key={item.step}>
                  <div className="roadmap-step-marker">
                    <span>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {index < roadmapSteps.length - 1 ? <i aria-hidden="true" /> : null}
                  </div>
                  <div>
                    <p>Step {item.step}</p>
                    <h3>{item.title}</h3>
                    <span>{item.description}</span>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </SectionShell>
    </section>
  )
}

