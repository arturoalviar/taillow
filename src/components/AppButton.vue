<template>
  <button
    class="transition"
    :class="currentButtonStyles"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'

import { ButtonStyle } from '@/types'

export default defineComponent({
  name: 'AppButton',
  props: {
    buttonStyles: {
      type: Object as PropType<ButtonStyle>,
      default: {
        bg: 'bg-transparent',
        text: 'text-current',
        hoverBg: 'bg-transparent',
        hoverText: 'text-current',
      } as ButtonStyle,
    },
  },
  emits: ['click'],
  setup(props) {
    const currentButtonStyles = computed(() => [
      props.buttonStyles.bg,
      props.buttonStyles.text,
      props.buttonStyles.hoverBg,
      props.buttonStyles.hoverText,
    ])

    return {
      currentButtonStyles,
    }
  },
})
</script>
