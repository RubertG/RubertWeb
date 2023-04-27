import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export function Proyect({ proyect }) {

   const [className, setClassName] = useState("container-proyect hidden")

   useEffect(() => {
      const img = new Image()
      img.src = proyect.imgs[0]
      img.onload = () => {
         setClassName("container-proyect")
      };
   }, [])

   return (
      <div className={className}>
         <img
            src={proyect.imgs[0]}
            alt={`Image of ${proyect.name}`}
            loading="lazy" />
         <h3 className="title-gradient">{proyect.name}</h3>
         <p>{proyect.smallDesc}</p>
         <Link to={proyect.id} className="title-gradient">Ver más<span className="line-title line-title-fine"></span></Link>
      </div>
   )
}