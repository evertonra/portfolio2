<script setup lang="ts">
import { projects } from '~/data/site'

const activeFilter = ref('Todos')
const categories = ['Todos', ...new Set(projects.map((p) => p.category))]

const filteredProjects = computed(() =>
  activeFilter.value === 'Todos'
    ? projects
    : projects.filter((p) => p.category === activeFilter.value),
)

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

function openLightbox(index: number) {
  lightboxIndex.value = index
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
}
</script>

<template>
  <section id="projects" class="py-24 sm:py-32 bg-elevated">
    <div class="section-container">
      <UiSectionHeading
        tag="Portfólio"
        title="Trabalhos realizados & Projetos"
        description="Projetos desenvolvidos com WordPress, Vue/Nuxt, React e Next.js — sempre com atenção a performance, acessibilidade e boas práticas."
        align="center"
      />

      <div
        class="flex flex-wrap justify-center gap-2 mb-12"
        data-reveal
      >
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          class="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200"
          :class="activeFilter === category
            ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
            : 'border border-subtle text-muted hover:border-indigo-400/40 hover:text-indigo-400'"
          @click="activeFilter = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <article
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          class="group glass-card overflow-hidden hover:border-indigo-400/30 transition-all duration-300 hover:-translate-y-1"
          data-reveal="scale"
          :style="{ transitionDelay: `${index * 60}ms` }"
        >
          <div
            class="relative h-52 overflow-hidden bg-muted cursor-pointer"
            role="button"
            tabindex="0"
            :aria-label="`Ver imagem completa: ${project.title}`"
            @click="openLightbox(index)"
            @keydown.enter="openLightbox(index)"
            @keydown.space.prevent="openLightbox(index)"
          >
            <img
              :src="project.thumbnail"
              :alt="project.title"
              loading="lazy"
              decoding="async"
              class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80" />

            <button
              type="button"
              class="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-xl
                bg-black/50 text-white backdrop-blur-sm border border-white/20
                opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
                focus-visible:opacity-100 focus-visible:translate-y-0 transition-all duration-200
                hover:bg-indigo-500 hover:border-indigo-400"
              :aria-label="`Ver imagem completa: ${project.title}`"
              @click.stop="openLightbox(index)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" d="M7 7h10v10M7 17L17 7" />
              </svg>
            </button>

            <span class="absolute bottom-3 left-3 text-xs font-medium text-white/90 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1">
              {{ project.category }}
            </span>
          </div>

          <div class="p-5">
            <h3 class="font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded-md bg-indigo-500/10 px-2 py-0.5 text-[11px] font-medium text-indigo-400"
                >
                  {{ tag }}
                </span>
              </div>
              <button
                type="button"
                class="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors shrink-0"
                @click="openLightbox(index)"
              >
                Ampliar
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>

    <UiImageLightbox
      v-if="lightboxOpen"
      :items="filteredProjects"
      :initial-index="lightboxIndex"
      @close="closeLightbox"
    />
  </section>
</template>
