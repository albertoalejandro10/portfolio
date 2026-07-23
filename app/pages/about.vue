<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale, t } = useI18n()

const collection = computed(() => `about_${locale.value}` as keyof Collections)
// Key must be locale-scoped: prerendering shares payloads by key across routes
const { data: page } = await useAsyncData(`about-${locale.value}`, async () => {
  const content = await queryCollection(collection.value).first() as Collections['about_en'] | Collections['about_es']

  if (!content && locale.value !== 'en') {
    return await queryCollection('about_en').first()
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
    <UPageHero
      :title="page.title"
      :description="page.description"
      orientation="horizontal"
      :ui="{
        container: 'lg:flex sm:flex-row items-center',
        title: 'mx-0! text-left',
        description: 'mx-0! text-left',
        links: 'justify-start'
      }"
    />
    <UPageSection
      :ui="{
        container: 'pt-0!'
      }"
    >
      <MDC
        :value="page.content"
        unwrap="p"
      />
      <div class="flex flex-row justify-center items-center py-10 -space-x-8">
        <PolaroidItem
          v-for="(image, index) in page.images"
          :key="index"
          :image="image"
          :index
        />
      </div>
    </UPageSection>
  </UPage>
</template>
