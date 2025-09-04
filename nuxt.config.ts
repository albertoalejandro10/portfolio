import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/eslint', '@nuxt/image', 'nuxt-og-image'],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Alberto Alejandro',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'description', content: 'Alberto Alejandro' }
      ]
    },
    pageTransition: true
  },
  css: ['~/assets/css/main.css'],
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  content: {
    experimental: { nativeSqlite: true }
  },
  alias: {
    images: fileURLToPath(new URL('./assets/images', import.meta.url))
  },
  compatibilityDate: '2025-09-03',
  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  }
})
