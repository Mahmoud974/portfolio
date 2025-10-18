"use client";
import React, { useEffect, useState } from "react";
import Profile from "@/components/ui/Profile";
import About from "@/components/About";
import Menu from "@/components/Menu";
import MyBackground from "@/components/MyBackground";
import Contact from "@/components/Contact";
import Projets from "@/components/Projets";
import Technos from "@/components/MySkills";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
    <>
 

      <main className="container flex-col justify-center h-full mx-auto flex md:flex-row mt-12 cursor-default">
        <Profile />

        <section className="max-w-4xl justify-center flex flex-col md:ml-16 md:px-0 px-12 cursor-pointer">
          
          <Menu 
            activeSection={activeSection} 
            onSectionClick={setActiveSection} 
          />
          <div id="about" className="scroll-mt-32">
            <About />
          </div>
          <div id="projects" className="scroll-mt-32">
            <Projets />
          </div>
          <div id="skills" className="scroll-mt-32">
            <Technos />
          </div>
          
          <div id="background" className="scroll-mt-32">
            <MyBackground />
          </div>
          <div id="contact" className="scroll-mt-32">
            <Contact />
          </div>
        </section>
      </main>
      <footer className="bg-[#04F7A4] h-12 mt-3 flex items-center justify-center cursor-pointer">
        <p className="text-black md:text-2xl text-md text-center">
          2025 | Made by Mahmoud M.
        </p>
      </footer>
    </>
  );
}

