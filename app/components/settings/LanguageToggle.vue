<script setup lang="ts">
const { locale: current, setLocaleCookie, locales } = useI18n()

const currentLocale = computed(() => {
  return locales.value.find(locale => locale.code === current.value)
})

const otherLocale = computed(() => {
  return locales.value.find(locale => locale.code !== current.value)
})

watch(current, (newLocale) => {
  setLocaleCookie(newLocale)
})

const switchLocalePath = useSwitchLocalePath()

const switchLocale = () => {
  const nextLocale = locales.value.find(locale => locale.code !== current.value)
  if (nextLocale) {
    const switchPath = switchLocalePath(nextLocale.code)

    if (!switchPath) {
      current.value = nextLocale.code
      return
    }
    navigateTo(switchPath)
  }
}
</script>

<template>
  <ClientOnly>
    <UButton
      color="neutral"
      variant="ghost"
      size="xl"
      class="rounded-full p-2"
      :aria-label="`Switch to ${otherLocale?.name}`"
      @click="switchLocale"
    >
      <UIcon
        :name="`i-circle-flags-${currentLocale?.code}`"
      />
    </UButton>
  </ClientOnly>
</template>
