export function getInitials(name: string, maxLength = 2) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'

  const characters =
    parts.length === 1
      ? Array.from(parts[0]).slice(0, maxLength)
      : [Array.from(parts[0])[0], Array.from(parts.at(-1) ?? '')[0]]

  return characters.filter(Boolean).join('').slice(0, maxLength).toLocaleUpperCase()
}
