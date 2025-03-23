"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Next.js",
    designation: "Next.js",
    image: "/images/nextjs.webp",
  },
  {
    id: 2,
    name: "TypeScript",
    designation: "Product Manager",
    image: "/images/typescript.webp",
  },
  {
    id: 3,
    name: "Prisma",
    designation: "Prisma",
    image: "/images/prisma.webp",
  },
  {
    id: 4,
    name: "NextAuth",
    designation: "NextAuth",
    image: "/images/nextauth.webp",
  },
  {
    id: 5,
    name: "PostgreSQL",
    designation: "PostgreSQL",
    image: "/images/postgres.webp",
  },
  {
    id: 6,
    name: "Tailwindcss",
    designation: "Tailwindcss",
    image: "/images/tailwindcss.webp",
  },
];

export function Stacks() {
  return (
    <div className="flex cursor-pointer  flex-row items-center justify-center mb-10  ">
      <AnimatedTooltip items={people} />
    </div>
  );
}
