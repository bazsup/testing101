import React from 'react'
import TodoList from '../components/todo/TodoList'

export const data = [
  {
    id: 1,
    title: 'Bas',
    complete: false,
  },
  {
    id: 2,
    title: 'Boat',
    complete: true,
  },
  {
    id: 3,
    title: 'Mackie',
    complete: true,
  },
]

class IndexPage extends React.Component {
  state = {
    items: data,
    input: ''
  }

  onChange = (item, value) => {
    item.complete = value
    const { items } = this.state
    this.setState({ items })
  }

  addTodo = event => {
    event.preventDefault()
    const { items, input } = this.state
    if (input) {
      items.push({
        id: items.length + 1,
        title: input,
        complete: false
      })
      this.setState({ items, input: '' })
    }
  }

  changeInput = (e) => {
    const input = e.target.value
    this.setState({ input })
  }

  render() {
    return (
      <form style={{ textAlign: 'center' }} onSubmit={this.addTodo}>
        <h1 >Todo App</h1>
        <input id="input-todo" value={this.state.input} onChange={this.changeInput} />
        <button className="add-todo-button">ADD TODO</button>
        <TodoList items={this.state.items} onChange={this.onChange} />
      </form>
    )
  } 
}

export default IndexPage