<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()

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
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: '!pt-0 lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <LandingAbout :page />
      <LandingWorkExperience :page />
    </UPageSection>
    <LandingBlog :page />
    <LandingTestimonials :page />
    <LandingFAQ :page />
  </UPage>
</template>
