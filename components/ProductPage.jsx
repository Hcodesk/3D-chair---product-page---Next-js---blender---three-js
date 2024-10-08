"use client";
import React, { useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import Chair from "./Chair";
import { Chair_gray } from "./Chair_gray";
import { Chair_green } from "./Chair_green";
import QuantityInput from "./Increment";
import UnstyledButtonCustom from "./AddToCard";
import {useTypewriter, Cursor} from 'react-simple-typewriter'

export default function ProductPage() {
  const [selectedModel, setSelectedModel] = useState("chair");// état pour suivre le modèle sélectionné

  const {text} = useTypewriter({
    words : ['Devlopper', 'Designer', 'Photographer'],
    loop: {},
  })

  return (
    <section className="bg-[#F4F4F4] flex justify-center flex-col items-center h-[715px] ">
      <div className="flex justify-between items-end gap-10 px-8 border">
        {/* bloc image produit */}
        <div className="h-[50vh] w-[50vh] border">
          <Canvas className="bg-orange-400 ">
            <Environment preset="studio" />
            <OrbitControls autoRotate autoRotateSpeed={5} />
            {/* Affichage conditionnel des modèles en fonction de l'état */}
            {selectedModel === "chair" && <Chair />}
            {selectedModel === "gray_chair" && <Chair_gray />}
            {selectedModel === "green_chair" && <Chair_green />}
          </Canvas>
        </div>

        {/* bloc description */}
        <div className="h-[436px] justify-center flex flex-col gap-[12px] w-[472px]  ">
          <div className="flex flex-col gap-[16px] " >
            <div className="text-orange-600">HIGH CHAIR COMPANY</div>
            
            
            
            <div className="font-bold text-[36px]" >
             Office chair <span> {text} </span>       
             <Cursor/> 
            </div>

            <div className="text-[16px] ">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </div>
          </div>
          {/* prix et réduction */}
          <div className="w-[170px] h-[36px] flex gap-4 items-center">
            <div className=" text-[30px] font-bold flex items-center h-[36px] ">
              $125.00
            </div>

            <div
              className="h-[32px]
                rounded-[8px] bg-orange-200 font-bold text-orange-600 px-2 w-[48px] flex items-center "
            >
              <p>50%</p>
            </div>
          </div>

          {/*  prix barré */}
          <div className="line-through font-semibold text-[#B6BCC8] ">
            $250.00
          </div>

          <div className="flex justify-start ">
            <QuantityInput />
          </div>

          <div>
            <UnstyledButtonCustom />
          </div>
        </div>
      </div>

      <div className="flex w-40 bg-white justify-center mt-3 mx-96 gap-2 border 
        hover:scale-110 hover:transition-all rounded-full py-4">
        <button
          className="border rounded-full w-8 h-8 bg-sky-600"
          onClick={() => setSelectedModel("chair")} // Afficher la chaise principal
        ></button>
        <button
          className="border rounded-full w-8 h-8 bg-gray-300"
          onClick={() => setSelectedModel("gray_chair")} // Afficher la chaise grise
        ></button>
        <button
          className="border rounded-full w-8 h-8 bg-green-600"
          onClick={() => setSelectedModel("green_chair")} // Afficher la chaise verte
        ></button>
      </div>
    </section>
  );
}
