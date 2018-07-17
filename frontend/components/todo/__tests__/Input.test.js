import React from 'react'
import { mount } from 'enzyme'

import IndexPage from '../../../pages/index'

const submit = enzymeNode => {
  enzymeNode.simulate('submit')
}

const setValue = (enzymeNode, value) => {
  enzymeNode.simulate('change', { target: { value } })
  enzymeNode.simulate('blur');
}

const clickAddNewTodo = (dom) => {
  const button = dom.find('.add-todo-button')
  submit(button)
}

const fillInInput = (dom, value) => {
  const input = dom.find('#input-todo')
  setValue(input, value)
}

const mockItem = (overrides) => ({
  id: 1,
  title: 'test',
  complete: false,
  ...overrides
})

describe('Input todo', () => {
  it('enter todo should show in TodoList ', () => {
    
  })
})