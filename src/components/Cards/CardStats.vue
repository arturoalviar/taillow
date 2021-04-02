<template>
  <div
    class="relative max-w-xs mx-auto p-8 mb-6 rounded-xl"
    :class="cardClasses"
  >
    <div class="flex flex-row justify-between items-center">
      <YoutubeIcon class="w-8 h-8" />
      <div
        class="bg-green-100 text-green-800 font-bold px-2 py-1 leading-none text-xs rounded-md"
      >
        Free
      </div>
    </div>
    <div class="mt-14 mb-10">
      <p class="leading-loose">Videos</p>
      <h3 class="font-bold leading-none text-3xl">YouTube</h3>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div>
        <p class="text-sm mb-2" :class="currentTheme.text.subText">Rating</p>
        <p class="font-semibold">5.0</p>
      </div>
      <div>
        <p class="text-sm mb-2" :class="currentTheme.text.subText">Size</p>
        <p class="font-semibold">54.8mb</p>
      </div>
      <div>
        <p class="text-sm mb-2" :class="currentTheme.text.subText">Downloads</p>
        <p class="font-semibold">10m</p>
      </div>
    </div>
    <AppButton
      class="mt-6 p-3 rounded-full focus:outline-none"
      aria-label="Download"
      :buttonStyles="currentTheme.buttons.primary"
    >
      <DownArrowIcon class="w-4 h-4" />
    </AppButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import DownArrowIcon from '@/assets/icons/arrow-alt-down.svg?inline'
import YoutubeIcon from '@/assets/icons/youtube.svg?inline'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'CardStats',
  components: {
    DownArrowIcon,
    YoutubeIcon,
  },
  setup() {
    const { currentTheme, currentMode, isLight } = useTheme()

    const cardClasses = computed(() => {
      const border = isLight.value ? 'border' : ''
      const bg = isLight.value
        ? currentTheme.value.bg.main
        : currentTheme.value.bg.card

      return [bg, border]
    })

    return {
      cardClasses,
      currentMode,
      currentTheme,
    }
  },
})
</script>
