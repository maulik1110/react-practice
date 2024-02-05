import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  let [counted,setCount] = useState(0)

  const count = ()=>{
    setCount(counted+1);
    console.log("Cart Count : ", counted);
  }

  const addvalue = () =>{
    // counter = counter+1;
    counter <20 ?
    setCounter(counter+1) : counter ==20;
    console.log("clicked",counter);
  }

  const removevalue = ()=>{
    counter<=0 ? setCounter==0 : 
    setCounter(counter-1);
  }
  // let counter = 15;
  return (
    <>
      <h1>Your Cart contain {counted} items</h1>
      <button onClick={count}>Add more</button>


      <h1>Chai aur code</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
      <p>The counter is {counter}</p>
    </>
  )
}

export default App
