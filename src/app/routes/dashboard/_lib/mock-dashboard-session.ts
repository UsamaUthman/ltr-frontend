export type DashboardRole = 'CLIENT' | 'SUPER_ADMIN'

const PREVIEW_ROLE_STORAGE_KEY = 'ltr-dashboard-preview-role'

// Temporary Phase 1D boundary. Replace this module with the real auth/session
// adapter when backend authentication is introduced.
export const mockDashboardSession = {
  role: 'CLIENT',
} as const satisfies { role: DashboardRole }

export function getPreviewDashboardRole(): DashboardRole {
  if (typeof window === 'undefined') return mockDashboardSession.role

  try {
    const storedRole = window.localStorage.getItem(PREVIEW_ROLE_STORAGE_KEY)
    return storedRole === 'SUPER_ADMIN' || storedRole === 'CLIENT'
      ? storedRole
      : mockDashboardSession.role
  } catch {
    return mockDashboardSession.role
  }
}

export function setPreviewDashboardRole(role: DashboardRole) {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(PREVIEW_ROLE_STORAGE_KEY, role)
  } catch {
    // Preview access still works through direct navigation when storage is unavailable.
  }
}

export function getDashboardStartPath(role: DashboardRole = getPreviewDashboardRole()) {
  return role === 'SUPER_ADMIN'
    ? '/dashboard/super-admin/overview'
    : '/dashboard/client/overview'
}
