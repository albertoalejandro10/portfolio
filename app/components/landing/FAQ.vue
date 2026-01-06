<script setup lang="ts">
import type { IndexEnCollectionItem, IndexEsCollectionItem } from '@nuxt/content'

const props = defineProps<{
  page: IndexEnCollectionItem | IndexEsCollectionItem
}>()

const items = computed(() => {
  return props.page.faq?.categories.map((faq) => {
    return {
      label: faq.title,
      key: faq.title.toLowerCase(),
      questions: faq.questions
    }
  })
})

const ui = {
  root: 'flex items-center gap-2 sm:gap-4 w-full',
  list: 'relative flex bg-transparent dark:bg-transparent gap-1 sm:gap-2 px-0 overflow-x-auto sm:overflow-x-visible scrollbar-hide snap-x snap-mandatory',
  indicator: 'absolute top-[4px] duration-200 ease-out focus:outline-none rounded-lg bg-elevated/60',
  trigger: 'px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm md:text-base rounded-lg hover:bg-muted/50 data-[state=active]:text-highlighted data-[state=inactive]:text-muted whitespace-nowrap snap-start shrink-0',
  label: 'truncate'
}
</script>

<template>
  <UPageSection
    :title="page.faq.title"
    :description="page.faq.description"
    :ui="{
      container: 'px-0 pt-0! gap-3 sm:gap-4',
      title: 'text-left text-base sm:text-lg md:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-2 text-xs sm:text-sm md:text-base text-muted'
    }"
  >
    <UTabs
      :items
      orientation="horizontal"
      :ui
    >
      <template #content="{ item }">
        <UAccordion
          trailing-icon="i-lucide-plus"
          :items="item.questions"
          :ui="{
            item: 'border-none',
            trigger: 'mb-1.5 sm:mb-2 border-0 group px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 transform-gpu rounded-lg bg-elevated/60 will-change-transform hover:bg-muted/50 text-xs sm:text-sm md:text-base',
            trailingIcon: 'group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135 size-4 sm:size-5'
          }"
        >
          <template #body="{ item: _item }">
            <MDC
              :value="_item.content"
              unwrap="p"
              class="px-3 sm:px-4 text-xs sm:text-sm md:text-base leading-relaxed"
            />
          </template>
        </UAccordion>
      </template>
    </UTabs>
  </UPageSection>
</template>
