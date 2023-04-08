import { Link } from "react-router-dom";
import "./backButton.css"

export function BackButton({ children, rute }) {
   return <Link to={rute} className="back-button">{children}</Link>
}