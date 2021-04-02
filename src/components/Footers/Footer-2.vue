<template>
  <footer>
    <div
      class="grid lg:grid-cols-2 lg:justify-between gap-8 lg:gap-28 py-6 lg:py-10"
    >
      <div class="flex flex-col lg:flex-row">
        <div class="w-10 mr-10 mb-8 lg:mb-0">
          <AppLogo />
        </div>
        <div
          class="flex flex-row lg:flex-1 justify-between text-sm md:text-base"
        >
          <NavLinks title="navigation" />
          <NavLinks title="developers" />
          <NavLinks title="resources" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-8 lg:justify-end">
        <div>
          <div class="group relative z-0">
            <div
              class="border border-current relative z-10"
              :class="currentTheme.bg.main"
            >
              <a href="#" class="block p-4">
                <CornerArrow class="w-6 h-6 ml-auto mb-2" />
                <p class="font-medium">
                  Contact <br />
                  sales
                </p>
              </a>
            </div>
            <div
              class="group-hover:translate-x-2 group-hover:translate-y-2 absolute top-0 left-0 border border-current border-dashed transform translate-x-1 translate-y-1 w-full h-full z-0 transition-transform"
              :class="currentTheme.borders.primary"
            />
          </div>
        </div>
        <div>
          <div class="group relative z-0">
            <div
              class="border border-current relative z-10"
              :class="currentTheme.bg.main"
            >
              <a href="#" class="block p-4">
                <CornerArrow class="w-6 h-6 ml-auto mb-2" />
                <p class="font-medium">
                  Contact <br />
                  support
                </p>
              </a>
            </div>
            <div
              class="group-hover:translate-x-2 group-hover:translate-y-2 absolute top-0 left-0 border border-dashed transform translate-x-1 translate-y-1 w-full h-full z-0 transition-transform"
              :class="currentTheme.borders.primary"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavLinks from './partials/NavLinks.vue'
import CornerArrow from '@/assets/icons/external-link-square.svg?inline'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'FooterEleven',
  components: {
    NavLinks,
    CornerArrow,
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
