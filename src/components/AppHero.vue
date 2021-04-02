<template>
  <div class="pt-4 md:pt-8 lg:pt-0 flex flex-col justify-center lg:h-full">
    <div class="container px-4 md:px-8 mx-auto">
      <div class="grid lg:grid-cols-3 lg:items-center gap–10 lg:gap-6">
        <div
          class="md:flex md:flex-col md:items-center md:max-w-md md:mx-auto lg:items-start lg:mx-0 lg:col-span-1"
        >
          <h1 class="font-bold text-4xl md:text-5xl leading-tight mb-4">
            Harness the power of TailwindCSS
          </h1>
          <h2 class="leading-8 text-xl md:text-2xl mb-4 md:mb-6 lg:mb-10">
            Taillow is a collection of responsive and accessible components.
          </h2>
          <router-link
            to="/components"
            class="bg-cyan-400 hover:bg-cyan-500 text-teal-900 inline-block py-3 px-6 font-bold transition duration-200"
          >
            View components
          </router-link>
        </div>
        <div class="mt-12 md:px-12 lg:px-16 xl:px-0 md:mt-6 lg:col-span-2">
          <Hero class="text-cyan-500 dark:text-gray-800" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Hero from '@/assets/heroes/home-hero.svg?inline'

export default defineComponent({
  name: 'AppHero',
  components: {
    Hero,
  },
})
</script>
