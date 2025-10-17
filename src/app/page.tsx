"use client";
import React from "react";
import Profile from "@/components/ui/Profile";
import About from "@/components/About";

import MyBackground from "@/components/MyBackground";
import Contact from "@/components/Contact";
import Projets from "@/components/Projets";
import Technos from "@/components/MySkills";

export default function Home() {
  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-4">
        {["About", "Projects", "Skills", "Background", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative px-4 py-2 text-white rounded-full border border-[#04F7A4]/30 bg-black/40 backdrop-blur-sm hover:bg-[#04F7A4]/10 transition-all duration-300"
          >
            <span className="relative z-10">{item}</span>
            <span className="absolute inset-0 rounded-full bg-[#04F7A4]/20 opacity-0 hover:opacity-100 transition"></span>
          </a>
        ))}
      </nav>

      <main className="container flex-col justify-center h-full mx-auto flex md:flex-row mt-12 cursor-default">
        <Profile />

        <section className="max-w-4xl justify-center flex flex-col md:ml-16 md:px-0 px-12 cursor-pointer">
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
