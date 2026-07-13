import {
  BarChart3,
  Bot,
  BookOpenCheck,
  BrainCircuit,
  CalendarCheck2,
  ChartNoAxesCombined,
  CirclePlay,
  CloudCog,
  Goal,
  MessageSquareText,
  NotebookPen,
  Radio,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'

export type MarketingLink = {
  label: string
  href: string
}

export type Product = MarketingLink & {
  slug: string
  eyebrow: string
  description: string
  longDescription: string
  icon: LucideIcon
  accent: string
  color: string
  benefits: Array<{
    title: string
    description: string
    icon: LucideIcon
  }>
  ctaLabel: string
  preview: {
    label: string
    value: string
    detail: string
  }
}

export const announcement = {
  eyebrow: 'NEW',
  message: 'More flexibility. Clearer targets. A smarter way to prove your edge.',
  linkLabel: 'Explore LTR Alpha',
  href: '/products/ltr-alpha',
}

export const primaryNavigation: MarketingLink[] = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Stories', href: '/#stories' },
  { label: 'Resources', href: '/#resources' },
]

export const productLinks: Product[] = [
  {
    slug: 'ai-coaching',
    label: 'AI Coaching',
    eyebrow: 'Personal intelligence',
    description: 'Turn trading activity into focused, practical coaching prompts.',
    longDescription:
      'A private coaching layer that helps you recognize patterns, review decisions, and build a more deliberate trading process from your own activity.',
    href: '/products/ai-coaching',
    icon: Bot,
    accent: 'aqua',
    color: '#16b8d4',
    ctaLabel: 'Start coaching',
    preview: {
      label: 'Coaching focus',
      value: '3 insights',
      detail: 'Prepared from your latest review',
    },
    benefits: [
      {
        title: 'Personalized review',
        description: 'Coaching prompts shaped around your decisions and recurring habits.',
        icon: BrainCircuit,
      },
      {
        title: 'Focused next steps',
        description: 'Translate a busy session into a small set of practical improvements.',
        icon: Target,
      },
      {
        title: 'Private by design',
        description: 'Keep your review workflow centered on your own trading process.',
        icon: ShieldCheck,
      },
    ],
  },
  {
    slug: 'live-stream',
    label: 'Live Stream',
    eyebrow: 'Learn in real time',
    description: 'Follow live market breakdowns and structured trading conversations.',
    longDescription:
      'Join an active learning room where market context, preparation, and decision-making are discussed as they develop—without turning education into trade signals.',
    href: '/products/live-stream',
    icon: Radio,
    accent: 'mint',
    color: '#0baa83',
    ctaLabel: 'View live access',
    preview: {
      label: 'Next session',
      value: 'Market open',
      detail: 'Live preparation and Q&A',
    },
    benefits: [
      {
        title: 'Live market context',
        description: 'See how experienced traders structure preparation around the session.',
        icon: CirclePlay,
      },
      {
        title: 'Community discussion',
        description: 'Ask questions and learn alongside traders working on the same craft.',
        icon: UsersRound,
      },
      {
        title: 'Replay library',
        description: 'Revisit key sessions when your schedule does not match the live room.',
        icon: CloudCog,
      },
    ],
  },
  {
    slug: 'ltr-alpha',
    label: 'LTR Alpha',
    eyebrow: 'Performance workspace',
    description: 'See risk, execution quality, and progress in one clear workspace.',
    longDescription:
      'A focused performance workspace that brings your trading objectives, account health, and decision quality into a single calm operational view.',
    href: '/products/ltr-alpha',
    icon: Sparkles,
    accent: 'violet',
    color: '#6b5ce7',
    ctaLabel: 'Explore LTR Alpha',
    preview: {
      label: 'Alpha score',
      value: '84 / 100',
      detail: 'Consistency is trending higher',
    },
    benefits: [
      {
        title: 'One performance view',
        description: 'Bring account health, progress, and execution context together.',
        icon: ChartNoAxesCombined,
      },
      {
        title: 'Risk clarity',
        description: 'Understand your current limits before they become a distraction.',
        icon: ShieldCheck,
      },
      {
        title: 'Goal tracking',
        description: 'Measure steady progress against the objectives that matter most.',
        icon: Goal,
      },
    ],
  },
  {
    slug: 'journal-daily-save',
    label: 'Journal Daily Save',
    eyebrow: 'Build your record',
    description: 'Capture the decisions and context behind every trading day.',
    longDescription:
      'A lightweight daily journal that makes reflection easy to sustain, helping you preserve context and turn isolated sessions into a useful performance record.',
    href: '/products/journal-daily-save',
    icon: NotebookPen,
    accent: 'amber',
    color: '#e59a18',
    ctaLabel: 'Start journaling',
    preview: {
      label: 'Daily review',
      value: 'Saved',
      detail: 'Notes, setup, and mindset recorded',
    },
    benefits: [
      {
        title: 'Fast daily capture',
        description: 'Record the essential context without creating extra admin work.',
        icon: NotebookPen,
      },
      {
        title: 'Repeatable routine',
        description: 'Use a clear structure that makes end-of-day reflection sustainable.',
        icon: CalendarCheck2,
      },
      {
        title: 'Searchable learning',
        description: 'Keep observations ready for future reviews and coaching sessions.',
        icon: MessageSquareText,
      },
    ],
  },
]

export const productHighlights = [
  { label: 'Risk-first rules', icon: ShieldCheck },
  { label: 'Actionable analytics', icon: BarChart3 },
  { label: 'Trader education', icon: BookOpenCheck },
]

export const heroStats = [
  { value: '90%', label: 'Reward split' },
  { value: '24h', label: 'Fast review cycle' },
  { value: '150+', label: 'Markets available' },
]

export const trustSignals = [
  { name: 'Trader review', score: '4.8', detail: 'Excellent' },
  { name: 'Community score', score: '4.9', detail: 'Top rated' },
]

export const footerGroups: Array<{ title: string; links: MarketingLink[] }> = [
  {
    title: 'Products',
    links: productLinks.map(({ label, href }) => ({ label, href })),
  },
  {
    title: 'Learn',
    links: [
      { label: 'How it works', href: '/#how-it-works' },
      { label: 'Trader stories', href: '/#stories' },
      { label: 'Education', href: '/#resources' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Platform', href: '/#platform' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Contact', href: 'mailto:hello@ltralpha.com' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of use', href: '/#legal' },
      { label: 'Privacy policy', href: '/#legal' },
      { label: 'Risk disclosure', href: '/#legal' },
    ],
  },
]
