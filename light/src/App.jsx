import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full bg-green-50 h-screen duration-200" style={{backgroundColor:color}}>hello
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-yellow-50 px-3 py-2 rounded-3xl'>
            <button className=' h-12 outline-none px-4 rounded-full text-white ease-in-out hover:scale-110'onClick={()=>{setColor("red")}} style={{backgroundColor:"red"}}>Red</button>
            <button className=' h-12 outline-none px-4 rounded-full text-white ease-in-out hover:scale-110' onClick={()=>{setColor("orange")}}style={{backgroundColor:"orange"}}>Orange</button>
            <button className='h-12 outline-none px-4 rounded-full text-white ease-in-out hover:scale-110' onClick={()=>{setColor("green")}}style={{backgroundColor:"green"}}>green</button>            
            <button className=' h-12 outline-none px-4 rounded-full text-white ease-in-out hover:scale-110' onClick={()=>{setColor("blue")}} style={{backgroundColor:"blue"}}>blue</button>
            <button className='h-12 outline-none px-4 rounded-full text-white ease-in-out hover:scale-110' onClick={()=>{setColor("purple")}} style={{backgroundColor:"purple"}}>purple</button>
            <button className='h-12 outline-none px-4 rounded-full text-white ease-in-out hover:scale-110' onClick={()=>{setColor("brown")}}style={{backgroundColor:"brown"}}>brown</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
