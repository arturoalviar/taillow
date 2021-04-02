<template>
  <pre
    class="whitespace-pre m-0 p-0"
  ><code ref="codeBlock" class="prismjs language-markup block p-2 md:p-6 overflow-x-auto">{{ codeString }}</code></pre>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUpdated } from 'vue'
import Prism from 'prismjs'

import '@/styles/theme.css'

export default defineComponent({
  name: 'AppCodeBlock',
  props: {
    codeString: {
      type: String,
      required: true,
    },
  },
  setup() {
    const codeBlock = ref<HTMLElement | null>(null)

    function applyHighlight() {
      if (codeBlock.value) {
        Prism.highlightElement(codeBlock.value)
      }
    }

    onMounted(() => {
      applyHighlight()
    })

    onUpdated(() => {
      applyHighlight()
    })

    return {
      codeBlock,
    }
  },
})
</script>
