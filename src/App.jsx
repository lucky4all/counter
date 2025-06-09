import { useState } from 'react'
import './index.css'


// Acceso principal de la app
export function Main() {
  return (
    <>
      <Contador />
    </>
  )
}

export function Contador() {
    const [click, setClick] = useState(0);
    function handleClick() {
      setClick(click + 1);
    }

    function handleReset() {
      setClick(0);
    }

    function handleDecrement() {
      if (click < 1) {
        return;
      }
      setClick(click - 1);
    }

    return (
        <div id="clicker" className='flex flex-col w-96 h-86 items-center justify-center gap-5 border-4 border-purple-500'>
          <h1 className='text-4xl text-white font-mono'>Contador <span className='text-pink-300 text-shadow-2xs text-shadow-black'>EPICO!</span>!</h1>
          <h2 className='text-xl'>Cantidad de clicks: <span className='text-purple-400 shadow-2xl font-bold'>{click}</span></h2>
          <button id='up' onClick={handleClick} className='bg-purple-400 text-white py-1 px-1 rounded-3xl text-[18px] font-bold cursor-pointer hover:bg-purple-500 order-1 transition-colors'>Sumar Click!</button>
          <button id='reset' onClick={handleReset} className='bg-white text-black py-1 px-2 rounded-3xl text-[18px] font-bold cursor-pointer order-3'>Resetear contador</button>
          <button id='down' onClick={handleDecrement} className='bg-pink-300 text-white py-1 px-2 rounded-3xl text-[18px] font-bold cursor-pointer order-2 hover:bg-pink-400 transition-colors'>Restar un click</button>
        </div>
      )
    
}