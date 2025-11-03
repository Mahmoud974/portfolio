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
      className="flex flex-col justify-center items-center"
      aria-labelledby="background-heading"
    >
      {/* ===== TITRE ===== */}
      <div className="hidden md:flex text-center mx-auto font-bold justify-center -mt-6 -mb-16">
        <WordRotate
          className="text-[8rem] uppercase font-[800] text-white"
          words={["MON PARCOURS"]}
        />
      </div>

      <div>
        <h1 className="md:hidden mt-8 text-5xl uppercase font-[800] text-white text-center">
          MON PARCOURS
        </h1>
      </div>

      {/* ===== SOUS-TITRE ===== */}
      <div className="mt-6 text-center">
        <h2
          id="background-heading"
          className="text-3xl font-bold uppercase text-white transition-all duration-300"
        >
          {showEducation ? "EDUCATIONS" : "EXPERIENCES"}
        </h2>
        <div className="h-2 mt-2 w-20 bg-[#04F7A4] mx-auto rounded-full"></div>
      </div>

  
      <div className="flex justify-center mt-6 items-center gap-3">
        {/* Icône gauche */}
        <GraduationCap
          className={`w-6 h-6 transition-colors duration-300 ${
            showEducation ? "text-[#04F7A4]" : "text-gray-500"
          }`}
        />

        {/* Switch */}
        <button
          onClick={() => setShowEducation(!showEducation)}
          className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
            showEducation ? "bg-gray-300" : "bg-[#04F7A4]"
          }`}
          aria-label="Basculer entre éducation et expérience"
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-black transition-transform duration-300 ease-in-out ${
              showEducation ? "translate-x-0" : "translate-x-[24px]"
            }`}
          />
        </button>

        {/* Icône droite */}
        <Briefcase
          className={`w-6 h-6 transition-colors duration-300 ${
            !showEducation ? "text-[#04F7A4]" : "text-gray-500"
          }`}
        />
      </div>

    
      {showEducation && (
        <div className="mt-10 space-y-12 animate-fadeIn">
          {/* AWS */}
          <div className="flex flex-col items-center">
            <Image
              className="object-cover w-24 h-auto mt-4"
              src={`/images/awslogo.webp`}
              alt="Logo AWS"
              width={1000}
              height={1000}
              priority
            />
            <ul className="gap-5 flex flex-col justify-center mt-4 text-center md:text-left">
              {education
                .filter(
                  (item) => item.organization === "Amazon Web Services (AWS)"
                )
                .map((item, index) => (
                  <li key={index}>
                    <div className="flex flex-col">
                      <h3 className="md:text-2xl text-lg my-2 text-white">
                        {item.title}
                      </h3>
                      <ul className="list-disc text-gray-400 md:text-lg text-md md:w-5/6 mx-auto md:mx-0 pl-5">
                        {item.description?.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
 
          <div className="flex flex-col items-center">
            <Image
              className="object-cover w-64 h-auto mt-4"
              src={`/images/ocs.webp`}
              alt="Logo OpenClassrooms"
              width={1000}
              height={1000}
              priority
            />
            <ul className="gap-5 flex flex-col justify-center mt-4 text-center md:text-left">
              {education
                .filter((item) => item.organization === "OpenClassrooms")
                .map((item, index) => (
                  <li key={index}>
                    <div className="flex flex-col">
                      <h3 className="md:text-2xl text-lg my-2 text-white">
                        {item.title}
                      </h3>
                      <ul className="list-disc text-gray-400 md:text-lg text-md md:w-5/6 mx-auto md:mx-0 pl-5">
                        {item.description?.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}

      
      {!showEducation && (
        <ul
          key="experience-section"
          className="gap-5 flex flex-col justify-center mt-10 animate-fadeIn"
          role="list"
        >
          {experience.map((item, index) => (
            <li key={index}>
              <div className="flex flex-col text-center md:text-left">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <span className="mb-3 text-[#04F7A4] text-lg font-semibold">
                  {item.role.join(", ")}
                </span>
                <ul className="flex gap-2 flex-wrap justify-center md:justify-start mb-3">
                  {item.organization.map((org, id) => (
                    <li
                      key={id}
                      className="bg-emerald-950 text-[#04F7A4] text-sm rounded-full px-3 py-1"
                    >
                      {org}
                    </li>
                  ))}
                </ul>
                <ul className="list-disc text-gray-400 md:text-lg text-md md:w-5/6 mx-auto md:mx-0 pl-5">
                  {item.description?.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
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
