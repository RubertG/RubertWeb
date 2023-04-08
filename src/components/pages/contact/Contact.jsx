import { ContainerAnimation } from "../../layout/containerAnimation/ContainerAnimation";
import { Nav } from "../../layout/nav/Nav";

export function Contact() {
   return (
      <>
         <ContainerAnimation />
         <Nav />
         <section className="bg-gradient-two">
            <h2 className="title-gradient">
               Contacto
               <span className="line-title"></span>
            </h2>
         </section>
      </>
   )
}