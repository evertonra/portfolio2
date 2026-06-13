<script setup lang="ts">
import { profile, socialLinks } from '~/data/site'

const techStack = ['Vue.js', 'Nuxt.js', 'React', 'TypeScript', 'Vitest', 'Playwright']
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden hero-bg"
  >
    <div class="absolute inset-0 grid-pattern opacity-40 pointer-events-none" aria-hidden="true" />
    <div
      class="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl animate-pulse-glow pointer-events-none"
      aria-hidden="true"
    />
    <div
      class="absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl animate-pulse-glow pointer-events-none"
      aria-hidden="true"
    />

    <div class="section-container relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div
            class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400 mb-6"
            data-reveal
          >
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {{ profile.availability }}
          </div>

          <h1
            class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            data-reveal
          >
            Olá, sou
            <span class="text-gradient block mt-1">{{ profile.shortName }}</span>
          </h1>

          <p
            class="text-lg sm:text-xl text-muted leading-relaxed max-w-xl mb-4"
            data-reveal
          >
            {{ profile.role }} especializado em
            <strong class="text-indigo-400 font-medium">{{ profile.headline }}</strong>
          </p>

          <p
            class="text-muted leading-relaxed max-w-xl mb-8"
            data-reveal
          >
            {{ profile.intro }}
          </p>

          <div
            class="flex flex-wrap gap-3 mb-10"
            data-reveal
          >
            <UiAppButton href="#projects">
              Ver projetos
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </UiAppButton>
            <UiAppButton
              href="https://wa.me/5554991732802"
              external
              variant="ghost"
            >
              Vamos conversar
            </UiAppButton>
          </div>

          <div
            class="flex flex-wrap gap-2"
            data-reveal
          >
            <span
              v-for="tech in techStack"
              :key="tech"
              class="rounded-lg border border-subtle bg-elevated px-3 py-1.5 text-xs font-medium text-muted"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div
          class="relative flex justify-center lg:justify-end"
          data-reveal="scale"
        >
          <div class="relative">
            <div
              class="absolute -inset-4 rounded-3xl bg-linear-to-br from-indigo-500/30 via-violet-500/20 to-emerald-500/20 blur-2xl animate-float"
              aria-hidden="true"
            />
            <div class="relative glass-card p-8 max-w-sm w-full">
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-violet-600 text-2xl font-bold text-white font-display"
                >
                  EA
                </div>
                <div>
                  <p class="font-display font-bold text-xl">{{ profile.shortName }}</p>
                  <p class="text-sm text-muted">{{ profile.role }}</p>
                </div>
              </div>

              <div class="space-y-3 text-sm">
                <div class="flex items-center gap-3 text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z" />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>
                  {{ profile.location }}
                </div>
                <div class="flex items-center gap-3 text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" d="M4 4h16v16H4z M4 8l8 5 8-5" />
                  </svg>
                  {{ profile.email }}
                </div>
                <div class="flex items-center gap-3 text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  {{ profile.phone }}
                </div>
              </div>

              <div class="mt-6 pt-6 border-t border-subtle flex gap-2">
                <a
                  v-for="link in socialLinks"
                  :key="link.href"
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 rounded-xl border border-subtle py-2 text-center text-xs font-medium text-muted
                    hover:border-indigo-400/40 hover:text-indigo-400 transition-colors"
                >
                  {{ link.label }}
                </a>
              </div>
            </div>
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
