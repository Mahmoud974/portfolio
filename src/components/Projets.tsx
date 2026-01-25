import { languages } from "@/app/db/languages";
import React from "react";
import WordRotate from "./ui/word-rotate";
import Image from "next/image";

export default function Projets() {
  const totalItems = languages.length;
  
  // Calculer les éléments vides nécessaires pour chaque breakpoint
  const emptyItems = {
    mobile: (3 - (totalItems % 3)) % 3,
    min375: (4 - (totalItems % 4)) % 4,
    sm: (5 - (totalItems % 5)) % 5,
    md: (6 - (totalItems % 6)) % 6,
    lg: (7 - (totalItems % 7)) % 7,
    xl: (8 - (totalItems % 8)) % 8,
  };

  return (
    <section className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 md:py-8">
  
      <div className="hidden md:flex text-center mx-auto font-bold justify-center -mt-4 md:-mt-6 lg:-mt-8 -mb-8 md:-mb-12 lg:-mb-16">
        <WordRotate
          className="text-[4rem] md:text-[6rem] lg:text-[7rem] xl:text-[8.9rem] uppercase font-[800] text-white dark:text-white"
          words={["MES"]}
        />
        <WordRotate
          className="text-[4rem] md:text-[6rem] lg:text-[7rem] xl:text-[8.9rem] ml-1 md:ml-2 uppercase font-[800] text-[#04F7A4] dark:text-white"
          words={["PROJETS"]}
        />
      </div>

      
      <div className="md:hidden">
        <h2 className="mt-4 sm:mt-6 md:mt-8 text-2xl sm:text-3xl md:text-4xl uppercase font-[800] text-white dark:text-white text-center">
          MES <span className="text-[#04F7A4]">PROJETS</span>
        </h2>
      </div>

      {/* Sous-titre */}
      <div className="mt-6 sm:mt-8 md:mt-8 lg:mt-6">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center uppercase px-2">
          Tech & outils favoris
        </p>
        <div className="h-1.5 sm:h-2 mt-2 w-16 sm:w-20 bg-[#04F7A4] mx-auto"></div>
      </div>
 
      <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
        <div className="w-full max-w-[800px] px-2 sm:px-0">
         
          <div className="grid grid-cols-3 min-[375px]:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 justify-items-center">
            {languages.map((item, index) => (
              <div
                key={index}
                className="relative group bg-white h-14 w-14 min-[375px]:h-16 min-[375px]:w-16 sm:h-20 sm:w-20 md:h-20 md:w-20 lg:h-24 lg:w-24 flex items-center justify-center rounded-lg sm:rounded-xl hover:scale-105 transition-transform shadow-md"
              >
                <Image
                  className="object-contain w-auto h-auto p-2 min-[375px]:p-2.5 sm:p-3 md:p-4 lg:p-5"
                  src={`/images/${item.tool.toLowerCase()}.webp`}
                  alt={item.tool.toUpperCase()}
                  width={100}
                  height={100}
                  priority={index < 8}
                />
                <span className="pointer-events-none absolute -bottom-6 min-[375px]:-bottom-7 sm:-bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white text-[8px] min-[375px]:text-[9px] sm:text-[10px] font-semibold uppercase px-1.5 min-[375px]:px-2 py-0.5 min-[375px]:py-1 rounded-md shadow-lg whitespace-nowrap z-10">
                  {item.tool}
                </span>
              </div>
            ))}
            {/* Éléments vides pour centrer la dernière ligne - Mobile (3 colonnes) */}
            {emptyItems.mobile > 0 && Array.from({ length: emptyItems.mobile }).map((_, i) => (
              <div key={`empty-mobile-${i}`} className="block min-[375px]:hidden" aria-hidden="true" />
            ))}
            {/* Éléments vides pour centrer la dernière ligne - min-[375px] (4 colonnes) */}
            {emptyItems.min375 > 0 && Array.from({ length: emptyItems.min375 }).map((_, i) => (
              <div key={`empty-375-${i}`} className="hidden min-[375px]:block sm:hidden" aria-hidden="true" />
            ))}
            {/* Éléments vides pour centrer la dernière ligne - sm (5 colonnes) */}
            {emptyItems.sm > 0 && Array.from({ length: emptyItems.sm }).map((_, i) => (
              <div key={`empty-sm-${i}`} className="hidden sm:block md:hidden" aria-hidden="true" />
            ))}
            {/* Éléments vides pour centrer la dernière ligne - md (6 colonnes) */}
            {emptyItems.md > 0 && Array.from({ length: emptyItems.md }).map((_, i) => (
              <div key={`empty-md-${i}`} className="hidden md:block lg:hidden" aria-hidden="true" />
            ))}
            {/* Éléments vides pour centrer la dernière ligne - lg (7 colonnes) */}
            {emptyItems.lg > 0 && Array.from({ length: emptyItems.lg }).map((_, i) => (
              <div key={`empty-lg-${i}`} className="hidden lg:block xl:hidden" aria-hidden="true" />
            ))}
            {/* Éléments vides pour centrer la dernière ligne - xl (8 colonnes) */}
            {emptyItems.xl > 0 && Array.from({ length: emptyItems.xl }).map((_, i) => (
              <div key={`empty-xl-${i}`} className="hidden xl:block" aria-hidden="true" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}