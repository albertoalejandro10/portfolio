<script setup lang="ts">
import type { IndexEnCollectionItem, IndexEsCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexEnCollectionItem | IndexEsCollectionItem
}>()

const { t } = useI18n()

const QUOTE_CLAMP_LENGTH = 400
const expandedIndex = ref<number | null>(null)

function isLong(quote: string) {
  return quote.length > QUOTE_CLAMP_LENGTH
}
</script>

<template>
  <UPageSection
    :ui="{
      container: 'px-0 pt-0!'
    }"
  >
    <UCarousel
      v-slot="{ item, index }"
      :items="page.testimonials"
      :autoplay="{ delay: 4000 }"
      loop
      dots
      :ui="{
        container: 'items-center',
        viewport: '-mx-4 sm:-mx-12 lg:-mx-16 bg-elevated/50 max-w-(--ui-container)'
      }"
      @select="expandedIndex = null"
    >
      <UPageCTA
        variant="naked"
        class="rounded-none"
        :ui="{
          container: 'sm:py-12 lg:py-12 sm:gap-8',
          description: 'text-base! text-balance'
        }"
      >
        <template #description>
          <span
            class="whitespace-pre-line before:content-[open-quote] before:text-5xl lg:before:text-7xl before:inline-block before:text-dimmed before:absolute before:-ml-6 lg:before:-ml-10 before:-mt-2 lg:before:-mt-4 after:content-[close-quote] after:text-5xl lg:after:text-7xl after:inline-block after:text-dimmed after:absolute after:mt-1 lg:after:mt-0 after:ml-1 lg:after:ml-2"
            :class="isLong(item.quote) && expandedIndex !== index ? 'line-clamp-4 after:hidden' : 'block'"
          >{{ item.quote }}</span>
          <UButton
            v-if="isLong(item.quote)"
            :label="expandedIndex === index ? t('general.seeLess') : t('general.seeMore')"
            :trailing-icon="expandedIndex === index ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
            variant="link"
            color="neutral"
            size="sm"
            class="mt-2 p-0"
            @click="expandedIndex = expandedIndex === index ? null : index"
          />
        </template>
        <UUser
          v-bind="item.author"
          size="xl"
          class="justify-center"
        />
      </UPageCTA>
    </UCarousel>
  </UPageSection>
</template>
