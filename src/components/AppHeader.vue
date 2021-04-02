<template>
  <header class="flex flex-col justify-center h-20">
    <div
      class="container px-4 md:px-8 mx-auto flex flex-row justify-between items-center"
    >
      <div class="logo">
        <router-link class="py-2" to="/" aria-label="Go to Taillow homepage">
          <AppLogoText class="w-24 md:w-32 text-cyan-400" />
        </router-link>
      </div>
      <div id="nav" class="flex flex-row items-center">
        <router-link
          class="hidden md:inline-flex text-sm font-bold p-2 mr-2 lg:mr-4"
          to="/components"
          >Components</router-link
        >
        <a
          class="text-sm font-bold p-2 mr-2 lg:mr-4"
          href="https://github.com/arturoalviar/taillow"
          target="_blank"
          rel="noopener"
          >Github</a
        >
        <AppThemeToggle class="p-2" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AppThemeToggle from '@/components/AppThemeToggle.vue'

export default defineComponent({
  name: 'AppHeader',
  components: {
    AppThemeToggle,
  },
})
</script>
