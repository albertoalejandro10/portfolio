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
    '@nuxt/hints',
    '@nuxtjs/seo',
    'nuxt-gtag'
  ],
  devtools: {
    enabled: true
  },

  app: {
    head: {
      // Title template applied globally; %s is replaced by page-specific title
      titleTemplate: '%s | Alberto Alejandro',
      // Fallback title when no page title is set
      title: 'Alberto Alejandro',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        // Author metadata for search engines
        { name: 'author', content: 'Alberto Alejandro' },
        // Default OG metadata (can be overridden per-page)
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en' },
        { property: 'og:site_name', content: 'Alberto Alejandro' },
        // Static OG image - uses existing asset in public folder
        { property: 'og:image', content: 'https://albertoalejandro.nuxt.space/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        // Twitter Card defaults (summary_large_image works best with 1200x630 images)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://albertoalejandro.nuxt.space/og-image.png' }
      ],
      link: [
        // Preload critical fonts to reduce render-blocking
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap',
          media: 'print',
          onload: 'this.media=\'all\''
        }
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

  // ─────────────────────────────────────────────────────────────────────────
  // Site Configuration (@nuxtjs/seo)
  // Central source of truth for site-wide SEO metadata
  // ─────────────────────────────────────────────────────────────────────────
  site: {
    url: 'https://albertoalejandro.nuxt.space',
    name: 'Alberto Alejandro',
    description: 'Frontend Developer & Systems Engineer specializing in JavaScript, Vue.js and Nuxt.js. Building user-centered web applications with clean, maintainable code.',
    // Default language for SEO purposes (matches i18n.defaultLocale)
    defaultLocale: 'en'
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

  // Performance optimizations
  experimental: {
    // Enable view transitions for smoother page navigation
    viewTransition: true,
    // Payload extraction for faster hydration
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
      // Static assets - long cache
      '/_nuxt/**': {
        headers: {
          'cache-control': 'public, max-age=31536000, immutable'
        }
      },
      // Public assets - moderate cache with revalidation
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
      // HTML pages - short cache with revalidation
      '/**': {
        headers: {
          'cache-control': 'public, max-age=3600, stale-while-revalidate=86400'
        }
      }
    }
  },

  // Enable build optimizations
  vite: {
    build: {
      // CSS code splitting for smaller initial bundles
      cssCodeSplit: true,
      // Minify CSS for smaller file sizes
      cssMinify: 'lightningcss',
      // Rollup options for better tree-shaking
      rollupOptions: {
        output: {
          // Manual chunks for better caching
          manualChunks: {
            'motion': ['motion-v'],
            'vue-vendor': ['vue', '@vue/shared']
          }
        }
      }
    },
    optimizeDeps: {
      include: ['vue', '@vueuse/core']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Google Analytics Configuration (nuxt-gtag)
  // Uses Google Consent Mode v2 for GDPR/privacy compliance
  // ID is loaded from NUXT_PUBLIC_GTAG_ID environment variable
  // ─────────────────────────────────────────────────────────────────────────
  gtag: {
    // Only enable in production to avoid tracking during development
    enabled: process.env.NODE_ENV === 'production',
    // Manual initialization - script loads only after user consent
    initMode: 'manual',
    // Google Consent Mode v2 - all consent denied by default
    initCommands: [
      ['consent', 'default', {
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        ad_storage: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500
      }]
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
    provider: 'ipx',
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

  // ─────────────────────────────────────────────────────────────────────────
  // Link Checker Configuration
  // Validates internal and external links during build
  // ─────────────────────────────────────────────────────────────────────────
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

  // ─────────────────────────────────────────────────────────────────────────
  // OG Image Configuration
  // Disabled dynamic generation - using static /og-image.png instead
  // Enable if you want runtime OG image generation in the future
  // ─────────────────────────────────────────────────────────────────────────
  ogImage: {
    enabled: false // Static OG image already exists; no dynamic generation needed
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Robots Configuration (@nuxtjs/robots)
  // Controls crawler access and sitemap reference
  // ─────────────────────────────────────────────────────────────────────────
  robots: {
    enabled: true,
    sitemap: '/sitemap_index.xml',
    // Allow all standard routes
    allow: [
      '/',
      '/projects',
      '/projects/*',
      '/blog',
      '/blog/*',
      '/about',
      // Allow LLM discoverability file
      '/llms.txt'
    ],
    // Disallow internal/technical routes
    disallow: [
      '/_studio',
      '/_nuxt',
      '/api/'
    ],
    // Additional rules for specific user agents
    // Note: Most modern LLM crawlers respect robots.txt
    groups: [
      {
        // Standard search engines (default rules apply)
        userAgent: ['*'],
        allow: ['/'],
        disallow: ['/_studio', '/_nuxt', '/api/']
      },
      {
        // Explicitly allow known AI/LLM crawlers for discoverability
        // These crawlers typically index for AI training or search
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
        disallow: ['/_studio', '/_nuxt', '/api/']
      }
    ],
    credits: false
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Schema.org Structured Data (@nuxtjs/schema-org)
  // Provides rich snippets for search engines
  // ─────────────────────────────────────────────────────────────────────────
  schemaOrg: {
    // Identity defines the primary entity (Person for a portfolio)
    identity: {
      '@type': 'Person',
      'name': 'Alberto Alejandro',
      'url': 'https://albertoalejandro.nuxt.space',
      'image': 'https://albertoalejandro.nuxt.space/og-image.png',
      'jobTitle': 'Frontend Developer & Systems Engineer',
      'description': 'Specializing in JavaScript, Vue.js and Nuxt.js. Building user-centered web applications.',
      // Social profiles for knowledge graph
      'sameAs': [
        'https://github.com/albertoalejandro10',
        'https://www.linkedin.com/in/albertoalejandro10/',
        'https://www.upwork.com/freelancers/~0130a269b9b034c325',
        'https://discord.com/users/497789899597021189'
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Sitemap Configuration (@nuxtjs/sitemap)
  // Auto-generates sitemap with all indexable routes
  // ─────────────────────────────────────────────────────────────────────────
  sitemap: {
    enabled: true,
    autoLastmod: true,
    defaultSitemapsChunkSize: 1000,
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
      { label: 'Hreflangs', select: 'count(xhtml:link)', width: '25%' }
    ],
    sitemapName: 'sitemap.xml',
    // Default values for all routes (can be overridden per-route)
    defaults: {
      changefreq: 'weekly',
      priority: 0.8
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Nuxt Studio Configuration
  // Visual editing interface for content
  // ─────────────────────────────────────────────────────────────────────────
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
