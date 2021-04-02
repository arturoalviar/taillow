import { mount } from '@vue/test-utils'
import Toast from 'vue-toastification'
import store, { key } from '@/store'
import AppButton from '@/components/AppButton.vue'
import ShowcaseItem from '@/components/Showcase/ShowcaseItem.vue'

const ToastKey = Symbol('VueToastification')

describe('ShowcaseItem Component', () => {
  test('change local theme', async () => {
    const wrapper = mount(ShowcaseItem, {
      global: {
        components: {
          AppButton,
        },
        stubs: {
          EyeIcon: true,
          CodeIcon: true,
          CopyIcon: true,
        },
        provide: {
          currentMode: 'light',
        },
        plugins: [
          [Toast, ToastKey],
          [store, key],
        ],
        renderStubDefaultSlot: true,
      },
    })
    const slotWrapper = wrapper.get('.preview')

    await wrapper.find('select').setValue('dark')

    expect(slotWrapper.attributes('data-theme')).toBe('dark')
    expect(wrapper.classes()).toContain('bg-gray-900')
  })
})
