import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './Users'

function App() {
  function handleClick() {
    alert('Button clicked')
  }

  const handleClick3 = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h3>Vite + React</h3>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => alert('2nd button clicked')}>Click me 2</button>
      <button onClick={() => handleClick3(5)}>Click me 3</button>
    </>
  )
}

export default App
