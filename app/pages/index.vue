<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale, t } = useI18n()

const collection = computed(() => `index_${locale.value}` as keyof Collections)
// Key must be locale-scoped: prerendering shares payloads by key across routes
const { data: page } = await useAsyncData(`index-${locale.value}`, async () => {
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

usePageSeo(page)
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
    <!-- Lazy load below-fold components -->
    <LazyLandingTestimonials :page />
    <LazyLandingFAQ :page />
  </UPage>
</template>
