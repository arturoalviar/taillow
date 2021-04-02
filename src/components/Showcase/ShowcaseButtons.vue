<template>
  <div class="relative">
    <ShowcaseItem>
      <ButtonSolid />
    </ShowcaseItem>
    <ShowcaseItem>
      <ButtonGhost />
    </ShowcaseItem>
    <ShowcaseItem>
      <ButtonHamburger />
    </ShowcaseItem>
    <ShowcaseItem>
      <ButtonGradient />
    </ShowcaseItem>
    <ShowcaseItem>
      <ButtonGradientTransition />
    </ShowcaseItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ShowcaseItem from './ShowcaseItem.vue'
import ButtonSolid from '@/components/Buttons/ButtonSolid.vue'
import ButtonGhost from '@/components/Buttons/ButtonGhost.vue'
import ButtonHamburger from '@/components/Buttons/ButtonHamburger.vue'
import ButtonGradient from '@/components/Buttons/ButtonGradient.vue'
import ButtonGradientTransition from '@/components/Buttons/ButtonGradientTransition.vue'

export default defineComponent({
  name: 'ShowcaseButtons',
  components: {
    ShowcaseItem,
    ButtonSolid,
    ButtonGhost,
    ButtonHamburger,
    ButtonGradient,
    ButtonGradientTransition,
  },
})
</script>
