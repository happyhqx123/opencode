export function webSearchProviderLabel(provider: unknown) {
  if (provider === "parallel") return "并行网页搜索"
  if (provider === "exa") return "Exa 网页搜索"
  return "网页搜索"
}

export function toolDisplayMetadata(state: unknown): Record<string, unknown> {
  if (!state || typeof state !== "object" || Array.isArray(state)) return {}
  if (!("status" in state) || state.status === "pending") return {}
  if (!("structured" in state) || !state.structured || typeof state.structured !== "object") return {}
  if (Array.isArray(state.structured)) return {}
  return state.structured as Record<string, unknown>
}
