import "../../../firebase/config"
import "./proyects.css"
import { Proyect } from "./Proyect"
import { Nav } from "../../layout/nav/Nav"
import { ContainerAnimation } from "../../layout/containerAnimation/ContainerAnimation"
import { useEffect } from "react"
import { useLoadProyects } from "../../../hooks/useLoadProyects"
import { Loader } from "../../layout/loader/Loader"

export function Proyects() {

   const { proyects, getProyects, getProyect } = useLoadProyects()

   useEffect(() => getProyects(), [])

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
                  proyects ? proyects.map((proyect) => {
                     return (
                        <Proyect
                           key={proyect.id}
                           proyect={proyect} />
                     )
                  }) : (
                     <Loader />
                  )
               }
            </div>
         </section>
      </>
   )
}