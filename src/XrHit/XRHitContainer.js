import React from 'react'
import {Canvas} from "@react-three/fiber"
import XRHit from './XRHit'
import {ARButton,XR} from "@react-three/xr"
export default function XRHitContainer() {
  return (
    <div >
       <ARButton
       sessionInit={{
        requiredFeatures:["hit-test"]
       }}/>
      <Canvas >
       <XR>
       <XRHit/>
       </XR>
      </Canvas>
    </div>
  )
}
