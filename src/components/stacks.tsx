"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Next.js",
    designation: "Next.js",
    image: "/images/nextjs.png",
  },
  {
    id: 2,
    name: "TypeScript",
    designation: "Product Manager",
    image: "/images/typescript.png",
  },
  {
    id: 3,
    name: "Prisma",
    designation: "Prisma",
    image: "/images/prisma.png",
  },
  {
    id: 4,
    name: "NextAuth",
    designation: "NextAuth",
    image: "/images/nextauth.png",
  },
  {
    id: 5,
    name: "PostgreSQL",
    designation: "PostgreSQL",
    image: "/images/Postgresql.svg",
  },
  {
    id: 6,
    name: "Tailwindcss",
    designation: "Tailwindcss",
    image: "/images/tailwindcss.png",
  },
];

export function Stacks() {
  return (
    <div className="flex cursor-pointer  flex-row items-center justify-center mb-10  ">
      <AnimatedTooltip items={people} />
    </div>
  );
}
