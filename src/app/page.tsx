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
      <main className="container flex-col justify-center h-full mx-auto flex md:flex-row mt-12 cursor-default">
        <Profile />

        <section className="max-w-4xl justify-center flex flex-col md:ml-16 md:px-0 px-12 cursor-pointer">
          <About />
          <Projets />

          <Technos />

          {/* <Porfolios /> */}
          <MyBackground />
          <Contact />
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
