<template>
  <footer>
    <div class="mb-6 lg:mb-10">
      <div class="w-32 mx-auto">
        <AppLogoText />
      </div>
    </div>
    <div class="flex flex-col lg:flex-row lg:justify-center">
      <NavLinks
        class="flex-1 text-xs md:text-sm font-medium"
        title="legal"
        omitTitle
        isHorizonal
      />
    </div>
    <div
      class="lg:grid lg:grid-cols-3 justify-center lg:items-center lg:justify-between w-full pt-4 lg:pt-8"
    >
      <div class="mb-2 lg:mb-0">
        <label class="block">
          <span class="sr-only">Select site language</span>
          <select
            class="block mx-auto lg:mx-0 mt-1 rounded-md border-transparent focus:ring-1 focus:border-transparent"
            :class="dropdownClasses"
          >
            <option>English</option>
            <option>Español</option>
            <option>日本語</option>
          </select>
        </label>
      </div>
      <SocialLinks
        class="mb-2 lg:mb-0"
        justify="justify-center"
        :currentTheme="currentTheme"
      />
      <div class="flex flex-col items-center justify-self-end text-sm">
        <p>{{ new Date().getFullYear() }}. Taillow.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import NavLinks from './partials/NavLinks.vue'
import SocialLinks from './partials/SocialLinks.vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'FooterTen',
  components: {
    NavLinks,
    SocialLinks,
  },
  setup() {
    const { currentTheme } = useTheme()

    const dropdownClasses = computed(() => {
      const {
        rings,
        input: { bg, text },
      } = currentTheme.value

      return [bg, text, rings.focusPrimary]
    })

    return {
      currentTheme,
      dropdownClasses,
    }
  },
})
</script>
