import { languages } from "@/app/db/languages";
import React from "react";
import WordRotate from "./ui/word-rotate";
import Image from "next/image";

export default function Projets() {
  return (
    <section>
      <div className="md:flex hidden text-center mx-auto font-bold justify-center -mt-6 -mb-16">
        <WordRotate
          className="text-[8.9rem] uppercase font-[800] text-white dark:text-white"
          words={["MES"]}
        />
        <WordRotate
          className="text-[8.9rem] ml-2  uppercase font-[800] text-[#04F7A4] dark:text-white"
          words={["PROJETS"]}
        />
      </div>
      <div>
        <h2 className="md:hidden mt-8 text-4xl uppercase font-[800] text-white dark:text-white">
          MES PROJETS
        </h2>
      </div>

      <div className="">
        <div>
          <p className="text-3xl font-bold text-center mt-6 uppercase">Tech & outils favoris</p>
          <div className="h-2 mt-2 w-20 bg-[#04F7A4] mx-auto"></div>
        </div>
        <div className=" flex flex-wrap sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5 mt-12 justify-center items-center mx-auto">
          {languages.map((item, index) => (
            <div
              key={index}
              className="relative group bg-[#fff] h-24 w-24 flex items-center justify-center rounded-xl"
            >
              <Image
                className="object-cover w-auto h-auto p-5"
                src={`/images/${item.tool.toLowerCase()}.webp`}
                alt={item.tool.toUpperCase()}
                width={1000}
                height={1000}
                priority
              />
              <span className="pointer-events-none absolute -bottom-2 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black text-white text-[10px] font-semibold uppercase px-2 py-1 rounded-full shadow-sm">
                {item.tool}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
