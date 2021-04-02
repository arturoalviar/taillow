<template>
  <footer>
    <div class="grid lg:grid-cols-5 gap-6 pb-6 lg:pb-10">
      <div class="col-span-1 mr-10">
        <div class="w-16">
          <AppLogo />
        </div>
      </div>
      <div
        class="grid grid-cols-3 justify-center col-span-3 text-sm md:text-base"
      >
        <NavLinks title="navigation" />
        <NavLinks title="product" />
        <NavLinks title="resources" />
      </div>
      <div class="flex flex-col justify-between col-span-1">
        <div>
          <h3 class="font-bold mb-6 capitalize">Head Office</h3>
          <address class="leading-6 not-italic">
            Taillow <br />
            123 Fake Street <br />
            New York, NY 10001
          </address>
        </div>

        <div class="mt-6 lg:mt-auto lg:pr-8">
          <label class="block font-medium text-sm" for="footer-6-email"
            >Newsletter</label
          >
          <input
            id="footer-6-email"
            class="block w-full px-0.5 bg-transparent border-0 border-b-2 focus:ring-0 transition-colors"
            type="email"
            placeholder="Email address"
            :class="inputClasses"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row md:justify-between mt-4 md:mt-10">
      <div class="mb-4 lg:mb-0">
        <a class="text-sm border-b pb-2" href="mailto:faker@fake.com"
          >hello@taillow.com</a
        >
      </div>
      <div class="mb-4 lg:mb-0">
        <a class="text-sm border-b pb-2" href="tel:15555555555"
          >(555) 555-5555</a
        >
      </div>

      <div class="mb-4 lg:mb-0">
        <p class="text-sm">{{ new Date().getFullYear() }}. Taillow.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import NavLinks from './partials/NavLinks.vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'FooterSix',
  components: {
    NavLinks,
  },
  setup() {
    const { currentTheme, currentMode } = useTheme()

    const inputClasses = computed(() => {
      const { input, borders } = currentTheme.value

      return [input.placeholder, borders.text, borders.focusPrimary]
    })

    return {
      currentTheme,
      currentMode,
      inputClasses,
    }
  },
})
</script>
