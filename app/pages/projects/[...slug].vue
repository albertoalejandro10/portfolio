<script setup lang="ts">
import { withLeadingSlash, joinURL } from 'ufo'
import type { Collections } from '@nuxt/content'
import type { ContentSurroundLink } from '@nuxt/ui'

const route = useRoute()
const { locale, t } = useI18n()
const localePath = useLocalePath()

const slug = computed(() => Array.isArray(route.params.slug) ? route.params.slug as string[] : [route.params.slug as string])
const path = computed(() => withLeadingSlash(joinURL(locale.value, 'projects', ...slug.value)))

const collection = computed(() => `projects_${locale.value}` as keyof Collections)

const { data: page } = await useAsyncData(path.value, async () => {
  const content = await queryCollection(collection.value).path(`/${locale.value}/projects/${slug.value}`).first() as Collections['projects_en'] | Collections['projects_es']

  if (!content && locale.value !== 'en') {
    return await queryCollection('projects_en').path(withLeadingSlash(joinURL('en', 'projects', ...slug.value))).first()
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
  // Neighbors in the same date-descending order as the projects listing
  const getSurround = async (targetCollection: 'projects_en' | 'projects_es', targetPath: string) => {
    const items = await queryCollection(targetCollection).order('date', 'DESC').all()
    const index = items.findIndex(item => item.path === targetPath)
    if (index === -1) return null
    // [prev, next] — nulls keep the positions UContentSurround expects
    return [items[index - 1] ?? null, items[index + 1] ?? null] as unknown as ContentSurroundLink[]
  }

  const content = await getSurround(`projects_${locale.value}`, path.value)

  if (!content && locale.value !== 'en') {
    return await getSurround('projects_en', withLeadingSlash(joinURL('en', 'projects', ...slug.value)))
  }

  return content
}, { watch: [locale, () => route.fullPath] })

usePageSeo(page)

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: t('projects.title'), item: localePath('/projects') },
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
          to="/projects"
          class="text-sm flex items-center gap-1"
        >
          <UIcon name="lucide:chevron-left" />
          {{ t('projects.title') }}
        </ULink>
        <div class="flex flex-col gap-3 mt-8">
          <NuxtImg
            :src="page.image"
            :alt="page.title"
            class="rounded-lg w-full h-75 md:h-1/4 object-fill md:object-cover object-center"
          />
          <h1 class="text-4xl text-center font-medium max-w-3xl mx-auto mt-4">
            {{ page.title }}
          </h1>
          <p class="text-muted text-center max-w-2xl mx-auto">
            {{ page.description }}
          </p>

          <!-- Project Meta Information -->
          <div class="flex flex-col gap-4 items-center justify-center mt-4">
            <!-- Date -->
            <div v-if="page.date" class="flex items-center gap-2 text-sm text-muted">
              <UIcon name="i-lucide-calendar" class="size-4" />
              <span>{{ formatMonthYear(page.date) }}</span>
            </div>

            <!-- Tags -->
            <div v-if="page.tags && page.tags.length" class="flex flex-wrap gap-2 justify-center">
              <UBadge
                v-for="tag in page.tags"
                :key="tag"
                variant="subtle"
                size="sm"
              >
                {{ tag }}
              </UBadge>
            </div>

            <!-- Tech Stack -->
            <div v-if="page.stack && page.stack.length" class="flex flex-col items-center gap-2">
              <span class="text-sm font-medium">{{ t('projects.techStack') }}</span>
              <div class="flex flex-wrap gap-2 justify-center">
                <UBadge
                  v-for="tech in page.stack"
                  :key="tech"
                  color="primary"
                  variant="soft"
                  size="sm"
                >
                  {{ tech }}
                </UBadge>
              </div>
            </div>

            <!-- Owners -->
            <div v-if="page.owners && page.owners.length" class="flex flex-col items-center gap-2">
              <span class="text-sm font-medium">{{ t('projects.team') }}</span>
              <div class="flex flex-wrap gap-2 justify-center text-sm text-muted">
                <span v-for="(owner, index) in page.owners" :key="owner">
                  {{ owner }}<span v-if="index < page.owners.length - 1">, </span>
                </span>
              </div>
            </div>
            <div v-else-if="page.owner" class="flex flex-col items-center gap-2">
              <span class="text-sm font-medium">{{ t('projects.owner') }}</span>
              <span class="text-sm text-muted">{{ page.owner }}</span>
            </div>

            <!-- Links -->
            <div class="flex items-center gap-3 mt-2">
              <UButton
                v-if="isPublicLink(page.url)"
                :to="page.url"
                target="_blank"
                color="primary"
                icon="i-lucide-external-link"
                :label="t('projects.liveDemo')"
              />
              <UButton
                v-if="isPublicLink(page.github)"
                :to="page.github"
                target="_blank"
                color="neutral"
                variant="outline"
                icon="i-lucide-github"
                :label="t('projects.github')"
              />
              <UButton
                v-if="isPublicLink(page.repository)"
                :to="page.repository"
                target="_blank"
                color="neutral"
                variant="outline"
                icon="i-lucide-code"
                :label="t('projects.repository')"
              />
            </div>
          </div>
        </div>

        <UPageBody class="max-w-3xl mx-auto">
          <ContentRenderer
            v-if="page.body"
            :value="page"
          />

          <SharePage type="project" />
          <UContentSurround :surround="surround ?? undefined" />
        </UPageBody>
      </UPage>
    </UContainer>
  </UMain>
</template>
