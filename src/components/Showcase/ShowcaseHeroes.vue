<template>
  <div class="relative">
    <ShowcaseItem noSpacing>
      <HeroOne />
    </ShowcaseItem>
    <ShowcaseItem noSpacing>
      <HeroTwo />
    </ShowcaseItem>
    <ShowcaseItem noSpacing>
      <HeroThree />
    </ShowcaseItem>
    <ShowcaseItem noSpacing>
      <HeroFour />
    </ShowcaseItem>
    <ShowcaseItem noSpacing>
      <HeroTextGradient />
    </ShowcaseItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ShowcaseItem from './ShowcaseItem.vue'
import HeroOne from '@/components/Heroes/Hero-1.vue'
import HeroTwo from '@/components/Heroes/Hero-2.vue'
import HeroThree from '@/components/Heroes/Hero-3.vue'
import HeroFour from '@/components/Heroes/Hero-4.vue'
import HeroTextGradient from '@/components/Heroes/HeroTextGradient.vue'

export default defineComponent({
  name: 'ShowcaseFooters',
  components: {
    ShowcaseItem,
    HeroOne,
    HeroTwo,
    HeroThree,
    HeroFour,
    HeroTextGradient,
  },
})
</script>
