<template>
  <footer>
    <div class="text-center">
      <p class="uppercase text-sm tracking-widest">Always reliable</p>
      <h2 class="text-3xl py-6 mb-2 leading-tight">Request more information</h2>
      <p class="leading-8 max-w-md mx-auto mb-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
        corrupti voluptatum perferendis placeat repellat
      </p>
      <AppButton
        class="px-8 py-2 mb-8 font-semibold rounded-full shadow-xl"
        :buttonStyles="currentTheme.buttons.primary"
      >
        Contact Us
      </AppButton>
      <p class="text-sm mb-10">{{ new Date().getFullYear() }}. Taillow.</p>
    </div>
    <div
      class="flex flex-col lg:flex-row justify-center w-full border-t border-gray-200 pt-8"
    >
      <div class="flex-1">
        <div class="mx-auto lg:mx-0 w-32">
          <AppLogoText />
        </div>
      </div>
      <NavLinks
        class="text-xs md:text-sm font-medium mx-auto mt-6 lg:mt-0"
        title="legal"
        omitTitle
        isHorizonal
      />

      <SocialLinks class="flex-1 mt-4 lg:mt-0" :currentTheme="currentTheme" />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavLinks from './partials/NavLinks.vue'
import SocialLinks from './partials/SocialLinks.vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'FooterThree',
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
