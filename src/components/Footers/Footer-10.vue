<template>
  <footer>
    <div class="mb-6">
      <div class="w-32">
        <AppLogoText />
      </div>
    </div>
    <div class="flex flex-col lg:flex-row">
      <div class="lg:flex lg:flex-col lg:justify-between lg:mr-24">
        <ul class="flex flex-row mb-6 lg:mb-0">
          <li class="lg:flex-1 py-2 pr-2 mr-3"><a href="#">Facebook</a></li>
          <li class="lg:flex-1 py-2 pr-2 mr-3"><a href="#">Instagram</a></li>
          <li class="lg:flex-1 py-2 pr-2 mr-3"><a href="#">LinkedIn</a></li>
          <li class="lg:flex-1 py-2 pr-2 mr-3"><a href="#">Twitter</a></li>
        </ul>
        <div class="relative mb-10 lg:mb-0">
          <h3 class="flex-1 font-bold text-xl mr-10 mb-3">Request a demo</h3>
          <div class="flex-1 md:flex md:flex-row lg:flex-col">
            <label class="w-full">
              <span class="font-medium text-sm mr-4 lg:mr-0"
                >Email address</span
              >
              <input
                type="email"
                class="bg-transparent block max-w-xs w-full p-2 border-0 border-b-2 border-opacity-80 focus:ring-0 focus:border-opacity-100 placeholder-current transition-colors duration-200"
                :class="[
                  currentTheme.borders.text,
                  currentTheme.borders.focusPrimary,
                ]"
              />
            </label>
          </div>
        </div>
      </div>
      <div class="flex-grow grid gap-10 grid-cols-2 md:grid-cols-4">
        <NavLinks title="navigation" class="lg:mx-auto" />
        <NavLinks title="company" class="lg:mx-auto" />
        <NavLinks title="product" class="lg:mx-auto" />
        <NavLinks title="resources" class="lg:mx-auto" />
      </div>
    </div>
    <div
      class="grid gap-4 lg:gap-6 lg:grid-cols-2 lg:items-start lg:justify-between w-full border-gray-200 mt-10 pt-8"
    >
      <div class="text-center lg:text-left">
        <p>{{ new Date().getFullYear() }}. Taillow</p>
      </div>
      <NavLinks
        class="flex-1 text-xs md:text-sm font-medium"
        title="legal"
        justify="justify-center lg:justify-end"
        omitTitle
        isHorizonal
      />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavLinks from './partials/NavLinks.vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'FooterFour',
  components: {
    NavLinks,
  },
  setup() {
    const { currentTheme, currentMode } = useTheme()

    return {
      currentTheme,
      currentMode,
    }
  },
})
</script>
