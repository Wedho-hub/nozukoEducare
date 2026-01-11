/**
 * formatDate
 * Small util to render ISO dates as human-friendly strings.
 */
export default function formatDate(iso) {
  if (!iso) return ''
  try {
    const d = new Date(iso)
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
  } catch {
    return iso
  }
}
