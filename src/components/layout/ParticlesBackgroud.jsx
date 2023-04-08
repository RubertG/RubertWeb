import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import options from "./config/particlesjs-config.json"

export function ParticlesBackground() {

   const particlesInit = useCallback(engine => {
      loadFull(engine);
   }, []);

   return (
      <Particles
         id="tsparticles"
         init={particlesInit}
         options={options}
      />
   )
}