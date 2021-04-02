<template>
  <div class="relative p-2 lg:p-4 overflow-hidden">
    <div class="bg-gray-900 px-10 py-40 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h1
          class="text-4xl md:text-6xl lg:text-8xl font-bold leading-none mb-6 tracking-tight text-center"
        >
          <span
            class="block bg-clip-text text-transparent"
            :class="gradientStyles"
            >Nullam viverra</span
          >
          <span
            class="block bg-clip-text text-transparent leading-tight"
            :class="gradientStyles"
            >Maecenas</span
          >
        </h1>
        <p class="text-gray-300 leading-relaxed mb-12 max-w-xl mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
          dolores distinctio doloremque possimus sequi minima dolor facere
          quaerat eveniet!
        </p>
        <a
          href="#"
          class="font-bold leading-loose text-center px-6 py-3 rounded-lg transition duration-300"
          :class="buttonClasses"
        >
          Download now
        </a>
      </div>
    </div>
    <div
      class="p-6 absolute top-0 left-0 right-0 w-full h-full pointer-events-none"
      :class="gradientStyles"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'HeroTextGradient',
  setup() {
    const { currentTheme, currentMode } = useTheme()

    const gradientStyles = computed(() => {
      const { direction, from, to } = currentTheme.value.gradients.main
      return [direction, from, to]
    })

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
      gradientStyles,
      buttonClasses,
    }
  },
})
</script>
