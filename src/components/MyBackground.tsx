import { Education, education } from "@/app/db/education"; // Importe aussi "experience" si tu as un fichier similaire
import React, { useState } from "react";
import Image from "next/image";
import WordRotate from "./ui/word-rotate";
import { GraduationCap, Briefcase } from "lucide-react"; // Import des icônes

// Fake data pour l'exemple, remplace avec tes données d'expérience
const experience = [
  {
    title: "Développeur Front-end",
    description: [
      "Développement d'applications web avec React et Next.js",
      "Optimisation des performances et accessibilité",
      "Création de composants UI réutilisables",
    ],
  },
  {
    title: "Développeur Back-end",
    description: [
      "Conception et maintenance d'API REST",
      "Gestion de bases de données relationnelles avec PostgreSQL",
      "Mise en place d'authentification sécurisée avec JWT",
    ],
  },
];

export default function MyBackground() {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <section className="justify-center flex flex-col">
      <div className="flex text-center mx-auto font-bold justify-center -mt-6 -mb-16">
        <WordRotate
          className="text-[8rem] uppercase font-[800] text-white dark:text-white"
          words={["BACKGROUND"]}
        />
      </div>

      {/* Titre dynamique basé sur l'état */}
      <div>
        <p className="text-3xl font-bold text-center mt-6">
          {showEducation ? "EDUCATIONS" : "EXPERIENCE"}
        </p>
        <div className="h-2 mt-2 w-20 bg-[#04F7A4] mx-auto relative"></div>
      </div>
      {/* Toggle */}
      <div className="flex justify-center mt-6 items-center gap-2">
        <GraduationCap className="w-6 h-6 text-gray-500" />

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={!showEducation}
            onChange={() => setShowEducation(!showEducation)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2   dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-black peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#04F7A4]"></div>
        </label>

        {/* Icône valise */}
        <Briefcase className="w-6 h-6 text-gray-500" />
      </div>

      <Image
        className="object-cover w-80 h-auto mt-12 flex justify-start"
        src={`/images/ocs.png`}
        alt={`Logo openclassrooms`}
        width={1000}
        height={1000}
        priority
      />

      {/* Liste dynamique : Education ou Expérience */}
      <ul className="gap-5 mt-6 flex flex-col justify-center mx-auto">
        {showEducation
          ? education.map((item: Education, index: number) => (
              <li key={index}>
                <div className="flex flex-col">
                  <p className="text-2xl my-2">{item.title}</p>
                  <ul>
                    {item.description?.map((description, index) => (
                      <li key={index} className="text-lg text-gray-600 w-5/6">
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))
          : experience.map((item, index) => (
              <li key={index}>
                <div className="flex flex-col">
                  <p className="text-2xl my-2">{item.title}</p>
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
