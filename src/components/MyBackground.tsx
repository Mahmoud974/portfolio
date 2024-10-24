import { Education, education } from "@/app/db/education";
import React, { useState } from "react";
import Image from "next/image";
import WordRotate from "./ui/word-rotate";
import { GraduationCap, Briefcase } from "lucide-react";
import { experience } from "@/app/db/experience";

export default function MyBackground() {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <section
      className="justify-center flex flex-col "
      aria-labelledby="background-heading"
    >
      <div className="md:flex hidden text-center mx-auto font-bold justify-center -mt-6 -mb-16">
        <WordRotate
          className="text-[8rem] uppercase font-[800] text-white dark:text-white"
          words={["BACKGROUND"]}
        />
      </div>
      <div>
        <h1 className="md:hidden mt-8 text-5xl uppercase font-[800] text-white dark:text-white">
          BACKGROUND
        </h1>
      </div>

      <div>
        <h2
          id="background-heading"
          className="text-3xl font-bold text-center mt-6"
        >
          {showEducation ? "EDUCATIONS" : "EXPERIENCES"}
        </h2>
        <div className="h-2 mt-2 w-20 bg-[#04F7A4] mx-auto relative"></div>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mt-6 items-center gap-2">
        <GraduationCap className="w-6 h-6 text-gray-500" aria-hidden="true" />
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={!showEducation}
            onChange={() => setShowEducation(!showEducation)}
            aria-label={`Afficher ${
              showEducation ? "l'expérience" : "l'éducation"
            }`}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-black peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#04F7A4]"></div>
        </label>
        <Briefcase className="w-6 h-6 text-gray-500" aria-hidden="true" />
      </div>

      {showEducation && (
        <Image
          className="object-cover w-80 h-auto mt-7 mx-auto flex justify-start -mb-5"
          src={`/images/ocs.png`}
          alt={`Logo OpenClassrooms`}
          width={1000}
          height={1000}
          priority
        />
      )}

      {/* Liste dynamique : Education ou Expérience */}
      <ul className="gap-5 flex flex-col justify-center mt-8" role="list">
        {showEducation
          ? education.map((item: Education, index: number) => (
              <li key={index} role="listitem">
                <div className="flex flex-col md:text-left   ">
                  <h3 className="md:text-2xl text-lg my-2">{item.title}</h3>
                  <ul className="">
                    {item.description?.map((description, index) => (
                      <li
                        key={index}
                        className="md:text-lg text-md  text-gray-600 md:w-5/6 "
                      >
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))
          : experience.map((item, index) => (
              <li key={index} role="listitem">
                <div className="flex flex-col">
                  <h3 className="text-2xl  font-bold  ">{item.title} </h3>
                  <span className="  mb-3 text-white text-lg ">
                    {item.role.join(", ")}
                  </span>

                  <ul className="flex gap-3 flex-wrap mb-3">
                    {item.organization.map((tag, id) => (
                      <li
                        key={id}
                        className="bg-emerald-950 text-[#04F7A4] text-md rounded-full px-3 py-1"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {item.description?.map((description, index) => (
                      <li
                        key={index}
                        className="md:text-lg text-md  text-gray-600 md:w-5/6"
                      >
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
