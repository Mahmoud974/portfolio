"use client";
import React from "react";
import Profile from "@/components/ui/Profile";
import About from "@/components/About";
import Porfolios from "@/components/Porfolios";
import MyBackground from "@/components/MyBackground";
import Contact from "@/components/Contact";
import AnimatedCursor from "react-animated-cursor";
export default function Home() {
  return (
    <>
      <AnimatedCursor />
      <main className=" container  flex-col justify-center h-full mx-auto flex md:flex-row mt-12    ">
        <Profile />

        <section className="max-w-4xl justify-center flex flex-col  md:ml-16 md:px-0 px-12 ">
          <About />
          <Porfolios />
          <MyBackground />
          <Contact />
        </section>
      </main>
      <footer className="bg-[#04F7A4] h-12 mt-3 flex items-center justify-center">
        <p className="text-black md:text-2xl text-md text-center ">
          2024 | Made by Mahmoud M.
        </p>
      </footer>
    </>
  );
}
