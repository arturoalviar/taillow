<template>
  <nav
    class="container px-4 md:px-8 mx-auto flex flex-row justify-between items-center h-20"
  >
    <div class="mr-4">
      <a
        href="#"
        aria-label="Go to Home page"
        class="inline-block w-28 lg:w-32"
      >
        <AppLogoText />
      </a>
    </div>
    <div
      class="hidden flex-1 md:flex flex-row items-center w-full max-w-sm lg:max-w-md"
    >
      <label for="" class="relative inline-flex w-full">
        <span class="sr-only">Search the site</span>
        <input
          class="w-full pl-4 pr-16 h-10 border-none rounded-2xl focus:ring-2"
          :class="searchBarClasses"
          type="text"
          placeholder="Search for anything"
        />
        <AppButton
          class="absolute top-0 right-0 h-full w-12 flex flex-col content-center justify-center rounded-tr-2xl rounded-br-2xl"
          aria-label="Search for anything"
        >
          <SearchIcon class="w-4 h-4 self-center" />
        </AppButton>
      </label>
    </div>
    <div class="hidden relative md:flex flex-row justify-end">
      <span class="relative inline-flex">
        <a
          href="#"
          aria-label="View notifications"
          class="inline-flex relative p-2"
        >
          <BellIcon class="w-6 h-6" />
        </a>
        <span class="flex absolute h-2 w-2 top-0 right-0">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
          />
          <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
        </span>
      </span>
    </div>
    <div class="flex flex-1 md:hidden flex-row items-center w-full max-w-md">
      <label for="" class="relative inline-flex w-full">
        <span class="sr-only">Search the site</span>
        <input
          class="w-full pl-4 pr-16 h-10 opacity-0 transform border-none rounded-2xl transition-all"
          :class="[currentTheme.input.bg, mobileSearchClasses]"
          type="text"
          placeholder="Search"
        />
        <AppButton
          class="absolute top-0 right-0 h-full w-12 flex flex-col content-center justify-center rounded-tr-2xl rounded-br-2xl"
          aria-label="Search"
          @click="toggleSearch"
        >
          <SearchIcon class="w-4 h-4 self-center" />
        </AppButton>
      </label>
    </div>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import BellIcon from '../../assets/icons/bell.svg?inline'
import SearchIcon from '../../assets/icons/search.svg?inline'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'NavThree',
  components: {
    SearchIcon,
    BellIcon,
  },
  setup() {
    const { currentTheme, currentMode } = useTheme()
    const showSearch = ref(false)

    const buttonStyles = computed(() => {
      return [
        currentTheme.value.buttons.primary.bg,
        currentTheme.value.buttons.primary.text,
        currentTheme.value.buttons.primary.hoverBg,
        'transition ease-in-out duration-300',
      ]
    })

    const searchBarClasses = computed(() => {
      const {
        rings,
        input: { bg, placeholder },
      } = currentTheme.value

      return [bg, placeholder, rings.focusPrimary]
    })

    const mobileSearchClasses = computed(() => {
      return showSearch.value ? 'scale-y-100 opacity-100' : 'scale-y-0'
    })

    const toggleSearch = () => {
      showSearch.value = !showSearch.value
    }

    return {
      currentMode,
      currentTheme,
      buttonStyles,
      showSearch,
      mobileSearchClasses,
      searchBarClasses,
      toggleSearch,
    }
  },
})
</script>
