<script setup lang="ts">
const spotlightRef = ref<HTMLElement | null>(null)

const mouseX = ref(0)
const mouseY = ref(0)

const isVisible = ref(false)

const spotlightStyle = computed(() => ({
  left: mouseX.value - 100 + 'px',
  top: mouseY.value - 100 + 'px',
  opacity: isVisible.value ? 1 : 0
}))

const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
  isVisible.value = true
}

const handleMouseLeave = () => {
  isVisible.value = false
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseleave', handleMouseLeave)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseleave', handleMouseLeave)
})
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#22c55e_100%)] dark:hidden opacity-40"
    />
    <div
      class="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#22c55e_100%)] hidden dark:block opacity-10 will-change-auto"
    />
    <!-- Spotlight effect -->
    <div
      ref="spotlightRef"
      class="pointer-events-none fixed -z-10 transition-opacity duration-300"
      :style="spotlightStyle"
    >
      <div
        class="h-50 w-50 rounded-full bg-green-500/40 dark:bg-green-500/20 blur-[100px]"
      />
    </div>
  </Teleport>
</template>
