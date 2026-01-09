<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale, t } = useI18n()

const collection = computed(() => `index_${locale.value}` as keyof Collections)
const { data: page } = await useAsyncData('index', async () => {
  const content = await queryCollection(collection.value).first() as Collections['index_en'] | Collections['index_es']

  if (!content && locale.value !== 'en') {
    return await queryCollection('index_en').first()
  }

  return content
}, {
  watch: [locale]
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: t('error.title'),
    fatal: true
  })
}

// SEO meta tags - title template is applied globally in nuxt.config.ts
useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description,
  // Static OG image from public folder (1200x630)
  ogImage: 'https://albertoalejandro.nuxt.space/og-image.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://albertoalejandro.nuxt.space/og-image.png'
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: 'pt-0!'
      }"
    >
      <UPageGrid class="lg:grid-cols-2">
        <LandingAbout :page class="md:col-span-2" />
        <LandingEducationExperience :page />
        <LandingWorkExperience :page />
      </UPageGrid>
    </UPageSection>
    <LandingTestimonials :page />
    <LandingFAQ :page />
  </UPage>
</template>
