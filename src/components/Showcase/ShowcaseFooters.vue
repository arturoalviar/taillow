<template>
  <div class="relative">
    <ShowcaseItem>
      <FooterOne />
    </ShowcaseItem>
    <ShowcaseItem>
      <FooterTwo />
    </ShowcaseItem>
    <ShowcaseItem>
      <FooterThree />
    </ShowcaseItem>
    <ShowcaseItem>
      <FooterFour />
    </ShowcaseItem>
    <ShowcaseItem>
      <FooterFive />
    </ShowcaseItem>
    <ShowcaseItem>
      <FooterSix />
    </ShowcaseItem>
    <ShowcaseItem>
      <FooterSeven />
    </ShowcaseItem>
    <ShowcaseItem>
      <FooterEight />
    </ShowcaseItem>
    <ShowcaseItem>
      <FooterNine />
    </ShowcaseItem>
    <ShowcaseItem>
      <FooterTen />
    </ShowcaseItem>
    <ShowcaseItem>
      <FooterEleven />
    </ShowcaseItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ShowcaseItem from './ShowcaseItem.vue'
import FooterOne from '@/components/Footers/Footer-1.vue'
import FooterTwo from '@/components/Footers/Footer-2.vue'
import FooterThree from '@/components/Footers/Footer-3.vue'
import FooterFour from '@/components/Footers/Footer-4.vue'
import FooterFive from '@/components/Footers/Footer-5.vue'
import FooterSix from '@/components/Footers/Footer-6.vue'
import FooterSeven from '@/components/Footers/Footer-7.vue'
import FooterEight from '@/components/Footers/Footer-8.vue'
import FooterNine from '@/components/Footers/Footer-9.vue'
import FooterTen from '@/components/Footers/Footer-10.vue'
import FooterEleven from '@/components/Footers/Footer-11.vue'

export default defineComponent({
  name: 'ShowcaseFooters',
  components: {
    ShowcaseItem,
    FooterOne,
    FooterTwo,
    FooterThree,
    FooterFour,
    FooterFive,
    FooterSix,
    FooterSeven,
    FooterEight,
    FooterNine,
    FooterTen,
    FooterEleven,
  },
})
</script>
