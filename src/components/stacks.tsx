"use client";
import Image from "next/image";
import React from "react";

type Stack = {
  name: string;
  image: string;
  core?: boolean;
};

type Category = {
  label: string;
  stacks: Stack[];
};

const categories: Category[] = [
  {
    label: "Cloud",
    stacks: [
      { name: "AWS", image: "/images/aws.webp", core: true },
      { name: "Linux", image: "/images/linux.webp", core: true },
    ],
  },
  {
    label: "IaC",
    stacks: [
      { name: "Terraform", image: "/images/terraform.webp", core: true },
      { name: "Ansible", image: "/images/ansible.webp" },
    ],
  },
  {
    label: "Containers",
    stacks: [
      { name: "Docker", image: "/images/docker.webp", core: true },
      { name: "Kubernetes", image: "/images/k8s1.webp", core: true },
    ],
  },
  {
    label: "CI/CD",
    stacks: [
      { name: "GitLab CI", image: "/images/gitlab.webp" },
      { name: "GitHub Actions", image: "/images/github.webp" },
    ],
  },
  {
    label: "Monitoring",
    stacks: [
      { name: "Prometheus", image: "/images/prometheus.webp" },
      { name: "Grafana", image: "/images/grafana.webp" },
    ],
  },
  {
    label: "Code",
    stacks: [
      { name: "Python", image: "/images/python.webp" },
      { name: "Next.js", image: "/images/next.js.webp" },
      { name: "TypeScript", image: "/images/typescript.webp" },
    ],
  },
];

function Pill({ stack }: { stack: Stack }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
        stack.core
          ? "bg-[#04F7A4]/10 border-[#04F7A4]/30 text-[#04F7A4]"
          : "bg-white/5 border-white/10 text-white/70"
      }`}
    >
      
     <Image
  src={stack.image}
  alt={stack.name}
  width={14}
  height={14}
  className="w-3.5 h-3.5 object-contain rounded-sm"
/>
      {stack.name}
    </span>
  );
}

export function Stacks() {
  return (
    <div className="flex flex-col gap-3 mb-10">
      {categories.map((cat) => (
        <div key={cat.label} className="flex items-start gap-3">
          <span className="text-[10px] text-white/30 uppercase tracking-widest w-14 text-right pt-1 shrink-0">
            {cat.label}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {cat.stacks.map((stack) => (
              <Pill key={stack.name} stack={stack} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}