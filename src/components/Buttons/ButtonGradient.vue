<template>
  <div class="flex flex-row justify-center items-center max-w-sm mx-auto">
    <a
      href="#"
      class="font-bold leading-loose text-center px-4 py-2 rounded-lg transition duration-300"
      :class="buttonClasses"
      >Gradient basic button</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'ButtonGradient',

  setup() {
    const { currentTheme, currentMode } = useTheme()

    const buttonClasses = computed(() => {
      const {
        from,
        to,
        direction,
        text,
        hoverFrom,
        hoverTo,
      } = currentTheme.value.gradients.button

      return [direction, from, to, hoverFrom, hoverTo, text]
    })

    return {
      currentMode,
      currentTheme,
      buttonClasses,
    }
  },
})
</script>
