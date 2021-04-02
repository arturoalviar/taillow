<template>
  <footer>
    <div class="lg:grid lg:grid-cols-2 lg:gap-8 py-10 lg:py-20">
      <div class="mb-8 lg:mb-0 flex flex-col justify-center">
        <h2 class="font-bold text-3xl md:text-5xl mb-5">
          Pellentesque cursus lacus vel sapien cursus
        </h2>
        <p class="text-lg md:text-xl leading-7">
          Suspendisse volutpat fermentum dolor, id vehicula est pulvinar et.
          Mauris sed sem vitae sem gravida tincidunt nec quis nulla.
        </p>
      </div>
      <div class="p-4 md:p-6 rounded-xl" :class="formClasses">
        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="font-medium">Full name</span>
            <input
              type="text"
              class="mt-1 block w-full text-gray-800 focus:ring"
              :class="inputClasses"
              placeholder="Juan Doe"
            />
          </label>
          <label class="block">
            <span class="font-medium">Email address</span>
            <input
              type="email"
              class="mt-1 block w-full text-gray-800 focus:ring"
              :class="inputClasses"
              placeholder="juan@example.com"
            />
          </label>
          <label class="block">
            <span class="font-medium">When is your event?</span>
            <input
              type="date"
              class="mt-1 block w-full text-gray-800 focus:ring"
              :class="inputClasses"
            />
          </label>
          <label class="block">
            <span class="font-medium">What type of event is it?</span>
            <select
              class="block w-full mt-1 text-gray-800 focus:ring"
              :class="inputClasses"
            >
              <option>Birthday</option>
              <option>Wedding</option>
              <option>Meet and Greet</option>
              <option>Other</option>
            </select>
          </label>
          <label class="block">
            <span class="font-medium">Additional details</span>
            <textarea
              class="mt-1 block w-full text-gray-800 focus:ring"
              :class="inputClasses"
              rows="3"
            />
          </label>
          <div class="block">
            <div class="mt-2">
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    class="rounded focus:ring"
                    :class="[inputClasses, currentTheme.text.primary]"
                  />
                  <span class="ml-2">Email me news and special offers</span>
                </label>
              </div>
            </div>
          </div>
          <AppButton
            class="font-bold p-3 rounded w-full md:w-48"
            :buttonStyles="currentTheme.buttons.primary"
            >Submit</AppButton
          >
        </div>
      </div>
    </div>
    <div
      class="flex flex-col lg:flex-row content-start justify-center lg:justify-between w-full border-t border-gray-200 pt-8"
    >
      <div>
        <div class="mx-auto mb-6 lg:mb-0 lg:mx-0 w-32">
          <AppLogoText />
        </div>
      </div>
      <NavLinks
        class="text-xs md:text-sm font-medium mb-6 lg:mb-0"
        title="legal"
        omitTitle
        isHorizonal
      />
      <SocialLinks :currentTheme="currentTheme" />
    </div>
  </footer>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import NavLinks from './partials/NavLinks.vue'
import SocialLinks from './partials/SocialLinks.vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'FooterEight',
  components: {
    NavLinks,
    SocialLinks,
  },
  setup() {
    const { currentTheme, currentMode, isLight } = useTheme()

    const formClasses = computed(() => {
      const shadow = isLight.value ? 'shadow-xl' : ''
      const bg = isLight.value
        ? currentTheme.value.bg.main
        : currentTheme.value.bg.card

      return [bg, shadow]
    })

    const inputClasses = computed(() => {
      const { borders, rings } = currentTheme.value

      return [rings.focusPrimary, borders.focusPrimary]
    })

    return {
      currentTheme,
      currentMode,
      formClasses,
      inputClasses,
    }
  },
})
</script>
