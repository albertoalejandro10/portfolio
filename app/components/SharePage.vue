<script setup lang="ts">
const props = defineProps<{
  type?: 'article' | 'project'
}>()

const { t } = useI18n()

const pageLink = computed(() => `${window?.location}`)
const shareText = computed(() => {
  return props.type === 'article'
    ? t('general.articleLinkCopied')
    : t('general.projectLinkCopied')
})
</script>

<template>
  <div class="flex items-center justify-end gap-2 text-sm text-muted mt-8">
    <UButton
      size="sm"
      variant="link"
      color="neutral"
      :label="t('general.copyLink')"
      @click="copyToClipboard(pageLink, shareText)"
    />
  </div>
</template>
