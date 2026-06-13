<script setup lang="ts">
defineProps<{
  href: string
  external?: boolean
  variant?: 'primary' | 'ghost'
}>()
</script>

<template>
  <a
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :class="variant === 'ghost' ? 'btn-ghost' : 'btn-primary'"
  >
    <slot />
  </a>
</template>
