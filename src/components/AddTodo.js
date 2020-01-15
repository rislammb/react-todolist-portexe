import React, { useState } from 'react';

const AddTodo = props => {
  const [title, setTitle] = useState('');

  const handleChange = e => setTitle(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim() !== '') {
      props.addTodoFn(title);
      setTitle('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        onChange={handleChange}
        placeholder='Type new todo ...'
      />
      <input type='submit' value='Add Todo' />
    </form>
  );
};

export default AddTodo;
