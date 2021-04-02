<template>
  <div
    class="relative p-6 max-w-sm mx-auto rounded-3xl z-10 overflow-hidden"
    :class="cardClasses"
  >
    <div
      class="bg-center bg-cover bg-no-repeat absolute top-0 left-0 right-0 w-full h-32 z-0"
      :class="currentTheme.bg.primary"
      style="
        background-image: url(https://images.unsplash.com/photo-1534430480872-3498386e7856?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=60);
      "
    />
    <div class="relative flex flex-col justify-center items-center mt-12 z-10">
      <div
        class="rounded-xl p-2 w-24 h-24 mx-auto"
        :class="currentTheme.bg.card"
      >
        <div class="rounded-xl aspect-w-1 aspect-h-1 overflow-hidden">
          <img
            class="absolute object-cover"
            src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=128&w=128&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            alt=""
          />
        </div>
      </div>
      <div class="mt-8 text-center">
        <div class="font-semibold text-xl leading-none mb-2">
          Joseph Joestar
        </div>
        <p class="text-sm leading-8">New York, NY</p>
      </div>
      <div class="flex flex-col md:flex-row w-full justify-between mt-8">
        <AppButton
          class="flex-1 font-medium p-4 leading-none text-sm rounded-lg mb-4 md:mb-0 md:mr-4"
          :buttonStyles="currentTheme.buttons.default"
          >Add to friends</AppButton
        >
        <AppButton
          class="flex-1 font-medium p-4 leading-none text-sm rounded-lg"
          :buttonStyles="currentTheme.buttons.primary"
        >
          View profile</AppButton
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'CardProfile',
  setup() {
    const { currentTheme, currentMode, isLight } = useTheme()

    const cardClasses = computed(() => {
      const shadow = isLight.value ? 'shadow-lg' : ``

      return [currentTheme.value.bg.card, shadow]
    })

    return {
      currentTheme,
      cardClasses,
      currentMode,
    }
  },
})
</script>
