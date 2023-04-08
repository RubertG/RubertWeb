import { NavLink } from "react-router-dom";
import "./error.css"

export function Error() {
   return (
      <section className="bg-gradient-one">
         <h1>Error 404 ☠️</h1>
         <NavLink
            className="link-home"
            to="/home">
            Ir a Home <span className="line-title"></span>
         </NavLink>
      </section>
   )
}
