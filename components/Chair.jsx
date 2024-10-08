import React, { useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three';

export default function Chair(props) {
  const { nodes, materials } = useGLTF('/office_chair.glb')


  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.531}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.Chair} // Utiliser le matériau modifié
          rotation={[Math.PI / 2, 0, 0]}
          scale={3.8}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/office_chairtextures')