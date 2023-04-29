import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export function Project({ project }) {

   const [className, setClassName] = useState("container-proyect hidden")

   useEffect(() => {
      const img = new Image()
      img.src = project.imgs[0]
      img.onload = () => {
         setClassName("container-proyect")
      };
   }, [])

   return (
      <div className={className}>
         <img
            src={project.imgs[0]}
            alt={`Image of ${project.name}`}
            loading="lazy" />
         <h3 className="title-gradient">{project.name}</h3>
         <p>{project.smallDesc}</p>
         <Link to={project.id} className="title-gradient">Ver más<span className="line-title line-title-fine"></span></Link>
      </div>
   )
}