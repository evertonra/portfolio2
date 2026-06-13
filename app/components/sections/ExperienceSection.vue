<script setup lang="ts">
import { experiences, education } from '~/data/site'
</script>

<template>
  <section id="experience" class="py-24 sm:py-32">
    <div class="section-container">
      <UiSectionHeading
        tag="Trajetória"
        title="Experiência & Formação"
        description="Mais de 4 anos construindo produtos digitais — de freelas a SaaS corporativo."
      />

      <div class="grid lg:grid-cols-3 gap-10">
        <div class="lg:col-span-2 space-y-6">
          <article
            v-for="(exp, index) in experiences"
            :key="exp.company + exp.period"
            class="glass-card p-6 sm:p-8 relative overflow-hidden group"
            data-reveal
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <div
              class="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-indigo-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />

            <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h3 class="font-display text-xl font-bold">{{ exp.role }}</h3>
                <p class="text-indigo-400 font-medium">{{ exp.company }}</p>
              </div>
              <div class="text-right">
                <span class="inline-block rounded-full border border-subtle px-3 py-1 text-xs text-muted">
                  {{ exp.type }}
                </span>
                <p class="text-sm text-muted mt-2">{{ exp.period }}</p>
              </div>
            </div>

            <ul class="space-y-2">
              <li
                v-for="item in exp.highlights"
                :key="item"
                class="flex gap-3 text-sm text-muted leading-relaxed"
              >
                <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                {{ item }}
              </li>
            </ul>
          </article>
        </div>

        <aside data-reveal="left">
          <div class="glass-card p-6 sm:p-8 sticky top-28">
            <h3 class="font-display text-lg font-bold mb-6 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" d="M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
              </svg>
              Educação
            </h3>
            <div class="space-y-6">
              <div
                v-for="item in education"
                :key="item.degree"
                class="border-l-2 border-indigo-500/40 pl-4"
              >
                <div class="flex flex-wrap items-center gap-2 mb-1">
                  <p class="text-sm text-indigo-400 font-medium">{{ item.period }}</p>
                  <span
                    v-if="item.status"
                    class="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400"
                  >
                    {{ item.status }}
                  </span>
                </div>
                <p class="font-semibold mb-1">{{ item.degree }}</p>
                <p class="text-sm text-muted">{{ item.institution }}</p>
              </div>
            </div>

            <div class="mt-8 pt-8 border-t border-subtle">
              <h4 class="text-sm font-semibold mb-4">Práticas & Qualidade</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="item in ['Scrum', 'Code Review', 'Git Flow', 'Vitest', 'Playwright']"
                  :key="item"
                  class="rounded-lg bg-indigo-500/10 px-2.5 py-1 text-xs text-indigo-400"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
