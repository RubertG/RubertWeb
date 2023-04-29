import './App.css'
import { ParticlesBackground } from './components/layout/particles/ParticlesBackgroud'
import { RooterPrincipal } from './rooter/RooterPrincipal'
import { ProjectsContext } from './context/ProjectsContext'
import { useState } from 'react'

function App() {

   const [projects, setProjects] = useState(null)

   return (
      <>
         <ParticlesBackground />
         <ProjectsContext.Provider value={{ projects, setProjects }}>
            <RooterPrincipal />
         </ProjectsContext.Provider>
      </>
   )
}

export default App
