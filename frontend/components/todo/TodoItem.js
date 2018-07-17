import React from 'react'

class TodoItem extends React.Component {
  render() {
    const { item, onCompleteChange } = this.props
    return (
      <div style={{
        border: '1px solid #000',
        width: 400,
        lineHeight: 4,
        padding: '0 10px',
        margin: '10px auto',
        background: item.complete ? 'darkgoldenrod' : 'antiquewhite',
      }}
      >
        <span className="item-mark">{item.complete ? '✓' : '•'}</span>{` `}
        <span className="item-title">{item.title}</span>{` `}
        <a style={{
          color: 'blue',
          cursor: 'pointer'
        }}
          className="item-button"
          onClick={() => onCompleteChange(item, !item.complete)}
        >
          Mark as {item.complete ? 'Pending' : 'Complete'}
        </a>
      </div>
    )
  }
}

export default TodoItem
