import { Suspense } from 'react'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model2(props) {
  const { nodes, materials } = useGLTF('/FirstModel.gltf')
  return (
    <group dispose={null} scale={1.3} position={props.position}>
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials['06___Default']} />
    </group>
  )
}

useGLTF.preload('/FirstModel.gltf')
export default function Model({position}) {
    return (
        <Suspense fallback={null}>
             <Model2 position={position}/>
        </Suspense>
    )
}
