import type { DashboardRole } from '../_lib/mock-dashboard-session'

export type DashboardDemoProfile = {
  avatarUrl?: string
  name: string
  email: string
  role: DashboardRole
  accountStatus: string
  memberSince: string
  language: string
  timezone: string
}

export type DashboardDemoUser = {
  avatarUrl?: string
  id: string
  name: string
  email: string
  type: 'Client' | 'Super Admin'
  plan: string
  status: 'Active' | 'Pending' | 'Inactive'
  joinedDate: string
  lastActive: string
}

export const dashboardDemoProfiles: Record<DashboardRole, DashboardDemoProfile> = {
  CLIENT: {
    name: 'Osama Ahmed',
    email: 'osama@example.com',
    role: 'CLIENT',
    accountStatus: 'Verified',
    memberSince: 'March 18, 2026',
    language: 'English',
    timezone: 'Europe / Istanbul',
  },
  SUPER_ADMIN: {
    name: 'Nadia Kareem',
    email: 'nadia.admin@example.com',
    role: 'SUPER_ADMIN',
    accountStatus: 'Active',
    memberSince: 'January 8, 2026',
    language: 'English',
    timezone: 'Europe / Istanbul',
  },
}

export const superAdminOverviewDemo = {
  metrics: [
    { id: 'total-users', label: 'Total users', value: '1,248', detail: '+8.4% this month', tone: 'positive' },
    { id: 'active-clients', label: 'Active clients', value: '936', detail: '75% of registered users', tone: 'positive' },
    { id: 'pending-review', label: 'Pending review', value: '14', detail: '6 added in the last 24 hours', tone: 'pending' },
    { id: 'subscriptions', label: 'Monthly subscriptions', value: '$48.6k', detail: 'Preview recurring value', tone: 'neutral' },
  ],
  recentActions: [
    { id: 'action-1', actor: 'Maya Chen', action: 'activated a Plus plan', context: '3-month subscription', time: '8 min ago' },
    { id: 'action-2', actor: 'Omar Hassan', action: 'completed account review', context: 'Client verification', time: '24 min ago' },
    { id: 'action-3', actor: 'Elena Rossi', action: 'joined the workspace', context: 'Free journal access', time: '1 hr ago' },
    { id: 'action-4', actor: 'Daniel Brooks', action: 'upgraded to Pro', context: '6-month subscription', time: '3 hrs ago' },
    { id: 'action-5', actor: 'Sara Malik', action: 'returned to active status', context: 'Client account', time: 'Yesterday' },
  ],
  systemSnapshot: [
    { label: 'Platform status', value: 'Operational', tone: 'positive' },
    { label: 'Active sessions', value: '312', tone: 'neutral' },
    { label: 'Preview data refresh', value: '2 min ago', tone: 'neutral' },
    { label: 'Write operations', value: 'Disabled', tone: 'pending' },
  ],
} as const

export const superAdminUsersDemo: DashboardDemoUser[] = [
  { id: 'usr-1001', name: 'Maya Chen', email: 'maya.chen@example.com', type: 'Client', plan: 'Plus · 3 months', status: 'Active', joinedDate: 'Jul 02, 2026', lastActive: '8 min ago' },
  { id: 'usr-1002', name: 'Omar Hassan', email: 'omar.hassan@example.com', type: 'Client', plan: 'Pro · 6 months', status: 'Active', joinedDate: 'Jun 28, 2026', lastActive: '24 min ago' },
  { id: 'usr-1003', name: 'Elena Rossi', email: 'elena.rossi@example.com', type: 'Client', plan: 'Free', status: 'Pending', joinedDate: 'Jun 25, 2026', lastActive: '1 hr ago' },
  { id: 'usr-1004', name: 'Daniel Brooks', email: 'daniel.b@example.com', type: 'Client', plan: 'Pro · 6 months', status: 'Active', joinedDate: 'Jun 19, 2026', lastActive: '3 hrs ago' },
  { id: 'usr-1005', name: 'Sara Malik', email: 'sara.malik@example.com', type: 'Client', plan: 'Basic · 1 month', status: 'Active', joinedDate: 'Jun 11, 2026', lastActive: 'Yesterday' },
  { id: 'usr-1006', name: 'Jonas Meyer', email: 'jonas.meyer@example.com', type: 'Client', plan: 'Plus · 6 months', status: 'Inactive', joinedDate: 'May 30, 2026', lastActive: '6 days ago' },
  { id: 'usr-1007', name: 'Aisha Rahman', email: 'aisha.rahman@example.com', type: 'Client', plan: 'Plus · 3 months', status: 'Active', joinedDate: 'May 22, 2026', lastActive: '2 hrs ago' },
  { id: 'usr-1008', name: 'Liam Parker', email: 'liam.parker@example.com', type: 'Client', plan: 'Free', status: 'Pending', joinedDate: 'May 14, 2026', lastActive: '2 days ago' },
  { id: 'usr-1009', name: 'Nadia Kareem', email: 'nadia.admin@example.com', type: 'Super Admin', plan: 'Internal', status: 'Active', joinedDate: 'Jan 08, 2026', lastActive: 'Now' },
  { id: 'usr-1010', name: 'Victor Silva', email: 'victor.silva@example.com', type: 'Client', plan: 'Basic · 3 months', status: 'Active', joinedDate: 'Apr 26, 2026', lastActive: '5 hrs ago' },
]
