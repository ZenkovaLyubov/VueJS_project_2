import { mount } from "@vue/test-utils"
import CalcFunc from '../../src/components/CalcFunc.vue'

// describe('Calculator testing', () => {
//   test('Test first operator', () => {
//     const wrapper = mount(CalcFunc)
//     const op1Input = wrapper.find('input[name="op1"]')
//     op1Input.element.value = 1
//     op1Input.trigger('input')
//     expect(wrapper.vm.op1).toBe(1)
//   })
// })
describe('Calculator testing', () => {
  test('Test first operator', () => {
    const wrapper = mount(CalcFunc)
    const op1Input = wrapper.find('input[name="op1"]')

    // op1Input.element.value = 1
    // op1Input.trigger('input')

    op1Input.setValue(1)

    expect(wrapper.vm.op1).toBe(1) // this.op1
  })

  test('Test second operator', () => {
    const wrapper = mount(CalcFunc)
    const op2Input = wrapper.find('input[name="op2"]')

    // op1Input.element.value = 1
    // op1Input.trigger('input')

    op2Input.setValue(2)

    expect(wrapper.vm.op2).toBe(2) // this.op1
  })

  test('Test for string value', () => {
    const wrapper = mount(CalcFunc)
    const op1Input = wrapper.find('input[name="op1"]')
    const op2Input = wrapper.find('input[name="op2"]')

    op1Input.setValue('a')
    op2Input.setValue('b')

    expect(wrapper.vm.op1).toBe('')
    expect(wrapper.vm.op2).toBe('')
  })

  test('Test for float value', () => {
    const wrapper = mount(CalcFunc)
    const op1Input = wrapper.find('input[name="op1"]')
    const op2Input = wrapper.find('input[name="op2"]')

    op1Input.setValue(2.3)
    op2Input.setValue(3.2)

    expect(wrapper.vm.op1).toBe(2.3)
    expect(wrapper.vm.op2).toBe(3.2)
  })

  test('Test sum', () => {
    const wrapper = mount(CalcFunc)
    const op1Input = wrapper.find('input[name=op1]')
    const op2Input = wrapper.find('input[name=op2]')
    const sumButton = wrapper.find('button[name="+"]')

    op1Input.setValue(1)
    op2Input.setValue(2)
    sumButton.trigger('click')

    expect(wrapper.vm.result).toBe(3) // this.op1
  })

  test('Test div', () => {
    const wrapper = mount(CalcFunc)
    const op1Input = wrapper.find('input[name=op1]')
    const op2Input = wrapper.find('input[name=op2]')
    const divButton = wrapper.find('button[name="/"]')

    op1Input.setValue(6)
    op2Input.setValue(2)
    divButton.trigger('click')

    expect(wrapper.vm.result).toBe(3) // this.op1
  })

  test('Test sub', () => {
    const wrapper = mount(CalcFunc)
    const op1Input = wrapper.find('input[name=op1]')
    const op2Input = wrapper.find('input[name=op2]')
    const subButton = wrapper.find('button[name="-"]')

    op1Input.setValue(6)
    op2Input.setValue(2)
    subButton.trigger('click')

    expect(wrapper.vm.result).toBe(4) // this.op1
  })

  test('Test mult', () => {
    const wrapper = mount(CalcFunc)
    const op1Input = wrapper.find('input[name=op1]')
    const op2Input = wrapper.find('input[name=op2]')
    const multButton = wrapper.find('button[name="*"]')

    op1Input.setValue(6)
    op2Input.setValue(2)
    multButton.trigger('click')

    expect(wrapper.vm.result).toBe(12) // this.op1
  })

  test('Test pow', () => {
    const wrapper = mount(CalcFunc)
    const op1Input = wrapper.find('input[name=op1]')
    const op2Input = wrapper.find('input[name=op2]')
    const powButton = wrapper.find('button[name="^"]')

    op1Input.setValue(3)
    op2Input.setValue(2)
    powButton.trigger('click')

    expect(wrapper.vm.result).toBe(9)
  })

  test('Test trunc', () => {
    const wrapper = mount(CalcFunc)
    const op1Input = wrapper.find('input[name=op1]')
    const op2Input = wrapper.find('input[name=op2]')
    const truncButton = wrapper.find('button[name="trunc"]')

    op1Input.setValue(9)
    op2Input.setValue(2)
    truncButton.trigger('click')

    expect(wrapper.vm.result).toBe(4)
  })

  test('Test show keybord', () => {
    const wrapper = mount(CalcFunc)
    const checkboxkeyboardShow = wrapper.find('input[id=keyboardShow]')

    checkboxkeyboardShow.trigger('click')
    let j=0
    for (let i = 0; i < 11; i++) {
      if (wrapper.find(`button[id="${i}"]`)) {
        j++
      }
    }
    expect(j).toBe(11)
  })

  test('Test keybord', async () => {
    const wrapper = mount(CalcFunc)
    const checkboxkeyboardShow = wrapper.find('input[id="keyboardShow"]')
    await checkboxkeyboardShow.setChecked()

    const button1 = wrapper.find('button[id="2"]')
    button1.trigger('click')
    const inputOp2 = wrapper.find('input[id="operand2"]')
    inputOp2.setChecked()
    const button2 = wrapper.find('button[id="3"]')
    button2.trigger('click')

    expect(wrapper.vm.op1).toBe(1)
    expect(wrapper.vm.op2).toBe(2)
  })

  test('Test delete on the keybord (op1)', async () => {
    const wrapper = mount(CalcFunc)
    const checkboxkeyboardShow = wrapper.find('input[id="keyboardShow"]')
    await checkboxkeyboardShow.setChecked()

    const button1 = wrapper.find('button[id="2"]')
    button1.trigger('click')
    button1.trigger('click')
    expect(wrapper.vm.op1).toBe(11)

    const button2 = wrapper.find('button[id="11"]')
    button2.trigger('click')

    expect(wrapper.vm.op1).toBe(1)
  })

  test('Test delete on the keybord (op2)', async () => {
    const wrapper = mount(CalcFunc)
    const checkboxkeyboardShow = wrapper.find('input[id="keyboardShow"]')
    await checkboxkeyboardShow.setChecked()

    const inputOp2 = wrapper.find('input[id="operand2"]')
    inputOp2.setChecked()
    const button2 = wrapper.find('button[id="3"]')
    button2.trigger('click')
    button2.trigger('click')

    expect(wrapper.vm.op2).toBe(22)

    const buttonDel = wrapper.find('button[id="11"]')
    buttonDel.trigger('click')
    buttonDel.trigger('click')

    expect(wrapper.vm.op1).toBe(0)
  })
})
