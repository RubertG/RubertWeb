import "./proyects.css"
import data from "../../../data/data.json"
import { Proyect } from "./Proyect"
import { Nav } from "../../layout/nav/Nav"
import { ContainerAnimation } from "../../layout/containerAnimation/ContainerAnimation"

export function Proyects() {

   const proyects = data.proyects

   return (
      <>
         <ContainerAnimation />
         <Nav />
         <section className="bg-gradient-one my">
            <h2 className="title-gradient">
               Mis proyectos
               <span className="line-title"></span>
            </h2>
            <div className="container-proyects">
               {
                  proyects.map((proyect) => {
                     return (
                        <Proyect
                           key={proyect.id}
                           proyect={proyect} />
                     )
                  })
               }
            </div>
         </section>
      </>
   )
}