import { useParams } from "react-router"
import { BackButton } from "../../../layout/backButton/BackButton"
import "./pageProject.css"
import { ContainerAnimation } from "../../../layout/containerAnimation/ContainerAnimation"
import { Slider } from "../../../layout/slider/Slider"
import { useEffect } from "react"
import { useLoadProjects } from "../../../../hooks/useLoadProjects"
import { ValidationErrors } from "./ValidationErrors"

export function PageProject() {

   const { id } = useParams()
   const { project, getProject, projectNotFound } = useLoadProjects()

   useEffect(() => getProject(id), [])

   return (
      <>
         <ContainerAnimation />
         {
            project && (
               <section className="bg-gradient-one my">
                  <BackButton rute="/projects" />
                  <h2 className="title-gradient">
                     {project.name}
                     <span className="line-title"></span>
                  </h2>
                  <div className="container-slider">
                     <Slider images={project.imgs} />
                  </div>
                  <p className="proyect-desc">
                     {project.longDesc}
                  </p>
                  <div className="container-links-proyect">
                     <a href={project.git} target="_blank" className="github">
                        <img src="../assets/svgSocial/github.svg" alt="Image github" />
                     </a>
                     <a
                        href={project.urlPage}
                        target="_blank"
                        className="title-gradient url-page">
                        Ver página
                        <span className="line-title line-title-fine"></span>
                     </a>
                  </div>
               </section>
            )
         }
         <ValidationErrors project={project} projectNotFound={projectNotFound} />
      </>
   )
}