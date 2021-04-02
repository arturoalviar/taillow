<template>
  <div class="container px-4 md:px-8 mx-auto mt-12">
    <AppSEO />
    <ShowcaseSkeletons />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShowcaseSkeletons from '@/components/Showcase/ShowcaseSkeletons.vue'

export default defineComponent({
  name: 'Skeletons',
  components: {
    ShowcaseSkeletons,
  },
})
</script>
