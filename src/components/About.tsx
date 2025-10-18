"use client";
import React, { useEffect  } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Button } from "./ui/button";
import NumberTicker from "./ui/number-ticker";
import WordRotate from "./ui/word-rotate";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  

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
        
       
        const sortedByPosition = visible.sort((a, b) => {
          const aRect = a.boundingClientRect;
          const bRect = b.boundingClientRect;
          return aRect.top - bRect.top;
        });
 
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

  return (
    <section className="text-center flex-col items-center space-y-13">
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

      <div>
        <h1 className="md:hidden mt-8 text-6xl uppercase font-[800] text-white dark:text-white">
          ABOUT ME
        </h1>
      </div>

     

      <div className="max-w-4xl">
        <p className="mt-4 md:text-3xl md:text-left text-white">
        <p className="mt-4 md:text-3xl md:text-left text-white">
  <strong>Développeur Front-End</strong> passionné spécialisé en <strong>React</strong> et <strong>Next.js</strong>, je conçois des interfaces web modernes, performantes et accessibles. 
  Mon objectif est d’allier <strong>design</strong>, <strong>expérience utilisateur</strong> et <strong>performance</strong> pour créer des applications fluides, fiables et optimisées pour le <strong>SEO</strong>. 
</p>

        </p>

        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/90">
  <li className="flex items-center gap-2">
    <CheckCircle2 className="mt-1 text-[#04F7A4]" />
    <span>Développement moderne avec <strong>React</strong>, <strong>Next.js</strong></span>
  </li>
  <li className="flex items-center gap-2">
    <CheckCircle2 className="mt-1 text-[#04F7A4]" />
    <span>Création d’interfaces réactives et responsives</span>
  </li>
  <li className="flex items-center gap-2">
    <CheckCircle2 className="mt-1 text-[#04F7A4]" />
    <span>Optimisation  du <strong> SEO</strong> et de l’<strong>accessibilité</strong></span>
  </li>
  <li className="flex items-center gap-2">
    <CheckCircle2 className="mt-1 text-[#04F7A4]" />
    <span>Collaboration efficace avec les designers</span>

  </li>
</ul>


        <div className="flex justify-start">
          <Button className="my-6 bg-[#04F7A4] px-12 py-6 rounded-none">
            <p className="text-xl text-black mr-2">Télécharger CV</p>
            <AiOutlineDownload className="text-xl text-black" />
          </Button>
        </div>
      </div>

      <ul className="flex md:flex-row mt-4 flex-col md:justify-between space-y-14 md:space-y-0 md:space-x-16 justify-center items-center">
        <li className="flex flex-col items-start text-7xl">
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
        <li className="flex flex-col items-start text-7xl">
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
        <li className="flex flex-col items-start text-7xl">
          <div className="flex items-center text-8xl">
            <span className="text-5xl font-[900] text-[#04F7A4]">+</span>
            <NumberTicker value={3} className="text-white font-bold ml-2" />
          </div>
          <div className="flex items-start">
            <div className="bg-[#04F7A4] w-8 h-1 mt-3"></div>
            <div className="text-3xl ml-2 text-left">
              <p className="uppercase">Années</p>
              <p className="uppercase"> d’expérience</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
function setActiveSection(id: string) {
  throw new Error("Function not implemented.");
}

