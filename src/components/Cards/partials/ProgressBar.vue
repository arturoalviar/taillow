<template>
  <div
    class="w-full h-2 rounded-full overflow-hidden"
    :class="theme.bg.progress"
  >
    <div class="h-2" :class="[`w-${width}`, progressBackground]" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'

import { ThemeOption } from '@/types'

export default defineComponent({
  name: 'ProgressBar',
  props: {
    theme: {
      type: Object as PropType<ThemeOption>,
      required: true,
    },
    width: {
      type: String,
      default: '1/2',
    },
    progressBg: {
      type: String,
    },
    useGradient: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const progressBackground = computed(() => {
      const { direction, from, to } = props.theme.gradients.main
      const solidBg = props.progressBg
        ? props.progressBg
        : props.theme.bg.primary

      return props.useGradient
        ? `bg-gradient-to-${direction} ${from} ${to}`
        : solidBg
    })

    return {
      progressBackground,
    }
  },
})
</script>
