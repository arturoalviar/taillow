<template>
  <div>
    <AppSEO />
    <AppHero />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHero from '@/components/AppHero.vue'

export default defineComponent({
  name: 'Home',
  components: {
    AppHero,
  },
})
</script>
