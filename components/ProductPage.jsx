"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import Iphone from "@/components/Iphone";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import Image from "next/image";
import Chair from './Chair';

export default function ProductPage() {
  return (
    <section className='bg-[#F4F4F4] flex justify-center flex-col items-center h-[100vh] '>
        <div className='flex justify-between items-center px-8 border  ' >
            <p className='text-black font-extralight text-[96px] mr-3  ' >
              Just <br />
              Buy <br />
              It
            </p>

            <div className=" h-[50vh] w-[50vh] border  " >
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 2, 10]} /> {/* Augmentez la distance ici */}
                    <Environment preset="studio" />
                    <OrbitControls/>
                    <Chair scale={[4,4,4]} /> {/* Ajustez l'échelle ici */}
                </Canvas>
           </div>

            <div className="flex flex-col gap-2 ml-3 " >
                <p className='text-[32px text-black ] text-[32px] font-normal ' >Gaming Chair Force</p>
                <p className='text-[32px text-black ] text-[20px] font-normal ' >New collection </p>
                <p className='text-[32px text-black ]  text-[20px] ' > 120 $ </p>
                <p>
                  <Button variant="outline" className='font-light text-[14px] px-4  rounded-full' >Add to cart + </Button>
                </p>

            </div>
        </div>

        <div className='flex w-40 bg-white  justify-center mt-3 mx-96 gap-2 border rounded-full py-4 ' >
            <div className='border rounded-full w-8 h-8 bg-black '></div>
            <div className='border rounded-full w-8 h-8 bg-red-600 '></div>
            <div className='border rounded-full w-8 h-8 bg-green-600 '></div>
        </div>

        <div className='flex justify-center mx-96 mt-8 gap-4'>

            <div className='flex flex-col justify-center items-center w-[220px] h-[126px] rounded-[20px]  bg-white  '>
                <Image src='/iphone12pro.png' width={100} height={100} alt='' />
                <p className='text-[20px] font-normal border-black mb-2 ' >Iphone 12 pro</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[220px] h-[126px] rounded-[20px]  bg-white  '>
                <Image src='/iphone12pro.png' width={100} height={100} alt='' />
                <p className='text-[20px] font-normal border-black mb-2 ' >Iphone 12 pro</p>
            </div>
            
            <div className='flex flex-col justify-center items-center w-[220px] h-[126px] rounded-[20px]  bg-white  '>
                <Image src='/iphone12pro.png' width={100} height={100} alt='' />
                <p className='text-[20px] font-normal border-black mb-2 ' >Iphone 12 pro</p>
            </div>

           
        </div>

    </section>
  )
}
