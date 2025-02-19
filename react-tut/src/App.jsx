import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 0
  // const addValue = ()=>{
  //   console.log(Math.random()*10)
  // }
  const [counter, setCounter] = useState(0);
  const addValue = ()=>{
    setCounter(counter+1)
  }
  const removeValue = () => {
    setCounter(counter-1)
  }
  return (
    <>
      <h1>React basics </h1>
      <h3>Counter : {counter}</h3>

      <button onClick={addValue}>Add Value</button> <br/>
      <br/>
      {counter == 0 ? " ": 
      <button onClick={removeValue} >Remove Value</button>}
    </>
  )
}

export default App
