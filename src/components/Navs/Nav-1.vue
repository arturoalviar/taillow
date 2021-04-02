<template>
  <nav class="container px-4 md:px-8 mx-auto flex flex-row items-center h-20">
    <div class="w-10 lg:w-12 mr-auto">
      <a href="#" aria-label="Go to Home page">
        <AppLogo />
      </a>
    </div>
    <ul class="hidden md:flex flex-row items-center mr-8">
      <li>
        <a
          href="#"
          class="inline-flex p-3 mr-3 font-medium text-opacity-100 border-b-2 transition duration-300"
          :class="currentTheme.borders.primary"
          >About</a
        >
      </li>
      <li>
        <a
          href="#"
          class="inline-flex p-3 mr-3 font-medium text-opacity-80 border-b-2 border-transparent hover:border-current hover:text-opacity-100 transition duration-300"
          :class="currentTheme.text.main"
          >Services</a
        >
      </li>
      <li>
        <a
          href="#"
          class="inline-flex p-3 mr-3 font-medium text-opacity-80 border-b-2 border-transparent hover:border-current hover:text-opacity-100 transition duration-300"
          :class="currentTheme.text.main"
          >Team</a
        >
      </li>
      <li>
        <a
          href="#"
          class="inline-flex p-3 mr-3 font-medium text-opacity-80 border-b-2 border-transparent hover:border-current hover:text-opacity-100 transition duration-300"
          :class="currentTheme.text.main"
          >Contact</a
        >
      </li>
    </ul>
    <div class="hidden md:inline-flex">
      <a
        href="#"
        class="inline-flex py-2 px-6 font-medium border border-current transition duration-200"
        :class="buttonClasses"
      >
        Get in touch</a
      >
    </div>
    <div class="inline-block md:hidden">
      <Hamburger />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Hamburger from '@/components/Buttons/ButtonHamburger.vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'NavOne',
  components: {
    Hamburger,
  },
  setup() {
    const { currentTheme, currentMode } = useTheme()

    const buttonClasses = computed(() => {
      const {
        buttons: { ghost },
      } = currentTheme.value

      return [
        ghost.bg,
        ghost.hoverText,
        ghost.hoverBg,
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
