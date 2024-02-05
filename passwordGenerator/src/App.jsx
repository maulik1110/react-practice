import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [chara, setChara] = useState(false);
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numeric, setNumeric] = useState(false);

  const passwordgenerator = useEffect( ()=>{
    let pass = "";
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
    if(numeric) str += "1234567890"
    if(chara) str += "!@#$%^&*()[]{}"

    for (let i = 0; index <= array.length; index++) {
      let char = Math.random() * str.length +1;
      console.log(char);
      // const element = array[index];
      
    }
  },[length,numeric,setPassword,chara])

  return (
    <>
    <div className='w-full max-wd-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center text-4xl '>Passowrd generator</h1>
    </div>
    </>
  )
}

export default App
