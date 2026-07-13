import type { CSSProperties, ReactNode } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type {
  ClientMarket,
  ClientOverviewMetric,
  MarketEvent,
} from '../client-overview-demo-data'

type AnalysisPanelProps = {
  eyebrow?: string
  title: string
  action?: ReactNode
  children: ReactNode
  className?: string
  id?: string
}

export function AnalysisPanel({
  eyebrow,
  title,
  action,
  children,
  className,
  id,
}: AnalysisPanelProps) {
  return (
    <section
      className={cn(
        'min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_24px_rgba(15,40,71,.04)] sm:p-5',
        className,
      )}
      id={id}
    >
      <header className="flex min-h-10 items-start justify-between gap-4">
        <div>
          {eyebrow ? (
            <p className="text-[0.6875rem] font-bold tracking-[0.07em] text-blue-600 uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className={cn('text-base font-bold text-slate-800', eyebrow && 'mt-1')}>{title}</h2>
        </div>
        {action}
      </header>
      {children}
    </section>
  )
}

const metricToneClasses: Record<ClientOverviewMetric['tone'], string> = {
  blue: 'bg-blue-500',
  emerald: 'bg-emerald-500',
  amber: 'bg-amber-500',
  violet: 'bg-violet-500',
  slate: 'bg-slate-500',
}

export function MetricCard({ metric }: { metric: ClientOverviewMetric }) {
  return (
    <article className="relative min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-[0_5px_18px_rgba(15,40,71,.035)]">
      <span
        className={cn('absolute inset-y-0 left-0 w-1', metricToneClasses[metric.tone])}
        aria-hidden="true"
      />
      <p className="text-[0.6875rem] font-semibold text-slate-500">{metric.label}</p>
      <strong className="mt-2 block truncate text-lg font-bold text-slate-800">{metric.value}</strong>
      <span className="mt-1 block truncate text-[0.6875rem] text-slate-500">{metric.detail}</span>
    </article>
  )
}

type SparklineProps = {
  points: readonly number[]
  color: string
  label: string
}

export function Sparkline({ points, color, label }: SparklineProps) {
  const width = 180
  const height = 48
  const padding = 3
  const min = Math.min(...points)
  const max = Math.max(...points)
  const range = Math.max(max - min, 1)
  const coordinates = points
    .map((point, index) => {
      const x = padding + (index / Math.max(points.length - 1, 1)) * (width - padding * 2)
      const y = height - padding - ((point - min) / range) * (height - padding * 2)
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')

  return (
    <svg
      className="h-12 w-full"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      role="img"
      aria-label={label}
    >
      <line x1="0" y1={height - 1} x2={width} y2={height - 1} stroke="#e8eef5" />
      <polyline
        points={coordinates}
        fill="none"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

const sentimentTone = {
  Bearish: 'warning',
  Neutral: 'neutral',
  Bullish: 'success',
} as const

export function MarketCard({ market }: { market: ClientMarket }) {
  const changeLabel = `${market.change > 0 ? '+' : ''}${market.change.toFixed(2)}%`

  return (
    <article className="min-w-0 rounded-xl border border-slate-200 bg-slate-50/45 p-3.5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <strong className="block text-sm font-bold text-slate-800">{market.symbol}</strong>
          <span className="mt-0.5 block text-[0.625rem] text-slate-500">{market.name}</span>
        </div>
        <span
          className={cn(
            'text-xs font-bold tabular-nums',
            market.change >= 0 ? 'text-emerald-700' : 'text-rose-600',
          )}
        >
          {changeLabel}
        </span>
      </div>
      <div className="mt-3">
        <Sparkline
          points={market.points}
          color={market.color}
          label={`${market.symbol} preview sparkline`}
        />
      </div>
      <div className="mt-2 flex items-center justify-between gap-3">
        <Badge tone={sentimentTone[market.sentiment]}>{market.sentiment}</Badge>
        <span className="text-[0.625rem] font-semibold text-slate-500">
          {market.confidence}% confidence
        </span>
      </div>
    </article>
  )
}

type GaugeProps = {
  score: number
  label: string
  detail?: string
  color?: string
  suffix?: string
}

export function Gauge({
  score,
  label,
  detail,
  color = '#1769ff',
  suffix = '/100',
}: GaugeProps) {
  const safeScore = Math.min(Math.max(score, 0), 100)
  const gaugeStyle = {
    background: `conic-gradient(${color} 0deg ${safeScore * 3.6}deg, #e8eef5 ${safeScore * 3.6}deg 360deg)`,
  } as CSSProperties

  return (
    <div className="flex items-center gap-4">
      <div
        className="relative grid h-24 w-24 shrink-0 place-items-center rounded-full"
        style={gaugeStyle}
        role="img"
        aria-label={`${label}: ${score} out of 100`}
      >
        <div className="grid h-[4.55rem] w-[4.55rem] place-items-center rounded-full bg-white text-center shadow-inner">
          <span>
            <strong className="block text-xl leading-none font-bold text-slate-800">{score}</strong>
            <small className="mt-1 block text-[0.5625rem] text-slate-400">{suffix}</small>
          </span>
        </div>
      </div>
      <div className="min-w-0">
        <strong className="text-sm font-bold text-slate-800">{label}</strong>
        {detail ? <p className="mt-1 text-xs leading-5 text-slate-500">{detail}</p> : null}
      </div>
    </div>
  )
}

export function EventList({ events }: { events: readonly MarketEvent[] }) {
  return (
    <ul className="mt-3 divide-y divide-slate-100">
      {events.map((event) => (
        <li className="grid grid-cols-[46px_minmax(0,1fr)_auto] items-center gap-3 py-3" key={event.id}>
          <span className="rounded-lg bg-slate-100 px-1.5 py-1.5 text-center">
            <strong className="block text-[0.625rem] font-bold text-slate-700">{event.day}</strong>
            <small className="block text-[0.5625rem] text-slate-500">{event.date}</small>
          </span>
          <span className="min-w-0">
            <strong className="block truncate text-xs font-bold text-slate-700">{event.name}</strong>
            <small className="mt-0.5 block text-[0.625rem] text-slate-500">{event.time}</small>
          </span>
          <Badge tone={event.impact === 'High' ? 'warning' : 'neutral'}>{event.impact}</Badge>
        </li>
      ))}
    </ul>
  )
}

type ChecklistPanelProps = {
  items: readonly string[]
  facts: readonly { label: string; value: string }[]
  ctaHref: string
  ctaLabel: string
}

export function ChecklistPanel({ items, facts, ctaHref, ctaLabel }: ChecklistPanelProps) {
  return (
    <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(220px,.7fr)]">
      <ul className="grid gap-2.5">
        {items.map((item) => (
          <li className="flex items-start gap-2.5 text-xs leading-5 text-slate-600" key={item}>
            <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700">
              <Check className="h-2.5 w-2.5" aria-hidden="true" />
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3.5">
        <dl className="divide-y divide-slate-200">
          {facts.map((fact) => (
            <div className="flex items-center justify-between gap-3 py-2 first:pt-0 last:pb-0" key={fact.label}>
              <dt className="text-[0.6875rem] text-slate-500">{fact.label}</dt>
              <dd className="text-right text-[0.6875rem] font-bold text-slate-700">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <a
          className="mt-4 inline-flex min-h-9 w-full items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-200"
          href={ctaHref}
        >
          {ctaLabel}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
