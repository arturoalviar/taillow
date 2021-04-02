<template>
  <div
    class="app-wrapper min-h-full grid grid-cols-1 bg-white dark:bg-gray-900 dark:text-white"
  >
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
})
</script>

<style>
.app-wrapper {
  grid-template-rows: auto 1fr auto;
}
</style>
