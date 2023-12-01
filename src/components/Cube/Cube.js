import {React,useRef} from 'react'
import {useFrame} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
export default function Cube({position}) {
    const cubeRef=useRef()
    useFrame((state,delta)=>{
        cubeRef.current.rotation.y+=0.05
        
    })
  return (
    <>
      <OrbitControls/>
       <ambientLight />
        <mesh ref={cubeRef} position={position}>
            <boxGeometry args={[1,1,1]}></boxGeometry>
            <meshStandardMaterial color="red" />
        </mesh>
    </>
  )
}
