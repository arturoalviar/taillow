<template>
  <footer>
    <div
      class="container rounded-xl mb-12 lg:mb-24"
      :class="currentTheme.bg.panel"
    >
      <div class="max-w-2xl mx-auto py-12 md:py-16">
        <h1 class="font-bold text-3xl lg:text-5xl text-center mb-10">
          Maecenas cursus felis eget vestibulum fermentum
        </h1>
        <div class="flex flex-row justify-center">
          <AppButton
            class="font-semibold px-8 py-4 rounded-lg"
            :buttonStyles="currentTheme.buttons.primary"
            >Schedule demo</AppButton
          >
        </div>
      </div>
    </div>

    <div class="lg:grid lg:grid-cols-3 lg:gap-8">
      <div class="col-span-1 mb-8 lg:mb-0 lg:mx-0">
        <div class="w-32 mb-6 mx-auto lg:mx-0">
          <AppLogoText />
        </div>
        <p
          class="text-sm mb-4 max-w-xs mx-auto text-center lg:mx-0 lg:text-left"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          tincidunt purus.
        </p>
        <SocialLinks
          class="mt-4 lg:-ml-3"
          justify="justify-center lg:justify-start"
          :currentTheme="currentTheme"
        />
      </div>
      <div
        class="col-span-2 flex flex-row justify-between lg:justify-around text-sm md:text-base"
      >
        <NavLinks title="company" class="mb-10 lg:mb-0" />
        <NavLinks title="product" class="mb-10 lg:mb-0 justify-self-center" />
        <NavLinks title="resources" class="mb-10 lg:mb-0 justify-self-end" />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import NavLinks from './partials/NavLinks.vue'
import SocialLinks from './partials/SocialLinks.vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'FooterSeven',
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
