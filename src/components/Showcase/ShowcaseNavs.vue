<template>
  <div class="relative">
    <ShowcaseItem noSpacing>
      <NavOne />
    </ShowcaseItem>
    <ShowcaseItem noSpacing>
      <NavTwo />
    </ShowcaseItem>
    <ShowcaseItem noSpacing>
      <NavThree />
    </ShowcaseItem>
    <ShowcaseItem>
      <NavSidebarOne />
    </ShowcaseItem>
    <ShowcaseItem>
      <NavSidebarCOne />
    </ShowcaseItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ShowcaseItem from './ShowcaseItem.vue'
import NavOne from '@/components/Navs/Nav-1.vue'
import NavTwo from '@/components/Navs/Nav-2.vue'
import NavThree from '@/components/Navs/Nav-3.vue'
import NavSidebarOne from '@/components/Navs/NavSidebar-1.vue'
import NavSidebarCOne from '@/components/Navs/NavSidebarC-1.vue'

export default defineComponent({
  name: 'ShowcaseNavs',
  components: {
    ShowcaseItem,
    NavOne,
    NavTwo,
    NavThree,
    NavSidebarOne,
    NavSidebarCOne,
  },
})
</script>
