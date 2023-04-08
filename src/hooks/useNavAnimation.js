import { useState, useEffect } from "react"

export function useNavAnimation() {
   const [toggle, setToggle] = useState(false)

   const handleToggle = () => {
      setToggle(!toggle)
   }

   useEffect(() => {
      const navToggle = document.querySelector(".nav__container-icon");
      const navOptions = document.querySelectorAll(".nav li");
      navToggle.classList.toggle("active");
      navOptions.forEach(
         option => option.classList.toggle("active")
      )
   }, [toggle])

   return {
      handleToggle
   }
}