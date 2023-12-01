import {React,useRef} from 'react'
import {useFrame} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"

export default function XRCube() {
    const cubeRef=useRef()
    useFrame((state,delta)=>{
        cubeRef.current.rotation.y+=0.05
    })
  return (
    <>
      <OrbitControls/>
       <ambientLight />
        <mesh ref={cubeRef} position-z={-5}>
            <boxGeometry args={[1.5,1.5,1.5]}></boxGeometry>
            <meshStandardMaterial color="red" />
        </mesh>
    </>
  )
}
