import { BackButton } from "../../../layout/backButton/BackButton";
import { Loader } from "../../../layout/loader/Loader";

export function ValidationErrors({ project, projectNotFound }) {
   return (
      <>
         {
            !project && !projectNotFound && (
               <section className="bg-gradient-one my">
                  <BackButton rute="/projects" />
                  <Loader />
               </section>
            )
         }

         {
            !project && projectNotFound && (
               <section className="bg-gradient-one my">
                  <BackButton rute="/projects" />
                  <h1>Proyecto inexistente en la base de datos :(</h1>
               </section>
            )
         }
      </>
   )
}