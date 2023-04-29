import "../../../firebase/config"
import "./projects.css"
import { Project } from "./Project"
import { Nav } from "../../layout/nav/Nav"
import { ContainerAnimation } from "../../layout/containerAnimation/ContainerAnimation"
import { useEffect } from "react"
import { useLoadProjects } from "../../../hooks/useLoadProjects"
import { Loader } from "../../layout/loader/Loader"

export function Projects() {

   const { projects, getProjects } = useLoadProjects()

   useEffect(() => getProjects(), [])

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
                  projects ? projects.map((project) => {
                     return (
                        <Project
                           key={project.id}
                           project={project} />
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