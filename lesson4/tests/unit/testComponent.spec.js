import { mount } from '@vue/test-utils'
import TestComponent from './TestComponent.vue'

describe('TestComponent testing', () => {
  test('Test props', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        message: 'test message'
      }
    })
    // expect(wrapper.text()).toEqual('My text test message')
    // expect(wrapper.html()).toEqual('<div class="my-class">My text test message</div>')
    expect(wrapper.html()).toContain('My text test message')
  })
})
