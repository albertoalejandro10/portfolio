<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const { t, locale } = useI18n()
const navLinks = useLinks()

useHead({
  htmlAttrs: {
    lang: locale.value
  }
})

useSeoMeta({
  title: t('error.title'),
  description: t('error.description')
})
</script>

<template>
  <div>
    <AppHeader :links="navLinks" />

    <UMain>
      <UContainer>
        <UPage>
          <UError
            :error="{
              statusCode: error.statusCode,
              statusMessage: t('error.title'),
              message: t('error.description'),
              error: error.error
            }"
            :clear="{
              label: t('error.backHome'),
              color: 'primary',
              variant: 'outline',
              size: 'xl',
              icon: 'i-lucide-arrow-left',
              class: 'rounded-full',
              to: $localePath('/')
            }"
          />
        </UPage>
      </UContainer>
    </UMain>

    <AppFooter />
  </div>
</template>
