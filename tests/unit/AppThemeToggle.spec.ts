import { mount } from '@vue/test-utils'
import AppThemeToggle from '@/components/AppThemeToggle.vue'
import store, { key } from '@/store'

test('toggle theme mode', async () => {
  const wrapper = mount(AppThemeToggle, {
    global: {
      stubs: {
        moon: true,
        sun: true,
      },
      plugins: [[store, key]],
    },
  })

  expect(wrapper.attributes('aria-label')).toBe(
    'Click to switch from dark to light mode'
  )

  await wrapper.trigger('click')

  expect(wrapper.attributes('aria-label')).toBe(
    'Click to switch from light to dark mode'
  )
})
