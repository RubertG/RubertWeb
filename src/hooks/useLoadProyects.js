import { useContext } from "react"
import { ProyectsContext } from "../context/ProyectsContext"
import { collection, onSnapshot } from "firebase/firestore"
import { useEffect } from "react"
import { db } from "../firebase/config"

export function useLoadProyects() {
   const { proyects, setProyects } = useContext(ProyectsContext)

   const getProyects = () => {
      onSnapshot(collection(db, "proyects"), callback)
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

   useEffect(() => {
      if (proyects) return
      getProyects()
   }, [])
}