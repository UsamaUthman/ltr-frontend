import { useEffect, useState } from 'react'
import { Menu, PanelLeftClose, PanelLeftOpen, X } from 'lucide-react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { BrandMark } from '@/components/brand/brand-mark'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getInitials } from '@/lib/get-initials'
import { cn } from '@/lib/utils'
import { dashboardDemoProfiles } from '../_data/dashboard-demo-data'
import { dashboardNavigation } from '../_data/dashboard-navigation'
import {
  setPreviewDashboardRole,
  type DashboardRole,
} from '../_lib/mock-dashboard-session'
import '@/styles/dashboard.css'

type DashboardShellProps = {
  role: DashboardRole
}

const SIDEBAR_STORAGE_KEY = 'ltr-dashboard-sidebar-collapsed'

function getStoredSidebarState() {
  if (typeof window === 'undefined') return false

  try {
    return window.localStorage.getItem(SIDEBAR_STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

export function DashboardShell({ role }: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(getStoredSidebarState)
  const location = useLocation()
  const navigation = dashboardNavigation[role]
  const currentItem =
    navigation.find((item) => location.pathname === item.href) ?? navigation[0]
  const identity = dashboardDemoProfiles[role]
  const roleLabel = role === 'SUPER_ADMIN' ? 'Super Admin' : 'Client'

  useEffect(() => {
    setPreviewDashboardRole(role)
  }, [role])

  const toggleSidebar = () => {
    setSidebarCollapsed((current) => {
      const next = !current
      try {
        window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(next))
      } catch {
        // The collapse interaction still works when browser storage is unavailable.
      }
      return next
    })
  }

  return (
    <div className={cn('dashboard-layout', sidebarCollapsed && 'is-sidebar-collapsed')}>
      <button
        className={cn('dashboard-sidebar-scrim', sidebarOpen && 'is-open')}
        type="button"
        aria-label="Close dashboard navigation"
        aria-hidden={!sidebarOpen}
        tabIndex={sidebarOpen ? 0 : -1}
        onClick={() => setSidebarOpen(false)}
      />

      <aside
        className={cn('dashboard-sidebar', sidebarOpen && 'is-open')}
        id="dashboard-navigation"
        aria-label={`${roleLabel} navigation`}
      >
        <div className="dashboard-sidebar-header">
          <Link className="dashboard-brand-link" to="/" aria-label="LTR Trade home">
            <BrandMark inverse />
          </Link>
          <button
            className="dashboard-sidebar-close"
            type="button"
            aria-label="Close navigation"
            onClick={() => setSidebarOpen(false)}
          >
            <X aria-hidden="true" />
          </button>
        </div>

        <button
          className="dashboard-sidebar-collapse"
          type="button"
          aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          aria-pressed={sidebarCollapsed}
          title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          onClick={toggleSidebar}
        >
          {sidebarCollapsed ? (
            <PanelLeftOpen aria-hidden="true" />
          ) : (
            <PanelLeftClose aria-hidden="true" />
          )}
        </button>

        <div className="dashboard-workspace-label">
          <span>Workspace</span>
          <strong>{roleLabel}</strong>
        </div>

        <nav className="dashboard-nav" aria-label="Dashboard pages">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                className={({ isActive }) => cn('dashboard-nav-link', isActive && 'is-active')}
                end
                key={item.id}
                to={item.href}
                aria-label={item.label}
                title={sidebarCollapsed ? item.label : undefined}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon aria-hidden="true" />
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.description}</small>
                </span>
              </NavLink>
            )
          })}
        </nav>

        <div className="dashboard-sidebar-account" title={sidebarCollapsed ? identity.name : undefined}>
          <Avatar className="dashboard-sidebar-avatar">
            <AvatarImage src={identity.avatarUrl} alt={identity.name} />
            <AvatarFallback>{getInitials(identity.name)}</AvatarFallback>
          </Avatar>
          <div>
            <strong>{identity.name}</strong>
            <span>{identity.email}</span>
          </div>
        </div>
      </aside>

      <div className="dashboard-workspace">
        <header className="dashboard-topbar">
          <div className="dashboard-topbar-context">
            <button
              className="dashboard-menu-trigger"
              type="button"
              aria-controls="dashboard-navigation"
              aria-expanded={sidebarOpen}
              aria-label="Open dashboard navigation"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu aria-hidden="true" />
            </button>
            <div>
              <p>{roleLabel} workspace</p>
              <strong>{currentItem.label}</strong>
            </div>
          </div>
          <div className="dashboard-topbar-actions">
            <span className="dashboard-preview-badge">Preview data</span>
            <div className="dashboard-topbar-profile">
              <Avatar className="h-8 w-8 border border-slate-200">
                <AvatarImage src={identity.avatarUrl} alt={identity.name} />
                <AvatarFallback>{getInitials(identity.name)}</AvatarFallback>
              </Avatar>
              <span>
                <strong>{identity.name}</strong>
                <small>{roleLabel}</small>
              </span>
            </div>
          </div>
        </header>

        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
