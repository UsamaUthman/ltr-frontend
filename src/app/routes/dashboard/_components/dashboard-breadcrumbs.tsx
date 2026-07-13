import { ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const routeLabels: Record<string, string> = {
  overview: 'Overview',
  users: 'Users',
  profile: 'Profile / Settings',
}

type DashboardBreadcrumbsProps = {
  currentLabel?: string
}

export function DashboardBreadcrumbs({ currentLabel }: DashboardBreadcrumbsProps) {
  const location = useLocation()
  const routeSegment = location.pathname.split('/').filter(Boolean).at(-1) ?? 'overview'
  const pageLabel = currentLabel ?? routeLabels[routeSegment] ?? 'Dashboard'

  return (
    <nav className="mb-2 flex items-center gap-1 text-[0.6875rem] text-slate-400" aria-label="Breadcrumb">
      <Link
        className="font-medium transition hover:text-blue-700 focus-visible:outline-none focus-visible:text-blue-700"
        to="/dashboard"
      >
        Home
      </Link>
      <ChevronRight className="h-3 w-3" aria-hidden="true" />
      <span className="font-semibold text-slate-600" aria-current="page">
        {pageLabel}
      </span>
    </nav>
  )
}
