<template>
  <footer>
    <div class="grid md:gap-y-10 lg:gap-10 lg:grid-cols-5 pt-10 mb-10">
      <div class="grid gap-10 grid-cols-3 col-span-3 text-sm md:text-base">
        <NavLinks title="company" />
        <NavLinks title="product" />
        <NavLinks title="resources" />
      </div>

      <div
        class="p-6 lg:p-10 mt-10 md:mt-0 lg:-mt-10 rounded-lg col-auto md:col-span-2"
        :class="currentTheme.bg.panel"
      >
        <div>
          <p class="font-bold mb-6">Subscribe</p>

          <div class="relative mb-4">
            <input
              class="w-full pl-4 pr-16 h-10 border border-opacity-50 focus:ring-0 text-gray-800 transition-colors"
              :class="[
                currentTheme.borders.primary,
                currentTheme.borders.focusPrimary,
                ` focus:border-opacity-100`,
              ]"
              type="text"
              placeholder="Email address"
            />
            <AppButton
              class="absolute top-0 right-0 h-full w-12 flex flex-col content-center justify-center"
              aria-label="Subscribe"
              :buttonStyles="currentTheme.buttons.primary"
            >
              <AppIcon class="self-center inline-flex" name="arrowRight" />
            </AppButton>
          </div>
          <p class="text-sm leading-6 opacity-90">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae, impedit! Reiciendis quo aliquid, rerum earum.
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col lg:flex-row content-start justify-center lg:justify-between w-full border-t border-gray-200 pt-8"
    >
      <div>
        <div class="mb-4 lg:mb-0 mx-auto lg:mx-0 w-10">
          <AppLogo />
        </div>
      </div>
      <NavLinks
        class="text-xs md:text-sm font-medium mb-4 lg:mb-0"
        title="legal"
        omitTitle
        isHorizonal
      />
      <SocialLinks :currentTheme="currentTheme" withBorder />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import NavLinks from './partials/NavLinks.vue'
import SocialLinks from './partials/SocialLinks.vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'FooterOne',
  components: {
    AppIcon,
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
