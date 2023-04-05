import React, { useState } from 'react';
import './App.css';
import TodoList from './Todo/TodoList';
import Context from './context';
import AddTodo from './Todo/AddTodo';


const data = [
  { id: 1, completed: true, title: "bay bread" },
  { id: 2, completed: false, title: "bay oil" },
  { id: 3, completed: false, title: "bay milke" }
]


function App() {
  const [todos, setTodos] = useState(data)

  function toggleTodo(id) {

    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

const removeTodo =(id)=>{
  setTodos(todos.filter(item => item.id !== id))
}

const createTodo =(title)=>{
  setTodos(todos.concat([{
    title:title,
    id: todos.length + 1,
    completed: false
  }]))
  
}



  return (
      <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <AddTodo createTodo={createTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} />
      </div>
      </Context.Provider>
  );
}

export default App;
