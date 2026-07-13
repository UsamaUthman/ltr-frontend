import { ArrowRight, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react'
import { SectionHeading } from '@/components/marketing/section-heading'
import { SectionShell } from '@/components/marketing/section-shell'
import { buttonStyles } from '@/components/ui/button-styles'
import { valueMockStats, valuePoints } from '../_data/landing-content'

export function ValuePropSection() {
  return (
    <section className="marketing-section value-section" id="value">
      <SectionShell className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <div className="value-visual" aria-label="LTR Trade connected performance workspace preview">
          <div className="value-visual-glow" />
          <div className="value-window">
            <div className="value-window-topbar">
              <div className="flex items-center gap-2">
                <span />
                <span />
                <span />
              </div>
              <p>Weekly performance</p>
              <Sparkles className="h-4 w-4 text-cyan-300" aria-hidden="true" />
            </div>
            <div className="value-window-body">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="mock-label">Decision quality</p>
                  <strong className="mock-display">84 / 100</strong>
                  <p className="mock-positive">
                    <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" /> 7 points this week
                  </p>
                </div>
                <div className="value-ring">
                  <span>84</span>
                </div>
              </div>
              <div className="value-chart" aria-hidden="true">
                <svg viewBox="0 0 520 150" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="value-line" x1="0" x2="1">
                      <stop stopColor="#76f0d0" />
                      <stop offset="1" stopColor="#2fd9ff" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 126 C45 119, 62 132, 94 106 S151 97, 181 86 S230 103, 268 69 S332 76, 365 52 S421 59, 453 31 S492 38, 520 12"
                    fill="none"
                    stroke="url(#value-line)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="value-stat-grid">
                {valueMockStats.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div className="value-stat" key={stat.label}>
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span>{stat.label}</span>
                      <strong>{stat.value}</strong>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="value-float-card">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" aria-hidden="true" />
            <div>
              <span>Coaching insight</span>
              <strong>Patience is improving</strong>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="One connected process"
            title="Your trading tools should make the next decision clearer."
            description="LTR Trade brings the important parts of improvement together without turning your workflow into another source of noise."
          />
          <div className="mt-8 space-y-3">
            {valuePoints.map((point) => {
              const Icon = point.icon
              return (
                <article className="value-point" key={point.title}>
                  <span>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
          <a className={`${buttonStyles.primary} mt-8`} href="/products/ltr-alpha">
            Explore the workspace <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </SectionShell>
    </section>
  )
}

