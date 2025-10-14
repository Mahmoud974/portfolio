import { education } from "@/app/db/education";
import React, { useState } from "react";
import Image from "next/image";
import WordRotate from "./ui/word-rotate";
import { GraduationCap, Briefcase } from "lucide-react";
import { experience } from "@/app/db/experience";

export default function MyBackground() {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <section
      className="justify-center flex flex-col"
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
        <div className="h-2 mt-2 w-20 bg-[#04F7A4] mx-auto"></div>
      </div>
 
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
          <div className="w-11 h-6 bg-gray-200 dark:bg-black peer-checked:bg-[#04F7A4] rounded-full relative">
            <div className="absolute top-0.5 left-[2px] w-5 h-5 bg-black rounded-full transition-all peer-checked:translate-x-full"></div>
          </div>
        </label>
        <Briefcase className="w-6 h-6 text-gray-500" aria-hidden="true" />
      </div>

      {/* Contenu conditionnel basé sur showEducation */}
      {showEducation && (
        <>
          <Image
            className="object-cover w-24 h-auto mt-7  "
            src={`/images/awslogo.webp`}
            alt="Logo AWS"
            width={1000}
            height={1000}
            priority
          />
          <ul className="gap-5 flex flex-col justify-center mt-3" role="list">
            {education
              .filter(
                (item) => item.organization === "Amazon Web Services (AWS)"
              )
              .map((item, index) => (
                <li key={index} role="listitem">
                  <div className="flex flex-col md:text-left">
                    <h3 className="md:text-2xl text-lg my-2">{item.title}</h3>
                    <ul>
                      {item.description?.map((desc, idx) => (
                        <li
                          key={idx}
                          className="md:text-lg text-md text-gray-600 md:w-5/6"
                        >
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
          </ul>
          <Image
            className="object-cover w-64 h-auto mt-7  "
            src={`/images/ocs.webp`}
            alt="Logo OpenClassrooms"
            width={1000}
            height={1000}
            priority
          />
          <ul className="gap-5 flex flex-col justify-center mt-3" role="list">
            {education
              .filter((item) => item.organization === "OpenClassrooms")
              .map((item, index) => (
                <li key={index} role="listitem">
                  <div className="flex flex-col md:text-left">
                    <h3 className="md:text-2xl text-lg my-2">{item.title}</h3>
                    <ul>
                      {item.description?.map((desc, idx) => (
                        <li
                          key={idx}
                          className="md:text-lg text-md text-gray-600 md:w-5/6"
                        >
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
          </ul>
        </>
      )}
      {!showEducation && (
        <ul className="gap-5 flex flex-col justify-center mt-3" role="list">
          {experience.map((item, index) => (
            <li key={index} role="listitem">
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <span className="mb-3 text-white text-lg">
                  {item.role.join(", ")}
                </span>
                <ul className="flex gap-3 flex-wrap mb-3">
                  {item.organization.map((org, id) => (
                    <li
                      key={id}
                      className="bg-emerald-950 text-[#04F7A4] text-md rounded-full px-3 py-1"
                    >
                      {org}
                    </li>
                  ))}
                </ul>
                <ul>
                  {item.description?.map((desc, idx) => (
                    <li
                      key={idx}
                      className="md:text-lg text-md text-gray-600 md:w-5/6"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
