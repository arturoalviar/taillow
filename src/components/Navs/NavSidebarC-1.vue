<template>
  <div class="w-24 mx-auto grid rounded-2xl" :class="navClasses">
    <nav class="flex flex-col rounded-2xl py-6 px-4 h-full">
      <div class="mb-12 p-2 mx-auto">
        <a href="#" aria-label="Go to Home page">
          <AppLogo class="w-8 h-8" />
        </a>
      </div>
      <div class="mb-6">
        <button
          class="flex flex-col items-center p-4 rounded-xl w-full"
          aria-label="Search"
          :class="currentTheme.buttons.self.hoverBg"
        >
          <span class="sr-only">Search</span>
          <SearchIcon class="w-6 h-6" />
        </button>
      </div>
      <ul class="flex flex-col">
        <li class="mb-4 rounded-xl w-full" :class="currentTheme.bg.panel">
          <a
            href="#"
            aria-label="Go to Home page"
            class="flex flex-col items-center p-4 font-medium"
            :class="currentTheme.text.main"
          >
            <span aria-hidden="true">
              <HomeIcon class="w-6 h-6" />
            </span>
          </a>
        </li>
        <li
          class="mb-4 rounded-xl w-full"
          :class="currentTheme.buttons.self.hoverBg"
        >
          <a
            href="#"
            aria-label="Go to Analytics  page"
            class="flex flex-col items-center p-4 font-medium"
            :class="currentTheme.text.main"
          >
            <span aria-hidden="true">
              <AnalyticsIcon class="w-6 h-6" />
            </span>
          </a>
        </li>
        <li
          class="mb-4 rounded-xl w-full"
          :class="currentTheme.buttons.self.hoverBg"
        >
          <a
            href="#"
            aria-label="Go to Projects page"
            class="relative flex flex-col items-center p-4 font-medium"
            :class="currentTheme.text.main"
          >
            <span aria-hidden="true">
              <FolderIcon class="w-6 h-6" />
            </span>

            <span
              class="absolute top-2 right-2 w-2 h-2 bg-red-600 text-red-50 rounded-full"
            />
          </a>
        </li>
        <li
          class="mb-4 rounded-xl w-full"
          :class="currentTheme.buttons.self.hoverBg"
        >
          <a
            href="#"
            aria-label="Go to Services page"
            class="flex flex-col items-center p-4 font-medium"
            :class="currentTheme.text.main"
          >
            <span aria-hidden="true">
              <BriefcaseIcon class="w-6 h-6" />
            </span>
          </a>
        </li>
      </ul>
      <ul class="mt-6 pt-6 border-t">
        <li
          class="mb-4 rounded-xl w-full"
          :class="currentTheme.buttons.self.hoverBg"
        >
          <a
            href="#"
            aria-label="Go to Settings page"
            class="flex flex-col items-center p-4 font-medium"
            :class="currentTheme.text.main"
          >
            <span aria-hidden="true">
              <CogIcon class="w-6 h-6" />
            </span>
          </a>
        </li>
        <li
          class="mb-4 rounded-xl w-full"
          :class="currentTheme.buttons.self.hoverBg"
        >
          <a
            href="#"
            aria-label="Logout"
            class="flex flex-col items-center p-4 font-medium"
            :class="currentTheme.text.main"
          >
            <span aria-hidden="true">
              <SignOutIcon class="w-6 h-6" />
            </span>
          </a>
        </li>
      </ul>
      <div class="mt-auto pt-20">
        <div class="flex flex-col justify-center items-center">
          <div class="relative inline-flex">
            <div
              class="w-10 h-10 rounded-full"
              :class="currentTheme.bg.primary"
            />
            <span class="absolute h-2 w-2 bottom-0 right-0">
              <span
                class="absolute rounded-full h-2 w-2 bg-green-300 ring-2"
                :class="currentTheme.rings.header"
              />
            </span>
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
import SearchIcon from '../../assets/icons/search.svg?inline'
import SignOutIcon from '../../assets/icons/sign-out.svg?inline'

export default defineComponent({
  name: 'NavSidebarCompact',
  components: {
    HomeIcon,
    AnalyticsIcon,
    BriefcaseIcon,
    CogIcon,
    FolderIcon,
    SearchIcon,
    SignOutIcon,
  },
  setup() {
    const { currentTheme, currentMode, isLight } = useTheme()

    const navClasses = computed(() => {
      return isLight.value ? 'shadow-2xl' : currentTheme.value.bg.header
    })

    return {
      currentMode,
      currentTheme,
      navClasses,
    }
  },
})
</script>
