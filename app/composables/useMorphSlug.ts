// Slug of the project or post whose image morphs between its list card and its page.
// Set on every navigation by middleware/view-transition.global.ts
export function useMorphSlug() {
  return useState<string | undefined>('morph-slug')
}
