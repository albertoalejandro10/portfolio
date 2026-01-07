<script setup lang="ts">
const props = defineProps<{
  type?: 'article' | 'project'
}>()

const pageLink = computed(() => `${window?.location}`)
const shareText = computed(() => {
  return props.type === 'article'
    ? 'Article link copied to clipboard'
    : 'Project link copied to clipboard'
})
</script>

<template>
  <div class="flex items-center justify-end gap-2 text-sm text-muted mt-8">
    <UButton
      size="sm"
      variant="link"
      color="neutral"
      label="Copy link"
      @click="copyToClipboard(pageLink, shareText)"
    />
  </div>
</template>
