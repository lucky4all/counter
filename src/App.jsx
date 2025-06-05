import { useState } from 'react'
import './index.css'

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
      setClick(click + 1)
    }

    function handleReset() {
      setClick(0)
    }

    return (
        <div id="clicker">
          <h1>Contador <span>EPICO!</span>!</h1>
          <h2>Cantidad de clicks: {click}</h2>
          <button onClick={handleClick}>Haceme Click!</button>
          <button id='reset' onClick={handleReset}>Resetear contador</button>
        </div>
      )
    
}