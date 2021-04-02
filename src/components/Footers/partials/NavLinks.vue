<template>
  <div>
    <div v-if="!omitTitle" class="font-bold mb-6 capitalize">{{ title }}</div>
    <ul :class="navClasses">
      <li
        v-for="(navLink, index) in navLinks"
        :key="`nav-link-${navLink}`"
        :class="{
          ...navLinkItemClasses,
          'mb-2': !isHorizonal,
          'ml-2 mr-2': isHorizonal && index !== navLinks.length - 1,
        }"
      >
        <a href="#" class="hover:opacity-80 transition-opacity">{{
          navLink
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject, PropType, Ref } from 'vue'

import navWords, { navType } from '@/utils/navWords'

import themeOptions from '@/utils/themes'

const Component = defineComponent({
  props: {
    justify: {
      type: String,
      default: 'justify-center',
    },
    align: {
      type: String,
    },
    isHorizonal: {
      type: Boolean,
      default: false,
    },
    omitTitle: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String as PropType<navType>,
      required: true,
    },
  },

  setup(props) {
    const navLinks = navWords[props.title]
    const currentMode = inject('currentMode') as Ref

    const navClasses = computed(() => ({
      'flex flex-row': props.isHorizonal,
      [`${props.justify}`]: true,
      [`${props.align}`]: props.align,
    }))

    const navLinkItemClasses = computed(() => {
      const theme = themeOptions[currentMode.value]

      return {
        'font-bold p-2 mb-0 text-center': props.isHorizonal,
        [`${theme.text.link}`]: true,
      }
    })

    return {
      navLinks,
      navClasses,
      navLinkItemClasses,
    }
  },
})

export default Component
</script>
