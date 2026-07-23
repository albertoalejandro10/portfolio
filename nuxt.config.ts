export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@vueuse/nuxt',
    'motion-v/nuxt',
    '@nuxtjs/i18n',
    'nuxt-studio',
    '@nuxt/hints',
    '@nuxtjs/seo',
    '@nuxt/a11y',
    '@nuxt/fonts'
  ],
  devtools: {
    enabled: true
  },

  app: {
    head: {
      meta: [
        { name: 'author', content: 'Alberto Alejandro' }
      ],
      link: [
        { rel: 'icon', href: '/logo.svg' }
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

  site: {
    url: 'https://albertoalejandro.nuxt.space',
    name: 'Alberto Alejandro',
    description: 'Full-stack Nuxt developer building complete applications with Vue, TypeScript, PostgreSQL, and AWS infrastructure.',
    defaultLocale: 'en',
    titleSeparator: '-'
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

  experimental: {
    viewTransition: true,
    payloadExtraction: true
  },
  compatibilityDate: '2026-01-01',
  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    },
    compressPublicAssets: true,
    routeRules: {
      '/_nuxt/**': {
        headers: {
          'cache-control': 'public, max-age=31536000, immutable'
        }
      },
      '/logos/**': {
        headers: {
          'cache-control': 'public, max-age=86400, stale-while-revalidate=604800'
        }
      },
      '/mockups/**': {
        headers: {
          'cache-control': 'public, max-age=86400, stale-while-revalidate=604800'
        }
      },
      '/*.svg': {
        headers: {
          'cache-control': 'public, max-age=86400, stale-while-revalidate=604800'
        }
      },
      '/*.png': {
        headers: {
          'cache-control': 'public, max-age=86400, stale-while-revalidate=604800'
        }
      },
      '/**': {
        headers: {
          'cache-control': 'public, max-age=3600, stale-while-revalidate=86400'
        }
      }
    }
  },

  vite: {
    build: {
      cssCodeSplit: true,
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          // manualChunks: {
          // 'motion': ['motion-v'],
          // 'vue-vendor': ['vue', '@vue/shared']
          // }
        }
      }
    },
    optimizeDeps: {
      include: ['vue', '@vueuse/core']
    }
  },

  fonts: {
    families: [
      { name: 'Public Sans', weights: [400, 500, 600, 700], global: true },
      { name: 'Instrument Serif', weights: [400], styles: ['normal', 'italic'], global: true }
    ]
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
    collections: ['lucide', 'circle-flags', 'simple-icons', 'mdi', 'material-icon-theme'],
    serverBundle: 'local',
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
      icons: [
        'lucide:sun',
        'lucide:moon',
        'circle-flags:en',
        'circle-flags:es',
        'material-icon-theme:copilot',
        'material-icon-theme:copilot-light'
      ]
    }
  },
  image: {
    provider: 'none',
    quality: 80,
    format: ['webp', 'avif'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          quality: 70,
          width: 80,
          height: 80
        }
      },
      thumbnail: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 400,
          height: 300
        }
      },
      card: {
        modifiers: {
          format: 'webp',
          quality: 80,
          width: 800,
          height: 600
        }
      }
    }
  },

  linkChecker: {
    excludeLinks: [
      'https://facebook.com/**',
      'https://instagram.com/**',
      'https://linkedin.com/**',
      'https://twitter.com/**'
    ],
    failOnError: true,
    report: {
      html: true,
      markdown: true
    }
  },

  // OG images (nuxt-og-image v6) need no config: OgImageDefault.takumi.vue is
  // the only template (renderer picked from its suffix), 1200x630 is the default
  // size, and fonts come from @nuxt/fonts (`fonts.families` with `global: true`).

  robots: {
    groups: [
      {
        userAgent: ['*'],
        allow: ['/'],
        disallow: ['/_studio', '/api/']
      },
      {
        userAgent: [
          'GPTBot', // OpenAI
          'ChatGPT-User', // ChatGPT browsing
          'Google-Extended', // Google AI (Bard)
          'Anthropic-ai', // Anthropic (Claude)
          'Claude-Web', // Claude web search
          'PerplexityBot', // Perplexity AI
          'Cohere-ai' // Cohere
        ],
        allow: ['/', '/llms.txt'],
        disallow: ['/_studio', '/api/']
      }
    ],
    credits: false
  },

  schemaOrg: {
    identity: {
      '@type': 'Person',
      'name': 'Alberto Alejandro',
      'url': 'https://albertoalejandro.nuxt.space',
      'image': '/og-background.png',
      'jobTitle': 'Full-Stack Nuxt Developer',
      'description': 'Building complete Nuxt applications across product UI, APIs, PostgreSQL data models, and AWS deployment.',
      'sameAs': [
        'https://github.com/albertoalejandro10',
        'https://www.linkedin.com/in/albertoalejandro10/',
        'https://www.upwork.com/freelancers/~0130a269b9b034c325',
        'https://discord.com/users/497789899597021189'
      ]
    }
  },

  scripts: {
    registry: {
      cloudflareWebAnalytics: {
        token: process.env.NUXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN,
        scriptOptions: {
          trigger: 'manual'
        }
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Sitemap Configuration (@nuxtjs/sitemap)
  // Auto-generates sitemap with all indexable routes
  // ─────────────────────────────────────────────────────────────────────────
  sitemap: {
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
      { label: 'Hreflangs', select: 'count(xhtml:link)', width: '25%' }
    ]
  },

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
