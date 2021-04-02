<template>
  <div class="mt-10 px-4 md:px-8">
    <AppSEO />
    <div class="max-w-lg mx-auto">
      <Hero />
      <div class="mt-12 text-center">
        <h1 class="font-bold text-5xl md:text-6xl mb-8 leading-snug">
          Page not found
        </h1>
        <router-link
          to="/components"
          class="bg-cyan-400 hover:bg-cyan-500 text-teal-900 inline-block py-3 px-6 font-bold transition duration-200"
        >
          Go back to all components
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '@/assets/heroes/404.svg?inline'

export default defineComponent({
  name: 'NotFound',
  components: {
    Hero,
  },
})
</script>
