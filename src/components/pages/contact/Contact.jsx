import { ContainerAnimation } from "../../layout/containerAnimation/ContainerAnimation";
import { IconsContact } from "../../layout/iconsContact/IconsContact";
import { Nav } from "../../layout/nav/Nav";
import "./contact.css"

export function Contact() {
   return (
      <>
         <ContainerAnimation />
         <Nav />
         <section className="bg-gradient-two my-2">
            <h2 className="title-gradient">
               Contacto
               <span className="line-title"></span>
            </h2>
            <form name="form-contact" className="form" netlify>
               <label htmlFor="name">
                  Nombre
               </label>
               <input type="text" placeholder="Pepito Perez" name="name" />
               <label htmlFor="email">
                  Email
               </label>
               <input type="email" placeholder="ejemplo@ejemplo.com" name="email" />
               <label htmlFor="message">
                  Mensaje
               </label>
               <textarea placeholder="Excribe tu mensaje" name="message" />
               <button type="submit" className="send">Enviar</button>
            </form>
            <IconsContact />
         </section>
      </>
   )
}