<template>
  <div class="max-w-xl mx-auto border" :class="cardClasses">
    <div class="animate-pulse p-6">
      <div class="flex flex-row items-center py-4 w-full">
        <div
          class="w-16 h-16 rounded-full mr-4"
          :class="currentTheme.skeletons.main"
        />
        <div class="flex-1 pr-10">
          <div
            class="rounded-sm w-1/2 h-6 mb-2"
            :class="currentTheme.skeletons.main"
          />
          <div
            class="rounded-sm w-3/4 h-6"
            :class="currentTheme.skeletons.main"
          />
        </div>
      </div>
      <div class="mt-8">
        <div
          class="rounded-sm w-full h-6 mb-4"
          :class="currentTheme.skeletons.main"
        />
        <div
          class="rounded-sm w-11/12 h-6"
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
  name: 'SkeletonListItem ',

  setup() {
    const { currentTheme, currentMode, isLight } = useTheme()

    const cardClasses = computed(() => {
      const border = isLight.value ? '' : `border-opacity-10`

      return [
        border,
        currentTheme.value.bg.card,
        currentTheme.value.borders.skeleton,
      ]
    })

    return {
      currentMode,
      currentTheme,
      cardClasses,
    }
  },
})
</script>
