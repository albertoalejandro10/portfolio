import type { NavigationMenuItem } from '@nuxt/ui'

export function useLinks() {
  const { t } = useI18n()
  const localePath = useLocalePath()

  const links: ComputedRef<NavigationMenuItem[]> = computed(() => [
    {
      label: t('navbar.home'),
      icon: 'i-lucide-home',
      to: localePath('/')
    },
    {
      label: t('navbar.projects'),
      icon: 'i-lucide-folder',
      to: localePath('/projects')
    },
    // {
    //   label: t('navbar.blog'),
    //   icon: 'i-lucide-file-text',
    //   to: localePath('/blog')
    // },
    {
      label: t('navbar.about'),
      icon: 'i-lucide-user',
      to: localePath('/about')
    }
  ])

  return links
}
