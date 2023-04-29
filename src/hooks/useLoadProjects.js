import { useContext, useState } from "react"
import { ProjectsContext } from "../context/ProjectsContext"
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore"
import { db } from "../firebase/config"

export function useLoadProjects() {
   const { projects, setProjects } = useContext(ProjectsContext)
   const [project, setProject] = useState()
   const [projectNotFound, setProjectNotFound] = useState(false)

   const getProjects = () => {
      if (projects) return
      onSnapshot(collection(db, "proyects"), callback)
      getProject("en3decoro")
   }

   const callback = (querySnapShot) => {
      const projectsAux = []
      querySnapShot.forEach(async (documento) => {
         const project = await documento.data()
         const imgs = JSON.parse(project.imgs)
         projectsAux.push({ ...project, id: documento.id, imgs })
      })
      setProjects(projectsAux)
   }

   const getProject = (idProject) => {
      if (!projects) {
         parseProject(idProject)
      } else {
         const projectAux = projects.find(({ id }) => idProject === id)
         setProject(projectAux)
      }
   }

   const parseProject = async (idProject) => {
      const aux = await getDoc(doc(db, "proyects", idProject))
      if (aux.exists()) {
         const project = aux.data()
         const imgs = JSON.parse(project.imgs)
         setProject({ ...project, id: aux.id, imgs })
      } else {
         setProject(null)
         setProjectNotFound(true)
      }
   }

   return {
      getProjects,
      projects,
      project,
      projectNotFound,
      getProject
   }
}