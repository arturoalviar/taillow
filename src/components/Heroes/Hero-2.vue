<template>
  <div class="relative px-4 md:px-10 py-12 lg:py-32 overflow-hidden">
    <div class="grid lg:grid-cols-3 gap-4 items-center">
      <div class="lg:col-span-1">
        <div class="mb-6 text-sm leading-none">adipisci voluptas</div>
        <h1 class="font-bold leading-none text-4xl lg:text-6xl mb-3">
          Iusto commodi deserunt dolore
        </h1>
        <p class="font-medium leading-relaxed text-xl">
          Doloremque fuga voluptatem fugit officia provident, excepturi nemo
          facere possimus quaerat.
        </p>
        <div class="flex flex-row mt-10">
          <a
            href="#"
            class="border border-current font-medium leading-loose text-center py-2 px-4 mr-4 transition duration-300"
            :class="buttonClasses"
            >Book Demo</a
          >
          <a
            href="#"
            class="border-b border-transparent font-medium leading-loose text-center py-2 px-4 transition duration-300 hover:border-current"
            >Our showreel</a
          >
        </div>
      </div>
      <div class="mt-10 lg:mt-0 lg:col-span-2">
        <Hero
          class="block w-full fill-current"
          :class="currentTheme.text.primary"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import useTheme from '@/composables/useTheme'

import Hero from '@/assets/heroes/quite-town.svg?inline'

export default defineComponent({
  name: 'HeroTwo',
  components: {
    Hero,
  },
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
