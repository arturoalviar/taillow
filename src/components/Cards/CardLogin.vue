<template>
  <div
    class="relative max-w-sm mx-auto p-6 mb-6 rounded-xl"
    :class="cardClasses"
  >
    <div class="pt-4 pb-8">
      <h2 class="font-bold leading-none text-2xl mb-10">Welcome back!</h2>
      <label class="block mb-6">
        <span class="sr-only">Email address</span>
        <input
          type="email"
          class="bg-transparent block w-full p-2 border-0 border-b-2 border-opacity-40 focus:ring-0 focus:border-opacity-100 placeholder-current transition-colors duration-200"
          :class="inputClasses"
          placeholder="email address"
        />
      </label>
      <label class="block">
        <span class="sr-only">Password</span>
        <div class="relative">
          <input
            v-model="password"
            id="card-login-password"
            :type="showPassword ? 'text' : 'password'"
            class="bg-transparent block w-full p-2 pr-12 border-0 border-b-2 border-opacity-40 focus:ring-0 focus:border-opacity-100 placeholder-current transition-colors duration-200"
            :class="inputClasses"
            placeholder="password"
          />
          <button
            class="absolute right-0 top-0 h-full w-10 z-10 transition-opacity"
            :class="`opacity-${
              password.length ? '100' : '0 pointer-events-none'
            }`"
            aria-controls="card-login-password"
            :aria-label="`${showPassword ? 'Hide' : 'Show'} password`"
            :aria-pressed="showPassword"
            @click="togglePassword"
          >
            <EyeIcon
              v-if="showPassword"
              class="absolute w-4 h-4 top-3 right-3 pointer-events-none"
            />
            <EyeHideIcon
              v-else
              class="absolute w-4 h-4 top-3 right-3 pointer-events-none"
            />
          </button>
        </div>
      </label>
      <div class="mt-4">
        <a href="#" class="text-xs font-medium" :class="currentTheme.text.link"
          >Forgot password?</a
        >
      </div>
      <AppButton
        class="absolute -bottom-6 right-6 w-32 h-12 flex items-center justify-center p-4 rounded-lg font-bold"
        :buttonStyles="currentTheme.buttons.primary"
        >Login</AppButton
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, Ref } from 'vue'

import EyeIcon from '../../assets/icons/eye.svg?inline'
import EyeHideIcon from '../../assets/icons/eye-slash.svg?inline'

import useTheme from '@/composables/useTheme'

export default defineComponent({
  name: 'CardLogin',
  components: {
    EyeIcon,
    EyeHideIcon,
  },
  setup() {
    const { currentTheme, currentMode, isLight } = useTheme()
    const password: Ref<string> = ref('')
    const showPassword: Ref<boolean> = ref(false)

    const cardClasses = computed(() => {
      const shadow = isLight ? 'shadow-xl' : ''

      return `${currentTheme.value.bg.card} ${shadow}`
    })

    const inputClasses = computed(() => {
      const { borders } = currentTheme.value

      return [borders.text, borders.focusPrimary]
    })

    const togglePassword = () => {
      showPassword.value = !showPassword.value
    }

    return {
      cardClasses,
      inputClasses,
      currentMode,
      currentTheme,
      password,
      showPassword,
      togglePassword,
    }
  },
})
</script>
