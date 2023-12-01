import React from 'react'
import {Canvas} from "@react-three/fiber"
import XRCube from './XRCube'
import {ARButton,XR} from "@react-three/xr"
export default function XRCubeContainer() {
  return (
    <div>
        <ARButton/>
      <Canvas>
       <XR>
       <XRCube/>
       </XR>
      </Canvas>
    </div>
  )
}
