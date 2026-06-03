"use client";
import React from "react";
import Image from "next/image";

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
    label: "OS · Cloud",
    stacks: [
      { name: "Linux", image: "/images/linux.webp", core: true },
      { name: "AWS", image: "/images/aws.webp", core: true },
    ],
  },
  {
    label: "IaC · Config",
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
      { name: "Next.js", image: "/images/Next.js.webp" },
      { name: "TypeScript", image: "/images/typescript.webp" },
    ],
  },
];

function Tag({ stack }: { stack: Stack }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded text-[10px] font-medium border ${
        stack.core
          ? "bg-[#04F7A4]/5 border-[#04F7A4]/20 text-[#04F7A4]"
          : "bg-white/5 border-white/10 text-white/50"
      }`}
    >
      <img src={stack.image} alt={stack.name} className="w-3 h-3 object-contain" />
      {stack.name}
    </span>
  );
}

export default function Profile() {
  return (
    <div className="flex justify-end">
      {/* sticky top-24, pas de hauteur fixe — s'adapte au contenu */}
      <section className=" w-[260px] px-5 pt-12 pb-5 rounded-2xl sticky top-24 self-start backdrop-blur-md bg-black/60 border border-white/10">

        {/* Avatar — sort au dessus de la carte */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full ring-2 ring-[#04F7A4]">
          <Image
            className="object-cover rounded-full w-full h-full"
            src="/images/md.webp"
            alt="photo profil"
            width={178}
            height={178}
            priority
          />
        </div>

        <div className="flex flex-col items-center">

          {/* Nom */}
          <p className="text-2xl font-['Poppins'] font-[400] mb-0.5">
            <span className="font-[800]">M. </span>MAHMOUD
          </p>

          {/* Rôle */}
          <p className="text-[11px] text-white/40 font-mono text-center leading-tight mb-3">
            DevOps Engineer — AWS · Docker · Terraform
          </p>

          {/* Badge dispo */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#04F7A4]/5 border border-[#04F7A4]/20 mb-4 w-full justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#04F7A4] animate-pulse shrink-0" />
            <span className="text-[11px] text-[#04F7A4]">Disponible — Lyon, FR</span>
          </div>

          <div className="w-full border-t border-white/5 mb-3" />

          {/* Réseaux */}
          <p className="text-[9px] text-white/20 uppercase tracking-widest self-start mb-2">
            Réseaux
          </p>
          <div className="flex gap-2 self-start mb-3">
            <a
              href="https://www.linkedin.com/in/mahamoudmoussa1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-white/60 text-xs hover:border-white/20 hover:text-white transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/Mahmoud974"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-white/60 text-xs hover:border-white/20 hover:text-white transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>

          <div className="w-full border-t border-white/5 mb-3" />

          {/* Stack */}
          <p className="text-[9px] text-white/20 uppercase tracking-widest self-start mb-2">
            Stack
          </p>
          <div className="flex flex-col gap-2 w-full">
            {categories.map((cat) => (
              <div key={cat.label}>
                <p className="text-[9px] text-white/20 uppercase tracking-widest mb-1">
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.stacks.map((stack) => (
                    <Tag key={stack.name} stack={stack} />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}