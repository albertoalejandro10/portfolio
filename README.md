# Portfolio

A modern, open-source portfolio template built with **Nuxt 4**, **Vue 3**, and **Tailwind CSS**. Perfect for developers, designers, and creative professionals who want to showcase their work with style.

## ✨ Features

- **🚀 Lightning-Fast Performance** - Built on Nuxt 4 with server-side rendering optimization
- **🎨 Beautiful & Responsive Design** - Modern UI components with Tailwind CSS and Nuxt UI
- **🌍 Multi-Language Support** - Built-in i18n for English and Spanish (easily extendable)
- **📝 Content-Driven** - Powered by Nuxt Content for easy markdown management
- **🖼️ Portfolio Sections** - Showcase your projects, work experience, education, and testimonials
- **🌙 Dark Mode** - Seamless dark/light theme switching
- **♿ Accessible** - Built with accessibility best practices
- **🔍 SEO Optimized** - Auto-generated OG images and meta tags
- **✨ Smooth Animations** - Custom animations and transitions powered by Motion
- **📦 TypeScript Ready** - Full TypeScript support
- **🎯 Easy Customization** - Highly configurable and extendable

## 🏗️ Project Structure

```
app/
├── components/        # Reusable Vue components
├── pages/            # Route pages (About, Projects, Blog)
├── layouts/          # Page layouts
├── composables/      # Vue composables
├── assets/           # Styles and static assets
└── utils/            # Utility functions

content/
├── en/               # English content (YAML & Markdown)
└── es/               # Spanish content (YAML & Markdown)

i18n/
└── locales/          # i18n translation files
```

## 🛠️ Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com)
- **UI Library**: [Nuxt UI](https://ui.nuxt.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Content**: [Nuxt Content](https://content.nuxt.com)
- **Icons**: [Nuxt Icon](https://icon.nuxt.com) + Iconify
- **Internationalization**: [@nuxtjs/i18n](https://i18n.nuxtjs.org)
- **Animations**: [Motion](https://motion.dev)
- **Image Optimization**: [Nuxt Image](https://image.nuxt.com)
- **IDE Support**: ESLint + TypeScript

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn/bun

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd portfolio
```

1. **Install dependencies**

```bash
pnpm install
```

1. **Start development server**

```bash
pnpm dev
```

Visit `http://localhost:3000` to see your portfolio.

## 🛣️ Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm generate` | Generate static site |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix linting issues |
| `pnpm typecheck` | Type check with TypeScript |

## ✏️ Customization Guide

### Add Your Content

1. **Update Personal Information**
   - Edit files in `content/en/` and `content/es/` directories
   - Modify `app/app.config.ts` for site metadata

2. **Add Projects**
   - Create markdown files in `content/en/projects/` or `content/es/projects/`
   - Add project metadata and descriptions

3. **Add Blog Posts**
   - Create markdown files in `content/en/blog/` or `content/es/blog/`

4. **Update Translations**
   - Edit `i18n/locales/en.json` and `i18n/locales/es.json`

5. **Customize Styling**
   - Modify `app/assets/css/main.css` for custom animations and styles
   - Tailwind CSS configuration in `tailwind.config.ts`

6. **Add Social Links**
   - Update `app/composables/useLinks.ts` with your social profiles

## 📦 Adding New Languages

1. Create a new locale file: `i18n/locales/xx.json`
2. Create content directory: `content/xx/`
3. Update `nuxt.config.ts` with new locale configuration

## 🚢 Deployment

### Vercel (Recommended)

```bash
pnpm build
```

Deploy the `.output` directory to Vercel.

### Static Generation

```bash
pnpm generate
```

Outputs a fully static site to `dist/` directory.

See [Nuxt deployment docs](https://nuxt.com/docs/getting-started/deployment) for more options.

## 🎨 Customizing Theme

### Colors & Styling

- Tailwind configuration: `tailwind.config.ts`
- CSS custom properties: `app/assets/css/main.css`
- Color mode: See `nuxt.config.ts`

### Fonts

Default fonts are configured in `app/assets/css/main.css`:

- Sans: Public Sans
- Serif: Instrument Serif

Change these in the `@theme` block.

## 🐛 Troubleshooting

**Port 3000 already in use?**

```bash
pnpm dev -- --port 3001
```

**Build errors?**

```bash
rm -rf .nuxt node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

**TypeScript errors?**

```bash
pnpm typecheck
```
