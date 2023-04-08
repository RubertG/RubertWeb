import { useState } from "react"
import "./slider.css"

export function Slider({ images }) {

   const [indexImage, setIndexImage] = useState(0)

   const length = images?.length
   if (!Array.isArray(images) || length === 0) return;

   const next = () => {
      const newIndexImage = indexImage !== length - 1 ? indexImage + 1 : 0
      setIndexImage(newIndexImage)
   }

   const prev = () => {
      const newIndexImage = indexImage !== 0 ? indexImage - 1 : length - 1
      setIndexImage(newIndexImage)
   }

   return (
      <div className="slider">
         <button
            className="prev"
            onClick={prev}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
               <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg>
         </button>
         {
            images.map((nameImage, index) => {
               const className = index === indexImage ? "slide active" : "slide"
               const src = `./assets/imgProyects/${nameImage}.jpg`
               return (
                  <div key={index} className={className}>
                     {
                        indexImage === index && (
                           <img
                              src={src}
                              alt={`Image of the page of ${nameImage}`}
                           />
                        )
                     }
                  </div>
               )
            })
         }
         <button
            onClick={next}
            className="next">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
               <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
         </button>


         {/* 
         <img src="./assets/imgProyects/en3decoro-1.jpg" alt="" className="slide" />
         <img src="./assets/imgProyects/guessinggame-1.jpg" alt="" className="slide" />
         <img src="./assets/imgProyects/rick-and-morty-1.jpg" alt="" className="slide" />
         <img src="./assets/imgProyects/todo-1.jpg" alt="" className="slide" /> */}
      </div>
   )
}