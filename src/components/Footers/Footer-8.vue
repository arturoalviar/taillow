<template>
  <footer>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-between pt-10 mb-10"
    >
      <NavLinks title="navigation" />
      <NavLinks title="company" />
      <NavLinks title="product" class="lg:justify-self-center" />
      <NavLinks title="developers" class="lg:justify-self-end" />
      <NavLinks title="resources" class="lg:justify-self-end" />
    </div>

    <div class="mb-4">
      <div class="w-16 mx-auto">
        <AppLogo />
      </div>
    </div>
    <p class="text-center leading-8">All rights reserved.</p>
    <div class="mt-4 w-full">
      <SocialLinks :currentTheme="currentTheme" justify="justify-center" />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavLinks from './partials/NavLinks.vue'
import SocialLinks from './partials/SocialLinks.vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'FooterTwo',
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
