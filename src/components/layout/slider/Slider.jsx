import { useSlider } from "../../../hooks/useSlider"
import "./slider.css"

export function Slider({ images }) {

   if (!Array.isArray(images) || images.length === 0) return;
   const { indexImage, prev, next } = useSlider(images)

   return (
      <div className="slider">
         <button
            className="prev"
            onClick={prev}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
               <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg>
         </button>
         {
            images.map((nameImage, index) => {
               const className = index === indexImage ? "slide active" : "slide"
               const src = `../assets/imgProyects/${nameImage}.jpg`
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
               <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
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