<script setup>
const story = await useAsyncStoryblok("about", {
  version: "draft",
})
useHead({
  title: story.value.name,
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
