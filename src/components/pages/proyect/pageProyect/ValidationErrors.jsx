import { BackButton } from "../../../layout/backButton/BackButton";
import { Loader } from "../../../layout/loader/Loader";

export function ValidationErrors({ children, proyect, projectNotFound }) {
   return (
      <>
         {
            !proyect && !projectNotFound && (
               <section className="bg-gradient-one my">
                  <BackButton rute="/proyects" />
                  <Loader />
               </section>
            )
         }

         {
            !proyect && projectNotFound && (
               <section className="bg-gradient-one my">
                  <BackButton rute="/proyects" />
                  <h1>Proyecto inexistente en la base de datos :(</h1>
               </section>
            )
         }
      </>
   )
}