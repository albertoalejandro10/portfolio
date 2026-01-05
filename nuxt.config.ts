export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxt/image',
    'nuxt-og-image',
    '@vueuse/nuxt',
    'motion-v/nuxt',
    '@nuxtjs/i18n',
    'nuxt-studio',
    '@nuxt/hints'
  ],
  ssr: false,
  devtools: {
    enabled: true
  },
  app: {
    head: {
      title: 'Alberto Alejandro',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'description', content: 'Alberto Alejandro' }
      ]
    },
    pageTransition: {
      name: 'rotate',
      mode: 'out-in'
    }
  },
  css: ['~/assets/css/main.css'],
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark'
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
  compatibilityDate: '2026-01-01',
  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },
  i18n: {
    langDir: 'locales',
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en',
        file: 'en.json'
      },
      {
        code: 'es',
        name: 'Español',
        language: 'es',
        file: 'es.json'
      }
    ]
  },
  icon: {
    collections: ['lucide', 'circle-flags', 'simple-icons'],
    provider: 'iconify'
  },
  ogImage: { enabled: false },
  studio: {
    route: '/_studio',
    repository: {
      provider: 'github',
      owner: 'albertoalejandro10',
      repo: 'portfolio',
      branch: 'main'
    }
  }
})
