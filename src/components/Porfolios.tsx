import React from "react";
import Image from "next/image";
import { languages } from "@/app/db/languages";
import MySkills from "./MySkills";

export default function Portfolios() {
  return (
    <section>
      <h2 className="font-['Poppins'] font-[800] uppercase text-9xl text-center">
        <span className="text-[#04F7A4]">my</span> <p>PORTFOLIOS</p>
      </h2>
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
