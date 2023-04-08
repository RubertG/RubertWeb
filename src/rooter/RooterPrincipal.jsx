import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Skills } from '../components/pages/skills/Skills';
import { Contact } from '../components/pages/contact/Contact';
import { Proyects } from '../components/pages/proyect/Proyects';
import { Error } from '../components/pages/404/Error';
import { PageProyect } from '../components/pages/proyect/pageProyect/PageProyect';
import { Home } from '../components/pages/home/Home';

export function RooterPrincipal() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/proyects" element={<Proyects />} />
            <Route path="/proyects/:name" element={<PageProyect />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Error />} />
         </Routes>
      </BrowserRouter>
   )
}