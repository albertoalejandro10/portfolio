<script setup lang="ts">
import type { IndexEnCollectionItem, IndexEsCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexEnCollectionItem | IndexEsCollectionItem
}>()
</script>

<template>
  <UPageCard
    :title="page.about.title"
    :description="page.about.description"
    variant="ghost"
    spotlight
    spotlight-color="primary"
    :ui="{
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted'
    }"
  />
</template>
