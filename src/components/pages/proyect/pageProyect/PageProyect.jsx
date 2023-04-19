import { useParams } from "react-router"
import data from "../../../../data/data.json"
import { BackButton } from "../../../layout/backButton/BackButton"
import "./pageProyect.css"
import { ContainerAnimation } from "../../../layout/containerAnimation/ContainerAnimation"
import { Slider } from "../../../layout/slider/Slider"

export function PageProyect() {

   const { name } = useParams()
   const proyect = data.proyects.find((p) => name === p.name)
   if (!proyect) return;

   return (
      <>
         <ContainerAnimation />
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
      </>
   )
}