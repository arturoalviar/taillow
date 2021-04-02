<template>
  <div class="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
    <div class="py-10 px-12 bg-orange-200 text-gray-900 rounded-xl">
      <div class="bg-indigo-800 shadow mx-auto w-full rounded-xl">
        <div class="aspect-w-1 aspect-h-1" />
      </div>
      <div class="flex flex-row justify-between mt-4 mb-2 font-medium">
        <p>Images</p>
        <p class="uppercase">14gb</p>
      </div>
      <p class="text-xs">1240 files</p>
    </div>
    <div class="grid gap-6">
      <div class="p-6 bg-teal-300 text-gray-900 rounded-xl">
        <div class="flex">
          <div class="bg-rose-300 shadow mr-6 w-16 h-20" />
          <div>
            <p class="font-medium">Documents</p>
            <p class="uppercase font-bold text-sm mb-4">980mb</p>
            <p class="text-xs">100 files</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <div class="p-4" :class="cardClasses">
          <div
            class="w-16 h-16 shadow-md mx-auto rounded-full"
            :class="currentTheme.bg.primary"
          />
          <div class="text-center mt-2">
            <p class="font-medium">Media</p>
            <p class="text-sm">20 files</p>
          </div>
        </div>
        <div class="p-4 bg-yellow-400 text-gray-900 rounded-xl">
          <div class="bg-gray-100 w-16 h-16 shadow-md mx-auto rounded-full" />
          <div class="text-center mt-2">
            <p class="font-medium">Other</p>
            <p class="text-sm">50 files</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'CardGrid',

  setup() {
    const { currentTheme, currentMode, isLight } = useTheme()

    const cardClasses = computed(() => {
      const cardBg = isLight.value
        ? currentTheme.value.bg.panel
        : currentTheme.value.bg.card

      return `${cardBg} rounded-xl`
    })

    return {
      currentTheme,
      cardClasses,
      currentMode,
    }
  },
})
</script>
