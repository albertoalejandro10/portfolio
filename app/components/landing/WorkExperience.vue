<script setup lang="ts">
import type { IndexEnCollectionItem, IndexEsCollectionItem } from '@nuxt/content'

const colorMode = useColorMode()

defineProps<{
  page: IndexEnCollectionItem | IndexEsCollectionItem
}>()

// Function to detect if a color is light/white
const isLightColor = (color: string): boolean => {
  const lightColors = ['#FFFFFF', '#ffffff', 'white', '#FFF', '#fff']
  return lightColors.includes(color.toLowerCase())
}

// Computed property to get the appropriate text color
const getTextColor = (companyColor: string) => {
  // If company color is white/light and we're in light mode, use dark text
  if (isLightColor(companyColor) && colorMode.value === 'light') {
    return '#000000'
  }

  // If company color is white/light and we're in dark mode, keep it white
  if (isLightColor(companyColor) && colorMode.value === 'dark') {
    return '#FFFFFF'
  }

  // Otherwise use the company color
  return companyColor
}
</script>

<template>
  <UPageSection
    :title="page.experience.title"
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-2">
        <Motion
          v-for="(experience, index) in page.experience.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="text-muted flex items-center text-nowrap gap-2"
        >
          <p class="text-sm">
            {{ experience.date }}
          </p>
          <USeparator />
          <ULink
            class="flex items-center gap-1"
            :to="experience.company.url"
            target="_blank"
          >
            <span class="text-sm">
              {{ experience.position }}
            </span>
            <div
              class="inline-flex items-center gap-1"
              :style="{ color: getTextColor(experience.company.color) }"
            >
              <span class="font-medium">{{ experience.company.name }}</span>
              <NuxtImg
                :src="experience.company.logo"
                width="16"
                height="16"
                alt="Company Logo"
                class="rounded-full"
              />
            </div>
          </ULink>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>
