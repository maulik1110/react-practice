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
      let char = Math.floor(Math.random() * str.length +1);
      // only index de che
      // console.log(char);
      // const element = array[index];
      pass = str.charAt(char)      
    }
    setPassword(pass)

  },[length,numeric,setPassword,chara])

  return (
    <>
    <div className='w-full max-w-full mx-auto shadow-md rounded-lg px-4 my-auto text-orange-500 bg-gray'>Hi</div>

    <h2 className='text-pink' style={{backgroundColor: olive}}>maulik</h2>
    </>
  )
}

export default App
