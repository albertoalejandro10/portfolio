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
    '@nuxt/a11y'
  ],
  devtools: {
    enabled: true
  },

  app: {
    head: {
      // Fallback title when no page title is set
      title: 'Alberto Alejandro',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        // Author metadata for search engines
        { name: 'author', content: 'Alberto Alejandro' }
        // OG/Twitter image tags are owned by @nuxtjs/seo via nuxt-og-image
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
    description: 'Full-stack Nuxt developer building complete applications with Vue, TypeScript, PostgreSQL, and AWS infrastructure.',
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
  // OG Image Configuration (nuxt-og-image, bundled with @nuxtjs/seo)
  // Dynamic OG images rendered via Satori using OgImageDefault component.
  // Background is /og-background.png; text layers are rendered in code.
  // ─────────────────────────────────────────────────────────────────────────
  ogImage: {
    enabled: true,
    defaults: {
      component: 'OgImageDefault',
      width: 1200,
      height: 630
    },
    fonts: [
      'Public+Sans:400',
      'Public+Sans:600',
      'Instrument+Serif:400'
    ]
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
      'image': 'https://albertoalejandro.nuxt.space/og.png',
      'jobTitle': 'Full-Stack Nuxt Developer',
      'description': 'Building complete Nuxt applications across product UI, APIs, PostgreSQL data models, and AWS deployment.',
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
  // Nuxt Scripts: Cloudflare Web Analytics
  // Cookieless, privacy-friendly analytics. Loaded manually after consent.
  // Token is read from NUXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN env var.
  // ─────────────────────────────────────────────────────────────────────────
  scripts: {
    registry: {
      cloudflareWebAnalytics: {
        token: process.env.NUXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN,
        scriptOptions: {
          // Loaded explicitly from CookieConsent.vue when the visitor accepts.
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
