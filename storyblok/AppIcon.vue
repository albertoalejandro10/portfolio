<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})
</script>

<template>
  <div v-editable="blok">
    <a
      :href="blok.link.cached_url"
      :title="blok.link.title"
      :target="blok.link.target"
    >
      <NuxtPicture
        provider="storyblok"
        :src="blok.image.filename"
        :alt="blok.image.alt"
        width="24"
        height="24"
      />
    </a>
  </div>
</template>
