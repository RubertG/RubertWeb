import { NavLink } from "react-router-dom"
import "./nav.css"
import { useNavAnimation } from "../../../hooks/useNavAnimation"

export function Nav() {
   const { handleToggle } = useNavAnimation()

   return (
      <nav className="nav-container">
         <div className="nav">
            <div
               className="nav__container-icon"
               onClick={handleToggle}>
               <div className="icon">
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
            </div>
            <li
               className="nav__home"
               onClick={handleToggle}>
               <NavLink to="/home" >
                  <img src="./assets/svgNav/home.svg" alt="Mis habilidades" />
                  <p className="nav-li-title">Inicio</p>
               </NavLink>
            </li>
            <li
               className="nav__habilidades"
               onClick={handleToggle}>
               <NavLink to="/skills" >
                  <img src="./assets/svgNav/book.svg" alt="Mis habilidades" />
                  <p className="nav-li-title">Habilidades</p>
               </NavLink>
            </li>
            <li
               className="nav__proyectos"
               onClick={handleToggle}>
               <NavLink to="/proyects">
                  <img src="./assets/svgNav/tools.svg" alt="Mis proyectos" />
                  <p className="nav-li-title">Proyectos</p>
               </NavLink>
            </li>
            <li
               className="nav__contacto"
               onClick={handleToggle}>
               <NavLink to="/contact">
                  <img src="./assets/svgNav/person.svg" alt="Mi contacto" />
                  <p className=" li-last nav-li-title">Contacto</p>
               </NavLink>
            </li>
         </div>
      </nav>
   )
}