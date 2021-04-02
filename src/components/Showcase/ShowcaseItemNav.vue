<template>
  <div
    class="flex flex-row justify-center md:justify-start mb-6 md:mb-0 w-full md:w-auto"
  >
    <div class="mr-6 md:mr-4">
      <AppButton
        class="rounded-full flex flex-row items-center justify-center p-2 font-medium text-sm xl:text-base"
        :class="{
          [currentTheme.buttons.primary.bg]: currentView === 'preview',
          [currentTheme.buttons.primary.text]: currentView === 'preview',
        }"
        @click="$emit('click', 'preview')"
        :buttonStyles="buttonStyles"
      >
        <EyeIcon class="w-4 h-4 mr-2" />
        Preview
      </AppButton>
    </div>
    <div class="mr-6 md:mr-4">
      <AppButton
        class="rounded-full flex flex-row items-center justify-center p-2 font-medium text-sm xl:text-base"
        :class="{
          [currentTheme.buttons.primary.bg]: currentView === 'code',
          [currentTheme.buttons.primary.text]: currentView === 'code',
        }"
        @click="$emit('click', 'code')"
        :buttonStyles="buttonStyles"
      >
        <CodeIcon class="w-4 h-4 mr-2" />
        Code
      </AppButton>
    </div>
    <div>
      <AppButton
        class="rounded-full flex flex-row items-center justify-center p-2 font-medium text-sm xl:text-base"
        @click="$emit('copy')"
        :buttonStyles="buttonStyles"
      >
        <CopyIcon class="w-4 h-4 mr-2" />
        Copy
      </AppButton>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import CodeIcon from '@/assets/icons/code.svg?inline'
import CopyIcon from '@/assets/icons/copy.svg?inline'
import EyeIcon from '@/assets/icons/eye.svg?inline'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'ShowcaseItemNav',
  components: {
    CodeIcon,
    CopyIcon,
    EyeIcon,
  },
  props: {
    currentView: {
      type: String,
      required: true,
    },
  },
  emits: ['copy', 'click'],
  setup() {
    const { currentTheme } = useTheme()
    const buttonStyles = computed(() => {
      return {
        bg: 'bg-transparent',
        text: 'text-current',
        hoverBg: currentTheme.value.buttons.primary.hoverBg,
        hoverText: currentTheme.value.buttons.primary.hoverText,
      }
    })

    return {
      buttonStyles,
      currentTheme,
    }
  },
})
</script>
