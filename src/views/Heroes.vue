<template>
  <div class="mx-auto px-4 md:px-8 mt-12" style="max-width: 1920px">
    <AppSEO />
    <ShowcaseHeroes />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShowcaseHeroes from '@/components/Showcase/ShowcaseHeroes.vue'

export default defineComponent({
  name: 'Heroes',
  components: {
    ShowcaseHeroes,
  },
})
</script>
