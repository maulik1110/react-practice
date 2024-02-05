import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [password,setPassword] = useState("")
  const [numApplied,setNumApplied] = useState(false)
  const [charApplied,setCharApplied] = useState(false)
  const passref = useRef(null)

  const passGenerator = useCallback( () =>{
    let pass= '';
    let str = 'QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm'
    if(charApplied) str += '!@#$%^&*()_+[]{}';
    if(numApplied) str += '1234567890';

   for (let i = 0; i < length; i++) {
    // const element = array[i];
    let char = Math.floor(Math.random()*str.length+1)
    pass +=str.charAt(char)
   }

   setPassword(pass)
  } ,[length,numApplied,charApplied,setLength])

  const copypass = useCallback(()=>{
    passref.current?.select()
    passref.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  },[password])

  // passref = useRef(()=>{

  // })

  useEffect(()=>{
    passGenerator() }, [length,charApplied,numApplied,setPassword])
  return (
    <>
      {/* <h1 className='text-5xl text-center text-black-800'>Maulik</h1> */}
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-5 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center mb-4'>Password Generator</h1>
        <div className='flex shadow-rounded-lg overflow-hidden mb-4 '>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 rounded-lg' placeholder='Password' readOnly ref={passref} />
          <button className='outline-none bg-blue-500 text-white py-1 px-3 shrink-0 rounded-lg mx-1' onClick={copypass}>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={15} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numApplied} id="numberInput" onClick={()=>{setNumApplied((prev)=>!prev);}} />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={charApplied} id="numberInput" onClick={()=>{setCharApplied((prev)=>!prev);}} />
          <label htmlFor="numberInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
