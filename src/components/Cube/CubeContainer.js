import React from 'react'
import {Canvas} from "@react-three/fiber"
import Cube from './Cube'

export default function CubeContainer() {
 
  return (
    <div>
     <Canvas>
        <Cube/>
     </Canvas>
    </div>
  )
}
