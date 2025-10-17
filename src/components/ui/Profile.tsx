"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Stacks } from "../stacks";
import TooltipSocial from "../Tooltip";

export default function Profile() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const sectionIds = ["about", "projects", "skills", "background", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: [0.2, 0.5, 0.8],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="flex justify-end">
      <section
  className="  h-[28rem] px-5 mx-auto py-16 rounded-2xl overflow-visible sticky top-24 
             backdrop-blur-md bg-black/60   border-white/10 shadow-[0_0_20px_rgba(0,255,120,0.03)]"
>

          {/* Photo de profil */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-[#04F7A4] rounded-full flex justify-center items-center">
            <Image
              className="object-cover rounded-full w-full h-full mt-1"
              src={`/images/md.webp`}
              alt="photo profil"
              width={900}
              height={900}
              priority
            />
          </div>

          <div className="flex flex-col items-center">
            <ul>
              {/* Nom */}
              <div>
                <li className="text-5xl mb-2">
                  <p className="font-[400] font-['Poppins']">MOUSSA</p>
                  <p className="font-[800] font-['Poppins']">MAHMOUD</p>
                </li>

                {/* Description courte */}
                <p className="text-xl w-72 text-white/90">
                  Développeur front-end React.js/ Next.js/ TypeScript
                </p>
              </div>

             
              <ul>
                <li className="text-xl font-bold my-3 mt-4">Mes réseaux :</li>
                <TooltipSocial />
              </ul>

              
              <li className="text-xl font-bold my-3">Mes stacks :</li>
              <ul
                className={`flex ${
                  isExpanded ? "space-x-4" : "-space-x-4"
                } rtl:space-x-reverse mt-2 cursor-pointer`}
                onClick={toggleExpanded}
                title="Clique pour développer les stacks"
              >
                <Stacks />
              </ul>
            </ul>
         
            <nav className="mt-6 flex flex-col gap-3 w-72">
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
                    className={`group  relative flex items-center gap-3 px-3 py-2 rounded-xl transition-colors border ${
                      isActive
                        ? "border-[#04F7A4] bg-[#04F7A4]/20 bg-black text-white"
                        : "border-white/10 bg-black text-white/90 hover:text-white hover:border-[#04F7A4]/40 hover:bg-[#04F7A4]/10"
                    }`}
                  >
                    <span
                      className={`inline-block h-2 w-2 rounded-full transition-colors ${
                        isActive ? "bg-[#04F7A4]" : "bg-white/40 group-hover:bg-[#04F7A4]"
                      }`}
                    ></span>
                    <span className="font-medium">{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        </section>
      </div>
    </>
  );
}
