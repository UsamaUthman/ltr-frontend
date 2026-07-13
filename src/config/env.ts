function normalizeOptionalUrl(value: string | undefined) {
  const normalized = value?.trim()
  return normalized ? normalized.replace(/\/$/, '') : ''
}

export const appEnv = {
  apiBaseUrl: normalizeOptionalUrl(import.meta.env.VITE_API_BASE_URL),
} as const
