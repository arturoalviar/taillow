import { mount } from '@vue/test-utils'
import AppFooter from '@/components/AppFooter.vue'

test('render footer', () => {
  const wrapper = mount(AppFooter)

  expect(wrapper.html()).toContain('Arturo')
})
