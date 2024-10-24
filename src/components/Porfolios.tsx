import React from "react";
import Image from "next/image";
import { languages } from "@/app/db/languages";
import MySkills from "./MySkills";
import WordRotate from "./ui/word-rotate";

export default function Portfolios() {
  return (
    <section>
      <div className="md:flex hidden text-center mx-auto font-bold justify-center -mt-6 -mb-16">
        <WordRotate
          className="text-[9.6rem] uppercase font-[800] text-white dark:text-white"
          words={["MY"]}
        />
        <WordRotate
          className="text-[9.6rem] ml-2  uppercase font-[800] text-[#04F7A4] dark:text-white"
          words={["PROJETS"]}
        />
      </div>
      <div>
        <h1 className="md:hidden mt-8 text-5xl uppercase font-[800] text-white dark:text-white">
          MY PROJECTS
        </h1>
      </div>

      <div className="">
        <div>
          <p className="text-3xl font-bold text-center mt-6">MY SKILLS</p>
          <div className="h-2 mt-2 w-20 bg-[#04F7A4] mx-auto"></div>
        </div>
        <div className=" flex flex-wrap sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5 mt-12 justify-center items-center mx-auto">
          {languages.map((item, index) => (
            <div
              className="bg-[#fff] h-24 w-24 flex items-center  justify-center rounded-xl"
              key={index}
            >
              <Image
                className="object-cover w-auto h-auto p-3"
                src={`/images/${item.tool.toLowerCase()}.webp`}
                alt={item.tool.toUpperCase()}
                width={1000}
                height={1000}
                priority
              />
            </div>
          ))}
        </div>
      </div>
      <MySkills />
    </section>
  );
}
