<script setup lang="ts">
import type { IndexEnCollectionItem, IndexEsCollectionItem } from '@nuxt/content'

const { footer, global } = useAppConfig()
const colorMode = useColorMode()

const color = computed(() => (colorMode.value === 'dark' ? 'dark' : 'light'))

defineProps<{
  page: IndexEnCollectionItem | IndexEsCollectionItem
}>()
</script>

<template>
  <UPageHero
    :ui="{
      headline: 'flex items-center justify-center',
      title: 'text-shadow-md max-w-lg mx-auto',
      links: 'mt-4 flex-col justify-center items-center',
      body: 'mt-4 max-w-xl mx-auto',
      footer: 'mt-4'
    }"
  >
    <template #headline>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1
        }"
      >
        <UColorModeAvatar
          class="size-18 ring ring-default ring-offset-3 ring-offset-bg"
          :light="global.picture?.light!"
          :dark="global.picture?.dark!"
          :alt="global.picture?.alt!"
        />
      </Motion>
    </template>

    <template #title>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1
        }"
      >
        {{ page.title }}
      </Motion>
    </template>

    <template #description>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.3
        }"
      >
        {{ page.role }}
      </Motion>
    </template>

    <template #body>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.3
        }"
      >
        {{ page.description }}
      </Motion>
    </template>

    <template #links>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.5
        }"
      >
        <div
          v-if="page.hero.links"
          class="flex items-center gap-2"
        >
          <UButton label="Quick Chat" icon="i-mdi-chat" :to="global.quickChatLink" variant="soft" color="neutral" />
          <UButton v-bind="page.hero.links[0]" />
          <UButton
            :color="global.available ? 'success' : 'error'"
            variant="ghost"
            class="gap-2"
            :to="global.available ? global.meetingLink : ''"
            :label="global.available ? 'Available for new projects' : 'Not available at the moment'"
          >
            <template #leading>
              <span class="relative flex size-2">
                <span
                  class="absolute inline-flex size-full rounded-full opacity-75"
                  :class="global.available ? 'bg-success animate-ping' : 'bg-error'"
                />
                <span
                  class="relative inline-flex size-2 scale-90 rounded-full"
                  :class="global.available ? 'bg-success' : 'bg-error'"
                />
              </span>
            </template>
          </UButton>
        </div>
      </Motion>

      <div class="gap-x-4 inline-flex mt-4">
        <Motion
          v-for="(link, index) of footer?.links"
          :key="index"

          :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)'
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
          }"
          :transition="{
            duration: 0.6,
            delay: 0.5 + index * 0.1
          }"
        >
          <UButton
            v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }"
          />
        </Motion>
      </div>
    </template>

    <UMarquee
      pause-on-hover
      :overlay="false"
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
      :repeat="2"
    >
      <UIcon name="i-material-icon-theme:javascript" class="size-10 shrink-0" />
      <UIcon name="i-material-icon-theme:typescript" class="size-10 shrink-0" />
      <UIcon name="i-simple-icons-tailwindcss" class="size-10 shrink-0" />
      <UIcon name="i-material-icon-theme:pnpm" class="size-10 shrink-0" />
      <UIcon name="i-material-icon-theme:yarn" class="size-10 shrink-0" />
      <UIcon name="i-simple-icons-bootstrap" class="size-10 shrink-0" />
      <UIcon name="i-material-icon-theme:nodejs" class="size-10 shrink-0" />
      <UIcon name="i-material-icon-theme:git" class="size-10 shrink-0" />
      <UIcon name="i-material-icon-theme:vscode" class="size-10 shrink-0" />
      <UIcon name="i-material-icon-theme:vue" class="size-10 shrink-0" />
      <UIcon name="i-material-icon-theme:nuxt" class="size-10 shrink-0" />
      <UIcon name="i-material-icon-theme:go" class="size-10 shrink-0" />
      <UIcon name="i-simple-icons-linux" class="size-10 shrink-0" />
      <UIcon name="i-material-icon-theme:applescript" class="size-10 shrink-0" />
      <UIcon name="i-material-icon-theme:php" class="size-10 shrink-0" />
      <UIcon name="i-simple-icons-mongodb" class="size-10 shrink-0" />
      <UIcon name="i-simple-icons-postgresql" class="size-10 shrink-0" />
      <UIcon name="i-material-icon-theme:docker" class="size-10 shrink-0" />
      <UIcon :name="`i-material-icon-theme:copilot` + (color === 'light' ? '-light' : '')" class="size-10 shrink-0" />
      <UIcon name="i-material-icon-theme:vite" class="size-10 shrink-0" />
      <UIcon name="i-material-icon-theme:vitest" class="size-10 shrink-0" />
      <UIcon name="i-simple-icons-jquery" class="size-10 shrink-0" />
      <UIcon name="i-simple-icons-postman" class="size-10 shrink-0" />
      <UIcon name="i-mdi-github" class="size-10 shrink-0" />
      <UIcon name="i-simple-icons-flutter" class="size-10 shrink-0" />
      <UIcon name="i-material-icon-theme:dart" class="size-10 shrink-0" />
    </UMarquee>
  </UPageHero>
</template>
