<script setup lang="ts">
const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    class="relative flex h-10 w-10 items-center justify-center rounded-xl border border-subtle bg-elevated
      text-muted hover:text-indigo-400 hover:border-indigo-400/40 transition-all duration-200
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
    :aria-label="theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'"
    @click="toggleTheme"
  >
    <Transition
      mode="out-in"
      enter-active-class="transition duration-200"
      enter-from-class="opacity-0 rotate-90 scale-75"
      enter-to-class="opacity-100 rotate-0 scale-100"
      leave-active-class="transition duration-150"
      leave-from-class="opacity-100 rotate-0 scale-100"
      leave-to-class="opacity-0 -rotate-90 scale-75"
    >
      <svg
        v-if="theme === 'dark'"
        key="sun"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      <svg
        v-else
        key="moon"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </Transition>
  </button>
</template>
