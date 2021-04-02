<template>
  <div class="flex flex-row justify-center items-center max-w-sm mx-auto">
    <button
      aria-label="Toggle menu"
      class="relative flex flex-col justify-between w-8 h-6 focus:outline-none"
      @click="handleClick"
    >
      <div
        class="relative rounded-lg bg-current w-8 h-1 transform transition-transform duration-200 ease-in-out"
        :class="topBarStyles"
      />
      <div
        class="relative rounded-lg bg-current w-8 h-1 my-auto transition-opacity duration-200"
        :class="middleBarStyles"
      />
      <div
        class="relative rounded-lg bg-current w-8 h-1 transform transition-transform duration-200 ease-in-out"
        :class="bottomBarStyles"
      />
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ButtonHamburger',
  setup() {
    const isOpen = ref(false)

    const handleClick = () => {
      isOpen.value = !isOpen.value
    }

    const topBarStyles = computed(() => {
      return isOpen.value ? 'rotate-45 translate-y-2.5' : ''
    })

    const middleBarStyles = computed(() => {
      return isOpen.value ? 'opacity-0 h-0' : ''
    })

    const bottomBarStyles = computed(() => {
      return isOpen.value ? '-rotate-45 -translate-y-2.5' : ''
    })

    return {
      isOpen,
      handleClick,
      topBarStyles,
      middleBarStyles,
      bottomBarStyles,
    }
  },
})
</script>
