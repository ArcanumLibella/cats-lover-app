import React, { useState, useEffect } from 'react'
import CatBoard from './components/CatBoard'
import Modale from './components/Modale'
import Header from './layout/Header'

function App() {

  const [toggleModale, setToggleModale] = useState(false)
  const [position, setPosition] = useState([0, 0])

  const closeModale = () => {
    setToggleModale(false)
  }

  const openModale = () => {
    setToggleModale(true)
  }

  const logMousePosition = event => {
    console.log(event.clientX, event.clientY)
    let arrayPosition = []
    arrayPosition[0] = event.clientX
    arrayPosition[1] = event.clientY
    setPosition(arrayPosition)
    // console.log(arrayPosition)
  }

  useEffect(() => {
    console.log('Event on')
    window.addEventListener('mousemove', logMousePosition)

    // CLEANUP FUNCTION
    return () => {
      console.log('Cleanup')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return (
    <div className="App">
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

    </div>
  );
}

export default App;
