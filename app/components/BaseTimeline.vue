<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

interface ExperienceItem {
  date: string
  title: string
  description: string
  icon: string
  company?: {
    name: string
    url: string
    logo: string
    color: string
  }
  institution?: {
    name: string
    url: string
    logo: string
    color: string
  }
}

interface Props {
  title: string
  items: ExperienceItem[]
}

const props = defineProps<Props>()

const colorMode = useColorMode()

const timelineItems = computed<TimelineItem[]>(() => {
  return props.items.map((exp) => ({
    date: exp.date,
    title: exp.title,
    description: exp.description,
    icon: exp.icon,
    organization: exp.company || exp.institution
  }))
})
</script>

<template>
  <UPageCard
    :title="title"
    variant="ghost"
    spotlight
    spotlight-color="primary"
    :ui="{
      wrapper: 'md:flex-none lg:flex-1',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
    }"
  >
  <Motion
    :initial="{ opacity: 0, y: 20 }"
    :while-in-view="({ opacity: 1, y: 0 } as any)"
    :transition="{ delay: 0.4 }"
    :in-view-options="{ once: true }"
  >
      <UTimeline
        :items="timelineItems"
        size="xs"
        color="primary"
        class="w-full"
      >
        <template #title="{ item }">
          <ULink
            :to="item.organization.url"
            target="_blank"
            class="inline-flex items-center gap-1.5 hover:underline mb-1 text-xs text-wrap"
          >
            <span>{{ item.title }}</span>
            <span class="text-muted">@</span>
            <span :style="{ color: getTextColor(item.organization.color, colorMode.value) }">{{ item.organization.name }}</span>
            <NuxtImg
              :src="item.organization.logo"
              width="16"
              height="16"
              :alt="`${item.organization.name} Logo`"
              class="rounded-full"
            />
          </ULink>
        </template>
      </UTimeline>
    </Motion>
  </UPageCard>
</template>
