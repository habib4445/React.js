import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*  */}
      <h1>Vite + React</h1>
      
 <Player name="Tamim" runs="5000"></Player>


    </>
  )
}

function Player(props){
  return(
    <div className='student'>
      <h3>Name:{props.name}</h3>
      <p>Runs:{props.runs}</p>
    </div>
  )
}


export default App
