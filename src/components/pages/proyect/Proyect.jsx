import { Link } from "react-router-dom"

export function Proyect({ proyect }) {

   const src = `./assets/imgProyects/${proyect.imgs[0]}.jpg`
   const alt = `Image of ${proyect.imgs[0]}`

   return (
      <li className="container-proyect">
         <img src={src} alt={alt} />
         {/* <Slider images={proyect.imgs} /> */}
         <h3 className="title-gradient">{proyect.name}</h3>
         <p>{proyect.smallDesc}</p>
         <Link to={`/proyects/${proyect.name}`} className="title-gradient">
            Ver más
            <span className="line-title line-title-fine"></span>
         </Link>
      </li>
   )
}