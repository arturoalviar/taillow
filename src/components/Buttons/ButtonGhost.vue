<template>
  <div class="flex flex-row justify-center items-center max-w-sm mx-auto">
    <a
      href="#"
      class="border border-current font-bold leading-loose text-center py-2 px-4 transition duration-300"
      :class="buttonClasses"
      >Ghost Button</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'ButtonGhost',

  setup() {
    const { currentTheme, currentMode } = useTheme()

    const buttonClasses = computed(() => {
      const {
        buttons: { ghost },
      } = currentTheme.value

      return [
        ghost.bg,
        ghost.text,
        ghost.border,
        ghost.hoverBg,
        ghost.hoverText,
        ghost.focusBg,
        ghost.focusText,
      ]
    })

    return {
      currentMode,
      currentTheme,
      buttonClasses,
    }
  },
})
</script>
