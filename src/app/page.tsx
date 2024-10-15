"use client";
import React from "react";
import Profile from "@/components/ui/Profile";
import About from "@/components/About";
import Porfolios from "@/components/Porfolios";
import MyBackground from "@/components/MyBackground";
import Title from "@/components/Title";

export default function Home() {
  return (
    <>
      <main className=" container justify-center h-full mx-auto flex flex-row mt-12">
        <Profile />

        <section className="max-w-4xl justify-center flex flex-col  ml-16 ">
          <About />
          <Porfolios />
          <MyBackground />
          <Title>
            Contact <span className="text-[#04F7A4]">me</span>
          </Title>
          <p className="w-3/3 mt-4 text-3xl  text-left text-white ">
            Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
            odit auting fugit sed thisnquia consequuntur magni dolores eos
            designer heresm qui ratione 💪
          </p>
          <div className="p-4 mx-auto max-w-8xl   font-[sans-serif]">
            <form className="mt-8 space-y-4 ">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-900 focus:bg-transparent text-sm outline-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-900 focus:bg-transparent text-sm outline-blue-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-900 focus:bg-transparent text-sm outline-blue-500"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full rounded-md px-4  bg-gray-900 focus:bg-transparent text-sm pt-3 outline-blue-500"
              ></textarea>
              <button
                type="button"
                className="text-black bg-[#04F7A4] hover:bg-[#1c6d52] tracking-wide rounded-md text-sm px-4 py-3 w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-[#04F7A4] h-12 mt-3 flex items-center justify-center">
        <p className="text-black text-2xl text-center ">
          2024 | Made by Mahmoud M.
        </p>
      </footer>
    </>
  );
}
