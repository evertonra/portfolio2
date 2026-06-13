<script setup lang="ts">
  import { profile, socialLinks } from "~/data/site";
</script>

<template>
  <section id="contact" class="py-24 sm:py-32 bg-elevated">
    <div class="section-container">
      <div
        class="relative overflow-hidden rounded-3xl border border-subtle p-8 sm:p-12 lg:p-16 text-center"
        data-reveal>
        <div
          class="absolute inset-0 hero-bg pointer-events-none"
          aria-hidden="true" />
        <div
          class="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-linear-to-r from-transparent via-indigo-500/50 to-transparent"
          aria-hidden="true" />

        <div class="relative z-10 max-w-2xl mx-auto">
          <span class="section-tag mb-6">Contato</span>
          <h2
            class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Pronto para tirar sua ideia do papel?
          </h2>
          <p class="text-muted text-lg leading-relaxed mb-10">
            Entre em contato e vamos construir algo incrível. Disponível para
            projetos full-time, part-time ou freelas — com foco em performance,
            responsividade e excelente experiência de usuário.
          </p>

          <div class="flex flex-wrap justify-center gap-4 mb-10">
            <UiAppButton href="https://wa.me/5554991732802" external>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Vamos conversar
            </UiAppButton>
            <UiAppButton
              :href="`mailto:${profile.email}`"
              external
              variant="ghost">
              Enviar e-mail
            </UiAppButton>
          </div>

          <div class="flex flex-wrap justify-center gap-6 text-sm text-muted">
            <a
              v-for="link in socialLinks"
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-indigo-400 transition-colors">
              {{ link.label }}
            </a>
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
