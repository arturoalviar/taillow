<template>
  <div class="flex flex-row justify-center items-center max-w-sm mx-auto">
    <a
      href="#"
      class="group relative font-bold leading-loose text-center py-2 px-4 rounded-lg overflow-hidden"
      :class="`${currentTheme.gradients.buttonTransition.text}`"
    >
      <div
        class="absolute h-full w-full top-0 left-0 right-0 bottom-0 transition duration-300 z-10 group-hover:opacity-0 group-focus:opacity-0"
        :class="buttonClasses"
      />
      <div
        class="absolute h-full w-full top-0 left-0 right-0 bottom-0 transition duration-300 z-0 opacity-100 group-hover:opacity-100 group-focus:opacity-100"
        :class="buttonHoverClasses"
      />
      <span class="relative z-20">Gradient hover transition</span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'ButtonGradientTransition',

  setup() {
    const { currentTheme, currentMode } = useTheme()

    const buttonClasses = computed(() => {
      const {
        from,
        to,
        direction,
      } = currentTheme.value.gradients.buttonTransition

      return [direction, from, to]
    })

    const buttonHoverClasses = computed(() => {
      const {
        hoverDirection,
        hoverFrom,
        hoverTo,
      } = currentTheme.value.gradients.buttonTransition

      return [hoverDirection, hoverFrom, hoverTo]
    })

    return {
      currentMode,
      currentTheme,
      buttonClasses,
      buttonHoverClasses,
    }
  },
})
</script>
