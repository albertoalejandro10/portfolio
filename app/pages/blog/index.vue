<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale, t } = useI18n()

const collection = computed(() => `pages_${locale.value}` as keyof Collections)
// Keys must be locale-scoped: prerendering shares payloads by key across routes
const { data: page } = await useAsyncData(`blog-page-${locale.value}`, async () => {
  const content = await queryCollection(collection.value).path(`/${locale.value}/blog`).first() as Collections['pages_en'] | Collections['pages_es']

  if (!content && locale.value !== 'en') {
    return await queryCollection('pages_en').first()
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

const { data: posts } = await useAsyncData(`blogs-${locale.value}`, async () => {
  const blogs = await queryCollection(`blog_${locale.value}`).order('date', 'DESC').all()
  return blogs.map((post) => {
    post.path = post.path.replace('/en/', '/')
    return post
  })
}, {
  watch: [locale]
})

if (!posts.value) {
  throw createError({
    statusCode: 404,
    statusMessage: t('error.title'),
    fatal: true
  })
}

// The post opened or returned to: its image morphs, and on Back it skips the
// fade-up so the morph lands on a visible card
const morphSlug = useMorphSlug()
const slugOf = (path: string) => path.split('/').pop()

usePageSeo(page)
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :links="page.links"
      :ui="{
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
      <UBlogPosts orientation="vertical">
        <ClientOnly>
          <Motion
            v-for="(post, index) in posts"
            :key="index"
            :initial="slugOf(post.path) === morphSlug ? false : { opacity: 0, y: 10 }"
            :while-in-view="({ opacity: 1, y: 0 } as any)"
            :transition="{ delay: 0.2 * index }"
            :in-view-options="{ once: true }"
          >
            <UBlogPost
              variant="naked"
              orientation="horizontal"
              :to="post.path"
              v-bind="post"
              :image="{
                src: post.image,
                class: '[view-transition-class:cover]',
                style: { viewTransitionName: slugOf(post.path) === morphSlug ? `post-${morphSlug}` : undefined }
              }"
              :ui="{
                root: 'md:grid md:grid-cols-2 group overflow-visible transition-all duration-300',
                image:
                  'group-hover/blog-post:scale-105 rounded-lg shadow-lg border-4 border-muted ring-2 ring-default',
                header:
                  index % 2 === 0
                    ? 'sm:-rotate-1 overflow-visible'
                    : 'sm:rotate-1 overflow-visible'
              }"
            />
          </Motion>
        </ClientOnly>
      </UBlogPosts>
    </UPageSection>
  </UPage>
</template>
