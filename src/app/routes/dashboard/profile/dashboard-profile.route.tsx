import { DashboardPageHeader } from '../_components/dashboard-page-header'
import { dashboardDemoProfiles } from '../_data/dashboard-demo-data'
import type { DashboardRole } from '../_lib/mock-dashboard-session'

type DashboardProfileRouteProps = {
  role: DashboardRole
}

export function DashboardProfileRoute({ role }: DashboardProfileRouteProps) {
  const identity = dashboardDemoProfiles[role]
  const roleLabel = role === 'SUPER_ADMIN' ? 'Super Admin' : 'Client'

  return (
    <div className="dashboard-page">
      <DashboardPageHeader
        eyebrow={`${roleLabel} workspace`}
        title="Profile / Settings"
        description="Review the account information available to the current preview session."
      />

      <div className="dashboard-profile-grid">
        <section className="dashboard-panel">
          <div className="dashboard-panel-heading">
            <div>
              <p>Account</p>
              <h2>Basic information</h2>
            </div>
            <span className="dashboard-subtle-badge">Read only</span>
          </div>
          <dl className="dashboard-profile-details">
            <div>
              <dt>Name</dt>
              <dd>{identity.name}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{identity.email}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{roleLabel}</dd>
            </div>
            <div>
              <dt>Account status</dt>
              <dd>{identity.accountStatus}</dd>
            </div>
            <div>
              <dt>Member since</dt>
              <dd>{identity.memberSince}</dd>
            </div>
          </dl>
        </section>

        <aside className="dashboard-panel dashboard-panel--compact">
          <div className="dashboard-panel-heading">
            <div>
              <p>Settings</p>
              <h2>Preferences</h2>
            </div>
          </div>
          <dl className="dashboard-summary-list">
            <div>
              <dt>Language</dt>
              <dd>{identity.language}</dd>
            </div>
            <div>
              <dt>Timezone</dt>
              <dd>{identity.timezone}</dd>
            </div>
          </dl>
          <p className="dashboard-panel-note">
            Editing will be enabled when account APIs are available. Password controls are intentionally omitted.
          </p>
        </aside>
      </div>
    </div>
  )
}
