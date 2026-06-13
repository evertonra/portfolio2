<script setup lang="ts">
import { profile } from '~/data/site'

useHead({
  title: `${profile.shortName} — ${profile.role}`,
  meta: [
    {
      name: 'description',
      content: profile.bio,
    },
    {
      property: 'og:title',
      content: `${profile.shortName} — Portfolio`,
    },
    {
      property: 'og:description',
      content: profile.intro,
    },
    {
      name: 'theme-color',
      content: '#030712',
    },
  ],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: '',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap',
    },
  ],
})

const { initTheme } = useTheme()
useScrollReveal()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <div class="bg-surface min-h-screen">
    <LayoutAppNavbar />
    <main>
      <SectionsHeroSection />
      <SectionsStatsSection />
      <SectionsAboutSection />
      <SectionsExperienceSection />
      <SectionsProjectsSection />
      <SectionsSkillsSection />
      <SectionsContactSection />
    </main>
    <LayoutAppFooter />
  </div>
</template>
