import { superAdminOverviewDemo } from '../../_data/dashboard-demo-data'
import { DashboardPageHeader } from '../../_components/dashboard-page-header'

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
}

export function SuperAdminOverviewRoute() {
  return (
    <div className="dashboard-page">
      <DashboardPageHeader
        eyebrow="Super Admin workspace"
        title="Overview"
        description="A compact preview of user growth, subscriptions, and recent workspace activity."
      />

      <section className="dashboard-kpi-grid" aria-label="Operational summary">
        {superAdminOverviewDemo.metrics.map((metric) => (
          <article className="dashboard-kpi-card" key={metric.id}>
            <div className="dashboard-kpi-label">
              <span className={`dashboard-status-dot dashboard-status-dot--${metric.tone}`} />
              <p>{metric.label}</p>
            </div>
            <strong>{metric.value}</strong>
            <p>{metric.detail}</p>
          </article>
        ))}
      </section>

      <div className="dashboard-content-grid">
        <section className="dashboard-panel">
          <div className="dashboard-panel-heading">
            <div>
              <p>Operations</p>
              <h2>Recent actions</h2>
            </div>
            <span className="dashboard-subtle-badge">Preview activity</span>
          </div>
          <ul className="dashboard-activity-list">
            {superAdminOverviewDemo.recentActions.map((item) => (
              <li key={item.id}>
                <span className="dashboard-activity-avatar" aria-hidden="true">
                  {getInitials(item.actor)}
                </span>
                <div>
                  <p><strong>{item.actor}</strong> {item.action}</p>
                  <span>{item.context}</span>
                </div>
                <time>{item.time}</time>
              </li>
            ))}
          </ul>
        </section>

        <aside className="dashboard-panel dashboard-panel--compact">
          <div className="dashboard-panel-heading">
            <div>
              <p>Environment</p>
              <h2>System snapshot</h2>
            </div>
          </div>
          <dl className="dashboard-summary-list">
            {superAdminOverviewDemo.systemSnapshot.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd className="dashboard-summary-status">
                  <span className={`dashboard-status-dot dashboard-status-dot--${item.tone}`} />
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="dashboard-panel-note">All values on this page are static demo data.</p>
        </aside>
      </div>
    </div>
  )
}
