import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
     <Person></Person>  
     <Person></Person>  
      <Sports></Sports>
     <Person></Person>  
    </>
  )
}

function Person(){
  const name="john";
  const age=17;
  return(
    <p>I am person: {name} {age}</p>

  )
}
function Sports(){
  return(
    <h1>sports</h1>
  )
}

export default App
