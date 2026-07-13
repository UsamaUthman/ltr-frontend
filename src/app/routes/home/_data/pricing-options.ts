export type BillingDuration = 'free' | '1_month' | '3_months' | '6_months'
export type PackageTier = 'free' | 'basic' | 'plus' | 'pro'
export type Currency = 'USD' | 'EUR' | 'GBP'
export type ToolName =
  | 'AI Coaching'
  | 'Live Stream'
  | 'LTR ALPHA'
  | 'Journal Daily Save'

export type PricingPackage = {
  id: string
  duration: BillingDuration
  tier: PackageTier
  name: string
  subtitle: string
  price: number | 'free'
  currencyPrices: Record<Currency, number | 'free'>
  includedTools: ToolName[]
  excludedTools?: ToolName[]
  features: string[]
  badge?: string
  ctaLabel: string
}

export const durationOptions: Array<{
  value: BillingDuration
  label: string
  detail: string
}> = [
  { value: 'free', label: 'Free', detail: 'Journal only' },
  { value: '1_month', label: '1 Month', detail: 'Short term' },
  { value: '3_months', label: '3 Months', detail: 'Better value' },
  { value: '6_months', label: '6 Months', detail: 'Best value' },
]

export const durationLabels: Record<BillingDuration, string> = {
  free: 'No subscription',
  '1_month': '1 month',
  '3_months': '3 months',
  '6_months': '6 months',
}

export const durationMonths: Record<BillingDuration, number> = {
  free: 0,
  '1_month': 1,
  '3_months': 3,
  '6_months': 6,
}

export const currencyOptions: Array<{ code: Currency; symbol: string }> = [
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'GBP', symbol: '£' },
]

export const pricingToolNames = {
  journal: 'Journal Daily Save',
  ai: 'AI Coaching',
  live: 'Live Stream',
  alpha: 'LTR ALPHA',
} as const

const { journal, ai, live, alpha } = pricingToolNames

export const pricingPackages: PricingPackage[] = [
  {
    id: 'free',
    duration: 'free',
    tier: 'free',
    name: 'Free Plan',
    subtitle: 'A simple daily record for traders without an active subscription.',
    price: 'free',
    currencyPrices: { USD: 'free', EUR: 'free', GBP: 'free' },
    includedTools: [journal],
    excludedTools: [ai, live, alpha],
    features: [
      'Record daily trades and operations',
      'Track wins, losses, and notes',
      'Reflect on trading behavior',
    ],
    ctaLabel: 'Start journaling free',
  },
  {
    id: 'basic-1-month',
    duration: '1_month',
    tier: 'basic',
    name: 'Basic',
    subtitle: 'Entry access for traders building a more consistent daily process.',
    price: 29,
    currencyPrices: { USD: 29, EUR: 27, GBP: 23 },
    includedTools: [journal, ai],
    excludedTools: [live, alpha],
    features: ['Journal Daily Save included', 'Entry AI Coaching access', 'Monthly progress summary'],
    ctaLabel: 'Choose Basic',
  },
  {
    id: 'plus-1-month',
    duration: '1_month',
    tier: 'plus',
    name: 'Plus',
    subtitle: 'More guidance and live learning for an active improvement routine.',
    price: 49,
    currencyPrices: { USD: 49, EUR: 45, GBP: 39 },
    includedTools: [journal, ai, live],
    excludedTools: [alpha],
    features: ['Journal Daily Save included', 'Expanded AI Coaching access', 'Selected Live Stream sessions'],
    badge: 'Recommended',
    ctaLabel: 'Choose Plus',
  },
  {
    id: 'pro-1-month',
    duration: '1_month',
    tier: 'pro',
    name: 'Pro',
    subtitle: 'The fullest tool access for active traders working seriously on performance.',
    price: 79,
    currencyPrices: { USD: 79, EUR: 73, GBP: 62 },
    includedTools: [journal, ai, live, alpha],
    features: ['Journal Daily Save included', 'Full coaching and live access', `Complete ${alpha} workspace`],
    badge: 'Full access',
    ctaLabel: 'Choose Pro',
  },
  {
    id: 'basic-3-months',
    duration: '3_months',
    tier: 'basic',
    name: 'Basic',
    subtitle: 'A three-month window for building a reliable journaling and review habit.',
    price: 75,
    currencyPrices: { USD: 75, EUR: 69, GBP: 59 },
    includedTools: [journal, ai],
    excludedTools: [live, alpha],
    features: ['Journal Daily Save included', 'Entry AI Coaching access', 'Three monthly summaries'],
    ctaLabel: 'Choose Basic',
  },
  {
    id: 'plus-3-months',
    duration: '3_months',
    tier: 'plus',
    name: 'Plus',
    subtitle: 'A balanced package for traders combining reflection, coaching, and live learning.',
    price: 129,
    currencyPrices: { USD: 129, EUR: 119, GBP: 102 },
    includedTools: [journal, ai, live],
    excludedTools: [alpha],
    features: ['Journal Daily Save included', 'Expanded AI Coaching access', 'Selected Live Stream sessions'],
    badge: 'Recommended',
    ctaLabel: 'Choose Plus',
  },
  {
    id: 'pro-3-months',
    duration: '3_months',
    tier: 'pro',
    name: 'Pro',
    subtitle: 'Complete access for a focused quarter of performance development.',
    price: 210,
    currencyPrices: { USD: 210, EUR: 193, GBP: 166 },
    includedTools: [journal, ai, live, alpha],
    features: ['Journal Daily Save included', 'Full coaching and live access', `Complete ${alpha} workspace`],
    badge: 'Full access',
    ctaLabel: 'Choose Pro',
  },
  {
    id: 'basic-6-months',
    duration: '6_months',
    tier: 'basic',
    name: 'Basic',
    subtitle: 'Longer-term entry access for traders committed to a steady daily routine.',
    price: 132,
    currencyPrices: { USD: 132, EUR: 121, GBP: 104 },
    includedTools: [journal, ai],
    excludedTools: [live, alpha],
    features: ['Journal Daily Save included', 'Entry AI Coaching access', 'Six monthly summaries'],
    ctaLabel: 'Choose Basic',
  },
  {
    id: 'plus-6-months',
    duration: '6_months',
    tier: 'plus',
    name: 'Plus',
    subtitle: 'Our strongest value for combining regular coaching with live learning.',
    price: 228,
    currencyPrices: { USD: 228, EUR: 210, GBP: 180 },
    includedTools: [journal, ai, live],
    excludedTools: [alpha],
    features: ['Journal Daily Save included', 'Expanded AI Coaching access', 'Selected Live Stream sessions'],
    badge: 'Recommended',
    ctaLabel: 'Choose Plus',
  },
  {
    id: 'pro-6-months',
    duration: '6_months',
    tier: 'pro',
    name: 'Pro',
    subtitle: 'The complete six-month workspace for serious, active performance work.',
    price: 378,
    currencyPrices: { USD: 378, EUR: 348, GBP: 299 },
    includedTools: [journal, ai, live, alpha],
    features: ['Journal Daily Save included', 'Full coaching and live access', `Complete ${alpha} workspace`],
    badge: 'Full access',
    ctaLabel: 'Choose Pro',
  },
]
