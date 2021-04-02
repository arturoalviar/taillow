<template>
  <nav
    class="container px-4 md:px-8 mx-auto flex flex-row justify-center items-center h-20"
  >
    <div class="flex-1 mr-auto">
      <a
        href="#"
        aria-label="Go to Home page"
        class="inline-block w-28 lg:w-32"
      >
        <AppLogoText />
      </a>
    </div>
    <ul class="hidden md:flex flex-row items-center mx-auto">
      <li>
        <a
          href="#"
          class="inline-flex p-3 mr-2 font-medium transition-colors ease-in-out duration-300"
          :class="currentTheme.text.hoverPrimary"
          >About
        </a>
      </li>
      <li>
        <a
          href="#"
          class="inline-flex p-3 mr-2 font-medium transition-colors ease-in-out duration-300"
          :class="currentTheme.text.hoverPrimary"
          >Product
        </a>
      </li>
      <li>
        <a
          href="#"
          class="inline-flex p-3 mr-2 font-medium transition-colors ease-in-out duration-300"
          :class="currentTheme.text.hoverPrimary"
          >Pricing</a
        >
      </li>
      <li>
        <a
          href="#"
          class="inline-flex p-3 mr-2 font-medium transition-colors ease-in-out duration-300"
          :class="currentTheme.text.hoverPrimary"
          >Careers</a
        >
      </li>
    </ul>
    <div class="hidden flex-1 md:flex flex-row justify-end">
      <a
        href="#"
        class="inline-flex py-2 px-8 font-medium rounded-xl"
        :class="buttonStyles"
      >
        Sign In</a
      >
    </div>
    <div class="inline-block md:hidden">
      <Hamburger />
    </div>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Hamburger from '@/components/Buttons/ButtonHamburger.vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'NavTwo',
  components: {
    Hamburger,
  },
  setup() {
    const { currentTheme, currentMode } = useTheme()

    const buttonStyles = computed(() => {
      return [
        currentTheme.value.buttons.primary.bg,
        currentTheme.value.buttons.primary.text,
        currentTheme.value.buttons.primary.hoverBg,
        'transition ease-in-out duration-300',
      ]
    })

    return {
      currentMode,
      currentTheme,
      buttonStyles,
    }
  },
})
</script>
