export function formatDuration(secs: number) {
  if (secs <= 0) return ""
  if (secs < 60) return `${secs}秒`
  if (secs < 3600) {
    const mins = Math.floor(secs / 60)
    const remaining = secs % 60
    return remaining > 0 ? `${mins}分 ${remaining}秒` : `${mins}分`
  }
  if (secs < 86400) {
    const hours = Math.floor(secs / 3600)
    const remaining = Math.floor((secs % 3600) / 60)
    return remaining > 0 ? `${hours}时 ${remaining}分` : `${hours}时`
  }
  if (secs < 604800) {
    const days = Math.floor(secs / 86400)
    return days === 1 ? "~1 天" : `~${days} 天`
  }
  const weeks = Math.floor(secs / 604800)
  return weeks === 1 ? "~1 周" : `~${weeks} 周`
}
