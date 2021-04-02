<template>
  <button @click="toggleTheme" :aria-label="ariaLabel">
    <component :is="renderIcon" class="w-4 h-4" />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import moon from '@/assets/icons/moon.svg?inline'
import sun from '@/assets/icons/sun.svg?inline'

export default defineComponent({
  name: 'AppThemeToggle',
  setup() {
    const store = useStore()

    const setTheme = () => {
      const currentTheme = store.state.isDarkMode ? 'dark' : 'light'

      document.documentElement.dataset.theme = currentTheme
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(currentTheme)
    }

    const toggleTheme = () => {
      store.commit('toggleTheme')
      setTheme()
    }

    const renderIcon = computed(() => {
      return store.state.isDarkMode ? sun : moon
    })

    const ariaLabel = computed(() => {
      return `Click to switch from ${store.getters.currentMode} to ${store.getters.nextMode} mode`
    })

    setTheme()

    return {
      toggleTheme,
      renderIcon,
      ariaLabel,
    }
  },
})
</script>
