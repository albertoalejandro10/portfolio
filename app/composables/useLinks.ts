import type { NavigationMenuItem } from '@nuxt/ui'

export function useLinks() {
  const localePath = useLocalePath()

  const links: ComputedRef<NavigationMenuItem[]> = computed(() => [{
    label: 'Home',
    icon: 'i-lucide-home',
    to: localePath('/')
  }, {
    label: 'Projects',
    icon: 'i-lucide-folder',
    to: localePath('/projects')
  }, {
    label: 'Blog',
    icon: 'i-lucide-file-text',
    to: localePath('/blog')
  }, {
    label: 'Speaking',
    icon: 'i-lucide-mic',
    to: localePath('/speaking')
  }, {
    label: 'About',
    icon: 'i-lucide-user',
    to: localePath('/about')
  }])

  return links
}
