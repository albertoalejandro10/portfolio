<script setup lang="ts">
const { footer } = useAppConfig()
const { t } = useI18n()

const upworkLink = computed(() =>
  footer?.links?.find(link => link.icon === 'i-simple-icons-upwork')?.to
)
</script>

<template>
  <NuxtLink
    :to="upworkLink"
    target="_blank"
    :aria-label="`${t('hero.topRatedPlus')} · ${t('hero.jobSuccess')}`"
    class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
  >
    <UPopover
      mode="hover"
      :open-delay="0"
      :ui="{ content: 'max-w-64 p-3 text-sm text-pretty text-muted' }"
    >
      <span class="inline-flex items-center gap-1.5 text-sm text-muted">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          aria-hidden="true"
          viewBox="0 0 28 28"
          class="size-5 shrink-0"
        >
          <path
            fill="#F66DBC"
            d="M12 1.155a4 4 0 014 0l8.124 4.69a4 4 0 012 3.464v9.382a4 4 0 01-2 3.464L16 26.845a4 4 0 01-4 0l-8.124-4.69a4 4 0 01-2-3.464V9.309a4 4 0 012-3.464L12 1.155z"
          />
          <path
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1.5"
            d="M17.94 18.396c.2.73-.597 1.262-1.195.863l-2.723-1.793-2.724 1.793c-.598.399-1.395-.199-1.196-.863l.731-3.122-2.524-2.06c-.598-.465-.266-1.395.465-1.46l3.255-.2 1.196-3.056c.265-.664 1.262-.664 1.527 0l1.196 3.056m1.662.199v4.65M20 14.078h-4.65"
          />
        </svg>
        {{ t('hero.topRatedPlus') }}
      </span>

      <template #content>
        {{ t('hero.topRatedPlusTooltip') }}
      </template>
    </UPopover>

    <UPopover
      mode="hover"
      :open-delay="0"
      :ui="{ content: 'max-w-64 p-3 text-sm text-pretty text-muted' }"
    >
      <span class="inline-flex items-center gap-1.5 text-sm text-muted">
        <span class="relative inline-flex size-5 shrink-0 items-center justify-center">
          <svg
            aria-hidden="true"
            viewBox="0 0 40 40"
            class="absolute inset-0 size-full -rotate-90"
          >
            <circle
              cx="20"
              cy="20"
              r="19"
              fill="none"
              stroke-width="2"
              class="stroke-accented"
            />
            <circle
              cx="20"
              cy="20"
              r="19"
              fill="none"
              stroke="#F66DBC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="119.38 119.38"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            viewBox="0 0 24 24"
            class="size-3 text-highlighted"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M18.37 19.002H5.63v-1.867h12.74v1.867zm.02-3.736H5.608L3 8.314l4.992 1.664L12 5l4.008 4.978L21 8.314l-2.61 6.952z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        {{ t('hero.jobSuccess') }}
      </span>

      <template #content>
        {{ t('hero.jobSuccessTooltip') }}
      </template>
    </UPopover>
  </NuxtLink>
</template>
