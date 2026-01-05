<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<!-- TODO: Create header for mobile -->
<template>
  <div class="fixed top-2 sm:top-4 left-0 right-0 z-10 flex justify-center">
    <UNavigationMenu
      highlight
      highlight-color="primary"
      :items="links"
      variant="pill"
      color="neutral"
      class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
      :ui="{
        link: 'px-2 py-1',
        linkLeadingIcon: 'hidden'
      }"
    >
      <template #list-leading>
        <UColorModeAvatar
          alt="logo"
          class="bg-transparent"
          light="/logo-dark.svg"
          dark="/logo.svg"
        />
      </template>
      <template #list-trailing>
        <SettingsColorMode />
        <SettingsLanguageToggle />
      </template>
    </UNavigationMenu>
  </div>
</template>
