<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()

const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

const navLinks = useLinks()

const site = useSiteConfig()

useHead(() => ({
  titleTemplate: (title?: string) => title && title !== site.name ? `${title} - ${site.name}` : site.name,
  meta: [
    { key: 'theme-color', name: 'theme-color', content: color.value }
  ]
}))

useSeoMeta({
  twitterCard: 'summary_large_image'
})

const [{ data: navigation }, { data: files }] = await Promise.all([
  useAsyncData(`navigation-${locale.value}`, () => {
    return Promise.all([
      queryCollectionNavigation(`blog_${locale.value}`)
    ])
  }, {
    transform: data => data.flat(),
    watch: [locale]
  }),
  useLazyAsyncData(`search-${locale.value}`, () => {
    return Promise.all([
      queryCollectionSearchSections(`blog_${locale.value}`)
    ])
  }, {
    server: false,
    transform: data => data.flat(),
    watch: [locale]
  })
])
</script>

<template>
  <UApp :locale="locales[locale]">
    <NuxtLayout>
      <UMain class="relative">
        <NuxtPage />
      </UMain>
    </NuxtLayout>

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
        shortcut="meta_k"
        :links="navLinks"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>

    <LazySettingsCookieConsent />
  </UApp>
</template>
