<script setup lang="ts">
import { withLeadingSlash, joinURL } from 'ufo'

import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale, t } = useI18n()
const localePath = useLocalePath()

const slug = computed(() => Array.isArray(route.params.slug) ? route.params.slug as string[] : [route.params.slug as string])
const path = computed(() => withLeadingSlash(joinURL(locale.value, ...slug.value)))

const collection = computed(() => `blog_${locale.value}` as keyof Collections)

const { data: page } = await useAsyncData(path.value, async () => {
  const content = await queryCollection(collection.value).path(`/${locale.value}/blog/${slug.value}`).first() as Collections['blog_en'] | Collections['blog_es']

  if (!content && locale.value !== 'en') {
    return await queryCollection('blog_en').path(withLeadingSlash(joinURL('en', ...slug.value))).first()
  }

  return content
}, {
  watch: [locale, () => route.fullPath]
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: t('error.title'),
    fatal: true
  })
}

const { data: surround } = await useAsyncData(`${path.value}-surround`, async () => {
  const content = await queryCollectionItemSurroundings(`blog_${locale.value}`, path.value, {
    fields: ['description']
  })

  if (!content && locale.value !== 'en') {
    return await queryCollectionItemSurroundings('blog_en', withLeadingSlash(joinURL('en', ...slug.value)), {
      fields: ['description']
    })
  }

  return content
}, { watch: [locale, () => route.fullPath] })

usePageSeo(page)

useSchemaOrg([
  defineArticle({
    headline: page.value?.title,
    description: page.value?.description,
    image: page.value?.image,
    datePublished: page.value?.date,
    author: page.value?.author?.name ? { name: page.value.author.name } : undefined
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: t('blog.title'), item: localePath('/blog') },
      { name: page.value?.title }
    ]
  })
])
</script>

<template>
  <UMain class="mt-20 px-2">
    <UContainer class="relative min-h-screen">
      <UPage v-if="page">
        <ULink
          to="/blog"
          class="text-sm flex items-center gap-1"
        >
          <UIcon name="lucide:chevron-left" />
          {{ t('blog.title') }}
        </ULink>
        <div class="flex flex-col gap-3 mt-8">
          <div class="flex text-xs text-muted items-center justify-center gap-2">
            <span v-if="page.date">
              {{ formatDate(page.date) }}
            </span>
            <span v-if="page.date && page.minRead">
              -
            </span>
            <span v-if="page.minRead">
              {{ page.minRead }} {{ t('blog.minRead') }}
            </span>
          </div>
          <NuxtImg
            :src="page.image"
            :alt="page.title"
            class="rounded-lg w-full h-75 object-cover object-center"
          />
          <h1 class="text-4xl text-center font-medium max-w-3xl mx-auto mt-4">
            {{ page.title }}
          </h1>
          <p class="text-muted text-center max-w-2xl mx-auto">
            {{ page.description }}
          </p>
          <div class="flex items-center justify-center gap-2 mt-2">
            <UUser
              orientation="vertical"
              color="neutral"
              variant="outline"
              class="justify-center items-center text-center"
              v-bind="page.author"
            />
          </div>
        </div>
        <UPageBody class="max-w-3xl mx-auto">
          <ContentRenderer
            v-if="page.body"
            :value="page"
          />

          <SharePage type="article" />
          <UContentSurround :surround />
        </UPageBody>
      </UPage>
    </UContainer>
  </UMain>
</template>
