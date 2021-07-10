import React, {useState} from 'react';
function TodoInForm() {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]); 
    return (
      <div
        style={{
          margin: '200px auto',
          width: '20%',
          justifyContent: 'space-between',
        }}
      >
        <h1>Todos:</h1>
        {todos.map((el) => {
          return <div>{el}</div>;
        })}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTodos([...todos, newTodo]);
          }}
        >
          <input type="text" onChange={(e) => setNewTodo(e.target.value)}></input>
          <button>Add ToDo</button>
        </form>
      </div>
    );  
}

export default TodoInForm;


  
