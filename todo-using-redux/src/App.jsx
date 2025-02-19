import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItems from './components/TodoItems'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Redux</h1>
      <TodoForm/>
      <TodoItems/>
    </>
  )
}

export default App
