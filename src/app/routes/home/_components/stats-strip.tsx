import { ShieldCheck, Sparkles } from 'lucide-react'
import { SectionShell } from '@/components/marketing/section-shell'
import { heroStats } from '../_data/marketing-content'

export function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="LTR Trade product statistics">
      <SectionShell>
        <div className="stats-panel">
          <div className="stats-intro">
            <span className="stats-intro-icon">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-200/70">
                A clearer standard
              </p>
              <p className="mt-1 font-bold text-white">Strong rules. Real opportunity.</p>
            </div>
          </div>
          <div className="stats-values">
            {heroStats.map((stat) => (
              <div className="stats-value" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="stats-assurance">
            <ShieldCheck className="h-5 w-5 text-[var(--marketing-mint)]" aria-hidden="true" />
            <span>Transparent objectives</span>
          </div>
        </div>
      </SectionShell>
    </section>
  )
}
