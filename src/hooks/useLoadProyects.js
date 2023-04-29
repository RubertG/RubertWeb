import { useContext, useState } from "react"
import { ProyectsContext } from "../context/ProyectsContext"
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore"
import { db } from "../firebase/config"

export function useLoadProyects() {
   const { proyects, setProyects } = useContext(ProyectsContext)
   const [proyect, setProyect] = useState()
   const [projectNotFound, setProjectNotFound] = useState(false)

   const getProyects = () => {
      if (proyects) return
      onSnapshot(collection(db, "proyects"), callback)
      getProyect("en3decoro")
   }

   const callback = (querySnapShot) => {
      const proyectsAux = []
      querySnapShot.forEach(async (documento) => {
         const proyect = await documento.data()
         const imgs = JSON.parse(proyect.imgs)
         proyectsAux.push({ ...proyect, id: documento.id, imgs })
      })
      setProyects(proyectsAux)
   }

   const getProyect = (idProyect) => {
      if (!proyects) {
         parseProyect(idProyect)
      } else {
         const proyectAux = proyects.find(({ id }) => idProyect === id)
         setProyect(proyectAux)
      }
   }

   const parseProyect = async (idProyect) => {
      const aux = await getDoc(doc(db, "proyects", idProyect))
      if (aux.exists()) {
         const proyect = aux.data()
         const imgs = JSON.parse(proyect.imgs)
         setProyect({ ...proyect, id: aux.id, imgs })
      } else {
         setProyect(null)
         setProjectNotFound(true)
      }
   }

   return {
      getProyects,
      proyects,
      proyect,
      projectNotFound,
      getProyect
   }
}