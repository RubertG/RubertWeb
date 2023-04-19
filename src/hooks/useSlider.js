import { useState } from "react";

export function useSlider(images) {
   const [indexImage, setIndexImage] = useState(0)

   const length = images.length

   const next = () => {
      const newIndexImage = indexImage !== length - 1 ? indexImage + 1 : 0
      setIndexImage(newIndexImage)
   }

   const prev = () => {
      const newIndexImage = indexImage !== 0 ? indexImage - 1 : length - 1
      setIndexImage(newIndexImage)
   }

   return {
      indexImage,
      next,
      prev
   }
}