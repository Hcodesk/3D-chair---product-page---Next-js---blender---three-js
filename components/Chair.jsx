import React, { useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three';

export default function Chair(props) {
  const { nodes, materials } = useGLTF('/office_chair.glb')

  // Charger les nouvelles textures
  const [
    albedoMap,
    aoMap,
    metallicMap,
    normalMap,
    roughnessMap,
  ] = useTexture([
    '/textures/Chair_albedo_green.jpg', // Texture albedo/diffuse
    '/textures/Chair_AO.jpeg',          // Texture Ambient Occlusion
    '/textures/Chair_metallic.jpeg',    // Texture métallique
    '/textures/Chair_normal.png',       // Texture normale
    '/textures/Chair_roughness.jpeg',   // Texture de rugosité
  ])

  albedoMap.encoding = THREE.sRGBEncoding;
 

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.531}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.Chair} // Utiliser le matériau modifié
          rotation={[Math.PI / 2, 0, 0]}
        />y
      </group>
    </group>
  )
}

useGLTF.preload('/office_chairtextures')