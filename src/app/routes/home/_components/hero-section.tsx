import { ArrowRight, Check, Play, ShieldCheck, Star, TrendingUp } from 'lucide-react'
import { SectionShell } from '@/components/marketing/section-shell'
import { buttonStyles } from '@/components/ui/button-styles'
import { heroStats, trustSignals } from '../_data/marketing-content'

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Example LTR Trade trading performance dashboard">
      <div className="hero-orbit hero-orbit--one" />
      <div className="hero-orbit hero-orbit--two" />

      <div className="hero-dashboard">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-cyan-300/15 text-cyan-200">
              <TrendingUp className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/60">
                Alpha account
              </p>
              <p className="text-sm font-bold text-white">Performance overview</p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-[10px] font-bold text-emerald-200">
            ON TRACK
          </span>
        </div>

        <div className="mt-5 grid grid-cols-[1fr_auto] items-start gap-4">
          <div>
            <p className="text-xs text-blue-100/60">Current balance</p>
            <p className="mt-1 text-[1.75rem] font-bold tracking-normal text-white">$108,420</p>
            <p className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-emerald-300">
              <TrendingUp className="h-3.5 w-3.5" /> +8.42% this cycle
            </p>
          </div>
          <div className="alpha-score">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-100/60">Score</span>
            <span className="text-2xl font-extrabold text-white">84</span>
          </div>
        </div>

        <div className="hero-chart" aria-hidden="true">
          <svg viewBox="0 0 440 150" preserveAspectRatio="none">
            <defs>
              <linearGradient id="hero-chart-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#2fd9ff" stopOpacity=".38" />
                <stop offset="1" stopColor="#2fd9ff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="hero-chart-line" x1="0" x2="1">
                <stop stopColor="#76f0d0" />
                <stop offset="1" stopColor="#2fd9ff" />
              </linearGradient>
            </defs>
            <path
              d="M0 122 C35 116, 47 128, 75 108 S124 86, 145 96 S181 112, 207 78 S250 70, 271 59 S306 76, 330 46 S373 56, 399 26 S427 26, 440 12 V150 H0Z"
              fill="url(#hero-chart-fill)"
            />
            <path
              d="M0 122 C35 116, 47 128, 75 108 S124 86, 145 96 S181 112, 207 78 S250 70, 271 59 S306 76, 330 46 S373 56, 399 26 S427 26, 440 12"
              fill="none"
              stroke="url(#hero-chart-line)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            ['Profit target', '84%'],
            ['Daily loss', 'Healthy'],
            ['Trading days', '12'],
          ].map(([label, value]) => (
            <div className="hero-metric" key={label}>
              <p>{label}</p>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-float-card hero-float-card--payout">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-100 text-emerald-600">
          <Check className="h-5 w-5" strokeWidth={3} />
        </span>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Reward approved</p>
          <p className="mt-0.5 text-sm font-extrabold text-[var(--marketing-navy)]">$7,240.00</p>
        </div>
      </div>

      <div className="hero-float-card hero-float-card--risk">
        <ShieldCheck className="h-5 w-5 text-[var(--marketing-blue)]" />
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Risk status</p>
          <p className="mt-0.5 text-xs font-extrabold text-[var(--marketing-navy)]">All objectives clear</p>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="hero-section">
      <SectionShell className="relative grid items-center gap-12 py-12 sm:py-16 lg:min-h-[690px] lg:grid-cols-[.93fr_1.07fr] lg:gap-10 lg:py-20">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <div className="hero-kicker">
            <span className="hero-kicker-dot" />
            Built for disciplined traders
          </div>
          <h1 className="hero-title">
            Your strategy.
            <span>More room to grow.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[590px] text-[0.98rem] leading-7 text-slate-600 sm:text-[1.05rem] sm:leading-8 lg:mx-0">
            Prove your edge through clear objectives, transparent rules, and a trader-first path to
            meaningful capital.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a className={buttonStyles.primary} href="/login">
              Start your evaluation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a className={buttonStyles.secondary} href="/#how-it-works">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-blue-50 text-[var(--marketing-blue)]">
                <Play className="ml-0.5 h-3 w-3 fill-current" aria-hidden="true" />
              </span>
              See how it works
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
            {trustSignals.map((signal) => (
              <div className="flex items-center gap-2" key={signal.name}>
                <div className="flex gap-0.5 text-[var(--marketing-amber)]" aria-label={`${signal.score} out of 5 stars`}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star className="h-3.5 w-3.5 fill-current" key={star} aria-hidden="true" />
                  ))}
                </div>
                <span className="text-sm font-extrabold text-[var(--marketing-navy)]">{signal.score}</span>
                <span className="text-xs text-slate-500">{signal.detail}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <HeroVisual />
        </div>
      </SectionShell>

      <div className="sr-only" aria-label="Product highlights">
        {heroStats.map((stat) => `${stat.value} ${stat.label}`).join(', ')}
      </div>
    </section>
  )
}
