<script setup lang="ts">
const navLinks = useLinks()
</script>

<template>
  <div>
    <UContainer class="sm:border-x border-default pt-10 bg-default">
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
  <Background />
</template>
