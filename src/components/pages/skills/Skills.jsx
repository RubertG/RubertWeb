import "./skills.css"
import data from "../../../data/data.json"
import { Nav } from "../../layout/nav/Nav"

export function Skills() {
   return (
      <>
         <Nav />
         <section className="bg-gradient-two">
            <h2 className="title-gradient">Mis skills<span className="line-title"></span></h2>
            <ul className="container-skills">
               {
                  data.skills.map(({ id, name, nameImage }) => {
                     const src = `./assets/svgSkills/${nameImage}.svg`
                     const alt = `Icon ${name}`
                     return (
                        <li key={id} className="skill">
                           <img src={src} alt={alt} />
                           <p>{name}</p>
                        </li>
                     )
                  })
               }
            </ul>
         </section>
      </>
   )
}