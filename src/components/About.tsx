"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Button } from "./ui/button";
import NumberTicker from "./ui/number-ticker";
import WordRotate from "./ui/word-rotate";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const sectionIds = ["about", "projects", "skills", "background", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        const sortedByPosition = visible.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        );

        const bestSection = sortedByPosition.reduce((best, current) => {
          const currentRatio = current.intersectionRatio;
          const bestRatio = best.intersectionRatio;
          const currentTop = current.boundingClientRect.top;
          const bestTop = best.boundingClientRect.top;

          if (currentRatio > bestRatio + 0.2) return current;
          if (Math.abs(currentRatio - bestRatio) < 0.2) {
            return currentTop < bestTop ? current : best;
          }
          return best;
        });

        setActiveSection(bestSection.target.id);
      },
      {
        root: null,
        rootMargin: "0px 0px -20% 0px",
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    console.log("Section active :", activeSection);
  }, [activeSection]);

  return (
    <section
      id="about"
      className="text-center flex flex-col items-center space-y-13 px-4"
    >
      {/* Titre animé desktop */}
      <div className="md:flex hidden text-center mx-auto font-bold justify-center -mt-12 -mb-16">
        <WordRotate
          className="text-[8rem] uppercase font-[800] text-white dark:text-white"
          words={["PRESENTA"]}
        />
        <WordRotate
          className="text-[8rem] ml-2 uppercase font-[800] text-[#04F7A4] dark:text-white"
          words={["TION"]}
        />
      </div>

      {/* Titre mobile */}
      <div>
        <h1 className="md:hidden mt-8 text-6xl uppercase font-[800] text-white text-center">
          ABOUT ME
        </h1>
      </div>

      {/* Texte principal */}
      <div className="xl:max-w-4xl w-full flex flex-col items-center">
        <p className="mt-4 md:text-3xl text-center md:text-left text-white">
          <strong>Développeur Front-End</strong> passionné spécialisé en{" "}
          <strong>React</strong> et <strong>Next.js</strong>, je conçois des
          interfaces web modernes, performantes et accessibles. Mon objectif est
          d'allier <strong>design</strong>,{" "}
          <strong>expérience utilisateur</strong> et{" "}
          <strong>performance</strong> pour créer des applications fluides,
          fiables et optimisées pour le <strong>SEO</strong>.
        </p>

        {/* Liste de compétences — centrée sur mobile, 2 colonnes sur sm+ */}
        <ul className="mt-6 w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-white/90">
          <li className="flex items-start gap-3 justify-center sm:justify-start text-center sm:text-left">
            <CheckCircle2 className="mt-1 h-5 w-5 text-[#04F7A4] shrink-0" />
            <span className="leading-relaxed">
              Développement moderne avec <strong>React</strong> et{" "}
              <strong>Next.js</strong>
            </span>
          </li>

          <li className="flex items-start gap-3 justify-center sm:justify-start text-center sm:text-left">
            <CheckCircle2 className="mt-1 h-5 w-5 text-[#04F7A4] shrink-0" />
            <span className="leading-relaxed">
              Création d'interfaces réactives et responsives
            </span>
          </li>

          <li className="flex items-start gap-3 justify-center sm:justify-start text-center sm:text-left">
            <CheckCircle2 className="mt-1 h-5 w-5 text-[#04F7A4] shrink-0" />
            <span className="leading-relaxed">
              Optimisation du <strong>SEO</strong> et de l'
              <strong>accessibilité</strong>
            </span>
          </li>

          <li className="flex items-start gap-3 justify-center sm:justify-start text-center sm:text-left">
            <CheckCircle2 className="mt-1 h-5 w-5 text-[#04F7A4] shrink-0" />
            <span className="leading-relaxed">
              Collaboration efficace avec les designers
            </span>
          </li>
        </ul>

        {/* Bouton de téléchargement */}
        <div className="flex justify-center w-full">
          <Button className="my-6 bg-[#04F7A4] px-12 py-6 rounded-none">
            <p className="text-xl text-black mr-2">Télécharger CV</p>
            <AiOutlineDownload className="text-xl text-black" />
          </Button>
        </div>
      </div>

      {/* Statistiques — centrées sur mobile */}
      <ul className="flex md:flex-row mt-4 flex-col md:justify-between space-y-14 md:space-y-0 md:space-x-16 justify-center items-center w-full">
        <li className="flex flex-col items-center md:items-start text-7xl">
          <div className="flex items-center text-8xl">
            <span className="text-5xl font-[900] text-[#04F7A4]">+</span>
            <NumberTicker value={10} className="text-white font-bold ml-2" />
          </div>
          <div className="flex items-start">
            <div className="bg-[#04F7A4] w-8 h-1 mt-3"></div>
            <div className="text-3xl ml-2 text-left">
              <p>PROJETS</p>
              <p>TERMINÉS</p>
            </div>
          </div>
        </li>

        <li className="flex flex-col items-center md:items-start text-7xl">
          <div className="flex items-center text-8xl">
            <span className="text-5xl font-[900] text-[#04F7A4]">+</span>
            <NumberTicker value={1000} className="text-white font-bold ml-2" />
          </div>
          <div className="flex items-start">
            <div className="bg-[#04F7A4] w-8 h-1 mt-3"></div>
            <div className="text-3xl ml-2 text-left">
              <p>LIGNES DE</p>
              <p>CODE ÉCRITES</p>
            </div>
          </div>
        </li>

        <li className="flex flex-col items-center md:items-start text-7xl">
          <div className="flex items-center text-8xl">
            <span className="text-5xl font-[900] text-[#04F7A4]">+</span>
            <NumberTicker value={3} className="text-white font-bold ml-2" />
          </div>
          <div className="flex items-start">
            <div className="bg-[#04F7A4] w-8 h-1 mt-3"></div>
            <div className="text-3xl ml-2 text-left">
              <p>Années</p>
              <p>d'expérience</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}