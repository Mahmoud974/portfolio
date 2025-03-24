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
        <section className="bg-[#0f0f0f] h-[30rem] px-5 mx-auto py-16 rounded-2xl overflow-visible sticky top-24">
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
              <div>
                <li className="text-5xl mb-4">
                  <p className="font-[400] font-['Poppins']">MOUSSA</p>
                  <p className="font-[800] font-['Poppins']">MAHMOUD</p>
                </li>
              </div>
              <li className="w-56 text-xl mb-2">
                I’m a front developper, looking to work with you!
              </li>
              <ul>
                <li className="text-xl font-bold my-1">Mes reseaux :</li>
                <TooltipSocial />
              </ul>
              <li className="text-xl font-bold my-3">Mes stacks :</li>
              <ul
                className={`flex ${
                  isExpanded ? "space-x-4" : "-space-x-4"
                } rtl:space-x-reverse mt-2`}
                onClick={toggleExpanded}
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
