<template>
  <div class="relative max-w-sm mx-auto rounded-sm" :class="cardClasses">
    <div class="animate-pulse pb-10">
      <div
        class="absolute top-0 left-0 right-0 h-20 w-full z-0"
        :class="currentTheme.skeletons.second"
      />
      <div
        class="relative flex flex-col justify-center items-center w-full pt-12"
      >
        <div
          class="w-16 h-16 rounded-full mb-6"
          :class="currentTheme.skeletons.main"
        />
        <div
          class="rounded-sm w-1/2 h-6 mb-4"
          :class="currentTheme.skeletons.main"
        />
        <div
          class="rounded-sm w-2/5 h-6"
          :class="currentTheme.skeletons.main"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'SkeletonProfileCard ',

  setup() {
    const { currentTheme, currentMode, isLight } = useTheme()

    const cardClasses = computed(() => {
      const border = isLight.value ? 'border' : ``

      return [currentTheme.value.bg.card, border]
    })

    return {
      currentMode,
      currentTheme,
      cardClasses,
    }
  },
})
</script>
