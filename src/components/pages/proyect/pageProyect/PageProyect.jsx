import { useParams } from "react-router"
import data from "../../../../data/data.json"
import { BackButton } from "../../../layout/backButton/BackButton"
import "./pageProyect.css"
import { ContainerAnimation } from "../../../layout/containerAnimation/ContainerAnimation"

export function PageProyect() {

   const { name } = useParams()
   const proyect = data.proyects.find((p) => name === p.name)

   if (!proyect) return;

   return (
      <>
         <ContainerAnimation />
         <section className="bg-gradient-one">
            <BackButton rute="/proyects">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
               </svg>
            </BackButton>
            <h2 className="title-gradient">
               {proyect.name}
               <span className="line-title"></span>
            </h2>
         </section>
      </>
   )
}