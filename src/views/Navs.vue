<template>
  <div class="container px-4 md:px-8 mx-auto mt-12">
    <AppSEO />
    <ShowcaseNavs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShowcaseNavs from '@/components/Showcase/ShowcaseNavs.vue'

export default defineComponent({
  name: 'Navs',
  components: {
    ShowcaseNavs,
  },
})
</script>
