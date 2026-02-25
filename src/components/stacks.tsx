"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const stacks = [
 
  {
    id: 1,
    name: "Next.js",
    designation: "React Framework",
    image: "/images/nextjs.webp",
  },
  {
    id: 2,
    name: "TypeScript",
    designation: "Typed JavaScript",
    image: "/images/typescript.webp",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    designation: "Styling",
    image: "/images/tailwindcss.webp",
  },
  {
    id: 4,
    name: "Gitlab",
    designation: "Styling",
    image: "/images/gitlab.webp",
  },

  
  {
    id: 7,
    name: "Docker",
    designation: "Containerization",
    image: "/images/docker.webp",
  },
  {
    id: 8,
    name: "Kubernetes",
    designation: "Orchestration",
    image: "/images/k8s1.webp",
  },
  {
    id: 9,
    name: "AWS",
    designation: "Cloud Provider",
    image: "/images/aws.webp",
  },
  {
    id: 10,
    name: "Terraform",
    designation: "Infrastructure as Code",
    image: "/images/terraform.webp",
  },
];

export function Stacks() {
  return (
    <div className="flex cursor-pointer flex-row items-center justify-center mb-10">
      <AnimatedTooltip items={stacks} />
    </div>
  );
}