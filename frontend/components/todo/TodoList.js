import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  render() {
    const { items, onChange } = this.props
    return (
      <div>
        {items.map(item => <TodoItem key={item.id} item={item} onCompleteChange={onChange} />)}
      </div>
    )
  }
}

export default TodoList
