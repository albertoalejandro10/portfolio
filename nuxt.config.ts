export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    'nuxt-og-image',
    '@vueuse/nuxt',
    'motion-v/nuxt',
    '@nuxtjs/i18n'
  ],
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
    preview: {
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'portfolio',
        owner: 'albertoalejandro10',
        url: 'https://github.com/albertoalejandro10/portfolio'
      }
    }
  },
  compatibilityDate: '2025-09-03',
  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en-US' },
      { code: 'es', name: 'Español', language: 'es-ES' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default'
  }
})
