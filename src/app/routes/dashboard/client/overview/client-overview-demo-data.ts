export type ClientMetricTone = 'blue' | 'emerald' | 'amber' | 'violet' | 'slate'

export type ClientOverviewMetric = {
  id: string
  label: string
  value: string
  detail: string
  tone: ClientMetricTone
}

export type ClientMarket = {
  id: string
  symbol: string
  name: string
  change: number
  sentiment: 'Bearish' | 'Neutral' | 'Bullish'
  confidence: number
  color: string
  points: number[]
}

export type MarketEvent = {
  id: string
  day: string
  date: string
  name: string
  time: string
  impact: 'High' | 'Medium'
}

export const clientOverviewAnalysisDemo = {
  metrics: [
    { id: 'market-mode', label: 'Market Mode', value: 'Risk-Off', detail: 'Defensive positioning', tone: 'amber' },
    { id: 'best-asset', label: 'Best Asset', value: 'US100', detail: 'Cleanest volatility', tone: 'blue' },
    { id: 'best-session', label: 'Best Session', value: 'New York', detail: '13:30 - 16:00 UTC', tone: 'violet' },
    { id: 'risk-level', label: 'Risk Level', value: 'Medium', detail: 'Reduce position size', tone: 'slate' },
    { id: 'forecast', label: 'Forecast', value: '61%', detail: 'Bearish continuation', tone: 'emerald' },
  ] satisfies ClientOverviewMetric[],
  markets: [
    {
      id: 'us100',
      symbol: 'US100',
      name: 'Nasdaq 100',
      change: -0.84,
      sentiment: 'Bearish',
      confidence: 68,
      color: '#1769ff',
      points: [92, 95, 91, 89, 92, 84, 86, 80, 78, 74, 76, 69],
    },
    {
      id: 'gold',
      symbol: 'GOLD',
      name: 'Spot Gold',
      change: 0.42,
      sentiment: 'Neutral',
      confidence: 55,
      color: '#d69e2e',
      points: [63, 61, 64, 66, 65, 69, 67, 70, 72, 71, 74, 73],
    },
    {
      id: 'us30',
      symbol: 'US30',
      name: 'Dow Jones',
      change: -0.38,
      sentiment: 'Bearish',
      confidence: 62,
      color: '#7c5ce5',
      points: [81, 83, 80, 78, 79, 75, 77, 72, 70, 71, 67, 65],
    },
    {
      id: 'eurusd',
      symbol: 'EUR/USD',
      name: 'Euro / US Dollar',
      change: 0.16,
      sentiment: 'Neutral',
      confidence: 52,
      color: '#0f9f76',
      points: [54, 55, 53, 56, 58, 57, 59, 58, 61, 60, 62, 63],
    },
  ] satisfies ClientMarket[],
  aiSummary: {
    title: 'Defensive flows remain in control',
    text: 'Equity indices are trading below their intraday value zones while capital rotates toward the dollar and gold. The highest-quality opportunity is likely to appear after the New York open, with patience favored over early-session entries.',
    confidence: '61% model confidence',
  },
  riskGauge: {
    score: 40,
    label: 'Risk-Off',
    detail: 'Conditions favor selective exposure and smaller position sizing.',
    breakdown: [
      { label: 'Risk-On', value: 22, color: '#10b981' },
      { label: 'Neutral', value: 38, color: '#94a3b8' },
      { label: 'Risk-Off', value: 40, color: '#f59e0b' },
    ],
  },
  capitalFlows: [
    { id: 'flow-us100', symbol: 'US100', value: -68 },
    { id: 'flow-dxy', symbol: 'DXY', value: 42 },
    { id: 'flow-gold', symbol: 'GOLD', value: 31 },
    { id: 'flow-eurusd', symbol: 'EUR/USD', value: -26 },
  ],
  events: [
    { id: 'event-cpi', day: 'Tue', date: '14 Jul', name: 'CPI (USD)', time: '12:30 UTC', impact: 'High' },
    { id: 'event-tensions', day: 'Wed', date: '15 Jul', name: 'Regional tensions update', time: '14:00 UTC', impact: 'Medium' },
    { id: 'event-sentiment', day: 'Thu', date: '16 Jul', name: 'Consumer sentiment', time: '14:00 UTC', impact: 'Medium' },
  ] satisfies MarketEvent[],
  tradingPlan: {
    items: [
      'Focus on high-quality setups only.',
      'Use the New York session as the primary opportunity window.',
      'Avoid aggressive longs on US100 below the intraday value zone.',
      'Keep risk between 0.5% and 0.75% per trade.',
    ],
    facts: [
      { label: 'Best window', value: 'New York Session' },
      { label: 'Risk per trade', value: '0.5% - 0.75%' },
      { label: 'Max trades', value: '2 per day' },
    ],
  },
  discipline: {
    score: 89,
    label: 'Excellent',
    detail: 'Your preparation and risk consistency are strong. Maintain patience around event-driven volatility.',
  },
  snapshot: {
    date: '10 July 2026',
    keyLevels: [
      { label: 'US100 resistance', value: '22,860' },
      { label: 'US100 support', value: '22,540' },
      { label: 'DXY pivot', value: '105.20' },
    ],
    timeline: [
      { time: '07:00', label: 'London context', state: 'Observe' },
      { time: '12:30', label: 'US data window', state: 'Reduce risk' },
      { time: '13:30', label: 'New York open', state: 'Primary focus' },
    ],
    checklist: ['Bias confirmed', 'Key levels marked', 'Risk cap defined'],
  },
} as const
