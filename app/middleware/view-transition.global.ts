// Only the image of the project or post being opened (or returned to) gets a view-transition-name.
// A named image is drawn without its card's fade-up, so naming every card made them flicker.
export default defineNuxtRouteMiddleware((to, from) => {
  // "/es/projects/faiplus" → ["projects", "faiplus"], "/blog" → ["blog", undefined]
  const parse = (path: string) => path.match(/\/(projects|blog)(?:\/([^/]+))?\/?$/)
  const target = parse(to.path)
  const origin = parse(from.path)

  // List ↔ detail in the same section: exactly one side has a slug
  useMorphSlug().value = target && origin && target[1] === origin[1] && !target[2] !== !origin[2]
    ? target[2] ?? origin[2]
    : undefined
})
