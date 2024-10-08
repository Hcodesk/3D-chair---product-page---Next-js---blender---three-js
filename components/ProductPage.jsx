'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import Iphone from "@/components/Iphone";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import Image from "next/image";
import Chair from './Chair';
import { Chair_gray } from './Chair_gray';
import { Chair_green } from './Chair_green';

export default function ProductPage() {
  const [selectedModel, setSelectedModel] = useState('chair'); // état pour suivre le modèle sélectionné

  return (
    <section className='bg-[#F4F4F4] flex justify-center flex-col items-center h-[715px] '>
      <div className='flex justify-between items-center px-8 border'>
       
        {/* bloc image produit */}
        <div className="h-[50vh] w-[50vh] border">
          <Canvas className='bg-orange-400 ' >
            <Environment preset="studio" />
            <OrbitControls autoRotate autoRotateSpeed={5} />
            {/* Affichage conditionnel des modèles en fonction de l'état */}
            {selectedModel === 'chair' && <Chair />}
            {selectedModel === 'gray_chair' && <Chair_gray />}
            {selectedModel === 'green_chair' && <Chair_green />}
          </Canvas>
        </div>

        {/* bloc description */}
        <div className="flex flex-col gap-2 ml-3">
          <p className='text-[32px] text-black font-normal'>Gaming Chair Force</p>
          <p className='text-[20px] text-black font-normal'>New collection </p>
          <p className='text-[20px] text-black'>120 $</p>
          <p>
            <Button variant="outline" className='font-light text-[14px] px-4 rounded-full'>Add to cart +</Button>
          </p>
        </div>
      </div>

      
      <div className='flex w-40 bg-white justify-center mt-3 mx-96 gap-2 border rounded-full py-4'>
        <button
          className='border rounded-full w-8 h-8 bg-sky-600'
          onClick={() => setSelectedModel('chair')} // Afficher la chaise principal
        ></button>
        <button
          className='border rounded-full w-8 h-8 bg-gray-300'
          onClick={() => setSelectedModel('gray_chair')} // Afficher la chaise grise
        ></button>
        <button
          className='border rounded-full w-8 h-8 bg-green-600'
          onClick={() => setSelectedModel('green_chair')} // Afficher la chaise verte
        ></button>
      </div>

    
    </section>
  )
}
