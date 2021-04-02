<template>
  <div class="container px-4 md:px-8 mx-auto mt-12">
    <AppSEO />
    <ShowcaseFooters />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShowcaseFooters from '@/components/Showcase/ShowcaseFooters.vue'

export default defineComponent({
  name: 'Footers',
  components: {
    ShowcaseFooters,
  },
})
</script>
