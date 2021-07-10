import React, {useState} from 'react';

function Todo() {
    const [todos, setTodos] = useState(['first']);
    const [newTodo, setNewTodo] = useState('');
  
    return (
      <div>
        <input
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          type="text"
        ></input>
        <button
          onClick={() => {
            setTodos([...todos, newTodo]);
          }}
        >
          Add
        </button>
        <ul>
          {todos.map((el) => {
            return <li>{el}</li>;
          })}
        </ul>
      </div>
    );
}

export default Todo;

