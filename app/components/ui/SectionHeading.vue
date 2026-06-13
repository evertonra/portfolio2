<script setup lang="ts">
defineProps<{
  tag?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <div
    :class="[
      'mb-12 md:mb-16',
      align === 'center' ? 'text-center' : 'text-left',
    ]"
    data-reveal
  >
    <span v-if="tag" class="section-tag mb-4">{{ tag }}</span>
    <h2 class="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="text-muted text-base sm:text-lg max-w-2xl leading-relaxed"
      :class="align === 'center' ? 'mx-auto' : ''"
    >
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
