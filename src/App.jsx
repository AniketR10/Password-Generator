import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [numberAlowed,setNumberAllowed]  =useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('')
  const [copyStatus, setcopyStatus] = useState('copy')
  
  const passwordRef = useRef(null)

  const generatePassword =  useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAlowed) str+="0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i=0;i<length;i++){
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, numberAlowed, charAllowed])


  useEffect(() =>{
    generatePassword()
  },[length,numberAlowed,charAllowed])

    const copyPasswordToClipboard = () =>{
      window.navigator.clipboard.writeText(password)
      passwordRef.current?.select()

      setcopyStatus('copied !')

      setTimeout(() => {
          setcopyStatus('copy')
      }, 1000);
      
    }


  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
     <h1 className='text-white text-center my-3'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
        <input
         type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
    
     <button 
     onClick={copyPasswordToClipboard}
     className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>{copyStatus}
     </button>
     </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-2'>
          <input 
          type="range"
          min={6}
          max={36}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name=''
          id=''
           />
           <label htmlFor="length">Length : {length}</label>
        </div>

        <div className='flex items-center gap-x-2'>
          <input type="checkbox"
          defaultChecked = {numberAlowed}
          onChange={() =>{
              setNumberAllowed((prev) => !prev)
          }}
            name=''
            id=''
           />
           <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input 
          type="checkbox"
         defaultChecked = {charAllowed}
          
          //className='cursor-pointer'
          onChange={() =>{
            setCharAllowed((prev) => !prev)
          }}
          name=''
          id=''
           />
           <label htmlFor="charInput">Characters </label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
