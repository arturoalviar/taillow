<template>
  <section ref="root" class="mb-24 last:mb-8" :class="rootClasses">
    <div class="shadow-xl">
      <header class="relative p-8" :class="headerClasses">
        <div
          class="flex flex-col md:flex-row md:justify-between md:content-center w-full"
        >
          <ShowcaseItemNav
            @click="updateView"
            @copy="handleCopyEvent"
            :currentView="currentView"
          />
          <div
            class="flex flex-row items-center justify-between md:justify-center"
          >
            <label for="" class="mr-4 text-sm xl:text-base">Select theme</label>
            <select
              v-model="currentMode"
              aria-label="Select local theme"
              class="border-opacity-50 w-32 lg:w-48 pl-4 pr-8 py-1 text-sm xl:text-base focus:border-transparent focus:ring-1"
              :class="selectClasses"
            >
              <option
                v-for="theme in Object.keys(themeOptions)"
                :key="theme + 'option'"
                :value="theme"
              >
                {{ themeOptions[theme].name }}
              </option>
            </select>
          </div>
        </div>
      </header>
      <div :class="itemSpacing">
        <div
          v-show="currentView === 'preview'"
          class="preview"
          :data-theme="currentMode"
        >
          <slot />
        </div>
        <div
          v-show="currentView === 'code'"
          class="code-editor"
          :class="{
            'px-4 pb-6 md:px-8 md:pb-10 mt-10': noSpacing,
          }"
          :data-theme="currentMode"
        >
          <AppCodeBlock :codeString="htmlString" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {
  ref,
  provide,
  readonly,
  computed,
  onMounted,
  onUpdated,
  watch,
  defineComponent,
} from 'vue'
import { useToast } from 'vue-toastification'
import { toClipboard } from '@soerenmartius/vue3-clipboard'

import ShowcaseItemNav from './ShowcaseItemNav.vue'
import AppCodeBlock from '@/components/AppCodeBlock.vue'

import { useStore } from '@/store'

import themeOptions from '@/utils/themes'
import beautifyHTML from '@/utils/beautifyHTML'

export default defineComponent({
  name: 'ShowcaseItem',
  components: {
    AppCodeBlock,
    ShowcaseItemNav,
  },
  props: {
    noSpacing: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    // init toast
    const toast = useToast()
    const store = useStore()

    const currentMode = ref(store.getters.currentMode)

    // handle view
    const currentView = ref('preview')
    const updateView = (newView: string) => {
      currentView.value = newView
    }

    // template refs
    const root = ref<HTMLElement | null>(null)
    //  preview template code ref
    const htmlString = ref<string>('')

    const handleCopyEvent = () => {
      const value = htmlString.value

      if (value) {
        toClipboard(value)
        toast.success('Code copied', {
          timeout: 2000,
          toastClassName: 'bg-green-500 dark:bg-green-600 text-green-50',
        })
      } else {
        toast.error('Failed to copy code', {
          timeout: 2000,
          toastClassName: 'bg-red-500 dark:bg-red-600 text-red-50',
        })
      }
    }

    onMounted(() => {
      if (root.value) {
        const previewHTML = root.value.querySelector('.preview')

        if (previewHTML) {
          htmlString.value = beautifyHTML(previewHTML.innerHTML)
        }
      }
    })

    // update classes based on selected theme
    onUpdated(() => {
      const el = root.value

      if (el) {
        const previewHTML = el.querySelector('.preview')

        if (previewHTML) {
          htmlString.value = beautifyHTML(previewHTML.innerHTML)
        }
      }
    })

    const headerClasses = computed(() => {
      const theme = themeOptions[currentMode.value]

      return [theme.bg.header]
    })

    const rootClasses = computed(() => {
      const { bg, text } = themeOptions[currentMode.value]

      return [bg.main, text.main]
    })

    const selectClasses = computed(() => {
      const { input, borders, rings } = themeOptions[currentMode.value]
      return [input.bg, borders.text, rings.focusPrimary]
    })

    const itemSpacing = computed(() => {
      return props.noSpacing ? 'p-0 m-0' : 'px-4 pb-6 md:px-8 md:pb-10 mt-10'
    })

    provide('currentMode', readonly(currentMode))

    watch(
      () => store.state.isDarkMode,
      () => {
        if (currentMode.value === 'light' || currentMode.value === 'dark') {
          currentMode.value = store.getters.currentMode
        }
      }
    )

    return {
      root,
      currentView,
      updateView,
      currentMode,
      headerClasses,
      rootClasses,
      selectClasses,
      itemSpacing,
      handleCopyEvent,
      htmlString,
      themeOptions,
    }
  },
})
</script>
