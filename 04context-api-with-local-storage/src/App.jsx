import { useState } from 'react';
import './App.css'
import { TodoContext } from './contexts/TodoContext';
import { useEffect } from 'react';
import { TodoForm, TodoItem } from './components';


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ ...todo}, ...prev])
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo)=>(
      prevTodo.id === id ? todo : prevTodo
    )))
  }
  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((prevTodo) => prevTodo.id !== id))
    // using filter for delete is appropriate, dont use map for deleting
  }
  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
      <div className="min-h-screen py-8 bg-[#172842]">
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-center font-bold text-2xl mb-8 mt-2'>Manage Your Todos</h1>
          <div className='mb-4'>
            <TodoForm/>
          </div>
          <div className='flex flex-wrap gap-y-3'>
            {todos.map((todo)=> (
              <div key={todo.id} className='w-full '>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContext.Provider>
  )
}

export default App
