import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
  return props.todos.length > 0 ? (
    <ul className='todoContainer'>
      {props.todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleComplete={props.toggleComplete}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </ul>
  ) : null;
};

export default TodoList;
