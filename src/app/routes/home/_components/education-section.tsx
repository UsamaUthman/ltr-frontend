import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/marketing/section-heading'
import { SectionShell } from '@/components/marketing/section-shell'
import { educationResources } from '../_data/landing-content'

export function EducationSection() {
  return (
    <section className="marketing-section education-section" id="resources">
      <SectionShell>
        <SectionHeading
          eyebrow="Education and resources"
          title="Learn the process, not a prediction."
          description="Short, practical resources designed to improve preparation, review, and decision quality."
        />

        <div className="education-grid">
          {educationResources.map((resource) => {
            const Icon = resource.icon
            return (
              <article className={`education-card education-card--${resource.tone}`} key={resource.title}>
                <div className="education-card-visual">
                  <span>
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <small>{resource.type}</small>
                </div>
                <div className="education-card-content">
                  <p>{resource.meta}</p>
                  <h3>{resource.title}</h3>
                  <span>{resource.description}</span>
                  <a href="/products/live-stream">
                    Explore resource <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </SectionShell>
    </section>
  )
}

