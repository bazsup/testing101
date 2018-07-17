import React from 'react'
import { shallow } from 'enzyme'
import ToDoList from '../ToDoList'
import ToDoItem from '../TodoItem'
import sinon from 'sinon'

const mockItem = (overrides) => ({
  id: 1,
  title: 'test',
  complete: false,
  ...overrides
})

describe('<ToDoItem />', () => {
  it('match snapshot 1 item status pending', () => {

  })

  it('match snapshot 1 item status complete', () => {
    
  })

  it('renders the title', () => {
    
  })

  it('renders a check mark when complete', () => {
    
  })

  it('renders a bullet when not complete', () => {
    
  })

  it('calls onCompleteChange handler with the right arguments when clicked', () => {
    
  })
})

describe('<ToDoList />', () => {
  it('renders the entire list of items', () => {
    
  })
})

describe('<ToDoList />', () => {
  it('renders the entire list of items', () => {
    
  })
})