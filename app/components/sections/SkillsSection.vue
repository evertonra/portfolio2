<script setup lang="ts">
import { skillGroups } from '~/data/site'

const marqueeSkills = skillGroups.flatMap((g) => g.items)
</script>

<template>
  <section id="skills" class="py-24 sm:py-32">
    <div class="section-container">
      <UiSectionHeading
        tag="Stack"
        title="Competências Técnicas"
        description="Domínio em frameworks modernos, testes automatizados com Vitest e Playwright, e boas práticas de engenharia front-end."
        align="center"
      />

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-16">
        <article
          v-for="(group, index) in skillGroups"
          :key="group.title"
          class="glass-card p-6 hover:border-indigo-400/30 transition-colors"
          data-reveal
          :style="{ transitionDelay: `${index * 80}ms` }"
        >
          <h3 class="font-display font-bold text-indigo-400 mb-4 text-sm uppercase tracking-wider">
            {{ group.title }}
          </h3>
          <ul class="space-y-2">
            <li
              v-for="item in group.items"
              :key="item"
              class="flex items-center gap-2 text-sm text-muted"
            >
              <span class="h-1 w-1 rounded-full bg-emerald-400" />
              {{ item }}
            </li>
          </ul>
        </article>
      </div>

      <div
        class="relative overflow-hidden rounded-2xl border border-subtle py-4"
        data-reveal
      >
        <div class="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
        <div class="absolute inset-y-0 right-0 w-16 bg-linear-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />
        <div class="flex animate-marquee whitespace-nowrap">
          <div class="flex gap-4 px-4">
            <span
              v-for="(skill, i) in [...marqueeSkills, ...marqueeSkills]"
              :key="`${skill}-${i}`"
              class="inline-flex items-center rounded-full border border-subtle bg-elevated px-4 py-2 text-sm font-medium text-muted"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
