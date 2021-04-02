import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import storage from '@/utils/storage'

export interface State {
  isDarkMode: boolean
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol('taillow')

const localStore = storage.getItem('taillow-store')
const defaultState: State = localStore
  ? localStore
  : {
      isDarkMode: true,
    }

const saveState = (store: Store<State>) => {
  store.subscribe((_, state: State) => {
    storage.setItem('taillow-store', state)
  })
}

export function useStore() {
  return baseUseStore(key)
}

const store = createStore<State>({
  state: defaultState,
  getters: {
    currentMode(state) {
      return state.isDarkMode ? 'dark' : 'light'
    },
    nextMode(state) {
      return state.isDarkMode ? 'light' : 'dark'
    },
  },
  mutations: {
    toggleTheme(state) {
      state.isDarkMode = !state.isDarkMode
    },
  },
  actions: {
    toggleTheme(context) {
      context.commit('toggleTheme')
    },
  },
  modules: {},
  plugins: [saveState],
})

export default store
