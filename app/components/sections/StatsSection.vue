<script setup lang="ts">
import { stats } from '~/data/site'
</script>

<template>
  <section class="py-16 border-y border-subtle">
    <div class="section-container">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <article
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="text-center p-6 rounded-2xl border border-subtle bg-elevated hover:border-indigo-400/30 transition-colors"
          data-reveal
          :style="{ transitionDelay: `${index * 80}ms` }"
        >
          <p class="font-display text-3xl sm:text-4xl font-bold text-gradient mb-2">
            {{ stat.value }}
          </p>
          <p class="font-semibold text-sm mb-1">{{ stat.label }}</p>
          <p class="text-xs text-muted">{{ stat.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
