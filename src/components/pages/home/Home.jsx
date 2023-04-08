import { ContainerAnimation } from "../../layout/containerAnimation/ContainerAnimation"
import { IconsContact } from "../../layout/iconsContact/IconsContact"
import { Nav } from "../../layout/nav/Nav"
import "./home.css"

export function Home() {
   return (
      <>
         <ContainerAnimation />
         <Nav />
         <section className="bg-gradient-one">
            <h1>¡Hola mundo!👋</h1>
            <p>Soy Rubert,
               <span>
                  {"<DesarrolladorWeb />"}
                  <span className="line-title line-title-fine"></span>
               </span>
            </p>
            <img src="./assets/svgHome/pc.svg" alt="Svg pc" />
            <IconsContact />
         </section>
      </>
   )
}