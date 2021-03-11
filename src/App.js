import React, { useState } from 'react'
import CatBoard from './components/CatBoard'
import Modale from './components/Modale'
import Header from './layout/Header'

function App() {

  const [toggleModale, setToggleModale] = useState(false)

  const closeModale = () => {
    setToggleModale(false)
  }

  const openModale = () => {
    setToggleModale(true)
  }
  
  

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
