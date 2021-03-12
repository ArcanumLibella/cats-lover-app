import React, { useState, useEffect, useRef } from 'react'
import CatBoard from './components/CatBoard'
import Modale from './components/Modale'
import Counter from './components/Counter'
import Header from './layout/Header'

function App() {
  let cursorRef = useRef()
  const [toggleModale, setToggleModale] = useState(false)
  const [position, setPosition] = useState([0, 0])

  const closeModale = () => {
    setToggleModale(false)
  }

  const openModale = () => {
    setToggleModale(true)
  }

  const logMousePosition = event => {
    // console.log(event.clientX, event.clientY)
    let arrayPosition = []
    arrayPosition[0] = event.clientX
    arrayPosition[1] = event.clientY
    setPosition(arrayPosition)
    // console.log(arrayPosition)
  }

  const mousePosition = event => {
    // console.log(cursorRef.current)

    cursorRef.current.setAttribute(
      'style', 
      `top: ${event.pageY - 20}px; 
      left: ${event.pageX - 20}px`)
  }

  useEffect(() => {
    // console.log('Event on')
    window.addEventListener('mousemove', logMousePosition)

    // CLEANUP FUNCTION
    return () => {
      // console.log('Cleanup')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return (
    <div 
      className="App"
      onMouseMove={mousePosition}
    >
      <div className="myCursor" ref={cursorRef}></div>

      <Header />
      <CatBoard />


      <div className="flex justify-center">
        <button 
          className="p-4 m-8 bg-red-300 rounded"
          onClick={openModale}
        >
          Ouvrir la modale
        </button>
      </div>

      {toggleModale ?
        <Modale handleModale={closeModale}/>
      : ''}

      <Counter />

    </div>
  );
}

export default App;
