import "./home.css"
import { IconsContact } from "../../layout/IconsContact";

export function Home() {
   return (
      <section className="bg-gradient-one">
         <h1>¡Hola mundo!👋</h1>
         <p>Soy Rubert,
            <span>
               {"<DesarrolladorWeb />"}
               <span className="line-title"></span>
            </span>
         </p>
         <img src="./assets/svgHome/pc.svg" alt="Svg pc" />
         <IconsContact />
      </section>
   )
}