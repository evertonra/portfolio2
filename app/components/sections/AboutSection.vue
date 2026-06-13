<script setup lang="ts">
  import { profile, services, softSkills } from "~/data/site";
</script>

<template>
  <section id="about" class="py-24 sm:py-32 bg-elevated">
    <div class="section-container">
      <UiSectionHeading
        tag="Sobre mim"
        title="Código limpo, interfaces que convertem"
        description="Perfil comunicativo e orientado a entregas — sempre buscando o melhor entendimento das situações para propor soluções eficazes."
        align="center" />

      <div class="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
        <div class="lg:col-span-3 space-y-6" data-reveal>
          <p class="text-muted leading-relaxed text-lg">
            {{ profile.bio }}
          </p>
          <p class="text-muted leading-relaxed">
            Atuo em equipes ágeis (Scrum), valorizando a troca de conhecimento,
            o trabalho em equipe e a melhoria contínua. Sou movido por
            aprendizado constante, inovação e excelência técnica.
          </p>

          <div class="flex flex-wrap gap-2 pt-2">
            <span
              v-for="skill in softSkills"
              :key="skill"
              class="rounded-full border border-subtle px-3 py-1 text-xs text-muted">
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="lg:col-span-2 grid gap-4" data-reveal="left">
          <article
            v-for="service in services"
            :key="service.title"
            class="glass-card p-5 hover:border-indigo-400/30 transition-colors duration-300 group">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mb-3 group-hover:bg-indigo-500/20 transition-colors">
              <svg
                v-if="service.icon === 'rocket'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path
                  stroke-linecap="round"
                  d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
                <path
                  stroke-linecap="round"
                  d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
              <svg
                v-else-if="service.icon === 'building'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path
                  stroke-linecap="round"
                  d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path stroke-linecap="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
              </svg>
            </div>
            <h3 class="font-semibold mb-2">{{ service.title }}</h3>
            <p class="text-sm text-muted leading-relaxed">
              {{ service.description }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
