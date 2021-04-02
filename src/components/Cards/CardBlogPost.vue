<template>
  <div
    class="relative max-w-xs mx-auto overflow-hidden rounded-3xl"
    :class="[cardClasses, cardBg]"
  >
    <div>
      <div
        class="relative aspect-w-16 aspect-h-12 rounded-bl-3xl rounded-br-3xl overflow-hidden"
      >
        <button
          class="bg-gray-100 absolute top-0 left-0 mt-4 ml-4 rounded-lg shadow w-10 h-10 z-10"
          aria-label="Save blog post"
        >
          <HeartIcon
            class="w-5 h-5 mx-auto stroke-current"
            :class="currentTheme.text.primary"
          />
        </button>
        <img
          class="absolute w-full top-0 left-0 right-0 object-cover"
          :class="currentTheme.bg.primary"
          alt="Image of Temple of Kukulcán in Chichén Itzá, Mérida, Mexico"
          src="https://images.unsplash.com/photo-1518638150340-f706e86654de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div class="p-6">
        <div class="flex flex-row mb-4 text-sm">
          <div class="mr-4">{{ date }}</div>
          <div>20 comments</div>
        </div>
        <h2 class="font-bold">
          Lorem ipsum dolor sit amet. Dicta laborum repellat qui incidunt
        </h2>
        <div
          class="flex flex-row items-center border-t border-opacity-50 mt-4 pt-4"
        >
          <div class="flex flex-row mr-4">
            <div
              class="border-2 rounded-full w-6 h-6"
              :class="[currentTheme.bg.primary, currentTheme.borders.card]"
            />
            <div
              class="border-2 rounded-full w-6 h-6 -ml-2"
              :class="[currentTheme.bg.primary, currentTheme.borders.card]"
            />
            <div
              class="border-2 rounded-full w-6 h-6 -ml-2"
              :class="[currentTheme.bg.primary, currentTheme.borders.card]"
            />
            <div
              class="border-2 rounded-full w-6 h-6 -ml-2"
              :class="[currentTheme.bg.primary, currentTheme.borders.card]"
            />
          </div>
          <div class="text-sm">4 friends liked this</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import HeartIcon from '@/assets/icons/heart.svg?inline'
import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'CardBlogPost',
  components: {
    HeartIcon,
  },
  setup() {
    const { currentTheme, currentMode, isLight } = useTheme()

    const cardClasses = computed(() => {
      const shadow = isLight.value ? 'shadow-xl' : ''

      return `${shadow} rounded-3xl`
    })

    const cardBg = computed(() => {
      return isLight.value
        ? currentTheme.value.bg.main
        : currentTheme.value.bg.card
    })

    const date = new Intl.DateTimeFormat('en-GB', {
      month: 'long',
      day: 'numeric',
    }).format(new Date())

    return {
      currentTheme,
      cardClasses,
      currentMode,
      cardBg,
      date,
    }
  },
})
</script>
