<template>
  <div class="max-w-sm mx-auto p-6 rounded-xl" :class="cardClasses">
    <div>
      <label class="block mb-8">
        <span class="sr-only">Full name</span>
        <div class="relative">
          <UserIcon class="absolute w-4 h-4 top-3 left-3" />
          <input
            type="text"
            class="border-transparent mt-1 pl-12 block w-full rounded-md shadow-sm"
            :class="inputClasses"
            placeholder="Full name"
          />
        </div>
      </label>
      <label class="block mb-8">
        <span class="sr-only">Email address</span>
        <div class="relative">
          <EmailIcon class="absolute w-4 h-4 top-3 left-3" />
          <input
            type="email"
            class="border-transparent mt-1 pl-12 block w-full rounded-md shadow-sm"
            :class="inputClasses"
            placeholder="Email address"
          />
        </div>
      </label>
      <label class="block">
        <span class="sr-only"> Password</span>
        <div class="relative">
          <LockIcon class="absolute w-4 h-4 top-3 left-3" />
          <input
            v-model="password"
            id="card-signup-password"
            :type="showPassword ? 'text' : 'password'"
            class="border-transparent mt-1 px-12 block w-full rounded-md shadow-sm"
            :class="inputClasses"
            placeholder="Password"
          />
          <button
            class="absolute right-0 top-0 h-full w-10 z-10 transition-opacity"
            :class="`opacity-${
              password.length ? '100' : '0 pointer-events-none'
            }`"
            aria-controls="card-signup-password"
            :aria-label="`${showPassword ? 'Hide' : 'Show'} password`"
            :aria-pressed="showPassword"
            @click="togglePassword"
          >
            <EyeIcon
              v-if="showPassword"
              class="absolute w-4 h-4 top-3 left-3 pointer-events-none"
            />
            <EyeHideIcon
              v-else
              class="absolute w-4 h-4 top-3 left-3 pointer-events-none"
            />
          </button>
        </div>
      </label>
      <AppButton
        class="w-full p-4 rounded-lg mt-6 font-bold"
        :buttonStyles="currentTheme.buttons.primary"
        >Create account</AppButton
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, Ref } from 'vue'

import useTheme from '@/composables/useTheme'

import EmailIcon from '../../assets/icons/email.svg?inline'
import EyeIcon from '../../assets/icons/eye.svg?inline'
import EyeHideIcon from '../../assets/icons/eye-slash.svg?inline'
import LockIcon from '../../assets/icons/lock.svg?inline'
import UserIcon from '../../assets/icons/user.svg?inline'

export default defineComponent({
  name: 'CardSignup',
  components: {
    EmailIcon,
    EyeIcon,
    EyeHideIcon,
    LockIcon,
    UserIcon,
  },
  setup() {
    const { currentTheme, currentMode, isLight } = useTheme()
    const password: Ref<string> = ref('')
    const showPassword: Ref<boolean> = ref(false)

    const cardClasses = computed(() => {
      const shadow = isLight.value ? 'shadow-xl' : ''

      return [currentTheme.value.bg.card, shadow]
    })

    const inputClasses = computed(() => {
      const { borders, rings } = currentTheme.value
      const { bg, placeholder } = currentTheme.value.input

      return [bg, placeholder, borders.focusPrimary, rings.focusPrimary]
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
