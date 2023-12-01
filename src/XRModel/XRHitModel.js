import {React,useRef,useState} from 'react'
import {useThree} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import {useHitTest,Interactive,useXR} from "@react-three/xr"
import Model from './Model'
export default function XRHitModel() {
    const ringRef=useRef()
    const [cubes,setCubes]=useState([])
    const {isPresenting}=useXR()
    useHitTest((hitMatrix, hit) => {
        hitMatrix.decompose(
            ringRef.current.position, 
            ringRef.current.quaternion, 
            ringRef.current.scale);
            ringRef.current.rotation.set(-Math.PI/2,0,0)
      })
   useThree(({camera})=>{
    if(!isPresenting){
        camera.position.z=3
    }
   })
  const placeModel=(e)=>{
   let position=e.intersection.object.position.clone()
   let id=Date.now()
   setCubes([{position,id}])
  }
  return (
    <>
    <OrbitControls/>
     <ambientLight />
     {isPresenting && cubes.map(({position,id})=>{
        return <Model key={id} position={position}/>
     })}
     {
        isPresenting && (
            <Interactive onSelect={placeModel}>
      <mesh ref={ringRef} rotation-x={-Math.PI/2}>
          <ringGeometry args={[0.1,0.25,32]}></ringGeometry>
          <meshStandardMaterial color="white"/>
      </mesh>
      </Interactive>
        )
     }
     {!isPresenting && <Model/>}
     
  </>
  )
}
