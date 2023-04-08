import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Home } from "../components/pages/home/Home";
import { Skills } from '../components/pages/skills/Skills';
import { Contact } from '../components/pages/contact/Contact';
import { Nav } from '../components/layout/Nav';
import { Proyects } from '../components/pages/proyect/Proyects';
import { Error } from '../components/pages/404/Error';

export function RooterPrincipal() {
   return (
      <BrowserRouter>
         <Nav />
         <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/proyects" element={<Proyects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Error />} />
         </Routes>
      </BrowserRouter>
   )
}