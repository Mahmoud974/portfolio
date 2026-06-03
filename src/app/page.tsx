"use client";

import React from "react";
import Profile from "@/components/ui/Profile";
import About from "@/components/About";
import MyBackground from "@/components/MyBackground";
import Contact from "@/components/Contact";
import Projets from "@/components/Projets";
import Technos from "@/components/MySkills";

const SECTIONS = [
  { id: "about", content: <About /> },
  { id: "projects", content: <Projets /> },
  { id: "skills", content: <Technos /> },
  { id: "background", content: <MyBackground /> },
  { id: "contact", content: <Contact /> },
] as const;

export default function Home() {
  return (
    <>
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col xl:flex-row xl:items-start gap-8 xl:gap-12 mt-20 sm:mt-24 pb-8">
        <aside className="w-full xl:w-auto xl:shrink-0 flex justify-center xl:sticky xl:top-20 xl:self-start">
          <Profile />
        </aside>

        <div className="w-full min-w-0 flex-1 max-w-4xl mx-auto xl:mx-0 flex flex-col gap-16 sm:gap-20 md:gap-24">
          {SECTIONS.map(({ id, content }) => (
            <section key={id} id={id} className="scroll-mt-24 sm:scroll-mt-28">
              {content}
            </section>
          ))}
        </div>
      </main>

      <footer className="bg-[#04F7A4] min-h-12 py-3 flex items-center justify-center px-4">
        <p className="text-black text-sm sm:text-base md:text-xl text-center">
          2026 | Made by Mahmoud M.
        </p>
      </footer>
    </>
  );
}
