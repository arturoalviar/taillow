<template>
  <ul class="flex flex-row" :class="justify">
    <li v-for="icon in icons" class="mr-4 last:mr-0" :key="icon">
      <a
        href="#"
        class="flex flex-col p-3 rounded-full transition-colors duration-200"
        :class="[currentTheme.text.hoverPrimary, ...linkClasses]"
      >
        <span class="sr-only">Link to {{ icon }}</span>
        <AppIcon :name="icon"
      /></a>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import AppIcon from '@/components/AppIcon.vue'

import { ThemeOption } from '@/types'

const Component = defineComponent({
  name: 'SocialLinks',
  props: {
    currentTheme: {
      type: Object as PropType<ThemeOption>,
      required: true,
    },
    justify: {
      type: String,
      default: 'justify-center lg:justify-end',
    },
    withBorder: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    AppIcon,
  },
  setup(props) {
    const icons = ['facebook', 'instagram', 'twitter']

    const linkClasses = computed(() => {
      return props.withBorder
        ? [
            props.currentTheme.borders.text,
            props.currentTheme.borders.hoverPrimary,
            'border-2 border-opacity-20',
          ]
        : []
    })

    return {
      icons,
      linkClasses,
    }
  },
})

export default Component
</script>
