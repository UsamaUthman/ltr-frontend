import { ArrowRight, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/marketing/section-heading'
import { SectionShell } from '@/components/marketing/section-shell'
import { buttonStyles } from '@/components/ui/button-styles'
import { journeyMilestones, journeySummary } from '../_data/landing-content'

export function TraderJourneySection() {
  return (
    <section className="marketing-section journey-section" id="journey">
      <SectionShell>
        <div className="journey-heading-grid">
          <SectionHeading
            align="left"
            inverse
            eyebrow="A trader journey"
            title="Small changes become a stronger process."
            description="A realistic example of how connected review, coaching, and performance context can support steady improvement."
          />
          <div className="journey-quote">
            <Quote className="h-5 w-5" aria-hidden="true" />
            <p>“The biggest improvement was not a new setup. It was finally seeing when I stopped following my own.”</p>
            <span>Jordan · Index trader</span>
          </div>
        </div>

        <div className="journey-layout">
          <div className="journey-timeline">
            {journeyMilestones.map((milestone, index) => (
              <article className="journey-milestone" key={milestone.period}>
                <div className="journey-marker">
                  <span>{index + 1}</span>
                </div>
                <div>
                  <p className="journey-period">{milestone.period}</p>
                  <h3>{milestone.title}</h3>
                  <p className="journey-description">{milestone.description}</p>
                  <strong>{milestone.metric}</strong>
                </div>
              </article>
            ))}
          </div>

          <div className="journey-dashboard">
            <div className="journey-dashboard-top">
              <div>
                <span>10-week progress</span>
                <strong>Consistency trend</strong>
              </div>
              <span className="journey-status">Improving</span>
            </div>
            <div className="journey-chart" aria-hidden="true">
              <div className="journey-chart-grid" />
              <svg viewBox="0 0 540 210" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="journey-area" x1="0" x2="0" y1="0" y2="1">
                    <stop stopColor="#2fd9ff" stopOpacity=".35" />
                    <stop offset="1" stopColor="#2fd9ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 175 C55 180 65 148 112 154 S175 132 218 139 S283 99 326 111 S385 73 427 79 S490 44 540 28 V210 H0Z"
                  fill="url(#journey-area)"
                />
                <path
                  d="M0 175 C55 180 65 148 112 154 S175 132 218 139 S283 99 326 111 S385 73 427 79 S490 44 540 28"
                  fill="none"
                  stroke="#76f0d0"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="journey-summary-grid">
              {journeySummary.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                )
              })}
            </div>
            <a className={`${buttonStyles.primary} mt-6`} href="/products/ai-coaching">
              Build your review loop <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </SectionShell>
    </section>
  )
}

