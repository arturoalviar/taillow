import { inject, computed, Ref } from 'vue'

import themeOptions from '@/utils/themes'

export default function () {
  const currentMode = inject('currentMode') as Ref
  const currentTheme = computed(() => {
    return themeOptions[currentMode.value]
  })
  const isLight = computed(() => {
    return currentMode.value === 'light'
  })

  return {
    themeOptions,
    currentTheme,
    currentMode,
    isLight,
  }
}
