import React from 'react';

const TodoItem = props => {
  const { todo, toggleComplete, deleteTodo } = props;
  return (
    <li className='todoItem'>
      <span
        className={`todoText${todo.isComplete ? ' completed' : ''}`}
        onClick={() => toggleComplete(todo)}
      >
        {todo.text}
      </span>
      <span className='deleteIcon' onClick={() => deleteTodo(todo)}>
        x
      </span>
    </li>
  );
};

export default TodoItem;
