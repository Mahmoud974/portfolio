"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Stacks } from "../stacks";
import TooltipSocial from "../Tooltip";

export default function Profile() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="flex justify-end">
      <section
  className="  h-[28rem] px-5 mx-auto py-16 rounded-2xl overflow-visible sticky top-24 
             backdrop-blur-md bg-black/60   border-white/10 shadow-[0_0_20px_rgba(0,255,120,0.03)]"
>

    
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-[#04F7A4] rounded-full flex justify-center items-center">
            <Image
              className="object-cover rounded-full w-full h-full mt-1"
              src={`/images/md.webp`}
              alt="photo profil"
              width={900}
              height={900}
              priority
            />
          </div>

          <div className="flex flex-col items-center">
            <ul>
              {/* Nom */}
              <div>
                <li className="text-4xl mb-2">
                 
                  <p className="font-[400] font-['Poppins']"><span className="font-[800] font-['Poppins']">M. </span> MAHMOUD</p>
                </li>

                {/* Description courte */}
                <p className="text-xl w-72 text-white/90">
                  Développeur Front-end React.js/ Next.js/ Cloud AWS
                </p>
              </div>

             
              <ul>
                <li className="text-xl font-bold my-3 mt-4">Mes réseaux :</li>
                <TooltipSocial />
              </ul>

              
              <li className="text-xl font-bold my-3">Mes stacks :</li>
              <ul
                className={`flex ${
                  isExpanded ? "space-x-4" : "-space-x-4"
                } rtl:space-x-reverse mt-2 cursor-pointer`}
                onClick={toggleExpanded}
                title="Clique pour développer les stacks"
              >
                <Stacks />
              </ul>
            </ul>
         
          </div>
        </section>
      </div>
    </>
  );
}
