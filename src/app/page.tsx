"use client";
import React, { useEffect, useState } from "react";
import Profile from "@/components/ui/Profile";
import About from "@/components/About";

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
          
       <div className="flex items-center gap-4 -mt-8 mb-9">
     
         <div className="flex-1 h-px bg-gradient-to-r from-[#04F7A4] to-transparent"></div>
         
         <nav className="flex flex-wrap justify-end gap-3">
          {[
            { label: "About", id: "about" },
            { label: "Projects", id: "projects" },
            { label: "Skills", id: "skills" },
            { label: "Background", id: "background" },
            { label: "Contact", id: "contact" },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                 className={`group relative  flex  items-center gap-3 px-3 py-2 rounded-xl transition-colors border ${
                  isActive
                    ? "border-[#04F7A4] bg-[#04F7A4]/20 bg-black text-white"
                    : "border-white/10 bg-black text-white/90 hover:text-white hover:border-[#04F7A4]/40 hover:bg-[#04F7A4]/10"
                }`}
              >
               
                  <span className="font-medium">{item.label}</span>
                </a>
            );
          })}
        </nav>
       </div>
          <div id="about" className="scroll-mt-32">
            <About />
          </div>
          <div id="projects" className="scroll-mt-32">
            <Projets />
          </div>
          <div id="skills" className="scroll-mt-32">
            <Technos />
          </div>
          {/* <Porfolios /> */}
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

