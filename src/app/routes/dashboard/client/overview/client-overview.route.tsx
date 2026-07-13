import { Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { DashboardPageHeader } from '../../_components/dashboard-page-header'
import {
  AnalysisPanel,
  ChecklistPanel,
  EventList,
  Gauge,
  MarketCard,
  MetricCard,
} from './_components/client-overview-widgets'
import { clientOverviewAnalysisDemo } from './client-overview-demo-data'

export function ClientOverviewRoute() {
  const data = clientOverviewAnalysisDemo

  return (
    <div className="dashboard-page">
      <DashboardPageHeader
        eyebrow="Client analysis workspace"
        title="AI-Powered Market Intelligence"
        description="A demo analysis workspace for market context, disciplined preparation, and clearer trading decisions."
        action={<Badge tone="info">Demo analysis</Badge>}
      />

      <section
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        aria-label="Market intelligence summary"
      >
        {data.metrics.map((metric) => (
          <MetricCard metric={metric} key={metric.id} />
        ))}
      </section>

      <div className="grid min-w-0 grid-cols-1 gap-4 xl:grid-cols-12">
        <AnalysisPanel
          className="xl:col-span-8"
          eyebrow="Live context"
          title="Market overview"
          action={<Badge tone="neutral">Preview prices</Badge>}
        >
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {data.markets.map((market) => (
              <MarketCard market={market} key={market.id} />
            ))}
          </div>
        </AnalysisPanel>

        <AnalysisPanel
          className="bg-blue-50/50 xl:col-span-4"
          eyebrow="AI summary"
          title={data.aiSummary.title}
          action={<Badge tone="info">{data.aiSummary.confidence}</Badge>}
        >
          <p className="mt-4 text-xs leading-6 text-slate-600">{data.aiSummary.text}</p>
          <a
            className="mt-5 inline-flex min-h-9 items-center justify-center rounded-lg border border-blue-200 bg-white px-3 py-2 text-xs font-bold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-100"
            href="#client-trading-plan"
          >
            Deep Dive Analysis
          </a>
        </AnalysisPanel>

        <AnalysisPanel className="xl:col-span-4" eyebrow="Risk regime" title="Market sentiment">
          <div className="mt-4">
            <Gauge
              score={data.riskGauge.score}
              label={data.riskGauge.label}
              detail={data.riskGauge.detail}
              color="#f59e0b"
            />
          </div>
          <ul className="mt-4 grid gap-2.5">
            {data.riskGauge.breakdown.map((item) => (
              <li className="grid grid-cols-[58px_minmax(0,1fr)_34px] items-center gap-2" key={item.label}>
                <span className="text-[0.625rem] font-semibold text-slate-500">{item.label}</span>
                <span className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <span
                    className="block h-full rounded-full"
                    style={{ width: `${item.value}%`, backgroundColor: item.color }}
                  />
                </span>
                <strong className="text-right text-[0.625rem] font-bold text-slate-600">{item.value}%</strong>
              </li>
            ))}
          </ul>
        </AnalysisPanel>

        <AnalysisPanel className="xl:col-span-4" eyebrow="Positioning" title="Capital flow">
          <ul className="mt-4 grid gap-4">
            {data.capitalFlows.map((flow) => {
              const positive = flow.value >= 0
              return (
                <li key={flow.id}>
                  <div className="flex items-center justify-between gap-3">
                    <strong className="text-xs font-bold text-slate-700">{flow.symbol}</strong>
                    <span
                      className={cn(
                        'text-[0.6875rem] font-bold tabular-nums',
                        positive ? 'text-emerald-700' : 'text-rose-600',
                      )}
                    >
                      {positive ? '+' : ''}{flow.value}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-100">
                    <span
                      className={cn('block h-full rounded-full', positive ? 'bg-emerald-500' : 'bg-rose-400')}
                      style={{ width: `${Math.abs(flow.value)}%` }}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
        </AnalysisPanel>

        <AnalysisPanel className="xl:col-span-4" eyebrow="Calendar" title="Upcoming events">
          <EventList events={data.events} />
        </AnalysisPanel>

        <AnalysisPanel
          className="xl:col-span-8"
          id="client-trading-plan"
          eyebrow="Execution framework"
          title="AI trading plan"
          action={<Badge tone="success">Prepared</Badge>}
        >
          <ChecklistPanel
            items={data.tradingPlan.items}
            facts={data.tradingPlan.facts}
            ctaHref="#client-plan-snapshot"
            ctaLabel="See Full Plan"
          />
        </AnalysisPanel>

        <AnalysisPanel className="xl:col-span-4" eyebrow="Performance" title="Discipline score">
          <div className="mt-5">
            <Gauge
              score={data.discipline.score}
              label={data.discipline.label}
              detail={data.discipline.detail}
              color="#10b981"
            />
          </div>
          <div className="mt-5 rounded-xl bg-emerald-50 px-3 py-2.5 text-[0.6875rem] leading-5 text-emerald-800">
            Preparation quality is above your four-week average.
          </div>
        </AnalysisPanel>

        <AnalysisPanel
          className="xl:col-span-12"
          id="client-plan-snapshot"
          eyebrow="Daily preparation"
          title="Trading plan snapshot"
          action={<Badge tone="neutral">{data.snapshot.date}</Badge>}
        >
          <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div>
              <h3 className="text-xs font-bold text-slate-700">Key levels</h3>
              <dl className="mt-2 divide-y divide-slate-100">
                {data.snapshot.keyLevels.map((level) => (
                  <div className="flex items-center justify-between gap-3 py-2.5" key={level.label}>
                    <dt className="text-[0.6875rem] text-slate-500">{level.label}</dt>
                    <dd className="text-[0.6875rem] font-bold text-slate-700 tabular-nums">{level.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-700">Session timeline</h3>
              <ol className="mt-2 grid gap-2">
                {data.snapshot.timeline.map((item) => (
                  <li className="grid grid-cols-[42px_minmax(0,1fr)] gap-2 rounded-lg bg-slate-50 px-2.5 py-2" key={item.time}>
                    <time className="text-[0.625rem] font-bold text-blue-700">{item.time}</time>
                    <span>
                      <strong className="block text-[0.6875rem] text-slate-700">{item.label}</strong>
                      <small className="mt-0.5 block text-[0.5625rem] text-slate-500">{item.state}</small>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-700">Pre-trade checklist</h3>
              <ul className="mt-2 grid gap-2">
                {data.snapshot.checklist.map((item) => (
                  <li className="flex items-center gap-2 rounded-lg border border-slate-100 px-2.5 py-2 text-[0.6875rem] font-semibold text-slate-600" key={item}>
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                      <Check className="h-2.5 w-2.5" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnalysisPanel>
      </div>
    </div>
  )
}
