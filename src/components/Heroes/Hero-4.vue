<template>
  <div class="relative overflow-hidden">
    <div class="relative grid lg:grid-cols-5 gap-10 items-center py-12 px-8">
      <div class="lg:col-start-1 lg:col-span-2 lg:row-span-full z-20">
        <h1 class="font-bold leading-none text-4xl lg:text-7xl mb-4">
          Lorem ipsum consectetur
        </h1>
        <p class="text-lg leading-relaxed md:pr-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          vitae enim impedit quae, laudantium et pariatur quibusdam
        </p>
        <div
          class="shadow-xl max-w-sm mt-6 lg:mt-10 p-4 flex flex-row justify-between items-center rounded-lg"
          :class="`${currentTheme.bg.card}`"
        >
          <div class="relative flex-1 flex flex-row w-full">
            <label class="w-full pr-28">
              <span class="sr-only">Email address</span>
              <input
                type="text"
                placeholder="Email address"
                class="w-full text-gray-900 placeholder-gray-700 border-0"
              />
            </label>
            <AppButton
              class="absolute top-0 right-0 font-medium p-2 text-center w-28 transition duration-200"
              :buttonStyles="currentTheme.buttons.primary"
              >Register
            </AppButton>
          </div>
        </div>
      </div>
      <div class="lg:col-start-2 lg:col-span-full lg:row-span-full z-10">
        <div class="aspect-w-16 aspect-h-10 rounded-lg overflow-hidden">
          <div
            class="hidden lg:block absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r w-full h-full z-20"
            :class="[
              currentTheme.gradients.bgFade.from,
              currentTheme.gradients.bgFade.to,
            ]"
          />
          <div
            class="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-no-repeat bg-center z-10"
            style="
              background-image: url(https://images.unsplash.com/photo-1465635290539-cac59213cba3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=60);
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'HeroFour',
  setup() {
    const { currentTheme, currentMode } = useTheme()

    const buttonClasses = computed(() => {
      const { bg, text, hoverBg } = currentTheme.value.buttons.primary

      return [bg, text, hoverBg]
    })

    return {
      currentMode,
      currentTheme,
      buttonClasses,
    }
  },
})
</script>
