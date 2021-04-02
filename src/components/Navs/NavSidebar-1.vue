<template>
  <div class="max-w-sm mx-auto grid h-screen">
    <nav
      class="flex flex-col rounded-2xl py-6 px-4 w-full h-full"
      :class="navClasses"
    >
      <div class="mb-12 w-32">
        <a href="#" aria-label="Go to Home page">
          <AppLogoText />
        </a>
      </div>
      <div class="mb-6">
        <label for="" class="relative">
          <span class="sr-only">Search</span>
          <input
            type="text"
            class="block border-none pl-16 py-3 rounded-xl w-full focus:ring-2"
            :class="[
              currentTheme.input.bg,
              currentTheme.input.placeholder,
              currentTheme.rings.focusPrimary,
            ]"
            placeholder="Search"
          />
          <SearchIcon class="w-6 h-6 absolute top-3 left-4" />
        </label>
      </div>
      <ul class="flex flex-col">
        <li class="mb-4 rounded-xl w-full" :class="currentTheme.bg.panel">
          <a
            href="#"
            class="flex flex-row items-center p-4 font-medium"
            :class="currentTheme.text.main"
          >
            <span class="mr-6" aria-hidden="true">
              <HomeIcon class="w-6 h-6" />
            </span>
            Home</a
          >
        </li>
        <li
          class="mb-4 rounded-xl w-full"
          :class="currentTheme.buttons.self.hoverBg"
        >
          <a
            href="#"
            class="flex flex-row items-center p-4 font-medium"
            :class="currentTheme.text.main"
          >
            <span class="mr-6" aria-hidden="true">
              <AnalyticsIcon class="w-6 h-6" />
            </span>
            Analytics</a
          >
        </li>
        <li
          class="mb-4 rounded-xl w-full"
          :class="currentTheme.buttons.self.hoverBg"
        >
          <a
            href="#"
            class="flex flex-row items-center p-4 font-medium"
            :class="currentTheme.text.main"
          >
            <span class="mr-6" aria-hidden="true">
              <FolderIcon class="w-6 h-6" />
            </span>
            Projects
            <span
              class="ml-auto w-6 h-6 bg-red-600 text-red-50 flex flex-col items-center justify-center rounded-full font-bold text-sm"
            >
              3
            </span>
          </a>
        </li>
        <li
          class="mb-4 rounded-xl w-full"
          :class="currentTheme.buttons.self.hoverBg"
        >
          <a
            href="#"
            class="flex flex-row items-center p-4 font-medium"
            :class="currentTheme.text.main"
          >
            <span class="mr-6" aria-hidden="true">
              <BriefcaseIcon class="w-6 h-6" />
            </span>
            Services</a
          >
        </li>
      </ul>
      <ul class="mt-10 pt-10 border-t">
        <li
          class="mb-4 rounded-xl w-full"
          :class="currentTheme.buttons.self.hoverBg"
        >
          <a
            href="#"
            class="flex flex-row items-center p-4 font-medium"
            :class="currentTheme.text.main"
          >
            <span class="mr-6" aria-hidden="true">
              <CogIcon class="w-6 h-6" />
            </span>
            Settings</a
          >
        </li>
        <li
          class="mb-4 rounded-xl w-full"
          :class="currentTheme.buttons.self.hoverBg"
        >
          <a
            href="#"
            class="flex flex-row items-center p-4 font-medium"
            :class="currentTheme.text.main"
          >
            <span class="mr-6" aria-hidden="true">
              <SignOutIcon class="w-6 h-6" />
            </span>
            Sign out</a
          >
        </li>
      </ul>
      <div class="mt-auto">
        <div class="flex flex-row items-center">
          <div class="relative inline-flex">
            <div
              class="w-10 h-10 rounded-full"
              :class="currentTheme.bg.primary"
            />
            <span class="absolute h-2 w-2 bottom-0 right-0">
              <span
                class="absolute rounded-full h-2 w-2 bg-green-300 ring-2"
                :class="currentTheme.rings.bg"
              />
            </span>
          </div>
          <div class="ml-6">
            <p class="font-medium">Gin Sakata</p>
            <p class="text-sm text-opacity-70" :class="currentTheme.text.main">
              gin@yorozuya.com
            </p>
          </div>
          <div class="ml-auto">
            <button class="px-2 -mr-2" aria-label="Toggle dropdown menu">
              <EllipsisIcon class="w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import useTheme from '@/composables/useTheme'

import HomeIcon from '../../assets/icons/home.svg?inline'
import AnalyticsIcon from '../../assets/icons/analytics.svg?inline'
import BriefcaseIcon from '../../assets/icons/briefcase.svg?inline'
import CogIcon from '../../assets/icons/cog.svg?inline'
import FolderIcon from '../../assets/icons/folder.svg?inline'
import EllipsisIcon from '../../assets/icons/ellipsis-h.svg?inline'
import SearchIcon from '../../assets/icons/search.svg?inline'
import SignOutIcon from '../../assets/icons/sign-out.svg?inline'

export default defineComponent({
  name: 'NavSidebarOne',
  components: {
    HomeIcon,
    AnalyticsIcon,
    BriefcaseIcon,
    CogIcon,
    FolderIcon,
    EllipsisIcon,
    SearchIcon,
    SignOutIcon,
  },
  setup() {
    const { currentTheme, currentMode, isLight } = useTheme()

    const navClasses = computed(() => {
      return isLight.value
        ? 'shadow-2xl'
        : `border-2 border-opacity-70 ${currentTheme.value.borders.card}`
    })

    return {
      currentMode,
      currentTheme,
      navClasses,
    }
  },
})
</script>
