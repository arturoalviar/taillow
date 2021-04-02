<template>
  <div class="relative">
    <ShowcaseItem>
      <CardLogin />
    </ShowcaseItem>
    <ShowcaseItem>
      <CardSignup />
    </ShowcaseItem>
    <ShowcaseItem>
      <CardStats />
    </ShowcaseItem>
    <ShowcaseItem>
      <CardProfile />
    </ShowcaseItem>
    <ShowcaseItem>
      <CardWeather />
    </ShowcaseItem>
    <ShowcaseItem>
      <CardBlogPost />
    </ShowcaseItem>
    <ShowcaseItem noSpacing>
      <CardWallet />
    </ShowcaseItem>
    <ShowcaseItem>
      <CardGrid />
    </ShowcaseItem>
    <ShowcaseItem>
      <CardProgress />
    </ShowcaseItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ShowcaseItem from './ShowcaseItem.vue'
import CardSignup from '@/components/Cards/CardSignup.vue'
import CardGrid from '@/components/Cards/CardGrid.vue'
import CardWeather from '@/components/Cards/CardWeather.vue'
import CardProfile from '@/components/Cards/CardProfile.vue'
import CardWallet from '@/components/Cards/CardWallet.vue'
import CardBlogPost from '@/components/Cards/CardBlogPost.vue'
import CardLogin from '@/components/Cards/CardLogin.vue'
import CardStats from '@/components/Cards/CardStats.vue'
import CardProgress from '@/components/Cards/CardProgress.vue'

export default defineComponent({
  name: 'ShowcaseCards',
  components: {
    ShowcaseItem,
    CardSignup,
    CardGrid,
    CardWeather,
    CardProfile,
    CardWallet,
    CardBlogPost,
    CardLogin,
    CardStats,
    CardProgress,
  },
})
</script>
