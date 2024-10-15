import { Education, education } from "@/app/db/education";
import React from "react";
import Image from "next/image";

export default function MyBackground() {
  return (
    <section className="justify-center flex flex-col">
      <h2 className="font-['Poppins'] font-[800] uppercase text-9xl text-center mt-12   ">
        <span className="text-[#04F7A4]">my</span> <p>BACKGROUND</p>
      </h2>
      <div>
        <p className="text-3xl font-bold text-center mt-6">EDUCATIONS</p>
        <div className="h-2 mt-2 w-20 bg-[#04F7A4] mx-auto left-12 relative"></div>
      </div>
      <Image
        className="object-cover w-80 h-auto  mt-12 flex justify-start  "
        src={`/images/ocs.png`}
        alt={`Logo openclassrooms`}
        width={1000}
        height={1000}
        priority
      />
      <ul className=" gap-5 mt-6 flex flex-col justify-center mx-auto">
        {education.map((item: Education, index: number) => (
          <li key={index} className=" ">
            <div className="flex   flex-col  ">
              <p className="text-2xl my-2  ">{item.title}</p>
              <ul>
                {item.description?.map((description, index) => (
                  <li key={index} className="text-lg text-gray-600 w-5/6">
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
