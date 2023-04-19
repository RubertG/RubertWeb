import { Link } from "react-router-dom"

export function Proyect({ proyect }) {

   const src = `./assets/imgProyects/${proyect.imgs[0]}-_Pequeña_.webp`

   return (
      <div className="container-proyect">
         <img
            src={src}
            alt={`Image of ${proyect.imgs[0]}`}
            loading="lazy" />
         <h3 className="title-gradient">{proyect.name}</h3>
         <p>{proyect.smallDesc}</p>
         <Link to={proyect.name} className="title-gradient">Ver más<span className="line-title line-title-fine"></span></Link>
      </div>
   )
}