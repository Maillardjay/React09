import React, { useState } from 'react'
import Jeremy from './components/jeremy.jsx'
import Laure from './components/laure.jsx'
import Tony from './components/anthony.jsx'
import Flo from './components/floriane.jsx'
import CardNicolas from './components/nicolas.jsx'
import SuperMocca from './components/marta.jsx'

import './App.css'

function App() {

  return (
  
    <div>
      <SuperMocca/> 
      <Tony />
      <CardNicolas />
      <Jeremy />
       <Laure />
       <Flo />
    </div>
  )
}

export default App
 