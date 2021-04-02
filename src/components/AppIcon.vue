<template>
  <component :is="icon" class="w-4 h-4" />
</template>

<script lang="ts">
import { defineComponent, VNode } from 'vue'
import facebook from '@/assets/icons/facebook.svg?inline'
import instagram from '@/assets/icons/instagram.svg?inline'
import twitter from '@/assets/icons/twitter.svg?inline'
import arrowRight from '@/assets/icons/arrow-right.svg?inline'

interface Icons {
  [key: string]: VNode
}

const icons: Icons = {
  facebook,
  instagram,
  twitter,
  arrowRight,
}

const Component = defineComponent({
  name: 'AppIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const icon = icons[props.name]

    return {
      icon,
    }
  },
})

export default Component
</script>
