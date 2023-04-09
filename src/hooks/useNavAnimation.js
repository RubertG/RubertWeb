import { useState, useEffect } from "react"

export function useNavAnimation() {
   const [toggle, setToggle] = useState(false)

   const handleToggle = () => {
      setToggle(!toggle)
   }

   useEffect(() => {
      const navToggle = document.querySelector(".nav__container-icon");
      const navOptions = document.querySelectorAll(".nav li");
      if (toggle) {
         navToggle.classList.add("active");
         navOptions.forEach(
            option => option.classList.add("active")
         )
      } else {
         navToggle.classList.remove("active");
         navOptions.forEach(
            option => option.classList.remove("active")
         )
      }
   }, [toggle])

   return {
      handleToggle
   }
}