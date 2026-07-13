import { Navigate } from 'react-router-dom'
import {
  getDashboardStartPath,
  getPreviewDashboardRole,
} from './_lib/mock-dashboard-session'

export function DashboardHomeRedirectRoute() {
  return <Navigate replace to={getDashboardStartPath(getPreviewDashboardRole())} />
}
