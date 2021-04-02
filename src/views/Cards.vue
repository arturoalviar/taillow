<template>
  <div class="container px-4 md:px-8 mx-auto mt-12">
    <AppSEO />
    <CardShowcase />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardShowcase from '@/components/Showcase/ShowcaseCards.vue'

export default defineComponent({
  name: 'Cards',
  components: {
    CardShowcase,
  },
})
</script>
