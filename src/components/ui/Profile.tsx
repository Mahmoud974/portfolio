"use client";
import React, { useState } from "react";
import Image from "next/image";

const stacks = [
  { src: "/images/nextjs.png", alt: "Logo Next.js", name: "Next.js" },
  { src: "/images/typescript.png", alt: "Logo TypeScript", name: "TypeScript" },
  { src: "/images/prisma.png", alt: "Logo Prisma", name: "Prisma" },
  {
    src: "/images/tailwindcss.png",
    alt: "Logo Tailwindcss",
    name: "Tailwindcss",
  },
  { src: "/images/nextauth.png", alt: "Logo NextAuth", name: "NextAuth" },
  { src: "/images/Postgresql.svg", alt: "Logo PostgreSQL", name: "PostgreSQL" },
];

export default function Profile() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="flex justify-end">
        <section className="bg-[#0f0f0f] h-96 px-5 mx-auto py-16 rounded-2xl overflow-visible sticky top-24">
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-[#04F7A4] rounded-full flex justify-center items-center">
            <Image
              className="object-cover rounded-full w-full h-full mt-1"
              src={`/images/md.png`}
              alt="photo profil"
              width={900}
              height={900}
              priority
            />
          </div>

          <div className="flex flex-col items-center">
            <ul>
              <div>
                <li className="text-5xl mb-4">
                  <p className="font-[400] font-['Poppins']">MOUSSA</p>
                  <p className="font-[800] font-['Poppins']">MAHMOUD</p>
                </li>
              </div>
              <li className="w-56 text-xl mb-2">
                I’m a front developper, looking to work with you!
              </li>
              <li className="text-xl font-bold my-3">Mes stacks :</li>
              <ul
                className={`flex ${
                  isExpanded ? "space-x-4" : "-space-x-4"
                } rtl:space-x-reverse mt-2`}
                onClick={toggleExpanded}
              >
                {stacks.map((stack, index) => (
                  <li key={index} className="relative group">
                    <Image
                      className="object-contain w-10 h-10 border-2 bg-black border-[#0f0f0f] rounded-full dark:border-gray-800 cursor-pointer"
                      src={stack.src}
                      alt={stack.alt}
                      width={1000}
                      height={1000}
                    />
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-8 bg-gray-800 text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {stack.name}
                    </span>
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
