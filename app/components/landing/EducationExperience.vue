<script setup lang="ts">
import type { IndexEnCollectionItem, IndexEsCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexEnCollectionItem | IndexEsCollectionItem
}>()
</script>

<template>
  <BaseTimeline
    :title="page.education.title"
    :items="page.education.items"
  />
</template>
