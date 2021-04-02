import { createApp } from 'vue'
import App from './App.vue'
import Toast from 'vue-toastification'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'

import AppButton from '@/components/AppButton.vue'
import AppSEO from '@/components/AppSEO.vue'
import Logo from '@/assets/logo.svg?inline'
import LogoWithText from '@/assets/logo-text.svg?inline'

import './registerServiceWorker'
import router from './router'
import store, { key } from './store'

import 'vue-toastification/dist/index.css'
import '@fontsource/maven-pro/400.css'
import '@fontsource/maven-pro/500.css'
import '@fontsource/maven-pro/700.css'
import '@fontsource/maven-pro/900.css'
import './styles/index.css'

createApp(App)
  .use(store, key)
  .use(router)
  .use(Toast)
  .use(VueClipboard)
  .component('AppButton', AppButton)
  .component('AppLogo', Logo)
  .component('AppLogoText', LogoWithText)
  .component('AppSEO', AppSEO)
  .mount('#app')
