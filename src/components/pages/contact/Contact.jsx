import { ContainerAnimation } from "../../layout/containerAnimation/ContainerAnimation";
import { IconsContact } from "../../layout/iconsContact/IconsContact";
import { Message } from "../../layout/message/Message";
import { Nav } from "../../layout/nav/Nav";
import "./contact.css"
import { useFormContact } from "../../../hooks/useFormContact";
import { FormContact } from "../../layout/formContact/FormContact";

export function Contact() {

   const { handleSubmit, success, loading } = useFormContact()

   return (
      <>
         <ContainerAnimation />
         <Nav />
         <Message text="Enviado" success={success} />
         <section className="bg-gradient-two my-2">
            <h2 className="title-gradient">
               Contáctame
               <span className="line-title"></span>
            </h2>
            <FormContact handleSubmit={handleSubmit} loading={loading} />
            <IconsContact />
         </section>
      </>
   )
}