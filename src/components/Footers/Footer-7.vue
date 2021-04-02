<template>
  <footer>
    <div class="mb-12">
      <div class="w-16">
        <AppLogo />
      </div>
    </div>
    <div class="flex flex-col lg:flex-row lg:justify-between">
      <div
        class="grid gap-10 grid-cols-3 lg:w-7/12 mb-10 lg:mb-0 text-sm md:text-base"
      >
        <NavLinks title="navigation" />
        <NavLinks title="company" />
        <NavLinks title="product" />
      </div>
      <div class="w-80">
        <h3 class="font-bold mb-6 capitalize">Social Links</h3>
        <p class="mb-6">
          Pellentesque condimentum, massa at molestie hendrerit, odio lorem
          ornare nisl, vitae pellentesque arcu
        </p>
        <SocialLinks class="-ml-2" :currentTheme="currentTheme" justify="" />
      </div>
    </div>
    <div
      class="grid gap-4 lg:grid-cols-2 lg:items-center lg:justify-between w-full border-t border-gray-200 mt-12 pt-10"
    >
      <div class="text-center lg:text-left">
        <p>{{ new Date().getFullYear() }}. Taillow.</p>
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
import SocialLinks from './partials/SocialLinks.vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'FooterNine',
  components: {
    NavLinks,
    SocialLinks,
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
