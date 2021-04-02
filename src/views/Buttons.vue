<template>
  <div class="container px-4 md:px-8 mx-auto mt-12">
    <AppSEO />
    <ShowcaseButtons />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShowcaseButtons from '@/components/Showcase/ShowcaseButtons.vue'

export default defineComponent({
  name: 'Buttons',
  components: {
    ShowcaseButtons,
  },
})
</script>
