<template>
  <div class="py-10" :class="bgGradient">
    <div class="relative max-w-xs mx-auto" :class="cardClasses">
      <div class="grid p-4 rounded-3xl" :class="currentTheme.bg.card">
        <div class="flex flex-col justify-center items-center">
          <div
            class="rounded-full w-20 h-20 mt-4 mb-2 overflow-hidden"
            :class="currentTheme.bg.primary"
          >
            <img
              class="w-20 h-20 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=128&w=128&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              alt=""
            />
          </div>
          <div class="font-bold text-xl">Gabi Braun</div>
          <p>Product Designer</p>
        </div>
        <div
          class="text-gray-900 p-6 mt-6 rounded-xl w-full"
          :class="gradients"
        >
          <div class="opacity-75">
            <VisaCC class="w-8 h-8" />
          </div>
          <p class="font-medium mt-6 mb-2 text-xl">$ 11,313.04</p>
          <p>**** **** **** 7516</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import VisaCC from '@/assets/icons/cc-visa.svg?inline'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'CardWallet',
  components: {
    VisaCC,
  },
  setup() {
    const { currentTheme, currentMode } = useTheme()

    const gradients = computed(() => {
      const { from, to, direction } = currentTheme.value.gradients.main

      return [direction, from, to]
    })

    const cardClasses = computed(() => {
      return `${currentTheme.value.rings.bg} ring-8 ring-offset-0 ring-opacity-20 rounded-3xl`
    })

    const bgGradient = computed(() => {
      const { from, to, direction } = currentTheme.value.gradients.bg

      return [direction, from, to]
    })

    return {
      currentTheme,
      cardClasses,
      currentMode,
      bgGradient,
      gradients,
    }
  },
})
</script>
