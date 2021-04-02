<template>
  <div
    class="p-6 md:p-8 max-w-sm mx-auto rounded-tr-3xl rounded-bl-3xl"
    :class="cardClasses"
  >
    <div class="flex flex-row justify-between mb-4 md:mb-8">
      <div>
        <p class="text-xs opacity-90">{{ date }}</p>
        <p class="text-xs mt-4">Hello,</p>
        <p class="text-xl font-bold">Edward</p>
      </div>
    </div>
    <div class="flex flex-row items-center">
      <div class="flex flex-col md:flex-row">
        <div class="mr-4">
          <CloudlyIcon class="w-8 h-8" />
        </div>
        <div class="font-medium text-lg mr-4">
          44 <sup class="-ml-1">&#8451;</sup>
        </div>
      </div>
      <div class="flex flex-col md:flex-row ml-auto">
        <div class="">Cloudly</div>
        <div class="ml-0 md:ml-4">Humidity 20%</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import CloudlyIcon from '@/assets/icons/cloudly.svg?inline'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'CardWeather',
  components: {
    CloudlyIcon,
  },
  setup() {
    const { currentTheme, currentMode, isLight } = useTheme()

    const cardClasses = computed(() => {
      const shadow = isLight ? 'shadow-lg' : ''
      const { from, to, direction, text } = currentTheme.value.gradients.main
      const textClass = text ? text : 'text-gray-900'

      return [direction, from, to, textClass, shadow]
    })

    const date = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date())

    return {
      currentTheme,
      cardClasses,
      currentMode,
      date,
    }
  },
})
</script>
