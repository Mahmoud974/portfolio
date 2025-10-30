import { languages } from "@/app/db/languages";
import React from "react";
import WordRotate from "./ui/word-rotate";
import Image from "next/image";

export default function Projets() {
  return (
    <section>
      {/* Titre principal */}
      <div className="md:flex hidden text-center mx-auto font-bold justify-center -mt-6 -mb-16">
        <WordRotate
          className="text-[8.9rem] uppercase font-[800] text-white dark:text-white"
          words={["MES"]}
        />
        <WordRotate
          className="text-[8.9rem] ml-2 uppercase font-[800] text-[#04F7A4] dark:text-white"
          words={["PROJETS"]}
        />
      </div>

      {/* Version mobile du titre */}
      <div>
        <h2 className="md:hidden mt-8 text-4xl uppercase font-[800] text-white dark:text-white text-center">
          MES PROJETS
        </h2>
      </div>

      {/* Sous-titre */}
      <div className="mt-6">
        <p className="text-3xl font-bold text-center uppercase">
          Tech & outils favoris
        </p>
        <div className="h-2 mt-2 w-20 bg-[#04F7A4] mx-auto"></div>
      </div>

      {/* Grille centrée */}
      <div className="flex justify-center mt-12">
        <div className="max-w-[800px]">
          {/* Premières lignes (8 items par ligne) */}
          <div className="grid grid-cols-8 gap-6 justify-items-center mb-6">
            {languages.slice(0, 16).map((item, index) => (
              <div
                key={index}
                className="relative group bg-white h-24 w-24 flex items-center justify-center rounded-xl hover:scale-105 transition-transform"
              >
                <Image
                  className="object-cover w-auto h-auto p-5"
                  src={`/images/${item.tool.toLowerCase()}.webp`}
                  alt={item.tool.toUpperCase()}
                  width={1000}
                  height={1000}
                  priority
                />
                <span className="pointer-events-none absolute -bottom-2 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black text-white text-[10px] font-semibold uppercase px-2 py-1 rounded-full shadow-sm whitespace-nowrap">
                  {item.tool}
                </span>
              </div>
            ))}
          </div>

          {/* Dernière ligne centrée */}
          <div className="flex justify-center gap-6">
            {languages.slice(16).map((item, index) => (
              <div
                key={index}
                className="relative group bg-white h-24 w-24 flex items-center justify-center rounded-xl hover:scale-105 transition-transform"
              >
                <Image
                  className="object-cover w-auto h-auto p-5"
                  src={`/images/${item.tool.toLowerCase()}.webp`}
                  alt={item.tool.toUpperCase()}
                  width={1000}
                  height={1000}
                  priority
                />
                <span className="pointer-events-none absolute -bottom-2 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black text-white text-[10px] font-semibold uppercase px-2 py-1 rounded-full shadow-sm whitespace-nowrap">
                  {item.tool}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}