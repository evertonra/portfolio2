<script setup lang="ts">
  import { navLinks } from "~/data/site";

  const isOpen = ref(false);
  const isScrolled = ref(false);

  function closeMenu() {
    isOpen.value = false;
  }

  let onScroll: (() => void) | null = null;

  onMounted(() => {
    onScroll = () => {
      isScrolled.value = window.scrollY > 20;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  });

  onUnmounted(() => {
    if (onScroll) window.removeEventListener("scroll", onScroll);
  });
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'py-3' : 'py-5'">
    <div class="section-container">
      <nav
        class="flex items-center justify-between rounded-2xl border border-subtle px-4 py-3 sm:px-6 transition-all duration-300"
        :class="
          isScrolled ? 'glass-card shadow-lg shadow-black/5' : 'bg-transparent'
        "
        aria-label="Navegação principal">
        <a
          href="#hero"
          class="font-display text-lg font-bold tracking-tight hover:text-indigo-400 transition-colors">
          EA<span class="text-indigo-400">.</span>
        </a>

        <ul class="hidden md:flex items-center gap-1">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="px-3 py-2 text-sm text-muted hover:text-indigo-400 transition-colors rounded-lg">
              {{ link.label }}
            </a>
          </li>
        </ul>

        <div class="flex items-center gap-2">
          <LayoutThemeToggle />
          <UiAppButton
            href="https://wa.me/5554991732802"
            external
            class="hidden sm:inline-flex">
            Contato
          </UiAppButton>
          <button
            type="button"
            class="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-subtle text-muted"
            :aria-expanded="isOpen"
            aria-label="Abrir menu"
            @click="isOpen = !isOpen">
            <svg
              v-if="!isOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </nav>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2">
        <div v-if="isOpen" class="md:hidden mt-2 glass-card p-4">
          <ul class="flex flex-col gap-1">
            <li v-for="link in navLinks" :key="link.href">
              <a
                :href="link.href"
                class="block px-3 py-2.5 text-sm rounded-lg hover:bg-indigo-500/10 hover:text-indigo-400 transition-colors"
                @click="closeMenu">
                {{ link.label }}
              </a>
            </li>
            <li class="pt-2 sm:hidden">
              <UiAppButton
                href="https://wa.me/5554991732802"
                external
                class="w-full"
                @click="closeMenu">
                Contato
              </UiAppButton>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
  .font-display {
    font-family: var(--font-display);
  }
</style>
