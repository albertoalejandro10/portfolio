<script setup lang="ts">
import type { IndexEnCollectionItem, IndexEsCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexEnCollectionItem | IndexEsCollectionItem
}>()
</script>

<template>
  <UPageSection
    id="intro-video"
    :title="page.video.title"
    :description="page.video.description"
    class="scroll-mt-24"
    :ui="{
      container: 'px-0 pt-0! gap-6 sm:gap-8',
      title: 'text-base sm:text-lg md:text-xl lg:text-2xl font-medium',
      description: 'mt-2 text-xs sm:text-sm md:text-base text-muted'
    }"
  >
    <UPageCard
      variant="subtle"
      spotlight
      spotlight-color="primary"
      class="mx-auto w-full max-w-4xl"
      :ui="{ container: 'p-1.5 sm:p-2' }"
    >
      <!-- Shows our own thumbnail; YouTube (nocookie) only loads after a click -->
      <ScriptYouTubePlayer
        :video-id="page.video.youtubeId"
        class="group overflow-hidden rounded-md [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:size-full"
      >
        <template #placeholder>
          <NuxtImg
            :src="page.video.image.src"
            :alt="page.video.image.alt"
            loading="lazy"
            class="size-full object-cover"
          />
        </template>
        <template #awaitingLoad>
          <!-- Decorative: the player root is already the focusable play button.
               Bottom-left so it doesn't cover the thumbnail's headline. -->
          <span
            aria-hidden="true"
            class="absolute inset-0 flex items-end justify-start p-3 sm:p-6"
          >
            <span class="flex items-center gap-1.5 sm:gap-2 rounded-full bg-primary py-1.5 pl-3 pr-4 sm:py-2.5 sm:pl-4 sm:pr-5 text-sm sm:text-base font-semibold text-inverted shadow-lg ring-4 ring-primary/30 transition-transform duration-200 group-hover:scale-105">
              <UIcon name="i-lucide-play" class="size-4 sm:size-5" />
              1 min
            </span>
          </span>
        </template>
        <template #loading>
          <span
            aria-hidden="true"
            class="absolute inset-0 flex items-center justify-center"
          >
            <UIcon name="i-lucide-loader-circle" class="size-8 animate-spin text-white" />
          </span>
        </template>
      </ScriptYouTubePlayer>
    </UPageCard>
  </UPageSection>
</template>
