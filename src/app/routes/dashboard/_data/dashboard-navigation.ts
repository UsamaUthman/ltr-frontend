import { LayoutDashboard, UserRound, UsersRound, type LucideIcon } from 'lucide-react'
import type { DashboardRole } from '../_lib/mock-dashboard-session'

export type DashboardNavigationItem = {
  id: 'overview' | 'users' | 'profile'
  label: string
  description: string
  href: string
  icon: LucideIcon
}

export const dashboardNavigation: Record<DashboardRole, DashboardNavigationItem[]> = {
  CLIENT: [
    {
      id: 'overview',
      label: 'Overview',
      description: 'Account summary',
      href: '/dashboard/client/overview',
      icon: LayoutDashboard,
    },
    {
      id: 'profile',
      label: 'Profile / Settings',
      description: 'Account details',
      href: '/dashboard/client/profile',
      icon: UserRound,
    },
  ],
  SUPER_ADMIN: [
    {
      id: 'overview',
      label: 'Overview',
      description: 'Workspace summary',
      href: '/dashboard/super-admin/overview',
      icon: LayoutDashboard,
    },
    {
      id: 'users',
      label: 'Users',
      description: 'Directory view',
      href: '/dashboard/super-admin/users',
      icon: UsersRound,
    },
    {
      id: 'profile',
      label: 'Profile / Settings',
      description: 'Account details',
      href: '/dashboard/super-admin/profile',
      icon: UserRound,
    },
  ],
}
