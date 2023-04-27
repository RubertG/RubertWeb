import { useParams } from "react-router"
import { BackButton } from "../../../layout/backButton/BackButton"
import "./pageProyect.css"
import { ContainerAnimation } from "../../../layout/containerAnimation/ContainerAnimation"
import { Slider } from "../../../layout/slider/Slider"
import { useEffect } from "react"
import { useLoadProyects } from "../../../../hooks/useLoadProyects"
import { Loader } from "../../../layout/loader/Loader"

export function PageProyect() {

   const { id } = useParams()
   const { proyect, getProyect } = useLoadProyects()

   useEffect(() => getProyect(id), [])

   return (
      <>
         <ContainerAnimation />
         {
            proyect ? (
               <section className="bg-gradient-one my">
                  <BackButton rute="/proyects" />
                  <h2 className="title-gradient">
                     {proyect.name}
                     <span className="line-title"></span>
                  </h2>
                  <div className="container-slider">
                     <Slider images={proyect.imgs} />
                  </div>
                  <p className="proyect-desc">
                     {proyect.longDesc}
                  </p>
                  <div className="container-links-proyect">
                     <a href={proyect.git} target="_blank" className="github">
                        <img src="../assets/svgSocial/github.svg" alt="Image github" />
                     </a>
                     <a
                        href={proyect.urlPage}
                        target="_blank"
                        className="title-gradient url-page">
                        Ver página
                        <span className="line-title line-title-fine"></span>
                     </a>
                  </div>
               </section>
            ) : (
               <section className="bg-gradient-one my">
                  <BackButton rute="/proyects" />
                  <Loader />
               </section>
            )
         }
      </>
   )
}