<template>
  <div class="relative max-w-lg mx-auto p-8 mb-6 rounded-xl">
    <div class="grid md:grid-cols-3 gap-4">
      <div class="grid grid-cols-2 md:col-span-1 md:grid-cols-1 gap-4">
        <div class="p-4 rounded-lg" :class="cardClasses">
          <div class="w-10 h-10 bg-yellow-300 rounded-lg" />
          <div class="mt-4 mb-4 md:mb-6">
            <p class="text-base md:text-lg">Dashboard</p>
            <p class="text-xs">Design</p>
          </div>
          <div class="flex flex-col md:flex-row items-start">
            <ProgressBar
              :theme="currentTheme"
              width="1/4"
              progressBg="bg-yellow-300"
            />
            <div class="mt-2 md:mt-0 md:ml-2 leading-none text-sm">2/10</div>
          </div>
        </div>
        <div class="p-4 rounded-lg" :class="cardClasses">
          <div class="w-10 h-10 bg-green-300 rounded-lg" />
          <div class="mt-4 mb-4 md:mb-6">
            <p class="text-base md:text-lg">Todos</p>
            <p class="text-xs">Design</p>
          </div>
          <div class="flex flex-col md:flex-row items-start">
            <ProgressBar :theme="currentTheme" progressBg="bg-green-300" />
            <div class="mt-2 md:mt-0 md:ml-2 leading-none text-sm">10/20</div>
          </div>
        </div>
      </div>
      <div class="md:col-span-2 grid gap-4">
        <div class="p-4 flex flex-col rounded-lg" :class="cardClasses">
          <div class="flex flex-row items-start mb-4">
            <div class="w-10 h-10 bg-indigo-300 mr-3 rounded-lg" />
            <div class="mr-auto">
              <p class="text-base md:text-lg leading-tight">Blog</p>
              <p class="text-xs" :class="currentTheme.text.subText">Web Dev</p>
            </div>
            <div
              class="bg-indigo-300 text-indigo-900 font-medium px-2 py-1 rounded-xl text-xs"
            >
              15/20
            </div>
          </div>
          <ProgressBar
            class="mt-auto"
            :theme="currentTheme"
            progressBg="bg-indigo-300"
            width="3/4"
          />
        </div>
        <div class="p-4 flex flex-col rounded-lg" :class="cardClasses">
          <div class="flex flex-row items-start mb-4">
            <div class="w-10 h-10 bg-rose-300 mr-3 rounded-lg" />
            <div class="mr-auto">
              <p class="text-base md:text-lg leading-tight">Landing page</p>
              <p class="text-xs" :class="currentTheme.text.subText">Web Dev</p>
            </div>
            <div
              class="bg-rose-300 text-rose-900 font-medium px-2 py-1 rounded-xl text-xs"
            >
              5/20
            </div>
          </div>
          <ProgressBar
            class="mt-auto"
            :theme="currentTheme"
            progressBg="bg-rose-300"
            width="1/4"
          />
        </div>
        <div class="p-4 flex flex-col rounded-lg" :class="cardClasses">
          <div class="flex flex-row items-start mb-4">
            <div class="w-10 h-10 bg-orange-300 mr-3 rounded-lg" />
            <div class="mr-auto">
              <p class="text-base md:text-lg leading-tight">Upcoming project</p>
              <p class="text-xs" :class="currentTheme.text.subText">Web Dev</p>
            </div>
            <div
              class="bg-orange-300 text-orange-900 font-medium px-2 py-1 rounded-xl text-xs"
            >
              10/20
            </div>
          </div>
          <ProgressBar
            class="mt-auto"
            :theme="currentTheme"
            progressBg="bg-orange-300"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import ProgressBar from './partials/ProgressBar.vue'
import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'CardProgress',
  components: {
    ProgressBar,
  },
  setup() {
    const { currentTheme, currentMode, isLight } = useTheme()

    const cardClasses = computed(() => {
      const shadow = isLight.value ? 'shadow-lg' : ''

      return [currentTheme.value.bg.card, shadow]
    })

    return {
      cardClasses,
      currentMode,
      currentTheme,
    }
  },
})
</script>
