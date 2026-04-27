<script setup lang="ts">
const { global } = useAppConfig()

const props = withDefaults(defineProps<{
  title?: string
  description?: string
  siteName?: string
}>(), {
  title: 'Alberto Alejandro',
  description: 'Full-stack Nuxt applications, PostgreSQL, and AWS deployment'
})

const appUrl = global.appUrl || 'https://albertoalejandro.nuxt.space'
const siteName = (props.siteName || appUrl).replace(/^https?:\/\//, '').replace(/\/$/, '')
</script>

<template>
  <div class="w-full h-full flex relative" style="font-family: 'Public Sans', sans-serif;">
    <!-- Background image (full-bleed) -->
    <img
      src="/og-background.png"
      alt=""
      class="absolute inset-0 w-full h-full object-cover"
    >

    <!-- Subtle dark overlay for text contrast -->
    <div class="absolute inset-0 bg-black/55" />

    <div class="relative w-full h-full flex flex-col justify-between p-20 text-white">
      <div class="flex items-center gap-3 text-2xl font-semibold tracking-tight">
        <span class="w-3 h-3 rounded-full bg-emerald-400" />
        <span>{{ siteName }}</span>
      </div>

      <div class="flex flex-col gap-5">
        <h1
          class="text-8xl font-semibold leading-none"
          style="font-family: 'Instrument Serif', serif;"
        >
          Alberto Alejandro
        </h1>
        <p
          v-if="description"
          class="text-3xl text-white/82 leading-snug"
          style="max-width: 780px;"
        >
          {{ description }}
        </p>
      </div>

      <div class="flex items-center justify-between text-xl text-white/70">
        <span>Full-Stack Nuxt Developer</span>
        <span>Vue · TypeScript · PostgreSQL · AWS</span>
      </div>
    </div>
  </div>
</template>
