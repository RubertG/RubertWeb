import "./proyects.css"
import data from "../../../data/data.json"
import { Proyect } from "./Proyect"
import { Nav } from "../../layout/nav/Nav"

export function Proyects() {
   return (
      <>
         <Nav />
         <section className="bg-gradient-one my">
            <h2 className="title-gradient">
               Mis proyectos
               <span className="line-title"></span>
            </h2>
            <ul className="container-proyects">
               {
                  data.proyects.map((proyect) => {
                     return (
                        <Proyect
                           key={proyect.id}
                           proyect={proyect} />
                     )
                  })
               }
            </ul>
         </section>
      </>
   )
}