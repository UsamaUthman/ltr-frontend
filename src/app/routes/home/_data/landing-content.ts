import {
  Activity,
  BadgeCheck,
  BarChart3,
  BookOpen,
  BrainCircuit,
  CalendarDays,
  ChartSpline,
  CheckCircle2,
  Clock3,
  Cloud,
  Compass,
  Gauge,
  Goal,
  GraduationCap,
  HeartHandshake,
  Layers3,
  LockKeyhole,
  MessageCircleMore,
  NotebookTabs,
  Radio,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
  WalletCards,
} from 'lucide-react'

export const valuePoints = [
  {
    title: 'See the whole process',
    description: 'Bring preparation, execution, review, and coaching into one connected rhythm.',
    icon: Layers3,
  },
  {
    title: 'Improve with context',
    description: 'Turn real trading decisions into focused feedback instead of generic advice.',
    icon: BrainCircuit,
  },
  {
    title: 'Protect consistency',
    description: 'Keep risk, habits, and objectives visible before the session gets noisy.',
    icon: ShieldCheck,
  },
]

export const howItWorksSteps = [
  {
    number: '01',
    label: 'Connect your routine',
    title: 'Build a clear trading workspace',
    description:
      'Choose the products that match your process and organize your preparation, sessions, and review.',
    icon: Compass,
    tone: 'aqua',
  },
  {
    number: '02',
    label: 'Capture the signal',
    title: 'Turn daily activity into insight',
    description:
      'Journal decisions, follow live context, and let your performance view surface repeatable patterns.',
    icon: ScanSearch,
    tone: 'mint',
  },
  {
    number: '03',
    label: 'Refine the edge',
    title: 'Act on focused feedback',
    description:
      'Use coaching prompts and measurable goals to improve one decision at a time without adding noise.',
    icon: TrendingUp,
    tone: 'violet',
  },
]

export const journeyMilestones = [
  {
    period: 'Week 1',
    title: 'Create a baseline',
    description: 'Jordan connects a daily journal and records the reasoning behind each trade.',
    metric: '5 reviews saved',
  },
  {
    period: 'Week 3',
    title: 'Spot the pattern',
    description: 'AI Coaching highlights rushed entries during the first hour of the session.',
    metric: '2 habits identified',
  },
  {
    period: 'Week 6',
    title: 'Build a new rule',
    description: 'A simple pre-entry checklist improves patience and reduces avoidable exposure.',
    metric: '18% less overtrading',
  },
  {
    period: 'Week 10',
    title: 'Protect consistency',
    description: 'LTR Trade shows a steadier risk profile and a repeatable review routine.',
    metric: '84 Alpha score',
  },
]

export const tradingConditions = [
  {
    title: 'Real-time context',
    description: 'Keep account health and session context visible while decisions are still actionable.',
    icon: Activity,
  },
  {
    title: 'Private workspace',
    description: 'Your journal, coaching prompts, and performance notes stay centered on your process.',
    icon: LockKeyhole,
  },
  {
    title: 'Clear objectives',
    description: 'Translate broad ambitions into practical goals you can review each trading week.',
    icon: Target,
  },
  {
    title: 'Measured risk',
    description: 'See exposure and consistency signals in a calm format designed for quick scanning.',
    icon: Gauge,
  },
  {
    title: 'Reliable history',
    description: 'Preserve session notes, decisions, and progress so lessons do not disappear.',
    icon: Cloud,
  },
  {
    title: 'Learning loop',
    description: 'Move smoothly from market education to personal review and a focused next step.',
    icon: GraduationCap,
  },
]

export const roadmapSteps = [
  {
    step: '01',
    title: 'Observe',
    description: 'Capture decisions and market context without changing everything at once.',
    icon: NotebookTabs,
  },
  {
    step: '02',
    title: 'Understand',
    description: 'Connect outcomes to the habits, timing, and risk choices behind them.',
    icon: BarChart3,
  },
  {
    step: '03',
    title: 'Practice',
    description: 'Choose one improvement and reinforce it through deliberate repetition.',
    icon: Goal,
  },
  {
    step: '04',
    title: 'Scale',
    description: 'Protect what works with a process that remains clear under more responsibility.',
    icon: ChartSpline,
  },
]

export const educationResources = [
  {
    type: 'Playbook',
    title: 'A practical pre-market routine',
    description: 'A concise framework for preparing scenarios without predicting every move.',
    meta: '8 min read',
    icon: BookOpen,
    tone: 'navy',
  },
  {
    type: 'Live class',
    title: 'Reviewing risk in real time',
    description: 'See how a structured risk check changes the quality of session decisions.',
    meta: 'Thursday · 18:00 UTC',
    icon: Radio,
    tone: 'aqua',
  },
  {
    type: 'Template',
    title: 'Weekly performance review',
    description: 'Turn five trading days into one clear lesson and one measurable next step.',
    meta: 'Free worksheet',
    icon: CalendarDays,
    tone: 'mint',
  },
]

export const communityMessages = [
  {
    name: 'Maya R.',
    role: 'Index trader',
    message: 'The weekly review finally made my strongest setup obvious. I was trading around it.',
    time: '09:42',
    color: '#2fd9ff',
  },
  {
    name: 'Elias K.',
    role: 'FX trader',
    message: 'Today’s live session was a good reminder that waiting is still a decision.',
    time: '10:18',
    color: '#76f0d0',
  },
  {
    name: 'Noor A.',
    role: 'Futures trader',
    message: 'Saved my 30th daily journal. The difference in my notes from week one is wild.',
    time: '11:06',
    color: '#fbbf24',
  },
]

export const platformFeatures = [
  { label: 'Live account health', icon: Activity },
  { label: 'Daily journal sync', icon: CheckCircle2 },
  { label: 'Coaching prompts', icon: Sparkles },
  { label: 'Community sessions', icon: UsersRound },
]

export const platformMetrics = [
  { label: 'Consistency', value: '84%', icon: BadgeCheck },
  { label: 'Sessions', value: '18', icon: Clock3 },
  { label: 'Goals met', value: '7/9', icon: Goal },
]

export const companySignals = [
  { label: 'Active learners', value: '12K+', icon: UsersRound },
  { label: 'Reviews saved', value: '480K', icon: NotebookTabs },
  { label: 'Live sessions', value: '1.8K', icon: Radio },
  { label: 'Community replies', value: '96K', icon: MessageCircleMore },
]

export const valueMockStats = [
  { label: 'Process score', value: '84', icon: BadgeCheck },
  { label: 'Weekly goal', value: '4 / 5', icon: Goal },
  { label: 'Review streak', value: '12 days', icon: CalendarDays },
]

export const journeySummary = [
  { label: 'Decision quality', value: '+24%', icon: TrendingUp },
  { label: 'Routine consistency', value: '91%', icon: BadgeCheck },
  { label: 'Review completion', value: '10/10', icon: CalendarDays },
]

export const communityHighlights = [
  { label: 'Respectful by default', icon: HeartHandshake },
  { label: 'Focused conversations', icon: MessageCircleMore },
  { label: 'Built around learning', icon: GraduationCap },
]

export const pricingTrustItems = [
  { label: 'Cancel any time', icon: CheckCircle2 },
  { label: 'No hidden platform fees', icon: WalletCards },
  { label: 'Your data stays yours', icon: ShieldCheck },
]

