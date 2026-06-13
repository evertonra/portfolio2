<script setup lang="ts">
import type { Project } from '~/data/site'

const props = defineProps<{
  items: Project[]
  initialIndex: number
}>()

const emit = defineEmits<{ close: [] }>()

const ZOOM_MIN = 50
const ZOOM_MAX = 200
const ZOOM_STEP = 25

const currentIndex = ref(props.initialIndex)
const isLoading = ref(true)
const zoom = ref(100)
const showScrollHint = ref(false)

const scrollContainer = ref<HTMLElement | null>(null)

const currentItem = computed(() => props.items[currentIndex.value])

function close() {
  emit('close')
}

function resetView() {
  zoom.value = 100
  nextTick(() => {
    scrollContainer.value?.scrollTo({ top: 0, left: 0 })
    updateScrollHint()
  })
}

function goPrev() {
  currentIndex.value = (currentIndex.value - 1 + props.items.length) % props.items.length
  isLoading.value = true
  resetView()
}

function goNext() {
  currentIndex.value = (currentIndex.value + 1) % props.items.length
  isLoading.value = true
  resetView()
}

function zoomIn() {
  zoom.value = Math.min(zoom.value + ZOOM_STEP, ZOOM_MAX)
}

function zoomOut() {
  zoom.value = Math.max(zoom.value - ZOOM_STEP, ZOOM_MIN)
}

function fitWidth() {
  zoom.value = 100
}

function updateScrollHint() {
  const el = scrollContainer.value
  if (!el) return
  showScrollHint.value = el.scrollHeight > el.clientHeight + 24 && el.scrollTop < 40
}

function onScroll() {
  if (scrollContainer.value && scrollContainer.value.scrollTop > 40) {
    showScrollHint.value = false
  }
}

function onImageLoad() {
  isLoading.value = false
  nextTick(updateScrollHint)
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
  if (event.key === 'ArrowLeft') goPrev()
  if (event.key === 'ArrowRight') goNext()
  if (event.key === '+' || event.key === '=') zoomIn()
  if (event.key === '-') zoomOut()
  if (event.key === '0') fitWidth()
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})

watch(
  () => props.initialIndex,
  (index) => {
    currentIndex.value = index
    isLoading.value = true
    resetView()
  },
)

watch(zoom, () => nextTick(updateScrollHint))
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-[100] flex flex-col"
      role="dialog"
      aria-modal="true"
      :aria-label="`Visualização: ${currentItem.title}`"
    >
      <button
        type="button"
        class="absolute inset-0 bg-black/90 backdrop-blur-sm"
        aria-label="Fechar visualização"
        @click="close"
      />

      <div class="relative z-10 flex flex-col h-full pointer-events-none">
        <!-- Header -->
        <header class="pointer-events-auto shrink-0 flex items-center justify-between gap-4 px-4 sm:px-6 py-4 text-white">
          <div class="min-w-0">
            <p class="text-sm text-white/60 truncate">{{ currentItem.category }}</p>
            <h3 class="font-semibold truncate">{{ currentItem.title }}</h3>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <span class="hidden sm:inline text-sm text-white/50 tabular-nums">
              {{ currentIndex + 1 }} / {{ items.length }}
            </span>
            <button
              type="button"
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Fechar"
              @click="close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </header>

        <!-- Scrollable image area -->
        <div class="relative flex-1 min-h-0 px-4 sm:px-16 pointer-events-auto">
          <button
            v-if="items.length > 1"
            type="button"
            class="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
            aria-label="Projeto anterior"
            @click.stop="goPrev"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          <div
            ref="scrollContainer"
            class="lightbox-scroll h-full overflow-auto rounded-2xl bg-neutral-950/80 border border-white/10 shadow-2xl"
            @scroll="onScroll"
          >
            <div class="flex justify-center p-3 sm:p-6 min-w-min">
              <div
                v-if="isLoading"
                class="flex items-center justify-center min-h-[40vh] w-full"
              >
                <div class="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-indigo-400" />
              </div>
              <img
                :key="currentItem.fullImage"
                :src="currentItem.fullImage"
                :alt="currentItem.title"
                class="block h-auto shadow-xl transition-opacity duration-300"
                :class="isLoading ? 'opacity-0 absolute' : 'opacity-100'"
                :style="{ width: `${zoom}%` }"
                draggable="false"
                @load="onImageLoad"
              />
            </div>
          </div>

          <button
            v-if="items.length > 1"
            type="button"
            class="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
            aria-label="Próximo projeto"
            @click.stop="goNext"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <!-- Scroll hint -->
          <Transition
            enter-active-class="transition duration-300"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-if="showScrollHint && !isLoading"
              class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-xs text-white/80 backdrop-blur-sm pointer-events-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
              Role para ver a página completa
            </div>
          </Transition>
        </div>

        <!-- Zoom toolbar -->
        <div class="pointer-events-auto shrink-0 flex justify-center px-4 py-4">
          <div
            class="flex items-center gap-1 rounded-2xl bg-neutral-900/95 border border-white/10 px-2 py-2 shadow-xl backdrop-blur-md"
            role="toolbar"
            aria-label="Controles de zoom"
          >
            <button
              type="button"
              class="flex h-10 w-10 items-center justify-center rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Diminuir zoom"
              :disabled="zoom <= ZOOM_MIN"
              @click="zoomOut"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="7" />
                <path stroke-linecap="round" d="M21 21l-4.35-4.35M8 11h6" />
              </svg>
            </button>

            <button
              type="button"
              class="flex h-10 min-w-14 items-center justify-center rounded-xl text-xs font-semibold tabular-nums text-white/80 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Restaurar zoom"
              @click="fitWidth"
            >
              {{ zoom }}%
            </button>

            <button
              type="button"
              class="flex h-10 w-10 items-center justify-center rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Aumentar zoom"
              :disabled="zoom >= ZOOM_MAX"
              @click="zoomIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="7" />
                <path stroke-linecap="round" d="M21 21l-4.35-4.35M8 11h6M11 8v6" />
              </svg>
            </button>

            <span class="mx-1 h-6 w-px bg-white/10" aria-hidden="true" />

            <button
              type="button"
              class="flex h-10 w-10 items-center justify-center rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Ajustar à largura"
              title="Ajustar à largura"
              @click="fitWidth"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" d="M4 8V4m0 0h4M4 4l5 5M20 8V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5M20 16v4m0 0h-4m4 0l-5-5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.lightbox-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgb(99 102 241 / 0.5) transparent;
}

.lightbox-scroll::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.lightbox-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.lightbox-scroll::-webkit-scrollbar-thumb {
  background: rgb(99 102 241 / 0.45);
  border-radius: 9999px;
}

.lightbox-scroll::-webkit-scrollbar-thumb:hover {
  background: rgb(99 102 241 / 0.65);
}
</style>
