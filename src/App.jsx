import './App.css'
import { ParticlesBackground } from './components/layout/particles/ParticlesBackgroud'
import { RooterPrincipal } from './rooter/RooterPrincipal'
import { ProyectsContext } from './context/ProyectsContext'
import { useState } from 'react'

function App() {

   const [proyects, setProyects] = useState(null)

   return (
      <>
         <ParticlesBackground />
         <ProyectsContext.Provider value={{ proyects, setProyects }}>
            <RooterPrincipal />
         </ProyectsContext.Provider>
      </>
   )
}

export default App
