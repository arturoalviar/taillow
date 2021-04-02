<template>
  <div class="flex flex-row justify-center items-center max-w-sm mx-auto">
    <a
      href="#"
      class="font-bold leading-loose text-center w-32 p-2 rounded-lg transition duration-300"
      :class="buttonClasses"
      >Solid Button</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'ButtonSolid',

  setup() {
    const { currentTheme, currentMode } = useTheme()

    const buttonClasses = computed(() => {
      const isColorTheme =
        currentMode.value !== 'light' && currentMode.value !== 'dark'

      const { primary, self } = currentTheme.value.buttons
      const { bg, text, hoverBg, focusBg } = isColorTheme ? self : primary

      return [bg, text, hoverBg, focusBg]
    })

    return {
      currentMode,
      currentTheme,
      buttonClasses,
    }
  },
})
</script>
