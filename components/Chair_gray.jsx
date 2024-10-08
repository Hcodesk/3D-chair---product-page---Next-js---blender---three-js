import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Chair_gray(props) {
  const { nodes, materials } = useGLTF('/gray_chair.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair_.geometry}
        material={materials['Material.002']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2}
       
      />
    </group>
  )
}

useGLTF.preload('/gray_chair.glb')
