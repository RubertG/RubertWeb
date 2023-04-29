import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Skills } from '../components/pages/skills/Skills';
import { Contact } from '../components/pages/contact/Contact';
import { Projects } from '../components/pages/project/Projects';
import { Error } from '../components/pages/404/Error';
import { PageProject } from '../components/pages/project/pageProject/PageProject';
import { Home } from '../components/pages/home/Home';

export function RooterPrincipal() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<PageProject />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/*' element={<Error />} />
         </Routes>
      </BrowserRouter>
   )
}