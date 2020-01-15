import React, { useState, useEffect } from 'react';
import './App.css';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    const newTodos = [
      {
        text: todo,
        isComplete: false
      },
      ...todos
    ];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const toggleComplete = todo => {
    const newTodos = todos.map(_todo => {
      if (_todo === todo) {
        return { ..._todo, isComplete: !_todo.isComplete };
      } else {
        return _todo;
      }
    });
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const deleteTodo = todo => {
    if (window.confirm('Are you want to delete ' + todo.text + '?')) {
      if (todos.length === 1) {
        setTodos([]);
        localStorage.removeItem('todos');
      } else {
        const newTodos = todos.filter(_todo => _todo !== todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
      }
    }
  };

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) setTodos(JSON.parse(savedTodos));
    else console.log('No todos!');
  }, []);
  return (
    <div className='container'>
      <AddTodo addTodoFn={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
