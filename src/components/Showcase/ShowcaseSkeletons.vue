<template>
  <div class="relative">
    <ShowcaseItem>
      <SkeletonVideoCard />
    </ShowcaseItem>
    <ShowcaseItem>
      <SkeletonListItem />
    </ShowcaseItem>
    <ShowcaseItem>
      <SkeletonProfileCard />
    </ShowcaseItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ShowcaseItem from './ShowcaseItem.vue'
import SkeletonVideoCard from '@/components/Skeletons/SkeletonVideoCard.vue'
import SkeletonListItem from '@/components/Skeletons/SkeletonListItem.vue'
import SkeletonProfileCard from '@/components/Skeletons/SkeletonProfileCard.vue'

export default defineComponent({
  name: 'ShowcaseSkeletons',
  components: {
    ShowcaseItem,
    SkeletonVideoCard,
    SkeletonListItem,
    SkeletonProfileCard,
  },
})
</script>
