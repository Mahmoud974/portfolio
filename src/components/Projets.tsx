import { languages } from "@/app/db/languages";
import React from "react";
import WordRotate from "./ui/word-rotate";
import Image from "next/image";

export default function Projets() {
  return (
    <section className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 md:py-8">
      
      {/* Titre Desktop */}
      <div className="hidden md:flex text-center mx-auto font-bold justify-center -mt-4 md:-mt-6 lg:-mt-8 -mb-8 md:-mb-12 lg:-mb-16">
        <WordRotate
          className="text-[4rem] md:text-[6rem] lg:text-[7rem] xl:text-[8.9rem] uppercase font-[800] text-white"
          words={["MES"]}
        />
        <WordRotate
          className="text-[4rem] md:text-[6rem] lg:text-[7rem] xl:text-[8.9rem] ml-1 md:ml-2 uppercase font-[800] text-[#04F7A4]"
          words={["PROJETS"]}
        />
      </div>

      {/* Titre Mobile */}
      <div className="md:hidden">
        <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl uppercase font-[800] text-white text-center">
          MES <span className="text-[#04F7A4]">PROJETS</span>
        </h2>
      </div>

      {/* Sous-titre */}
      <div className="mt-6 sm:mt-8">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center uppercase px-2">
          Tech & outils favoris
        </p>
        <div className="h-1.5 sm:h-2 mt-2 w-16 sm:w-20 bg-[#04F7A4] mx-auto"></div>
      </div>

      {/* LOGOS */}
      <div className="flex justify-center mt-8 md:mt-12">
        <div className="max-w-[1000px] flex flex-wrap justify-center gap-4">
          
          {languages.map((item, index) => (
            <div
              key={index}
              className="relative group bg-white
              h-14 w-14
              min-[375px]:h-16 min-[375px]:w-16
              sm:h-20 sm:w-20
              md:h-20 md:w-20
              lg:h-24 lg:w-24
              flex items-center justify-center
              rounded-lg sm:rounded-xl
              hover:scale-105 transition-transform shadow-md"
            >
              <Image
                className="object-contain p-2 sm:p-3 md:p-4 lg:p-5"
                src={`/images/${item.tool.toLowerCase()}.webp`}
                alt={item.tool}
                width={100}
                height={100}
                priority={index < 8}
              />

              <span className="pointer-events-none absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white text-[9px] sm:text-[10px] font-semibold uppercase px-2 py-1 rounded-md shadow-lg whitespace-nowrap z-10">
                {item.tool}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
