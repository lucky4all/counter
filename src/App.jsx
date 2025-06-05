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
        <div id="clicker">
          <h1>Contador <span>EPICO!</span>!</h1>
          <h2>Cantidad de clicks: {click}</h2>
          <button onClick={handleClick}>Sumar Click!</button>
          <button id='reset' onClick={handleReset}>Resetear contador</button>
          <button id='down' onClick={handleDecrement}>Restar un click</button>
        </div>
      )
    
}