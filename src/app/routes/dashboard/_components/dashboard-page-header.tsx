import type { ReactNode } from 'react'
import { DashboardBreadcrumbs } from './dashboard-breadcrumbs'

type DashboardPageHeaderProps = {
  eyebrow: string
  title: string
  description: string
  action?: ReactNode
}

export function DashboardPageHeader({
  eyebrow,
  title,
  description,
  action,
}: DashboardPageHeaderProps) {
  return (
    <header className="dashboard-page-header">
      <div>
        <DashboardBreadcrumbs currentLabel={title} />
        <p className="dashboard-page-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {action ? <div className="dashboard-page-action">{action}</div> : null}
    </header>
  )
}
