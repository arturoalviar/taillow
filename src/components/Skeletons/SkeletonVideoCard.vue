<template>
  <div class="max-w-sm mx-auto animate-pulse">
    <div
      class="aspect-w-16 aspect-h-9"
      :class="currentTheme.skeletons.second"
    />
    <div class="flex flex-row py-4 w-full">
      <div
        class="w-10 h-10 rounded-full mr-4"
        :class="currentTheme.skeletons.main"
      />
      <div class="flex-1 pr-10">
        <div
          class="rounded-sm w-full h-5 mb-2"
          :class="currentTheme.skeletons.main"
        />
        <div
          class="rounded-sm w-3/4 h-5"
          :class="currentTheme.skeletons.main"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'SkeletonVideoCard ',

  setup() {
    const { currentTheme, currentMode } = useTheme()

    return {
      currentMode,
      currentTheme,
    }
  },
})
</script>
