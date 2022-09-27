import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TestVuex from './TestVuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Test action', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      addData: jest.fn()
    }

    store = new Vuex.Store({
      actions
    })
  })

  test('Test save action', () => {
    const wrapper = mount(TestVuex, {
      store,
      localVue
    })

    const input = wrapper.find('input')
    const button = wrapper.find('button')

    input.setValue('1234')
    button.trigger('click')

    expect(actions.addData).toHaveBeenCalled()
  })
})
