<template>
  <teleport to="head" :disabled="false">
    <meta name="description" :content="description" />
    <meta property="og:description" :content="description" />
    <meta property="og:type" content="website" />
    <meta property="og:title" :content="pageTitle" />
    <meta property="og:description" :content="description" />
    <meta property="og:url" :content="url" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="@arturoalviar" />
    <meta name="twitter:url" :content="url" />
    <meta name="twitter:title" :content="pageTitle" />
    <meta name="twitter:description" :content="description" />
  </teleport>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'AppMeta',
  props: {
    description: {
      type: String,
      default:
        'Taillow is a collection of responsive and accessible components.',
    },
  },
  setup() {
    const route = useRoute()
    const path = computed(() => route.path)

    const pageTitle = computed(() => {
      return route.meta.title ? `${route.meta.title} | Taillow` : 'Taillow'
    })

    const url = computed(() => {
      return `https://taillow.netlify.app${path.value}`
    })

    return {
      pageTitle,
      url,
    }
  },
})
</script>
