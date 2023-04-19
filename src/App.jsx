import './App.css'
import { ParticlesBackground } from './components/layout/particles/ParticlesBackgroud'
import { RooterPrincipal } from './rooter/RooterPrincipal'

function App() {

   return (
      <>
         {
            window.innerWidth > 768 ? (
               <>
                  <ParticlesBackground />
                  <RooterPrincipal />
               </>
            ) :
               <RooterPrincipal />
         }
      </>
   )
}

export default App
