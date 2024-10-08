import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Chair_green(props) {
  const { nodes, materials } = useGLTF('/green_chair.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair_.geometry}
        material={materials['Material.002']}
        rotation={[Math.PI / 2, 0, 0]}
       scale = {2}
      />
    </group>
  )
}

useGLTF.preload('/green_chair.glb')
